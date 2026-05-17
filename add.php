<?php
header("Content-Type: application/json");
require 'db.php';

$title       = trim($_POST['title'] ?? '');
$description = trim($_POST['description'] ?? '');

if (empty($title)) {
    echo json_encode(["status" => "error", "message" => "Title is required"]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO tasks (title, description) VALUES (?, ?)");
$stmt->bind_param("ss", $title, $description);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "id" => $conn->insert_id]);
} else {
    echo json_encode(["status" => "error", "message" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>