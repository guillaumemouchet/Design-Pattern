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
      this.view.bindPassCommand(this.handlePassCommand)

      this.view.displayCart(this.command);
    }

    handlePassCommand = () => {
      this.command.remove();
    }
  }