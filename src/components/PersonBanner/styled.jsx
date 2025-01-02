import styled from "styled-components";

export const PersonBannerWrapper = styled.div`
 max-width: 1400px;
 margin: 0 auto;
 padding: 16px;
 display: grid;
 grid-template-columns: min-content 1fr;
 grid-template-rows: min-content min-content 1fr;
`;

export const ImageWrapper = styled.div`
 height: 450px;
 width: 300px;
 grid-row: 1/4;
 margin-right: 16px;
 border-radius: 8px;
 overflow: hidden;

 @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
  height: 300px;
  width: 200px;
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  height: 225px;
  width: 150px;
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  grid-row: 1;
 }
`;

export const PersonDetails = styled.div`
 height: min-content;
 width: 100%;
`;

export const Name = styled.h1`
 margin: 0 0 8px 0;
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

export const BiographyWrapper = styled.div`
 position: relative;
 height: ${({ $isExpanded }) => ($isExpanded ? "100%" : "320px")};
 overflow: hidden;
 position: relative;
 margin-top: 16px;

 @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
  height: ${({ $isExpanded }) => ($isExpanded ? "100%" : "184px")};
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  grid-column: 1/3;
 }
`;

export const BiographyHeader = styled.h2`
 margin-bottom: 4px;
 font-weight: 500;
 font-size: 20px;
`;

export const Biography = styled.p`
 white-space: pre-wrap;
 line-height: 1.5;
 font-size: 14px;
 color: ${({ theme }) => theme.colors.site.mutedText};
`;

export const ReadMoreButton = styled.button`
 height: min-content;
 background-color: ${({ theme }) => theme.colors.site.background};
 color: ${({ theme }) => theme.colors.site.text};
 border: none;
 z-index: 20;
 cursor: pointer;
 transition: 300ms;
 box-shadow: 0 -10px 20px 15px ${({ theme }) => theme.colors.site.background};
 box-shadow: ${({ $isExpanded }) => $isExpanded && "0 0 0 0"};

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  grid-column: -3/-1;
 }

 &:hover {
  text-shadow: 0 0 15px ${({ theme }) => theme.colors.site.text};
 }
`;
