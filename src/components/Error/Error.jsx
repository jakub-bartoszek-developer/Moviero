import { ErrorWrapper, ErrorIcon, ErrorMessage } from "./styled";

export const Error = () => {
 return (
  <ErrorWrapper>
   <ErrorIcon />
   <ErrorMessage>Something went wrong!</ErrorMessage>
  </ErrorWrapper>
 );
};
