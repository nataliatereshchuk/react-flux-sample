$ = jQuery = require('jquery');

var React = require('react');
var Header = require('./common/header');

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (<div>
            <Header/>
            <div className='container-fluid'>
                {this.props.children}
            </div>
        </div>)
    }
};

module.exports = App;