import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';
import { myDarkTheme } from '../themes/darkTheme';
import { myLightTheme } from '../themes/lightTheme';

const NextUI = ({ children }) => {
  const darkMode = useDarkMode();
  return (
    <NextUIProvider theme={darkMode.value ? myDarkTheme : myLightTheme}>
      {children}
    </NextUIProvider>
  );
};

export default NextUI;
