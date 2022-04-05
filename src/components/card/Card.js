import React from 'react';
import dateFormat from '../../utils/parseDate';
import contentFormat from '../../utils/parseContent';
import parse from 'html-react-parser';
import {
  Card as CardNext,
  Col,
  Text,
  Row,
  Button,
  useModal,
} from '@nextui-org/react';
import Modal from '../modal/Modal';
import styles from './card.module.css';

const Card = ({ date, title, excerpt, link, content, img, author }) => {
  const dateFormatted = dateFormat(date, 'dd/MM/yy');
  const excerptFormatted = contentFormat(excerpt);
  const contentFormatted = contentFormat(content);
  const titleFormatted = contentFormat(title);
  const { setVisible, bindings } = useModal(false);

  return (
    <>
      <CardNext cover shadow={false} className={styles.card}>
        <CardNext.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
          <Col>
            <Text size={12} weight='bold' transform='uppercase' color='#9E9E9E'>
              {date && dateFormatted}
            </Text>

            <Text h3 color='white' className={styles.title}>
              {titleFormatted && parse(titleFormatted)}
            </Text>
          </Col>
        </CardNext.Header>
        <CardNext.Body css={!img && { background: 'dimgrey' }}>
          {img && (
            <CardNext.Image src={img} height={400} width='100%' alt={title} />
          )}
        </CardNext.Body>
        <CardNext.Footer
          blur
          css={{
            position: 'absolute',
            bgBlur: '#0f1114',
            borderTop: '$borderWeights$light solid $gray700',
            bottom: 0,
            zIndex: 1,
            flexDirection: 'column',
          }}
        >
          <Row
            css={{
              maxHeight: '100px',
              // minHeight: '70px',
              overflow: 'hidden',
              marginBottom: '10px',
            }}
          >
            <Text color='#d1d1d1' size={12} className={styles.cut_extract}>
              {excerptFormatted && parse(excerptFormatted)}
            </Text>
          </Row>
          <Row justify='flex-end'>
            <Button
              flat
              auto
              rounded
              onClick={() => setVisible(true)}
              css={{ color: '#94f9f0', bg: '#94f9f026' }}
            >
              <Text
                css={{ color: 'inherit' }}
                size={12}
                weight='bold'
                transform='uppercase'
              >
                Ver más
              </Text>
            </Button>
          </Row>
        </CardNext.Footer>
      </CardNext>
      <Modal
        setVisible={setVisible}
        bindings={bindings}
        title={title}
        content={contentFormatted && parse(contentFormatted)}
        link={link}
        img={img}
        author={author}
        isPost={true}
      />
    </>
  );
};

export default Card;
