<?php
include_once 'includes/crud.php';

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
switch($_SERVER["REQUEST_METHOD"]){

	case 'POST':

		$_POST = json_decode(file_get_contents('php://input'), true);

		$conexion = new DATA();

		if($conexion->registroDatosApi($_POST) == "success"){

			$result = ["HTTP_RESPONSE_CODE"=>201, "status"=>"success", "body"=>$_POST];

			echo json_encode($result);

		}else{

			$result = ["HTTP_RESPONSE_CODE"=>500, "status"=>"Internal Server Error", "body"=>$_POST];

			echo json_encode($result);

		}



	break;

	case 'GET':
		echo 'Is GET';
	break;
}

?>
