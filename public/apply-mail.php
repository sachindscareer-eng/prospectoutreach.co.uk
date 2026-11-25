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
    $firstName = $_POST['firstName'] ?? ($_POST['name'] ?? 'Not provided');
    $lastName = $_POST['lastName'] ?? '';
    $email = $_POST['email'] ?? 'Not provided';
    $phone = $_POST['mobile'] ?? ($_POST['phone'] ?? 'Not provided');
    
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
        $mail->setFrom($config['from_email'], "Careers - ProspectOutreach");
        $mail->addAddress($config['to_email']); 
        $mail->addReplyTo($email, $fullName);

        // Attachment Handling
        if (isset($_FILES['resume']) && $_FILES['resume']['error'] == UPLOAD_ERR_OK) {
            $uploadFile = $_FILES['resume']['tmp_name'];
            $uploadName = $_FILES['resume']['name'];
            
            // Basic size check (5MB)
            if ($_FILES['resume']['size'] > 5 * 1024 * 1024) {
                http_response_code(400);
                echo json_encode(["status" => "error", "message" => "File is too large (max 5MB)"]);
                exit;
            }
            
            $mail->addAttachment($uploadFile, $uploadName);
        } else {
            http_response_code(400);
            echo json_encode(["status" => "error", "message" => "Resume file is required"]);
            exit;
        }

        // Content
        $mail->isHTML(true);
        $mail->Subject = "New Career Application: $fullName";
        $mail->Body = "
            <h3>New Career Application</h3>
            <p><b>Name:</b> $fullName</p>
            <p><b>Email:</b> $email</p>
            <p><b>Phone:</b> $phone</p>
            <p>A new application has been submitted through the careers page. The resume is attached.</p>
        ";

        $mail->send();
        echo json_encode(["status" => "success", "message" => "Application submitted successfully"]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Mailer Error: " . $mail->ErrorInfo]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method Not Allowed. Use POST."]);
}
?>
