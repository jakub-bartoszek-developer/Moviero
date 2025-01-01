import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
 fetchPopularPeople,
 selectPopularPeople,
 selectStatus,
 selectTotalPages
} from "../../../utils/redux/peopleSlice";
import { Container, PopularPeopleList } from "../styled";
import { Loader } from "../../../components/Loader/Loader";
import { Pagination } from "../../../components/Pagination/Pagination";
import { PersonTile } from "../../../components/PersonTile/PersonTile";
import { VerticalSection } from "../../../components/VerticalSection/styled";
import { SectionHeader } from "../../../components/SectionHeader/styled";
import { Error } from "../../../components/Error/Error";

export const PopularPeople = () => {
 const dispatch = useDispatch();
 const popularPeople = useSelector(selectPopularPeople);
 const status = useSelector(selectStatus);
 const [searchParams, setSearchParams] = useSearchParams();
 const containerRef = useRef(null);
 const totalPages = useSelector(selectTotalPages);

 useEffect(() => {
  searchParams.set("page", 1);
  setSearchParams(searchParams);
 }, [searchParams, setSearchParams]);

 useEffect(() => {
  if (searchParams.get("page")) {
   dispatch(fetchPopularPeople({ page: searchParams.get("page") }));
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
   {popularPeople.length && (
    <VerticalSection>
     <SectionHeader>Popular people</SectionHeader>
     <PopularPeopleList>
      {popularPeople.map((person) => (
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
