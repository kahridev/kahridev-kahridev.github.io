import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import '@fontsource/cormorant-garamond/500.css';
// import '@fontsource/montserrat/400.css';
// import '@fontsource/playfair-display/400.css';  // regular
// import '@fontsource/playfair-display/500.css';  // medium
// import '@fontsource/playfair-display/600.css';  // semi-bold
// import '@fontsource/playfair-display/700.css';  // bold

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
