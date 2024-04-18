<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class verification extends CI_Controller {

    public function verify($user_id, $verification_token)
    {
        // Load the model (assuming you have a User_model)
        $this->load->model('User_model');
        
        // Check if the verification token exists in the database for the given user_id
        $user = $this->User_model->get_by_verification_token($verification_token, $user_id);
        
        if ($user) {
            // Token exists and matches the user's user_id, mark the user account as verified
            $this->User_model->mark_as_verified($user_id);
            
            // Redirect the user to a success page or display a success message
            redirect('verification/success/'.$user[0]['email']);
        } else {
            // Token doesn't exist or doesn't match the user's user_id
            // Redirect the user to an error page or display an error message
            redirect('verification/error');
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