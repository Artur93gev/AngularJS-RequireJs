/*
	This is our dynamic module which has all the functionality shared so 
	it haven't any services yet. They will add later runtime
	By the way this modules syntax is different from the others it is
	because of tecnologies not working.We'll decide when to change all the modules to be like this one
*/


define(['angular',
	'sharedRun',
	], (angular, run) => {
	'use strict';

	let shared = angular.module('shared', [])
		.run(run)
});
