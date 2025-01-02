import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { SectionHeader } from "../SectionHeader/styled";
import {
 MovieList,
 PosterWrapper,
 Poster,
 SimilarMoviesSectionWrapper
} from "./styled";
import poster from "../../assets/images/no-poster.png";

export const SimilarMoviesSection = ({
 movies,
 currentMovie,
 handleMovieChange
}) => {
 return (
  <SimilarMoviesSectionWrapper>
   <SectionHeader>Similar movies</SectionHeader>
   {movies.length > 0 && (
    <MovieList>
     {movies.map((movie) => (
      <PosterWrapper
       $current={movie.id === currentMovie.id}
       key={movie.id}
       onClick={(e) => {
        handleMovieChange(e, movie);
       }}
      >
       <Poster
        alt={movie.title}
        src={
         movie.poster_path
          ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
          : poster
        }
        effect="blur"
        height="100%"
       />
      </PosterWrapper>
     ))}
    </MovieList>
   )}
  </SimilarMoviesSectionWrapper>
 );
};
