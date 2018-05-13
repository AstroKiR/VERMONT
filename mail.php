<?php
    // error_reporting(E_ALL);
    // ini_set('display_errors', 1);

    if ($_SERVER['REQUEST_METHOD'] === "POST") {
        $message = "";
        if(isset($_POST["name"]) and $_POST["name"] != "") {
            $message .= "Имя: " . $_POST["name"] . "; ";
        }
        if(isset($_POST["email"]) and $_POST["email"] != "") {
            $message .= "Email: " . $_POST["email"] . "; ";
        }
        if(isset($_POST["phone"]) and $_POST["phone"] != "") {
            $message .= "Телефон: " . $_POST["phone"] . "; ";
        }
        if(isset($_POST["message"]) and $_POST["message"] != "") {
            $message .= "Сообщение: " . $_POST["message"] . ".";
        }
        $date = date("Y/m/d H:i:s");
        $to = "info@moh.by";
        $subject = "Сообщение из формы обратной связи moh.by от {$date}";
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
        mail($to, $subject, htmlspecialchars($message, ENT_QUOTES), $headers);
    }
    header("Location: http://moh.by/");
    exit;
?>
