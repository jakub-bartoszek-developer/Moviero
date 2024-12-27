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
 return (
  <Wrapper>
   <StyledLink to={toPerson({ id: person.id })}>
    <ImageWrapper>
     <Image>
      <LazyLoadImage
       alt={person.name}
       src={
        person.profile_path
         ? `https://image.tmdb.org/t/p/w400/${person.profile_path}`
         : avatar
       }
       effect="blur"
       width="100%"
       height="100%"
      />
     </Image>
    </ImageWrapper>
    <Content>
     <Name> {person.name}</Name>
     {person.job && <Job>{person.job}</Job>}
     {person.character && <Role>{person.character}</Role>}
    </Content>
   </StyledLink>
  </Wrapper>
 );
};
