import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './assets/logo.png'; // your logo inside src/assets/

// Dynamically set favicon
const link =
  document.querySelector("link[rel~='icon']") || document.createElement("link");
link.rel = "icon";
link.type = "image/png";
link.href = logo;
document.getElementsByTagName("head")[0].appendChild(link);

// Optional: set default tab title
document.title = "StuFlix";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
