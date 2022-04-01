import { Button, useModal } from '@nextui-org/react';
import React from 'react';
import Modal from '../modal/Modal';
import LastArticlesList from './LastArticlesList';

const LastArticlesButton = ({ lastArticles }) => {
  const { setVisible, bindings } = useModal(false);
  return (
    <>
      <Button color='warning' auto ghost onClick={() => setVisible(true)}>
        Críticas recientes
      </Button>
      <Modal
        setVisible={setVisible}
        bindings={bindings}
        isPost={false}
        title='Últimos posteos'
        content={<LastArticlesList lastArticles={lastArticles} />}
        fc='fc'
      />
    </>
  );
};

export default LastArticlesButton;
