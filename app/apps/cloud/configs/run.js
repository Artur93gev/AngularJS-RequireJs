define([], () => {
	'use strict';

	var run = ($state) => {
		$state.go('cloudeModule');
	}

	run.$inject = ['$state'];

	return run;
});
