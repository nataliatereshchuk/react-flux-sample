'use strict';

let React = require('react');
let AuthorForm = require('./authorForm');
let AuthorAPI = require('../../api/authorApi');

class ManageAuthorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: { id: '', firstName: '', lastName: ''}
        };

        this.setAuthorState = this.setAuthorState.bind(this);
        this.saveAuthor = this.saveAuthor.bind(this);
    }

    setAuthorState(event) {
        let field = event.target.name;
        let value = event.target.value;
        let author = this.state.author;
        author[field] = value;

        return this.setState({ author: author });
    }

    saveAuthor(event) {
        event.preventDefault();
        AuthorAPI.saveAuthor(this.state.author);
        this.props.history.push('/authors');
    }

    render() {
        return (
            <div>
                <h1>Manage Author</h1>
                <AuthorForm author={this.state.author} onAuthorUpdate={this.setAuthorState} onSave={this.saveAuthor}></AuthorForm>
            </div>)
    }
}

module.exports = ManageAuthorPage;