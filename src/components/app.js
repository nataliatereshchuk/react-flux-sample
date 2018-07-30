$ = jQuery = require('jquery');

var React = require('react');
var Header = require('./common/header');

var BrowserRouter = require('react-router-dom').BrowserRouter;
var Switch = require('react-router-dom').Switch;
var Route = require('react-router-dom').Route;
var Redirect = require('react-router-dom').Redirect;

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <main className='container-fluid'>
                        <Switch>
                            <Route exact path='/' component={require('./common/homePage')}/>
                            <Route path='/about-us' render={() => {
                                return <Redirect to='/about'/>
                            }}/>
                            <Route path='/authors' component={require('./authors/authorPage')}/>
                            <Route path='/author' component={require('./authors/manageAuthorPage')}/>
                            <Route path='/about' component={require('./about/aboutPage')}/>

                            <Route component={require('./common/noMatchPage')}/>
                        </Switch>
                    </main>
                </div>
            </BrowserRouter>
        )
    }
}

module.exports = App;