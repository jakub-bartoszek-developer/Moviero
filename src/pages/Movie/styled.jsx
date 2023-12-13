import styled, { css } from "styled-components";
import { ReactComponent as Star } from "../../assets/icons/star.svg";

export const Banner = styled.div`
 box-shadow: inset 0px 0px 80px 100px #00141a, inset 0px 0px 50px 50px #00141a;
 width: 100%;
 height: 100vw;
 max-height: 570px;
 background-image: ${({ $bgImage }) => `url(${$bgImage})`};
 background-size: cover;
 background-position: top;
 color: white;
 border: 1px solid #00141a;

 animation: loading 1s ease-in;
 @keyframes loading {
  0% {
   opacity: 0%;
  }
  100% {
   opacity: 100%;
  }
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
  box-shadow: inset 0px 0px 60px 80px #00141a;
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  gap: 8px;
  box-shadow: inset 0px 0px 30px 50px #00141a;
 }
`;

export const MovieDetails = styled.div`
 padding-top: 82px;
 width: 100%;
 display: flex;
 flex-direction: column;
 gap: 16px;
 height: 100%;
`;

export const Title = styled.h1`
 font-size: 72px;
 padding: 0;
 margin: 0;
 text-shadow: 0 0 10px black, 0 0 20px black;

 @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
  font-size: 64px;
 }
 @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
  font-size: 52px;
 }
 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 40px;
 }
 @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  font-size: 24px;
 }
`;

export const Year = styled.span`
 color: #afafaf;
`;

export const Genres = styled.div`
 display: flex;
 flex-wrap: wrap;
 gap: 8px;
 width: 50%;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  gap: 4px;
 }
`;

export const Genre = styled.div`
 background-color: #00000070;
 padding: 6px;
 font-size: 12px;
 border-radius: 5px;
 text-shadow: 0 0 5px black, 0 0 10px black, 0 0 20px black, 0 0 30px black;
 backdrop-filter: blur(10px);

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  padding: 4px;
  font-size: 10px;
 }
`;

export const Rating = styled.div`
 display: flex;
 gap: 8px;
 align-items: center;
 text-shadow: 0 0 5px black, 0 0 10px black, 0 0 20px black, 0 0 30px black;
`;

export const StarIcon = styled(Star)`
 color: yellow;
 height: 24px;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  height: 16px;
 }
`;

export const Rate = styled.span`
 font-size: 24px;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 16px;
 }
`;

export const OutOf = styled.span`
 font-size: 16px;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 10px;
 }
`;

export const Votes = styled.span`
 font-weight: 300;
 color: #d1d1d1;
 font-size: 16px;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 10px;
 }
`;

export const Description = styled.p`
 padding: 6px;
 width: 50%;
 overflow-y: auto;
 border-radius: 10px;
 background-color: #00000050;
 font-size: 16px;
 font-weight: 300;
 backdrop-filter: blur(5px);
 text-shadow: 0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 12px;
  width: 100%;
  margin-top: auto;
  margin-bottom: 0;
 }
`;

export const Cast = styled.ul`
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
 gap: 16px;
 list-style: none;
 padding: 0;
`;

export const Crew = styled.ul`
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
 gap: 16px;
 list-style: none;
 padding: 0;
`;

export const SectionWrapper = styled.section`
 width: 100%;
 padding-bottom: 16px;
`;

export const SectionHeader = styled.h2`
 color: white;
 width: 100%;
 font-size: 32px;
 margin: 0;
 padding: 24px 0 12px 0;
`;

export const Tagline = styled.p`
 font-style: italic;
 text-shadow: 0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black;
`;
