'use strict';

var React = require('react');
var PropTypes = require('prop-types');

class AuthorList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className='table'>
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                {this.props.authors.map((item, i) =>
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                    </tr>)}
                </tbody>
            </table>)
    }
}

AuthorList.propTypes = {
    authors: PropTypes.string
};

module.exports = AuthorList;