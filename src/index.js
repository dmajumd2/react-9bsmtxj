import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import User from './App';
import Form from './App';
import Timer from './Timer';
import Counter from './Counter';
import List from './List';
import Input from './Input';
import Toggle from './Toggle';
import FetchAPI from './Fetch';
import CountdownTimer from './CountdownTimer';
import Color from './Color';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Color/>
  </StrictMode>
);
