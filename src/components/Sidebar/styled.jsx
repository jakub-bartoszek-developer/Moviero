import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarWrapper = styled.div`
 display: flex;
 position: fixed;
 top: 0;
 left: ${({ $isOpen }) => ($isOpen ? "0" : "-160px")};
 width: 160px;
 height: 100dvh;
 flex-direction: column;
 background-color: ${({ theme }) => theme.colors.tile.background};
 transition: left 300ms ease-in-out, box-shadow 300ms ease-in-out;
 z-index: 30;
 box-shadow: ${({ $isOpen }) => ($isOpen ? "0 10px 100px 0px black" : "")};

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-160px")};
 }
`;

export const SidebarHeader = styled.div`
 height: 50px;
 padding: 0 8px;
 display: flex;
 gap: 8px;
 justify-content: center;
 align-items: center;
`;

export const SidebarContent = styled.div`
 display: flex;
 flex-direction: column;
 flex-grow: 1;
`;

export const SidebarNavLink = styled(NavLink)`
 padding: 8px;
 text-decoration: none;
 color: ${({ theme }) => theme.colors.site.text};
 transition: text-shadow 300ms ease-in-out;

 &.active {
  text-shadow: 0 0 15px ${({ theme }) => theme.colors.site.text};
 }

 &:hover {
  text-shadow: 0 0 15px ${({ theme }) => theme.colors.site.text};
 }
`;

export const SidebarBackground = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100dvh;
 background-color: rgba(0, 0, 0, 0.5);
 backdrop-filter: blur(2px);
 transition: opacity 300ms ease-in-out;
 z-index: 3;
 opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
 pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
`;
