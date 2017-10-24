import { fade } from 'material-ui/styles/colorManipulator'
import { spacing, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/createPalette';

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
    primary: Idea42_Green,
    accent: indigo,
    error: Idea42_Green,
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
