define([], () => {
	'use strict';

	var run = ($state) => {
		$state.go('bonusModule');
	}

	run.$inject = ['$state'];

	return run;
});
