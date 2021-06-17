
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import aviasalesService from './services';
import {AviasalesServiceProvider} from './components/aviasales-service-context';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <AviasalesServiceProvider value={aviasalesService}>
        <App />
      </AviasalesServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
