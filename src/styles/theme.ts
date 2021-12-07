const boxShadow = '0 0 8px 0 hsla(200, 2%, 49%, 0.2)';
const borderRadius = '.4rem';

const spacing = {
  regular: '.75rem',
  medium: '1rem',
  more_medium: '1.6rem',
  large: '2.4rem',
  small: '0.5rem',
  xsmall: '0.25rem',
};

const breakpoints = {
  mobile: '64rem',
  tablet: '76.8rem',
  screen: '96rem',
};

const zIndex = {
  modal: 999,
};

const colors = {
  black: {
    dark: '#000000',
    light: '#909497',
    medium: '#222222',
  },
  bodyColor: '#f8f8f8',
  borderColor: '#e6e6e6',
  danger: {
    dark: '#bf233e',
    medium: '#ff2e52',
    light: '#feeaed',
  },
  gray: {
    dark: '#797d7f',
    light: '#e5e7e9',
    medium: '#bdc3c7',
  },
  green: {
    dark: '#2EC671',
    light: '#eaf9f0',
  },
  munsell: '#f2f3f4',
  primary: {
    dark: '#00B5A5',
    medium: '#00d0be',
    light: '#e5faf8',
  },
  secondary: {
    extraDark: '#0972B7',
    dark: '#0086df',
    medium: '#0099ff',
    light: '#dff9f7',
  },
  warning: '#fbe4b2',
  white: '#ffffff',
};

const fonts = {
  fontFamily: "'Nunito Sans', sans-serif",
  size: {
    huge: '3.3rem',
    xLarge: '2.5rem',
    large: '1.9rem',
    regular: '1.5rem',
    small: '1.3rem',
    xSmall: '1.1rem',
  },
  weight: {
    bold: 700,
    light: 300,
    regular: 400,
    semiBold: 600,
  },
};

export { colors, spacing, breakpoints, borderRadius, fonts, boxShadow, zIndex };
