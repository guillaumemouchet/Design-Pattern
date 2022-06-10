/**
 * @class IndexController
 */
 class IndexController 
 {
    /**
     * Display homepage view
     */
    index()
    {
        // Display the homepage view
        this.view = new HomepageView();
    }
    
    /**
     * Display about view
     */
    about()
    {
      // Display the about view
      this.view = new AboutView();
    }

    /**
     * Display unknown route view
     */
    showUnknownRoute()
    {
      // Display unknown route view
      this.view = new UnknownRouteView();
    }
  }