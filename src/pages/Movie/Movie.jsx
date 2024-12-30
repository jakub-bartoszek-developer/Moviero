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
import { Banner } from "../../components/Banner/Banner";

const Movie = () => {
 const { id } = useParams();
 const dispatch = useDispatch();
 const movie = useSelector(selectMovie);
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
    <>
     <Banner
      movie={movie}
      movieGenres={movie.genres}
     />
     <Container>
      <MovieTeamSection
       cast={cast}
       crew={crew}
      />
     </Container>
    </>
   );
  case "loading":
   return <Loader />;
  default:
   return <>Error</>;
 }
};

export default Movie;
