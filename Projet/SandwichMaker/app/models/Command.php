<?php

class Command extends Model
{
    private $id;
    private $sandwichs_id; // Array of sandwichs ids
 
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
     * @return Array of topics
     */
    public static function fetchAll()
    {
        $allTopics = Model::readAll("command", "Command");

        return $allTopics; // TODO : Upgrade
    }

    public static function fetchAllOrderBy($column)
    {
        return Model::readAllOrderBy("command", "Command", $column);
    }
    
    /**
     * fetchId
     *
     * @param  mixed $id The ID of the command
     * @return Command The command that is matching the ID
     */
    public static function fetchId($id)
    {
        return Model::readById("command", "Command", $id);
    }
    
    /**
     * save The command in the database
     *
     * @return void
     */
    public function save()
    {
        $command_values = [
            "name" => $this->name,
            "sandwichs_id" => $this->sandwichs_id,
        ];

        Model::create("command", $command_values);
    }
    
    /**
     * getAsBootstrap
     *
     * @return string That contains the HTML code for displaying the command
     */
    public function getAsBootstrap()
    {
        $topicHtml = "";
            
        return $topicHtml;
    }
      
    
    /**
     * modify the command in the database
     *
     * @return void
     */
    public function modify()
    {
        $params = [
            'name' => $this->name,
            'sandwichs_id' => $this->sandwichs_id,
        ];

        Model::update("command", $this->id, $params);
        // Helper::redirect(Helper::createUrl("topic_show") . "?id=" . $this->id);
    }
    
    /**
     * remove the topic from the database
     *
     * @return void
     */
    public function remove()
    {
        Model::delete('command', $this->id);
    }
}