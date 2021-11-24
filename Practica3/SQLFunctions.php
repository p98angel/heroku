<?php 
	include('../config/db.php');
	print('s'); 	 	
	if(isset($_GET['leerBotones'])){
		try{
			$consulta = $conexion->prepare("SELECT * FROM botones");
			$consulta->execute();
			while($fila = $consulta->fetch()){
				$boton1 = $fila['boton1'];
				$boton2 = $fila['boton2'];
				$boton3 = $fila['boton3'];
				$boton4 = $fila['boton4'];
			}
		} catch (PDOException $e) {
			$connmsg = $e->getMessage();
		}
		$json = json_encode(array('connmsg' => $connmsg, 'boton1' => $boton1, 'boton2' => $boton2, 'boton3' => $boton3, 'boton4' => $boton4));
		print($json);
	}
	if(isset($_POST['escribirBotones'])){
		$boton=$_GET['boton'];
		$valor=$_GET['valor'];
		try {
			$consulta = $conexion->prepare("UPDATE botones SET boton".$boton."=".$valor);
			$consulta->execute();
			$botonsmsg = "boton actualizado:";
		} catch(PDOException $e){
			$botonsmsg = "Error al actualizar boton:".$e->getMessage();
		}
    	$json = json_encode(array('connmsg' => $connmsg, 'botonsmsg' => $botonsmsg, 'boton' => $boton, 'valor' => $valor));
    	echo $json;
    } 
?>