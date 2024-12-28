import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { PopularMoviesList, Container } from "./styled";
import {
 fetchPopularMovies,
 selectGenres,
 selectPopularMovies,
 selectRandomPopularMovie,
 selectStatus,
 selectTotalPages,
 setRandomPopularMovie
} from "../../../utils/redux/moviesSlice";
import { Loader } from "../../../components/Loader/Loader";
import { Pagination } from "../../../components/Pagination/Pagination";
import { VerticalSection } from "../../../components/VerticalSection/styled";
import { SectionHeader } from "../../../components/SectionHeader/styled";
import { MovieTile } from "../../../components/MovieTile/MovieTile";
import { Header } from "../../../components/Header/Header";

const PopularMovies = () => {
 const dispatch = useDispatch();
 const status = useSelector(selectStatus);
 const popularMovies = useSelector(selectPopularMovies);
 const randomPopularMovie = useSelector(selectRandomPopularMovie);
 const totalPages = useSelector(selectTotalPages);
 const genres = useSelector(selectGenres);
 const [currentMovie, setCurrentMovie] = useState(randomPopularMovie ?? {});
 const [searchParams, setSearchParams] = useSearchParams();
 const containerRef = useRef(null);

 useEffect(() => {
  const page = searchParams.get("page");
  if (page) {
   dispatch(fetchPopularMovies({ page }));
  }
 }, [searchParams, dispatch]);

 const randomMovie = useMemo(
  () =>
   popularMovies.length > 0
    ? popularMovies[Math.floor(Math.random() * 15)]
    : null,
  [popularMovies]
 );

 useEffect(() => {
  if (randomMovie) {
   dispatch(setRandomPopularMovie(randomMovie));
  }
 }, [randomMovie, dispatch]);

 useEffect(() => {
  if (randomPopularMovie && Object.keys(randomPopularMovie).length > 0) {
   setCurrentMovie(randomPopularMovie);
  }
 }, [randomPopularMovie]);

 const renderContent = () => {
  switch (status) {
   case "success":
    return (
     <Container ref={containerRef}>
      <Header
       currentMovie={currentMovie}
       setCurrentMovie={setCurrentMovie}
       genres={genres}
      />
      {popularMovies.length > 0 && (
       <VerticalSection>
        <SectionHeader>Popular movies</SectionHeader>
        <PopularMoviesList>
         {popularMovies.map((movie) => (
          <MovieTile
           genres={genres}
           key={movie.id}
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

 return renderContent();
};

export default PopularMovies;
