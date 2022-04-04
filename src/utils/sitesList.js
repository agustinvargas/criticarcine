export const SITES = [
  {
    name: 'Hacerse la crítica',
    reqDirection: 'http://hacerselacritica.com/wp-json/wp/v2/posts',
    id: 1,
    avatar: false,
  },
  {
    name: 'Micropsia',
    reqDirection: 'http://micropsiacine.com/wp-json/wp/v2/posts',
    id: 2,
    avatar:
      'https://www.micropsiacine.com/wp-content/themes/micropsia/favicon.ico',
  },
  {
    name: 'Con los ojos abiertos',
    reqDirection: 'http://conlosojosabiertos.com/wp-json/wp/v2/posts',
    id: 3,
    avatar:
      'https://i1.wp.com/www.conlosojosabiertos.com/wp-content/uploads/2017/04/favicon.png?fit=36%2C36',
  },
  {
    name: 'A sala llena',
    reqDirection: 'http://asalallena.com.ar/wp-json/wp/v2/posts',
    id: 4,
    avatar:
      'https://www.asalallena.com.ar/wp-content/themes/asalallena/favicon.ico',
  },
  {
    name: 'Haciendo cine',
    reqDirection: 'http://haciendocine.com.ar/wp-json/wp/v2/posts',
    id: 5,
    avatar:
      'https://haciendocine.com.ar/wp-content/uploads/2020/06/favicon-2.png',
  },
  {
    name: 'Leer cine',
    reqDirection: 'http://leercine.com.ar/wp-json/wp/v2/posts',
    id: 6,
    avatar:
      'https://www.leercine.com.ar/wp-content/uploads/2018/06/cropped-logo.png',
  },
  {
    name: 'Perro blanco',
    reqDirection: 'http://perroblanco.net/wp-json/wp/v2/posts',
    id: 7,
    avatar:
      'https://www.perroblanco.net/wp-content/uploads/Logo-WP-Login-v2-1.png',
  },
  {
    name: 'La cosa cine',
    reqDirection: 'http://lacosacine.com/wp-json/wp/v2/posts',
    id: 8,
    avatar: 'https://www.lacosacine.com/wp-content/uploads/2018/12/logo.png',
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
