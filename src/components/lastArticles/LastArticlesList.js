import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useSitesChecked from '../../hooks/useSitesChecked';
import { Collapse, Link, Loading } from '@nextui-org/react';

const LastArticlesList = ({ lastArticles }) => {
  const { sites } = useSitesChecked();
  const [data, setData] = useState(null);

  useEffect(() => {
    const queries = sites.map(site => {
      return site.reqDirection + '?per_page=3';
    });
    Promise.allSettled(queries.map(query => axios.get(query))).then(values => {
      const dataWithSiteRef = values.map((value, i) => {
        const ob = {
          ...value,
          site: sites[i].name,
          id: sites[i].id,
        };
        return ob;
      });
      const onlySuccessData = dataWithSiteRef.filter(
        data => data.status === 'fulfilled' && data.value.data.length > 0
      );
      setData(onlySuccessData);
    });
  }, [sites]);

  return (
    <Collapse.Group>
      {data?.length > 0 ? (
        data?.map(d => (
          <Collapse title={d?.site} key={d?.id}>
            {d?.value?.data?.map((article, i) => (
              <Link
                href={article?.link}
                target='__blank'
                key={i}
                css={{ margin: '12px 0', padding: '0', display: 'block' }}
              >
                {article?.title?.rendered}
              </Link>
            ))}
          </Collapse>
        ))
      ) : (
        <Loading
          type='gradient'
          size='lg'
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      )}
    </Collapse.Group>
  );
};

export default LastArticlesList;
