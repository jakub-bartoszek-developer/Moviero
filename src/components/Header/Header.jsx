import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
 fetchSimilarMovies,
 selectSimilarMovies
} from "../../utils/redux/moviesSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Poster, PosterWrapper, SimilarMoviesList } from "./styled";
import { SectionHeader } from "../../components/SectionHeader/styled";
import { HorizontalSection } from "../../components/HorizontalSection/styled";
import { Banner } from "../Banner/Banner";

export const Header = ({ currentMovie, setCurrentMovie, genres }) => {
 const dispatch = useDispatch();
 const similarMovies = useSelector(selectSimilarMovies);
 const [cancel, setCancel] = useState(false);
 const movieGenres =
  currentMovie?.genre_ids && Array.isArray(currentMovie.genre_ids)
   ? genres?.filter((genre) => currentMovie.genre_ids.includes(genre.id))
   : [];

 useEffect(() => {
  if (!cancel && currentMovie && Object.keys(currentMovie).length > 0) {
   dispatch(
    fetchSimilarMovies({ genreIds: currentMovie.genre_ids.join("%2C") })
   );
   setCancel(true);
  }
 }, [dispatch, cancel, currentMovie]);

 const handleMovieChange = (e, movie) => {
  const element = e.target;
  if (element) {
   element.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "end"
   });

   setCurrentMovie(movie);
  }
 };

 return (
  <>
   {currentMovie && (
    <Banner
     currentMovie={currentMovie}
     movieGenres={movieGenres}
    />
   )}

   <HorizontalSection>
    <SectionHeader>Similar movies</SectionHeader>
    {similarMovies.length > 0 && (
     <SimilarMoviesList>
      {similarMovies.map((movie) => (
       <PosterWrapper
        $current={movie.id === currentMovie.id}
        key={movie.id}
        onClick={(e) => {
         handleMovieChange(e, movie);
        }}
       >
        <Poster>
         <LazyLoadImage
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          effect="blur"
          height="100%"
         />
        </Poster>
       </PosterWrapper>
      ))}
     </SimilarMoviesList>
    )}
   </HorizontalSection>
  </>
 );
};
