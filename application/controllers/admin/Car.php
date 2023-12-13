<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class car extends CI_Controller {

    public function __construct(){

        parent::__construct();

        $this->load->model('DepartmentModel');
        $this->load->model('SourceModel');
        $this->load->model('DivisionModel');
        $this->load->model('MainModel');
        $this->authentication->check_user_session();
        $this->role_checker->checkViewerRole();
    }


    public function ncDefination(){

        $this->role_checker->checkViewerRole();
        $data['page'] = 'admin/car_nc_defination';
		$data['title'] = 'NC Defination';
        $data['customcss'] = 'car_nc_defination.css';
        $data['customjs'] = 'car_nc_defination.js';
        $data['source'] = $this->MainModel->getCarSource();
        $data['division'] = $this->MainModel->getDivision();

		$this->load->view('template/template', $data);
    }

    public function getDepartment(){
        
        $department = $this->MainModel->getDepartment($_POST['division']);

        echo json_encode($department);
    }

    public function getCar(){
        
        $department = $this->MainModel->getCar();

        echo json_encode($department);
    }

    public function save() {
        // Fetch data sent from AJAX request
        $car_no = $this->input->post('car_no');
        $identification_date = $this->input->post('identification_date');
        $source = $this->input->post('source');
        $issued_by = $this->input->post('issued_by');
        $issued_to = $this->input->post('issued_to');
        $findings = $this->input->post('findings');
        $consequences = $this->input->post('consequences');
        $requirements_not_fulfilled = $this->input->post('requirements_not_fulfilled');

        // Prepare data for insertion into the 'car' table
        $data = array(
            'car_no' => $car_no,
            'identification_date' => $identification_date,
            'source' => $source,
            'issued_by' => $issued_by,
            'issued_to' => $issued_to,
            'findings' => $findings,
            'consequences' => $consequences,
            'requirements_not_fulfilled' => $requirements_not_fulfilled
        );

        // Save data to the 'car' table using the model
        $result = $this->MainModel->saveCar($data);

        if ($result) {
            echo 'saved';
        } else {
            echo 'error';
        }
    }

}