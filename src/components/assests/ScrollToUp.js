import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { BsFileArrowUp } from 'react-icons/bs';

const ScrollToUp = () => {
  return (
    <ScrollToTop showUnder={750} style={{ zIndex: '9999' }}>
      <BsFileArrowUp size='2em' />
    </ScrollToTop>
  );
};

export default ScrollToUp;
