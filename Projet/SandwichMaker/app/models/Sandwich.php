<?php

class Sandwich extends Model
{
    private $id;

    /**
     * __set
     *
     * @param  mixed $property Is the property name
     * @param  mixed $value is the value to be set
     * @return void
     */
    public function __set($property, $value)
    {
        $this->$property = $value;
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

    public function getAsBootstrap($owner_id)
    {
        $comment_html = "";


        return $comment_html;
    }

    /**
     * fetchBySandwichId
     *
     * @param  mixed $sandwich_id The ID of the topic
     * @return Comment array that contains all the comments of the topic
     */
    public static function fetchBySandwichId($sandwich_id)
    {
        return Model::readByCriteria("sandwich", "Sandwich", "id", $sandwich_id);
    }

    /**
     * save The sandwich in the database
     *
     * @return void
     */
    public function save()
    {
        $sandwich_values = [
            
        ];

        Model::create("sandwich", $sandwich_values);
    } 

    /**
     * remove the sandwich from the database
     *
     * @return void
     */
    public function remove()
    {
        Model::delete('sandwich', $this->id);
    }

    /**
     * modify the sandwich in the database
     *
     * @return void
     */
    public function modify()
    {
        $sandwich_values = [

        ];

        Model::update("sandwich", $this->id, $sandwich_values);
    }
}