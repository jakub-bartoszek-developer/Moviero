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

export const Banner = ({ movie, movieGenres }) => {
 return (
  <BannerWrapper
   key={movie.id}
   $bgImage={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
  >
   <MovieDetails>
    <Title to={toMovie({ id: movie.id })}>{movie.title}</Title>
    <Genres>
     {movieGenres.map((genre) => (
      <Genre key={nanoid()}>{genre.name}</Genre>
     ))}
    </Genres>
    <Rating>
     <StarIcon />
     <Rate>
      {(movie?.vote_average ?? 0).toFixed(1)}/<OutOf>10</OutOf>
      <Votes>&nbsp;{movie?.vote_count} votes</Votes>
     </Rate>
    </Rating>
    <Description>{movie?.overview}</Description>
   </MovieDetails>
  </BannerWrapper>
 );
};
