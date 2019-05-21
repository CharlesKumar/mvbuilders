<template lang="html">
  <div id="contact-page">
    <div class="h-300 pinot-noir__gradient"></div>
    <h1 class="c">This is an about page</h1>
    <p class="c">
      <span
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. A suscipit
        soluta, quis ducimus eum magni nostrum repellendus nobis, deserunt,
        aperiam accusantium inventore vero aliquam mollitia assumenda rem
        cumque, quo ea.</span
      ><span
        >Voluptas commodi repellat totam, suscipit ad voluptatibus tempora vero,
        asperiores atque cum. Quaerat similique est laudantium, praesentium
        aperiam. Consequuntur quos consequatur, quam nihil minima architecto
        enim cum iste tempora ea?</span
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "aboutbkp"
};
</script>

<style lang="scss"></style>

<!--

<?

require_once __DIR__.'/vendor/autoload.php';

// Create the Transport
$transport = new Swift_SmtpTransport('smtp.gmail.com', 587, 'tls');

$transport->setUsername('srgm.mvbuilders@gmail.com')
    ->setPassword('mvbte');


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

 -->
