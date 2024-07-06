<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'shreyakatakam123@gmail.com';
    $subject = 'Message from Contact Form';
    $message_body = "Name: $name\nEmail: $email\n\n$message";

    // Headers
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $message_body, $headers)) {
        echo 'Email sent successfully!';
    } else {
        echo 'Failed to send email. Please try again later.';
    }
}
?>
