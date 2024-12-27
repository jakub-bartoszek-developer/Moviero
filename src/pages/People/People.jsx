import { useEffect } from "react";
import { Container } from "../../components/Container/styled";
import { useSearchParams } from "react-router-dom";
import { PopularPeople } from "./PopularPeople/PopularPeople";
import { useDispatch } from "react-redux";
import { setCategory } from "../../utils/redux/searchSlice";
import { SearchedPeople } from "./SearchedPeople/SearchedPeople";

const People = () => {
 const [searchParams] = useSearchParams();
 const dispatch = useDispatch();

 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 useEffect(() => {
  dispatch(setCategory("person"));
 }, [dispatch]);

 return (
  <Container>
   {searchParams.get("search") ? <SearchedPeople /> : <PopularPeople />}
  </Container>
 );
};

export default People;
