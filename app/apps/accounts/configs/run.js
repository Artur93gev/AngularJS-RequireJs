define([], () => {
	'use strict';

	var run = ($state) => {
		$state.go('accontsModule');
	}

	run.$inject = ['$state'];

	return run;
});
