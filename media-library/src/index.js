import React from 'react';
import App from './containers/App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

//Initialize store
const store = configureStore();

// We require the routes and render to the DOM using ReactDOM API
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);