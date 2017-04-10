angular.module('meanhotel').controller('hotelsController',hotelsController);

function hotelsController($http){
    var vm = this;
    vm.title = 'MEAN Hotel App';
    $http.get('/api/data/hotel-data?count=10').then(function(response){
        console.log(response);
        vm.hotels = response.data;
    })

}