/**
 * @class AboutView
 */
 class AboutView 
 {
    constructor()
    {
      this.app = Helper.getElement('#root');
      this.title = Helper.createElement('h1', "mt-5 mb-3");
      this.title.textContent = 'About';
      this.text = Helper.createElement('p', "mb-3 text-justify");
      this.text.textContent = 'Ce site web a pour but de symboliser le choix que ferait un utilisateur dans un fast-food Subway, l\'utilisateur peut choisir différents ingrédients dans son sandwich et peut ajouter plusieurs sandwichs à son panier. Il peut ensuite passer commande, l\'utilisateur devra alors attendre un peu de temps avant de recevoir une confirmation, puis sera redirigé sur la page d\'accueil';
      this.createButton = Helper.createElement('button', 'btn btn-info text-light m-3');
      this.createButton.textContent = 'Start creating a sandwich';

      this.createButton.addEventListener('click', event => {
        event.preventDefault();

        // Redirection on create sandwich page
        Helper.redirect('create_sandwich');
      });
      
      this.app.append(this.title, this.text,this.createButton);
  }
}