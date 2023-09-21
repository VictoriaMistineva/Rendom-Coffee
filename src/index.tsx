import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'reset-css';
import './assets/styles/index.scss';

import { createGlobalStyle } from 'styled-components';
import { salutejs_sber__dark } from '@salutejs/plasma-tokens/themes'; // Или один из списка: darkEva, darkJoy, lightEva, lightJoy, lightSber

const ThemeStyle = createGlobalStyle(salutejs_sber__dark);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeStyle />
    <App />
  </React.StrictMode>
);
