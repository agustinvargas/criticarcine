import { useContext } from 'react';
import { SitesChecked } from '../contexts/SitesChecked';

const useSitesChecked = () => {
  return useContext(SitesChecked);
};

export default useSitesChecked;
