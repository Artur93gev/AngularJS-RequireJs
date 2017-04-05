/*
	This is a directive for search
	To use this directive you need to include in your Html <search-dir options="" fn=""></search-dir>

	@options - this is an object that must include list, searchName, isLiveUpdated and criterion properties
		@isLiveUpdated - is this connected to binded data or it is filtering with another functionality
		@list - list that must be filtered after search
		@searchName - this is set up to searching input
		@criterion - this the list's item criterion about what we are searching
	@fn - this is conector to directives getResult() function this is the array of criterions of the list items if it is live updated
	either it is the input's value
*/


define(['searchController'
	], (searchController) => {
		'use strict';

		angular.module('shared').directive('searchDir', searchController);
});
