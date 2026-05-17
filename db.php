<<<<<<< HEAD
<?php
$host = "localhost";
$user = "root";       // Change to your MySQL username
$pass = "";           // Change to your MySQL password
$db   = "task_manager";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]));
}
?>
=======
<?php
$host = "localhost";
$user = "root";       // Change to your MySQL username
$pass = "";           // Change to your MySQL password
$db   = "task_manager";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]));
}
?>
>>>>>>> origin/main
