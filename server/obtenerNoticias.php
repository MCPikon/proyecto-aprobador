<?php
require("../librerias_php/setup_redbean.php");

$noticias = R::getAll("select * from noticias order by id desc");

echo json_encode($noticias);