import { useSelector } from "react-redux";
import { toMovie, toPerson } from "../../routes";
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
import poster from "../../assets/images/no-poster.png";
import avatar from "../../assets/images/no-avatar.png";

export const SearchTile = ({ item, switchSearchbar }) => {
 const category = useSelector(selectCategory);

 return (
  <Wrapper>
   {category === "movie" ? (
    <StyledLink
     onClick={() => switchSearchbar()}
     to={toMovie({ id: item.id })}
    >
     <PosterWrapper>
      <Poster>
       <LazyLoadImage
        alt={item.title}
        src={
         item.poster_path
          ? `https://image.tmdb.org/t/p/w400/${item.poster_path}`
          : poster
        }
        effect="blur"
        width="100%"
        height="100%"
       />
      </Poster>
     </PosterWrapper>
     <Content>
      <Info>
       <Title>{item.title}</Title>
       <Year>{item.release_date?.slice(0, 4)}</Year>
      </Info>
      <Rating>
       <StarIcon />
       <Rate>{item.vote_average?.toFixed(1)}</Rate>
       <Votes>{item.vote_count}</Votes>
      </Rating>
     </Content>
    </StyledLink>
   ) : (
    <StyledLink
     onClick={() => switchSearchbar()}
     to={toPerson({ id: item.id })}
    >
     <PosterWrapper>
      <Poster>
       <LazyLoadImage
        alt={item.title}
        src={
         item.profile_path
          ? `https://image.tmdb.org/t/p/w400/${item.profile_path}`
          : avatar
        }
        effect="blur"
        width="100%"
        height="100%"
       />
      </Poster>
     </PosterWrapper>
     <Content>
      <Title>{item.name}</Title>
     </Content>
    </StyledLink>
   )}
  </Wrapper>
 );
};
