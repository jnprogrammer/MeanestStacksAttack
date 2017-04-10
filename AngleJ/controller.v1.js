//getter syntax for angluar
angular.module('myApp').controller('MyController',MyController);

function MyController( )
{
    var vm = this;
    vm.name = 'Ace Programmer';
}