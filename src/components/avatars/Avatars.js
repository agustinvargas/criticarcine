import { Avatar, Tooltip } from '@nextui-org/react';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Avatars = ({ data }) => {
  const router = useRouter();

  const handleClick = siteId => {
    router.push(`${router.pathname}#${siteId}`);
  };

  return (
    <Avatar.Group
      className='avatar-container'
      css={{ flexWrap: 'wrap', w: '100%' }}
    >
      {data?.map(site => (
        <Tooltip
          key={site?.id}
          content={`${site?.site} (${site?.value?.data?.length} ${
            site?.value?.data?.length === 1 ? 'resultado' : 'resultados'
          })`}
        >
          <Avatar
            key={site?.id}
            size='lg'
            pointer
            src={site?.avatar || undefined}
            text={!site?.avatar && site?.site}
            bordered
            color='gradient'
            stacked
            onClick={() => handleClick(site?.id)}
          />
        </Tooltip>
      ))}
    </Avatar.Group>
  );
};

export default Avatars;
