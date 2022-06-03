/**
 * @class HomepageView
 */
 class HomepageView 
 {
    constructor()
    {
      this.app = Helper.getElement('#root');

      this.createButton = Helper.createElement('button');
      this.createButton.textContent = 'Start creating a sandwich';

      this.createButton.addEventListener('click', event => {
        event.preventDefault();

        // Redirection on create sandwich page
        Helper.redirect('create_sandwich');
      });
      
      this.app.append(this.createButton);
  }
}