/*  Created by Daniel Verdejo & Karle Sleith on 01/11/2016
    In this factory we will take in raw 
    data from our DB and then parse that
    into our services.js which communicates with
    our controllers.
*/

/*jslint white:true */
/*global angular */
angular.module('app.parse', [])

.factory('info', function(){
   "use strict";
    window.alert("Test message: the parse info is correctly linked");
 
});