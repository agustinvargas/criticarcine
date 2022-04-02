import React, { memo } from 'react';
import { Spacer, Text } from '@nextui-org/react';
import CardSlider from '../cardSlider/CardSlider';
import styles from './SiteContainer.module.css';

const SiteContainer = memo(({ data }) => {
  return (
    <section className={styles.container} id={data.id}>
      <div>
        <Text
          css={{
            textGradient: '45deg, $blue500 -20%, $pink500 50%',
          }}
          size={32}
          weight='bold'
        >
          {data?.site}
        </Text>
      </div>
      <Spacer y={1} />
      <CardSlider posts={data?.value?.data} id={data?.id} />
    </section>
  );
});

SiteContainer.displayName = 'SiteContainer';

export default SiteContainer;
