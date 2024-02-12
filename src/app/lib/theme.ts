import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    color: {
      main: '#1a202c',
      secoundary: '#999',
    },
    border: {
      main: '#E3E8E8',
      deep: '#CCC',
    },
  },
});

export { theme };
