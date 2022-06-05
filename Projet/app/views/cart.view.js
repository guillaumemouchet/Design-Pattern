/**
 * @class CartView
 */
 class CartView 
 {
    constructor()
    {
      this.app = Helper.getElement('#root');

      this.title = Helper.createElement('h1');
      this.title.textContent = 'Your cart';

      let buttonClasses = 'btn btn-info text-light m-2';

      this.passCommandButton = Helper.createElement('button', buttonClasses);
      this.passCommandButton.textContent = 'Add to cart';
      
      this.app.append(this.title, this.passCommandButton);
  }

  displayCart(sandwiches)
  {
      console.log(sandwiches);
  }

  bindPassCommand(handler)
  {
    this.passCommandButton.addEventListener('click', event => {
      event.preventDefault();

      handler();
    });
  }
}