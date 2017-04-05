define(['checkboxSource'
    ], (checkboxSource) => {
    'use strict';

    let checkboxSrv;

    angular.module('shared').service('checkboxSrv',
        checkboxSrv = () => {
            let _checkingFixturePart = (id, data) => {
                checkboxSource(id, data);
            };
            return {
                checkingFixturePart(id, data) {
                    _checkingFixturePart(id, data);
                }
            }
        }
    );

    checkboxSrv.$inject = [];
});
