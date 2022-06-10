/**
 * @class SandwichController
 */
 class SandwichController 
 {
    /**
     * @function showCreateSandwichView
     * 
     * Display the view for creating a sandwich
     * 
     */
    showCreateSandwichView()
    {
      // Create the create sandwich view
      this.view = new CreateSandwichView();

      // Fetch the current sandwich
      this.sandwich = Ingredient.fetchSandwich();
      
      // Explicit the binding for adding an ingredient
      this.view.bindAddIngredient(this.handleAddIngredient)

      // Explicit the binding for adding the current sandwich into the cart
      this.view.bindAddtoCartSanwidch(this.handleAddToCart);

      // Explicit the binding for removing the last ingredient in the current sandwich
      this.view.bindRemoveLastIngredient(this.handleRemoveLastIngredient);
  
      // Display initial ingredients
      this.onIngredientListChanged(Ingredient.fetchAll());
    }
  
    /**
     * Display the ingredients list and the current sandwich
     * @param {Sandwich Array} ingredients 
     */
    onIngredientListChanged = ingredients => {
      // Ask the view to display the available ingredients list
      this.view.displayAvailableIngredients(ingredients);

      // Ask the view to display the current sandwich
      this.view.displayCurrentSandwich(this.sandwich);
    }
  
    /**
     * Decorate the current sandwich with an ingredient
     * @param {string} name Name of the ingredient
     * @param {double} price Price of the ingredient
     */
    handleAddIngredient = (name, price) => {
      // Decorate the current sandwich with a new ingredient
      this.sandwich = new IngredientDeco(this.sandwich, name, price);

      // Save the current sandwich in the local storage
      this.sandwich.save();

      // Update the view
      this.onIngredientListChanged(Ingredient.fetchAll());
    }

    /**
     * Remove the last decorator the sandwich
     */
    handleRemoveLastIngredient = () => {
      // If the current sandwich is decorated
      if(this.sandwich.sandwich != undefined)
      {
        // Remove the last decorator
        this.sandwich = this.sandwich.sandwich;
      }

      // Save the sandwich in the local storage
      this.sandwich.save();

      // Update the view
      this.view.displayCurrentSandwich(this.sandwich);
    }

    /**
     * Add the current sandwich to the cart (command)
     */
    handleAddToCart = () => {
      // Add the current sandwich to the cart
      this.sandwich.addToCart();

      // Remove the current sandwich
      this.sandwich.remove();

      // Create a blank new sandwich (only bread)
      this.sandwich = new Pain();

      // Update the view
      this.onIngredientListChanged(Ingredient.fetchAll());
    }
  }