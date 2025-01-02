import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PopularPeople } from "./PopularPeople/PopularPeople";
import { SearchedPeople } from "./SearchedPeople/SearchedPeople";
import { setCategory } from "../../utils/redux/searchSlice";

const People = () => {
 const [searchParams, setSearchParams] = useSearchParams();
 const dispatch = useDispatch();

 useEffect(() => {
  window.scrollTo(0, 0);
  dispatch(setCategory("person"));
  searchParams.set("page", 1);
  setSearchParams(searchParams);
  // eslint-disable-next-line
 }, []);

 return (
  <>{searchParams.get("search") ? <SearchedPeople /> : <PopularPeople />}</>
 );
};

export default People;
