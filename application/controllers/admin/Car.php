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

    public function saveRoot(){
        
        function handleFileUpload($key) {
            $CI = get_instance();
            $CI->load->library('upload');
            $files = $_FILES[$key];
    
            $attachments = array();
    
            foreach ($files['name'] as $index => $name) {
                $_FILES[$key] = array(
                    'name'     => $files['name'][$index],
                    'type'     => $files['type'][$index],
                    'tmp_name' => $files['tmp_name'][$index],
                    'error'    => $files['error'][$index],
                    'size'     => $files['size'][$index]
                );
    
                if ($CI->upload->do_upload($key)) {
                    $attachments[$key][] = $CI->upload->data('file_name');
                } else {
                    // Handle upload error
                    return array('error' => $CI->upload->display_errors());
                }
            }
    
            return $attachments;
        }
    
        // Handle each array of file uploads
        $risk_attachments = handleFileUpload('risk_number_attachment');
        $opportunity_attachments = handleFileUpload('opportunity_number_attachment');
        $rootcause_attachments = handleFileUpload('rootcause_attachment_attachment');
        $identified_attachments = handleFileUpload('identified_root_attachment_attachment');

        $existing_nonconformity = $this->input->post('existing_nonconformity');
        $update_doc_info = $this->input->post('update_doc_info');
    
        //array
        $risk_entry = array();
    
        $risk_number = $this->input->post('risk_number');
        $risk_number_details_update = $this->input->post('risk_number_details_update');
    
        foreach($risk_number as $key => $value){
            $risk_entry[] = array(
                'risk_number' => $risk_number[$key],
                'risk_number_details_update' => $risk_number_details_update[$key],
                'risk_attachments' => $risk_attachments['risk_number_attachment'][$key]
            );
        }
        
        $car_id = $this->input->post('car_id');
        $opportunity_identified_yn = $this->input->post('opportunity_identified_yn');
    
        //array
        $opportunity_number = $this->input->post('opportunity_number');
        $opportunity_identified = $this->input->post('opportunity_identified');
    
        $opportunity_entry = array();
    
        foreach($opportunity_number as $key => $value){
            $opportunity_entry[] = array(
                'opportunity_number' => $opportunity_number[$key],
                'opportunity_identified' => $opportunity_identified[$key],
                'opportunity_attachments' => $opportunity_attachments['opportunity_number_attachment'][$key]
            );
        }
    
        //array
        $rootcause = $this->input->post('rootcause');
        $rootcause_file_name = $this->input->post('rootcause_file_name');
    
        $rootcause_entry = array();
    
        foreach($rootcause as $key => $value){
            $rootcause_entry[] = array(
                'rootcause' => $rootcause[$key],
                'rootcause_file_name' => $rootcause_file_name[$key],
                'rootcause_attachments' => $rootcause_attachments['rootcause_attachment_attachment'][$key]
            );
        }
    
        //array
        $identified_root = $this->input->post('identified_root');
        $tpn_control = $this->input->post('tpn_control');
        $identified_root_corrective_action = $this->input->post('identified_root_corrective_action');
        $identified_root_person_responsible = $this->input->post('identified_root_person_responsible');
        $identified_root_completion_date = $this->input->post('identified_root_completion_date');
    
        $identified_entry = array();
    
        foreach($identified_root as $key => $value){
            $identified_entry[] = array(
                'identified_root' => $identified_root[$key],
                'tpn_control' => $tpn_control[$key],
                'identified_root_corrective_action' => $identified_root_corrective_action[$key],
                'identified_root_person_responsible' => $identified_root_person_responsible[$key],
                'identified_root_completion_date' => $identified_root_completion_date[$key],
                'identified_attachments' => $identified_attachments['identified_root_attachment_attachment'][$key]
            );
        }
    
        // Use $data for any further processing or database insertion
        $existing_record = $this->db->get_where('corrective_action', array('car_id' => $car_id))->row();

        $data = array(
            'car_id' => $car_id,
            'existing_nonconformity' => $existing_nonconformity,
            'update_doc_info' => $update_doc_info,
            'risk_entry' => $risk_entry,
            'opportunity_identified' => $opportunity_identified_yn,
            'opportunity_entry' => $opportunity_entry,
            'rootcause_entry' => $rootcause_entry,
            'identified_root_entry' => $identified_entry,
        );
        
        if ($existing_record) {
            // Car_id exists, perform an update
            $this->db->where('car_id', $car_id);
            $result = $this->db->update('corrective_action', $data);
        } else {
            // Car_id doesn't exist, perform an insert
            $result = $this->db->insert('corrective_action', $data);
        }
        
        if ($result) {
            echo 'saved';
        } else {
            echo 'error';
        }
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
           $issued_to = $this->input->post('issued_to');
           $section = $this->input->post('section');
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
               'issued_to' => $issued_to,
               'section' => $section,
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

    public function getSection(){
        $department = $this->MainModel->getSection($_POST['department']);

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
        $requestor = $this->input->post('requestor');
        $issued_by = $this->input->post('issued_by');
        $issued_to = $this->input->post('issued_to');
        $findings = $this->input->post('findings');
        $consequences = $this->input->post('consequences');
        $requirements_not_fulfilled = $this->input->post('requirements_not_fulfilled');

        // Prepare data for insertion into the 'car' table
        $currentDate = new DateTime();
        
        // Calculate 10 weekdays from now
        for ($i = 0; $i < 10; $i++) {
            // Add one day to the current date
            $currentDate->modify('+1 day');

            // Skip weekends (Saturday and Sunday)
            while ($currentDate->format('N') >= 6) {
                $currentDate->modify('+1 day');
            }
        }

        // Output the result
        $expiry = $currentDate->format('Y-m-d');


        $data = array(
            'car_no' => $car_no,
            'requestor' => $requestor,
            'identification_date' => $identification_date,
            'source' => $source,
            'issued_by' => $issued_by,
            'issued_to' => $issued_to,
            'findings' => $findings,
            'consequences' => $consequences,
            'requirements_not_fulfilled' => $requirements_not_fulfilled,
            'corrective_action_status' => '',
            'for_correction_status' => '',
            'ca_completion_date' => $expiry,
            'fc_completion_date' => $expiry,
            'registration_date' => date('Y-m-d'),
            'corrective_action_status' => '',
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