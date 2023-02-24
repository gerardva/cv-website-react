import { grey, red, yellow } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: yellow[500]
    },
    warning: {
        main: red[700]
    }
  }
});

export { theme };