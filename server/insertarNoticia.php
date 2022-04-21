<?php
require("../librerias_php/setup_redbean.php");

$jsonInfo = json_decode(file_get_contents("php://input"));

$noticia = R::dispense("noticiaspublicar");

$noticia -> medio = $jsonInfo -> medio;
$noticia -> titulo = $jsonInfo -> titulo;
$noticia -> descripcion = $jsonInfo -> descripcion;
$noticia -> enlace = $jsonInfo -> enlace;
$noticia -> enlaceImg = $jsonInfo -> enlaceImg;
$noticia -> fechaPub = $jsonInfo -> fechaPub;

$id_noticia = R::store($noticia);

echo json_encode("ok");