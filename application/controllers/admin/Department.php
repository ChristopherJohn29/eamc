<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class department extends CI_Controller {

    public function __construct(){

        parent::__construct();

        $this->load->model('DepartmentModel');
        $this->load->model('DivisionModel');
        $this->authentication->check_user_session();
    }

	public function index()
	{
        $this->role_checker->checkViewerRole();
		$data['page'] = 'admin/department';
		$data['title'] = 'Department';
        $data['customcss'] = 'department.css';
        $data['customjs'] = 'department.js';
        $data['division'] =  $this->DivisionModel->getDivision();
        
		$this->load->view('template/template', $data);
	}

    public function save()
    {
        $dep_name = $_POST['dep_name'];
        $div_id = $_POST['div_id'];

        $save = $this->DepartmentModel->saveDepartment($dep_name, $div_id);
        
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }

    public function delete()
    {
        $dep_id = $_POST['dep_id'];

        $save = $this->DepartmentModel->deleteDepartment($dep_id);
        
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }

    public function getDepartment(){

        $department = $this->DepartmentModel->loadDepartment();

        echo json_encode($department);
        
    }

    public function update(){

        $data = array(
            'dep_name' => $_POST['dep_name'],
            'div_id' => $_POST['div_id'],
            'id' => $_POST['dep_id'],
        );

        $save = $this->DepartmentModel->updateDepartment($data);
        
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }
}
