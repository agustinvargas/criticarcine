import { Avatar, Tooltip } from '@nextui-org/react';
import React from 'react';

const Avatars = ({ data }) => {
  return (
    <Avatar.Group css={{ flexWrap: 'wrap', w: '100%' }}>
      {data?.map(site => (
        <Tooltip
          key={site?.id}
          content={`${site?.site} (${site?.value?.data?.length} ${
            site?.value?.data?.length === 1 ? 'resultado' : 'resultados'
          })`}
        >
          <a href={`/#${site.id}`}>
            <Avatar
              key={site?.id}
              size='lg'
              pointer
              src={site?.avatar || undefined}
              text={!site?.avatar && site?.site}
              bordered
              color='gradient'
              stacked
            />
          </a>
        </Tooltip>
      ))}
    </Avatar.Group>
  );
};

export default Avatars;
