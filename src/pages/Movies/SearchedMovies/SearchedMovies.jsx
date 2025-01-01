import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
 fetchSearchResults,
 selectSearchResults,
 selectSearchStatus,
 selectTotalResults
} from "../../../utils/redux/searchSlice";
import {
 selectGenres,
 selectTotalPages
} from "../../../utils/redux/moviesSlice";
import { Pagination } from "../../../components/Pagination/Pagination";
import { Loader } from "../../../components/Loader/Loader";
import { SearchResultsList, Container } from "./styled";
import { VerticalSection } from "../../../components/VerticalSection/styled";
import { SectionHeader } from "../../../components/SectionHeader/styled";
import { MovieTile } from "../../../components/MovieTile/MovieTile";
import { Error } from "../../../components/Error/Error";

export const SearchedMovies = () => {
 const dispatch = useDispatch();
 const status = useSelector(selectSearchStatus);
 const searchResults = useSelector(selectSearchResults);
 const genres = useSelector(selectGenres);
 const totalPages = useSelector(selectTotalPages);
 const totalResults = useSelector(selectTotalResults);

 const [searchParams, setSearchParams] = useSearchParams();
 const currentPage = parseInt(searchParams.get("page") || "1", 10);
 const searchQuery = searchParams.get("search") || "";
 const containerRef = useRef(null);

 useEffect(() => {
  if (searchQuery) {
   dispatch(
    fetchSearchResults({
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
  <Container ref={containerRef}>
   {searchResults.length > 0 ? (
    <>
     <VerticalSection>
      <SectionHeader>
       {`Search results for "${searchQuery}" (${totalResults}) - Page ${currentPage} of ${totalPages}`}
      </SectionHeader>
      <SearchResultsList>
       {searchResults.map((movie) => (
        <MovieTile
         genres={genres}
         key={movie.id}
         movie={movie}
        />
       ))}
      </SearchResultsList>
     </VerticalSection>
     <Pagination
      containerRef={containerRef}
      searchParams={searchParams}
      setSearchParams={setSearchParams}
      totalPages={totalPages}
     />
    </>
   ) : (
    <VerticalSection>
     <SectionHeader>
      {`No search results found for "${searchQuery}".`}
     </SectionHeader>
    </VerticalSection>
   )}
  </Container>
 );
};
