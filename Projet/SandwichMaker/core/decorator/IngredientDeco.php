<?php

class IngredientDeco extends Model implements ISandwich
{
    protected $sandwich;
    protected $name;
    protected $price;

    public function __construct(ISandwich $sandwich, string $name, float $price)
    {
        $this->sandwich = $sandwich;
        $this->name = $name;
        $this->price = $price;
    }

    public function calculatePrice(): float
    {
        return $this->sandwich->calculatePrice() + $this->price;
    }

    public function getNameAsList() : string
    {
        return $this->sandwich->getNameAsList() . "<li>{$this->name}</li>";
    }
}