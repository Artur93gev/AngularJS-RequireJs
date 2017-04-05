// in controller we give object like this
//
// type = {
//             itemsList: [Array of items],
//             hasSearch: true or false,
//             multiSelected: true or false,
//             itemValue: 'id',  //its means that we want return ids
//             itemName: 'name'  //its means that we want write names
//             howManyItemsForAll: //in multi selected dropdowns if itemsList.length > howManyItemsForAll create all field
//         };

// in html      <dropdown-dir type="type" from-controller-fn="fromControllerFn"></dropdown-dir>

define(['dropdownFct'
], () => {
    let dropdownDir = ($document, $ocLazyLoad, DropdownFct) => {

         return {
             restrict: 'EA',
             scope: {
                 type: '=',
                 fromControllerFn: '='
             },
             templateUrl : 'app/apps/shared/directives/dropdown/view/index.html',
             link(scope, elem, attr) {
                 $ocLazyLoad.load({
                     files : ['app/apps/shared/directives/dropdown/assets/stylesheets/css/app.css']
                 });

                 scope.dropdown = new DropdownFct(scope.type);

                 scope.fromControllerFn = scope.dropdown.fromControllerFn;

                 $document.on('click', function (e) {
                     if (scope.dropdown.dropdownShow) {
                         scope.dropdown.offClick();
                     }
                 });
             }
        };
    };

    dropdownDir.$inject = ['$document', '$ocLazyLoad', 'DropdownFct'];

    return dropdownDir;
});