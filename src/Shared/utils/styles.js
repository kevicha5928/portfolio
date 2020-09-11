import { css } from 'styled-components';
import Color from 'color';
import { grey, blueGrey, indigo } from '@material-ui/core/colors';

export const color = {
  primary: '#0052cc', // Blue
  success: '#0B875B', // green
  danger: '#E13C3C', // red
  warning: '#F89C1C', // orange
  secondary: '#F4F5F7', // light grey

  textDarkest: '#172b4d',
  textDark: '#42526E',
  textMedium: '#5E6C84',
  // textLight: '#8993a4',
  textLight: grey[200],
  textLink: '#0052cc',

  backgroundDarkPrimary: grey[900],
  backgroundMedium: grey[800],
  backgroundLight: grey[400],
  backgroundLightest: '#F4F5F7',
  backgroundLightPrimary: '#D2E5FE',
  backgroundLightSuccess: '#E4FCEF',

  cardColor: blueGrey[900],
  buttonColor: indigo[800],

  borderLightest: '#dfe1e6',
  borderLight: '#C1C7D0',
  borderInputFocus: '#4c9aff',
};

export const sizes = {
  navBarHeight: 48,
};

export const zIndexValues = {
  modal: 1000,
  dropdown: 101,
  navLeft: 100,
};

export const spacing = {
  single: (space) => `${space * 8}px`,
  double: (space) => `${space * 16}px`,
};

export const font = {
  regular: 'font-family: "RedHatDisplayRegular"; font-weight: normal;',
  medium: 'font-family: "RedHatDisplayMedium"; font-weight: normal;',
  bold: 'font-family: "RedHatDisplayBold"; font-weight: normal;',
  black: 'font-family: "RedHatDisplayBlack"; font-weight: normal;',
  sizePx: (size) => `font-size: ${size}px;`,
  sizeRem: (size) => `font-size: ${size}rem;`,
  sizeEm: (size) => `font-size: ${size}em;`,
};

export const mixin = {
  darken: (colorValue, amount) => Color(colorValue).darken(amount).string(),
  lighten: (colorValue, amount) => Color(colorValue).lighten(amount).string(),
  rgba: (colorValue, opacity) => Color(colorValue).alpha(opacity).string(),
  boxShadowMedium: css`
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  `,
  boxShadowDropdown: css`
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
  `,
  truncateText: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  clickable: css`
    cursor: pointer;
    user-select: none;
  `,
  hardwareAccelerate: css`
    transform: translateZ(0);
  `,
  cover: css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `,
  placeholderColor: (colorValue) => css`
    ::-webkit-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    ::-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-ms-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
  `,
  scrollableY: css`
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  customScrollbar: ({ width = 8, background = color.backgroundMedium } = {}) => css`
    &::-webkit-scrollbar {
      width: ${width}px;
    }
    &::-webkit-scrollbar-track {
      background: none;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 99px;
      background: ${background};
    }
  `,
  backgroundImage: (imageURL) => css`
    background-image: url('${imageURL}');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${color.backgroundLight};
  `,
  link: (colorValue = color.textLink) => css`
    cursor: pointer;
    color: ${colorValue};
    ${font.medium}
    &:hover, &:visited, &:active {
      color: ${colorValue};
    }
    &:hover {
      text-decoration: underline;
    }
  `,
  tag: (background = color.backgroundMedium, colorValue = color.textDarkest) => css`
    display: inline-flex;
    align-items: center;
    height: 24px;
    padding: 0 8px;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    color: ${colorValue};
    background: ${background};
    ${font.bold}
    ${font.size(12)}
    i {
      margin-left: 4px;
    }
  `,
};
