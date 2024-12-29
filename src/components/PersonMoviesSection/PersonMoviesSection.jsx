import { MovieTile } from "../MovieTile/MovieTile";
import { MovieList, SectionHeader, SectionWrapper } from "./styled";

export const PersonMoviesSection = ({ cast, crew }) => {
 return (
  <>
   {cast?.length > 0 && (
    <SectionWrapper>
     <SectionHeader>Cast</SectionHeader>
     <MovieList>
      {cast.map((movie) => (
       <MovieTile
        key={movie.id}
        movie={movie}
       />
      ))}
     </MovieList>
    </SectionWrapper>
   )}
   {crew?.length > 0 && (
    <SectionWrapper>
     <SectionHeader>Crew</SectionHeader>
     <MovieList>
      {crew.map((movie) => (
       <MovieTile
        key={movie.id}
        movie={movie}
       />
      ))}
     </MovieList>
    </SectionWrapper>
   )}
  </>
 );
};
