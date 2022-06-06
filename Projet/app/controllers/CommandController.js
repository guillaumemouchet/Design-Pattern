/**
 * @class CommandController
 */
 class CommandController 
 {
    showCartView()
    {
      this.view = new CartView();

      this.command = Command.fetch();
      
      // Explicit this binding
      this.view.bindPassCommand(this.handlePassCommand)

      this.view.displayCart(this.command);
    }

    handlePassCommand = () => {
      this.command.remove();
      Helper.redirect('index');
    }
  }