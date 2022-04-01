import React, { useEffect, useState } from 'react';
import { Checkbox } from '@nextui-org/react';
import useSitesChecked from '../../hooks/useSitesChecked';
import { SITES } from '../../utils/sitesList';

const SitesList = () => {
  const { sites, setSites } = useSitesChecked();
  // const [parseName, setParseName] = useState(false);
  // const [parseName2, setParseName2] = useState([]);

  // useEffect(() => {
  //   setParseName(sites.map(site => site.name));
  // }, [sites, setParseName]);
  // console.log('SITES', sites);

  // console.log('parseName', parseName);
  // console.log('parseName2', parseName2);

  const handleChange = e => {
    // setParseName2(e);
    const res = SITES.filter(item => e.includes(item.name));

    // const res = SITES.filter((item) => {
    //   return e.indexOf(item.name) >= 0;
    // });

    console.log('RES', res);
    setSites(res);

    // const filter = SITES.filter(site => site.name.incl(e));
    // console.log('filter', filter);
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
