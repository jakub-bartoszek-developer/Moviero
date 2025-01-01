import styled from "styled-components";
import { ReactComponent as Error } from "../../assets/icons/error.svg";

export const Container = styled.div`
 height: 100%;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 gap: 16px;
`;

export const ErrorIcon = styled(Error)`
 color: white;
 height: 96px;
`;

export const ErrorMessage = styled.span`

`
