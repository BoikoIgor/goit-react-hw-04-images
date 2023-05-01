import { Container } from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <Container>
      {/* <header>Header</header> */}
      {children}
      {/* <footer>Footer</footer> */}
    </Container>
  );
};
