'use-strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
// var routes = require('./routes');
var App = require('./components/app');

ReactDOM.render(<Router>
    <App>
        <Route path='*' component={require('./components/common/noMatchPage')}/>
        <Route path='/authors' component={require('./components/authors/authorPage')}/>
        <Route path='/about' component={require('./components/about/aboutPage')}/>
    </App>
</Router>, document.getElementById('app'));
