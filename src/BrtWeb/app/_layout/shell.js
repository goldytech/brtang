(function() {
    'use strict';
    angular.module('app').controller('shell', ['httpRequestTracker', shell]);

    function shell(httprequestTracer) {
        var vm = this;
        vm.busyMessage = 'Please wait...';
        vm.isBusy = httprequestTracer.httpRequests.isPending;
        vm.spinnerOptions = {
            radius: 40,
            lines: 7,
            length: 0,
            width: 30,
            speed: 1.7,
            corners: 1.0,
            trail: 100,
            color: '#F58A00'
        };
    }
})();