'use strict';

let React = require('react');
let Link = require('react-router-dom').Link;

class Header extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <a href='/' className='navbar-brand'>
                        <img src='images/logo.png' width='36px' height='30px'/>
                    </a>
                    <ul className='nav navbar'>
                        <li><Link to={{pathname: '/'}}>Home</Link></li>
                        <li><Link to={{pathname: '/authors'}}>Authors</Link></li>
                        <li><Link to={{pathname: '/about'}}>About</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

module.exports = Header;