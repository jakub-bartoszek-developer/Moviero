import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { Link } from "react-router-dom";

export const Poster = styled.div`
 width: 100%;
 height: 100%;
 transition: 300ms;
`;

export const Wrapper = styled.li`
 &:hover {
  ${Poster} {
   scale: 103%;
  }
 }
`;

export const StyledLink = styled(Link)`
 display: grid;
 grid-template-rows: auto 1fr;
 color: ${({ theme }) => theme.colors.site.text};
 padding: 0;
 background-color: ${({ theme }) => theme.colors.tile.background};
 border-radius: 5px;
 overflow: hidden;
 transition: all 0.3s;
 cursor: pointer;
 height: 100%;
 text-decoration: none;

 @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
  grid-template-columns: 40% 60%;
 }

 &:hover {
  background-color: ${({ theme }) => theme.colors.tile.hoverBackground};
 }
`;

export const PosterWrapper = styled.div`
 width: 100%;
 aspect-ratio: 6/9;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: black;
 overflow: hidden;
`;

export const Content = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 padding: 8px;
 gap: 8px;
 height: 100%;

 @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
  gap: 6px;
 }
`;

export const Info = styled.div`
 display: flex;
 flex-direction: column;
 gap: 8px;
`;

export const Title = styled.div`
 font-size: 20px;

 @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
  font-size: 18px;
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
  font-size: 16px;
 }
`;

export const Year = styled.div`
 color: ${({ theme }) => theme.colors.site.mutedText};

 @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
  font-size: 14px;
 }
`;

export const Genres = styled.ul`
 list-style: none;
 padding: 0;
 display: flex;
 flex-wrap: wrap;
 gap: 8px;

 @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
  gap: 6px;
 }
`;

export const Genre = styled.li`
 background-color: ${({ theme }) => theme.colors.site.blurredBackground};
 padding: 6px;
 font-size: 14px;
 border-radius: 5px;

 @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
  font-size: 12px;
 }
`;

export const Rating = styled.div`
 display: flex;
 flex-wrap: wrap;
 align-items: center;
 column-gap: 8px;
 font-size: 16px;

 @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
  font-size: 14px;
 }
`;

export const Rate = styled.div``;

export const Votes = styled.div`
 color: ${({ theme }) => theme.colors.site.mutedText};
 &::after {
  content: " votes";
 }
`;

export const StarIcon = styled(Star)`
 height: 16px;
 color: yellow;

 @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
  height: 14px;
 }
`;
