<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru','phpmailer/language/');
  $mail->IsHTML(true);

  //От кого письмо
  $mail->setFrom('rct2003@rambler.ru','Клиент Осаго');
  //Кому отправляется
  $mail->addAddress('rct2003@rambler.ru');
  // Тема письма
  $mail->Subject = 'Заказ ОСАГО! Новый клиент';

  // Тело письма
  $body = '<h1>Новый заказ!</h1>';

  if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя: </strong>'.$_POST["name"].'</p>';
  }
  if(trim(!empty($_POST['number']))){
    $body.='<p><strong>Телефон: </strong>'.$_POST["number"].'</p>';
  }

  $mail->Body = $body;

  // Отпрака
  if(!$mail->send()){
    $message = 'Ошибка';
  } else {
    $message = 'Данные отправлены!';
  }

  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);

?>
