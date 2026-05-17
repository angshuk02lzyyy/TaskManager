<<<<<<< HEAD
<?php
header("Content-Type: application/json");
require 'db.php';

$id = intval($_POST['id'] ?? 0);

if ($id <= 0) {
    echo json_encode(["status" => "error", "message" => "Invalid ID"]);
    exit;
}

$stmt = $conn->prepare("UPDATE tasks SET completed = NOT completed WHERE id = ?");
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    echo json_encode(["status" => "updated"]);
} else {
    echo json_encode(["status" => "error", "message" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
=======
<?php
header("Content-Type: application/json");
require 'db.php';

$id = intval($_POST['id'] ?? 0);

if ($id <= 0) {
    echo json_encode(["status" => "error", "message" => "Invalid ID"]);
    exit;
}

$stmt = $conn->prepare("UPDATE tasks SET completed = NOT completed WHERE id = ?");
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    echo json_encode(["status" => "updated"]);
} else {
    echo json_encode(["status" => "error", "message" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
>>>>>>> origin/main
