import React from 'react';
import { Container } from '@nextui-org/react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ScrollToUp from '../assests/ScrollToUp';

const Layout = ({ children }) => {
  return (
    <Container md>
      <nav>
        <Navbar />
      </nav>
      {children}
      <footer>
        <Footer />
      </footer>
      <ScrollToUp />
    </Container>
  );
};

export default Layout;
