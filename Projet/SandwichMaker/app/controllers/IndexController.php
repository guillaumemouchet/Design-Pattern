<?php

class IndexController
{    
    /**
     * index
     *
     * @return view Index
     */
    public function index()
    {
        return Helper::view("index");
    }
}