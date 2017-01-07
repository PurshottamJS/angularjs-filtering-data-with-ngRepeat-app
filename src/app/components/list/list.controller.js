;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('list')
        .controller('ListController', ListController);
    ListController.$inject = ['listFactory'];

    function ListController(listFactory) {
        var vm = this;
        vm.countries = listFactory.countries;
    }
}(window, angular, undefined));
