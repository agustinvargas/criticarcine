import React from 'react';
import { Checkbox } from '@nextui-org/react';
import useSitesChecked from '../../hooks/useSitesChecked';
import { orderByName, SITES } from '../../utils/sitesList';

const SitesList = () => {
  const { sites, setSites } = useSitesChecked();

  const orderSites = orderByName(SITES);

  const handleChange = e => {
    const res = SITES.filter(item => e.includes(item.name));
    setSites(res);
  };

  return (
    <Checkbox.Group
      color='secondary'
      value={sites.map(site => site.name)}
      onChange={e => handleChange(e)}
    >
      {orderSites.map((site, i) => (
        <Checkbox key={i} value={site.name}>
          {site.name}
        </Checkbox>
      ))}
    </Checkbox.Group>
  );
};

export default SitesList;
