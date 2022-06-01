<?php

class Ingredient extends IngredientDeco
{
    public function __construct(ISandwich $sandwich, string $name, float $price)
    {
        $this->sandwich = $sandwich;
        $this->name = $name;
        $this->price = $price;
    }

    /**
     * __set
     *
     * @param  mixed $property Is the property name
     * @param  mixed $value is the value to be set
     * @return void
     */
    public function __set($property, $value)
    {
        $this->$property= $value;
    }
    
    /**
     * __get
     *
     * @param  mixed $property The property name
     * @return mixed The property value
     */
    public function __get($property)
    {
        return $this->$property;
    }
    
    /**
     * fetchAll
     *
     * @return Ingredient array that contains all the available ingredients
     */
    public static function fetchAll()
    {
        $allIngredients = Model::readAll("ingredient", "Ingredient");

        return $allIngredients; // TODO : Upgrade
    }

    /**
     * fetchByName
     *
     * @param  mixed $name The name of the ingredient
     * @return Ingredient
     */
    public static function fetchByName($name)
    {
        return Model::readByCriteria("ingredient", "Ingredient", "name", $name);
    }

    /**
     * save The like in the database
     *
     * @return void
     */
    public function save()
    {
        $ingredient_values = [
            "name" => $this->name,
            "price" => $this->price
        ];

        Model::create("ingredient", $ingredient_values);
    }

    /**
     * remove the CommentLike from the database
     *
     * @return void
     */
    public function remove()
    {
        $ingredient_values = [
            "name" => $this->name,
            "price" => $this->price
        ];

        Model::deleteByCriteria('ingredient', $ingredient_values);
    }
}