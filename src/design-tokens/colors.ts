// Mako Design System Color Tokens
// Official Rubix Mako Design System Colors

export const makoColors = {
  // Blue - Primary
  blue: {
    10: '#FBFDFE',
    25: '#F6FAFD',
    50: '#EEF6FC',
    100: '#D8ECF8',
    200: '#BADEF3',
    300: '#8ACAEA',
    400: '#56AEE1',
    500: '#2F8DDA',
    600: '#FFF1D9',
    700: '#265FD9',
    800: '#204DB6',
    900: '#19448F',
    950: '#051E50',
  },
  
  // Yellow - Primary
  yellow: {
    10: '#FFFEF5',
    25: '#FFFEF0',
    50: '#FFFEEA',
    100: '#FFF9C5',
    200: '#FFF285',
    300: '#FFE546',
    400: '#FFD700',
    500: '#FFB400',
    600: '#E28A00',
    700: '#BB6002',
    800: '#984A08',
    900: '#7C3D0B',
    950: '#481F00',
  },
  
  // Green - Secondary
  green: {
    10: '#FAFFFC',
    25: '#F5FEFA',
    50: '#EFFEF6',
    100: '#DBFBEC',
    200: '#BAF7DA',
    300: '#84F1BD',
    400: '#3EEA99',
    500: '#17D079',
    600: '#00C66A',
    700: '#009550',
    800: '#007B43',
    900: '#00673A',
    950: '#00341E',
  },
  
  // Red - Secondary
  red: {
    10: '#FEFBFB',
    25: '#FEF7F6',
    50: '#FDF4F3',
    100: '#FCE6E4',
    200: '#FBD1CD',
    300: '#F7B0AA',
    400: '#F08379',
    500: '#E55A4E',
    600: '#D23D30',
    700: '#BA3327',
    800: '#922B22',
    900: '#792A23',
    950: '#42110D',
  },
  
  // Purple - Secondary
  purple: {
    10: '#FAFBFF',
    25: '#F5F6FF',
    50: '#EEF0FF',
    100: '#E0E3FF',
    200: '#C7CAFE',
    300: '#A5A8FC',
    400: '#8781F8',
    500: '#7463F1',
    600: '#6748E5',
    700: '#5838CA',
    800: '#4730A3',
    900: '#3D2E81',
    950: '#251B4B',
  },
  
  // Neutral
  neutral: {
    10: '#FCFDFD',
    25: '#F8FAFB',
    50: '#F1F3F5',
    100: '#EBF1F4',
    200: '#DBE4EA',
    300: '#C4D2DD',
    400: '#ACBCCD',
    500: '#96A7BE',
    600: '#7F8EAC',
    700: '#78849E',
    800: '#59647A',
    900: '#4C5463',
    950: '#2C303A',
  },
  
  // Black & White
  black: '#1A1A1A',
  white: '#FFFFFF',
  
  // Semantic aliases for easier usage
  primary: {
    10: '#FBFDFE',
    25: '#F6FAFD',
    50: '#EEF6FC',
    100: '#D8ECF8',
    200: '#BADEF3',
    300: '#8ACAEA',
    400: '#56AEE1',
    500: '#2F8DDA',
    600: '#2671D9',
    700: '#265FD9',
    800: '#204DB6',
    900: '#19448F',
    950: '#051E50',
  },
  
  // Semantic colors using the defined palette
  success: {
    10: '#FAFFFC',
    25: '#F5FEFA',
    50: '#EFFEF6',
    100: '#DBFBEC',
    200: '#BAF7DA',
    300: '#84F1BD',
    400: '#3EEA99',
    500: '#17D079',
    600: '#00C66A',
    700: '#009550',
    800: '#007B43',
    900: '#00673A',
    950: '#00341E',
  },
  
  warning: {
    10: '#FFFEF5',
    25: '#FFFEF0',
    50: '#FFFEEA',
    100: '#FFF9C5',
    200: '#FFF285',
    300: '#FFE546',
    400: '#FFD700',
    500: '#FFB400',
    600: '#E28A00',
    700: '#BB6002',
    800: '#984A08',
    900: '#7C3D0B',
    950: '#481F00',
  },
  
  error: {
    10: '#FEFBFB',
    25: '#FEF7F6',
    50: '#FDF4F3',
    100: '#FCE6E4',
    200: '#FBD1CD',
    300: '#F7B0AA',
    400: '#F08379',
    500: '#E55A4E',
    600: '#D23D30',
    700: '#BA3327',
    800: '#922B22',
    900: '#792A23',
    950: '#42110D',
  },
  
  info: {
    10: '#FBFDFE',
    25: '#F6FAFD',
    50: '#EEF6FC',
    100: '#D8ECF8',
    200: '#BADEF3',
    300: '#8ACAEA',
    400: '#56AEE1',
    500: '#2F8DDA',
    600: '#2671D9',
    700: '#265FD9',
    800: '#204DB6',
    900: '#19448F',
    950: '#051E50',
  },
} as const;

export type MakoColorScale = typeof makoColors.blue;
export type MakoColorToken = keyof typeof makoColors; 