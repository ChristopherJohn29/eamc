<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class verification extends CI_Controller {

    public function verify($user_id, $verification_token)
    {
        // Load the model (assuming you have a User_model)
        $this->load->model('UsersModel');
        
        // Check if the verification token exists in the database for the given user_id
        $user = $this->UsersModel->get_by_verification_token($verification_token, $user_id);
        
        if ($user) {
            // Token exists and matches the user's user_id, mark the user account as verified
            $this->UsersModel->mark_as_verified($user_id);
            
            // Redirect the user to a success page or display a success message
            redirect('admin/verification/success/'.$user['email']);
        } else {
            // Token doesn't exist or doesn't match the user's user_id
            // Redirect the user to an error page or display an error message
            redirect('admin/verification/error');
        }
    }

    public function success($email)
    {
        // Display a success message to the user

        if($email){

            $data['email'] = $email;
            $this->load->view('verification_success', $data);
        }
       
    }

    public function error()
    {
        // Display an error message to the user
        echo 'Verification Failed.';
        
        exit;
    }

}