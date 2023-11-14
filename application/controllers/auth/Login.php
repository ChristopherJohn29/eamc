<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class login extends CI_Controller {

	public function __construct(){

        parent::__construct();

        $this->load->model('LoginModel');
		$this->load->model('DocumentTypeModel');
		$this->load->model('DivisionModel');
		$this->load->model('DepartmentModel');
    }

	public function index()
	{
		$this->load->view('auth/login');
	}

	public function signin(){
		$email = $_POST['email'];
		$password = $_POST['password'];

		$user = $this->LoginModel->login($email, $password);

        if ($user) {
            // Set user session data or redirect to a user dashboard.
           	$this->session->set_userdata('user_id', $user->id);
			$this->session->set_userdata('firstname', $user->firstname);
			$this->session->set_userdata('department', $user->department);
			$this->session->set_userdata('division', $user->division);

			echo 'saved';
        } else {
            // Invalid login; show an error or redirect to the login form.
			echo 'failed';
        }
	}

	public function signout() {
		// Unset user session data
		$this->session->unset_userdata('user_id');
		$this->session->unset_userdata('firstname');
		$this->session->unset_userdata('department');
		$this->session->unset_userdata('division');
	
		// Destroy the session
		$this->session->sess_destroy();
	
		// Redirect to the login page
		redirect('auth/login');
	}

	
}
