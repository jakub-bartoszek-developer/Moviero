import { useEffect, useRef, useState } from "react";
import { Logo } from "../Logo/Logo";
import { Searchbar } from "../Searchbar/Searchbar";
import {
 Container,
 Links,
 MenuButton,
 MenuHeader,
 MenuLogo,
 Sidebar,
 SidebarBackground,
 SidebarNavLink,
 SidebarWrapper,
 StyledNavLink,
 Wrapper
} from "./styled";

export const Navigation = () => {
 const [isShowed, setIsShowed] = useState(false);

 const handleButtonClick = (e) => {
  setIsShowed(!isShowed);
 };

 const handleOutsideClick = (e) => {
  if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
   setIsShowed(false);
   e.stopPropagation();
  }
 };

 useEffect(() => {
  document.addEventListener("mousedown", handleOutsideClick);

  return () => {
   document.removeEventListener("mousedown", handleOutsideClick);
  };
 }, []);

 const sidebarRef = useRef(null);
 return (
  <Wrapper>
   <SidebarWrapper
    $isShowed={isShowed}
    ref={sidebarRef}
   >
    <Sidebar>
     <MenuHeader>
      <MenuButton onClick={handleButtonClick} />
      <MenuLogo to="/movies?page=1">Moviero</MenuLogo>
     </MenuHeader>
     <SidebarNavLink to="/movies?page=1">Movies</SidebarNavLink>
     <SidebarNavLink to="/people?page=1">People</SidebarNavLink>
    </Sidebar>
    <SidebarBackground onClick={() => setIsShowed(false)} />
   </SidebarWrapper>
   <Container>
    <MenuButton onClick={handleButtonClick} />
    <Logo />
    <Links>
     <StyledNavLink to="/movies?page=1">Movies</StyledNavLink>
     <StyledNavLink to="/people?page=1">People</StyledNavLink>
    </Links>
    <Searchbar />
   </Container>
  </Wrapper>
 );
};
