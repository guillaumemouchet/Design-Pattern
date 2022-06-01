<?php

$router->define([
  '' => 'IndexController',
  'index' => 'IndexController',
  'create_sandwich' => 'SandwichController@showCreateView'
]);
