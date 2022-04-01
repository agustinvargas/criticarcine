import React from 'react';
import styles from './cardSlider.module.css';
import Card from '../card/Card';
import { BiChevronRightCircle, BiChevronLeftCircle } from 'react-icons/bi';

const CardSlider = ({ posts, id }) => {
  const slideLeft = () => {
    const slider = document.getElementById(`slider-${id}`);
    slider.scrollLeft -= 1100;
  };

  const slideRigth = () => {
    const slider = document.getElementById(`slider-${id}`);
    slider.scrollLeft += 1100;
  };

  // console.log('que es post en card', post);
  console.log('que es posts en card en ' + id, posts);
  const needArrows = posts?.length < 3 && 'none';

  return (
    <div className={styles.container}>
      <BiChevronLeftCircle
        size='3rem'
        id='leftSlider'
        className={`${styles.sliderIcon} ${styles.left}`}
        style={{ display: needArrows }}
        onClick={slideLeft}
      />
      <div className={styles.postsContainer} id={`slider-${id}`}>
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
