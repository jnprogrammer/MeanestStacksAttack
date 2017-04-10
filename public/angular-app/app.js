angular.module('meanhotel',['ngRoute'])
    .config(config)
    .controller('hotelsController',hotelsController);

function config($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl : 'angular-app/hotels.html',
            controller : 'hotelsController',
            controllerAs :'vm'
        });
}

function hotelsController(){
    var vm = this;
    vm.title = 'MEAN Hotel App';
}