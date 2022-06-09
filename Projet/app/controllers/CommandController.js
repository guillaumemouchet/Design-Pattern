/**
 * @class CommandController
 */
 class CommandController 
 {
    showCartView()
    {
      this.view = new CartView();

      this.command = Command.fetch();

      // Remove "new sandwiches" notification
      Model.remove("new_sandwich_in_cart_notification");
      
      // Explicit this binding
      this.view.bindPassCommand(this.handlePassCommand);
      this.view.displayCart(this.command);

      this.view.bindRemoveSandwich(this.handleRemoveSandwich);
    }

    handlePassCommand = () => {
      this.command.remove();
    }

    handleRemoveSandwich = (sandwich) => {
      this.command.removeSandwich(sandwich);
      this.command.save();
      this.view.displayCart(this.command);
      this.view.bindRemoveSandwich(this.handleRemoveSandwich);
    }
  }