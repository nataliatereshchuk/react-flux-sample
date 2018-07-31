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
                           onChange={this.props.onAuthorUpdate}/>
                <TextInput name='lastName'
                           id='lastName_input'
                           placeholder='Enter Last Name...'
                           onChange={this.props.onAuthorUpdate}/>
                <input type='submit' className='btn btn-primary' value='Submit' onClick={this.props.onSave}/>
                <div className='input'>{this.props.error}</div>
            </form>
        )
    }
}

module.exports = AuthorForm;