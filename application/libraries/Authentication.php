<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Authentication {
    protected $CI;

    public function __construct() {
        $this->CI = &get_instance();
    }

    public function check_user_session() {
        $user_id = $this->CI->session->userdata('user_id');
        if (empty($user_id)) {
            // User is not logged in, redirect to the login page or show an access denied page.
            redirect('auth/login'); // Replace 'login' with your login route.
        }
    }
}
