define([], () => {
	'use strict';

	var personalPart = ($rootScope, httpSrv, dispatcherSrv, $ocLazyLoad) => {

		let req;
		
	    let _logOut = () => {
	    	req = {
	            url     : 'api/LogOut',
	            method  : 'POST',
	            headers : {
                    'Content-type' : 'application/json'
                }
	        };
	        httpSrv.request(req, 'logOut');
	    };
        let balance = () => {
            req = {
                method  : 'GET',
                url     : 'api/GetCurrentBalance',
                headers : {
                    'Content-Type' : 'application/json'
                }
            };
            httpSrv.request(req, 'balance');
        };
		return {
			restrict 	: 'EA',
			scope 		: false,
			templateUrl	: 'app/directives/personalPart/view/index.html',
			link(scope, elem, attr) {

                $ocLazyLoad.load({
                    files : ['app/directives/personalPart/assets/stylesheets/css/app.css']
                });
				
				scope.soon = {
			        model : false
			    };
			    scope.general = {};

			    scope.partner = {};

			    scope.commingSoonShow = (e) => {
			        angular.element.find('.fs-back-office-not-available-modal')[0].style.left = (e.pageX - 60) + 'px';
			        e.stopPropagation();
			        scope.soon.model = true;
			    };
			    scope.commingSoonHide = (e) => {
			        e.stopPropagation();
			        scope.soon.model = false;
			    };

			    // opem general part

			    scope.openGeneralTabs = (e) => {
			    	e.stopPropagation();
			    	scope.general.model = !scope.general.model;
			    };

			    // user settings control

			    scope.openUserSettings = (e) => {
			        e.stopPropagation();
			        scope.partner.settings = !scope.partner.settings;
			    };

			    // user log out
			    
			    scope.userLogOut = (e) => {
			        e.stopPropagation();
			        _logOut();			        
			    };

			    
			    // listeners on events from rootScope

				scope.$on('partnerId', (e, data) => {
			        if (data) {
			        	scope.partnerId = data.PartnerId;
	                    scope.partner.username = data.PartnerName;
	                    document.cookie = 'userName=' + scope.partner.username;
			        }
			        balance();
			    });
	            scope.$on('balance', (e, data) => {
	                dispatcherSrv.broadcast('laoderHide');
	                dispatcherSrv.broadcast('currentState', 'contests');
	                if (data) {
	                    scope.partner.bankBalance = data;
	                    document.cookie = 'bBalance=' + scope.partner.bankBalance;
	                }
	            });
	            if($rootScope.getCookie('userName')) {
	            	scope.partner.username = $rootScope.getCookie('userName');
	            	scope.partner.bankBalance = $rootScope.getCookie('bBalance');
	            }
			}

		}
	}

	personalPart.$inject = ['$rootScope', 'httpSrv', 'dispatcherSrv', '$ocLazyLoad'];

	return personalPart;
})
