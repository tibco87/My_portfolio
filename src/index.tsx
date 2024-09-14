import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Globálne štýly, ak ich máš
import App from './App';
import './i18n'; // Pridaj, ak používaš i18n na preklady

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
