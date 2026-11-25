<?php
// 1. Enable error reporting temporarily for debugging
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(E_ALL);

// 2. CORS and Content Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// 3. Import PHPMailer classes
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// 4. Load PHPMailer files (using local libs)
require __DIR__ . '/libs/phpmailer/Exception.php';
require __DIR__ . '/libs/phpmailer/PHPMailer.php';
require __DIR__ . '/libs/phpmailer/SMTP.php';

// 5. Load local configuration
$config = require __DIR__ . '/smtp-config.php';

// 6. Process POST Request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get data from POST or JSON body
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if ($data) {
        $firstName = $data['firstName'] ?? ($data['name'] ?? 'Not provided');
        $lastName = $data['lastName'] ?? '';
        $email = $data['email'] ?? 'Not provided';
        $phone = $data['mobile'] ?? ($data['phone'] ?? 'Not provided');
        $company = $data['companyWebsite'] ?? ($data['company'] ?? 'Not provided');
        $service = $data['service'] ?? 'General Inquiry';
        $message = $data['message'] ?? 'No message content';
    } else {
        $firstName = $_POST['firstName'] ?? ($_POST['name'] ?? 'Not provided');
        $lastName = $_POST['lastName'] ?? '';
        $email = $_POST['email'] ?? 'Not provided';
        $phone = $_POST['mobile'] ?? ($_POST['phone'] ?? 'Not provided');
        $company = $_POST['companyWebsite'] ?? ($_POST['company'] ?? 'Not provided');
        $service = $_POST['service'] ?? 'General Inquiry';
        $message = $_POST['message'] ?? 'No message content';
    }

    $fullName = trim("$firstName $lastName");

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = $config['host'];
        $mail->SMTPAuth   = $config['auth'];
        $mail->Username   = $config['username'];
        $mail->Password   = $config['password'];
        
        if ($config['port'] == 587) {
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        } else {
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        }
        $mail->Port = $config['port'];

        // Recipients
        $mail->setFrom($config['from_email'], $config['from_name']);
        // Website leads go to the sales inbox (override with 'leads_email' in smtp-config.php if needed)
        $mail->addAddress($config['leads_email'] ?? 'aftabb@prospectoutreach.co.uk');
        $mail->addReplyTo($email, $fullName);

        // Content
        $mail->isHTML(true);
        $mail->Subject = "New Website Inquiry: " . $fullName;
        $mail->Body    = "
            <h3>New Inquiry Details</h3>
            <p><b>Name:</b> $fullName</p>
            <p><b>Email:</b> $email</p>
            <p><b>Phone:</b> $phone</p>
            <p><b>Company:</b> $company</p>
            <p><b>Message:</b><br>" . nl2br(htmlspecialchars($message)) . "</p>
        ";

        $mail->send();
        echo json_encode(["status" => "success", "message" => "Message sent successfully"]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Mailer Error: " . $mail->ErrorInfo]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method Not Allowed. Use POST."]);
}
?>