/*
	This a directive to create a new instance of the same object(Under same object we're understanding on what it is set)
	To use the directive you need to write in your Html <create-new-line options=""></create-new-line>

	@options - this is the function that must be called for initializing the new instance
*/

define(['createNewLineController'
	], (createNewLineController) => {
		'use strict';

		angular.module('shared').directive('createNewLine', createNewLineController);
});
