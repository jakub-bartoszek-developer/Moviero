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
import poster from "../../assets/images/no-poster.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const MovieTile = ({ movie, genres }) => {
 const {
  id,
  title,
  release_date,
  genre_ids,
  vote_average,
  vote_count,
  poster_path
 } = movie;

 return (
  <Wrapper>
   <StyledLink to={toMovie({ id: id })}>
    <PosterWrapper>
     <Poster>
      <LazyLoadImage
       alt={title}
       src={
        poster_path ? `https://image.tmdb.org/t/p/w400/${poster_path}` : poster
       }
       effect="blur"
       width="100%"
       height="100%"
      />
     </Poster>
    </PosterWrapper>
    <Content>
     <Info>
      <Title>{title}</Title>
      <Year>{release_date?.slice(0, 4)}</Year>
      <Genres>
       {genres
        ?.filter((genre) => genre_ids?.includes(genre.id))
        .map((genre) => (
         <Genre key={genre.id}>{genre.name}</Genre>
        ))}
      </Genres>
     </Info>
     <Rating>
      <StarIcon />
      <Rate>{vote_average?.toFixed(1)}</Rate>
      <Votes>{vote_count}</Votes>
     </Rating>
    </Content>
   </StyledLink>
  </Wrapper>
 );
};
