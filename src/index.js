import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import User from './App';
import Form from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
