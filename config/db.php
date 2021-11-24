<?php
    include_once('config.php');
    $host = constant('HOST');
    $dataname = constant('DB');
    $user = constant('USER');
    $password = constant('PASSWORD');
	try{
        $conexion = new PDO("mysql:host=$host;dbname=$dataname;", $user, $password);
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $connmsg = 'Conexion correcta';
    } catch (PDOException $e) {
        $connmsg = $e->getMessage();
    }
?>