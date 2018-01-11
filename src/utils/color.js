const Color = {
    WHITE: '#ffffff',
    BLACK: '#000000',
    TRANSPARENT: 'transparent',
    DELTAGREY: {
        50: '#e4e4e4',
        100: '#bdbdbd',
        200: '#a1a1a1',
        300: '#7e7e7e',
        400: '#6e6e6e',
        500: '#5f5f5f',
        600: '#505050',
        700: '#404040',
        800: '#313131',
        900: '#222222',
        A100: '#e4e4e4',
        A200: '#bdbdbd',
        A400: '#6e6e6e',
        A700: '#404040',
    },
    DELTABLUE: {
        50: '#e6f5ff',
        100: '#9ad8ff',
        200: '#62c2ff',
        300: '#1aa7ff',
        400: '#009afb',
        500: '#0087dc',
        600: '#0074bd',
        700: '#00619f',
        800: '#004f80',
        900: '#003c62',
        A100: '#e6f5ff',
        A200: '#9ad8ff',
        A400: '#009afb',
        A700: '#00619f',
    },
    DELTAORANGE: {
        50: '#FFFDFA',
        100: '#FFDAAE',
        200: '#FFC076',
        300: '#FF9F2E',
        400: '#FF9110',
        500: '#F08200',
        600: '#D17100',
        700: '#B36100',
        800: '#945000',
        900: '#764000',
        A100: '#FFFDFA',
        A200: '#FFDAAE',
        A400: '#FF9110',
        A700: '#B36100',
    },
    DELTAGREEN: {
        50: '#C5F8CD',
        100: '#81EF91',
        200: '#50E965',
        300: '#1BD636',
        400: '#17BB2F',
        500: '#14A028',
        600: '#118521',
        700: '#0D6A1A',
        800: '#0A4E14',
        900: '#06330D',
        A100: '#C5F8CD',
        A200: '#81EF91',
        A400: '#17BB2F',
        A700: '#0D6A1A',
    },
    RED: {
        50: '#ffebee',
        100: '#ffcdd2',
        200: '#ef9a9a',
        300: '#e57373',
        400: '#ef5350',
        500: '#f44336',
        600: '#e53935',
        700: '#d32f2f',
        800: '#c62828',
        900: '#b71c1c',
        A100: '#ff8a80',
        A200: '#ff5252',
        A400: '#ff1744',
        A700: '#d50000',
    },
    PINK: {
        50: '#fce4ec',
        100: '#f8bbd0',
        200: '#f48fb1',
        300: '#f06292',
        400: '#ec407a',
        500: '#e91e63',
        600: '#d81b60',
        700: '#c2185b',
        800: '#ad1457',
        900: '#880e4f',
        A100: '#ff80ab',
        A200: '#ff4081',
        A400: '#f50057',
        A700: '#c51162',
    },
    PURPLE: {
        50: '#f3e5f5',
        100: '#e1bee7',
        200: '#ce93d8',
        300: '#ba68c8',
        400: '#ab47bc',
        500: '#9c27b0',
        600: '#8e24aa',
        700: '#7b1fa2',
        800: '#6a1b9a',
        900: '#4a148c',
        A100: '#ea80fc',
        A200: '#e040fb',
        A400: '#d500f9',
        A700: '#aa00ff',
    },
    DEEPPRUPLE: {
        50: '#ede7f6',
        100: '#d1c4e9',
        200: '#b39ddb',
        300: '#9575cd',
        400: '#7e57c2',
        500: '#673ab7',
        600: '#5e35b1',
        700: '#512DA8',
        800: '#4527A0',
        900: '#311B92',
        A100: '#b388ff',
        A200: '#7c4dff',
        A400: '#651fff',
        A700: '#6200ea',
    },
    INDIGO: {
        50: '#e8eaf6',
        100: '#c5cae9',
        200: '#9fa8da',
        300: '#7986cb',
        400: '#5c6bc0',
        500: '#3f51b5',
        600: '#3949ab',
        700: '#303F9F',
        800: '#283593',
        900: '#1A237E',
        A100: '#8c9eff',
        A200: '#536dfe',
        A400: '#3d5afe',
        A700: '#304ffe',
    },
    BLUE: {
        50: '#e3f2fd',
        100: '#bbdefb',
        200: '#90caf9',
        300: '#64b5f6',
        400: '#42a5f5',
        500: '#2196f3',
        600: '#1e88e5',
        700: '#1976d2',
        800: '#1565c0',
        900: '#0d47a1',
        A100: '#82b1ff',
        A200: '#448aff',
        A400: '#2979ff',
        A700: '#2962ff',
    },
    LIGHTBLUE: {
        50: '#e1f5fe',
        100: '#b3e5fc',
        200: '#81d4fa',
        300: '#4fc3f7',
        400: '#29b6f6',
        500: '#03a9f4',
        600: '#039be5',
        700: '#0288d1',
        800: '#0277bd',
        900: '#01579b',
        A100: '#80d8ff',
        A200: '#40c4ff',
        A400: '#00b0ff',
        A700: '#0091ea',
    },
    CYAN: {
        50: '#e0f7fa',
        100: '#b2ebf2',
        200: '#80deea',
        300: '#4dd0e1',
        400: '#26c6da',
        500: '#00bcd4',
        600: '#00acc1',
        700: '#0097a7',
        800: '#00838f',
        900: '#006064',
        A100: '#84ffff',
        A200: '#18ffff',
        A400: '#00e5ff',
        A700: '#00b8d4',
    },
    TEAL: {
        50: '#e0f2f1',
        100: '#b2dfdb',
        200: '#80cbc4',
        300: '#4db6ac',
        400: '#26a69a',
        500: '#009688',
        600: '#00897b',
        700: '#00796b',
        800: '#00695c',
        900: '#004d40',
        A100: '#a7ffeb',
        A200: '#64ffda',
        A400: '#1de9b6',
        A700: '#00bfa5',
    },
    GREEN: {
        50: '#e8f5e9',
        100: '#c8e6c9',
        200: '#a5d6a7',
        300: '#81c784',
        400: '#66bb6a',
        500: '#4caf50',
        600: '#43a047',
        700: '#388e3c',
        800: '#2e7d32',
        900: '#1b5e20',
        A100: '#b9f6ca',
        A200: '#69f0ae',
        A400: '#00e676',
        A700: '#00c853',
    },
    LIGHTGREEN: {
        50: '#f1f8e9',
        100: '#dcedc8',
        200: '#c5e1a5',
        300: '#aed581',
        400: '#9ccc65',
        500: '#8bc34a',
        600: '#7cb342',
        700: '#689f38',
        800: '#558b2f',
        900: '#33691e',
        A100: '#ccff90',
        A200: '#b2ff59',
        A400: '#76ff03',
        A700: '#64dd17',
    },
    LIME: {
        50: '#f9fbe7',
        100: '#f0f4c3',
        200: '#e6ee9c',
        300: '#dce775',
        400: '#d4e157',
        500: '#cddc39',
        600: '#c0ca33',
        700: '#afb42b',
        800: '#9e9d24',
        900: '#827717',
        A100: '#f4ff81',
        A200: '#eeff41',
        A400: '#c6ff00',
        A700: '#aeea00',
    },
    YELLOW: {
        50: '#fffde7',
        100: '#fff9c4',
        200: '#fff59d',
        300: '#fff176',
        400: '#ffee58',
        500: '#ffeb3b',
        600: '#fdd835',
        700: '#fbc02d',
        800: '#f9a825',
        900: '#f57f17',
        A100: '#ffff8d',
        A200: '#ffff00',
        A400: '#ffea00',
        A700: '#ffd600',
    },
    AMBER: {
        50: '#fff8e1',
        100: '#ffecb3',
        200: '#ffe082',
        300: '#ffd54f',
        400: '#ffca28',
        500: '#ffc107',
        600: '#ffb300',
        700: '#ffa000',
        800: '#ff8f00',
        900: '#ff6f00',
        A100: '#ffe57f',
        A200: '#ffd740',
        A400: '#ffc400',
        A700: '#ffab00',
    },
    ORANGE: {
        50: '#fff3e0',
        100: '#ffe0b2',
        200: '#ffcc80',
        300: '#ffb74d',
        400: '#ffa726',
        500: '#ff9800',
        600: '#fb8c00',
        700: '#f57c00',
        800: '#ef6c00',
        900: '#e65100',
        A100: '#ffd180',
        A200: '#ffab40',
        A400: '#ff9100',
        A700: '#ff6d00',
    },
    DEEPORANGE: {
        50: '#fbe9e7',
        100: '#ffccbc',
        200: '#ffab91',
        300: '#ff8a65',
        400: '#ff7043',
        500: '#ff5722',
        600: '#f4511e',
        700: '#e64a19',
        800: '#d84315',
        900: '#bf360c',
        A100: '#ff9e80',
        A200: '#ff6e40',
        A400: '#ff3d00',
        A700: '#dd2c00',
    },
    BROWN: {
        50: '#efebe9',
        100: '#d7ccc8',
        200: '#bcaaa4',
        300: '#a1887f',
        400: '#8d6e63',
        500: '#795548',
        600: '#6d4c41',
        700: '#5d4037',
        800: '#4e342e',
        900: '#3e2723',
        A100: '#ece2df',
        A200: '#cfb7af',
        A400: '#8c6253',
        A700: '#533a31',
    },
    BLUEGREY: {
        50: '#eceff1',
        100: '#cfd8dc',
        200: '#b0bec5',
        300: '#90a4ae',
        400: '#78909c',
        500: '#607d8b',
        600: '#546e7a',
        700: '#455a64',
        800: '#37474f',
        900: '#263238',
        A100: '#f9fafb',
        A200: '#ccd7dc',
        A400: '#6e8d9b',
        A700: '#475c67',
    },
    GREY: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        A100: '#ffffff',
        A200: '#fcfcfc',
        A400: '#adadad',
        A700: '#7f7f7f',
    },
};

const { WHITE, BLACK, TRANSPARENT, DELTAGREY, DELTABLUE, DELTAORANGE, DELTAGREEN,
    RED, PINK, PURPLE, DEEPPRUPLE, INDIGO, BLUE, LIGHTBLUE, CYAN, TEAL,
    GREEN, LIGHTGREEN, LIME, YELLOW, AMBER, ORANGE, DEEPORANGE,
    BROWN, BLUEGREY, GREY } = Color;

const primary = 500;
const primaryColor = {
    White: WHITE,
    Black: BLACK,
    Transparent: TRANSPARENT,
    DeltaGrey: DELTAGREY[primary],
    DeltaBlue: DELTABLUE[primary],
    DeltaOrange: DELTAORANGE[primary],
    DeltaGreen: DELTAGREEN[primary],
    Red: RED[primary],
    Pink: PINK[primary],
    Purple: PURPLE[primary],
    DeepPruple: DEEPPRUPLE[primary],
    Indigo: INDIGO[primary],
    Blue: BLUE[primary],
    LightBlue: LIGHTBLUE[primary],
    Cyan: CYAN[primary],
    Teal: TEAL[primary],
    Green: GREEN[primary],
    LightGreen: LIGHTGREEN[primary],
    Lime: LIME[primary],
    Yellow: YELLOW[primary],
    Amber: AMBER[primary],
    Orange: ORANGE[primary],
    DeepOrange: DEEPORANGE[primary],
    Brown: BROWN[primary],
    BlueGrey: BLUEGREY[primary],
    Grey: GREY[primary],
};

const { White, Black, Transparent, DeltaGrey, DeltaBlue, DeltaOrange, DeltaGreen,
    Red, Pink, Purple, DeepPruple, Indigo, Blue, LightBlue, Cyan, Teal,
    Green, LightGreen, Lime, Yellow, Amber, Orange, DeepOrange,
    Brown, BlueGrey, Grey } = primaryColor;

export default Object.assign({}, Color, primaryColor);

export { WHITE, BLACK, TRANSPARENT, DELTAGREY, DELTABLUE, DELTAORANGE, DELTAGREEN,
    RED, PINK, PURPLE, DEEPPRUPLE, INDIGO, BLUE, LIGHTBLUE, CYAN, TEAL,
    GREEN, LIGHTGREEN, LIME, YELLOW, AMBER, ORANGE, DEEPORANGE,
    BROWN, BLUEGREY, GREY };

export { White, Black, Transparent, DeltaGrey, DeltaBlue, DeltaOrange, DeltaGreen,
    Red, Pink, Purple, DeepPruple, Indigo, Blue, LightBlue, Cyan, Teal,
    Green, LightGreen, Lime, Yellow, Amber, Orange, DeepOrange,
    Brown, BlueGrey, Grey };