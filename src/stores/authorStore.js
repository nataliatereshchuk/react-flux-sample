'use strict';

let Dispatcher = require('../dispatcher/appDispatcher');
let ActionTypes = require('../constants/actionTypes');
let EventEmmiter = require('events');
const CHANGE_EVENT = 'change';

let _authors = [];

let AuthorStore = Object.assign({}, EventEmmiter.prototype, {
    onChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getAllAuthors: function() {
        return _authors;
    },

    getAuthorById: function(id) {
        return _authors.find(item => item.id == id);
    }
});

Dispatcher.register((action) => {
    switch(action.actionType) {
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.UPDATE_AUTHOR:
            Object.assign(
                _authors.find(item => item.id == action.author.id),
                {
                    firstName: action.author.firstName,
                    lastName: action.author.lastName
                });
                AuthorStore.emitChange();
            break;
        case ActionTypes.INITIALIZE:
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;
        default: break;
    }
});

module.exports = AuthorStore;