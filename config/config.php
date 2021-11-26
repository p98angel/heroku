<?php
    if($_SERVER['HTTP_HOST'] == 'localhost'){
        // localhost
        define('URL', 'http://localhost/');
        define('HOST', '127.0.0.1');
        define('USER', 'angel');
        define('PASSWORD', "3965643534");
        define('DB', 'Proyecto_Integrador');
    }else{
        // 000webhost
        define('URL', 'https://proyectointegradorseptimo.000webhostapp.com/');
        define('HOST', 'localhost');
        define('USER', 'id18010710_dumbo');
        define('PASSWORD', "sesDm<DlmC&%0l_P");
        define('DB', 'id18010710_septimo');    
    }
?>
