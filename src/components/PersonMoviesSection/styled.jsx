import styled from "styled-components";

export const SectionWrapper = styled.section`
 width: 100%;
 padding-bottom: 16px;
`;

export const SectionHeader = styled.h2`
 width: 100%;
 font-size: 32px;
 margin: 0;
 padding: 24px 0 12px 0;
`;

export const MovieList = styled.ul`
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
 gap: 16px;
 list-style: none;
 padding: 0;

 @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
 }
`;

export const ShowMoreButton = styled.button`
 margin: 16px 0;
 padding: 8px 16px;
 font-size: 16px;
 background-color: ${({ theme }) => theme.colors.tile.background};
 color: white;
 border: none;
 border-radius: 4px;
 cursor: pointer;

 &:hover {
  background-color: ${({ theme }) => theme.colors.tile.hoverBackground};
 }
`;
