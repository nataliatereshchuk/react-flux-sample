var React = require('react');
var BrowserRouter = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
var Switch = require('react-router-dom').Switch;

class Main extends React.Component {
    render() {
        return (
            <main className='container-fluid'>
                    <Switch>
                        <Route exact path='/' component={require('./common/homePage')}/>
                        <Route path='/authors' component={require('./authors/authorPage')}/>
                        <Route path='/about' component={require('./about/aboutPage')}/>
                        <Route component={require('./common/noMatchPage')}/>
                    </Switch>
            </main>
        );
    }
}

module.exports = Main;