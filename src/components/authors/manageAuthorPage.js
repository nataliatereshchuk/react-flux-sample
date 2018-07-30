'use strict';

let React = require('react');
var AuthorForm = require('./authorForm');

class ManageAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: { id: '', firstName: '', lastName: ''}
        }

        this.setAuthorState = this.setAuthorState.bind(this);
    }

    // setAuthorState() {
    //     let field = event.target.name;
    //     let value = event.target.value;
    //     let author = {};
    //     let a = Object.assign(author, field })
    //
    //     return this.setState({ author: author});
    // }

    render() {
        return (
            <div>
                <h1>Manage Author</h1>
                <AuthorForm author={this.state.author}></AuthorForm>
            </div>)
    }
}

module.exports = ManageAuthor;