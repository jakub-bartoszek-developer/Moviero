import styled from "styled-components";
import { ReactComponent as SearchIconSvg } from "../../assets/icons/search.svg";

export const Container = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: flex-end;
 position: relative;
`;

export const SearchbarWrapper = styled.form`
 width: ${({ $isExpanded }) => ($isExpanded ? "100%" : "36px")};
 height: 36px;
 transition: all 0.3s;
 display: grid;
 grid-template-columns: auto minmax(0, 1fr);
 align-items: center;
 background-color: ${({ theme }) => theme.colors.site.background};
 border-radius: 50px;
`;

export const SearchButton = styled.div`
 height: 36px;
 width: 36px;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 50px;
 cursor: pointer;
`;

export const SearchIcon = styled(SearchIconSvg)`
 height: 50%;
`;

export const SearchInput = styled.input`
 background-color: transparent;
 color: inherit;
 border: none;
 transition: all 0.3s;
 width: 100%;
 height: 100%;
 padding-right: 16px;

 &:focus {
  outline: none;
 }
`;

export const ResultList = styled.ul`
 position: absolute;
 top: 72px;
 right: 0;
 display: flex;
 flex-direction: column;
 padding: 8px;
 width: 70vw;
 max-width: 500px;
 border: 2px solid #3c4a53;
 background-color: ${({ theme }) => theme.colors.tile.background};
 border-top: none;
 gap: 8px;
 max-height: 80vh;
 overflow-y: scroll;
 z-index: 3;
 transition: all 0.3s;

 ${SearchbarWrapper}:focus-within & {
  transform: scale(1, 1);
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  width: 100vw;
  right: -16px;
  max-height: 50vh;
 }
`;

export const ResultStatus = styled.li`
 width: 100%;
 display: flex;
`;
