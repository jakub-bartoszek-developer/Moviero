import { ItemListSection } from "../ItemListSection/ItemListSection";

export const PersonMoviesSection = ({ movies }) => {
 return (
  <ItemListSection
   header="Movies"
   items={movies}
   category="movies"
   initialVisibleCount={12}
   showMoreEnabled={true}
  />
 );
};
