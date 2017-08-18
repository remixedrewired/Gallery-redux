import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import combineReducers from './reducers';
import App from './containers/App';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import './styles/app.css'; 




const logger = createLogger();
const store = createStore(combineReducers, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <div className='app'>
            <App/>
        </div>    
    </Provider>
    , document.getElementById('root')
);
