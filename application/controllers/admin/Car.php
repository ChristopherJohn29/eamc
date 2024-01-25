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

    public function issuanceOfNC(){

        $this->role_checker->checkViewerRole();
        $data['page'] = 'admin/car_issuance_of_nc';
		$data['title'] = 'Issuance of NC';
        $data['customcss'] = 'car_issuance_of_nc.css';
        $data['customjs'] = 'car_issuance_of_nc.js';
        $data['source'] = $this->MainModel->getCarSource();
        $data['division'] = $this->MainModel->getDivision();

		$this->load->view('template/template', $data);
    }

    public function correctiveAction(){

        $this->role_checker->checkViewerRole();
        $data['page'] = 'admin/car_corrective_action';
		$data['title'] = 'Corrective action';
        $data['customcss'] = 'car_corrective_action.css';
        $data['customjs'] = 'car_corrective_action.js';
        $data['source'] = $this->MainModel->getCarSource();
        $data['division'] = $this->MainModel->getDivision();

		$this->load->view('template/template', $data);
    }

    public function osqmReview(){

        $this->role_checker->checkViewerRole();
        $data['page'] = 'admin/car_osqm_review';
		$data['title'] = 'OSQM Review';
        $data['customcss'] = 'car_osqm_review.css';
        $data['customjs'] = 'car_osqm_review.js';
        $data['source'] = $this->MainModel->getCarSource();
        $data['division'] = $this->MainModel->getDivision();

		$this->load->view('template/template', $data);
    }

    public function approvalOfCorrection(){

        $this->role_checker->checkViewerRole();
        $data['page'] = 'admin/car_approval_of_correction';
		$data['title'] = 'Approval of Correction';
        $data['customcss'] = 'car_approval_of_correction.css';
        $data['customjs'] = 'car_approval_of_correction.js';
        $data['source'] = $this->MainModel->getCarSource();
        $data['division'] = $this->MainModel->getDivision();

		$this->load->view('template/template', $data);
    }

    public function verificationAndRecommendation(){

        $this->role_checker->checkViewerRole();
        $data['page'] = 'admin/car_verification';
		$data['title'] = 'Verification and Recommendation';
        $data['customcss'] = 'car_verification.css';
        $data['customjs'] = 'car_verification.js';
        $data['source'] = $this->MainModel->getCarSource();
        $data['division'] = $this->MainModel->getDivision();

		$this->load->view('template/template', $data);
    }

    public function validation(){

        $this->role_checker->checkViewerRole();
        $data['page'] = 'admin/car_validation';
		$data['title'] = 'Validation';
        $data['customcss'] = 'car_validation.css';
        $data['customjs'] = 'car_validation.js';
        $data['source'] = $this->MainModel->getCarSource();
        $data['division'] = $this->MainModel->getDivision();

		$this->load->view('template/template', $data);
    }

    public function closing(){

        $this->role_checker->checkViewerRole();
        $data['page'] = 'admin/car_closing';
		$data['title'] = 'Closing';
        $data['customcss'] = 'car_closing.css';
        $data['customjs'] = 'car_closing.js';
        $data['source'] = $this->MainModel->getCarSource();
        $data['division'] = $this->MainModel->getDivision();

		$this->load->view('template/template', $data);
    }

    public function issuanceSave(){

           // Fetch data sent from AJAX request
           $car_id = $this->input->post('car_id');
           $issuance_of_nc = $this->input->post('issuance_of_nc');
           $issuance_of_nc_remarks = $this->input->post('issuance_of_nc_remarks');
        //    $source = $this->input->post('source');
        //    $issued_by = $this->input->post('issued_by');
        //    $issued_to = $this->input->post('issued_to');
        //    $findings = $this->input->post('findings');
        //    $consequences = $this->input->post('consequences');
        //    $requirements_not_fulfilled = $this->input->post('requirements_not_fulfilled');
        //    $requirements_not_fulfilled = $this->input->post('requirements_not_fulfilled');
        //    $requirements_not_fulfilled = $this->input->post('requirements_not_fulfilled');
   
           // Prepare data for insertion into the 'car' table

           if($issuance_of_nc == 'Approved'){
                $status = 'For CAR action';
           } else {
                $status = 'Dissapproved';
           }
           
           $data = array(
               'car_id' => $car_id,
               'issuance_of_nc' => $issuance_of_nc,
               'issuance_of_nc_remarks' => $issuance_of_nc_remarks,
               'status' => $status,
            //    'issued_by' => $issued_by,
            //    'issued_to' => $issued_to,
            //    'findings' => $findings,
            //    'consequences' => $consequences,
            //    'requirements_not_fulfilled' => $requirements_not_fulfilled,
            //    'corrective_action_status' => '',
            //    'for_correction_status' => '',
            //    'status' => 'For Issuance of NC',
           );
   
           // Save data to the 'car' table using the model
           $result = $this->MainModel->updateCar($data);
   
           if ($result) {
               echo 'saved';
           } else {
               echo 'error';
           }
    }

    public function getDepartment(){
        
        $department = $this->MainModel->getDepartment($_POST['division']);

        echo json_encode($department);
    }

    public function getCar(){
        
        $department = $this->MainModel->getCar($_POST['status']);

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
            'requirements_not_fulfilled' => $requirements_not_fulfilled,
            'corrective_action_status' => '',
            'for_correction_status' => '',
            'status' => 'For Issuance of NC',
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