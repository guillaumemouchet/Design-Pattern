<?php

/**
 *
 */
class Helper
{
    public static $install_prefix;

    public static function display($data)
    {
        echo '<pre>';
        var_dump($data);
        echo '</pre>';
    }

    // dd = display & die
	public static function dd($data)
    {
		echo '<pre>';
		var_dump($data);
		echo '</pre>';

		die();
	}

    public static function view($name, $data = [])
    {
        extract($data); // Importe les variables dans la table des symboles
                        // voir: http://php.net/manual/fr/function.extract.
                        // voir aussi la méthode compact()
        return require "app/views/{$name}.view.php";
    }

    public static function redirect($path)
    {
        header("Location: /{$path}");
        exit();
    }

    public static function createUrl($route)
    {
        if(!isset(Helper::$install_prefix))
        {
            Helper::$install_prefix = App::get('config')['install_prefix'];
        }

        return Helper::$install_prefix . "/" . $route;
    }

    public static function getAjaxResponse($message)
    {
        return '{"message" : "'. $message . '"}';
    }
}
