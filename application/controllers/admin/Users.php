<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class users extends CI_Controller {

    public function __construct(){
        parent::__construct();

        $this->load->model('UsersModel');
        $this->authentication->check_user_session();
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

		$this->load->view('template/template', $data);
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