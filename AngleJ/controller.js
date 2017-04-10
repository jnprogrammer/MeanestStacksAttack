//getter syntax for angluar
angular.module('myApp').controller('mainController',mainController).controller('aboutController',aboutController);

function mainController($http)
{
    var vm = this;
    $http.get('http://swapi-tpiros.rhcloud.com/films').then(function(response){
        console.log(response);
        vm.films = response.data;
    });
    vm.name = 'Ace Programmer';
}

function aboutController( )
{
    var vm = this;
    vm.bio = 'this is who I am and stuff';
}