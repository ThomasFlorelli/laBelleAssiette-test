(function() {
	angular.module('laBelleAssietteApp')
    .factory('IngredientService', ['$http', IngredientService])
  
  function IngredientService($http) {
    let ingredientService = {};
    let url = '/api/ingredient';

    ingredientService.getAll = () => {
      return $http.get(url)
        .then(function(res){
          return res.data;
        }, function(res){
          console.log(res);
        });
    };

    ingredientService.insert = function(ingredient){
      return $http.post(url, ingredient)
        .then(function(res){
          return res.data;
        }, function(res){
          console.log(res);
        });
    }

    ingredientService.update = function(ingredient){
      return $http.put(url + '/' + ingredient._id, ingredient)
        .then(function(res){
          return res.data;
        }, function(res){
          console.log(res);
        });
    }

    ingredientService.delete = function(ingredient){
      $http.delete(url + '/' + ingredient._id);
    }

    return ingredientService;
  }
})();