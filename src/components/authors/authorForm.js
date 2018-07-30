'use strict';

let React = require('react');

class AuthorForm extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <div className='form-group'>
                    <label for='firstName_input'>First Name</label>
                    <input type='text'
                           id='firstName_input'
                           className='form-control'
                           placeholder='Enter First Name...'
                           value={this.props.author.firstName}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='firstName_input'>Last Name</label>
                    <input type='text'
                           id='lastName_input'
                           className='form-control'
                           placeholder='Enter Last Name...'
                           value={this.props.author.lastName}/>
                </div>
                <input type='submit' className='btn btn-primary' value='Submit'/>
            </form>
        )
    }
}

module.exports = AuthorForm;