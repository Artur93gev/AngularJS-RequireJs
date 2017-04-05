define(['paginationController'
],(paginationController) => {
    'use strict';

    angular.module('shared').directive('paginationDir',paginationController);
});