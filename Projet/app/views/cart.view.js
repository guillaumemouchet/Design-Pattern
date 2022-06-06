/**
 * @class CartView
 */
 class CartView 
 {
    constructor()
    {
      this.app = Helper.getElement('#root');

      this.title = Helper.createElement('h1', "mt-5 mb-3");
      this.title.textContent = 'Your cart';

      let buttonClasses = 'btn btn-info text-light m-2';

      this.passCommandButton = Helper.createElement('button', buttonClasses + " mt-2");
      this.passCommandButton.textContent = 'Pass command';

      /*
      <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
        */

      this.sandwichesList = Helper.createElement('div');

      this.totalPrice = Helper.createElement('h3', "mt-3");
      
      this.app.append(this.title, this.sandwichesList, this.totalPrice, this.passCommandButton);
  }

  displayCart(command)
  {
      let totalPrice = 0;
      
      command.sandwiches.forEach(sandwich => {
            let card = Helper.createElement('div', 'card mt-2');
            let cardbody = Helper.createElement('div', 'card-body');
            let cardtitle = Helper.createElement('h5', 'card-title');
            let cardtext = Helper.createElement('ul', 'card-text');

            cardtext.innerHTML = sandwich.getNameAsList();

            cardtitle.innerHTML = "Sandwich price : <span class='float-end'>" + sandwich.calculatePrice().toFixed(2) + " CHF</span>";

            cardbody.append(cardtitle, cardtext);

            card.append(cardbody);

          this.sandwichesList.append(card);

          totalPrice += sandwich.calculatePrice();
      });
      this.totalPrice.textContent = "Command price : " + totalPrice.toFixed(2) + " CHF";
  }

  bindPassCommand(handler)
  {
    this.passCommandButton.addEventListener('click', event => {
      event.preventDefault();

      handler();
    });
  }
}