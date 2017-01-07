(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/list/list.template.html',
    '<div class="container">\n' +
    '    <div class="page-header">\n' +
    '        <h1>Angularjs Filtering Data With ngRepeat Example</h1>\n' +
    '    </div>\n' +
    '    <div>\n' +
    '        <form>\n' +
    '            <div class="form-group">\n' +
    '                <label>By Name :</label>\n' +
    '                <input type="text" class="form-control" id="" ng-model="list.search.name" ng-focus="list.search={}">\n' +
    '                <label>By Code :</label>\n' +
    '                <input type="text" class="form-control" id="" ng-model="list.search.code" ng-focus="list.search={}">\n' +
    '                <label>By Any :</label>\n' +
    '                <input type="text" class="form-control" id="" ng-model="list.search.$" ng-focus="list.search={}">\n' +
    '            </div>\n' +
    '            <table class="table">\n' +
    '                <thead>\n' +
    '                    <tr>\n' +
    '                        <th>Name</th>\n' +
    '                        <th>Code</th>\n' +
    '                    </tr>\n' +
    '                </thead>\n' +
    '                <tr ng-repeat="country in list.countries | filter:list.search">\n' +
    '                    <td>{{country.name}}</td>\n' +
    '                    <td>{{country.code}}</td>\n' +
    '                </tr>\n' +
    '            </table>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();
