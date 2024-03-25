<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class register extends CI_Controller {

	public function __construct(){

        parent::__construct();

        $this->load->model('DivisionModel');
		$this->load->model('DepartmentModel');
		$this->load->model('RegisterModel');
		$this->load->model('SectionModel');
    }


	public function index()
	{

		$data['division'] =  $this->DivisionModel->getDivision();

		$this->load->view('auth/register', $data);
	}

	public function save(){

		$data = [
			'firstname' => $_POST['firstname'],
			'middlename' => $_POST['middlename'],
			'lastname' => $_POST['lastname'],
			'suffix' => $_POST['suffix'],
			'post_nominal' => $_POST['post_nominal'],
			'username' => $_POST['username'],
			'password' => md5($_POST['password']),
			'email' => $_POST['email'],
			'mobile_number' => $_POST['mobile_number'],
			'designation' => $_POST['designation'],
			'position' => $_POST['position'],
			'section' => $_POST['section'],
			'role' => $_POST['role'],
			'department' => $_POST['department'],
			'department_section' => $_POST['department_section'],
			'division' => isset($_POST['division']) ? $_POST['division'] : '',
			'created_date' => date('Y-m-d H:i:s'),
			'fullname' => $_POST['firstname'].' '.$_POST['lastname']
		];

		$registration_result = $this->RegisterModel->registerUser($data);

		if($registration_result){
			echo "saved";
		} else {
			echo "emailexist";
		}
	}

	
}
