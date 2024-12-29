import styled from "styled-components";

export const Container = styled.div`
 max-width: 1400px;
 margin: 0 auto;
 padding: 88px 16px 16px;
 height: 100%;
`;

export const ImageWrapper = styled.div`
 height: 100%;
 aspect-ratio: 2 / 3;
 background-color: black;
`;

export const Name = styled.h1`
 margin: 0;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 24px;
 }
`;

export const Banner = styled.div`
 width: 100%;
 border: 1px solid ${({ theme }) => theme.colors.site.background};
 display: grid;
 grid-template-columns: 30% 70%;
 gap: 16px;
`;

export const Image = styled.img`
 width: 100%;
`;

export const PersonDetails = styled.div`
 display: flex;
 flex-direction: column;
 gap: 8px;
`;

export const Birthdate = styled.div`
 &::before {
  content: "Date of birth: ";
  color: ${({ theme }) => theme.colors.site.mutedText};
 }
`;

export const Birthplace = styled.div`
 &::before {
  content: "Place of birth: ";
  color: ${({ theme }) => theme.colors.site.mutedText};
 }
`;

export const Biography = styled.div`
 grid-column: 1 / span 2;
`;
