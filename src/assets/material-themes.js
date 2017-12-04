import { createMuiTheme } from 'material-ui/styles';

// import { grey,lightBlue, blueGrey, indigo, green } from 'material-ui/colors';

import { blueGrey, lightBlue, indigo, red } from 'material-ui/colors';

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: blueGrey,
        secondary: {
            ...blueGrey,
            900: '#263238'
        },
        error: red
      },
});

const lightTheme = createMuiTheme({
    palette: {
        primary: lightBlue,
        secondary: blueGrey,
    },
    status: {
        danger: red,
    },
});

const blueTheme = createMuiTheme({
    palette: {
        primary: blueGrey,
        secondary: indigo,
    },
    status: {
        danger: red,
    },
});

export { darkTheme, lightTheme, blueTheme }

