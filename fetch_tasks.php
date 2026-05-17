<?php
header("Content-Type: application/json");
require 'db.php';

$sql    = "SELECT id, title, description, completed FROM tasks ORDER BY id DESC";
$result = $conn->query($sql);

if (!$result) {
    echo json_encode(["status" => "error", "message" => $conn->error]);
    $conn->close();
    exit;
}

$tasks = [];
while ($row = $result->fetch_assoc()) {
    $tasks[] = $row;
}

echo json_encode($tasks);
$conn->close();
?>