import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {ProductData} from './context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ProductData>
  <Router>
    <App />  
  </Router>
  </ProductData>,  
 document.getElementById('root')
 );




serviceWorker.unregister();
