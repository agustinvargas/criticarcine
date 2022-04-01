import React from 'react';
import { Container } from '@nextui-org/react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

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
    </Container>
  );
};

export default Layout;
