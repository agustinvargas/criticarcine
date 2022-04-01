import { Container, Link } from '@nextui-org/react';
import React from 'react';

const Footer = () => {
  return (
    <Container css={{ margin: '9em 0 2em 0', textAlign: 'center' }}>
      <small>
        Sitio sin fines comerciales. Desarrollado por{' '}
        <Link href='https://github.com/agustinvargas' target='__blank'>
          @agustinvargas
        </Link>
      </small>
    </Container>
  );
};

export default Footer;
