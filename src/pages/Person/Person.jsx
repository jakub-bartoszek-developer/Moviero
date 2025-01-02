import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { setCategory } from "../../utils/redux/searchSlice";
import {
 fetchPerson,
 selectPerson,
 selectPersonMovies,
 selectStatus
} from "../../utils/redux/personSlice";

import { Loader } from "../../components/Loader/Loader";
import { PersonMoviesSection } from "../../components/PersonMoviesSection/PersonMoviesSection";
import { Error } from "../../components/Error/Error";
import { PersonBanner } from "../../components/PersonBanner/PersonBanner";
import { PersonWrapper } from "./styled";

const Person = () => {
 const dispatch = useDispatch();
 const { id } = useParams();
 const person = useSelector(selectPerson);
 const personMovies = useSelector(selectPersonMovies);
 const status = useSelector(selectStatus);

 useEffect(() => {
  window.scrollTo(0, 0);
  dispatch(setCategory("person"));
  // eslint-disable-next-line
 }, []);

 useEffect(() => {
  dispatch(fetchPerson({ personId: id }));
 }, [dispatch, id]);

 if (status === "loading") {
  return <Loader />;
 }

 if (status !== "success") {
  return <Error />;
 }

 return (
  <PersonWrapper>
   <PersonBanner person={person} />
   <PersonMoviesSection movies={personMovies} />
  </PersonWrapper>
 );
};

export default Person;
