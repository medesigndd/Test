import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch, } from 'react-router-dom';
import './index.css';
import Home from './Page/Home'
import Place from './Page/Place'
import Users from './Page/Users'
import Value from './Page/Value';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/value" component={Value} />
          <Route path="/place" component={Place} />
          <Route path="/users" component={Users} />
        </Switch>
      </div>
    </Router>
    )

    ReactDOM.render(
        routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
