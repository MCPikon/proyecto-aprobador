<?php
require("../librerias_php/setup_redbean.php");

$id = $_GET["id"];

$noticias = R::getRow("SELECT * FROM noticiaspublicar WHERE id = ?", [$id]);

echo json_encode($noticias);