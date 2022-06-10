// Récupération des potentiels paramètres de l'URL
const params = new URLSearchParams(window.location.search);

// Récupération du paramètre "route"
let routeParam = params.get("route");

// Si la route n'est pas définie dans le fichier "routes.js"
if(routes[routeParam] == undefined)
{
    // Modifier la route pour "inconnue"
    routeParam = "unknown";
}

// Récupérer le controller correspondant
const controller = routes[routeParam].controller;

// Récupérer la méthode correspondante
const method = routes[routeParam].method;

// Créer une instance du controller
const app = new controller();

// Appeler la méthode du controller
app[method]();