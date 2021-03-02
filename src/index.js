import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store,persistor} from './redux/store';

//Provider gives access to all redux features and
// by including store in it -> access to states
ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
        <PersistGate persistor = {persistor}>
            <App />
        </PersistGate>
       
        </BrowserRouter>
    </Provider>
,document.getElementById('root'));

