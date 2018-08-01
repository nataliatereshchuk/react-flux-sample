'use-strict';

let React = require('react');
let ReactDOM = require('react-dom');
let App = require('./components/app');
let InitializeActions = require('./actions/initialize.actions');

ReactDOM.render(<App/>, document.getElementById('app'));
InitializeActions.initApp();
