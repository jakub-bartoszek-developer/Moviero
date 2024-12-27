import styled, { css } from "styled-components";

export const Container = styled.div``;

export const PopularMoviesList = styled.ul`
 display: grid;
 grid-template-columns: repeat(5, minmax(120px, 1fr));
 gap: 16px;
 list-style: none;
 padding: 0;

 @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
  grid-template-columns: repeat(4, minmax(120px, 1fr));
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
  grid-template-columns: repeat(2, minmax(120px, 1fr));
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  grid-template-columns: repeat(1, 100%);
 }
`;
