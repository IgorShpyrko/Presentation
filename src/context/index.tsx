import * as React from 'react';

export const ThemeContext = React.createContext({
  theme: {
    dark: 'purple-bg',
    light: 'gainsboro-bg',
  },
});

export const LocaleContext = React.createContext({
  locale: {
    local: '🚩',
    foreign: '🎌',
  },
});
