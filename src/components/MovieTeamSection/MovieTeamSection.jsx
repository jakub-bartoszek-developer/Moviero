import { useState } from "react";
import { PersonTile } from "../PersonTile/PersonTile";
import {
 PeopleList,
 SectionHeader,
 SectionWrapper,
 ShowMoreButton
} from "./styled";

export const MovieTeamSection = ({ cast, crew }) => {
 const [showFullCast, setShowFullCast] = useState(false);
 const [showFullCrew, setShowFullCrew] = useState(false);

 const visibleCast = showFullCast ? cast : cast.slice(0, 6);
 const visibleCrew = showFullCrew ? crew : crew.slice(0, 6);

 return (
  <>
   {cast?.length > 0 && (
    <SectionWrapper>
     <SectionHeader>Cast</SectionHeader>
     <PeopleList>
      {visibleCast.map((person) => (
       <PersonTile
        key={person.id}
        person={person}
       />
      ))}
     </PeopleList>
     {cast.length > 6 && (
      <ShowMoreButton onClick={() => setShowFullCast((prev) => !prev)}>
       {showFullCast ? "Show Less" : "Show More"}
      </ShowMoreButton>
     )}
    </SectionWrapper>
   )}
   {crew?.length > 0 && (
    <SectionWrapper>
     <SectionHeader>Crew</SectionHeader>
     <PeopleList>
      {visibleCrew.map((person) => (
       <PersonTile
        key={person.id}
        person={person}
       />
      ))}
     </PeopleList>
     {crew.length > 6 && (
      <ShowMoreButton onClick={() => setShowFullCrew((prev) => !prev)}>
       {showFullCrew ? "Show Less" : "Show More"}
      </ShowMoreButton>
     )}
    </SectionWrapper>
   )}
  </>
 );
};
