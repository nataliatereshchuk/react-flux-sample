$ = jQuery = require('jquery');

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;

var App = function () {
    return (<div>
        <Header/>
        <div className='container-fluid'>
            <RouteHandler></RouteHandler>
        </div>
    </div>)
};

module.exports = App;