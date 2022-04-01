import { createTheme } from '@nextui-org/react';

export const myDarkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // brand colors
      background: '#1d1d1d',
      text: '#fff',
      // you can also create your own color
      myDarkColor: '#ff4ecd',
      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});
