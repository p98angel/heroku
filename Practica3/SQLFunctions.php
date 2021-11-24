<?php 
	include('../config/db.php');
	if(isset($_POST['leerBotones'])){
	if( $stmt = $conn->prepare("SELECT * FROM botones")){
		$stmt->execute();
		$stmt->store_result();
		$stmt->bind_result($v1,$v2,$v3,$v4);
		while($stmt->fetch()){
			$boton1 = $v1;
			$boton2 = $v2;
			$boton3 = $v3;
			$boton4 = $v4;
			}
		}
		$json = json_encode(array('connmsg' => $connmsg, 'boton1' => $boton1, 'boton2' => $boton2, 'boton3' => $boton3, 'boton4' => $boton4));
    	echo $json;
	}
	
	if(isset($_POST['escribirBotones'])){
		$valor1=$_POST['valor1'];
		$valor2=$_POST['valor2'];
		$valor3=$_POST['valor3'];
		$valor4=$_POST['valor4'];
		$sql = "UPDATE botones SET boton1=".$valor1.", boton2=".$valor2.", boton3=".$valor3.", boton4=".$valor4;
		if(mysqli_query($conn, $sql)){
			$btnmsg = "Push-Buttons actualizados:";
    	} 
    	else 
    	{
        	$btnmsg = "Error al actualizar boton:" . mysqli_error($conn);
    	}
    	$json = json_encode(array('connmsg' => $connmsg, 'btnmsg' => $btnmsg, 'boton1' => $valor1, 'boton2' => $valor2, 'boton3' => $valor3, 'boton4' => $valor4));
    	echo $json;
    } 
?>