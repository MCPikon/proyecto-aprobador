<?php
require("../librerias_php/setup_redbean.php");

$id = $_GET["id"];

R::exec("DELETE FROM noticias WHERE id = ?", [$id]);

echo json_encode("ok");