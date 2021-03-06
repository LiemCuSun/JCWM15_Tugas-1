// import module
import React from 'react';
import ReactDOM from 'react-dom';

// import style
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Navigation from './component/navbar';
// import Routes from './Routes';

// import browserRouter
import {BrowserRouter} from 'react-router-dom';

// import create Store for react redux
import { createStore } from "redux"

// NOTE import provider
import { Provider } from "react-redux"

// NOTE import combined reducers
import allReducers from "./reducer"

// NOTE make variable for create store
let globalState = createStore(allReducers)

// NOTE subscribe variable global state for console.log each time there is an update of redux
globalState.subscribe(() => console.log("Global State : ", globalState.getState()))




ReactDOM.render(
  <Provider store={globalState}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
