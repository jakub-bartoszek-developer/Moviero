import { useEffect } from "react";
import { Container } from "../../components/Container/styled";
import { useSearchParams } from "react-router-dom";
import { PopularPeople } from "./PopularPeople/PopularPeople";
import { SearchedPeople } from "./SearchedPeople/SearchedPeople";
import { useDispatch } from "react-redux";
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
  <Container>
   {searchParams.get("search") ? <SearchedPeople /> : <PopularPeople />}
  </Container>
 );
};

export default People;
