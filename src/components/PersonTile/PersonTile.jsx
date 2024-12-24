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



export const PersonTile = ({ person }) => {
 return (
  <Wrapper>
   <StyledLink to={toPerson({ id: person.id })}>
    <ImageWrapper>
     <Image src={person.profile_path ? `https://image.tmdb.org/t/p/w400/${person.profile_path}` : avatar} />
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
