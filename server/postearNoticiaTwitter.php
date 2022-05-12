<?php

use Coderjerk\BirdElephant\BirdElephant;
use Coderjerk\BirdElephant\Compose\Tweet;
require('..\vendor\autoload.php');

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

$tweet = (new Tweet) -> text("Tweeteando desde Angular jeje");

$twitter->tweets()->tweet($tweet);

echo json_encode("ok");