<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "BazdarGames@gmail.com";
    $subject = "پیام جدید از فرم تماس با ما";
    $body = "نام: $name\nایمیل: $email\nپیام: \n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "پیام شما با موفقیت ارسال شد!";
    } else {
        echo "مشکلی در ارسال پیام پیش آمد.";
    }
}
?>
