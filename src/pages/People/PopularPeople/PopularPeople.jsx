import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
 fetchPopularPeople,
 selectPeople,
 selectStatus,
 selectTotalPages
} from "../../../utils/redux/peopleSlice";
import { Loader } from "../../../components/Loader/Loader";
import { Error } from "../../../components/Error/Error";
import { ItemListSection } from "../../../components/ItemListSection/ItemListSection";
import { Pagination } from "../../../components/Pagination/Pagination";
import { PeopleWrapper } from "./styled";

export const PopularPeople = () => {
 const dispatch = useDispatch();
 const people = useSelector(selectPeople);
 const status = useSelector(selectStatus);
 const [searchParams, setSearchParams] = useSearchParams();
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
  <PeopleWrapper>
   <ItemListSection
    header="Popular people"
    items={people}
    category="people"
    totalPages={totalPages}
   />
   <Pagination
    searchParams={searchParams}
    setSearchParams={setSearchParams}
    totalPages={totalPages}
   />
  </PeopleWrapper>
 );
};
