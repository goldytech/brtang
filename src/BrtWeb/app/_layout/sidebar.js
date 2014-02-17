(function() {
    'use strict';
    var module = angular.module('app');
    module.controller('sidebar', ['breadcrumbs', sidebar]);

    function sidebar(breadcrumbs) {
        var vm = this;
        vm.isCurrent = isCurrent;
        
        activate();
        
        function activate() {
           return  breadcrumbs.getAll();
        }
        
        function isCurrent(route) {
            return breadcrumbs.find(route);
        }
    }
})();