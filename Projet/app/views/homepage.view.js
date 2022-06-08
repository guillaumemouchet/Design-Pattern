/**
 * @class HomepageView
 */
 class HomepageView 
 {
    constructor()
    {
      this.app = Helper.getElement('#root');
      this.title = Helper.createElement('h1', "mt-5 mb-3");
      this.title.textContent = 'Home';

      this.createButton = Helper.createElement('button', 'btn btn-info text-light m-3');
      this.createButton.textContent = 'Start creating a sandwich';

      this.createButton.addEventListener('click', event => {
        event.preventDefault();

        // Redirection on create sandwich page
        Helper.redirect('create_sandwich');
      });
      
      this.app.append(this.title,this.createButton);
  }
}