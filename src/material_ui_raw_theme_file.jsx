import { fade } from 'material-ui/styles/colorManipulator'
import { spacing, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/createPalette';

const grey = {
  50: '#fdfdfd',
  100: '#fafafa',
  200: '#f7f7f7',
  300: '#f3f3f3',
  400: '#f1f1f1',
  500: '#eeeeee',
  600: '#ececec',
  700: '#e9e9e9',
  800: '#e7e7e7',
  900: '#e2e2e2',
  A100: '#ffffff',
  A200: '#ffffff',
  A400: '#ffffff',
  A700: '#ffffff',
  contrastDefaultColor: 'light'
}
const opOrange = {
  50: '#ffecea',
  100: '#fed0cb',
  200: '#feb1a8',
  300: '#fe9185',
  400: '#fd7a6a',
  500: '#fd6250',
  600: '#fd5a49',
  700: '#fc5040',
  800: '#fc4637',
  900: '#fc3427',
  A100: '#ffffff',
  A200: '#ffffff',
  A400: '#ffd4d1',
  A700: '#ffbbb8',
  contrastDefaultColor: 'light'
}

const opGreen = {
  50: '#e0f8f0',
  100: '#b3eed9',
  200: '#80e2c0',
  300: '#4dd6a7',
  400: '#26ce94',
  500: '#00c581',
  600: '#00bf79',
  700: '#00b86e',
  800: '#00b064',
  900: '#00a351',
  A100: '#ceffe3',
  A200: '#9bffc6',
  A400: '#68ffa8',
  A700: '#4eff9a',
  contrastDefaultColor: 'light'
}

const indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe',
  contrastDefaultColor: 'light'
};

const Idea42_Green = {
  '50': '#9ed790',
  '100': '#8dd17d',
  '200': '#7dca6a',
  '300': '#6cc358',
  '400': '#5cbd45',
  '500': '#52AB3D',
  '600': '#499836',
  '700': '#408530',
  '800': '#377329',
  '900': '#2e6022',
  'A100': '#aedea3',
  'A200': '#bfe5b6',
  'A400': '#cfecc8',
  'A700': '#254d1b',
  contrastDefaultColor: 'light'
}

const muiTheme = createMuiTheme({
  palette: createPalette({
    primary: opOrange,
    secondary: opGreen,
    type: 'light'
  })
});

/*
const rawBaseTheme = {
  ...spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary: '#EEEEEE',
    accent: '#fd6250',
    error: '#Ed6250'
    /*
    textColor: Colors.black,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey,
    disabledColor: fade(Colors.black, 0.3)
  }
};
*/
//Theme must be wrapped in funciton getMuiTheme
export default muiTheme;
