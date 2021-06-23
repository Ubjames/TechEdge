<?php
session_start();
require_once "../engine/connection.php";

if(!isset($_SESSION['UID'])){
    header("location: ../login.php");
}else{
    include "lib/head.php";
    include "lib/header.php";
    include "lib/nav.php";
} 
?>

