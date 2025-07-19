<?php
require 'db.php';

$title = $_POST['title'];
$description = $_POST['description'];

$stmt = $conn->prepare("INSERT INTO tasks (title, description) VALUES (?, ?)");
$stmt->bind_param("ss", $title, $description);
$stmt->execute();

echo json_encode(["status" => "success"]);
$conn->close();
?>
