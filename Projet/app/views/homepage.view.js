/**
 * @class HomepageView
 */
 class HomepageView 
 {
    constructor()
    {
      this.app = Helper.getElement('#root');

      this.informationTitle = Helper.createElement('h1', "text-center mt-5 mb-3");
      this.informationTitle.innerHTML = "Welcome to <i>SandwichMaker</i> !"

      this.informationText = Helper.createElement('h5', "text-center mb-5");
      this.informationText.textContent = "Here you can create, manage and command your own personalized sandwiches."

      this.createButton = Helper.createElement('button', 'btn btn-info text-light m-3');
      this.createButton.textContent = 'Start creating a sandwich';

      this.createButton.addEventListener('click', event => {
        event.preventDefault();

        // Redirection on create sandwich page
        Helper.redirect('create_sandwich');
      });
      
      this.app.append(this.informationTitle, this.informationText, this.createButton);
  }
}