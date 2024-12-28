import React, { useEffect, lazy, Suspense } from "react";
import { Container } from "../../components/Container/styled";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../../utils/redux/searchSlice";
import { Loader } from "../../components/Loader/Loader";

// Lazy load components
const PopularMovies = lazy(() => import("./PopularMovies/PopularMovies"));
const SearchedMovies = lazy(() => import("./SearchedMovies/SearchedMovies"));

const Movies = () => {
 const [searchParams, setSearchParams] = useSearchParams();
 const dispatch = useDispatch();

 useEffect(() => {
  if (searchParams.get("page") !== "1") {
   searchParams.set("page", "1");
   setSearchParams(searchParams);
  }
  window.scrollTo(0, 0);
  dispatch(setCategory("movie"));
  // eslint-disable-next-line
 }, []);

 return (
  <Container>
   <Suspense fallback={<Loader />}>
    {searchParams.get("search") ? <SearchedMovies /> : <PopularMovies />}
   </Suspense>
  </Container>
 );
};

export default Movies;
