import { ItemListSection } from "../ItemListSection/ItemListSection";

export const MovieTeamSection = ({ cast, crew }) => {
 return (
  <>
   {cast?.length > 0 && (
    <ItemListSection
     header="Cast"
     items={cast}
     category="people"
     initialVisibleCount={6}
     showMoreEnabled={true}
    />
   )}
   {crew?.length > 0 && (
    <ItemListSection
     header="Crew"
     items={crew}
     category="people"
     initialVisibleCount={6}
     showMoreEnabled={true}
    />
   )}
  </>
 );
};
