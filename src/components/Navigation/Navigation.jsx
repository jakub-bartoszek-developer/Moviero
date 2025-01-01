import { Content, Links, MenuButton, StyledNavLink, Wrapper } from "./styled";
import { Logo } from "../Logo/Logo";
import { Searchbar } from "../Searchbar/Searchbar";

export const Navigation = ({ onSidebarToggle }) => {
 return (
  <Wrapper>
   <Content>
    <MenuButton onClick={onSidebarToggle} />
    <Logo />
    <Links>
     <StyledNavLink to="/movies?page=1">Movies</StyledNavLink>
     <StyledNavLink to="/people?page=1">People</StyledNavLink>
    </Links>
    <Searchbar />
   </Content>
  </Wrapper>
 );
};
