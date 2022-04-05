import React, { createContext, useState, useEffect } from 'react';
import { SITES } from '../utils/sitesList';

export const SitesChecked = createContext([]);

const SitesCheckedProvider = ({ children }) => {
  const [sites, setSites] = useState(SITES);

  useEffect(() => {
    const sitesFromLocalStorage = JSON.parse(
      localStorage.getItem('sitesToSearch')
    );

    // Fetch direction must be added from Local Storage - ENV issues
    const addData = sitesFromLocalStorage?.map(siteFromLS => ({
      ...siteFromLS,
      reqDirection: SITES.filter(site => site.id === siteFromLS.id)
        .map(s => s.reqDirection)
        .toString(),
      // name: SITES.filter(site => site.id === siteFromLS.id).map(s => s.name),
      avatar: SITES.filter(site => site.id === siteFromLS.id).map(
        s => s.avatar
      ),
    }));

    setSites(addData || SITES);
  }, []);

  const contextValue = { sites, setSites };

  return (
    <SitesChecked.Provider value={contextValue}>
      {children}
    </SitesChecked.Provider>
  );
};

export default SitesCheckedProvider;
