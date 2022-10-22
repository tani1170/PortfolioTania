<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$email_subject = "New Form submission";
$email_body = "You have received a new message from $name($email):\n\n$message";
$to      = "tania.jorgensen@outlook.com";
$headers = array(
  'From' => 'contact@tjorgn.dk',
  'Reply-To' => $email
);


mail($to, $email_subject, $email_body, $headers);

header('Location: contact.html')
?>