import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 padding: 0 16px 16px 16px;
 max-width: 1400px;
 margin: 0 auto;
`;

export const MovieList = styled.ul`
 list-style: none;
 padding: 0;
 display: grid;
 gap: 16px;
 grid-template-columns: repeat(5, minmax(120px, 1fr));

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

export const PeopleList = styled.ul`
 display: grid;
 grid-template-columns: repeat(5, minmax(120px, 1fr));
 gap: 16px;
 list-style: none;
 padding: 0;

 @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
  grid-template-columns: repeat(4, minmax(120px, 1fr));
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  grid-template-columns: repeat(2, 1fr);
 }
`;

export const ShowMoreButton = styled.button`
 margin-top: 16px;
 padding: 8px 16px;
 font-size: 16px;
 background-color: ${({ theme }) => theme.colors.tile.background};
 color: white;
 border: none;
 border-radius: 4px;
 cursor: pointer;
 width: min-content;
 white-space: nowrap;

 &:hover {
  background-color: ${({ theme }) => theme.colors.tile.hoverBackground};
 }
`;
