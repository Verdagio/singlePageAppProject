/*  Created by Daniel Verdejo 11/10/2016.
    In the following script we will store
    all controllers & services.
    */
/*jslint white:true */
/*global angular */
angular.module('projectCtrlModule', [])

.controller("homeCtrl", function($scope) {
        "use strict";
    $scope.msg = "home page";
});
//Using a service which will only have one instance, this allow us to abstract use and functionality across application
