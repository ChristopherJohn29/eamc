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
		if (isset($_SERVER['HTTP_REFERER'])) {
			$referer = $_SERVER['HTTP_REFERER'];
		
			// Check if the referrer is on the same server and contains "admin/portal"
			if (
				strpos($referer, $_SERVER['HTTP_HOST']) !== false 
				&& strpos($referer, 'admin/portal') !== false
			) {
				$data['redirect'] = $referer;
			} else {
				$data['redirect'] = base_url().'admin/dashboard';
			}
		} else {
			$data['redirect'] = base_url().'admin/dashboard';
		}

		$this->load->view('auth/login', $data);
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
			$this->session->set_userdata('role', $user->role);

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
		$this->session->unset_userdata('role');
	
		// Destroy the session
		$this->session->sess_destroy();
	
		// Redirect to the login page
		redirect('auth/login');
	}

	
}
