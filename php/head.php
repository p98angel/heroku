<?php
    $request = $_SERVER['REQUEST_URI'];
    if($request == '/')
        include_once('./config/config.php');
    else
        include_once('../config/config.php');    
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="icon" type="image/png" href="<?php print(constant('URL')); ?>favicon/favicon-256x256.png" />
    <link rel="stylesheet" href="<?php print(constant('URL')); ?>css/style.css">
<?php
    if($_SERVER['REQUEST_URI'] == '/')
        print("\n\t".'<link rel="manifest" href="'.constant('URL').'manifest.json">'."\n");
?>
    <title> <?php print($titulo); ?></title>
</head>
<body >
    <div class="head-app">
        <section class="wavy">
            Proyecto Integrador
        </section>
        <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" style="position:absolute;">
            <path d="M0,50 C150,200 350,0 500,100 L500,00 L0,0 Z" style=" stroke: none; fill:#fe006d;"></path>
        </svg>
    </div>
      <div  id="app-container">
          
