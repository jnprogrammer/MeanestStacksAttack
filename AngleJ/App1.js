angular.module('myFilmApp',['ngRoute']).config(config);

function config($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'templates/main.html',
        controller: 'mainController',
        controllerAs:'vm'
    })
    .when('/about',{
        templateUrl:'templates/about.html',
        controller: 'aboutController',
        controllerAs:'vm'
    })
    .otherwise({
        redirectTo:'/'
    })
}

