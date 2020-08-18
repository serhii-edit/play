<?php

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];
$userMassage = $_POST['userMassage'];

// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'serhii.only.web@gmail.com';                     // SMTP username
    $mail->Password   = 'Google12345id#';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('serhii.only.web@gmail.com', "Serhii Yakymenko");
    $mail->addAddress('m.serhiiyakymenko@gmail.com');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'New Check in Site';
    $mail->Body    = "
    (PLAY-SITE) <br> 
    User name: ${userName}, <br> 
    User phone: ${userPhone}. <br> 
    User email: ${userEmail} <br> 
    User massage: ${userMassage} <br>";

    if ($mail->send()) {
        echo "(#9-if) Submited Succesful. Code: {$mail->ErrorInfo}";
    } else {
        echo "(#9-else) Massage: has (not) been send. Code: {$mail->ErrorInfo}";
    }

} catch (Exception $e) {
    echo "(#9-c) Massage not submited, has error. Code Error: {$mail->ErrorInfo}";
};