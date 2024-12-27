import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { nanoid } from "nanoid";
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

export const SearchedMovies = () => {
 const dispatch = useDispatch();
 const status = useSelector(selectSearchStatus);
 const searchResults = useSelector(selectSearchResults);
 const genres = useSelector(selectGenres);
 const totalPages = useSelector(selectTotalPages);
 const totalResults = useSelector(selectTotalResults);

 const [searchParams, setSearchParams] = useSearchParams();
 const containerRef = useRef(null);

 useEffect(() => {
  searchParams.set("page", 1);
  setSearchParams(searchParams);
  // eslint-disable-next-line
 }, []);

 useEffect(() => {
  if (searchParams.get("page")) {
   dispatch(
    fetchSearchResults({
     searchQuery: searchParams.get("search"),
     page: searchParams.get("page"),
     category: "movie"
    })
   );
  }
 }, [searchParams, dispatch]);

 switch (status) {
  case "success":
   return (
    <Container ref={containerRef}>
     {searchResults.length ? (
      <>
       <VerticalSection>
        <SectionHeader>
         {`Search results for "${searchParams.get(
          "search"
         )}" (${totalResults})`}
        </SectionHeader>
        <SearchResultsList>
         {searchResults.map((movie) => (
          <MovieTile
           genres={genres}
           key={nanoid()}
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
        {`No search results for "${searchParams.get("search")}"`}
       </SectionHeader>
      </VerticalSection>
     )}
    </Container>
   );
  case "loading":
   return <Loader />;
  default:
   return <>Error</>;
 }
};
