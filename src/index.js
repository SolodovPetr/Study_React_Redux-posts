import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Routes/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);