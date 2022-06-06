/**
 * @class SandwichController
 */
 class SandwichController 
 {
    showCreateSandwichView()
    {
      this.view = new CreateSandwichView();

      this.sandwich = Ingredient.fetchSandwich();
      
      // Explicit this binding
      this.view.bindAddIngredient(this.handleAddIngredient)

      this.view.bindAddtoCartSanwidch(this.handleAddToCart);
  
      // Display initial ingredients
      this.onIngredientListChanged(Ingredient.fetchAll());
    }
  
    onIngredientListChanged = ingredients => {
      this.view.displayAvailableIngredients(ingredients);
      this.view.displayCurrentSandwich(this.sandwich);
    }
  
    handleAddIngredient = (name, price) => {
      this.sandwich = new IngredientDeco(this.sandwich, name, price);
      this.sandwich.save();
      this.onIngredientListChanged(Ingredient.fetchAll());
    }

    handleAddToCart = () => {
      this.sandwich.addToCart();
      this.sandwich.remove();
      this.sandwich = new Pain();
      this.onIngredientListChanged(Ingredient.fetchAll());
    }
  }