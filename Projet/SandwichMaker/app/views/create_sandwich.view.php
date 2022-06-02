<?php
    require('partials/header.php');

?>

<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <main class="px-3">
        <h1>Create sandwich</h1>
        <div id="ingredients">
            <ul id="ingredientsList">
                <?= $sandwich->getNameAsList(); ?>
            </ul>

            <select id="ingredientsSelect">
                <?php
                    foreach ($ingredients as $ingredient) {
                        echo $ingredient->getAsSelectOption();
                    }
                ?>
            </select>
            <button class="btn btn-info text-light" id="btnAddIngredient" onclick="addIngredient">Add</button>
        </div>
    </main>     
</div>

<script>
    function addIngredient()
    {
        ingredientName = document.getElementById('ingredientsSelect');

        // Send the selected ingredient with Ajax
        var headers = {
            "Content-Type": "application/json",                                                                                            
            "Access-Control-Origin": "*"
        };

        var data = {
            "ingredient_name": ingredientName
        };

        let response = await fetch("/" + install_prefix + "/add_ingredient", {
            method: "POST",
            credentials: "same-origin",
            headers: headers,
            body: JSON.stringify(data)
        });
        // In the controller, add the ingredient as a decorator the the base sandwich
        // Return the new sandwich in the response

        // Here, display the ingredient list

        ingredientsList = document.getElementById('ingredientsList');

    }
</script>

<?php require('partials/footer.php'); ?>
