
$ = jQuery = require('jquery');

var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

(function(win) {
    'use strict';

    var App = (props) => {
        let Child;

        switch (props.route) {
            case 'about':
                Child = About;
                break;
            default: Child = Home
        }

        return (<div>
            <Header/>
            <Child/>
        </div>)
    };


    win.addEventListener('hashChange', render);
    function render() {
        var route = win.location.hash.substr(1);

        ReactDOM.render(<App route={route}/>, document.getElementById('app'));
    }

    render();
})(window);
