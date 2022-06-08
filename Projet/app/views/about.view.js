/**
 * @class AboutView
 */
 class AboutView 
 {
    constructor()
    {
      this.app = Helper.getElement('#root');
      this.title = Helper.createElement('h1', "mt-5 mb-3");
      this.title.textContent = 'Home';
      this.text = Helper.createElement('p', "mt-5 mb-3");
      this.text.textContent = 'Ce site web a pour but de symboliser le choix que ferait un utilisateur dans un fast-food Subway, l\'utilisateur peut choisir différents ingrédients dans son sandwich et peut ajouter plusieurs sandwich a son panier, une fois la commande pasée, l\'utilisateur attend un peu avant de recevoir une confirmation comme quoi ces sandwich sont prêt.';
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