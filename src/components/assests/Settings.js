import { useModal } from '@nextui-org/react';
import React from 'react';
import { MdSettings } from 'react-icons/md';
import Modal from '../modal/Modal';
import SitesList from './SitesList';
import styles from './settings.module.css';
import useSitesChecked from '../../hooks/useSitesChecked';
import { orderByName, SITES } from '../../utils/sitesList';

const Settings = () => {
  const { setVisible, bindings } = useModal(false);
  const { setSites } = useSitesChecked();

  const handleReset = () => {
    const orderSites = orderByName(SITES);
    localStorage.removeItem('sitesToSearch');
    setSites(orderSites);
  };

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
        reset={handleReset}
      />
    </>
  );
};

export default Settings;
