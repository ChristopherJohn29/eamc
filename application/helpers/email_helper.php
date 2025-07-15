<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Email Helper
 * 
 * Provides centralized email configuration and sending functionality
 */

if (!function_exists('get_email_config')) {
    /**
     * Get standardized email configuration
     * 
     * @return array Email configuration array
     */
    function get_email_config() {
        return array(
            'protocol' => 'smtp',
            'smtp_host' => 'c116783.sgvps.net',
            'smtp_port' => 587,
            'smtp_user' => 'iqms-eamc@infoadvance.com.ph',
            'smtp_pass' => '5dbbx&5357eo',
            'smtp_crypto' => 'tls',
            'smtp_timeout' => 30,
            'mailtype' => 'html',
            'charset' => 'utf-8',
            'newline' => "\r\n",
            'crlf' => "\r\n",
            'wordwrap' => TRUE,
            'validate' => TRUE
        );
    }
}

if (!function_exists('send_password_reset_email')) {
    /**
     * Send password reset email
     * 
     * @param object $ci CodeIgniter instance
     * @param string $email Recipient email
     * @param string $reset_link Password reset link
     * @return bool Success status
     */
    function send_password_reset_email($ci, $email, $reset_link) {
        $config = get_email_config();
        
        $ci->load->library('email', $config);
        $ci->email->clear();
        $ci->email->from('iqms-eamc@infoadvance.com.ph', 'IQMS EAMC');
        $ci->email->to($email);
        $ci->email->subject('Password Reset Request');
        
        $html_message = '
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Password Reset Request</title>
        </head>
        <body>
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #333;">Password Reset Request</h2>
                <p>Dear User,</p>
                <p>You have requested to reset your password. Please click the link below to reset your password:</p>
                <div style="text-align: center; margin: 30px 0;">
                    <a href="' . $reset_link . '" style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a>
                </div>
                <p>If the button above does not work, you can copy and paste the following link into your browser:</p>
                <p style="word-break: break-all; background-color: #f8f9fa; padding: 10px; border-radius: 3px;">' . $reset_link . '</p>
                <p><strong>Note:</strong> If you did not request this password reset, please ignore this email.</p>
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
                <p style="color: #666; font-size: 14px;">Best regards,<br>IQMS EAMC Team</p>
            </div>
        </body>
        </html>';
        
        $ci->email->message($html_message);
        
        return $ci->email->send();
    }
}

if (!function_exists('send_email_verification')) {
    /**
     * Send email verification email
     * 
     * @param object $ci CodeIgniter instance
     * @param string $email Recipient email
     * @param string $verification_link Email verification link
     * @return bool Success status
     */
    function send_email_verification($ci, $email, $verification_link) {
        $config = get_email_config();
        
        $ci->load->library('email', $config);
        $ci->email->clear();
        $ci->email->from('iqms-eamc@infoadvance.com.ph', 'IQMS EAMC');
        $ci->email->to($email);
        $ci->email->subject('Email Verification Required');
        
        $html_message = '
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Email Verification</title>
        </head>
        <body>
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #333;">Email Verification Required</h2>
                <p>Dear User,</p>
                <p>Thank you for registering with IQMS EAMC. To complete your registration, please verify your email address by clicking the link below:</p>
                <div style="text-align: center; margin: 30px 0;">
                    <a href="' . $verification_link . '" style="background-color: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">Verify Email Address</a>
                </div>
                <p>If the button above does not work, you can copy and paste the following link into your browser:</p>
                <p style="word-break: break-all; background-color: #f8f9fa; padding: 10px; border-radius: 3px;">' . $verification_link . '</p>
                <p><strong>Note:</strong> If you did not create this account, please ignore this email.</p>
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
                <p style="color: #666; font-size: 14px;">Best regards,<br>IQMS EAMC Team</p>
            </div>
        </body>
        </html>';
        
        $ci->email->message($html_message);
        
        return $ci->email->send();
    }
}

if (!function_exists('send_account_denied_email')) {
    /**
     * Send account registration denied email
     * 
     * @param object $ci CodeIgniter instance
     * @param string $email Recipient email
     * @param string $fullname User's full name
     * @param string $notes Additional notes
     * @return bool Success status
     */
    function send_account_denied_email($ci, $email, $fullname, $notes) {
        $config = get_email_config();
        
        $ci->load->library('email', $config);
        $ci->email->clear();
        $ci->email->from('iqms-eamc@infoadvance.com.ph', 'IQMS EAMC');
        $ci->email->to($email);
        $ci->email->subject('Account Registration Status');
        
        $html_message = '
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Account Registration Status</title>
        </head>
        <body>
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #333;">Account Registration Status</h2>
                <p>Dear ' . htmlspecialchars($fullname) . ',</p>
                <p>Thank you for your interest in registering for an account with IQMS EAMC. We appreciate your effort in completing the registration process.</p>
                <p>After careful review, we regret to inform you that your account registration has been denied.</p>
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <p style="margin: 0;"><strong>Additional Notes:</strong></p>
                    <p style="margin: 10px 0 0 0;">' . nl2br(htmlspecialchars($notes)) . '</p>
                </div>
                <p>Thank you for your understanding.</p>
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
                <p>If you need further assistance, please do not hesitate to contact us.</p>
                <p style="color: #666; font-size: 14px;">Kind regards,<br>IQMS OSQM</p>
            </div>
        </body>
        </html>';
        
        $ci->email->message($html_message);
        
        return $ci->email->send();
    }
}
