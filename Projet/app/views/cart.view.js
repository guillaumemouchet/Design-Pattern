/**
 * @class CartView
 */
class CartView {
  constructor()
  {
    // Create elements
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

    this.buttonsLists = [];


    // Add these elements to the root
    this.app.append(this.title, this.noResultText, this.sandwichesList, this.totalPrice, this.text, this.passCommandButton);
  }

  /**
   * Display the content of the command
   * @param {Command} command 
   */
  displayCart(command)
  {
    let totalPrice = 0;

    // Remove old elements
    while (this.sandwichesList.firstChild) 
    {
      this.sandwichesList.removeChild(this.sandwichesList.firstChild);
    }

    // If the command if empty
    if(command.sandwiches.length == 0) 
    {
      this.passCommandButton.classList.add("d-none");
      this.noResultText.classList.remove("d-none");
    }

    // Foreach sandwich in the command
    command.sandwiches.forEach(sandwich => {
      // Create elements
      let col = Helper.createElement('div', 'col');
      let card = Helper.createElement('div', 'card mt-2');
      let cardbody = Helper.createElement('div', 'card-body');
      let cardtitle = Helper.createElement('h5', 'card-title');
      let cardtext = Helper.createElement('ul', 'card-text');
      var removeButton = Helper.createElement('button', 'btn btn-danger text-light');
      removeButton.textContent = "Delete";
      removeButton.sandwich = sandwich;

      // Add a remove button
      this.buttonsLists.push(removeButton);

      // Add sandwich ingredients
      cardtext.innerHTML = sandwich.getNameAsList();
      cardtext.append(removeButton);

      cardtitle.innerHTML = "Sandwich price : <span class='float-end'>" + sandwich.calculatePrice().toFixed(2) + " CHF</span>";

      cardbody.append(cardtitle, cardtext);

      card.append(cardbody);

      col.append(card);

      // Add the elements
      this.sandwichesList.append(col);

      totalPrice += sandwich.calculatePrice();
    });
    this.totalPrice.textContent = "Command price : " + totalPrice.toFixed(2) + " CHF";
  }

  /**
   * Bind the remove button to a handler
   * @param {function} handler 
   */
  bindRemoveSandwich(handler)
  {
    // Foreach button
    this.buttonsLists.forEach(button => {
      // Add a click event
      button.addEventListener('click', event => {
        event.preventDefault();

        // Call the handler
        handler(button.sandwich);
      });
    });
    
    // Reset the buttons list
    this.buttonsLists = [];
  }

  /**
   * Binding the pass command button the a handler
   * @param {function} handler 
   */
  bindPassCommand(handler)
  {
    // Add a click event
    this.passCommandButton.addEventListener('click', async event => {
      event.preventDefault();

      // Call the handler
      handler();

      // Remove content
      this.sandwichesList.classList.add("d-none");
      this.totalPrice.classList.add("d-none");
      this.passCommandButton.classList.add("d-none");

      this.text.classList.remove("d-none");
      
      this.text.textContent = 'Votre commande est en cours de traitement, veuillez attendre avec patience votre repas.';

      // Wait 5 seconds
      await Helper.sleep(5000);

      // Display a redirection counter
      for (let i = 5; i >= 0; i--) {
        this.text.textContent = 'Merci de votre patience, et bonne appetit !\nNous espérons vous revoir prochainement.\nVous serez redirigé sur la page d\'accueil dans ' + i + ' secondes';
        await Helper.sleep(1000);
      }

      // Redirect to the main page
      Helper.redirect("index");
    });

  }
}