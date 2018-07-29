$ = jQuery = require('jquery');

var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');

var App = (props) => {
        let Child;
        
        switch (props.route) {
            case 'about':
                Child = About;
                break;
            default: Child = Home
        }

        return (<div>
            <Child/>
        </div>)

};

function render() {
    var route = window.location.hash.substr(1);

    ReactDOM.render(<App route={route}/>, document.getElementById('app'));
}

window.addEventListener('hashChange', render);

render();