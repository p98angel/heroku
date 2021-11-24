<?php 
	include('../config/db.php');
	if(isset($_GET['leerLeds'])){
		try {
			$consulta = $conexion->prepare("SELECT * FROM leds");
			$consulta->execute();
			while($fila = $consulta->fetch()){
				$led1 = $fila['led1'];
				$led2 = $fila['led2'];
				$led3 = $fila['led3'];
				$led4 = $fila['led4'];
			}
		} catch (PDOException $e) {
			$connmsg = $e->getMessage();
		}
		$json = json_encode(array('connmsg' => $connmsg, 'led1' => $led1, 'led2' => $led2, 'led3' => $led3, 'led4' => $led4));
		print($json);
	}
	if(isset($_GET['escribirLeds'])){
		$led=$_GET['led'];
		$valor=$_GET['valor'];
		try {
			$consulta = $conexion->prepare("UPDATE leds SET led".$led."=".$valor);
			$consulta->execute();
			$ledsmsg = "Led actualizado:";
		} catch(PDOException $e){
			$ledsmsg = "Error al actualizar led:".$e->getMessage();
		}
    	$json = json_encode(array('connmsg' => $connmsg, 'ledsmsg' => $ledsmsg, 'led' => $led, 'valor' => $valor));
    	echo $json;
    } 
?>
