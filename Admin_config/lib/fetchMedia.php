<?php
require_once "../../engine/connection.php";


    $query = "SELECT `CoverPicture` FROM `post`";
    

    $run_query = mysqli_query($conn, $query);

        $arr = [];
         while ($row = mysqli_fetch_assoc($run_query)) {
            array_push($arr,$row);
            } 
            echo json_encode($arr);
    
    


?>