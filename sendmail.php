<?php
  $subject = 'Обратная связь tlzavod';

  $to = "forphp@inbox.ru";
  $from = trim($_POST['email']);

  $fio = htmlspecialchars($_POST['fio']);
  // $fio = urldecode($fio);
  // $fio = trim($fio);

  $phone = htmlspecialchars($_POST['phone']);
  $phone = urldecode($phone);
  $phone = trim($phone);

  $message = "Имя отправителя: $fio\n" .
             "Телефон: $phone";

  $headers = "From: $from" . "\r\n" .
  "Reply-To: $from" . "\r\n" .
  "X-Mailer: PHP/" . phpversion();

  if (mail($to, $subject, $message, $headers)) {
    echo 'Mail sended';
  } else {
    echo 'Mail not sended';
  }
?>