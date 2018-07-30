$ = jQuery = require('jquery');

var React = require('react');
var Header = require('./common/header');
var Main = require('./main');
var BrowserRouter = require('react-router-dom').BrowserRouter;

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Main/>
                </div>
            </BrowserRouter>
        )
    }
}

module.exports = App;