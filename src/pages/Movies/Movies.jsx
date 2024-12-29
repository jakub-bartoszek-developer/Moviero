import { useEffect } from "react";
import { Container } from "../../components/Container/styled";
import { useSearchParams } from "react-router-dom";
import { PopularMovies } from "./PopularMovies/PopularMovies";
import { SearchedMovies } from "./SearchedMovies/SearchedMovies";
import { useDispatch } from "react-redux";
import { setCategory } from "../../utils/redux/searchSlice";

const Movies = () => {
 const [searchParams, setSearchParams] = useSearchParams();
 const dispatch = useDispatch();

 useEffect(() => {
  window.scrollTo(0, 0);
  dispatch(setCategory("movie"));
  searchParams.set("page", 1);
  setSearchParams(searchParams);
  // eslint-disable-next-line
 }, []);

 return (
  <Container>
   {searchParams.get("search") ? <SearchedMovies /> : <PopularMovies />}
  </Container>
 );
};

export default Movies;
