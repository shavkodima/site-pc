<?php
$method = $_SERVER['REQUEST_METHOD'];
$c = true;

$project_name = trim($_POST["phone"]);
$admin_email  = 'test@test.com'; //указать свою почту



  if ( $project_name != "") {
    $message .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e2dddd 1px solid;'>$project_name</td>
    </tr>
    ";
  }


$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
    return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

if (mail($admin_email, adopt($form_subject), $message, $headers )) {
    http_response_code(200);
    echo "Данные отправлены.";
} else {
    http_response_code(400);
    echo "Ошибка. Данные не отправлены.";
};