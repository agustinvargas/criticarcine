import React from 'react';
import {
  Modal as ModalNext,
  Link,
  Button,
  Text,
  Image,
} from '@nextui-org/react';
import useSitesChecked from '../../hooks/useSitesChecked';

export default function Modal({
  setVisible,
  bindings,
  content,
  title,
  link,
  img,
  author,
  isPost,
  fc,
}) {
  const { sites } = useSitesChecked();

  return (
    <ModalNext
      blur
      scroll
      width='600px'
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
      {...bindings}
    >
      <ModalNext.Header>
        <Text b id='modal-title' size={18}>
          {title}
        </Text>
      </ModalNext.Header>
      <ModalNext.Body id='modal-description'>
        {isPost && (
          <>
            <img src={img} alt={title} style={{ margin: '15px 0' }} />
            <Link href={link} block icon target='_blank'>
              Leé esta crítica en su sitio original para visualizar
              correctamente las imágenes y otros contenidos multimedia
            </Link>
          </>
        )}
        {content}
        {isPost && author && (
          <small>Autor/a o contenido subido por {author}</small>
        )}
      </ModalNext.Body>
      <ModalNext.Footer>
        <Button auto flat color='error' onClick={() => setVisible(false)}>
          Cerrar
        </Button>
        {isPost ? (
          <Button
            as={Link}
            href={link}
            target='_blank'
            auto
            onClick={() => setVisible(false)}
            css={{ color: 'white' }}
          >
            Leer en sitio original
          </Button>
        ) : !isPost && fc ? (
          <Button auto css={{ color: 'white' }}>
            Actualizar
          </Button>
        ) : (
          <Button
            target='_blank'
            auto
            onClick={() => {
              localStorage.setItem('sitesToSearch', JSON.stringify(sites));
              setVisible(false);
            }}
            css={{ color: 'white' }}
          >
            Guardar
          </Button>
        )}
      </ModalNext.Footer>
    </ModalNext>
  );
}
