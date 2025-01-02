import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../../components/Loader/Loader";
import { Error } from "../../../components/Error/Error";
import { ItemListSection } from "../../../components/ItemListSection/ItemListSection";
import { Pagination } from "../../../components/Pagination/Pagination";
import { SearchedPeopleWrapper } from "./styled";
import {
 fetchSearchedPeople,
 selectPeople,
 selectStatus,
 selectTotalPages,
 selectTotalResults
} from "../../../utils/redux/peopleSlice";

export const SearchedPeople = () => {
 const dispatch = useDispatch();
 const people = useSelector(selectPeople);
 const status = useSelector(selectStatus);
 const [searchParams, setSearchParams] = useSearchParams();
 const totalPages = useSelector(selectTotalPages);
 const totalResults = useSelector(selectTotalResults);

 console.log(totalResults)

 const currentPage = parseInt(searchParams.get("page") || "1", 10);
 const searchQuery = searchParams.get("search") || "";
 const header = () => {
  if (people.length > 0) {
   return `Search results for "${searchQuery}" (${totalResults}) - Page ${currentPage} of ${totalPages}`;
  } else {
   return `No search results "${searchQuery}"`;
  }
 };

 useEffect(() => {
  searchParams.set("page", 1);
  setSearchParams(searchParams);
 }, [searchParams, setSearchParams]);

 useEffect(() => {
  if (searchParams.get("page")) {
   dispatch(
    fetchSearchedPeople({
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
  <SearchedPeopleWrapper>
   <ItemListSection
    header={header()}
    items={people}
    category="people"
    totalPages={totalPages}
   />
   <Pagination
    searchParams={searchParams}
    setSearchParams={setSearchParams}
    totalPages={totalPages}
   />
  </SearchedPeopleWrapper>
 );
};
