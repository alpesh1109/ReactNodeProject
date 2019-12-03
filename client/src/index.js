import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import loadjs from 'loadjs';


import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './configstore.js';
import { Provider } from 'react-redux';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Setting from './Setting';
import Country from './Country';


loadjs('/assets/js/custom.js');

ReactDOM.render( <BrowserRouter forceRefresh={false}> 
    <Provider store={store}>
    
    <div class="page-wrapper chiller-theme sidebar-bg bg1 toggled">
        <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
            <i class="fas fa-bars"></i>
        </a>
        <nav id="sidebar" class="sidebar-wrapper">
           <Sidebar/>
           
            <Footer/>
        </nav>
        
      <Switch>

          <Route exact path="/" component={Setting} />        
          <Route exact path="/Country" component={Country} />    
      </Switch>
      
      </div>
     
    </Provider>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
