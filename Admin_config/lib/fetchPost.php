<?php
session_start();
require_once "../../engine/connection.php";

if(isset($_SESSION['UID'])){
    $UID = $_SESSION['UID'];
    $query = "SELECT
    p.title,
    p.createdAt,
    p.content,
    CONCAT(u.firstName, ' ', u.lastName) AS author
FROM
    post p
INNER JOIN USER u ON
    p.authorId = u.userId";

    $run_query = mysqli_query($conn, $query);

    if(mysqli_fetch_assoc($run_query)){
        // echo json_encode(mysqli_fetch_assoc($run_query));

        $arr = [];
         while ($row = mysqli_fetch_assoc($run_query)) {
            array_push($arr,$row);
            } 
            echo json_encode($arr);
    }
    
    }


?>