/**
 * @class CartView
 */
class CartView {
  constructor() {
    this.app = Helper.getElement('#root');

    this.title = Helper.createElement('h1', "mt-5 mb-3");
    this.text = Helper.createElement('p', "mt-5 mb-3");

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

    this.app.append(this.title, this.sandwichesList, this.totalPrice, this.passCommandButton, this.text);
  }

  displayCart(command) {
    let totalPrice = 0;

    command.sandwiches.forEach(sandwich => {
      let col = Helper.createElement('div', 'col');
      let card = Helper.createElement('div', 'card mt-2');
      let cardbody = Helper.createElement('div', 'card-body');
      let cardtitle = Helper.createElement('h5', 'card-title');
      let cardtext = Helper.createElement('ul', 'card-text');

      cardtext.innerHTML = sandwich.getNameAsList();

      cardtitle.innerHTML = "Sandwich price : <span class='float-end'>" + sandwich.calculatePrice().toFixed(2) + " CHF</span>";

      cardbody.append(cardtitle, cardtext);

      card.append(cardbody);

      col.append(card);

      this.sandwichesList.append(col);

      totalPrice += sandwich.calculatePrice();
    });
    this.totalPrice.textContent = "Command price : " + totalPrice.toFixed(2) + " CHF";
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  bindPassCommand(handler) {
    this.passCommandButton.addEventListener('click', event => {
      event.preventDefault();
      /*
      this.text.textContent = 'Votre commande est en cours de traitment, veuillez attendre avec patience votre repas.';
      sleep(3000);
      for (let i = 1; i < 6; i++) {
        this.text.textContent = 'Merci de votre patience, et bonne appetit, nous espérons vous revoir prochainement.\nVous serez redirigé sur la page d\'acceuill dans ' + i + ' seconds';
        sleep(3000);
      }
      */
      handler();
    });

  }
}