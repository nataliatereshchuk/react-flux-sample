'use strict';

var React = require('react');
var PropTypes = require('prop-types');

class TextInput extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let wrapperClass = 'form-group';

        if(this.props.error && this.props.error.length > 0){
            wrapperClass += ' has-error';
        }

        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input type='text'
                       name={this.props.name}
                       id={this.props.id}
                       className='form-control'
                       placeholder={this.props.placeholder}
                       onChange={this.props.onChange}/>
                <div className='input'>{this.props.error}</div>
            </div>
        )
    }
}

TextInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};


module.exports = TextInput;