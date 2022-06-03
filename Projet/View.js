/**
 * @class View
 *
 * Visual representation of the model.
 */
 class View {
    constructor() {
      this.app = this.getElement('#root');

      this.form = this.createElement('form');

      this.submitButton = this.createElement('button');
      this.submitButton.textContent = 'Add';

      this.totalPriceLabel = this.createElement('span');

      this.commandButton = this.createElement('button');
      this.commandButton.textContent = 'Command';

      this.availableIngredientsList = this.createElement('select');
      this.form.append(this.availableIngredientsList, this.submitButton);

      this.title = this.createElement('h1');
      this.title.textContent = 'Create a sandwich';

      this.sandwichIngredientsList = this.createElement('ul');
      
      this.app.append(this.title, this.form, this.sandwichIngredientsList, this.totalPriceLabel, this.commandButton);
    }
  
    createElement(tag, className) {
      const element = document.createElement(tag);
  
      if (className) element.classList.add(className);
  
      return element;
    }
  
    getElement(selector) {
      const element = document.querySelector(selector);
  
      return element;
    }

    displayCurrentSandwich(sandwich)
    {
      // Delete all nodes
      while (this.sandwichIngredientsList.firstChild) 
      {
        this.sandwichIngredientsList.removeChild(this.sandwichIngredientsList.firstChild);
      }

      const p = this.createElement('p');
      p.innerHTML = sandwich.getNameAsList();
      this.sandwichIngredientsList.append(p);

      this.totalPriceLabel.textContent = "Total : " + sandwich.calculatePrice() + " CHF";
    }
  
    displayIngredients(ingredients) {
      // Delete all nodes
      while (this.availableIngredientsList.firstChild) 
      {
        this.availableIngredientsList.removeChild(this.availableIngredientsList.firstChild);
      }

      // Counter used for the id of the options
      let count = 0;

      ingredients.forEach(ingredient => {
        // Create the option
        const option = this.createElement('option');

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

    bindCommandSanwidch(handler)
    {
      this.commandButton.addEventListener('click', event => {
        event.preventDefault();

        handler();
      });
    }
  }