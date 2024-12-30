import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";

export const Wrapper = styled.nav`
 width: 100%;
 background: linear-gradient(
  0deg,
  rgba(0, 34, 44, 0.5) 0%,
  rgba(0, 34, 44, 1) 100%
 );
 height: 50px;
 border-bottom: 2px solid #ffffff30;
 position: fixed;
 top: 0;
 z-index: 2;
 backdrop-filter: blur(2px);
`;

export const Container = styled.div`
 height: 100%;
 margin: 0 auto;
 max-width: 1400px;
 padding: 0 16px;
 display: grid;
 align-items: center;
 justify-content: space-between;
 gap: 8px;
 grid-template-columns: 1fr 1fr 1fr;
 position: relative;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  grid-template-columns: auto auto 1fr;
   padding: 0 8px;

 }

 @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  grid-template-columns: auto 1fr;
 }
`;

export const Links = styled.div`
 display: flex;
 justify-content: space-around;
 gap: 32px;
 align-items: center;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  display: none;
 }
`;

export const StyledNavLink = styled(NavLink)`
 text-decoration: none;
 font-size: 16px;
 font-weight: 400;
 padding: 16px;
 color: ${({ theme }) => theme.colors.site.text};
 white-space: nowrap;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  display: none;
 }
`;

export const MenuHeader = styled.div`
 display: flex;
 align-items: center;
 gap: 8px;
`;

export const MenuButton = styled(Menu)`
 display: none;
 color: ${({ theme }) => theme.colors.site.primaryText};
 height: 28px;
 width: 28px;
 cursor: pointer;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  display: flex;
 }
`;

export const MenuLogo = styled.div`
 display: flex;
 padding: 0;
 margin: 0;
 justify-content: start;
 align-items: center;
 font-size: 24px;
 font-weight: 700;
 color: ${({ theme }) => theme.colors.site.primaryText};
 text-shadow: 0 0 15px ${({ theme }) => theme.colors.site.primaryText};
 text-decoration: none;
`;

export const SidebarNavLink = styled(NavLink)`
 text-decoration: none;
 font-size: 16px;
 font-weight: 400;
 color: ${({ theme }) => theme.colors.site.text};
 white-space: nowrap;
 width: 100%;
`;

export const SidebarWrapper = styled.div`
 position: absolute;
 display: flex;
 top: 0;
 left: ${({ $isShowed }) => ($isShowed ? "0vw" : "-100vw")};
 height: 100vh;
 width: 100vw;
 display: flex;
 z-index: 3;

 transition: all 0.5s;
`;

export const Sidebar = styled.div`
 width: 70%;
 display: flex;
 flex-direction: column;
 padding: 20px 16px;
 gap: 16px;
 background-color: ${({ theme }) => theme.colors.site.background};
 box-shadow: 0 0 80px 30px black;
`;

export const SidebarBackground = styled.div`
 width: 30%;
`;
