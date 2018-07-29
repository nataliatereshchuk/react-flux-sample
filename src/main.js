'use-strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var routes = require('./routes');

ReactDOM.render(<Router routes={routes}></Router>, document.getElementById('app'));
