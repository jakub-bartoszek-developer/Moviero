import styled, { css } from "styled-components";
import { ReactComponent as Star } from "../../../assets/icons/star.svg";
import { Link } from "react-router-dom";

export const Container = styled.div``;

export const Banner = styled.div`
 box-shadow: inset 0px 0px 80px 100px
   ${({ theme }) => theme.colors.site.background},
  inset 0px 0px 50px 50px ${({ theme }) => theme.colors.site.background};
 width: 100%;
 height: 100vw;
 max-height: 570px;
 background-image: ${({ $bgImage }) => `url(${$bgImage})`};
 background-size: cover;
 background-position: top;
 border: 1px solid ${({ theme }) => theme.colors.site.background};
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
  box-shadow: inset 0px 0px 60px 80px
   ${({ theme }) => theme.colors.site.background};
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  gap: 8px;
  box-shadow: inset 0px 0px 30px 50px
   ${({ theme }) => theme.colors.site.background};
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

export const Title = styled(Link)`
 text-decoration: none;
 color: ${({ theme }) => theme.colors.site.text};
 font-weight: 500;
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

export const Genres = styled.div`
 display: flex;
 flex-wrap: wrap;
 gap: 8px;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  gap: 4px;
 }
`;

export const Genre = styled.div`
 background-color: ${({ theme }) => theme.colors.site.blurredBackground};
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
 color: ${({ theme }) => theme.colors.site.mutedText};
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
 background-color: ${({ theme }) => theme.colors.site.blurredBackground};
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

export const PosterWrapper = styled.li`
 height: 95%;
 transition: all 0.3s;
 border-radius: 6px;
 transform-origin: bottom center;
 cursor: pointer;
 filter: brightness(80%);

 ${({ $current }) =>
  $current &&
  css`
   scale: 105%;
   box-shadow: 0 0 50px 30px ${({ theme }) => theme.colors.site.background};
   z-index: 1;
   filter: brightness(110%);
  `}

 &:hover {
  scale: 105%;
  filter: brightness(110%);
 }

 &:first-child {
  transform-origin: bottom left;
 }

 &:last-child {
  transform-origin: bottom right;
 }
`;

export const Poster = styled.div`
 height: 100%;
 overflow: hidden;
 border-radius: 5px;
`;

export const SimilarMoviesList = styled.ul`
 list-style-type: none;
 display: flex;
 padding: 8px 0;
 gap: 16px;
 height: 100%;
 width: 100%;
 align-items: center;
 position: relative;
 scroll-behavior: smooth;
 overflow-x: scroll;
`;

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
