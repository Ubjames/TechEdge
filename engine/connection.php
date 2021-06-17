<?php
define('HOST','localhost:3308');
define('USER','root');
define('PASSWORD','');
define('DATABASE','techedge_db');

$conn = mysqli_connect(HOST, USER, PASSWORD, DATABASE) or die('connection to the database could not be established');
?>