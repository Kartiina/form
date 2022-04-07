<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "PHPMailer/src/PHPMailer.php"
require "PHPMailer/src/Exception.php"

$mail = new PHPMailer(true);

$mail->CharSet = "UTF-8";
$name = $_POST["name"];
$phone = $_POST["phone"];
$email = $_POST["email"];
$message = $_POST["message"];

$body = $name . ' ' . $phone . ' ' . $email . ' ' . $message;
$theme = "[Message from client]";

$mail->addAddress("katya1gre@gmail.com");
$mail->Subject = $theme;
$mail->Body = $body;
$mail->send();