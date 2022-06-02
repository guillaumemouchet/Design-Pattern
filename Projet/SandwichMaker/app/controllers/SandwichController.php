<?php

class SandwichController
{
    public function showCreateView()
    {
        $sandwich = new Pain();

        $ingredients = Ingredient::fetchAll();

        return Helper::view("create_sandwich",
            [
                "sandwich" => $sandwich,
                "ingredients" => $ingredients
            ]);
    }
    public function AddIngredient()
    {
        
    }
}