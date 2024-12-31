import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(NavLink)`
 width: min-content;
 font-size: 32px;
 font-weight: 700;
 color: ${({ theme }) => theme.colors.site.text};
 text-decoration: none;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 24px;
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  display: none;
 }
`;
