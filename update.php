<?php
require 'db.php';

$id = $_POST['id'];

// Toggle completed status
$sql = "UPDATE tasks SET completed = NOT completed WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute();

echo json_encode(["status" => "updated"]);
$conn->close();
?>
