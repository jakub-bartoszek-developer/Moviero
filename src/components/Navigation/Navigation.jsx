import { useEffect, useRef, useState } from "react";
import { Logo } from "../Logo/Logo";
import { Searchbar } from "../Searchbar/Searchbar";
import { Container, Links, MenuButton, StyledNavLink, Wrapper } from "./styled";
import { Sidebar } from "../Sidebar/Sidebar";

export const Navigation = () => {
 const [isShowed, setIsShowed] = useState(false);

 const onSidebarToggle = (e) => {
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
   <Sidebar
    onSidebarToggle={onSidebarToggle}
    isShowed={isShowed}
   />
   <Container>
    <MenuButton onClick={onSidebarToggle} />
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
