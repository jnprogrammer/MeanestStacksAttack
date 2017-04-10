angular.module('meanhotel').controller('hotelController',hotelController);
console.log("DId this work? hotel display controller");
function hotelController($routeParams,hotelDataFactory){
    var vm = this;
    var id = $routeParams.id;
    hotelDataFactory.hotelDisplay(id).then(function(response){
        vm.hotel = response.data
    });
}