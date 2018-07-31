'use strict';

let authors = require('./authorData').authors;
let _ = require('lodash');

let _generateId = function(author) {
	return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

let _clone = function(item) {
	return JSON.parse(JSON.stringify(item));
};

let AuthorApi = {
	getAllAuthors: function() {
		return _clone(authors); 
	},

	getAuthorById: function(id) {
		var author = _.find(authors, {id: id});
		return _clone(author);
	},
	
	saveAuthor: function(author) {
		if (author.id) {
			var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id})); 
			authors.splice(existingAuthorIndex, 1, author);
		} else {
			author.id = _generateId(author);
			authors.push(_clone(author));
		}

		return author;
	},

	deleteAuthor: function(id) {
		_.remove(authors, { id: id});
	}
};

module.exports = AuthorApi;