//getter syntax for angluar
angular.module('myApp').controller('mainController',mainController).controller('filmController',filmController)

function mainController(filmFactory)
{
    var vm = this;
    filmFactory().getAllFilms().then(function(response){
        vm.films = response;
    });
   
    vm.name = 'Ace Programmer';
}

function filmController($routeParams,filmFactory )
{
    var vm = this;
    var id = $routeParams.id;
    filmFactory.getOneFilm(id).then(function(response){
        vm.film = response;
    });
}