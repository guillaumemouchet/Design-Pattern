<?php

class Pain implements ISandwich
{
    public function calculatePrice() : float
    {
        return 2.5;
    }

    public function getNameAsList(): string
    {
        return "<li>Pain</li>";
    }
}