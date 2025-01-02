import {
 Content,
 Links,
 Logo,
 MenuButton,
 StyledNavLink,
 Wrapper
} from "./styled";
import { Searchbar } from "../Searchbar/Searchbar";

export const Navigation = ({ onSidebarToggle }) => {
 return (
  <Wrapper>
   <Content>
    <MenuButton onClick={onSidebarToggle} />
    <Logo to="/movies?page=1">Moviero</Logo>{" "}
    <Links>
     <StyledNavLink to="/movies?page=1">Movies</StyledNavLink>
     <StyledNavLink to="/people?page=1">People</StyledNavLink>
    </Links>
    <Searchbar />
   </Content>
  </Wrapper>
 );
};
