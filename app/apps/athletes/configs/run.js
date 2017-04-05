define([],() => {
	'use strict';

	var run = ($state) => {
		$state.go('athletesModule');
	}

	run.$inject = ['$state'];

	return run;
});
