'use strict';

let React = require('react');
let TextInput = require('../common/textInput');

class AuthorForm extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <TextInput name='firstName'
                           id='firstName_input'
                           placeholder='Enter First Name...'
                           onChange={this.props.onAuthorUpdate}
                           error={this.props.errors.firstName}
                           value={this.props.author.firstName}/>
                <TextInput name='lastName'
                           id='lastName_input'
                           placeholder='Enter Last Name...'
                           onChange={this.props.onAuthorUpdate}
                           error={this.props.errors.lastName}
                           value={this.props.author.lastName}/>
                <input type='submit' className='btn btn-primary' value='Submit' onClick={this.props.onSave}/>
            </form>
        )
    }
}

module.exports = AuthorForm;