/**
 * @class View
 *
 * Visual representation of the model.
 */
 class CreateSandwichView {
    constructor() {
      this.app = Helper.getElement('#root');

      this.form = Helper.createElement('form');

      let buttonClasses = 'btn btn-info text-light m-2';

      this.submitButton = Helper.createElement('button', buttonClasses);
      this.submitButton.textContent = 'Add ingredient';

      this.totalPriceLabel = Helper.createElement('span');

      this.addToCartButton = Helper.createElement('button', buttonClasses);
      this.addToCartButton.textContent = 'Add to cart';

      this.availableIngredientsList = Helper.createElement('select', "form-select");
      this.form.append(this.availableIngredientsList, this.submitButton);

      this.title = Helper.createElement('h1', 'mt-5 mb-3');
      this.title.textContent = 'Create a sandwich';

      this.sandwichIngredientsList = Helper.createElement('ul', "list-group");
      
      this.app.append(this.title, this.form, this.sandwichIngredientsList, this.totalPriceLabel, this.addToCartButton);
    }

    displayCurrentSandwich(sandwich)
    {
      // Delete all nodes
      while (this.sandwichIngredientsList.firstChild)
      {
        this.sandwichIngredientsList.removeChild(this.sandwichIngredientsList.firstChild);
      }

      this.sandwichIngredientsList.innerHTML = (sandwich.getNameAsList());

      this.totalPriceLabel.textContent = "Total : " + sandwich.calculatePrice().toFixed(2) + " CHF";
    }
  
    displayAvailableIngredients(ingredients) {
      // Delete all nodes
      while (this.availableIngredientsList.firstChild) 
      {
        this.availableIngredientsList.removeChild(this.availableIngredientsList.firstChild);
      }

      // Counter used for the id of the options
      let count = 0;

      ingredients.forEach(ingredient => {
        // Create the option
        const option = Helper.createElement('option');

        option.value = count++;
        option.name = ingredient.name;
        option.price = ingredient.price;

        option.textContent = ingredient.name + " : " + ingredient.price + " CHF";

        // Add the option
        this.availableIngredientsList.append(option);
      });
    }
  
    bindAddIngredient(handler)
    {
      this.form.addEventListener('submit', event => {
        event.preventDefault();
  
        let selectedIngredient = this.availableIngredientsList[this.availableIngredientsList.value];

        let ingredientName = selectedIngredient.name;
        let ingredientPrice = selectedIngredient.price;

        if(ingredientName != undefined && ingredientPrice != undefined)
        {
          handler(ingredientName, ingredientPrice);
        }
      });
    }

    bindAddtoCartSanwidch(handler)
    {
      this.addToCartButton.addEventListener('click', event => {
        event.preventDefault();

        handler();

        updateNotifications();
      });
    }
  }