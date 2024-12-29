import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
 fetchPerson,
 selectPerson,
 selectPersonCredits,
 selectStatus
} from "../../utils/redux/personSlice";
import { useEffect } from "react";
import {
 Banner,
 Biography,
 Birthdate,
 Birthplace,
 Container,
 Image,
 ImageWrapper,
 Name,
 PersonDetails
} from "./styled";
import { Loader } from "../../components/Loader/Loader";
import avatar from "../../assets/images/no-avatar.png";
import { setCategory } from "../../utils/redux/searchSlice";
import { PersonMoviesSection } from "../../components/PersonMoviesSection/PersonMoviesSection";

const Person = () => {
 const { id } = useParams();
 const dispatch = useDispatch();
 const { profile_path, name, birthday, place_of_birth, biography } =
  useSelector(selectPerson);
 const { cast, crew } = useSelector(selectPersonCredits);
 const status = useSelector(selectStatus);

 useEffect(() => {
  window.scrollTo(0, 0);
  dispatch(setCategory("person"));
  // eslint-disable-next-line
 }, []);

 useEffect(() => {
  dispatch(fetchPerson({ personId: id }));
 }, [dispatch, id]);

 switch (status) {
  case "success":
   return (
    <Container>
     <Banner>
      <ImageWrapper>
       <Image
        loading="lazy"
        alt={name}
        src={
         profile_path
          ? `https://image.tmdb.org/t/p/original/${profile_path}`
          : avatar
        }
       />
      </ImageWrapper>
      <PersonDetails>
       {name && <Name>{name}</Name>}
       {birthday && <Birthdate>{birthday}</Birthdate>}
       {place_of_birth && <Birthplace>{place_of_birth}</Birthplace>}
      </PersonDetails>
      {biography && <Biography>{biography}</Biography>}
     </Banner>
     <PersonMoviesSection
      cast={cast}
      crew={crew}
     />
    </Container>
   );
  case "loading":
   return <Loader />;
  default:
   return <>Error</>;
 }
};

export default Person;
