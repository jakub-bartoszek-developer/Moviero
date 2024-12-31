import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 height: 100%;
 align-items: center;
 justify-content: center;
 width: 100%;
`;

export const Item = styled.div`
 background-color: ${({ theme }) => theme.colors.site.text};
 display: inline-block;
 position: absolute;
 left: 8px;
 width: 16px;

 @keyframes lds-facebook {
  0% {
   top: 8px;
   height: 64px;
  }
  50%,
  100% {
   top: 24px;
   height: 32px;
  }
 }

 animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
`;

export const Wrapper = styled.div`
 display: inline-block;
 position: relative;
 width: 80px;
 height: 80px;

 ${Item} {
  &:first-child {
   left: 8px;
   animation-delay: -0.24s;
  }

  &:nth-child(2) {
   left: 32px;
   animation-delay: -0.12s;
  }

  &:nth-child(3) {
   left: 56px;
   animation-delay: 0;
  }
 }
`;
