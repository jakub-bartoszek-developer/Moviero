import { Container, ErrorIcon, ErrorMessage } from "./styled";

export const Error = () => {
 return (
  <Container>
   <ErrorIcon />
   <ErrorMessage>Something went wrong!</ErrorMessage>
  </Container>
 );
};
