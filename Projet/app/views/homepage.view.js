/**
 * @class HomepageView
 */
 class HomepageView 
 {
    constructor()
    {
      // Get the root element
      this.app = Helper.getElement('#root');

      // Create HTML elements
      this.informationTitle = Helper.createElement('h1', "text-center mt-5 mb-3");
      this.informationTitle.innerHTML = "Welcome to <i>SandwichMaker</i> !"

      this.informationText = Helper.createElement('h5', "text-center mb-5");
      this.informationText.textContent = "Here you can create, manage and command your own personalized sandwiches."

      this.createButton = Helper.createElement('button', 'btn btn-info text-light m-3');
      this.createButton.textContent = 'Start creating a sandwich';

      // Add a click event on the create sandwich button
      this.createButton.addEventListener('click', event => {
        event.preventDefault();

        // Redirection on create sandwich page
        Helper.redirect('create_sandwich');
      });
      
      // Add these elements to the root
      this.app.append(this.informationTitle, this.informationText, this.createButton);
  }
}