/**
 * @class AboutView
 */
 class AboutView 
 {
    constructor()
    {
      this.app = Helper.getElement('#root');

      this.createButton = Helper.createElement('button', 'btn btn-info text-light m-3');
      this.createButton.textContent = 'Start creating a sandwich';

      this.createButton.addEventListener('click', event => {
        event.preventDefault();

        // Redirection on create sandwich page
        Helper.redirect('create_sandwich');
      });
      
      this.app.append(this.createButton);
  }
}