import { useModal } from '@nextui-org/react';
import React from 'react';
import { MdSettings } from 'react-icons/md';
import Modal from '../modal/Modal';
import SitesList from './SitesList';
import styles from './settings.module.css';

const Settings = () => {
  const { setVisible, bindings } = useModal(false);

  return (
    <>
      <MdSettings
        size='2em'
        className={styles.settingIcon}
        onClick={() => setVisible(true)}
      />
      <Modal
        setVisible={setVisible}
        bindings={bindings}
        isPost={false}
        title='Elegí los sitios en los que querés buscar'
        content={<SitesList />}
      />
    </>
  );
};

export default Settings;
