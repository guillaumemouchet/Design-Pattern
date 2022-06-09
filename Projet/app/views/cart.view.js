/**
 * @class CartView
 */
class CartView {
  constructor()
  {
    this.app = Helper.getElement('#root');

    this.title = Helper.createElement('h1', "mt-5 mb-3");
    this.text = Helper.createElement('h5', "mt-5 mb-3 p-3 bg-success d-none text-light");

    this.title.textContent = 'Your cart';

    this.noResultText = Helper.createElement("h5", "d-none");
    this.noResultText.textContent = "No sandwich in your cart yet."

    let buttonClasses = 'btn btn-info text-light m-2';

    this.passCommandButton = Helper.createElement('button', buttonClasses + " mt-2");
    this.passCommandButton.textContent = 'Pass command';

    this.sandwichesList = Helper.createElement('div');

    this.totalPrice = Helper.createElement('h3', "mt-3");

    this.app.append(this.title, this.noResultText, this.sandwichesList, this.totalPrice, this.text, this.passCommandButton);
  }

  displayCart(command)
  {
    let totalPrice = 0;

    if(command.sandwiches.length == 0) 
    {
      console.log("test"),
      this.passCommandButton.classList.add("d-none");
      this.noResultText.classList.remove("d-none");
    }

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

  bindPassCommand(handler)
  {
    this.passCommandButton.addEventListener('click', async event => {
      event.preventDefault();

      handler();

      this.sandwichesList.classList.add("d-none");
      this.totalPrice.classList.add("d-none");
      this.passCommandButton.classList.add("d-none");

      this.text.classList.remove("d-none");
      
      this.text.textContent = 'Votre commande est en cours de traitement, veuillez attendre avec patience votre repas.';

      await Helper.sleep(5000);

      for (let i = 5; i >= 0; i--) {
        this.text.textContent = 'Merci de votre patience, et bonne appetit !\nNous espérons vous revoir prochainement.\nVous serez redirigé sur la page d\'accueil dans ' + i + ' secondes';
        await Helper.sleep(1000);
      }

      Helper.redirect("index");
    });

  }
}