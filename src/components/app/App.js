import React from 'react'
import MainPage from '../../pages/MainPage';

import { Provider } from 'react-redux';
import store from '../../redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <MainPage/>
        </Provider>
    );
};


export default App;
