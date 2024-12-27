import { useSelector } from "react-redux";
import { toMovie } from "../../routes";
import { selectCategory } from "../../utils/redux/searchSlice";
import {
 Content,
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
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const SearchTile = ({ data, switchSearchbar }) => {
 const category = useSelector(selectCategory);

 return (
  <Wrapper>
   {category === "movie" ? (
    <StyledLink
     onClick={() => switchSearchbar()}
     to={toMovie({ id: data.id })}
    >
     <PosterWrapper>
      {data.poster_path && (
       <Poster>
        <LazyLoadImage
         alt={data.title}
         src={`https://image.tmdb.org/t/p/w400/${data.poster_path}`}
         effect="blur"
         width="100%"
         height="100%"
        />
       </Poster>
      )}
     </PosterWrapper>
     <Content>
      <Info>
       <Title> {data.title}</Title>
       <Year> {data.release_date?.slice(0, 4)}</Year>
      </Info>
      <Rating>
       <StarIcon />
       <Rate>{data.vote_average?.toFixed(1)}</Rate>
       <Votes>{data.vote_count}</Votes>
      </Rating>
     </Content>
    </StyledLink>
   ) : (
    <StyledLink
     onClick={() => switchSearchbar()}
     to={toMovie({ id: data.id })}
    >
     <PosterWrapper>
      {data.profile_path && (
       <Poster
        loading="lazy"
        alt={data.title}
        src={`https://image.tmdb.org/t/p/w400/${data.profile_path}`}
       />
      )}
     </PosterWrapper>
     <Content>
      <Title> {data.name}</Title>
     </Content>
    </StyledLink>
   )}
  </Wrapper>
 );
};
