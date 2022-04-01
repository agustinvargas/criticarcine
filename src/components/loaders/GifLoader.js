import React from 'react';
import { Container, Image } from '@nextui-org/react';
import styles from './GifLoader.module.css';

const GifLoader = ({ src, txt }) => {
  return (
    <Container
      fluid
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
      }}
    >
      <Image
        showSkeleton
        objectFit='cover'
        width={'35em'}
        height={'12em'}
        maxDelay={10000}
        src={src}
        alt={txt}
      />
      <small className={styles.txtAnimation}>{txt}</small>
    </Container>
  );
};

export default GifLoader;
