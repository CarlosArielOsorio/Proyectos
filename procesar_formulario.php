<?php
// Conexión a la base de datos (ajusta según tus credenciales)
$servername = "LEIRA";
$username = "LEIRA/osori";
$password = "";
$dbname = "morenoLecona";

$conn = new mysqli($LEIRA, $LEIRA/osori, $, $morenoLecona);

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

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
