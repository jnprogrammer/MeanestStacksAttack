angular.module('meanhotel',['ngRoute']).config(config)
   
function config($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl :'angular-app/hotel-list/hotels.html',
            controller : 'hotelsController',
            controllerAs :'vm'
        });
        console.log($routeProvider);
        
}
