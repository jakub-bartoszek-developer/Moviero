import { MenuButton } from "../Navigation/styled";
import {
 Logo,
 SidebarBackground,
 SidebarContent,
 SidebarHeader,
 SidebarNavLink,
 SidebarWrapper
} from "./styled";

export const Sidebar = ({ setIsSidebarOpen, onSidebarToggle, isOpen }) => {
 return (
  <>
   <SidebarWrapper $isOpen={isOpen}>
    <SidebarHeader>
     <MenuButton onClick={onSidebarToggle} />
     <Logo to="/movies?page=1">Moviero</Logo>{" "}
    </SidebarHeader>
    <SidebarContent>
     <SidebarNavLink to="/movies?page=1">Movies</SidebarNavLink>
     <SidebarNavLink to="/people?page=1">People</SidebarNavLink>
    </SidebarContent>
   </SidebarWrapper>
   <SidebarBackground
    $isOpen={isOpen}
    onClick={() => setIsSidebarOpen(false)}
   />
  </>
 );
};
