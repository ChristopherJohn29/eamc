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
		
		if(isset($_GET['redirect'])){
			$data['redirect'] = $_GET['redirect'];
		} else {
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
		}

		$this->load->view('auth/login', $data);
	}

	public function signin(){
		$email = $_POST['email'];
		$password = $_POST['password'];

		$checkcreds = $this->LoginModel->checkCreds($email, $password);

		if($checkcreds){

			$checkDCO = $this->LoginModel->checkDCO($email, $password);
			if($checkDCO){
				$checkEmail = $this->LoginModel->checkEmail($email, $password);

				if($checkEmail){
					$this->session->set_userdata('user_id', $checkEmail->id);
					$this->session->set_userdata('firstname', $checkEmail->firstname);
					$this->session->set_userdata('middlename', $checkEmail->middlename);
					$this->session->set_userdata('lastname', $checkEmail->lastname);
					$this->session->set_userdata('suffix', $checkEmail->suffix);
					$this->session->set_userdata('post_nominal', $checkEmail->post_nominal);
					$this->session->set_userdata('mobile_number', $checkEmail->mobile_number);

					$this->session->set_userdata('department', $checkEmail->department);
					$this->session->set_userdata('division', $checkEmail->division);
					$this->session->set_userdata('section', $checkEmail->section);
					$this->session->set_userdata('role', $checkEmail->role);
					
					if(isset($checkEmail->department_section)){
						$this->session->set_userdata('department_section', $checkEmail->department_section);
					}
					
		
					echo 'saved';
				} else {
					echo 'emailnotverified';
				}
			} else {
				echo 'dconotapprove';
			}
			
		} else {
			echo 'wrongcreds';
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
