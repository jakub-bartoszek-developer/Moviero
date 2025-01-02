import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Loader } from "../../../components/Loader/Loader";
import { Error } from "../../../components/Error/Error";
import { ItemListSection } from "../../../components/ItemListSection/ItemListSection";
import { Pagination } from "../../../components/Pagination/Pagination";
import { SearchedMoviesWrapper } from "./styled";
import {
 fetchSearchedMovies,
 selectMovies,
 selectStatus,
 selectTotalPages,
 selectTotalResults
} from "../../../utils/redux/moviesSlice";

export const SearchedMovies = () => {
 const dispatch = useDispatch();
 const status = useSelector(selectStatus);
 const movies = useSelector(selectMovies);
 const totalPages = useSelector(selectTotalPages);
 const totalResults = useSelector(selectTotalResults);
 const [searchParams, setSearchParams] = useSearchParams();

 const currentPage = parseInt(searchParams.get("page") || "1", 10);
 const searchQuery = searchParams.get("search") || "";
 const header = () => {
  if (movies.length > 0) {
   return `Search results for "${searchQuery}" (${totalResults}) - Page ${currentPage} of ${totalPages}`;
  } else {
   return `No search results "${searchQuery}"`;
  }
 };

 useEffect(() => {
  if (searchQuery) {
   dispatch(
    fetchSearchedMovies({
     searchQuery,
     page: currentPage,
     category: "movie"
    })
   );
  }
 }, [searchQuery, currentPage, dispatch]);

 if (status === "loading") {
  return <Loader />;
 }

 if (status !== "success") {
  return <Error />;
 }

 return (
  <SearchedMoviesWrapper>
   <ItemListSection
    header={header()}
    items={movies}
    category="movies"
    totalPages={totalPages}
   />
   <Pagination
    searchParams={searchParams}
    setSearchParams={setSearchParams}
    totalPages={totalPages}
   />
  </SearchedMoviesWrapper>
 );
};
