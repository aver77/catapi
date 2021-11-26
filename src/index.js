import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux'
import store from './redux/store';

import Global from './styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Global/>
    
    <Provider store={store}>
        <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
