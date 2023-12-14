<?php
// Conexión a la base de datos (ajusta según tus credenciales)
$servername = "LEIRA";
$username = "Lecona";
$password = "Holiloli";
$dbname = "morenoLecona";

$conn = new mysqli($LEIRA, $Lecona, $Holiloli, $morenoLecona);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recuperar datos del formulario
$name = $_POST['name'];
$emailid = $_POST['emailid'];
$msgContent = $_POST['msgContent'];

// Insertar datos en la base de datos
$sql = "INSERT INTO tu_tabla (name, emailid, msgContent) VALUES ('$nombre', '$emailid','msgContent')";

?>
