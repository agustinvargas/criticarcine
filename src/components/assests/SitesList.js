import React, { useEffect, useState } from 'react';
import { Checkbox } from '@nextui-org/react';
import useSitesChecked from '../../hooks/useSitesChecked';
import { SITES } from '../../utils/sitesList';

const SitesList = () => {
  const { sites, setSites } = useSitesChecked();

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
      {SITES.map((site, i) => (
        <Checkbox key={i} value={site.name}>
          {site.name}
          {console.log(site.name)}
        </Checkbox>
      ))}
    </Checkbox.Group>
  );
};

export default SitesList;
