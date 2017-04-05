// <pagination-dir page-count="count of your pages" click-function="function that works when you click on pageination's button"></pagination-dir>
// in controller when you have request depends on page number, do firs request in controller, page number = 1, then give that function to pagination directive
// clickFunction have one parametr - page number

define(['paginationFct'
], () => {
    'use strict';

    let paginationDir = ($document, $ocLazyLoad,PaginationFct) => {

        return {
            restrict: 'EA',
            scope: {
                pageCount: '=',
                clickFunction: '='
            },
            templateUrl: 'app/apps/shared/directives/pagination/view/index.html',
            link(scope, elem, attr) {

                $ocLazyLoad.load({
                    files : ['app/apps/shared/directives/pagination/assets/stylesheets/css/app.css']
                });

                scope.$on('pageTest', (e, data) => {
                    scope.arrOfPages = new PaginationFct(data, scope.clickFunction);
                })
            }
        }

    };

    paginationDir.$inject = ['$document', '$ocLazyLoad', 'PaginationFct'];

    return paginationDir;
});

