import styled, { css } from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const HorizontalSectionWrapper = styled.section`
 max-height: 300px;
 height: 70vw;
 width: 100%;
 display: grid;
 grid-template-rows: auto 1fr;
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

export const Poster = styled(LazyLoadImage)`
 height: 100%;
 overflow: hidden;
 border-radius: 5px;
`;

export const MovieList = styled.ul`
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
