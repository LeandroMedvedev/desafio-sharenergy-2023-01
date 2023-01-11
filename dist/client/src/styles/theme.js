"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = void 0;
var react_1 = require("@chakra-ui/react");
exports.theme = (0, react_1.extendTheme)({
    colors: {
        white: {
            0: '#FFFFFF',
        },
        gray: {
            0: '#F5F5F5',
            50: '#F2F2F2',
            100: '#EFF0EB',
            150: '#BDBDBD',
            200: '#9E9EA7',
            300: '#828282',
            500: '#1A2B34',
            600: '#20232A',
            700: '#080F12',
            900: '#111111',
        },
        red: {
            400: '#EB5757',
            450: '#E33030',
            500: '#E60000',
            800: '#830000',
            900: '#4F0202',
        },
        green: {
            0: '#EAF7F0',
            50: '#93D7AF',
            1000: '#0C5541',
            100: '#16E32D',
            200: '#16E379',
            400: '#27AE60',
            500: '#116061',
            550: '#219653',
            600: '#168821',
            800: '#012611',
        },
        blue: {
            450: '#082947',
            600: '#10191E',
            900: '#03031B',
            920: '#03032F',
        },
        brown: {
            100: '#F5F3ED',
        },
    },
    fonts: {
        heading: 'Montserrat, sans-serif',
        // body: 'Roboto, sans-serif',
        body: 'Varela Round, sans-serif',
    },
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
    },
    fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },
    lineHeights: {
        normal: 'normal',
        none: 1,
        shorter: 1.25,
        short: 1.375,
        base: 1.5,
        tall: 1.625,
        taller: '2',
        '3': '.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.600',
            },
        },
    },
    breakpoints: {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
    },
});
//# sourceMappingURL=theme.js.map