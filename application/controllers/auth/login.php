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

			echo 'saved';
        } else {
            // Invalid login; show an error or redirect to the login form.
			echo 'failed';
        }
	}

	
}
