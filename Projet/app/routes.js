const routes = {
    null : 
    {
        "controller" : IndexController,
        "method" : 'index'
    },
    "index" : 
    {
        "controller" : IndexController,
        "method" : 'index'
    },
    "about" :
    {
        "controller" : IndexController,
        "method" : 'about'
    },
    "create_sandwich" :
    {
        "controller" : SandwichController,
        "method" : 'showCreateSandwichView'
    },
    "cart" :
    {
        "controller" : CommandController,
        "method" : "showCartView"
    },
    "unknown" :
    {
        "controller" : IndexController,
        "method" : "showUnknownRoute"
    }
}