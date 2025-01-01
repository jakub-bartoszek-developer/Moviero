import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
 fetchSearchResults,
 selectSearchResults,
 selectSearchStatus,
 selectTotalPages,
 selectTotalResults
} from "../../../utils/redux/searchSlice";
import { Container, PopularPeopleList } from "../styled";
import { Loader } from "../../../components/Loader/Loader";
import { Pagination } from "../../../components/Pagination/Pagination";
import { PersonTile } from "../../../components/PersonTile/PersonTile";
import { VerticalSection } from "../../../components/VerticalSection/styled";
import { SectionHeader } from "../../../components/SectionHeader/styled";
import { Error } from "../../../components/Error/Error";

export const SearchedPeople = () => {
 const dispatch = useDispatch();
 const searchResults = useSelector(selectSearchResults);
 const status = useSelector(selectSearchStatus);
 const [searchParams, setSearchParams] = useSearchParams();
 const containerRef = useRef(null);
 const totalPages = useSelector(selectTotalPages);
 const totalResults = useSelector(selectTotalResults);

 useEffect(() => {
  searchParams.set("page", 1);
  setSearchParams(searchParams);
 }, [searchParams, setSearchParams]);

 useEffect(() => {
  if (searchParams.get("page")) {
   dispatch(
    fetchSearchResults({
     searchQuery: searchParams.get("search"),
     page: searchParams.get("page"),
     category: "person"
    })
   );
  }
 }, [searchParams, dispatch]);

 if (status === "loading") {
  return <Loader />;
 }

 if (status !== "success") {
  return <Error />;
 }

 return (
  <Container ref={containerRef}>
   {searchResults.length && (
    <VerticalSection>
     <SectionHeader>
      {`Search results for "${searchParams.get("search")}" (${totalResults})`}
     </SectionHeader>
     <PopularPeopleList>
      {searchResults.map((person) => (
       <PersonTile
        key={person.id}
        person={person}
       />
      ))}
     </PopularPeopleList>
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
};
