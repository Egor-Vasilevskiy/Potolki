<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$token = "5334168740:AAEywKqRr8yN5O-bqMK72s99_ComYWixvro";
$chat_id = "-756972647";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram && $sendToTelegram2) {
  header('Location: thanks.html');
} else {
  echo "Error";
}
?>