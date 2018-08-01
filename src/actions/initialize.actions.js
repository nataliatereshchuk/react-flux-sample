'use strict';

let Dispatcher = require('../dispatcher/appDispatcher');
let AuthorAPI = require('../api/authorApi');
let ActionTypes = require('../constants/actionTypes');

let AuthorActions = {
    initApp: () => {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorAPI.getAllAuthors()
            }
        });
    }
};

module.exports = AuthorActions;