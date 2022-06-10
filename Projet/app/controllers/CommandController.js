/**
 * @class CommandController
 */
 class CommandController 
 {
    /**
     * Fetch the cart and show cart view
     */
    showCartView()
    {
      // Create the view
      this.view = new CartView();

      // Fetch the current command
      this.command = Command.fetch();

      // Remove "new sandwiches" notification
      Model.remove("new_sandwich_in_cart_notification");
      
      // Explicit the binding for passing a command
      this.view.bindPassCommand(this.handlePassCommand);

      // Ask the view to display the command (cart)
      this.view.displayCart(this.command);

      // Explicit the binding for removing a sandwich from the command
      this.view.bindRemoveSandwich(this.handleRemoveSandwich);
    }

    /**
     * Pass the command
     */
    handlePassCommand = () => {
      this.command.remove();
    }

    /**
     * Remove a sandwich from the command
     * @param {Sandwich} sandwich Sandwich to remove from the command
     */
    handleRemoveSandwich = (sandwich) => {
      // Remove the sandwich from the command
      this.command.removeSandwich(sandwich);

      // Save the command in the local storage
      this.command.save();

      // Update te view
      this.view.displayCart(this.command);

      // Update bindings
      this.view.bindRemoveSandwich(this.handleRemoveSandwich);
    }
  }