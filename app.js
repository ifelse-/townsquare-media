var townSquareApp = angular.module('townSquareApp', ['ngRoute', 'ngResource']);

townSquareApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'settingController'
    })

	
});