// every single line of code that include scope seems to be in the controller
// except the algoritmic logic(services and fabrics) and times when we need to share data between scopes(dispatcher)


define([], function() {
    'use strict';

    function indexCtrl($scope, $rootScope, httpSrv, dispatcherSrv) {
        let req, eventName, event;
        $rootScope.sportId = 2;
        
        $scope.validateUserByKeyPress = (e) => {
            if (e) {
                e.stopPropagation();
            }
            if (e.which == 13 || e.keyCode == 13 || e.which == 32 || e.keyCode == 32) {
                $scope.validateUser();
            }
        };

        $scope.err = {};
        $scope.partner = {};

        // login part and validation

        $scope.validateUser = (e) => {
            let data;
            if (e) {
                e.stopPropagation();
            }
            data = {
                username : $scope.partner.name,
                password : $scope.partner.password
            };
            data = JSON.stringify(data);
            if ($scope.partner.name && $scope.partner.password) {
                dispatcherSrv.broadcast('loaderShow');
                login(data);
            }

            $scope.$watch('partner', () => {
                if ($scope.partner.name) {
                    $scope.err.name = false;
                }
                if ($scope.partner.password) {
                    $scope.err.password = false;
                }
            }, true);
            if ($scope.partner.name && !$scope.partner.password) {
                $scope.err.password = true;
            }
            if (!$scope.partner.name && $scope.partner.password) {
                $scope.err.name = true;
            }
        };

        let login = (data) => {
            req = {
                method  : 'POST',
                url     : 'api/LogIn',
                headers : {
                    'Content-type' : 'application/json'
                },
                data    : data
            };
            httpSrv.request(req, 'login');

            event = $scope.$on('login', (e, data) => {
                event();
                if (data) {
                    dispatcherSrv.broadcast('partnerId', data);
                }
            });
        };
    }

    indexCtrl.$inject = ['$scope', '$rootScope', 'httpSrv', 'dispatcherSrv'];

    return indexCtrl;
});
