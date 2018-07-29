'use strict';

var React = require('react');
var AuthorAPI = require('../../api/authorApi');

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: AuthorAPI.getAllAuthors()
        };
    }

    render() {
        return (<div>
            <h1>Authors</h1>
            <table>
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                {this.state.authors.map((item, i) =>
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>)
    }
};

module.exports = Authors;