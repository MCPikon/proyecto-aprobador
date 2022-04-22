<?php
require("../librerias_php/setup_redbean.php");

$jsonInfo = json_decode(file_get_contents("php://input"));

$noticia = R::dispense("noticiaspublicar");

$noticia -> medio = $jsonInfo -> medio;
$noticia -> titulo = $jsonInfo -> titulo;
$noticia -> descripcion = $jsonInfo -> descripcion;
$noticia -> enlace = $jsonInfo -> enlace;
$noticia -> enlace_img = $jsonInfo -> enlace_img;
$noticia -> fecha_pub = $jsonInfo -> fecha_pub;

$id_noticia = R::store($noticia);

echo json_encode("ok");