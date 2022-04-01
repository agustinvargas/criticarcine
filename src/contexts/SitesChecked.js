import React, { createContext, useState, useEffect } from 'react';
import { SITES } from '../utils/sitesList';
export const SitesChecked = createContext([]);

const SitesCheckedProvider = ({ children }) => {
  const [sites, setSites] = useState(SITES);

  useEffect(() => {
    setSites(JSON.parse(localStorage.getItem('sitesToSearch')) || SITES);
  }, []);

  const contextValue = { sites, setSites };

  return (
    <SitesChecked.Provider value={contextValue}>
      {children}
    </SitesChecked.Provider>
  );
};

export default SitesCheckedProvider;
