'use strict';

let Dispatcher = require('../dispatcher/appDispatcher');
let AuthorAPI = require('../api/authorApi');
let ActionTypes = require('../constants/actionTypes');

let AuthorActions = {
    createAuthor: author => {
        let newAuthor = AuthorAPI.saveAuthor(author);
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },
    updateAuthor: author => {
        let updateAuthor = AuthorAPI.saveAuthor(author);
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: updateAuthor
        });
    },
    deleteAuthor: id => {
        AuthorAPI.deleteAuthor(id);
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            authorId: id
        });
    }
};

module.exports = AuthorActions;