<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class users extends CI_Controller {

    public function __construct(){
        parent::__construct();

        $this->load->model('UsersModel');
        $this->load->model('DivisionModel');
		$this->load->model('DepartmentModel');
		$this->load->model('RegisterModel');
		$this->load->model('SectionModel');
        $this->authentication->check_user_session();
        $this->role_checker->checkViewerRole();
    }

    public function newUsers(){
        $data['page'] = 'admin/new_users';
		$data['title'] = 'New Users';
        $data['customcss'] = 'new_users.css';
        $data['customjs'] = 'new_users.js';

		$this->load->view('template/template', $data);
    }

    public function approvedUsers(){
        $data['page'] = 'admin/approved_users';
		$data['title'] = 'Approved Users';
        $data['customcss'] = 'approved_users.css';
        $data['customjs'] = 'approved_users.js';
        $data['division'] =  $this->DivisionModel->getDivision();

		$this->load->view('template/template', $data);
    }

    public function save(){

		$data = [
            'id' => $_POST['id'],
			'firstname' => $_POST['firstname'],
			'middlename' => $_POST['middlename'],
			'lastname' => $_POST['lastname'],
			'suffix' => $_POST['suffix'],
			'post_nominal' => $_POST['post_nominal'],
			'username' => $_POST['username'],
			'email' => $_POST['email'],
			'mobile_number' => $_POST['mobile_number'],
			'designation' => $_POST['designation'],
			'position' => $_POST['position'],
			'section' => $_POST['section'],
			'role' => $_POST['role'],
			'department' => $_POST['department'],
			'department_section' => $_POST['department_section'],
			'division' => isset($_POST['division']) ? $_POST['division'] : '',
			'fullname' => $_POST['firstname'].' '.$_POST['lastname']
		];

        if($_POST['password']){
            $data['password'] = md5($_POST['password']);
        }

		$update_result = $this->RegisterModel->saveUser($data);

		if($update_result){
			echo "saved";
		} else {
            echo "error";
        }
	}

    public function getNewUsers(){
        $newUsers =  $this->UsersModel->getNewUsers();

        echo json_encode($newUsers);
    }

    public function getApprovedUsers(){
        $approvedUsers =  $this->UsersModel->getApprovedUsers();

        echo json_encode($approvedUsers);
    }

    public function deny(){
        $user_id = $_POST['user_id'];

        $save = $this->UsersModel->denyUser($user_id);
        
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }

    public function approve(){
        $user_id = $_POST['user_id'];

        $save = $this->UsersModel->approveUser($user_id);
        
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }

}