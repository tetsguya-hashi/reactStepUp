import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Button, Heading } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import theme from './theme/theme';
import { Router } from './router/Router';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
