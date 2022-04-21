<?php
require("../librerias_php/setup_redbean.php");

$noticias = R::getAll("select * from noticiaspublicar");

echo json_encode($noticias);