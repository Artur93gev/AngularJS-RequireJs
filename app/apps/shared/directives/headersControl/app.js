/*
	This is directive for headers control.
	To use the directive inlcude to your template <headers-control options="" fn=""></headers-control>
	@options - this is an object that must become checkboxes.It must include 
	list(each item has model and name at list), criterion which must be given as result
	and fn(optional parameter that can be called after each change in the headers control.In my
	case it was styles update function);
	@fn - this is the function to getResult of headerControl directive work
	it will give you the array of 'criterions' of all checked fields
*/

define(['headersControlController'
	], (headersControlController) => {
		'use strict';
		
		angular.module('shared').directive('headersControl', headersControlController);
});
