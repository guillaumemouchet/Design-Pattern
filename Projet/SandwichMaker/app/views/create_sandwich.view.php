<?php
    require('partials/header.php');
?>

<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <main class="px-3">
        <h1>Create sandwich</h1>
        <ul>
            <?= $sandwich->getNameAsList(); ?>
        </ul>
        <p>Prix : <?=  $sandwich->calculatePrice(); ?> CHF</p>
    </main>
        
</div>

<?php require('partials/footer.php'); ?>
