import styled from "styled-components";

export const PaginationWrapper = styled.div`
 width: 100%;
 display: flex;
 gap: 8px;
 justify-content: center;
 align-items: center;
 padding-bottom: 16px;
`;

export const StyledButton = styled.button`
 height: 32px;
 padding: 0 24px;
 background-color: ${({ theme }) => theme.colors.tile.background};
 color: ${({ theme }) => theme.colors.site.text};
 border: none;
 border-radius: 10px;
 cursor: pointer;
 transition: all 0.3s;

 &:hover {
  scale: 105%;
  background-color: ${({ theme }) => theme.colors.tile.hoverBackground};
 }

 &:disabled {
  cursor: auto;
  color: ${({ theme }) => theme.colors.site.mutedText};
  scale: 100%;
  background-color: ${({ theme }) => theme.colors.tile.background};
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
  padding: 0 26px;
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  height: 28px;
  padding: 0 15px;
 }
`;

export const PageCount = styled.span`
 font-size: 16px;

 @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
  font-size: 14px;
 }
`;
