(function(){
  angular.module('laBelleAssietteApp')
    .component('ingredientList', {
      templateUrl: '/components/ingredient-list/ingredient-list.component.html',
      controller: ['lodash', 'IngredientService', IngredientListController]
    });
  
  function IngredientListController(lodash, IngredientService) {
    this.editRow = -1;
    this.updatedIngredient = null;
    this.newIngredient = null;

    IngredientService.getAll().then((res) => {
      this.ingredients = res;
    });

    this.insert = () => {
      if (this.newIngredient && this.newIngredient.name && this.newIngredient.name != "" && this.newIngredient.quantity && this.newIngredient.quantity != ""){
        IngredientService.insert(this.newIngredient).then((res) => {
          this.ingredients.push(res);
          this.newIngredient = null;
        });
      }
    }
    
    this.edit = (index) => {
      this.editRow = index;
      this.updatedIngredient = lodash.clone(this.ingredients[index]);
    }

    this.editionDone = (index) => {
      if (!lodash.isEqual(this.updatedIngredient, this.ingredients[index])){
        IngredientService.update(this.updatedIngredient).then((res) => {
          this.ingredients[index] = res;
        });
      }
      this.editRow = -1;
      this.updatedIngredient = null;
    }

    this.delete = (index) => {
      IngredientService.delete(this.ingredients[index]);
      this.ingredients.splice(index, 1);
    }
  }
})();