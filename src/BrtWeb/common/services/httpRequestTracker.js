(function () {
    'use strict';
    var servicemodule = angular.module('services', []);
    servicemodule.factory('httpRequestTracker', ['$http', requestTracker]);
    function requestTracker($http) {
        var httpRequests = {};
        httpRequests.isPending = $http.pendingRequests.length > 0;
        return httpRequests;
    }
})();




//angular.module('services.httpRequestTracker').factory('httpRequestTracker', ['$http', function($http){

//  var httpRequestTracker = {};
//  httpRequestTracker.hasPendingRequests = function() {
//    return $http.pendingRequests.length > 0;
//  };

//  return httpRequestTracker;
//}]);