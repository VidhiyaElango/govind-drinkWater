import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Drink from './App/containers/Drink';
import Edit from './App/containers/Drink/edit';
import Add from './App/containers/Drink/add';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Drink} />
        <Route path="/edit" component={Edit} />
        <Route path="/add" component={Add} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
