import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  Provider } from 'react-redux';
import { render } from '@testing-library/react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import store from './redux/store-toolkit';
import { BrowserRouter } from "react-router-dom";

// import Counter from './componates/counter';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
 </BrowserRouter> 

    
    
    </React.StrictMode>
    );
    


reportWebVitals();
