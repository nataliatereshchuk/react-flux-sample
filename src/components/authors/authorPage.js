'use strict';

var React = require('react');
var AuthorList = require('./authorList');
var AuthorAPI = require('../../api/authorApi');

class AuthorPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authors: []
        }
    }

    componentDidMount(){
        this.setState({
            authors: AuthorAPI.getAllAuthors()
        });
    }

    render() {
        return (<div>
            <h1>Authors</h1>
            <AuthorList authors={this.state.authors}/>
        </div>)
    }
};

module.exports = AuthorPage;