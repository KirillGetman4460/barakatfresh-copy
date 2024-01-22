import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {store} from './store/store'

import './fonts/Tajawal-Bold.b347d133.woff2'
import './fonts/ProximaNova-Regular.f9aa08ad.woff2'
import './fonts/ProximaNova-Bold.1f4f14db.woff2'
import './fonts/materialdesignicons-webfont.ad0f7b3f.woff2'

import './App.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

