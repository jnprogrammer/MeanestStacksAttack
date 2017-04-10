angular.module('myApp').factory('filmFactory',filmFactory);

function filmFactory($http){
    return{
        getAllFilms:getAllFilms,
        getOneFilm : getOneFilm
    };
}

function getAllFilms(){
    return $http.get('http://swapi-tpiros.rhcloud.com/flims').then(complete).catch(failed);
}

function getOneFilm(id){
    return $http.get('http://swapi-tpiros.rhcloud.com/flims/' + id).then(complete).catch(failed);
}
function complete(response){
    return response.data;
}

function failed(error){
    return error.statusText;
}