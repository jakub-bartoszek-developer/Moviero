import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
 fetchPerson,
 selectPerson,
 selectPersonMovies,
 selectStatus
} from "../../utils/redux/personSlice";
import { useEffect, useRef, useState } from "react";
import {
 Banner,
 Biography,
 BiographyHeader,
 BiographyWrapper,
 Birthdate,
 Birthplace,
 Container,
 ImageWrapper,
 Name,
 PersonDetails,
 ShowMoreButton
} from "./styled";
import { Loader } from "../../components/Loader/Loader";
import avatar from "../../assets/images/no-avatar.png";
import { setCategory } from "../../utils/redux/searchSlice";
import { PersonMoviesSection } from "../../components/PersonMoviesSection/PersonMoviesSection";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Person = () => {
 const dispatch = useDispatch();
 const { id } = useParams();
 const { profile_path, name, birthday, place_of_birth, biography } =
  useSelector(selectPerson);
 const personMovies = useSelector(selectPersonMovies);
 const status = useSelector(selectStatus);
 const [isExpanded, setIsExpanded] = useState(false);
 const biographyWrapperRef = useRef(null);
 const biographyRef = useRef(null);
 const [isOverflow, setIsOverflow] = useState(false);

 useEffect(() => {
  window.scrollTo(0, 0);
  dispatch(setCategory("person"));
  // eslint-disable-next-line
 }, []);

 useEffect(() => {
  dispatch(fetchPerson({ personId: id }));
 }, [dispatch, id]);

 useEffect(() => {
  if (biographyWrapperRef.current && biographyRef.current) {
   const wrapperHeight = biographyWrapperRef.current.offsetHeight;
   const contentHeight = biographyRef.current.scrollHeight;
   setIsOverflow(contentHeight > wrapperHeight);
  }
 }, [biography]);

 const toggleBiography = () => {
  setIsExpanded((prev) => !prev);
 };

 console.log(isOverflow);
 console.log(isExpanded);

 switch (status) {
  case "success":
   return (
    <Container>
     <Banner>
      <ImageWrapper>
       <LazyLoadImage
        alt={name}
        src={
         profile_path
          ? `https://image.tmdb.org/t/p/original/${profile_path}`
          : avatar
        }
        effect="blur"
        width="100%"
        height="100%"
       />
      </ImageWrapper>
      <PersonDetails>
       {name && <Name>{name}</Name>}
       {birthday && <Birthdate>{birthday}</Birthdate>}
       {place_of_birth && <Birthplace>{place_of_birth}</Birthplace>}
      </PersonDetails>
      {biography && (
       <>
        <BiographyWrapper
         ref={biographyWrapperRef}
         $isExpanded={isExpanded}
        >
         <BiographyHeader>Biography</BiographyHeader>
         <Biography ref={biographyRef}>{biography}</Biography>
        </BiographyWrapper>
        {isOverflow && !isExpanded && (
         <ShowMoreButton onClick={toggleBiography}>Read more</ShowMoreButton>
        )}
        {isExpanded && (
         <ShowMoreButton
          $isExpanded={isExpanded}
          onClick={toggleBiography}
         >
          Collapse
         </ShowMoreButton>
        )}
       </>
      )}
     </Banner>
     <PersonMoviesSection movies={personMovies} />
    </Container>
   );
  case "loading":
   return <Loader />;
  default:
   return <>Error</>;
 }
};

export default Person;
