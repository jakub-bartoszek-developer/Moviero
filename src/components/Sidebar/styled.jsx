import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarWrapper = styled.div`
 display: flex;
 top: 0;
 left: -160px;
 width: 160px;
 position: absolute;
 background-color: ${({ theme }) => theme.colors.tile.background};
 height: 100dvh;
 flex-direction: column;
 transition: 300ms;
 z-index: 30;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  left: ${({ $isShowed }) => ($isShowed ? "0" : "-160px")};
 }
`;

export const SidebarHeader = styled.div`
 height: 50px;
 padding: 0 8px;
 display: flex;
 gap: 8px;
 justify-items: center;
 align-items: center;
`;

export const SidebarContent = styled.div`
 display: flex;
 flex-direction: column;
`;

export const SidebarNavLink = styled(NavLink)`
 padding: 8px;
 text-decoration: none;
 color: ${({ theme }) => theme.colors.site.text};
 transition: 300ms;

 &:hover {
  background-color: ${({ theme }) => theme.colors.tile.hoverBackground};
 }
`;
