define(['searchFct'
	], ()=> {

		let searchController = (SearchFct, $ocLazyLoad) => {
			return {
				restrict 	: 'E',
				scope 		: {
					fn : '&',
					options : '='
				},
				templateUrl : 'app/apps/shared/directives/search/view/index.html',
				link(scope, elem, attr) {
					$ocLazyLoad.load({
						files: ['app/apps/shared/directives/search/assets/stylesheets/css/app.css']
					});
					scope.search = new SearchFct(scope.options);
					scope.fn = scope.search.getResult;
				}
			}
		}

		searchController.$inject = ['SearchFct', '$ocLazyLoad'];

		return searchController;
});
