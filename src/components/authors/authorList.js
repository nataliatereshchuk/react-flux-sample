'use strict';

let React = require('react');
let Link = require('react-router-dom').Link;

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
                        <td><Link to={{ pathname: `/author/${item.id}`}}>{item.id}</Link></td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                    </tr>)}
                </tbody>
            </table>)
    }
}

module.exports = AuthorList;