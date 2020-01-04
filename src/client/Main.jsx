import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';
import App from './App';
import history from './history';
import Welcome from './Welcome';

const routing = (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/test" component={App} />
        <Route path="/" component={Welcome} />
        <Route path="/test2" component={Welcome} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));
