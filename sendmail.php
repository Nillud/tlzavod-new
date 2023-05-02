<?php
function sendMail($body)
{
  include($_SERVER['DOCUMENT_ROOT'] . '/addons/PHPMailer/PHPMailerAutoload.php');

  $MAIL_MAILER = 'smtp';
  $MAIL_HOST = 'smtp.mail.ru';
  $MAIL_PORT = '465';
  $MAIL_USERNAME = 'agadullin.linar@mail.ru';
  $MAIL_PASSWORD = '8rm2KMgWbHw2XJwbv38K';
  $MAIL_ENCRYPTION = 'ssl';
  $MAIL_FROM_ADDRESS = 'agadullin.linar@mail.ru';
  $MAIL_FROM_NAME = 'Tlzavod';

  $mail = new PHPMailer;
  $mail->CharSet = 'UTF-8';

  // Настройки SMTP
  $mail->isSMTP();
  $mail->SMTPAuth = true;
  $mail->SMTPDebug = 0;

  $mail->Host = $MAIL_HOST;
  $mail->SMTPSecure = $MAIL_ENCRYPTION;
  $mail->Port = $MAIL_PORT;
  $mail->Username = $MAIL_USERNAME;
  $mail->Password = $MAIL_PASSWORD;

  $subject = 'Обратная связь Tlzavod';

  // От кого
  $mail->setFrom($MAIL_FROM_ADDRESS, $MAIL_FROM_NAME);

  // Кому
  $mail->addAddress('agadullin.linar@mail.ru');

  // Тема письма
  $mail->Subject = $subject;

  // Тело письма
  $mail->msgHTML($body);

  //$mail->send();
  return $mail->send();
}

$body = "<h1>Обратная связь Tlzavod (Заказать звонок)</h1>";
$body1 = "<h1>Обратная связь Tlzavod (Сообщение)</h1>";

$mail_status = false;

if (trim(!empty($_POST['name']))) {
  $body .= "<p><strong>Имя: </strong>" . $_POST['name'] . "</p>" . "<p><strong>Телефон: </strong>" . $_POST['phone'] . "</p>" . "<p><strong>E-mail: </strong>" . $_POST['email'] . "</p>";
  sendMail($body);
} else if (trim(!empty($_POST['name1']))) {
  $body1 .= "<p><strong>Имя: </strong>" . $_POST['name1'] . "</p>" . "<p><strong>Телефон: </strong>" . $_POST['phone1'] . "</p>" . "<p><strong>E-mail: </strong>" . $_POST['email1'] . "</p>" . "<p><strong>Сообщение: </strong>" . $_POST['message1'] . "</p>";
  sendMail($body1);
}
?>