define([], () => {
	'use strict' ;

	var run = ($state) => {
		$state.go('contestCreateModule');
	}

	run.$inject = ['$state'];

	return run;
});
