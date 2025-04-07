<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));


    if (empty($name) || empty($email) || empty($message)) {
        echo "<h1>Error</h1>";
        echo "<p>All fields are required. Please go back and fill out the form.</p>";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<h1>Error</h1>";
        echo "<p>Invalid email format. Please go back and enter a valid email.</p>";
        exit;
    }


    echo "<h1>Thank You!</h1>";
    echo "<p>Thank you, <strong>$name</strong>, for reaching out to us. We have received your message:</p>";
    echo "<blockquote>$message</blockquote>";
    echo "<p>We will get back to you at <strong>$email</strong> as soon as possible.</p>";
} else {
    echo "<h1>Error</h1>";
    echo "<p>Invalid request method.</p>";
}
?>