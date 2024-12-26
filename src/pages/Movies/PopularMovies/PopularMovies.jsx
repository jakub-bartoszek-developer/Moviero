import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { nanoid } from "nanoid";
import {
  Banner,
  Description,
  Genre,
  Genres,
  MovieDetails,
  OutOf,
  Poster,
  PosterWrapper,
  Rate,
  Rating,
  StarIcon,
  Votes,
  PopularMoviesList,
  Title,
  SimilarMoviesList,
  Container
} from "./styled";
import { Loader } from "../../../components/Loader/Loader";
import { Pagination } from "../../../components/Pagination/Pagination";
import { toMovie } from "../../../routes";
import { VerticalSection } from "../../../components/VerticalSection/styled";
import { HorizontalSection } from "../../../components/HorizontalSection/styled";
import { SectionHeader } from "../../../components/SectionHeader/styled";
import {
  fetchPopularMovies,
  fetchSimilarMovies,
  selectGenres,
  selectPopularMovies,
  selectRandomPopularMovie,
  selectSimilarMovies,
  selectStatus,
  selectTotalPages,
  setRandomPopularMovie
} from "../../../utils/redux/moviesSlice";
import { MovieTile } from "../../../components/MovieTile/MovieTile";

export const PopularMovies = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const popularMovies = useSelector(selectPopularMovies);
  const similarMovies = useSelector(selectSimilarMovies);
  const totalPages = useSelector(selectTotalPages);
  const genres = useSelector(selectGenres);
  const [currentMovie, setCurrentMovie] = useState(popularMovies[0]);
  const randomPopularMovie = useSelector(selectRandomPopularMovie);
  const movieGenres = genres?.filter((genre) => currentMovie?.genre_ids.includes(genre.id));
  const [cancel, setCancel] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const handleClickScroll = (e) => {
    const element = e.target;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "end"
      });
    }
  };

  useEffect(() => {
    if (searchParams.get("page")) {
      dispatch(fetchPopularMovies({ page: searchParams.get("page") }));
    }
  }, [searchParams]);

  useEffect(() => {
    if (popularMovies.length > 0) {
      dispatch(setRandomPopularMovie(popularMovies[Math.floor(Math.random() * 19)]));
    }
  }, [dispatch, popularMovies]);

  useEffect(() => {
    if (Object.keys(randomPopularMovie).length > 0) {
      setCurrentMovie(randomPopularMovie);
      setCancel(false);
    }
  }, [dispatch, randomPopularMovie]);

  useEffect(() => {
    if (!cancel && currentMovie && Object.keys(currentMovie).length > 0) {
      dispatch(fetchSimilarMovies({ genreIds: currentMovie.genre_ids.join("%2C") }));
      setCancel(true);
    }
  }, [dispatch, cancel, currentMovie]);

  switch (status) {
    case `success`:
      return (
        <Container ref={containerRef}>
          {currentMovie && (
            <Banner
              key={currentMovie.id}
              $bgImage={`https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path}`}
            >
              <MovieDetails>
                <Title to={toMovie({ id: currentMovie.id })}>{currentMovie.title}</Title>
                <Genres>
                  {movieGenres.map((genre) => (
                    <Genre key={nanoid()}>{genre.name}</Genre>
                  ))}
                </Genres>
                <Rating>
                  <StarIcon />
                  <Rate>
                    {currentMovie?.vote_average.toFixed(1)}/<OutOf>10</OutOf>
                    <Votes>&nbsp;{currentMovie?.vote_count} votes</Votes>
                  </Rate>
                </Rating>
                <Description>{currentMovie?.overview}</Description>
              </MovieDetails>
            </Banner>
          )}
          {similarMovies.length && (
            <HorizontalSection>
              <SectionHeader>Similar movies</SectionHeader>
              <SimilarMoviesList>
                {similarMovies.map((movie) => (
                  <PosterWrapper
                    $current={movie.id === currentMovie.id}
                    key={nanoid()}
                    onClick={(e) => {
                      handleClickScroll(e);
                      setCurrentMovie(movie);
                    }}
                  >
                    <Poster
                      loading="lazy"
                      id={movie.id}
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.name}
                    />
                  </PosterWrapper>
                ))}
              </SimilarMoviesList>
            </HorizontalSection>
          )}
          {popularMovies.length && (
            <VerticalSection>
              <SectionHeader>Popular movies</SectionHeader>
              <PopularMoviesList>
                {popularMovies.map((movie) => (
                  <MovieTile
                    genres={genres}
                    key={nanoid()}
                    movie={movie}
                  />
                ))}
              </PopularMoviesList>
            </VerticalSection>
          )}
          <Pagination
            containerRef={containerRef}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            totalPages={totalPages}
          />
        </Container>
      );
    case "loading":
      return <Loader />;
    default:
      return <>Error</>;
  }
};
