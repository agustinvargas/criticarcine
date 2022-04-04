import React, { useRef } from 'react';
import { BiChevronRightCircle, BiChevronLeftCircle } from 'react-icons/bi';
import Card from '../card/Card';
import styles from './cardSlider.module.css';

const CardSlider = ({ posts, id }) => {
  const container = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });

  const needArrows = posts?.length < 3 && 'none';
  const needDrag = Boolean(posts?.length > 2);

  const slideLeft = () => {
    container.current.scrollLeft -= 1100;
  };

  const slideRigth = () => {
    container.current.scrollLeft += 1100;
  };

  const handleMouseLeave = () => {
    if (needDrag) {
      container.isDown = false;
    }
  };

  const handleMouseDown = e => {
    if (needDrag) {
      container.current.isDown = true;
      container.current.startX = e.pageX - container.current.offsetLeft;
      container.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseUp = () => {
    if (needDrag) {
      container.current.isDown = false;

      container.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = e => {
    if (!container.current.isDown) return;
    e.preventDefault();
    const x = e.pageX - container.current.offsetLeft;
    const walk = (x - container.current.startX) * 3; //scroll-fast
    container.current.scrollLeft -= walk;
  };

  return (
    <div className={styles.container}>
      <BiChevronLeftCircle
        size='3rem'
        id='leftSlider'
        className={`${styles.sliderIcon} ${styles.left}`}
        style={{ display: needArrows }}
        onClick={slideLeft}
      />
      <div
        ref={container}
        onMouseUp={handleMouseUp}
        onMouseMove={e => handleMouseMove(e)}
        onMouseDown={e => handleMouseDown(e)}
        onMouseLeave={handleMouseLeave}
        className={styles.postsContainer}
        id={`slider-${id}`}
      >
        {posts?.map((post, i) => (
          <Card
            key={i}
            title={post?.title?.rendered}
            excerpt={post?.excerpt?.rendered}
            date={post?.date}
            content={post?.content?.rendered}
            link={post?.guid?.rendered}
            img={
              post?._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes
                ?.medium_large?.source_url ||
              post?._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes
                ?.large?.source_url ||
              post?._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes
                ?.full?.source_url ||
              false
            }
            author={post?._embedded?.author[0]?.name}
          />
        ))}
      </div>
      <BiChevronRightCircle
        size='3rem'
        id='rightSlider'
        className={`${styles.sliderIcon} ${styles.rigth}`}
        style={{ display: needArrows }}
        onClick={slideRigth}
      />
    </div>
  );
};

export default CardSlider;
