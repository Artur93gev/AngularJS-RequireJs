define(['dropdownSource'
], (dropdownSource) => {
    'use strict';

    angular.module('shared').factory('DropdownFct',
        () => {
       		return dropdownSource;
    });

});