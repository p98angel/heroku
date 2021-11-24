<?php 
	include('../config/db.php');
	if(isset($_GET['web'])){
		if(isset($_GET['fecha']))
			$query = "SELECT * FROM sensores WHERE(Fecha='".$_GET['fecha']."') ORDER BY id DESC LIMIT 30 ";
		else if(isset($_GET['fechainicial']))
			$query = "SELECT * FROM sensores WHERE(Fecha>='".$_GET['fechainicial']."' AND Fecha<='".$_GET['fechafinal']."') ORDER BY id DESC LIMIT 30 ";
		else if(isset($_GET['horainicial']))
			$query = "SELECT * FROM sensores WHERE(Hora>='".$_GET['horainicial']."' AND Hora<='".$_GET['horafinal']."') ORDER BY id DESC LIMIT 30 ";
		else if(isset($_GET['nombresensor']))
			$query = "SELECT * FROM sensores WHERE(Sensor='".$_GET['nombresensor']."') ORDER BY id DESC LIMIT 30 ";
		else if(isset($_GET['valorsensor']))
			$query = "SELECT * FROM sensores WHERE(Valor='".$_GET['valorsensor']."') ORDER BY id DESC LIMIT 30 ";
		else
			$query = "SELECT * FROM sensores ORDER BY id DESC LIMIT 30 ";
		try{
			$consulta = $conexion->prepare($query);
			$consulta->execute();
			$values = array();
			while($fila = $consulta->fetch()){
				$values['id']['Fecha'] = $fila['Fecha'];
				$values['id']['Hora'] = $fila['Hora'];
				$values['id']['Sensor'] = $fila['Sensor'];
				$values['id']['Valor'] = $fila['Valor'];
			}	
			print(var_dump($values));
			echo json_encode(array('conexion' => $connmsg, 'error' => $error, 'values' => $values));
		} catch (PDOException $e) {
			$connmsg = $e->getMessage();
		}
	}
	if(isset($_GET['esp32']))
	{
		try{
			$query = "INSERT INTO sensores (Fecha, Hora, Sensor, Valor) VALUES (CURRENT_DATE(), CURRENT_TIME(), '".$_GET['esp32_sensor']."', '".$_GET['esp32_lectura']."');";
			$consulta = $conexion->prepare($query);
			$consulta->execute();
			echo json_encode(array('conexion' => $connmsg, 'error' => $error, 'message' => "Valores de sensor insertados correctamente: ".$_GET['esp32_sensor'].":".$_GET['esp32_lectura']));
		} catch (PDOException $e) {
			$connmsg = $e->getMessage();
		}
	}
?>