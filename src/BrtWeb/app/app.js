(function() {
    'use strict';
    var app = angular.module('app', ['ngAnimate', // for angular animations
        'ngRoute', // for angular routing
        'ngSanitize', // for html markup cleanup used in side bar
        'ui.bootstrap' // for bootstrap ui   
        //'services' // app services module
    ]);
    app.constant('AppConfig', {        
        baseUrl : 'http://azurewebsites.net'
    });
    
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.otherwise({ redirectTo: '/ringtones' });
    }]);
})();