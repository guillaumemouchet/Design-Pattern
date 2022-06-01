<?php

interface ISandwich
{
    public function calculatePrice(): float;
    public function getNameAsList() : string;
}