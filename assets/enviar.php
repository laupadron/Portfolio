<?php 
	$nombre = $_POST['nameUser'];
	$email = $_POST['emailUser'];
	$asunto = 'commentUser';
	$mensaje = "Nombre: ".$nombre."<br> Email: $email<br> Mensaje:".$_POST['mensaje'];


	if(mail('laupadron1458@gmail.com', $asunto, $mensaje)){
		echo "Correo enviado";
	}
 ?>