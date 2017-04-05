define([], () => {
	'use strcit';

	var run = ($state) => {
		$state.go('challangesModule');
	}

	run.$inject = ['$state'];

	return run;
});
