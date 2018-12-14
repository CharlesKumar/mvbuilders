<?

require_once __DIR__.'/vendor/autoload.php';

// Create the Transport
$transport = new Swift_SmtpTransport('smtp.gmail.com', 587, 'tls');

$transport->setUsername('charlesdummy12@gmail.com')
    ->setPassword('regenerate');


// Create the Mailer using your created Transport
$mailer = new Swift_Mailer($transport);

// Create a message

// $subject = 'Subject of the email';
$subject  = filter_var($_POST["name"] . " mailed ", FILTER_SANITIZE_STRING);
// $body    = 'Your Awesome Email Content Here';
$body    = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

$tomail  = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL, FILTER_VALIDATE_EMAIL);

$message = new Swift_Message($subject);

$message->setFrom([ $tomail => 'Charles Kumar' ])
    ->setTo([ 'charlesdummy12@gmail.com' => 'Charles' ])
    ->setBody($body);

// Send the message
$result = $mailer->send($message);

echo $result;
