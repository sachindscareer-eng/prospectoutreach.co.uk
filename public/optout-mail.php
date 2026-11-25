<?php
// optout-mail.php - Handle "Do Not Share or Sell My Information" requests
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
if (!is_file(__DIR__ . '/smtp-config.php')) {
    http_response_code(503);
    echo json_encode(["status" => "error", "message" => "Our mail service is temporarily unavailable. Please email sales@prospectoutreach.co.uk or call +44 7915 378769."]);
    exit;
}
$config = require __DIR__ . '/smtp-config.php';

// 6. Process POST Request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get data from POST or JSON body
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if ($data) {
        $firstName = $data['firstName'] ?? 'Not provided';
        $lastName = $data['lastName'] ?? 'Not provided';
        $email = $data['email'] ?? 'Not provided';
        $phone = $data['phone'] ?? 'Not provided';
        $company = $data['company'] ?? 'Not provided';
        $jobTitle = $data['jobTitle'] ?? 'Not provided';
        $country = $data['country'] ?? 'Not provided';
    } else {
        $firstName = $_POST['firstName'] ?? 'Not provided';
        $lastName = $_POST['lastName'] ?? 'Not provided';
        $email = $_POST['email'] ?? 'Not provided';
        $phone = $_POST['phone'] ?? 'Not provided';
        $company = $_POST['company'] ?? 'Not provided';
        $jobTitle = $_POST['jobTitle'] ?? 'Not provided';
        $country = $_POST['country'] ?? 'Not provided';
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
        $mail->setFrom($config['from_email'], "Opt-Out Support - ProspectOutreach");
        $mail->addAddress($config['to_email']); 
        $mail->addReplyTo($email, $fullName);

        // Content
        $mail->isHTML(true);
        $mail->Subject = "Do Not Share or Sell Request: " . $fullName;
        
        $email_content = "
            <div style='font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;'>
                <h2 style='color: #d946ef; border-bottom: 2px solid #fce7f3; padding-bottom: 10px;'>Do Not Share or Sell My Personal Information</h2>
                <p style='color: #666; font-size: 14px;'>A new opt-out request was submitted from the website footer.</p>
                
                <table style='width: 100%; border-collapse: collapse; margin-top: 20px;'>
                    <tr>
                        <td style='padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #9ca3af; font-size: 13px; width: 30%;'>First Name</td>
                        <td style='padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600;'>$firstName</td>
                    </tr>
                    <tr>
                        <td style='padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #9ca3af; font-size: 13px;'>Last Name</td>
                        <td style='padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600;'>$lastName</td>
                    </tr>
                    <tr>
                        <td style='padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #9ca3af; font-size: 13px;'>Email</td>
                        <td style='padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600;'><a href='mailto:$email' style='color: #d946ef; text-decoration: none;'>$email</a></td>
                    </tr>
                    <tr>
                        <td style='padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #9ca3af; font-size: 13px;'>Phone Number</td>
                        <td style='padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600;'>$phone</td>
                    </tr>
                    <tr>
                        <td style='padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #9ca3af; font-size: 13px;'>Company Name</td>
                        <td style='padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600;'>$company</td>
                    </tr>
                    <tr>
                        <td style='padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #9ca3af; font-size: 13px;'>Job Title</td>
                        <td style='padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600;'>$jobTitle</td>
                    </tr>
                    <tr>
                        <td style='padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #9ca3af; font-size: 13px;'>Country</td>
                        <td style='padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600;'>$country</td>
                    </tr>
                </table>
                
                <p style='margin-top: 30px; padding: 15px; background-color: #fce7f3; border-radius: 8px; color: #701a75; font-size: 13px;'>
                    <strong>Important:</strong> This user has requested that their personal information not be shared or sold. Please update your records accordingly.
                </p>
            </div>
        ";
        
        $mail->Body    = $email_content;
        $mail->AltBody = "Do Not Share or Sell Request from $fullName\nEmail: $email\nPhone: $phone\nCompany: $company\nJob Title: $jobTitle\nCountry: $country";

        $mail->send();
        echo json_encode(["status" => "success", "message" => "Your request has been submitted successfully."]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Mailer Error: " . $mail->ErrorInfo]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method Not Allowed. Use POST."]);
}
?>
