import { Logo } from "../Logo/Logo";
import { MenuButton } from "../Navigation/styled";
import {
 SidebarContent,
 SidebarHeader,
 SidebarNavLink, 
 SidebarWrapper
} from "./styled";

export const Sidebar = ({ onSidebarToggle, isShowed }) => {
 return (
  <SidebarWrapper $isShowed={isShowed}>
   <SidebarHeader>
    <MenuButton onClick={onSidebarToggle} />
    <Logo />
   </SidebarHeader>
   <SidebarContent>
    <SidebarNavLink to="/movies?page=1">Movies</SidebarNavLink>
    <SidebarNavLink to="/people?page=1">People</SidebarNavLink>
   </SidebarContent>
  </SidebarWrapper>
 );
};
