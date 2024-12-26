import { nanoid } from "nanoid";
import {
  Content,
  Genre,
  Genres,
  Info,
  Poster,
  PosterWrapper,
  Rate,
  Rating,
  StarIcon,
  StyledLink,
  Title,
  Votes,
  Wrapper,
  Year
} from "./styled";
import { toMovie } from "../../routes";

export const MovieTile = ({ movie, genres }) => {
  return (
    <Wrapper>
      {movie && (
        <StyledLink to={toMovie({ id: movie.id })}>
          <PosterWrapper>
            {movie.poster_path && (
              <Poster loading="lazy" src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt={movie.title} />
            )}
          </PosterWrapper>
          <Content>
            <Info>
              <Title> {movie.title}</Title>
              <Year> {movie.release_date?.slice(0, 4)}</Year>
              <Genres>
                {genres
                  ?.filter((genre) => movie.genre_ids?.includes(genre.id))
                  .map((genre) => (
                    <Genre key={nanoid()}>{genre.name}</Genre>
                  ))}
              </Genres>
            </Info>
            <Rating>
              <StarIcon />
              <Rate>{movie.vote_average?.toFixed(1)}</Rate>
              <Votes>{movie.vote_count}</Votes>
            </Rating>
          </Content>
        </StyledLink>
      )}
    </Wrapper>
  );
};
