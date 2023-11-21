<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Authentication {
    protected $CI;

    public function __construct() {
        $this->CI = &get_instance();
    }

    public function check_user_session() {
        $user_id = $this->CI->session->userdata('user_id');
        $role = $this->CI->session->userdata('role');

        if (empty($user_id)) {
            
            $currentURL = current_url();
            
            // User is not logged in, redirect to the login page or show an access denied page.
            redirect('auth/login?redirect='.$currentURL); // Replace 'login' with your login route.
        }
    }
}
