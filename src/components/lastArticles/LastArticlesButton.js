import { useState, useEffect } from 'react';
import { Button } from '@nextui-org/react';
// import Link from 'next/link';
import { useRouter } from 'next/router';

const LastArticlesButton = () => {
  const router = useRouter();
  const [btnLabel, setBtnLabel] = useState('');

  useEffect(() => {
    if (router.pathname === '/') {
      setBtnLabel('Críticas recientes');
      return;
    }
    if (router.pathname === '/ultimas') {
      setBtnLabel('Buscar críticas');
      return;
    }

    return;
  }, [router.pathname, setBtnLabel]);

  const handleNav = () => {
    if (router.pathname === '/') {
      router.push('/ultimas');
    }
    if (router.pathname === '/ultimas') {
      router.push('/');
    }
  };

  return (
    <Button color='warning' auto ghost onClick={handleNav}>
      {btnLabel}
    </Button>
  );
};

export default LastArticlesButton;
