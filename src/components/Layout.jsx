import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding-top: 80px; /* Add padding to ensure content starts below the fixed navbar */
  padding-bottom: 2rem; /* Add padding to ensure space between content and footer */
`;

function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;