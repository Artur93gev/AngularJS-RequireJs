/*
	This is directive for radio buttons.
	To use the directive inlcude to your template <radiobuttons-dir options="" fn=""></radiobuttons-dir>
	@options - this is an object that must become radiobuttons.It must include 
	list(each item has model and name at list), criterion which must be given as result
	and listName(this will set as title);
	@fn - this is the function to getResult of radiobutton's directive work
	it will give you the array of 'criterion' of the checked field
*/

define(['radiobuttonsController'
	], (radiobuttonsController) => {
		'use strict';

		angular.module('shared').directive('radiobuttonsDir', radiobuttonsController);
});
