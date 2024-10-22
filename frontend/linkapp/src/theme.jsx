import { createTheme } from '@mui/material/styles';

const normalTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#ff5722',
      },
      background: {
        default: '#ffffff',
      },
    },
  });
  
const accessibleTheme  = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#0055ff',
      },
      secondary: {
        main: '#ffcc00', 
      },
      background: {
        default: '#f5f5f5',
      },
      text: {
        primary: '#000000', 
        secondary: '#333333',
      },
    },
});
  
export { normalTheme, accessibleTheme  };