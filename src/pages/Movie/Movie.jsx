import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
 fetchMovie,
 selectMovie,
 selectMovieCredits,
 selectStatus
} from "../../utils/redux/movieSlice";
import { Loader } from "../../components/Loader/Loader";
import {
 Banner,
 Cast,
 Crew,
 Description,
 Genre,
 Genres,
 MovieDetails,
 OutOf,
 Rate,
 Rating,
 SectionWrapper,
 StarIcon,
 Tagline,
 Title,
 Votes,
 Year,
 SectionHeader
} from "./styled";
import { nanoid } from "nanoid";
import { Container } from "../../components/Container/styled";
import { PersonTile } from "../../components/PersonTile/PersonTile";
import { setCategory } from "../../utils/redux/searchSlice";

const Movie = () => {
 const { id } = useParams();
 const dispatch = useDispatch();
 const movie = useSelector(selectMovie);
 const movieCredits = useSelector(selectMovieCredits);
 const status = useSelector(selectStatus);
 const genres = movie?.genres?.map((genre) => Object.values(genre)[1]);

 useEffect(() => {
  window.scrollTo(0, 0);
  dispatch(setCategory("movie"));
  // eslint-disable-next-line
 }, []);

 useEffect(() => {
  dispatch(fetchMovie({ movieId: id }));
 }, [dispatch, id]);

 switch (status) {
  case "success":
   return (
    <Container>
     <Banner
      key={movie.id}
      $bgImage={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
     >
      <MovieDetails>
       {movie.title && <Title>{movie.title}</Title>}
       {movie.tagline && <Tagline>&quot;{movie.tagline}&quot;</Tagline>}
       {movie.release_date && <Year>{movie.release_date?.slice(0, 4)}</Year>}
       <Genres>
        {genres?.map((genre) => (
         <Genre key={nanoid()}>{genre}</Genre>
        ))}
       </Genres>
       <Rating>
        <StarIcon />
        <Rate>
         {movie.vote_average?.toFixed(1)}/<OutOf>10</OutOf>
         <Votes>&nbsp;{movie.vote_count} votes</Votes>
        </Rate>
       </Rating>
       <Description>{movie.overview}</Description>
      </MovieDetails>
     </Banner>

     {movieCredits.cast?.length && (
      <SectionWrapper>
       <SectionHeader>Cast</SectionHeader>
       <Cast>
        {movieCredits.cast.map((person) => (
         <PersonTile
          key={nanoid()}
          person={person}
         />
        ))}
       </Cast>
      </SectionWrapper>
     )}

     {movieCredits.crew?.length && (
      <SectionWrapper>
       <SectionHeader>Crew</SectionHeader>
       <Crew>
        {movieCredits.crew.map((person) => (
         <PersonTile
          key={nanoid()}
          person={person}
         />
        ))}
       </Crew>
      </SectionWrapper>
     )}
    </Container>
   );
  case "loading":
   return <Loader />;
  default:
   return <>Error</>;
 }
};

export default Movie;
