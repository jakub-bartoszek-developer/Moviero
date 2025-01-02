import { useState } from "react";
import { useSelector } from "react-redux";
import { selectGenres } from "../../utils/redux/moviesSlice";
import { Container, MovieList, PeopleList, ShowMoreButton } from "./styled";
import { SectionHeader } from "../SectionHeader/styled";
import { MovieTile } from "../MovieTile/MovieTile";
import { PersonTile } from "../PersonTile/PersonTile";

export const ItemListSection = ({
 header,
 items,
 category,
 initialVisibleCount,
 showMoreEnabled = false
}) => {
 const genres = useSelector(selectGenres);
 const [showAll, setShowAll] = useState(false);

 const visibleItems = initialVisibleCount
  ? showAll
    ? items
    : items.slice(0, initialVisibleCount)
  : items;

 return (
  <Container>
   <SectionHeader>{header}</SectionHeader>
   {category === "movies" ? (
    <MovieList>
     {visibleItems.map((item) => (
      <MovieTile
       key={item.id}
       genres={genres}
       movie={item}
      />
     ))}
    </MovieList>
   ) : (
    <PeopleList>
     {visibleItems.map((item) => (
      <PersonTile
       key={item.id}
       person={item}
      />
     ))}
    </PeopleList>
   )}
   {showMoreEnabled &&
    initialVisibleCount &&
    items.length > initialVisibleCount && (
     <ShowMoreButton onClick={() => setShowAll((prev) => !prev)}>
      {showAll ? "Show Less" : "Show More"}
     </ShowMoreButton>
    )}
  </Container>
 );
};
