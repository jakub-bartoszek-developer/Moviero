import { LazyLoadImage } from "react-lazy-load-image-component";
import {
 PersonBannerWrapper,
 Biography,
 BiographyHeader,
 BiographyWrapper,
 Birthdate,
 Birthplace,
 ImageWrapper,
 Name,
 PersonDetails,
 ReadMoreButton
} from "./styled";
import avatar from "../../assets/images/no-avatar.png";
import { useEffect, useRef, useState } from "react";

export const PersonBanner = ({
 person: { profile_path, name, birthday, place_of_birth, biography }
}) => {
 const [isExpanded, setIsExpanded] = useState(false);
 const biographyWrapperRef = useRef(null);
 const biographyRef = useRef(null);
 const [isOverflow, setIsOverflow] = useState(false);

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

 return (
  <PersonBannerWrapper>
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
      <ReadMoreButton onClick={toggleBiography}>Read more</ReadMoreButton>
     )}
     {isExpanded && (
      <ReadMoreButton
       $isExpanded={isExpanded}
       onClick={toggleBiography}
      >
       Collapse
      </ReadMoreButton>
     )}
    </>
   )}
  </PersonBannerWrapper>
 );
};
