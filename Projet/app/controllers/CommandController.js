/**
 * @class CommandController
 */
 class CommandController 
 {
    showCartView()
    {
      this.view = new CartView();

      this.sandwichesInCart = Ingredient.fetchSandwich();
      
      // Explicit this binding
      this.view.bindPassCommand(this.handlePassCommand)

      this.view.displayCart(Command.fetch());
    }

    handlePassCommand = () => {
      // TO DO
    }
  }