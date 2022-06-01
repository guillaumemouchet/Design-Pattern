<?php
    require('partials/header.php')
?>

<div class="cover-container d-flex w-100 h-100 p-3 text-center mx-auto flex-column">
    <main class="px-3">
        <h1>Welcome to SandwichMaker !!!</h1>
        <a href="/<?= Helper::createUrl("create_sandwich") ?>">
            <button class="btn btn-info text-light">Create a sandwich</button>
        </a>
    </main>
        
</div>

<?php require('partials/footer.php') ?>
