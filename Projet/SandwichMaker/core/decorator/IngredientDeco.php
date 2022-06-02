<?php

class IngredientDeco extends Model implements ISandwich
{
    protected $sandwich;
    protected $name;
    protected $price;

    public function calculatePrice(): float
    {
        return $this->sandwich->calculatePrice() + $this->price;
    }

    public function getNameAsList() : string
    {
        return $this->sandwich->getNameAsList() . "<li>{$this->name}</li>";
    }
}