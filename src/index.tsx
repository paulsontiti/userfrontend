import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './AppStore/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
    <script
      src='https://cdn.lr-in-prod.com/LogRocket.min.js'
      crossOrigin='anonymous'
    ></script>
    <script>
      window.LogRocket && window.LogRocket.init('ixsa3i/shopearn');
    </script>
  </BrowserRouter>
);
