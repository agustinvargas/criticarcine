export const SITES = [
  {
    name: 'Hacerse la crítica',
    reqDirection: process.env.NEXT_PUBLIC_HACERSELACRITICA_REQ_DIRECTION,
    id: 1,
    avatar: false,
  },
  {
    name: 'Micropsia',
    reqDirection: process.env.NEXT_PUBLIC_MICROPSIA_REQ_DIRECTION,
    id: 2,
    avatar:
      'https://www.micropsiacine.com/wp-content/themes/micropsia/favicon.ico' ||
      false,
  },
  {
    name: 'Con los ojos abiertos',
    reqDirection: process.env.NEXT_PUBLIC_CONLOSOJOSABIERTOS_REQ_DIRECTION,
    id: 3,
    avatar:
      'https://i1.wp.com/www.conlosojosabiertos.com/wp-content/uploads/2017/04/favicon.png?fit=36%2C36' ||
      false,
  },
  {
    name: 'A sala llena',
    reqDirection: process.env.NEXT_PUBLIC_ASALALLENA_REQ_DIRECTION,
    id: 4,
    avatar:
      'https://www.asalallena.com.ar/wp-content/themes/asalallena/favicon.ico' ||
      false,
  },
  {
    name: 'Haciendo cine',
    reqDirection: process.env.NEXT_PUBLIC_HACIENDOCINE_REQ_DIRECTION,
    id: 5,
    avatar:
      'https://haciendocine.com.ar/wp-content/uploads/2020/06/favicon-2.png' ||
      false,
  },
  {
    name: 'Leer cine',
    reqDirection: process.env.NEXT_PUBLIC_LEERCINE_REQ_DIRECTION,
    id: 6,
    avatar:
      'https://www.leercine.com.ar/wp-content/uploads/2018/06/cropped-logo.png' ||
      false,
  },
  {
    name: 'Perro blanco',
    reqDirection: process.env.NEXT_PUBLIC_PERROBLANCO_REQ_DIRECTION,
    id: 7,
    avatar:
      'https://www.perroblanco.net/wp-content/uploads/Logo-WP-Login-v2-1.png' ||
      false,
  },
  {
    name: 'La cosa cine',
    reqDirection: process.env.NEXT_PUBLIC_LACOSACINE_REQ_DIRECTION,
    id: 8,
    avatar:
      'https://www.lacosacine.com/wp-content/uploads/2018/12/logo.png' || false,
  },
  {
    name: 'Cinergia',
    reqDirection: process.env.NEXT_PUBLIC_CINERGIA_REQ_DIRECTION,
    id: 9,
    avatar:
      'https://cinergiaonline.com/wp-content/uploads/2021/09/CINERGIAiso-300x300.png' ||
      false,
  },
  {
    name: 'Revista Hush',
    reqDirection: process.env.NEXT_PUBLIC_REVISTAHUSH_REQ_DIRECTION,
    id: 10,
    avatar:
      'https://revistahush.com/wp-content/uploads/2022/01/cropped-favicom-512-x-512-circulo.png' ||
      false,
  },
];

export const orderByName = array => {
  return array.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
};
