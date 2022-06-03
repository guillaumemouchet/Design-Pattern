/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
 class IndexController 
 {
    index()
    {
        this.view = new HomepageView();
    }
  
    onIngredientListChanged = ingredients => {
      this.view.displayIngredients(ingredients);
      this.view.displayCurrentSandwich(this.sandwich);
    }
  
    handleAddIngredient = (name, price) => {
      this.sandwich = new IngredientDeco(this.sandwich, name, price);
      this.sandwich.save();
      this.onIngredientListChanged(Ingredient.fetchAll());
    }

    handleCommand = () => {
      this.sandwich.remove();
      this.sandwich = new Pain();
      this.onIngredientListChanged(Ingredient.fetchAll());
    }
  }