/*
	This is directive for intervals.
	To use the directive inlcude to your template <intervals-dir options="" fn=""></intervals-dir>
	@options - this is an object that must become intervals.It must include 
	intervalsName(this will set as title), minValue and maxValue
	@fn - this is the function to getResult of intervals directive work
	it will give you the array of intervals that were seted
*/

define(['intervalsController'
	], (intervalsController) => {
		'use strict';

		angular.module('shared').directive('intervalsDir', intervalsController);
});
