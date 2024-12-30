import { toPerson } from "../../routes";
import {
 Content,
 Job,
 Name,
 Image,
 ImageWrapper,
 Role,
 StyledLink,
 Wrapper
} from "./styled";
import avatar from "../../assets/images/no-avatar.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const PersonTile = ({ person }) => {
 const { id, name, profile_path, jobs, characters } = person;

 return (
  <Wrapper>
   <StyledLink to={toPerson({ id: id })}>
    <ImageWrapper>
     <Image>
      <LazyLoadImage
       alt={name}
       src={
        profile_path
         ? `https://image.tmdb.org/t/p/w400/${profile_path}`
         : avatar
       }
       effect="blur"
       width="100%"
       height="100%"
      />
     </Image>
    </ImageWrapper>
    <Content>
     <Name>{name}</Name>
     {jobs && <Job>{jobs.join(", ")}</Job>}
     {characters && <Role>{characters}</Role>}
    </Content>
   </StyledLink>
  </Wrapper>
 );
};
