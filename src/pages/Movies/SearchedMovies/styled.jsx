import styled from "styled-components";

export const Container = styled.div`
 min-height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 padding-top: 50px;
`;

export const SearchResultsList = styled.ul`
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
