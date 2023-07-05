import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './style.css';
import target from './components/assets/icons/target.png';

const handleIcon = (function () {
  const link =
    document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/png';
  link.rel = 'shortcut icon';
  link.href = target;
  document.getElementsByTagName('head')[0].appendChild(link);
})();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
