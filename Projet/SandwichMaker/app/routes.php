<?php

$router->define([
  '' => 'IndexController',
  'index' => 'IndexController',
  'create_sandwich' => 'SandwichController@showCreateView',
  'add_ingredient' => 'SandwichController@AddIngredient'
]);
