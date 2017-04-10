angular.module('myApp',['ngRoute']).config(config);

function config($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'templates/main.html',
        controller: 'mainController',
        controllerAs:'vm'
    })
    .when('/film/:id',{
        templateUrl:'templates/film.html',
        controller: 'filmController',
        controllerAs:'vm'
    })
    .otherwise({
        redirectTo:'/'
    })
}

