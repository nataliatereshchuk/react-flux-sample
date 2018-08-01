'use strict';

let React = require('react');
let Link = require('react-router-dom').Link;
let AuthorList = require('./authorList');
let AuthorStore = require('../../stores/authorStore');

class AuthorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: AuthorStore.getAllAuthors(),
            errors: {}
        }
    }

    render() {
        return (<div>
            <h1>Authors</h1>
            <Link to='/author' className='btn btn-default'>Create Author</Link>
            <AuthorList authors={this.state.authors} errors={this.state.errors}/>
        </div>)
    }
}

module.exports = AuthorPage;