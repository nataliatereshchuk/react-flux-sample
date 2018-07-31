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
                <TextInput name={{name: 'ccc'}}
                           id='firstName_input'
                           placeholder='Enter First Name...'
                           onChange={this.props.onAuthorUpdate}></TextInput>
                <TextInput name='lastName'
                           id='lastName_input'
                           placeholder='Enter Last Name...'
                           onChange={this.props.onAuthorUpdate}></TextInput>
                <input type='submit' className='btn btn-primary' value='Submit'/>
                <div className='input'>{this.props.error}</div>
            </form>
        )
    }
}

module.exports = AuthorForm;