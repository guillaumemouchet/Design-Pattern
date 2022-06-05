/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
 class IndexController 
 {
    index()
    {
        this.view = new HomepageView();
    }

    about()
    {
      this.view = new AboutView();
    }
  }