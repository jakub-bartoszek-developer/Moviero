import { nanoid } from "nanoid";
import { toMovie } from "../../routes";
import {
 MovieDetails,
 BannerWrapper,
 Title,
 Genres,
 Genre,
 Rating,
 StarIcon,
 Rate,
 Description,
 Votes,
 OutOf
} from "./styled";
import React from "react";

export const Banner = React.memo(({ currentMovie, movieGenres }) => {
 return (
  <BannerWrapper
   key={currentMovie.id}
   $bgImage={`https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path}`}
  >
   <MovieDetails>
    <Title to={toMovie({ id: currentMovie.id })}>{currentMovie.title}</Title>
    <Genres>
     {movieGenres.map((genre) => (
      <Genre key={nanoid()}>{genre.name}</Genre>
     ))}
    </Genres>
    <Rating>
     <StarIcon />
     <Rate>
      {(currentMovie?.vote_average ?? 0).toFixed(1)}/<OutOf>10</OutOf>
      <Votes>&nbsp;{currentMovie?.vote_count} votes</Votes>
     </Rate>
    </Rating>
    <Description>{currentMovie?.overview}</Description>
   </MovieDetails>
  </BannerWrapper>
 );
});
