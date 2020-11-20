<?php
include_once 'db.php';

class DATA extends DB{

	public function registroDatosApi($datosJson){

		$stmt = DB::connect()->prepare("INSERT INTO locations.location (latitud, longitud) VALUES (:latitud, :longitud);");

		$stmt->bindParam(":latitud", $datosJson["latitud"], PDO::PARAM_STR);
		$stmt->bindParam(":longitud", $datosJson["longitud"], PDO::PARAM_STR);

		if($stmt->execute()){

			return "success";

		}else{

			return "error";
			
		}

	}

}

?>