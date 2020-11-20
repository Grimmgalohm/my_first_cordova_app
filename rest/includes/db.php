<?php

class DB{

	private $hostname;
	private $db;
	private $user;
	private $password;
	private $charset;


	public function __construct(){

		$this->hostname = '';
		$this->db = '';
		$this->user = '';
		$this->password = '';
		$this->charset = 'utf8mb4';

	}

	public function connect(){

		try{

			$connection = "mysql:host=".$this->hostname.";dbname=".$this->db.";charset=".$this->charset.";";

			$options = [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES=>false];

			$pdo = new PDO($connection, $this->user, $this->password, $options);

			return $pdo;

		}catch(PDOException $e){
			
			print_r($e->getMessage());
			
		}

	}

}

?>
