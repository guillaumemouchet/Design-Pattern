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
    }
}