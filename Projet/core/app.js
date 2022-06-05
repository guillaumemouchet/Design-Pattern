
Model.initialize();

const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const routeParam = params.get("route");

const controller = routes[routeParam].controller;

const method = routes[routeParam].method;

const app = new controller();

app[method]();