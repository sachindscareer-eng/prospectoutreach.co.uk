<?php
/**
 * test-diag.php - SMTP Diagnostic Script
 * Use this to debug the connection to Gmail SMTP.
 */

// Show all errors for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../libs/phpmailer/Exception.php';
require __DIR__ . '/../libs/phpmailer/PHPMailer.php';
require __DIR__ . '/../libs/phpmailer/SMTP.php';

$config = require __DIR__ . '/smtp-config.php';

echo "<h2>SMTP Diagnostic Test</h2>";

// 1. Check if files exist
echo "<h3>1. Checking Library Files:</h3>";
echo "Exception.php: " . (file_exists(__DIR__ . '/../libs/phpmailer/Exception.php') ? '✅ Found' : '❌ NOT FOUND') . "<br>";
echo "PHPMailer.php: " . (file_exists(__DIR__ . '/../libs/phpmailer/PHPMailer.php') ? '✅ Found' : '❌ NOT FOUND') . "<br>";
echo "SMTP.php: " . (file_exists(__DIR__ . '/../libs/phpmailer/SMTP.php') ? '✅ Found' : '❌ NOT FOUND') . "<br>";
echo "smtp-config.php: " . (file_exists(__DIR__ . '/smtp-config.php') ? '✅ Found' : '❌ NOT FOUND') . "<br>";

// 2. Test Connection
echo "<h3>2. Testing SMTP Connection:</h3>";
$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = SMTP::DEBUG_SERVER; // Enable verbose debug output
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
    
    $mail->Port       = $config['port'];

    echo "<pre>";
    $mail->smtpConnect();
    echo "\n✅ Successfully connected to SMTP server!";
    echo "</pre>";

} catch (Exception $e) {
    echo "<h4>❌ Connection Failed</h4>";
    echo "<strong>Error:</strong> " . $e->getMessage() . "<br>";
    echo "<p>If you see 'Connection timed out', your server might be blocking outgoing SMTP ports (465/587). Check with your hosting provider.</p>";
}
?>
