<?

require_once __DIR__.'/vendor/autoload.php';

// Create the Transport
$transport = new Swift_SmtpTransport('smtp.gmail.com', 587, 'tls');

$transport->setUsername('srgm.mvbuilders@gmail.com')
    ->setPassword('mvbuilders@123');


// Create the Mailer using your created Transport
$mailer = new Swift_Mailer($transport);

// Create a message

// $subject = 'Subject of the email';

// $body    = 'Your Awesome Email Content Here';
$body    = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

$tomail  = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL, FILTER_VALIDATE_EMAIL);

$subject  = filter_var($_POST["username"] . " mailed using ". $tomail, FILTER_SANITIZE_STRING);

$message = new Swift_Message($subject);

$reply = new Swift_Message('Thank you for contacting us');

$message->setFrom([ $tomail => $_POST["username"] ])
    // ->setTo([ 'srgm.mvbuilders@gmail.com' => 'MV Builders', 'murlidhar28@gmail.com' => 'K. Muralidharan' ])
    ->setTo([ 'srgm.mvbuilders@gmail.com' => 'MV Builders', 'murlidhar28@gmail.com' => 'K. Muralidharan' ])
    ->setBody($body);

$reply->setFrom([ 'mvbuilders@gmail.com' => 'MV Builders' ])
    ->setTo([ $tomail => $_POST["username"] ])
    ->setBody('We recieved your message! we will get back to you shortly!');

// Send the message
$result = $mailer->send($message);

if(!$result) {  // is it asynchronous
  file_put_contents('logs/email_log.txt', 'email sending failed', FILE_APPEND);
}

if(!$mailer->send($reply)) {  // is it asynchronous
  file_put_contents('logs/email_log.txt', 'email sending failed', FILE_APPEND);
}
