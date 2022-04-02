import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { BsFileArrowUp } from 'react-icons/bs';

const ScrollToUp = () => {
  return (
    <ScrollToTop showUnder={700} style={{ zIndex: '9999999' }}>
      <BsFileArrowUp size='2em' />
    </ScrollToTop>
  );
};

export default ScrollToUp;
