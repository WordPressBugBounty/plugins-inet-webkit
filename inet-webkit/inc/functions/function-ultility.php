<?php

/**
 * @param $text
 * @return string
 */
function inet_wk_format_text($text)
{
    $expr = '/(?<=\s|^)[a-z]/i';
    preg_match_all($expr, $text, $matches);
    $result = implode('', $matches[0]);
    return strtoupper($result);
}

/**
 * @param $date
 * @return string
 */
function inet_wk_format_date($date)
{
    $format_date = strtotime($date);
    $date_exp = explode(" ", $format_date);
    $newDate = date("d-m-Y", $date_exp[0]);
    return $newDate;
}

// Register AJAX actions for both logged-in and non-logged-in users
add_action('wp_ajax_inet_wk_send_mail', 'inet_wk_send_mail');
add_action('wp_ajax_nopriv_inet_wk_send_mail', 'inet_wk_send_mail');

function inet_wk_send_mail() {
    // Verify the nonce for security
    if (!check_ajax_referer('inet_wk_send_mail_nonce', '_wpnonce', false)) {
        wp_send_json_error(array(
            'message' => 'Invalid nonce. Unauthorized request.' // Error message for invalid nonce
        ));
    }

    // Check if the user has the "manage_options" capability (usually for admins)
    if (!current_user_can('manage_options')) {
        wp_send_json_error(['message' => 'You do not have permission to access this action.'], 403);
        wp_die(); // Terminate the script
    }

    // Check if the email field is not empty
    if (!empty($_POST['email'])) {
        $to = sanitize_email($_POST['email']); // Sanitize the email input
        $subject = 'iNET Webkit - SMTP Configuration Success'; // Email subject
        $message = 'Your SMTP has been successfully configured.'; // Email message
        $headers = array('Content-Type: text/html; charset=UTF-8'); // Email headers

        // Send the email using wp_mail()
        $mail = wp_mail($to, $subject, $message, $headers);

        if ($mail) {
            // Send success response if the email is sent
            wp_send_json_success(array(
                'message' => 'Email sent successfully.'
            ));
        } else {
            // Send error response if the email fails to send
            wp_send_json_error(array(
                'message' => 'Failed to send email. Please try again.'
            ));
        }
    } else {
        // Send error response if the email is missing
        wp_send_json_error(array(
            'message' => 'Email address is required.'
        ));
    }

    // Stop further execution after handling the AJAX request
    wp_die();
}