<?php

use Coderjerk\BirdElephant\BirdElephant;
use Coderjerk\BirdElephant\Compose\Tweet;
require('..\vendor\autoload.php');
require("../librerias_php/setup_redbean.php");

$noticia = json_decode(file_get_contents("php://input"));

$titulo = $noticia -> titulo;
$link = $noticia -> enlace;

// your credentials, should be passed in via $_ENV or similar, don't hardcode.
$credentials = array(
    'bearer_token' => 'AAAAAAAAAAAAAAAAAAAAAAqqcAEAAAAAJvZyrPl8PiaqEl8QQJThz9%2BrN2s%3DDYuTz4QLR7zecZ8WPvHryopLVyenG3B1nY9xOerQug5aL92h6d',
    'consumer_key' => 'bmQ2RM3rH4mQDrtSYPDXawsLx',
    'consumer_secret' => 'Hljs8oAymdY6EhLikAi9BfMbpEc61ygoviZVGSkVWwQB52uA1O',
    'token_identifier' => '841033654709174272-c2MXTu5BDVOddAgyaPZzGOWHTwHBbWO',
    'token_secret' => 'MjZOCLeqvlP9jpnI5Q8ndRnhMTWZPntVkX1SPRVkjUSIa',
);

//instantiate the object
$twitter = new BirdElephant($credentials);

$tweet = (new Tweet) -> text($titulo . " " . $link);

$twitter->tweets()->tweet($tweet);

echo json_encode("ok");