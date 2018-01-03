import { createMuiTheme } from 'material-ui/styles';

// import { grey,lightBlue, blueGrey, indigo, green } from 'material-ui/colors';

import { white, blueGrey, yellow, grey, lightBlue, blue, red } from 'material-ui/colors';



const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
        primary: lightBlue,
        secondary: blue,
        error: red,
        contrast: white,
    },
});

const blueTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: lightBlue,
        secondary: blueGrey,
    },
    status: {
        danger: red,
    },
});

const yellowTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            ...yellow,
            A400: '#FFEA00',
        },
        secondary: {
            ...grey,
            900: '#212121'
        },
    },
    status: {
        danger: red,
    },
});

export { lightTheme, blueTheme ,yellowTheme }

