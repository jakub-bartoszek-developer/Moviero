import { useState } from "react";
import { MovieTile } from "../MovieTile/MovieTile";
import {
 MovieList,
 SectionHeader,
 SectionWrapper,
 ShowMoreButton
} from "./styled";

export const PersonMoviesSection = ({ movies }) => {
 const [showAllMovies, setShowAllMovies] = useState(false);

 const visibleMovies = showAllMovies ? movies : movies.slice(0, 12);

 return (
  <>
   {movies?.length > 0 && (
    <SectionWrapper>
     <SectionHeader>Movies</SectionHeader>
     <MovieList>
      {visibleMovies.map((movie) => (
       <MovieTile
        key={movie.id}
        movie={movie}
       />
      ))}
     </MovieList>
     {movies.length > 12 && (
      <ShowMoreButton onClick={() => setShowAllMovies((prev) => !prev)}>
       {showAllMovies ? "Show Less" : "Show More"}
      </ShowMoreButton>
     )}
    </SectionWrapper>
   )}
  </>
 );
};
