
Model.initialize();

const queryString = window.location.search;

const params = new URLSearchParams(queryString);

let routeParam = params.get("route");

// If the route does not exist
if(routes[routeParam] == undefined)
{
    routeParam = "unknown";
}

const controller = routes[routeParam].controller;

const method = routes[routeParam].method;

const app = new controller();

app[method]();