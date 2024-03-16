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

    public function car(){

        $this->role_checker->checkViewerRole();
        $data['page'] = 'admin/car';
		$data['title'] = 'Corrective Action Request';
        $data['customcss'] = 'car.css';
        $data['customjs'] = 'car.js';
        $data['source'] = $this->MainModel->getCarSource();
        $data['division'] = $this->MainModel->getDivision();

		$this->load->view('template/template', $data);
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

    public function saveCorrectionFR(){
        //array
        $car_id = $this->input->post('car_id');
        $review_correction_dealing_with_consequences = $this->input->post('review_correction_dealing_with_consequences');
        $review_correction_dealing_with_consequences_remarks = $this->input->post('review_correction_dealing_with_consequences_remarks');

        $correction_entry = array();

        $correction = $this->input->post('correction');
        $correction_person_responsible = $this->input->post('correction_person_responsible');
        $correction_completion_date = $this->input->post('correction_completion_date');

        $correction_acceptable_review = $this->input->post('correction_acceptable_review');
        $correction_acceptable_remarks_review = $this->input->post('correction_acceptable_remarks_review');

        $correction_acceptable_approval = $this->input->post('correction_acceptable_approval');
        $correction_acceptable_remarks_approval = $this->input->post('correction_acceptable_remarks_approval');

        $correction_acceptable_verification = $this->input->post('correction_acceptable_verification');
        $correction_acceptable_remarks_verification = $this->input->post('correction_acceptable_remarks_verification');

        $correction_acceptable_validation = $this->input->post('correction_acceptable_validation');
        $correction_acceptable_remarks_validation = $this->input->post('correction_acceptable_remarks_validation');
    
        foreach($correction as $key => $value){
            if($correction[$key]){
                $correction_entry[] = array(
                    'correction' => $correction[$key],
                    'correction_person_responsible' => $correction_person_responsible[$key],
                    'correction_completion_date' => $correction_completion_date[$key],
                    'correction_acceptable_review' => $correction_acceptable_review[$key],
                    'correction_acceptable_remarks_review' => $correction_acceptable_remarks_review[$key],
                    'correction_acceptable_approval' => $correction_acceptable_approval[$key],
                    'correction_acceptable_remarks_approval' => $correction_acceptable_remarks_approval[$key],
                    'correction_acceptable_verification' => $correction_acceptable_verification[$key],
                    'correction_acceptable_remarks_verification' => $correction_acceptable_remarks_verification[$key],
                    'correction_acceptable_validation' => $correction_acceptable_validation[$key],
                    'correction_acceptable_remarks_validation' => $correction_acceptable_remarks_validation[$key],
                );
            }
            
        }
        
        $consequence_entry = array();

        //array
        $consequence = $this->input->post('consequence');
        $consequence_person_responsible = $this->input->post('consequence_person_responsible');
        $consequence_completion_date = $this->input->post('consequence_completion_date');


        $consequence_acceptable_review = $this->input->post('consequence_acceptable_review');
        $consequence_acceptable_remarks_review = $this->input->post('consequence_acceptable_remarks_review');

        $consequence_acceptable_approval = $this->input->post('consequence_acceptable_approval');
        $consequence_acceptable_remarks_approval = $this->input->post('consequence_acceptable_remarks_approval');

        $consequence_acceptable_verification = $this->input->post('consequence_acceptable_verification');
        $consequence_acceptable_remarks_verification = $this->input->post('consequence_acceptable_remarks_verification');

        $consequence_acceptable_validation = $this->input->post('consequence_acceptable_validation');
        $consequence_acceptable_remarks_validation = $this->input->post('consequence_acceptable_remarks_validation');
    
        foreach($consequence as $key => $value){
            if($consequence[$key]){
                $consequence_entry[] = array(
                    'consequence' => $consequence[$key],
                    'consequence_person_responsible' => $consequence_person_responsible[$key],
                    'consequence_completion_date' => $consequence_completion_date[$key],
                    'consequence_acceptable_review' => $consequence_acceptable_review[$key],
                    'consequence_acceptable_remarks_review' => $consequence_acceptable_remarks_review[$key],
                    'consequence_acceptable_approval' => $consequence_acceptable_approval[$key],
                    'consequence_acceptable_remarks_approval' => $consequence_acceptable_remarks_approval[$key],
                    'consequence_acceptable_verification' => $consequence_acceptable_verification[$key],
                    'consequence_acceptable_remarks_verification' => $consequence_acceptable_remarks_verification[$key],
                    'consequence_acceptable_validation' => $consequence_acceptable_validation[$key],
                    'consequence_acceptable_remarks_validation' => $consequence_acceptable_remarks_validation[$key],
                );
            }
           
        }


        $existing_record = $this->db->get_where('correction', array('car_id' => $car_id))->row();

        $data = array(
            'car_id' => $car_id,
            'correction_entry' => json_encode($correction_entry),
            'consequence_entry' => json_encode($consequence_entry),
            'review_correction_dealing_with_consequences' => $review_correction_dealing_with_consequences,
            'review_correction_dealing_with_consequences_remarks' => $review_correction_dealing_with_consequences_remarks,
        );
        
        if ($existing_record) {
            // Car_id exists, perform an update
            $this->db->where('car_id', $car_id);
            $result = $this->db->update('correction', $data);
        } else {
            // Car_id doesn't exist, perform an insert
            $result = $this->db->insert('correction', $data);
        }

        $cardata = array(
            'for_correction_status' => $review_correction_dealing_with_consequences
        );

        $this->db->where('id', $car_id);
        $result = $this->db->update('car', $cardata);
        
        if ($result) {
            echo 'saved';
        } else {
            echo 'error';
        }
    }

    public function saveCorrectionFA(){
        //array
        $car_id = $this->input->post('car_id');
        $approval_correction_dealing_with_consequences = $this->input->post('approval_correction_dealing_with_consequences');
        $approval_correction_dealing_with_consequences_remarks = $this->input->post('approval_correction_dealing_with_consequences_remarks');
    
        $correction_entry = array();

        $correction = $this->input->post('correction');
        $correction_person_responsible = $this->input->post('correction_person_responsible');
        $correction_completion_date = $this->input->post('correction_completion_date');

        $correction_acceptable_review = $this->input->post('correction_acceptable_review');
        $correction_acceptable_remarks_review = $this->input->post('correction_acceptable_remarks_review');

        $correction_acceptable_approval = $this->input->post('correction_acceptable_approval');
        $correction_acceptable_remarks_approval = $this->input->post('correction_acceptable_remarks_approval');

        $correction_acceptable_verification = $this->input->post('correction_acceptable_verification');
        $correction_acceptable_remarks_verification = $this->input->post('correction_acceptable_remarks_verification');

        $correction_acceptable_validation = $this->input->post('correction_acceptable_validation');
        $correction_acceptable_remarks_validation = $this->input->post('correction_acceptable_remarks_validation');
    
        foreach($correction as $key => $value){
            if($correction[$key]){
                $correction_entry[] = array(
                    'correction' => $correction[$key],
                    'correction_person_responsible' => $correction_person_responsible[$key],
                    'correction_completion_date' => $correction_completion_date[$key],
                    'correction_acceptable_review' => $correction_acceptable_review[$key],
                    'correction_acceptable_remarks_review' => $correction_acceptable_remarks_review[$key],
                    'correction_acceptable_approval' => $correction_acceptable_approval[$key],
                    'correction_acceptable_remarks_approval' => $correction_acceptable_remarks_approval[$key],
                    'correction_acceptable_verification' => $correction_acceptable_verification[$key],
                    'correction_acceptable_remarks_verification' => $correction_acceptable_remarks_verification[$key],
                    'correction_acceptable_validation' => $correction_acceptable_validation[$key],
                    'correction_acceptable_remarks_validation' => $correction_acceptable_remarks_validation[$key],
                );
            }
            
        }
        
        $consequence_entry = array();

        //array
        $consequence = $this->input->post('consequence');
        $consequence_person_responsible = $this->input->post('consequence_person_responsible');
        $consequence_completion_date = $this->input->post('consequence_completion_date');


        $consequence_acceptable_review = $this->input->post('consequence_acceptable_review');
        $consequence_acceptable_remarks_review = $this->input->post('consequence_acceptable_remarks_review');

        $consequence_acceptable_approval = $this->input->post('consequence_acceptable_approval');
        $consequence_acceptable_remarks_approval = $this->input->post('consequence_acceptable_remarks_approval');

        $consequence_acceptable_verification = $this->input->post('consequence_acceptable_verification');
        $consequence_acceptable_remarks_verification = $this->input->post('consequence_acceptable_remarks_verification');

        $consequence_acceptable_validation = $this->input->post('consequence_acceptable_validation');
        $consequence_acceptable_remarks_validation = $this->input->post('consequence_acceptable_remarks_validation');
    
        foreach($consequence as $key => $value){
            if($consequence[$key]){
                $consequence_entry[] = array(
                    'consequence' => $consequence[$key],
                    'consequence_person_responsible' => $consequence_person_responsible[$key],
                    'consequence_completion_date' => $consequence_completion_date[$key],
                    'consequence_acceptable_review' => $consequence_acceptable_review[$key],
                    'consequence_acceptable_remarks_review' => $consequence_acceptable_remarks_review[$key],
                    'consequence_acceptable_approval' => $consequence_acceptable_approval[$key],
                    'consequence_acceptable_remarks_approval' => $consequence_acceptable_remarks_approval[$key],
                    'consequence_acceptable_verification' => $consequence_acceptable_verification[$key],
                    'consequence_acceptable_remarks_verification' => $consequence_acceptable_remarks_verification[$key],
                    'consequence_acceptable_validation' => $consequence_acceptable_validation[$key],
                    'consequence_acceptable_remarks_validation' => $consequence_acceptable_remarks_validation[$key],
                );
            }
           
        }
    
        $existing_record = $this->db->get_where('correction', array('car_id' => $car_id))->row();
    
        $data = array(
            'car_id' => $car_id,
            'correction_entry' => json_encode($correction_entry),
            'consequence_entry' => json_encode($consequence_entry),
            'approval_correction_dealing_with_consequences' => $approval_correction_dealing_with_consequences,
            'approval_correction_dealing_with_consequences_remarks' => $approval_correction_dealing_with_consequences_remarks,
        );
        
        if ($existing_record) {
            // Car_id exists, perform an update
            $this->db->where('car_id', $car_id);
            $result = $this->db->update('correction', $data);
        } else {
            // Car_id doesn't exist, perform an insert
            $result = $this->db->insert('correction', $data);
        }
    
        $cardata = array(
            'for_correction_status' => $approval_correction_dealing_with_consequences
        );
    
        $this->db->where('id', $car_id);
        $result = $this->db->update('car', $cardata);
        
        if ($result) {
            echo 'saved';
        } else {
            echo 'error';
        }
    }

    public function saveCorrectionFV(){
        //array
        $car_id = $this->input->post('car_id');
        $verification_correction_dealing_with_consequences = $this->input->post('verification_correction_dealing_with_consequences');
        $verification_correction_dealing_with_consequences_remarks = $this->input->post('verification_correction_dealing_with_consequences_remarks');
    
        $correction_entry = array();

        $correction = $this->input->post('correction');
        $correction_person_responsible = $this->input->post('correction_person_responsible');
        $correction_completion_date = $this->input->post('correction_completion_date');

        $correction_acceptable_review = $this->input->post('correction_acceptable_review');
        $correction_acceptable_remarks_review = $this->input->post('correction_acceptable_remarks_review');

        $correction_acceptable_approval = $this->input->post('correction_acceptable_approval');
        $correction_acceptable_remarks_approval = $this->input->post('correction_acceptable_remarks_approval');

        $correction_acceptable_verification = $this->input->post('correction_acceptable_verification');
        $correction_acceptable_remarks_verification = $this->input->post('correction_acceptable_remarks_verification');

        $correction_acceptable_validation = $this->input->post('correction_acceptable_validation');
        $correction_acceptable_remarks_validation = $this->input->post('correction_acceptable_remarks_validation');
    
        foreach($correction as $key => $value){
            if($correction[$key]){
                $correction_entry[] = array(
                    'correction' => $correction[$key],
                    'correction_person_responsible' => $correction_person_responsible[$key],
                    'correction_completion_date' => $correction_completion_date[$key],
                    'correction_acceptable_review' => $correction_acceptable_review[$key],
                    'correction_acceptable_remarks_review' => $correction_acceptable_remarks_review[$key],
                    'correction_acceptable_approval' => $correction_acceptable_approval[$key],
                    'correction_acceptable_remarks_approval' => $correction_acceptable_remarks_approval[$key],
                    'correction_acceptable_verification' => $correction_acceptable_verification[$key],
                    'correction_acceptable_remarks_verification' => $correction_acceptable_remarks_verification[$key],
                    'correction_acceptable_validation' => $correction_acceptable_validation[$key],
                    'correction_acceptable_remarks_validation' => $correction_acceptable_remarks_validation[$key],
                );
            }
            
        }
        
        $consequence_entry = array();

        //array
        $consequence = $this->input->post('consequence');
        $consequence_person_responsible = $this->input->post('consequence_person_responsible');
        $consequence_completion_date = $this->input->post('consequence_completion_date');


        $consequence_acceptable_review = $this->input->post('consequence_acceptable_review');
        $consequence_acceptable_remarks_review = $this->input->post('consequence_acceptable_remarks_review');

        $consequence_acceptable_approval = $this->input->post('consequence_acceptable_approval');
        $consequence_acceptable_remarks_approval = $this->input->post('consequence_acceptable_remarks_approval');

        $consequence_acceptable_verification = $this->input->post('consequence_acceptable_verification');
        $consequence_acceptable_remarks_verification = $this->input->post('consequence_acceptable_remarks_verification');

        $consequence_acceptable_validation = $this->input->post('consequence_acceptable_validation');
        $consequence_acceptable_remarks_validation = $this->input->post('consequence_acceptable_remarks_validation');
    
        foreach($consequence as $key => $value){
            if($consequence[$key]){
                $consequence_entry[] = array(
                    'consequence' => $consequence[$key],
                    'consequence_person_responsible' => $consequence_person_responsible[$key],
                    'consequence_completion_date' => $consequence_completion_date[$key],
                    'consequence_acceptable_review' => $consequence_acceptable_review[$key],
                    'consequence_acceptable_remarks_review' => $consequence_acceptable_remarks_review[$key],
                    'consequence_acceptable_approval' => $consequence_acceptable_approval[$key],
                    'consequence_acceptable_remarks_approval' => $consequence_acceptable_remarks_approval[$key],
                    'consequence_acceptable_verification' => $consequence_acceptable_verification[$key],
                    'consequence_acceptable_remarks_verification' => $consequence_acceptable_remarks_verification[$key],
                    'consequence_acceptable_validation' => $consequence_acceptable_validation[$key],
                    'consequence_acceptable_remarks_validation' => $consequence_acceptable_remarks_validation[$key],
                );
            }
           
        }
    
    
        $existing_record = $this->db->get_where('correction', array('car_id' => $car_id))->row();
    
        $data = array(
            'car_id' => $car_id,
            'correction_entry' => json_encode($correction_entry),
            'consequence_entry' => json_encode($consequence_entry),
            'verification_correction_dealing_with_consequences' => $verification_correction_dealing_with_consequences,
            'verification_correction_dealing_with_consequences_remarks' => $verification_correction_dealing_with_consequences_remarks,
        );
        
        if ($existing_record) {
            // Car_id exists, perform an update
            $this->db->where('car_id', $car_id);
            $result = $this->db->update('correction', $data);
        } else {
            // Car_id doesn't exist, perform an insert
            $result = $this->db->insert('correction', $data);
        }
    
        $cardata = array(
            'for_correction_status' => $verification_correction_dealing_with_consequences
        );
    
        $this->db->where('id', $car_id);
        $result = $this->db->update('car', $cardata);
        
        if ($result) {
            echo 'saved';
        } else {
            echo 'error';
        }
    }

    public function saveCorrectionFVA(){
        //array
        $car_id = $this->input->post('car_id');
        $validation_correction_dealing_with_consequences = $this->input->post('validation_correction_dealing_with_consequences');
        $validation_correction_dealing_with_consequences_remarks = $this->input->post('validation_correction_dealing_with_consequences_remarks');
    
        $correction_entry = array();

        $correction = $this->input->post('correction');
        $correction_person_responsible = $this->input->post('correction_person_responsible');
        $correction_completion_date = $this->input->post('correction_completion_date');

        $correction_acceptable_review = $this->input->post('correction_acceptable_review');
        $correction_acceptable_remarks_review = $this->input->post('correction_acceptable_remarks_review');

        $correction_acceptable_approval = $this->input->post('correction_acceptable_approval');
        $correction_acceptable_remarks_approval = $this->input->post('correction_acceptable_remarks_approval');

        $correction_acceptable_verification = $this->input->post('correction_acceptable_verification');
        $correction_acceptable_remarks_verification = $this->input->post('correction_acceptable_remarks_verification');

        $correction_acceptable_validation = $this->input->post('correction_acceptable_validation');
        $correction_acceptable_remarks_validation = $this->input->post('correction_acceptable_remarks_validation');
    
        foreach($correction as $key => $value){
            if($correction[$key]){
                $correction_entry[] = array(
                    'correction' => $correction[$key],
                    'correction_person_responsible' => $correction_person_responsible[$key],
                    'correction_completion_date' => $correction_completion_date[$key],
                    'correction_acceptable_review' => $correction_acceptable_review[$key],
                    'correction_acceptable_remarks_review' => $correction_acceptable_remarks_review[$key],
                    'correction_acceptable_approval' => $correction_acceptable_approval[$key],
                    'correction_acceptable_remarks_approval' => $correction_acceptable_remarks_approval[$key],
                    'correction_acceptable_verification' => $correction_acceptable_verification[$key],
                    'correction_acceptable_remarks_verification' => $correction_acceptable_remarks_verification[$key],
                    'correction_acceptable_validation' => $correction_acceptable_validation[$key],
                    'correction_acceptable_remarks_validation' => $correction_acceptable_remarks_validation[$key],
                );
            }
            
        }
        
        $consequence_entry = array();

        //array
        $consequence = $this->input->post('consequence');
        $consequence_person_responsible = $this->input->post('consequence_person_responsible');
        $consequence_completion_date = $this->input->post('consequence_completion_date');


        $consequence_acceptable_review = $this->input->post('consequence_acceptable_review');
        $consequence_acceptable_remarks_review = $this->input->post('consequence_acceptable_remarks_review');

        $consequence_acceptable_approval = $this->input->post('consequence_acceptable_approval');
        $consequence_acceptable_remarks_approval = $this->input->post('consequence_acceptable_remarks_approval');

        $consequence_acceptable_verification = $this->input->post('consequence_acceptable_verification');
        $consequence_acceptable_remarks_verification = $this->input->post('consequence_acceptable_remarks_verification');

        $consequence_acceptable_validation = $this->input->post('consequence_acceptable_validation');
        $consequence_acceptable_remarks_validation = $this->input->post('consequence_acceptable_remarks_validation');
    
        foreach($consequence as $key => $value){
            if($consequence[$key]){
                $consequence_entry[] = array(
                    'consequence' => $consequence[$key],
                    'consequence_person_responsible' => $consequence_person_responsible[$key],
                    'consequence_completion_date' => $consequence_completion_date[$key],
                    'consequence_acceptable_review' => $consequence_acceptable_review[$key],
                    'consequence_acceptable_remarks_review' => $consequence_acceptable_remarks_review[$key],
                    'consequence_acceptable_approval' => $consequence_acceptable_approval[$key],
                    'consequence_acceptable_remarks_approval' => $consequence_acceptable_remarks_approval[$key],
                    'consequence_acceptable_verification' => $consequence_acceptable_verification[$key],
                    'consequence_acceptable_remarks_verification' => $consequence_acceptable_remarks_verification[$key],
                    'consequence_acceptable_validation' => $consequence_acceptable_validation[$key],
                    'consequence_acceptable_remarks_validation' => $consequence_acceptable_remarks_validation[$key],
                );
            }
           
        }
    
    
        $existing_record = $this->db->get_where('correction', array('car_id' => $car_id))->row();
    
        $data = array(
            'car_id' => $car_id,
            'correction_entry' => json_encode($correction_entry),
            'consequence_entry' => json_encode($consequence_entry),
            'validation_correction_dealing_with_consequences' => $validation_correction_dealing_with_consequences,
            'validation_correction_dealing_with_consequences_remarks' => $validation_correction_dealing_with_consequences_remarks,
        );
        
        if ($existing_record) {
            // Car_id exists, perform an update
            $this->db->where('car_id', $car_id);
            $result = $this->db->update('correction', $data);
        } else {
            // Car_id doesn't exist, perform an insert
            $result = $this->db->insert('correction', $data);
        }
    
        $cardata = array(
            'for_correction_status' => $validation_correction_dealing_with_consequences
        );
    
        $this->db->where('id', $car_id);
        $result = $this->db->update('car', $cardata);
        
        if ($result) {
            echo 'saved';
        } else {
            echo 'error';
        }
    }

    public function saveCorrection(){
        //array
        $car_id = $this->input->post('car_id');

        $correction_entry = array();

        $correction = $this->input->post('correction');
        $correction_person_responsible = $this->input->post('correction_person_responsible');
        $correction_completion_date = $this->input->post('correction_completion_date');
    
        foreach($correction as $key => $value){
            if($correction[$key]){
                $correction_entry[] = array(
                    'correction' => $correction[$key],
                    'correction_person_responsible' => $correction_person_responsible[$key],
                    'correction_completion_date' => $correction_completion_date[$key]
                );
            }
            
        }
        
        $consequence_entry = array();

        //array
        $consequence = $this->input->post('consequence');
        $consequence_person_responsible = $this->input->post('consequence_person_responsible');
        $consequence_completion_date = $this->input->post('consequence_completion_date');
    
        foreach($consequence as $key => $value){
            if($consequence[$key]){
                $consequence_entry[] = array(
                    'consequence' => $consequence[$key],
                    'consequence_person_responsible' => $consequence_person_responsible[$key],
                    'consequence_completion_date' => $consequence_completion_date[$key]
                );
            }
           
        }


        $existing_record = $this->db->get_where('correction', array('car_id' => $car_id))->row();

        $data = array(
            'car_id' => $car_id,
            'correction_entry' => json_encode($correction_entry),
            'consequence_entry' => json_encode($consequence_entry),
        );
        
        if ($existing_record) {
            // Car_id exists, perform an update
            $this->db->where('car_id', $car_id);
            $result = $this->db->update('correction', $data);
        } else {
            // Car_id doesn't exist, perform an insert
            $result = $this->db->insert('correction', $data);
        }

        $cardata = array(
            'for_correction_status' => 'For OSQM Review'
        );

        $this->db->where('id', $car_id);
        $result = $this->db->update('car', $cardata);
        
        if ($result) {
            echo 'saved';
        } else {
            echo 'error';
        }


    }

    public function saveRoot(){
        
        function handleFileUpload($key, $custom_config = array()) {
            $CI = get_instance();
            $CI->load->library('upload');

            // Merge custom configuration with default configuration
            $default_config = array(
                'upload_path'   => FCPATH . 'uploads/',
                'allowed_types' => 'gif|jpg|png|pdf|docx|doc',  // Adjust as needed
            );

            $config = array_merge($default_config, $custom_config);

            $CI->upload->initialize($config);

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
        $risk_attachments_exist = $this->input->post('risk_attachments');
        // var_dump( $risk_attachments);

        $opportunity_attachments = handleFileUpload('opportunity_number_attachment');
        $opportunity_attachments_exist = $this->input->post('opportunity_attachments');


        $rootcause_attachments = handleFileUpload('rootcause_attachment_attachment');
        $rootcause_attachments_exist = $this->input->post('rootcause_attachments');

        $identified_attachments = handleFileUpload('identified_root_attachment_attachment');
        $identified_attachments_exist = $this->input->post('identified_attachments');

        $existing_nonconformity = $this->input->post('existing_nonconformity');
        $existing_nonconformity_remarks = $this->input->post('existing_nonconformity_remarks');
        $update_doc_info = $this->input->post('update_doc_info');
        $update_doc_info_remarks = $this->input->post('update_doc_info_remarks');
    
        //array
        $risk_entry = array();
    
        $risk_number = $this->input->post('risk_number');
        $risk_number_details_update = $this->input->post('risk_number_details_update');
        $risk_number_attachment_url = $this->input->post('risk_number_attachment_url');
    
        foreach($risk_number as $key => $value){
            $risk_entry[] = array(
                'risk_number' => $risk_number[$key],
                'risk_number_details_update' => $risk_number_details_update[$key],
                'risk_number_attachment_url' => $risk_number_attachment_url[$key],
                'risk_attachments' => isset($risk_attachments['risk_number_attachment'][$key]) ? $risk_attachments['risk_number_attachment'][$key] : $risk_attachments_exist[$key]
            );
        }
        
        $car_id = $this->input->post('car_id');
        $opportunity_identified_yn = $this->input->post('opportunity_identified_yn');
    
        //array
        $opportunity_number = $this->input->post('opportunity_number');
        $opportunity_identified = $this->input->post('opportunity_identified');
        $opportunity_number_attachment_url = $this->input->post('opportunity_number_attachment_url');
    
        $opportunity_entry = array();
    
        foreach($opportunity_number as $key => $value){
            $opportunity_entry[] = array(
                'opportunity_number' => $opportunity_number[$key],
                'opportunity_identified' => $opportunity_identified[$key],
                'opportunity_number_attachment_url' => $opportunity_number_attachment_url[$key],
                'opportunity_attachments' => isset($opportunity_attachments['opportunity_number_attachment'][$key]) ? $opportunity_attachments['opportunity_number_attachment'][$key] : $opportunity_attachments[$key],
            );
        }
    
        //array
        $rootcause = $this->input->post('rootcause');
        $rootcause_file_url = $this->input->post('rootcause_file_url');
        $rootcause_file_name = $this->input->post('rootcause_file_name');
    
        $rootcause_entry = array();
    
        foreach($rootcause as $key => $value){
            $rootcause_entry[] = array(
                'rootcause' => $rootcause[$key],
                'rootcause_file_name' => $rootcause_file_name[$key],
                'rootcause_file_url' => $rootcause_file_url[$key],
                'rootcause_attachments' => isset($rootcause_attachments['rootcause_attachment_attachment'][$key]) ? $rootcause_attachments['rootcause_attachment_attachment'][$key] : $rootcause_attachments[$key],
            );
        }
    
        //array
        $identified_root = $this->input->post('identified_root');
        $tpn_control = $this->input->post('tpn_control');
        $identified_root_corrective_action = $this->input->post('identified_root_corrective_action');
        $identified_root_person_responsible = $this->input->post('identified_root_person_responsible');
        $identified_root_completion_date = $this->input->post('identified_root_completion_date');
        $identified_root_attachment_url = $this->input->post('identified_root_attachment_url');

        $tpn_issued_by = $this->input->post('tpn_issued_by');
        $tpn_issued_to = $this->input->post('tpn_issued_to');
        $tpn_section = $this->input->post('tpn_section');
    
        $identified_entry = array();
    
        foreach($identified_root as $key => $value){
            $identified_entry[] = array(
                'identified_root' => $identified_root[$key],
                'tpn_control' => $tpn_control[$key],
                'identified_root_corrective_action' => $identified_root_corrective_action[$key],
                'identified_root_person_responsible' => $identified_root_person_responsible[$key],
                'identified_root_completion_date' => $identified_root_completion_date[$key],
                'identified_root_attachment_url' => $identified_root_attachment_url[$key],
                'identified_attachments' => isset($identified_attachments['identified_root_attachment_attachment'][$key]) ? $identified_attachments['identified_root_attachment_attachment'][$key] : $identified_attachments[$key],
                'tpn_issued_by' => isset($tpn_issued_by[$key]) ? $tpn_issued_by[$key] : "",
                'tpn_issued_to' => isset($tpn_issued_to[$key]) ? $tpn_issued_to[$key] : "",
                'tpn_section' => isset($tpn_section[$key]) ? $tpn_section[$key] : "",
            );
        }
    
        // Use $data for any further processing or database insertion
        $existing_record = $this->db->get_where('corrective_action', array('car_id' => $car_id))->row();

        $data = array(
            'car_id' => $car_id,
            'existing_nonconformity' => $existing_nonconformity,
            'update_doc_info' => $update_doc_info,
            'existing_nonconformity_remarks' => $existing_nonconformity_remarks,
            'update_doc_info_remarks' => $update_doc_info_remarks,
            'risk_entry' => json_encode($risk_entry),
            'opportunity_identified' => $opportunity_identified_yn,
            'opportunity_entry' => json_encode($opportunity_entry),
            'root_cause_entry' => json_encode($rootcause_entry),
            'identified_root_entry' => json_encode($identified_entry),
        );
        
        if ($existing_record) {
            // Car_id exists, perform an update
            $this->db->where('car_id', $car_id);
            $result = $this->db->update('corrective_action', $data);
        } else {
            // Car_id doesn't exist, perform an insert
            $result = $this->db->insert('corrective_action', $data);
        }

        $cardata = array(
            'corrective_action_status' => 'For OSQM Review'
        );

        $this->db->where('id', $car_id);
        $result = $this->db->update('car', $cardata);
        
        if ($result) {
            echo 'saved';
        } else {
            echo 'error';
        }
    }

    public function saveRootFR(){

        $review_action_root_cause_analysis = $this->input->post('review_action_root_cause_analysis');
        $review_action_root_cause_analysis_remarks = $this->input->post('review_action_root_cause_analysis_remarks');
   
        //array
        $risk_entry = array();

        $existing_nonconformity = $this->input->post('existing_nonconformity');
        $existing_nonconformity_remarks = $this->input->post('existing_nonconformity_remarks');
        $update_doc_info = $this->input->post('update_doc_info');
        $update_doc_info_remarks = $this->input->post('update_doc_info_remarks');
    
        $risk_number = $this->input->post('risk_number');
        $risk_number_details_update = $this->input->post('risk_number_details_update');
        $risk_attachments = $this->input->post('risk_attachments');
        $risk_number_attachment_url = $this->input->post('risk_number_attachment_url');

        $risk_number_acceptable_review = $this->input->post('risk_number_acceptable_review');
        $risk_number_acceptable_remarks_review = $this->input->post('risk_number_acceptable_remarks_review');

        $risk_number_acceptable_approval = $this->input->post('risk_number_acceptable_approval');
        $risk_number_acceptable_remarks_approval = $this->input->post('risk_number_acceptable_remarks_approval');

        $risk_number_acceptable_verification = $this->input->post('risk_number_acceptable_verification');
        $risk_number_acceptable_remarks_verification = $this->input->post('risk_number_acceptable_remarks_verification');

        $risk_number_acceptable_validation = $this->input->post('risk_number_acceptable_validation');
        $risk_number_acceptable_remarks_validation = $this->input->post('risk_number_acceptable_remarks_validation');
    
        foreach($risk_number as $key => $value){
            $risk_entry[] = array(
                'risk_number' => $risk_number[$key],
                'risk_number_details_update' => $risk_number_details_update[$key],
                'risk_number_attachment_url' => $risk_number_attachment_url[$key],
                'risk_attachments' => $risk_attachments[$key],
                'risk_number_acceptable_review' => $risk_number_acceptable_review[$key],
                'risk_number_acceptable_remarks_review' => $risk_number_acceptable_remarks_review[$key],
                'risk_number_acceptable_approval' => $risk_number_acceptable_approval[$key],
                'risk_number_acceptable_remarks_approval' => $risk_number_acceptable_remarks_approval[$key],
                'risk_number_acceptable_verification' => $risk_number_acceptable_verification[$key],
                'risk_number_acceptable_remarks_verification' => $risk_number_acceptable_remarks_verification[$key],
                'risk_number_acceptable_validation' => $risk_number_acceptable_validation[$key],
                'risk_number_acceptable_remarks_validation' => $risk_number_acceptable_remarks_validation[$key],
            );
        }
        
        $car_id = $this->input->post('car_id');
        $opportunity_identified_yn = $this->input->post('opportunity_identified_yn');
    
        //array
        $opportunity_number = $this->input->post('opportunity_number');
        $opportunity_number_attachment_url = $this->input->post('opportunity_number_attachment_url');
        $opportunity_identified = $this->input->post('opportunity_identified');
        $opportunity_attachments = $this->input->post('opportunity_attachments');


        $opportunity_number_acceptable_review = $this->input->post('opportunity_number_acceptable_review');
        $opportunity_number_acceptable_remarks_review = $this->input->post('opportunity_number_acceptable_remarks_review');

        $opportunity_number_acceptable_approval = $this->input->post('opportunity_number_acceptable_approval');
        $opportunity_number_acceptable_remarks_approval = $this->input->post('opportunity_number_acceptable_remarks_approval');

        $opportunity_number_acceptable_verification = $this->input->post('opportunity_number_acceptable_verification');
        $opportunity_number_acceptable_remarks_verification = $this->input->post('opportunity_number_acceptable_remarks_verification');

        $opportunity_number_acceptable_validation = $this->input->post('opportunity_number_acceptable_validation');
        $opportunity_number_acceptable_remarks_validation = $this->input->post('opportunity_number_acceptable_remarks_validation');
    
        $opportunity_entry = array();
    
        foreach($opportunity_number as $key => $value){
            $opportunity_entry[] = array(
                'opportunity_number' => $opportunity_number[$key],
                'opportunity_number_attachment_url' => $opportunity_number_attachment_url[$key],
                'opportunity_identified' => $opportunity_identified[$key],
                'opportunity_attachments' => $opportunity_attachments[$key],
                'opportunity_number_acceptable_review' => $opportunity_number_acceptable_review[$key],
                'opportunity_number_acceptable_remarks_review' => $opportunity_number_acceptable_remarks_review[$key],
                'opportunity_number_acceptable_approval' => $opportunity_number_acceptable_approval[$key],
                'opportunity_number_acceptable_remarks_approval' => $opportunity_number_acceptable_remarks_approval[$key],
                'opportunity_number_acceptable_verification' => $opportunity_number_acceptable_verification[$key],
                'opportunity_number_acceptable_remarks_verification' => $opportunity_number_acceptable_remarks_verification[$key],
                'opportunity_number_acceptable_validation' => $opportunity_number_acceptable_validation[$key],
                'opportunity_number_acceptable_remarks_validation' => $opportunity_number_acceptable_remarks_validation[$key],
            );
        }
    
        //array
        $rootcause = $this->input->post('rootcause');
        $rootcause_file_name = $this->input->post('rootcause_file_name');
        $rootcause_attachments =  $this->input->post('rootcause_attachments');
        $rootcause_file_url = $this->input->post('rootcause_file_url');

        $rootcause_acceptable_review =  $this->input->post('rootcause_acceptable_review');
        $rootcause_acceptable_remarks_review =  $this->input->post('rootcause_acceptable_remarks_review');

        $rootcause_acceptable_approval =  $this->input->post('rootcause_acceptable_approval');
        $rootcause_acceptable_remarks_approval =  $this->input->post('rootcause_acceptable_remarks_approval');

        $rootcause_acceptable_verification =  $this->input->post('rootcause_acceptable_verification');
        $rootcause_acceptable_remarks_verification =  $this->input->post('rootcause_acceptable_remarks_verification');
        
        $rootcause_acceptable_validation =  $this->input->post('rootcause_acceptable_validation');
        $rootcause_acceptable_remarks_validation =  $this->input->post('rootcause_acceptable_remarks_validation');
    
        $rootcause_entry = array();
    
        foreach($rootcause as $key => $value){
            $rootcause_entry[] = array(
                'rootcause' => $rootcause[$key],
                'rootcause_file_name' => $rootcause_file_name[$key],
                'rootcause_attachments' => $rootcause_attachments[$key],
                'rootcause_file_url' => $rootcause_file_url[$key],
                'rootcause_acceptable_review' => $rootcause_acceptable_review[$key],
                'rootcause_acceptable_remarks_review' => $rootcause_acceptable_remarks_review[$key],
                'rootcause_acceptable_approval' => $rootcause_acceptable_approval[$key],
                'rootcause_acceptable_remarks_approval' => $rootcause_acceptable_remarks_approval[$key],
                'rootcause_acceptable_verification' => $rootcause_acceptable_verification[$key],
                'rootcause_acceptable_remarks_verification' => $rootcause_acceptable_remarks_verification[$key],
                'rootcause_acceptable_validation' => $rootcause_acceptable_validation[$key],
                'rootcause_acceptable_remarks_validation' => $rootcause_acceptable_remarks_validation[$key],
            );
        }
    
        //array
        $identified_root = $this->input->post('identified_root');
        $tpn_control = $this->input->post('tpn_control');
        $identified_root_corrective_action = $this->input->post('identified_root_corrective_action');
        $identified_root_person_responsible = $this->input->post('identified_root_person_responsible');
        $identified_root_completion_date = $this->input->post('identified_root_completion_date');
        $identified_attachments = $this->input->post('identified_attachments');
        $identified_root_acceptable_review = $this->input->post('identified_root_acceptable_review');
        $identified_root_acceptable_remarks_review = $this->input->post('identified_root_acceptable_remarks_review');
        $identified_root_attachment_url = $this->input->post('identified_root_attachment_url');

        $identified_root_acceptable_approval = $this->input->post('identified_root_acceptable_approval');
        $identified_root_acceptable_remarks_approval = $this->input->post('identified_root_acceptable_remarks_approval');

        $identified_root_acceptable_verification = $this->input->post('identified_root_acceptable_verification');
        $identified_root_acceptable_remarks_verification = $this->input->post('identified_root_acceptable_remarks_verification');

        $identified_root_acceptable_validation = $this->input->post('identified_root_acceptable_validation');
        $identified_root_acceptable_remarks_validation = $this->input->post('identified_root_acceptable_remarks_validation');

        $tpn_issued_by = $this->input->post('tpn_issued_by');
        $tpn_issued_to = $this->input->post('tpn_issued_to');
        $tpn_section = $this->input->post('tpn_section');
    
        $identified_entry = array();
    
        foreach($identified_root as $key => $value){
            $identified_entry[] = array(
                'identified_root' => $identified_root[$key],
                'tpn_control' => $tpn_control[$key],
                'identified_root_corrective_action' => $identified_root_corrective_action[$key],
                'identified_root_person_responsible' => $identified_root_person_responsible[$key],
                'identified_root_completion_date' => $identified_root_completion_date[$key],
                'identified_attachments' => $identified_attachments[$key],
                'identified_root_attachment_url' => $identified_root_attachment_url[$key],
                'identified_root_acceptable_review' => $identified_root_acceptable_review[$key],
                'identified_root_acceptable_remarks_review' => $identified_root_acceptable_remarks_review[$key],
                'identified_root_acceptable_approval' => $identified_root_acceptable_approval[$key],
                'identified_root_acceptable_remarks_approval' => $identified_root_acceptable_remarks_approval[$key],
                'identified_root_acceptable_verification' => $identified_root_acceptable_verification[$key],
                'identified_root_acceptable_remarks_verification' => $identified_root_acceptable_remarks_verification[$key],
                'identified_root_acceptable_validation' => $identified_root_acceptable_validation[$key],
                'identified_root_acceptable_remarks_validation' => $identified_root_acceptable_remarks_validation[$key],
                'tpn_issued_by' => isset($tpn_issued_by[$key]) ? $tpn_issued_by[$key] : "",
                'tpn_issued_to' => isset($tpn_issued_to[$key]) ? $tpn_issued_to[$key] : "",
                'tpn_section' => isset($tpn_section[$key]) ? $tpn_section[$key] : "",
            );
        }
    
        // Use $data for any further processing or database insertion
        $existing_record = $this->db->get_where('corrective_action', array('car_id' => $car_id))->row();

        $data = array(
            'car_id' => $car_id,
            'existing_nonconformity' => $existing_nonconformity,
            'update_doc_info' => $update_doc_info,
            'existing_nonconformity_remarks' => $existing_nonconformity_remarks,
            'update_doc_info_remarks' => $update_doc_info_remarks,
            'risk_entry' => json_encode($risk_entry),
            'opportunity_identified' => $opportunity_identified_yn,
            'opportunity_entry' => json_encode($opportunity_entry),
            'root_cause_entry' => json_encode($rootcause_entry),
            'identified_root_entry' => json_encode($identified_entry),
            'review_action_root_cause_analysis' => $review_action_root_cause_analysis,
            'review_action_root_cause_analysis_remarks' => $review_action_root_cause_analysis_remarks,
        );
        
        if ($existing_record) {
            // Car_id exists, perform an update
            $this->db->where('car_id', $car_id);
            $result = $this->db->update('corrective_action', $data);
        } else {
            // Car_id doesn't exist, perform an insert
            $result = $this->db->insert('corrective_action', $data);
        }

        $cardata = array(
            'corrective_action_status' => $review_action_root_cause_analysis
        );

        $this->db->where('id', $car_id);
        $result = $this->db->update('car', $cardata);
        
        if ($result) {
            echo 'saved';
        } else {
            echo 'error';
        }
    }

    public function saveRootFA(){

        $approval_action_root_cause_analysis = $this->input->post('approval_action_root_cause_analysis');
        $approval_action_root_cause_analysis_remarks = $this->input->post('approval_action_root_cause_analysis_remarks');
   
        //array
        $risk_entry = array();

        $existing_nonconformity = $this->input->post('existing_nonconformity');
        $existing_nonconformity_remarks = $this->input->post('existing_nonconformity_remarks');
        $update_doc_info = $this->input->post('update_doc_info');
        $update_doc_info_remarks = $this->input->post('update_doc_info_remarks');
    
        $risk_number = $this->input->post('risk_number');
        $risk_number_details_update = $this->input->post('risk_number_details_update');
        $risk_attachments = $this->input->post('risk_attachments');

        $risk_number_acceptable_review = $this->input->post('risk_number_acceptable_review');
        $risk_number_acceptable_remarks_review = $this->input->post('risk_number_acceptable_remarks_review');

        $risk_number_acceptable_approval = $this->input->post('risk_number_acceptable_approval');
        $risk_number_acceptable_remarks_approval = $this->input->post('risk_number_acceptable_remarks_approval');

        $risk_number_acceptable_verification = $this->input->post('risk_number_acceptable_verification');
        $risk_number_acceptable_remarks_verification = $this->input->post('risk_number_acceptable_remarks_verification');

        $risk_number_acceptable_validation = $this->input->post('risk_number_acceptable_validation');
        $risk_number_acceptable_remarks_validation = $this->input->post('risk_number_acceptable_remarks_validation');
    
        foreach($risk_number as $key => $value){
            $risk_entry[] = array(
                'risk_number' => $risk_number[$key],
                'risk_number_details_update' => $risk_number_details_update[$key],
                'risk_attachments' => $risk_attachments[$key],
                'risk_number_acceptable_review' => $risk_number_acceptable_review[$key],
                'risk_number_acceptable_remarks_review' => $risk_number_acceptable_remarks_review[$key],
                'risk_number_acceptable_approval' => $risk_number_acceptable_approval[$key],
                'risk_number_acceptable_remarks_approval' => $risk_number_acceptable_remarks_approval[$key],
                'risk_number_acceptable_verification' => $risk_number_acceptable_verification[$key],
                'risk_number_acceptable_remarks_verification' => $risk_number_acceptable_remarks_verification[$key],
                'risk_number_acceptable_validation' => $risk_number_acceptable_validation[$key],
                'risk_number_acceptable_remarks_validation' => $risk_number_acceptable_remarks_validation[$key],
            );
        }
        
        $car_id = $this->input->post('car_id');
        $opportunity_identified_yn = $this->input->post('opportunity_identified_yn');
    
        //array
        $opportunity_number = $this->input->post('opportunity_number');
        $opportunity_identified = $this->input->post('opportunity_identified');
        $opportunity_attachments = $this->input->post('opportunity_attachments');


        $opportunity_number_acceptable_review = $this->input->post('opportunity_number_acceptable_review');
        $opportunity_number_acceptable_remarks_review = $this->input->post('opportunity_number_acceptable_remarks_review');

        $opportunity_number_acceptable_approval = $this->input->post('opportunity_number_acceptable_approval');
        $opportunity_number_acceptable_remarks_approval = $this->input->post('opportunity_number_acceptable_remarks_approval');

        $opportunity_number_acceptable_verification = $this->input->post('opportunity_number_acceptable_verification');
        $opportunity_number_acceptable_remarks_verification = $this->input->post('opportunity_number_acceptable_remarks_verification');

        $opportunity_number_acceptable_validation = $this->input->post('opportunity_number_acceptable_validation');
        $opportunity_number_acceptable_remarks_validation = $this->input->post('opportunity_number_acceptable_remarks_validation');
    
        $opportunity_entry = array();
    
        foreach($opportunity_number as $key => $value){
            $opportunity_entry[] = array(
                'opportunity_number' => $opportunity_number[$key],
                'opportunity_identified' => $opportunity_identified[$key],
                'opportunity_attachments' => $opportunity_attachments[$key],
                'opportunity_number_acceptable_review' => $opportunity_number_acceptable_review[$key],
                'opportunity_number_acceptable_remarks_review' => $opportunity_number_acceptable_remarks_review[$key],
                'opportunity_number_acceptable_approval' => $opportunity_number_acceptable_approval[$key],
                'opportunity_number_acceptable_remarks_approval' => $opportunity_number_acceptable_remarks_approval[$key],
                'opportunity_number_acceptable_verification' => $opportunity_number_acceptable_verification[$key],
                'opportunity_number_acceptable_remarks_verification' => $opportunity_number_acceptable_remarks_verification[$key],
                'opportunity_number_acceptable_validation' => $opportunity_number_acceptable_validation[$key],
                'opportunity_number_acceptable_remarks_validation' => $opportunity_number_acceptable_remarks_validation[$key],
            );
        }
    
        //array
        $rootcause = $this->input->post('rootcause');
        $rootcause_file_name = $this->input->post('rootcause_file_name');
        $rootcause_attachments =  $this->input->post('rootcause_attachments');

        $rootcause_acceptable_review =  $this->input->post('rootcause_acceptable_review');
        $rootcause_acceptable_remarks_review =  $this->input->post('rootcause_acceptable_remarks_review');

        $rootcause_acceptable_approval =  $this->input->post('rootcause_acceptable_approval');
        $rootcause_acceptable_remarks_approval =  $this->input->post('rootcause_acceptable_remarks_approval');

        $rootcause_acceptable_verification =  $this->input->post('rootcause_acceptable_verification');
        $rootcause_acceptable_remarks_verification =  $this->input->post('rootcause_acceptable_remarks_verification');
        
        $rootcause_acceptable_validation =  $this->input->post('rootcause_acceptable_validation');
        $rootcause_acceptable_remarks_validation =  $this->input->post('rootcause_acceptable_remarks_validation');
    
        $rootcause_entry = array();
    
        foreach($rootcause as $key => $value){
            $rootcause_entry[] = array(
                'rootcause' => $rootcause[$key],
                'rootcause_file_name' => $rootcause_file_name[$key],
                'rootcause_attachments' => $rootcause_attachments[$key],
                'rootcause_acceptable_review' => $rootcause_acceptable_review[$key],
                'rootcause_acceptable_remarks_review' => $rootcause_acceptable_remarks_review[$key],
                'rootcause_acceptable_approval' => $rootcause_acceptable_approval[$key],
                'rootcause_acceptable_remarks_approval' => $rootcause_acceptable_remarks_approval[$key],
                'rootcause_acceptable_verification' => $rootcause_acceptable_verification[$key],
                'rootcause_acceptable_remarks_verification' => $rootcause_acceptable_remarks_verification[$key],
                'rootcause_acceptable_validation' => $rootcause_acceptable_validation[$key],
                'rootcause_acceptable_remarks_validation' => $rootcause_acceptable_remarks_validation[$key],
            );
        }
    
        //array
        $identified_root = $this->input->post('identified_root');
        $tpn_control = $this->input->post('tpn_control');
        $identified_root_corrective_action = $this->input->post('identified_root_corrective_action');
        $identified_root_person_responsible = $this->input->post('identified_root_person_responsible');
        $identified_root_completion_date = $this->input->post('identified_root_completion_date');
        $identified_attachments = $this->input->post('identified_attachments');
        $identified_root_acceptable_review = $this->input->post('identified_root_acceptable_review');
        $identified_root_acceptable_remarks_review = $this->input->post('identified_root_acceptable_remarks_review');

        $identified_root_acceptable_approval = $this->input->post('identified_root_acceptable_approval');
        $identified_root_acceptable_remarks_approval = $this->input->post('identified_root_acceptable_remarks_approval');

        $identified_root_acceptable_verification = $this->input->post('identified_root_acceptable_verification');
        $identified_root_acceptable_remarks_verification = $this->input->post('identified_root_acceptable_remarks_verification');

        $identified_root_acceptable_validation = $this->input->post('identified_root_acceptable_validation');
        $identified_root_acceptable_remarks_validation = $this->input->post('identified_root_acceptable_remarks_validation');

        $tpn_issued_by = $this->input->post('tpn_issued_by');
        $tpn_issued_to = $this->input->post('tpn_issued_to');
        $tpn_section = $this->input->post('tpn_section');
    
        $identified_entry = array();
    
        foreach($identified_root as $key => $value){
            $identified_entry[] = array(
                'identified_root' => $identified_root[$key],
                'tpn_control' => $tpn_control[$key],
                'identified_root_corrective_action' => $identified_root_corrective_action[$key],
                'identified_root_person_responsible' => $identified_root_person_responsible[$key],
                'identified_root_completion_date' => $identified_root_completion_date[$key],
                'identified_attachments' => $identified_attachments[$key],
                'identified_root_acceptable_review' => $identified_root_acceptable_review[$key],
                'identified_root_acceptable_remarks_review' => $identified_root_acceptable_remarks_review[$key],
                'identified_root_acceptable_approval' => $identified_root_acceptable_approval[$key],
                'identified_root_acceptable_remarks_approval' => $identified_root_acceptable_remarks_approval[$key],
                'identified_root_acceptable_verification' => $identified_root_acceptable_verification[$key],
                'identified_root_acceptable_remarks_verification' => $identified_root_acceptable_remarks_verification[$key],
                'identified_root_acceptable_validation' => $identified_root_acceptable_validation[$key],
                'identified_root_acceptable_remarks_validation' => $identified_root_acceptable_remarks_validation[$key],
                'tpn_issued_by' => isset($tpn_issued_by[$key]) ? $tpn_issued_by[$key] : "",
                'tpn_issued_to' => isset($tpn_issued_to[$key]) ? $tpn_issued_to[$key] : "",
                'tpn_section' => isset($tpn_section[$key]) ? $tpn_section[$key] : "",
            );
        }
    
        // Use $data for any further processing or database insertion
        $existing_record = $this->db->get_where('corrective_action', array('car_id' => $car_id))->row();

        $data = array(
            'car_id' => $car_id,
            'existing_nonconformity' => $existing_nonconformity,
            'update_doc_info' => $update_doc_info,
            'existing_nonconformity_remarks' => $existing_nonconformity_remarks,
            'update_doc_info_remarks' => $update_doc_info_remarks,
            'risk_entry' => json_encode($risk_entry),
            'opportunity_identified' => $opportunity_identified_yn,
            'opportunity_entry' => json_encode($opportunity_entry),
            'root_cause_entry' => json_encode($rootcause_entry),
            'identified_root_entry' => json_encode($identified_entry),
            'approval_action_root_cause_analysis' => $approval_action_root_cause_analysis,
            'approval_action_root_cause_analysis_remarks' => $approval_action_root_cause_analysis_remarks,
        );
        
        if ($existing_record) {
            // Car_id exists, perform an update
            $this->db->where('car_id', $car_id);
            $result = $this->db->update('corrective_action', $data);
        } else {
            // Car_id doesn't exist, perform an insert
            $result = $this->db->insert('corrective_action', $data);
        }

        $cardata = array(
            'corrective_action_status' => $approval_action_root_cause_analysis
        );

        $this->db->where('id', $car_id);
        $result = $this->db->update('car', $cardata);
        
        if ($result) {
            echo 'saved';
        } else {
            echo 'error';
        }
    }

    public function saveRootFV(){

        $verification_action_root_cause_analysis = $this->input->post('verification_action_root_cause_analysis');
        $verification_action_root_cause_analysis_remarks = $this->input->post('verification_action_root_cause_analysis_remarks');
   
        //array
        $risk_entry = array();

        $existing_nonconformity = $this->input->post('existing_nonconformity');
        $existing_nonconformity_remarks = $this->input->post('existing_nonconformity_remarks');
        $update_doc_info = $this->input->post('update_doc_info');
        $update_doc_info_remarks = $this->input->post('update_doc_info_remarks');
    
        $risk_number = $this->input->post('risk_number');
        $risk_number_details_update = $this->input->post('risk_number_details_update');
        $risk_attachments = $this->input->post('risk_attachments');

        $risk_number_acceptable_review = $this->input->post('risk_number_acceptable_review');
        $risk_number_acceptable_remarks_review = $this->input->post('risk_number_acceptable_remarks_review');

        $risk_number_acceptable_approval = $this->input->post('risk_number_acceptable_approval');
        $risk_number_acceptable_remarks_approval = $this->input->post('risk_number_acceptable_remarks_approval');

        $risk_number_acceptable_verification = $this->input->post('risk_number_acceptable_verification');
        $risk_number_acceptable_remarks_verification = $this->input->post('risk_number_acceptable_remarks_verification');

        $risk_number_acceptable_validation = $this->input->post('risk_number_acceptable_validation');
        $risk_number_acceptable_remarks_validation = $this->input->post('risk_number_acceptable_remarks_validation');
    
        foreach($risk_number as $key => $value){
            $risk_entry[] = array(
                'risk_number' => $risk_number[$key],
                'risk_number_details_update' => $risk_number_details_update[$key],
                'risk_attachments' => $risk_attachments[$key],
                'risk_number_acceptable_review' => $risk_number_acceptable_review[$key],
                'risk_number_acceptable_remarks_review' => $risk_number_acceptable_remarks_review[$key],
                'risk_number_acceptable_approval' => $risk_number_acceptable_approval[$key],
                'risk_number_acceptable_remarks_approval' => $risk_number_acceptable_remarks_approval[$key],
                'risk_number_acceptable_verification' => $risk_number_acceptable_verification[$key],
                'risk_number_acceptable_remarks_verification' => $risk_number_acceptable_remarks_verification[$key],
                'risk_number_acceptable_validation' => $risk_number_acceptable_validation[$key],
                'risk_number_acceptable_remarks_validation' => $risk_number_acceptable_remarks_validation[$key],
            );
        }
        
        $car_id = $this->input->post('car_id');
        $opportunity_identified_yn = $this->input->post('opportunity_identified_yn');
    
        //array
        $opportunity_number = $this->input->post('opportunity_number');
        $opportunity_identified = $this->input->post('opportunity_identified');
        $opportunity_attachments = $this->input->post('opportunity_attachments');


        $opportunity_number_acceptable_review = $this->input->post('opportunity_number_acceptable_review');
        $opportunity_number_acceptable_remarks_review = $this->input->post('opportunity_number_acceptable_remarks_review');

        $opportunity_number_acceptable_approval = $this->input->post('opportunity_number_acceptable_approval');
        $opportunity_number_acceptable_remarks_approval = $this->input->post('opportunity_number_acceptable_remarks_approval');

        $opportunity_number_acceptable_verification = $this->input->post('opportunity_number_acceptable_verification');
        $opportunity_number_acceptable_remarks_verification = $this->input->post('opportunity_number_acceptable_remarks_verification');

        $opportunity_number_acceptable_validation = $this->input->post('opportunity_number_acceptable_validation');
        $opportunity_number_acceptable_remarks_validation = $this->input->post('opportunity_number_acceptable_remarks_validation');
    
        $opportunity_entry = array();
    
        foreach($opportunity_number as $key => $value){
            $opportunity_entry[] = array(
                'opportunity_number' => $opportunity_number[$key],
                'opportunity_identified' => $opportunity_identified[$key],
                'opportunity_attachments' => $opportunity_attachments[$key],
                'opportunity_number_acceptable_review' => $opportunity_number_acceptable_review[$key],
                'opportunity_number_acceptable_remarks_review' => $opportunity_number_acceptable_remarks_review[$key],
                'opportunity_number_acceptable_approval' => $opportunity_number_acceptable_approval[$key],
                'opportunity_number_acceptable_remarks_approval' => $opportunity_number_acceptable_remarks_approval[$key],
                'opportunity_number_acceptable_verification' => $opportunity_number_acceptable_verification[$key],
                'opportunity_number_acceptable_remarks_verification' => $opportunity_number_acceptable_remarks_verification[$key],
                'opportunity_number_acceptable_validation' => $opportunity_number_acceptable_validation[$key],
                'opportunity_number_acceptable_remarks_validation' => $opportunity_number_acceptable_remarks_validation[$key],
            );
        }
    
        //array
        $rootcause = $this->input->post('rootcause');
        $rootcause_file_name = $this->input->post('rootcause_file_name');
        $rootcause_attachments =  $this->input->post('rootcause_attachments');

        $rootcause_acceptable_review =  $this->input->post('rootcause_acceptable_review');
        $rootcause_acceptable_remarks_review =  $this->input->post('rootcause_acceptable_remarks_review');

        $rootcause_acceptable_approval =  $this->input->post('rootcause_acceptable_approval');
        $rootcause_acceptable_remarks_approval =  $this->input->post('rootcause_acceptable_remarks_approval');

        $rootcause_acceptable_verification =  $this->input->post('rootcause_acceptable_verification');
        $rootcause_acceptable_remarks_verification =  $this->input->post('rootcause_acceptable_remarks_verification');
        
        $rootcause_acceptable_validation =  $this->input->post('rootcause_acceptable_validation');
        $rootcause_acceptable_remarks_validation =  $this->input->post('rootcause_acceptable_remarks_validation');
    
        $rootcause_entry = array();
    
        foreach($rootcause as $key => $value){
            $rootcause_entry[] = array(
                'rootcause' => $rootcause[$key],
                'rootcause_file_name' => $rootcause_file_name[$key],
                'rootcause_attachments' => $rootcause_attachments[$key],
                'rootcause_acceptable_review' => $rootcause_acceptable_review[$key],
                'rootcause_acceptable_remarks_review' => $rootcause_acceptable_remarks_review[$key],
                'rootcause_acceptable_approval' => $rootcause_acceptable_approval[$key],
                'rootcause_acceptable_remarks_approval' => $rootcause_acceptable_remarks_approval[$key],
                'rootcause_acceptable_verification' => $rootcause_acceptable_verification[$key],
                'rootcause_acceptable_remarks_verification' => $rootcause_acceptable_remarks_verification[$key],
                'rootcause_acceptable_validation' => $rootcause_acceptable_validation[$key],
                'rootcause_acceptable_remarks_validation' => $rootcause_acceptable_remarks_validation[$key],
            );
        }
    
        //array
        $identified_root = $this->input->post('identified_root');
        $tpn_control = $this->input->post('tpn_control');
        $identified_root_corrective_action = $this->input->post('identified_root_corrective_action');
        $identified_root_person_responsible = $this->input->post('identified_root_person_responsible');
        $identified_root_completion_date = $this->input->post('identified_root_completion_date');
        $identified_attachments = $this->input->post('identified_attachments');
        $identified_root_acceptable_review = $this->input->post('identified_root_acceptable_review');
        $identified_root_acceptable_remarks_review = $this->input->post('identified_root_acceptable_remarks_review');

        $identified_root_acceptable_approval = $this->input->post('identified_root_acceptable_approval');
        $identified_root_acceptable_remarks_approval = $this->input->post('identified_root_acceptable_remarks_approval');

        $identified_root_acceptable_verification = $this->input->post('identified_root_acceptable_verification');
        $identified_root_acceptable_remarks_verification = $this->input->post('identified_root_acceptable_remarks_verification');

        $identified_root_acceptable_validation = $this->input->post('identified_root_acceptable_validation');
        $identified_root_acceptable_remarks_validation = $this->input->post('identified_root_acceptable_remarks_validation');

        $tpn_issued_by = $this->input->post('tpn_issued_by');
        $tpn_issued_to = $this->input->post('tpn_issued_to');
        $tpn_section = $this->input->post('tpn_section');
    
        $identified_entry = array();
    
        foreach($identified_root as $key => $value){
            $identified_entry[] = array(
                'identified_root' => $identified_root[$key],
                'tpn_control' => $tpn_control[$key],
                'identified_root_corrective_action' => $identified_root_corrective_action[$key],
                'identified_root_person_responsible' => $identified_root_person_responsible[$key],
                'identified_root_completion_date' => $identified_root_completion_date[$key],
                'identified_attachments' => $identified_attachments[$key],
                'identified_root_acceptable_review' => $identified_root_acceptable_review[$key],
                'identified_root_acceptable_remarks_review' => $identified_root_acceptable_remarks_review[$key],
                'identified_root_acceptable_approval' => $identified_root_acceptable_approval[$key],
                'identified_root_acceptable_remarks_approval' => $identified_root_acceptable_remarks_approval[$key],
                'identified_root_acceptable_verification' => $identified_root_acceptable_verification[$key],
                'identified_root_acceptable_remarks_verification' => $identified_root_acceptable_remarks_verification[$key],
                'identified_root_acceptable_validation' => $identified_root_acceptable_validation[$key],
                'identified_root_acceptable_remarks_validation' => $identified_root_acceptable_remarks_validation[$key],
                'tpn_issued_by' => isset($tpn_issued_by[$key]) ? $tpn_issued_by[$key] : "",
                'tpn_issued_to' => isset($tpn_issued_to[$key]) ? $tpn_issued_to[$key] : "",
                'tpn_section' => isset($tpn_section[$key]) ? $tpn_section[$key] : "",
            );
        }
    
        // Use $data for any further processing or database insertion
        $existing_record = $this->db->get_where('corrective_action', array('car_id' => $car_id))->row();

        $data = array(
            'car_id' => $car_id,
            'existing_nonconformity' => $existing_nonconformity,
            'update_doc_info' => $update_doc_info,
            'existing_nonconformity_remarks' => $existing_nonconformity_remarks,
            'update_doc_info_remarks' => $update_doc_info_remarks,
            'risk_entry' => json_encode($risk_entry),
            'opportunity_identified' => $opportunity_identified_yn,
            'opportunity_entry' => json_encode($opportunity_entry),
            'root_cause_entry' => json_encode($rootcause_entry),
            'identified_root_entry' => json_encode($identified_entry),
            'verification_action_root_cause_analysis' => $verification_action_root_cause_analysis,
            'verification_action_root_cause_analysis_remarks' => $verification_action_root_cause_analysis_remarks,
        );
        
        if ($existing_record) {
            // Car_id exists, perform an update
            $this->db->where('car_id', $car_id);
            $result = $this->db->update('corrective_action', $data);
        } else {
            // Car_id doesn't exist, perform an insert
            $result = $this->db->insert('corrective_action', $data);
        }

        $cardata = array(
            'corrective_action_status' => $verification_action_root_cause_analysis
        );

        $this->db->where('id', $car_id);
        $result = $this->db->update('car', $cardata);
        
        if ($result) {
            echo 'saved';
        } else {
            echo 'error';
        }
    }

    public function saveRootFVA(){

        $validation_action_root_cause_analysis = $this->input->post('validation_action_root_cause_analysis');
        $validation_action_root_cause_analysis_remarks = $this->input->post('validation_action_root_cause_analysis_remarks');
   
        //array
        $risk_entry = array();

        $existing_nonconformity = $this->input->post('existing_nonconformity');
        $existing_nonconformity_remarks = $this->input->post('existing_nonconformity_remarks');

        $update_doc_info = $this->input->post('update_doc_info');
        $update_doc_info_remarks = $this->input->post('update_doc_info_remarks');
    
        $risk_number = $this->input->post('risk_number');
        $risk_number_details_update = $this->input->post('risk_number_details_update');
        $risk_attachments = $this->input->post('risk_attachments');

        $risk_number_acceptable_review = $this->input->post('risk_number_acceptable_review');
        $risk_number_acceptable_remarks_review = $this->input->post('risk_number_acceptable_remarks_review');

        $risk_number_acceptable_approval = $this->input->post('risk_number_acceptable_approval');
        $risk_number_acceptable_remarks_approval = $this->input->post('risk_number_acceptable_remarks_approval');

        $risk_number_acceptable_verification = $this->input->post('risk_number_acceptable_verification');
        $risk_number_acceptable_remarks_verification = $this->input->post('risk_number_acceptable_remarks_verification');

        $risk_number_acceptable_validation = $this->input->post('risk_number_acceptable_validation');
        $risk_number_acceptable_remarks_validation = $this->input->post('risk_number_acceptable_remarks_validation');
    
        foreach($risk_number as $key => $value){
            $risk_entry[] = array(
                'risk_number' => $risk_number[$key],
                'risk_number_details_update' => $risk_number_details_update[$key],
                'risk_attachments' => $risk_attachments[$key],
                'risk_number_acceptable_review' => $risk_number_acceptable_review[$key],
                'risk_number_acceptable_remarks_review' => $risk_number_acceptable_remarks_review[$key],
                'risk_number_acceptable_approval' => $risk_number_acceptable_approval[$key],
                'risk_number_acceptable_remarks_approval' => $risk_number_acceptable_remarks_approval[$key],
                'risk_number_acceptable_verification' => $risk_number_acceptable_verification[$key],
                'risk_number_acceptable_remarks_verification' => $risk_number_acceptable_remarks_verification[$key],
                'risk_number_acceptable_validation' => $risk_number_acceptable_validation[$key],
                'risk_number_acceptable_remarks_validation' => $risk_number_acceptable_remarks_validation[$key],
            );
        }
        
        $car_id = $this->input->post('car_id');
        $opportunity_identified_yn = $this->input->post('opportunity_identified_yn');
    
        //array
        $opportunity_number = $this->input->post('opportunity_number');
        $opportunity_identified = $this->input->post('opportunity_identified');
        $opportunity_attachments = $this->input->post('opportunity_attachments');


        $opportunity_number_acceptable_review = $this->input->post('opportunity_number_acceptable_review');
        $opportunity_number_acceptable_remarks_review = $this->input->post('opportunity_number_acceptable_remarks_review');

        $opportunity_number_acceptable_approval = $this->input->post('opportunity_number_acceptable_approval');
        $opportunity_number_acceptable_remarks_approval = $this->input->post('opportunity_number_acceptable_remarks_approval');

        $opportunity_number_acceptable_verification = $this->input->post('opportunity_number_acceptable_verification');
        $opportunity_number_acceptable_remarks_verification = $this->input->post('opportunity_number_acceptable_remarks_verification');

        $opportunity_number_acceptable_validation = $this->input->post('opportunity_number_acceptable_validation');
        $opportunity_number_acceptable_remarks_validation = $this->input->post('opportunity_number_acceptable_remarks_validation');
    
        $opportunity_entry = array();
    
        foreach($opportunity_number as $key => $value){
            $opportunity_entry[] = array(
                'opportunity_number' => $opportunity_number[$key],
                'opportunity_identified' => $opportunity_identified[$key],
                'opportunity_attachments' => $opportunity_attachments[$key],
                'opportunity_number_acceptable_review' => $opportunity_number_acceptable_review[$key],
                'opportunity_number_acceptable_remarks_review' => $opportunity_number_acceptable_remarks_review[$key],
                'opportunity_number_acceptable_approval' => $opportunity_number_acceptable_approval[$key],
                'opportunity_number_acceptable_remarks_approval' => $opportunity_number_acceptable_remarks_approval[$key],
                'opportunity_number_acceptable_verification' => $opportunity_number_acceptable_verification[$key],
                'opportunity_number_acceptable_remarks_verification' => $opportunity_number_acceptable_remarks_verification[$key],
                'opportunity_number_acceptable_validation' => $opportunity_number_acceptable_validation[$key],
                'opportunity_number_acceptable_remarks_validation' => $opportunity_number_acceptable_remarks_validation[$key],
            );
        }
    
        //array
        $rootcause = $this->input->post('rootcause');
        $rootcause_file_name = $this->input->post('rootcause_file_name');
        $rootcause_attachments =  $this->input->post('rootcause_attachments');

        $rootcause_acceptable_review =  $this->input->post('rootcause_acceptable_review');
        $rootcause_acceptable_remarks_review =  $this->input->post('rootcause_acceptable_remarks_review');

        $rootcause_acceptable_approval =  $this->input->post('rootcause_acceptable_approval');
        $rootcause_acceptable_remarks_approval =  $this->input->post('rootcause_acceptable_remarks_approval');

        $rootcause_acceptable_verification =  $this->input->post('rootcause_acceptable_verification');
        $rootcause_acceptable_remarks_verification =  $this->input->post('rootcause_acceptable_remarks_verification');
        
        $rootcause_acceptable_validation =  $this->input->post('rootcause_acceptable_validation');
        $rootcause_acceptable_remarks_validation =  $this->input->post('rootcause_acceptable_remarks_validation');
    
        $rootcause_entry = array();
    
        foreach($rootcause as $key => $value){
            $rootcause_entry[] = array(
                'rootcause' => $rootcause[$key],
                'rootcause_file_name' => $rootcause_file_name[$key],
                'rootcause_attachments' => $rootcause_attachments[$key],
                'rootcause_acceptable_review' => $rootcause_acceptable_review[$key],
                'rootcause_acceptable_remarks_review' => $rootcause_acceptable_remarks_review[$key],
                'rootcause_acceptable_approval' => $rootcause_acceptable_approval[$key],
                'rootcause_acceptable_remarks_approval' => $rootcause_acceptable_remarks_approval[$key],
                'rootcause_acceptable_verification' => $rootcause_acceptable_verification[$key],
                'rootcause_acceptable_remarks_verification' => $rootcause_acceptable_remarks_verification[$key],
                'rootcause_acceptable_validation' => $rootcause_acceptable_validation[$key],
                'rootcause_acceptable_remarks_validation' => $rootcause_acceptable_remarks_validation[$key],
            );
        }
    
        //array
        $identified_root = $this->input->post('identified_root');
        $tpn_control = $this->input->post('tpn_control');
        $identified_root_corrective_action = $this->input->post('identified_root_corrective_action');
        $identified_root_person_responsible = $this->input->post('identified_root_person_responsible');
        $identified_root_completion_date = $this->input->post('identified_root_completion_date');
        $identified_attachments = $this->input->post('identified_attachments');
        $identified_root_acceptable_review = $this->input->post('identified_root_acceptable_review');
        $identified_root_acceptable_remarks_review = $this->input->post('identified_root_acceptable_remarks_review');

        $identified_root_acceptable_approval = $this->input->post('identified_root_acceptable_approval');
        $identified_root_acceptable_remarks_approval = $this->input->post('identified_root_acceptable_remarks_approval');

        $identified_root_acceptable_verification = $this->input->post('identified_root_acceptable_verification');
        $identified_root_acceptable_remarks_verification = $this->input->post('identified_root_acceptable_remarks_verification');

        $identified_root_acceptable_validation = $this->input->post('identified_root_acceptable_validation');
        $identified_root_acceptable_remarks_validation = $this->input->post('identified_root_acceptable_remarks_validation');

        $tpn_issued_by = $this->input->post('tpn_issued_by');
        $tpn_issued_to = $this->input->post('tpn_issued_to');
        $tpn_section = $this->input->post('tpn_section');
    
        $identified_entry = array();
    
        foreach($identified_root as $key => $value){
            $identified_entry[] = array(
                'identified_root' => $identified_root[$key],
                'tpn_control' => $tpn_control[$key],
                'identified_root_corrective_action' => $identified_root_corrective_action[$key],
                'identified_root_person_responsible' => $identified_root_person_responsible[$key],
                'identified_root_completion_date' => $identified_root_completion_date[$key],
                'identified_attachments' => $identified_attachments[$key],
                'identified_root_acceptable_review' => $identified_root_acceptable_review[$key],
                'identified_root_acceptable_remarks_review' => $identified_root_acceptable_remarks_review[$key],
                'identified_root_acceptable_approval' => $identified_root_acceptable_approval[$key],
                'identified_root_acceptable_remarks_approval' => $identified_root_acceptable_remarks_approval[$key],
                'identified_root_acceptable_verification' => $identified_root_acceptable_verification[$key],
                'identified_root_acceptable_remarks_verification' => $identified_root_acceptable_remarks_verification[$key],
                'identified_root_acceptable_validation' => $identified_root_acceptable_validation[$key],
                'identified_root_acceptable_remarks_validation' => $identified_root_acceptable_remarks_validation[$key],
                'tpn_issued_by' => isset($tpn_issued_by[$key]) ? $tpn_issued_by[$key] : "",
                'tpn_issued_to' => isset($tpn_issued_to[$key]) ? $tpn_issued_to[$key] : "",
                'tpn_section' => isset($tpn_section[$key]) ? $tpn_section[$key] : "",
            );
        }
    
        // Use $data for any further processing or database insertion
        $existing_record = $this->db->get_where('corrective_action', array('car_id' => $car_id))->row();

        $data = array(
            'car_id' => $car_id,
            'existing_nonconformity' => $existing_nonconformity,
            'update_doc_info' => $update_doc_info,
            'existing_nonconformity_remarks' => $existing_nonconformity_remarks,
            'update_doc_info_remarks' => $update_doc_info_remarks,
            'risk_entry' => json_encode($risk_entry),
            'opportunity_identified' => $opportunity_identified_yn,
            'opportunity_entry' => json_encode($opportunity_entry),
            'root_cause_entry' => json_encode($rootcause_entry),
            'identified_root_entry' => json_encode($identified_entry),
            'validation_action_root_cause_analysis' => $validation_action_root_cause_analysis,
            'validation_action_root_cause_analysis_remarks' => $validation_action_root_cause_analysis,
        );
        
        if ($existing_record) {
            // Car_id exists, perform an update
            $this->db->where('car_id', $car_id);
            $result = $this->db->update('corrective_action', $data);
        } else {
            // Car_id doesn't exist, perform an insert
            $result = $this->db->insert('corrective_action', $data);
        }

        $cardata = array(
            'corrective_action_status' => $validation_action_root_cause_analysis
        );

        $this->db->where('id', $car_id);
        $result = $this->db->update('car', $cardata);
        
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

        if(isset($_GET['c']) && $_GET['c']){
            $data['car_id'] = $_GET['c'];
        } else {
            show_404();
        }
       

        $this->role_checker->checkViewerRole();
        $data['page'] = 'admin/car_closing';
		$data['title'] = 'Corrective Action Request (CAR) Closure';
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

    public function getDivision(){
        
        $data = $this->MainModel->getDivision();

        echo json_encode($data);
    }

    public function getDepartmentByID(){
        
        $data = $this->MainModel->getDepartmentByID($_POST['id']);

        echo json_encode($data);
    }

    public function getDivisionByID(){
        
        $data = $this->MainModel->getDivisionByID($_POST['id']);

        echo json_encode($data);
    }

    public function getSectionByID(){
        
        $data = $this->MainModel->getSectionByID($_POST['id']);

        echo json_encode($data);
    }

    public function getCorrectiveAction(){
        $data = $this->MainModel->getCorrectiveAction($_POST['car_id']);

        echo json_encode($data);
    }

    public function getCorrectionAction(){
        $data = $this->MainModel->getCorrectionAction($_POST['car_id']);

        echo json_encode($data);
    }

    public function getSection(){
        $department = $this->MainModel->getSection($_POST['department']);

        echo json_encode($department);
    }

    public function getCar(){
        
        $department = $this->MainModel->getCar($_POST['status']);

        echo json_encode($department);
    }

    public function getCarByID(){
        
        $car_id = $_POST['car_id'];
        $department = $this->MainModel->getCarByID($car_id);

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