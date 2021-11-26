<?php
    $titulo = 'Error 404';
    include_once('php/head.php');
?>
    <div class="container row">
        <div class="col-4"></div>
        <div class="col-6 justity-content-center">
            <div class="col-auto text-center">
                <h1 class="display-6 text-danger">Error 404</h1>
                <img src="<?php print(constant('URL').'img/404.jpg');?>" alt="">
                <h2>Error al conectarse</h2>
      
            </div>
        </div>
    </div>
<?php    include_once('php/nav.php');
?>