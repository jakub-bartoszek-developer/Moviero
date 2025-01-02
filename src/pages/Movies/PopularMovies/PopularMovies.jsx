import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
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
import { Header } from "../../../components/Header/Header";
import { Error } from "../../../components/Error/Error";
import { ItemListSection } from "../../../components/ItemListSection/ItemListSection";
import { Pagination } from "../../../components/Pagination/Pagination";
import { PopularMoviesWrapper } from "./styled";

export const PopularMovies = () => {
 const dispatch = useDispatch();
 const status = useSelector(selectStatus);
 const popularMovies = useSelector(selectPopularMovies);
 const randomPopularMovie = useSelector(selectRandomPopularMovie);
 const genres = useSelector(selectGenres);
 const totalPages = useSelector(selectTotalPages);

 const [currentMovie, setCurrentMovie] = useState(randomPopularMovie);
 const [searchParams, setSearchParams] = useSearchParams();
 const currentPage = parseInt(searchParams.get("page") || "1", 10);

 useEffect(() => {
  if (searchParams.get("page")) {
   dispatch(fetchPopularMovies({ page: searchParams.get("page") }));
  }
 }, [searchParams, dispatch]);

 useEffect(() => {
  if (popularMovies.length > 0) {
   dispatch(
    setRandomPopularMovie(popularMovies[Math.floor(Math.random() * 19)])
   );
  }
 }, [dispatch, popularMovies]);

 useEffect(() => {
  if (Object.keys(randomPopularMovie).length > 0) {
   setCurrentMovie(randomPopularMovie);
  }
 }, [randomPopularMovie]);

 if (status === "loading") {
  return <Loader />;
 }

 if (status !== "success") {
  return <Error />;
 }

 return (
  <PopularMoviesWrapper>
   {currentPage === 1 && (
    <Header
     currentMovie={currentMovie}
     setCurrentMovie={setCurrentMovie}
     genres={genres}
    />
   )}
   <ItemListSection
    header="Popular movies"
    items={popularMovies}
    category="movies"
    totalPages={totalPages}
   />
   <Pagination
    searchParams={searchParams}
    setSearchParams={setSearchParams}
    totalPages={totalPages}
   />
  </PopularMoviesWrapper>
 );
};
