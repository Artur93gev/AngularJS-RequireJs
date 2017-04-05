define(['paginationSource'
], (paginationSource) => {
    'use strict';

    angular.module('shared').factory('PaginationFct',
        () => {
            return paginationSource;
        });

});