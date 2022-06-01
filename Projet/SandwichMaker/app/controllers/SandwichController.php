<?php

class SandwichController
{
    public function showCreateView()
    {
        $sandwich = new Pain();
        $sandwichWithCheese = new Ingredient($sandwich, "Cheese", 0.7);
        $sandwichWithCheeseAndBacon = new Ingredient($sandwichWithCheese, "Bacon", 1.3);
        return Helper::view("create_sandwich",
            [
                "sandwich" => $sandwichWithCheeseAndBacon
            ]);
    }
    public function addSandwich()
    {
        
    }

    public function updateSandwich()
    {

    }

    public function removeSandwich()
    {
 
    }
}