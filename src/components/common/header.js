'use strict';

let React = require('react');
let NavLink = require('react-router-dom').NavLink;
let Link = require('react-router-dom').Link;

class Header extends React.Component {
    render() {
        return (
            <nav className='navbar'>
                <div className='container-fluid'>
                    <Link to={{pathname: '/'}}>
                        <img src='images/logo.png' width='36px' height='30px'/>
                    </Link>
                    <ul className='nav navbar'>
                        <li><NavLink activeClassName='active' to={{pathname: '/'}}>Home</NavLink></li>
                        <li><NavLink activeClassName='active' to={{pathname: '/authors'}}>Authors</NavLink></li>
                        <li><NavLink activeClassName='active' to={{pathname: '/about'}}>About</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

module.exports = Header;