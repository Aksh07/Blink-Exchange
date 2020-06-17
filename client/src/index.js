import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';//importing one of the function in redux;//holds the application value ig
import {Provider} from 'react-redux';//copy that
import {BrowserRouter} from 'react-router-dom';//for URL's
import {Header} from "./Containers"
import "./index.css";

import App from './App/index';//import default App
import * as serviceWorker from './serviceWorker';// * is import everything as "name which you use in your file"
import reducer from './store/reducer';
import config from './config';

const store = createStore(reducer);

const app = (
    <Provider store={store}>
        <BrowserRouter basename={config.basename}>
        <div>
            {/* basename="Blink-Exchange" */}
            <Header/>
            <App />
            </div>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
//(what to show,where to show);
//basically we are showing app in root div;(i.e. putting all the code)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
//test commit.
