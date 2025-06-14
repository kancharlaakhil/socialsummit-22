import React from "react";
import ReactDOM from "react-dom";
import "./app/assets/css/header.css";
import "./app/assets/css/register.css";
import App from "./routes/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import store from './redux/store'
import ContextProvider from "./ContextProvider";

import axios from 'axios';

axios.defaults.baseURL = "https://api.socialsummit.iitr.ac.in/api";

// axios.defaults.baseURL = "https://api.socialsummit.iitr.ac.in/api"

//axios.defaults.baseURL = "https://api.socialsummit.iitr.ac.in/api"


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ContextProvider>
      <App />
      </ContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
