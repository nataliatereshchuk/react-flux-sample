'use strict';

let React = require('react');
let Link = require('react-router-dom').Link;
let AuthorActions = require('../../actions/author.actions');
let toastr = require('toastr');

class AuthorList extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteAuthor(id, event) {
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.success('Author was deleted.')
    }

    render() {
        return (
            <table className='table'>
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Delete Author</th>
                </tr>
                {this.props.authors.map((item, i) =>
                    <tr key={i}>
                        <td><Link to={{ pathname: `/author/${item.id}`}}>{item.id}</Link></td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td><a onClick={this.deleteAuthor.bind(this, item.id)}><img src='images/delete-icon.png'/></a></td>
                    </tr>)}
                </tbody>
            </table>)
    }
}

module.exports = AuthorList;