'use strict';

let React = require('react');
let Link = require('react-router-dom').Link;

class Home extends React.Component{
    render() {
        return (
            <div className="jumbotron">
                <h1>Administration</h1>
                <Link to={{pathname: '/about'}} className='btn btn-primary btn-lg'>Learn more...</Link>
            </div>)
    }
};

module.exports = Home;