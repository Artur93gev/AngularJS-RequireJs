/*
	This is directive for checkbox.
	To use the directive inlcude to your template <checkbox-dir options="" fn=""></checkbox-dir>
	@options - this is an object that must become checkboxes.It must include 
	list(each item has model and name at list), criterion which must be given as result
	and listName(this will set as title);
	@fn - this is the function to getResult of checkbox directive work
	it will give you the array of 'criterions' of all checked fields
*/

define(['checkboxesController'
	], (checkboxesController) => {
	'use strict';

	angular.module('shared').directive('checkboxDir', checkboxesController);
});
