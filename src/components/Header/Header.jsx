import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
 fetchSimilarMovies,
 selectSimilarMovies
} from "../../utils/redux/moviesSlice";
import { Banner } from "../Banner/Banner";
import { HorizontalSection } from "../HorizontalSection/HorizontalSection";

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
   <HorizontalSection
    movies={similarMovies}
    currentMovie={currentMovie}
    handleMovieChange={handleMovieChange}
   />
  </>
 );
};
