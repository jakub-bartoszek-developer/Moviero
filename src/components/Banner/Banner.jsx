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
 OutOf,
 StyledLink,
 PlayIcon,
 Tagline,
 AdditionalDetails,
 ReleaseDate,
 Duration
} from "./styled";

export const Banner = ({
 movie: {
  id,
  backdrop_path,
  title,
  vote_average,
  vote_count,
  overview,
  release_date,
  runtime,
  tagline
 },
 movieGenres,
 isMoviePage
}) => {
 const hours = Math.floor(runtime / 60);
 const minutes = runtime % 60;

 return (
  <BannerWrapper
   key={id}
   $bgImage={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
  >
   <MovieDetails>
    <div>
     <Title>{title}</Title>
     {tagline && <Tagline>&#34;{tagline}&#34;</Tagline>}
    </div>

    <Genres>
     {movieGenres.map((genre) => (
      <Genre key={genre.id || genre.name}>{genre.name}</Genre>
     ))}
    </Genres>

    <Rating>
     <StarIcon />
     <Rate>
      {(vote_average ?? 0).toFixed(1)}/<OutOf>10</OutOf>
      <Votes>&nbsp;{vote_count} votes</Votes>
     </Rate>
    </Rating>

    {isMoviePage && (
     <AdditionalDetails>
      <ReleaseDate>{new Date(release_date).toLocaleDateString()}</ReleaseDate>
      <Duration>
       {hours}h {minutes}m
      </Duration>
     </AdditionalDetails>
    )}

    {!isMoviePage && (
     <StyledLink to={toMovie({ id: id })}>
      <PlayIcon />
      <span>Learn more</span>
     </StyledLink>
    )}

    <Description>{overview || "No description available"}</Description>
   </MovieDetails>
  </BannerWrapper>
 );
};
