var React = require('react');
var ReactDOM = require('react-dom');
var CSSTransitionGroup = require('react-addons-css-transition-group');

var ReactRouter = require('react-router')
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = ReactRouter.History;

var createBrowserHistory = require('history/lib/createBrowserHistory');

var h = require('./helpers');


// Import Components

import App from './components/App';
import NotFound from './components/NotFound';
import StorePicker from './components/StorePicker';

/*
  Routes
*/

var routes = (
    <Router history={createBrowserHistory()}>
      <Route path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route path="*" component={NotFound} />
    </Router>
  )

ReactDOM.render(routes, document.querySelector('#main'));
