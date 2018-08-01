'use strict';

let React = require('react');
let AuthorForm = require('./authorForm');
let toastr = require('toastr');
let AuthorStore = require('../../stores/authorStore');
let AuthorActions = require('../../actions/author.actions');

class ManageAuthorPage extends React.Component {
    constructor(props) {
        super(props);

        let author;
        if(this.props.match.params.id) {
            author = AuthorStore.getAuthorById(this.props.match.params.id);
        }

        this.state = {
            author: author || { id: '', firstName: '', lastName: ''},
            errors: {}
        };

        this.setAuthorState = this.setAuthorState.bind(this);
        this.saveAuthor = this.saveAuthor.bind(this);
        this.isAuthorFormValid = this.isAuthorFormValid.bind(this);
    }

    setAuthorState(event) {
        let field = event.target.name;
        let value = event.target.value;
        this.state.author[field] = value;
        this.setState({ author: this.state.author });
    }

    isAuthorFormValid() {
        let isFormValid = true;
        this.state.errors = {};

        if(!this.state.author.firstName) {
            isFormValid = false;
            this.state.errors.firstName = 'First name cannot be empty';
        }

        if(!this.state.author.lastName) {
            isFormValid = false;
            this.state.errors.lastName = 'Last name cannot be empty';
        }

        this.setState({errors: this.state.errors});
        return isFormValid;
    }

    saveAuthor(event) {
        event.preventDefault();
        if (!this.isAuthorFormValid()) {
            return;
        }

        if(this.state.author.id) {
            AuthorActions.updateAuthor(this.state.author);
        } else {
            AuthorActions.createAuthor(this.state.author);
        }

        toastr.success('Author saved');
        this.props.history.push('/authors');
    }

    render() {
        return (
            <div>
                <h1>Manage Author</h1>
                <AuthorForm author={this.state.author} onAuthorUpdate={this.setAuthorState} onSave={this.saveAuthor} errors={this.state.errors}></AuthorForm>
            </div>)
    }
}

module.exports = ManageAuthorPage;