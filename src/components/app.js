let React = require('react');
let Header = require('./common/header');

let BrowserRouter = require('react-router-dom').BrowserRouter;
let Switch = require('react-router-dom').Switch;
let Route = require('react-router-dom').Route;
let Redirect = require('react-router-dom').Redirect;

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <main className='container-fluid'>
                        <Switch>
                            <Route exact path='/' component={require('./home/homePage')}/>
                            <Route path='/about-us' render={() => {
                                return <Redirect to='/about'/>
                            }}/>
                            <Route path='/authors' component={require('./authors/authorPage')}/>
                            <Route path='/author/:id' component={require('./authors/manageAuthorPage')}/>
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