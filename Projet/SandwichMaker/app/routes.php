<?php

$router->define([
  '' => 'IndexController',
  'index' => 'IndexController',
  'test' => 'CommandController@test'
]);
