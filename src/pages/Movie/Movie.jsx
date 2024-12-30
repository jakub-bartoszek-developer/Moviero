import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
 fetchMovie,
 selectMovie,
 selectMovieCredits,
 selectStatus
} from "../../utils/redux/movieSlice";
import { MovieTeamSection } from "../../components/MovieTeamSection/MovieTeamSection";
import { Container } from "../../components/Container/styled";
import { setCategory } from "../../utils/redux/searchSlice";
import { Loader } from "../../components/Loader/Loader";
import {
 Banner,
 Description,
 Genre,
 Genres,
 MovieDetails,
 OutOf,
 Rate,
 Rating,
 StarIcon,
 Tagline,
 Title,
 Votes,
 Year
} from "./styled";

const Movie = () => {
 const { id } = useParams();
 const dispatch = useDispatch();
 const {
  backdrop_path,
  title,
  tagline,
  release_date,
  genres,
  vote_average,
  vote_count,
  overview
 } = useSelector(selectMovie);
 const { cast, crew } = useSelector(selectMovieCredits);
 const status = useSelector(selectStatus);

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
     <Banner $bgImage={`https://image.tmdb.org/t/p/original/${backdrop_path}`}>
      <MovieDetails>
       {title && <Title>{title}</Title>}
       {tagline && <Tagline>&quot;{tagline}&quot;</Tagline>}
       {release_date && <Year>{release_date?.slice(0, 4)}</Year>}
       <Genres>
        {genres.map((genre) => (
         <Genre key={genre.id}>{genre.name}</Genre>
        ))}
       </Genres>
       <Rating>
        <StarIcon />
        <Rate>
         {vote_average?.toFixed(1)}/<OutOf>10</OutOf>
         <Votes>&nbsp;{vote_count} votes</Votes>
        </Rate>
       </Rating>
       <Description>{overview}</Description>
      </MovieDetails>
     </Banner>

     <MovieTeamSection
      cast={cast}
      crew={crew}
     />
    </Container>
   );
  case "loading":
   return <Loader />;
  default:
   return <>Error</>;
 }
};

export default Movie;
