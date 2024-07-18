<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class car extends CI_Controller {

    public function __construct(){

        parent::__construct();

        $this->load->model('DepartmentModel');
        $this->load->model('SourceModel');
        $this->load->model('DivisionModel');
        $this->load->model('MainModel');
        $this->load->model('UsersModel');
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
        $data['role'] = $this->session->userdata('role');
        $data['department_section'] = $this->session->userdata('department_section');
        $data['section'] = $this->session->userdata('section');
        $data['department'] = $this->session->userdata('department');
        
		$this->load->view('template/template', $data);
    }

    public function getCARHistory(){
        
        $car_id = $_POST['car_id'];
        $car =  $this->MainModel->getCARHistory($car_id);

        echo json_encode($car);
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

    public function saveCorrection(){
        //array
        $car_id = $this->input->post('car_id');

        $car = $this->MainModel->getCorrectionAction($car_id);

        $correction = $this->input->post('correction');
        $correction_person_responsible = $this->input->post('correction_person_responsible');
        $correction_person_responsible_url = $this->input->post('correction_person_responsible_url');
        $correction_completion_date = $this->input->post('correction_completion_date');


        if(!empty($car)){
            $correction_entry = json_decode($car[0]['correction_entry'], true);

            if(empty($correction_entry)){
                $correction_entry = array();
            }
        } else {
            $correction_entry = array();
        }
    
        foreach($correction as $key => $value){
            if($correction[$key]){
                $correction_entry[$key]['correction'] = isset($correction[$key]) ? $correction[$key] : "";
                $correction_entry[$key]['correction_person_responsible'] = isset($correction_person_responsible[$key]) ? $correction_person_responsible[$key] : "";
                $correction_entry[$key]['correction_person_responsible_url'] = isset($correction_person_responsible_url[$key]) ? $correction_person_responsible_url[$key] : "";
                $correction_entry[$key]['correction_completion_date'] = isset($correction_completion_date[$key]) ? $correction_completion_date[$key] : "";
            }
            
        }
        
        //array
        $consequence = $this->input->post('consequence');
        $consequence_person_responsible = $this->input->post('consequence_person_responsible');
        $consequence_person_responsible_url = $this->input->post('consequence_person_responsible_url');
        $consequence_completion_date = $this->input->post('consequence_completion_date');

        if(!empty($car)){
            $consequence_entry = json_decode($car[0]['consequence_entry'], true);

            if(empty($consequence_entry)){
                $consequence_entry = array();
            }
        } else {
            $consequence_entry = array();
        }
    
        foreach($consequence as $key => $value){
            if($consequence[$key]){
                $consequence_entry[$key]['consequence'] = isset($consequence[$key]) ? $consequence[$key] : "";
                $consequence_entry[$key]['consequence_person_responsible'] = isset($consequence_person_responsible[$key]) ? $consequence_person_responsible[$key] : "";
                $consequence_entry[$key]['consequence_person_responsible_url'] = isset($consequence_person_responsible_url[$key]) ? $consequence_person_responsible_url[$key] : "";
                $consequence_entry[$key]['consequence_completion_date'] = isset($consequence_completion_date[$key]) ? $consequence_completion_date[$key] : "";

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

        $car = $this->MainModel->getCarByID($car_id);

        $for_correction_status = $car['0']['for_correction_status'];

        if($for_correction_status == "For Implementation"){
            $cardata = array(
                'for_correction_status' => 'For Verification'
            );
        } else {
            $cardata = array(
                'for_correction_status' => 'For OSQM Review'
            );
        }

        $this->db->where('id', $car_id);
        $result = $this->db->update('car', $cardata);
        
        if ($result) {

            if($cardata['for_correction_status'] == 'For OSQM Review'){

                $car = $this->MainModel->getCarByID($car_id);

                $dco = $this->UsersModel->fetchUserByRole('osqm_dco');
                $do = $this->UsersModel->fetchUserByRole('osqm_do');
                
                foreach( $dco as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 2: Correction is need for OSQM Review', 'CAR');
                }

                foreach( $do as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 2: Correction is need for OSQM Review', 'CAR');
                }
            } else if($cardata['for_correction_status'] == 'For Verification'){

                $car = $this->MainModel->getCarByID($car_id);

                $source = $car[0]['source'];

                if($source == 1){
                    $head = $this->UsersModel->fetchUserBySectAndRole('chair', 'internal_quality_audit');

                    foreach( $head as $value){
                        $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 2: Correction is need for Verfication', 'CAR');
                    }
                }

                if($source == 2){
                    $head = $this->UsersModel->fetchUserBySectAndRole('auditor', 'internal_quality_audit');

                    foreach( $head as $value){
                        $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 2: Correction is need for Verfication', 'CAR');
                    }
                }

                if($source == 3 || $source == 4 || $source == 5 || $source == 6 || $source == 7){
                    if($car[0]['section']){
                        $head = $this->UsersModel->fetchUserByDeptSectAndRole('dqt_member', $car[0]['section']);
                    } else if($car[0]['issued_to']){
                        $head = $this->UsersModel->fetchUserByDeptAndRole('dqt_member', $car[0]['issued_to']);
                    }

                    foreach( $head as $value){
                        $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 2: Correction is need for Verfication', 'CAR');
                    }
                }

                if($source == 8){
                    $head = $this->UsersModel->fetchUserBySectAndRole('chair', 'customer_satisfaction_committee');

                    foreach( $head as $value){
                        $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 2: Correction is need for Verfication', 'CAR');
                    }
                }


            }

            $datahistory['car_id'] = $car_id;
            $datahistory['process'] = "Correction";
            $datahistory['status'] = $cardata['for_correction_status'];
            $datahistory['remarks'] = "";
            $this->MainModel->saveHistory($datahistory);


            echo 'saved';
        } else {
            echo 'error';
        }


    }

    public function saveClosing(){
        //array
        $car_id = $this->input->post('car_id');


        $closing_action = $this->input->post('closing_action');
        $closing_action_remarks = $this->input->post('closing_action_remarks');

        $data = array(
            'id' => $car_id,
            'closing_action' => json_encode($closing_action),
            'closing_action_remarks' => json_encode($closing_action_remarks),
        );

        $existing_record = $this->db->get_where('correction', array('car_id' => $car_id))->row();
        
        if ($existing_record) {
            // Car_id exists, perform an update
            $this->db->where('id', $car_id);
            $result = $this->db->update('car', $data);
        } else {
            // Car_id doesn't exist, perform an insert
            $result = $this->db->insert('car', $data);
        }

        $cardata = array(
            'for_correction_status' => $closing_action,
            'corrective_action_status' => $closing_action,
            'date_closed' => date('Y-m-d H:i:s')
        );

        $this->db->where('id', $car_id);
        $result = $this->db->update('car', $cardata);
        
        if ($result) {

            $car = $this->MainModel->getCarByID($car_id);

            if($closing_action == 'For Closure'){


                $dco = $this->UsersModel->fetchUserByRole('osqm_dco');
                $do = $this->UsersModel->fetchUserByRole('osqm_do');
                
                foreach( $dco as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') is closed', 'CAR');
                }

                foreach( $do as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') is closed', 'CAR');
                }

                $divchief = $this->UsersModel->fetchUserByDivAndRole('div_chief', $car[0]['issued_by']);

                foreach( $divchief as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') is closed', 'CAR');
                }

                if($car[0]['section']){
                    $head = $this->UsersModel->fetchUserByDeptSectAndRole('section_head', $car[0]['section']);
                } else if($car[0]['issued_to']){
                    $head = $this->UsersModel->fetchUserByDeptAndRole('department_head', $car[0]['issued_to']);
                }

                foreach( $head as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') is closed', 'CAR');
                }
            } else {
                if($car[0]['section']){
                    $head = $this->UsersModel->fetchUserByDeptSectAndRole('section_head', $car[0]['section']);
                } else if($car[0]['issued_to']){
                    $head = $this->UsersModel->fetchUserByDeptAndRole('department_head', $car[0]['issued_to']);
                }

                foreach( $head as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 2: Correction is for revision and need for action', 'CAR');
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 3&4: Corrective Action is for revision and need for action', 'CAR');
                }
            }

            echo 'saved';
        } else {
            echo 'error';
        }


    }

    public function saveCorrectionFR(){
        //array
        $car_id = $this->input->post('car_id');
        $car = $this->MainModel->getCorrectionAction($car_id);

        $review_correction_dealing_with_consequences = $this->input->post('review_correction_dealing_with_consequences');
        $review_correction_dealing_with_consequences_remarks = $this->input->post('review_correction_dealing_with_consequences_remarks');

        $correction_entry = array();

        $correction = $this->input->post('correction');
        $correction_person_responsible = $this->input->post('correction_person_responsible');
        $correction_person_responsible_url = $this->input->post('correction_person_responsible_url');
        $correction_completion_date = $this->input->post('correction_completion_date');


        $correction_entry = json_decode($car[0]['correction_entry'], true);

        if(empty($correction_entry)){
            $correction_entry = array();
        }

        foreach($correction as $key => $value){
            if($correction[$key]){
                $correction_entry[$key]['correction'] = isset($correction[$key]) ? $correction[$key] : "";
                $correction_entry[$key]['correction_person_responsible'] = isset($correction_person_responsible[$key]) ? $correction_person_responsible[$key] : "";
                $correction_entry[$key]['correction_person_responsible_url'] = isset($correction_person_responsible_url[$key]) ? $correction_person_responsible_url[$key] : "";
                $correction_entry[$key]['correction_completion_date'] = isset($correction_completion_date[$key]) ? $correction_completion_date[$key] : "";

            }
            
        }
        
        $consequence_entry = json_decode($car[0]['consequence_entry'], true);

        if(empty($consequence_entry)){
            $consequence_entry = array();
        }

        //array
        $consequence = $this->input->post('consequence');
        $consequence_person_responsible = $this->input->post('consequence_person_responsible');
        $consequence_person_responsible_url = $this->input->post('consequence_person_responsible_url');
        $consequence_completion_date = $this->input->post('consequence_completion_date');


    
        foreach($consequence as $key => $value){
            if($consequence[$key]){
                $consequence_entry[$key]['consequence'] = isset($consequence[$key]) ? $consequence[$key] : "";
                $consequence_entry[$key]['consequence_person_responsible'] = isset($consequence_person_responsible[$key]) ? $consequence_person_responsible[$key] : "";
                $consequence_entry[$key]['consequence_person_responsible_url'] = isset($consequence_person_responsible_url[$key]) ? $consequence_person_responsible_url[$key] : "";
                $consequence_entry[$key]['consequence_completion_date'] = isset($consequence_completion_date[$key]) ? $consequence_completion_date[$key] : "";
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

            if($cardata['for_correction_status'] == 'For Approval'){

                $car = $this->MainModel->getCarByID($car_id);
                $divchief = $this->UsersModel->fetchUserByDivAndRole('div_chief', $car[0]['issued_by']);

                foreach( $divchief as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 2: Correction is need for Approval', 'CAR');
                }
            } else if($cardata['for_correction_status'] == 'For Revision'){

                $car = $this->MainModel->getCarByID($car_id);

                if($car[0]['section']){
                    $head = $this->UsersModel->fetchUserByDeptSectAndRole('section_head', $car[0]['section']);
                } else if($car[0]['issued_to']){
                    $head = $this->UsersModel->fetchUserByDeptAndRole('department_head', $car[0]['issued_to']);
                }

                foreach( $head as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 2: Correction is for revision and need for action', 'CAR');
                }
            }

            $datahistory['car_id'] = $car_id;
            $datahistory['process'] = "Correction - For OSQM Review";
            $datahistory['status'] = $cardata['for_correction_status'];
            $datahistory['remarks'] = $review_correction_dealing_with_consequences_remarks;
            $this->MainModel->saveHistory($datahistory);


            echo 'saved';
        } else {
            echo 'error';
        }
    }

    public function saveCorrectionFA(){
        //array
        $car_id = $this->input->post('car_id');
        $car = $this->MainModel->getCorrectionAction($car_id);
        $approval_correction_dealing_with_consequences = $this->input->post('approval_correction_dealing_with_consequences');
        $approval_correction_dealing_with_consequences_remarks = $this->input->post('approval_correction_dealing_with_consequences_remarks');
    
        $correction_entry = json_decode($car[0]['correction_entry'], true);

        if(empty($correction_entry)){
            $correction_entry = array();
        }


        $correction = $this->input->post('correction');
        $correction_person_responsible = $this->input->post('correction_person_responsible');
        $correction_person_responsible_url = $this->input->post('correction_person_responsible_url');
        $correction_completion_date = $this->input->post('correction_completion_date');


    
        foreach($correction as $key => $value){
            if($correction[$key]){
                $correction_entry[$key]['correction'] = isset($correction[$key]) ? $correction[$key] : "";
                $correction_entry[$key]['correction_person_responsible'] = isset($correction_person_responsible[$key]) ? $correction_person_responsible[$key] : "";
                $correction_entry[$key]['correction_person_responsible_url'] = isset($correction_person_responsible_url[$key]) ? $correction_person_responsible_url[$key] : "";
                $correction_entry[$key]['correction_completion_date'] = isset($correction_completion_date[$key]) ? $correction_completion_date[$key] : "";

            }
            
        }
        
        $consequence_entry = json_decode($car[0]['consequence_entry'], true);

        if(empty($consequence_entry)){
            $consequence_entry = array();
        }

        //array
        $consequence = $this->input->post('consequence');
        $consequence_person_responsible = $this->input->post('consequence_person_responsible');
        $consequence_person_responsible_url = $this->input->post('consequence_person_responsible_url');
        $consequence_completion_date = $this->input->post('consequence_completion_date');


    
        foreach($consequence as $key => $value){
            if($consequence[$key]){
                $consequence_entry[$key]['consequence'] = isset($consequence[$key]) ? $consequence[$key] : "";
                $consequence_entry[$key]['consequence_person_responsible'] = isset($consequence_person_responsible[$key]) ? $consequence_person_responsible[$key] : "";
                $consequence_entry[$key]['consequence_person_responsible_url'] = isset($consequence_person_responsible_url[$key]) ? $consequence_person_responsible_url[$key] : "";
                $consequence_entry[$key]['consequence_completion_date'] = isset($consequence_completion_date[$key]) ? $consequence_completion_date[$key] : "";

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

            
            if($cardata['for_correction_status'] == 'For Implementation'){

                $car = $this->MainModel->getCarByID($car_id);
                
                if($car[0]['section']){
                    $head = $this->UsersModel->fetchUserByDeptSectAndRole('section_head', $car[0]['section']);
                } else if($car[0]['issued_to']){
                    $head = $this->UsersModel->fetchUserByDeptAndRole('department_head', $car[0]['issued_to']);
                }

                foreach( $head as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 2: Correction is for Implementation', 'CAR');
                }
            } else if($cardata['for_correction_status'] == 'For Revision'){

                $car = $this->MainModel->getCarByID($car_id);

                if($car[0]['section']){
                    $head = $this->UsersModel->fetchUserByDeptSectAndRole('section_head', $car[0]['section']);
                } else if($car[0]['issued_to']){
                    $head = $this->UsersModel->fetchUserByDeptAndRole('department_head', $car[0]['issued_to']);
                }

                foreach( $head as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 2: Correction is for revision and need for action', 'CAR');
                }
            }

            $datahistory['car_id'] = $car_id;
            $datahistory['process'] = "Correction - For Approval";
            $datahistory['status'] = $cardata['for_correction_status'];
            $datahistory['remarks'] = $approval_correction_dealing_with_consequences_remarks;
            $this->MainModel->saveHistory($datahistory);

            echo 'saved';
        } else {
            echo 'error';
        }
    }

    public function saveCorrectionFV(){
        //array
        $car_id = $this->input->post('car_id');
        $car = $this->MainModel->getCorrectionAction($car_id);
        $verification_correction_dealing_with_consequences = $this->input->post('verification_correction_dealing_with_consequences');
        $verification_correction_dealing_with_consequences_remarks = $this->input->post('verification_correction_dealing_with_consequences_remarks');
    
        $correction_entry = json_decode($car[0]['correction_entry'], true);

        if(empty($correction_entry)){
            $correction_entry = array();
        }

        $correction = $this->input->post('correction');
        $correction_person_responsible = $this->input->post('correction_person_responsible');
        $correction_person_responsible_url = $this->input->post('correction_person_responsible_url');
        $correction_completion_date = $this->input->post('correction_completion_date');
        $correction_acceptable_verification = $this->input->post('correction_acceptable_verification');
        $correction_acceptable_remarks_verification = $this->input->post('correction_acceptable_remarks_verification');

    
        foreach($correction as $key => $value){
            if($correction[$key]){
                $correction_entry[$key]['correction'] = isset($correction[$key]) ? $correction[$key] : "";
                $correction_entry[$key]['correction_person_responsible'] = isset($correction_person_responsible[$key]) ? $correction_person_responsible[$key] : "";
                $correction_entry[$key]['correction_person_responsible_url'] = isset($correction_person_responsible_url[$key]) ? $correction_person_responsible_url[$key] : "";
                $correction_entry[$key]['correction_completion_date'] = isset($correction_completion_date[$key]) ? $correction_completion_date[$key] : "";
                $correction_entry[$key]['correction_acceptable_verification'] = isset($correction_acceptable_verification[$key]) ? $correction_acceptable_verification[$key] : "";
                $correction_entry[$key]['correction_acceptable_remarks_verification'] = isset($correction_acceptable_remarks_verification[$key]) ? $correction_acceptable_remarks_verification[$key] : "";

            }
            
        }
        
        $consequence_entry = json_decode($car[0]['consequence_entry'], true);

        if(empty($consequence_entry)){
            $consequence_entry = array();
        }

        //array
        $consequence = $this->input->post('consequence');
        $consequence_person_responsible = $this->input->post('consequence_person_responsible');
        $consequence_person_responsible_url = $this->input->post('consequence_person_responsible_url');
        $consequence_completion_date = $this->input->post('consequence_completion_date');
        $consequence_acceptable_verification = $this->input->post('consequence_acceptable_verification');
        $consequence_acceptable_remarks_verification = $this->input->post('consequence_acceptable_remarks_verification');

    
        foreach($consequence as $key => $value){
            if($consequence[$key]){
                $consequence_entry[$key]['consequence'] = isset($consequence[$key]) ? $consequence[$key] : "";
                $consequence_entry[$key]['consequence_person_responsible'] = isset($consequence_person_responsible[$key]) ? $consequence_person_responsible[$key] : "";
                $consequence_entry[$key]['consequence_person_responsible_url'] = isset($consequence_person_responsible_url[$key]) ? $consequence_person_responsible_url[$key] : "";
                $consequence_entry[$key]['consequence_completion_date'] = isset($consequence_completion_date[$key]) ? $consequence_completion_date[$key] : "";
                $consequence_entry[$key]['consequence_acceptable_verification'] = isset($consequence_acceptable_verification[$key]) ? $consequence_acceptable_verification[$key] : "";
                $consequence_entry[$key]['consequence_acceptable_remarks_verification'] = isset($consequence_acceptable_remarks_verification[$key]) ? $consequence_acceptable_remarks_verification[$key] : "";

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

            $car = $this->MainModel->getCarByID($car_id);

            if( $cardata['for_correction_status'] == 'For Validation'){
                $head = $this->UsersModel->fetchUserBySectAndRole('lead_auditor', 'internal_quality_audit');

                foreach( $head as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 2: Correction is need for Validation', 'CAR');
                }
    
                $datahistory['car_id'] = $car_id;
                $datahistory['process'] = "Correction - For Verification";
                $datahistory['status'] = $cardata['for_correction_status'];
                $datahistory['remarks'] = $verification_correction_dealing_with_consequences_remarks;
                $this->MainModel->saveHistory($datahistory);
            } else if($cardata['for_correction_status'] == 'For Revision'){
                
                $car = $this->MainModel->getCarByID($car_id);
                if($car[0]['section']){
                    $head = $this->UsersModel->fetchUserByDeptSectAndRole('section_head', $car[0]['section']);
                } else if($car[0]['issued_to']){
                    $head = $this->UsersModel->fetchUserByDeptAndRole('department_head', $car[0]['issued_to']);
                }

                foreach( $head as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 2: Correction is for revision and need for action', 'CAR');
                }
            }


            echo 'saved';
        } else {
            echo 'error';
        }
    }

    public function saveCorrectionFVA(){
        //array
        $car_id = $this->input->post('car_id');
        $car = $this->MainModel->getCorrectionAction($car_id);

        $validation_correction_dealing_with_consequences = $this->input->post('validation_correction_dealing_with_consequences');
        $validation_correction_dealing_with_consequences_remarks = $this->input->post('validation_correction_dealing_with_consequences_remarks');
    
        $correction_entry = json_decode($car[0]['correction_entry'], true);

        if(empty($correction_entry)){
            $correction_entry = array();
        }

        $correction = $this->input->post('correction');
        $correction_person_responsible = $this->input->post('correction_person_responsible');
        $correction_person_responsible_url = $this->input->post('correction_person_responsible_url');
        $correction_completion_date = $this->input->post('correction_completion_date');


        $consequence_entry = json_decode($car[0]['consequence_entry'], true);

        if(empty($consequence_entry)){
            $consequence_entry = array();
        }

        //array
        $consequence = $this->input->post('consequence');
        $consequence_person_responsible = $this->input->post('consequence_person_responsible');
        $consequence_person_responsible_url = $this->input->post('consequence_person_responsible_url');
        $consequence_completion_date = $this->input->post('consequence_completion_date');


    
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

            if($cardata['for_correction_status'] == 'For Closure'){
                $car = $this->MainModel->getCarByID($car_id);

                $qmr = $this->UsersModel->fetchUserByRole('osqm_qmr');
                
                foreach( $qmr as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 2: Correction is for Closure', 'CAR');
                }
            }else if($cardata['for_correction_status'] == 'For Revision'){

                $car = $this->MainModel->getCarByID($car_id);
                if($car[0]['section']){
                    $head = $this->UsersModel->fetchUserByDeptSectAndRole('section_head', $car[0]['section']);
                } else if($car[0]['issued_to']){
                    $head = $this->UsersModel->fetchUserByDeptAndRole('department_head', $car[0]['issued_to']);
                }

                foreach( $head as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 2: Correction is for revision and need for action', 'CAR');
                }
            }
            

            $datahistory['car_id'] = $car_id;
            $datahistory['process'] = "Correction - For Validation";
            $datahistory['status'] = $cardata['for_correction_status'];
            $datahistory['remarks'] = $validation_correction_dealing_with_consequences_remarks;
            $this->MainModel->saveHistory($datahistory);

            echo 'saved';
        } else {
            echo 'error';
        }
    }

    // function handleFileUpload($key, $custom_config = array()) {
    //     $CI = get_instance();
    //     $CI->load->library('upload');
    //     $CI->load->helper('string'); // Load the string helper to use random_string function
    
    //     // Merge custom configuration with default configuration
    //     $default_config = array(
    //         'upload_path'   => FCPATH . 'uploads/',
    //         'allowed_types' => 'gif|jpg|png|pdf|docx|doc',  // Adjust as needed
    //     );
    
    //     $config = array_merge($default_config, $custom_config);
    
    //     $CI->upload->initialize($config);
    
    //     $files = $_FILES[$key];
        
    //     $attachments = array();
    
    //     foreach ($files['name'] as $index => $name) {
    //         $_FILES[$key] = array(
    //             'name'     => $files['name'][$index],
    //             'type'     => $files['type'][$index],
    //             'tmp_name' => $files['tmp_name'][$index],
    //             'error'    => $files['error'][$index],
    //             'size'     => $files['size'][$index]
    //         );
    
    //         if ($CI->upload->do_upload($key)) {
    //             $upload_data = $CI->upload->data();
    //             $file_ext = pathinfo($upload_data['file_name'], PATHINFO_EXTENSION); // Get file extension
    //             $new_file_name = random_string('alnum', 8) . '_' . time() . '.' . $file_ext; // Generate unique file name
    //             $new_file_path = $config['upload_path'] . $new_file_name;
    //             // Rename the uploaded file
    //             rename($config['upload_path'] . $upload_data['file_name'], $new_file_path);
    //             $attachments[$key][] = $new_file_name;
    //         } else {
    //             // Handle upload error
    //             // print_r($CI->upload->display_errors());
    //         }
    //     }
    
    //     return $attachments;
    // }

    

    public function saveRoot(){

        $car_id = $this->input->post('car_id');

        $car = $this->MainModel->getCorrectiveAction($car_id);
        
        // Handle each array of file uploads

        // var_dump( $risk_attachments);
        $action_root_cause_analysis = $this->input->post('action_root_cause_analysis');
        $existing_nonconformity = $this->input->post('existing_nonconformity');
        $existing_nonconformity_remarks = $this->input->post('existing_nonconformity_remarks');
        $update_doc_info = $this->input->post('update_doc_info');
        $update_doc_info_remarks = $this->input->post('update_doc_info_remarks');
    
        //array
        
    
        $risk_number = $this->input->post('risk_number');
        $risk_number_details_update = $this->input->post('risk_number_details_update');
        $risk_number_attachment_url = $this->input->post('risk_number_attachment_url');
        
        if(!empty($car)){
            $risk_entry = json_decode($car[0]['risk_entry'], true);

            if(empty($risk_entry)){
                $risk_entry = array();
            }
        } else {
            $risk_entry = array();
        }
        
        if(isset($risk_number) && is_array($risk_number)){
            foreach ($risk_number as $key => $value) {
                // Check if any of the conditions is true
    
                    // Construct the risk_entry array
                if($risk_number[$key]){
                    $risk_entry[$key]['risk_number'] = $risk_number[$key];
                    $risk_entry[$key]['risk_number_details_update'] = isset($risk_number_details_update[$key]) ? $risk_number_details_update[$key] : "";
                    $risk_entry[$key]['risk_number_attachment_url'] = isset($risk_number_attachment_url[$key]) ? $risk_number_attachment_url[$key] : "";
                }
            }
        }
        
        $opportunity_identified_yn = $this->input->post('opportunity_identified_yn');
    
        //array
        $opportunity_number = $this->input->post('opportunity_number');
        $opportunity_identified = $this->input->post('opportunity_identified');
        $opportunity_number_attachment_url = $this->input->post('opportunity_number_attachment_url');

        if(!empty($car)){
            $opportunity_entry = json_decode($car[0]['opportunity_entry'], true);

            if(empty($opportunity_entry)){
                $opportunity_entry = array();
            }
        } else {
            $opportunity_entry = array();
        }
        

        if(isset($opportunity_number) && is_array($opportunity_number)){
            foreach ($opportunity_number as $key => $value) {
                // Check if any of the conditions is true
                    // Construct the opportunity_entry array
                    if($opportunity_number[$key]){
                        $opportunity_entry[$key]['opportunity_number'] = $opportunity_number[$key];
                        $opportunity_entry[$key]['opportunity_identified'] =  isset($opportunity_identified[$key]) ? $opportunity_identified[$key] : "";
                        $opportunity_entry[$key]['opportunity_number_attachment_url'] = isset($opportunity_number_attachment_url[$key]) ? $opportunity_number_attachment_url[$key] : "";
                    }
            }
        }
    
        //array
        $rootcause = $this->input->post('rootcause');
        $rootcause_file_url = $this->input->post('rootcause_file_url');
        

        if(!empty($car)){
            $rootcause_entry = json_decode($car[0]['root_cause_entry'], true);

            if(empty($rootcause_entry)){
                $rootcause_entry = array();
            }
        } else {
            $rootcause_entry = array();
        }
    
        if(isset($rootcause) && is_array($rootcause)){
            foreach ($rootcause as $key => $value) {
                // Check if any of the conditions is true
                // Construct the rootcause_entry array
                if($rootcause[$key]){
                    $rootcause_entry[$key]['rootcause'] = $rootcause[$key];
                    $rootcause_entry[$key]['rootcause_file_url'] = isset($rootcause_file_url[$key]) ? $rootcause_file_url[$key] : "";
                }
                    
            }
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


        if(!empty($car)){
            $identified_entry = json_decode($car[0]['identified_root_entry'], true);

            if(empty($identified_entry)){
                $identified_entry = array();
            }
        } else {
            $identified_entry = array();
        }
        
        if(isset($identified_root) && is_array($identified_root)){
            foreach ($identified_root as $key => $value) {
                    // Check if any of the conditions is true
                    // Construct the identified_entry array
                    if($identified_root[$key]){
                        $identified_entry[$key]['identified_root'] = $identified_root[$key];
                        $identified_entry[$key]['tpn_control'] = isset($tpn_control[$key]) ? $tpn_control[$key] : ""; // Added isset check
                        $identified_entry[$key]['identified_root_corrective_action'] = isset($identified_root_corrective_action[$key]) ? $identified_root_corrective_action[$key] : "";
                        $identified_entry[$key]['identified_root_person_responsible'] = isset($identified_root_person_responsible[$key]) ? $identified_root_person_responsible[$key] : "";
                        $identified_entry[$key]['identified_root_completion_date'] = isset($identified_root_completion_date[$key]) ? $identified_root_completion_date[$key] : "";
                        $identified_entry[$key]['identified_root_attachment_url'] = isset($identified_root_attachment_url[$key]) ? $identified_root_attachment_url[$key] : "";
                        $identified_entry[$key]['tpn_issued_by'] = isset($tpn_issued_by[$key]) ? $tpn_issued_by[$key] : "";
                        $identified_entry[$key]['tpn_issued_to'] = isset($tpn_issued_to[$key]) ? $tpn_issued_to[$key] : "";
                        $identified_entry[$key]['tpn_section'] = isset($tpn_section[$key]) ? $tpn_section[$key] : "";
                    }
            }
        }

        // print_r($identified_entry);
        // exit;
        
    
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

        // print_r($data);
        // exit;
     
        if ($existing_record) {
            // Car_id exists, perform an update
            $this->db->where('car_id', $car_id);
            $result = $this->db->update('corrective_action', $data);
        } else {
            // Car_id doesn't exist, perform an insert
            $result = $this->db->insert('corrective_action', $data);
        }

        $car = $this->MainModel->getCarByID($car_id);

        $corrective_action_status = $car['0']['corrective_action_status'];

        if($corrective_action_status == "For Implementation"){
            $cardata = array(
                'corrective_action_status' => 'For Verification'
            );
        } else {
            $cardata = array(
                'corrective_action_status' => $action_root_cause_analysis
            );
        }

        $this->db->where('id', $car_id);
        $result = $this->db->update('car', $cardata);
        
        if ($result) {


            if($cardata['corrective_action_status'] == 'For OSQM Review'){

                $car = $this->MainModel->getCarByID($car_id);

                $dco = $this->UsersModel->fetchUserByRole('osqm_dco');
                $do = $this->UsersModel->fetchUserByRole('osqm_do');
                
                foreach( $dco as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 3&4: Corrective Action is need for OSQM Review', 'CAR');
                }

                foreach( $do as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 3&4: Corrective Action is need for OSQM Review', 'CAR');
                }
            } else if($cardata['corrective_action_status'] == 'For Verification'){

                $car = $this->MainModel->getCarByID($car_id);

                $source = $car[0]['source'];

                if($source == 1){
                    $head = $this->UsersModel->fetchUserBySectAndRole('chair', 'internal_quality_audit');

                    foreach( $head as $value){
                        $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 3&4: Corrective Action is need for Verfication', 'CAR');
                    }
                }

                if($source == 2){
                    $head = $this->UsersModel->fetchUserBySectAndRole('auditor', 'internal_quality_audit');

                    foreach( $head as $value){
                        $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 3&4: Corrective Action is need for Verfication', 'CAR');
                    }
                }

                if($source == 3 || $source == 4 || $source == 5 || $source == 6 || $source == 7){
                    if($car[0]['section']){
                        $head = $this->UsersModel->fetchUserByDeptSectAndRole('dqt_member', $car[0]['section']);
                    } else if($car[0]['issued_to']){
                        $head = $this->UsersModel->fetchUserByDeptAndRole('dqt_member', $car[0]['issued_to']);
                    }

                    foreach( $head as $value){
                        $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 3&4: Corrective Action is need for Verfication', 'CAR');
                    }
                }

                if($source == 8){
                    $head = $this->UsersModel->fetchUserBySectAndRole('chair', 'customer_satisfaction_committee');

                    foreach( $head as $value){
                        $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 3&4: Corrective Action is need for Verfication', 'CAR');
                    }
                }


            }else if($cardata['corrective_action_status'] == 'For Revision') {
                if($car[0]['section']){
                    $head = $this->UsersModel->fetchUserByDeptSectAndRole('section_head', $car[0]['section']);
                } else if($car[0]['issued_to']){
                    $head = $this->UsersModel->fetchUserByDeptAndRole('department_head', $car[0]['issued_to']);
                }

                foreach( $head as $value){
                   $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 3&4: Corrective Action is for revision and need for action', 'CAR');
                }
            }

            $datahistory['car_id'] = $car_id;
            $datahistory['process'] = "Corrective Action";
            $datahistory['status'] = $cardata['corrective_action_status'];
            $datahistory['remarks'] = "";
            $this->MainModel->saveHistory($datahistory);


            echo 'saved';
        } else {
            echo 'error';
        }
    }

    public function saveRootFR(){

        $car_id = $this->input->post('car_id');

        $car = $this->MainModel->getCorrectiveAction($car_id);

        $review_action_root_cause_analysis = $this->input->post('review_action_root_cause_analysis');
        $review_action_root_cause_analysis_remarks = $this->input->post('review_action_root_cause_analysis_remarks');
   
    
        $existing_nonconformity = $this->input->post('existing_nonconformity');
        $existing_nonconformity_remarks = $this->input->post('existing_nonconformity_remarks');
        $update_doc_info = $this->input->post('update_doc_info');
        $update_doc_info_remarks = $this->input->post('update_doc_info_remarks');
    
        $risk_number = $this->input->post('risk_number');
        $risk_number_details_update = $this->input->post('risk_number_details_update');
        $risk_attachments = $this->input->post('risk_attachments');
        $risk_number_attachment_url = $this->input->post('risk_number_attachment_url');


    

        $risk_entry = json_decode($car[0]['risk_entry'], true);

        if(empty($risk_entry)){
            $risk_entry = array();
        }
        
        if(isset($risk_number) && is_array($risk_number)){
            foreach($risk_number as $key => $value){
            
                $risk_entry[$key]['risk_number'] = $risk_number[$key];
                $risk_entry[$key]['risk_number_details_update'] = $risk_number_details_update[$key];
                $risk_entry[$key]['risk_number_attachment_url'] = $risk_number_attachment_url[$key];
            }
        }
        
        
        $car_id = $this->input->post('car_id');
        $opportunity_identified_yn = $this->input->post('opportunity_identified_yn');
    
        //array
        $opportunity_number = $this->input->post('opportunity_number');
        $opportunity_number_attachment_url = $this->input->post('opportunity_number_attachment_url');
        $opportunity_identified = $this->input->post('opportunity_identified');
        $opportunity_attachments = $this->input->post('opportunity_attachments');




    

        $opportunity_entry = json_decode($car[0]['opportunity_entry'], true);

        if(empty($opportunity_entry)){
            $opportunity_entry = array();
        }
    
        if(isset($opportunity_number) && is_array($opportunity_number)){
            foreach($opportunity_number as $key => $value){
            
                $opportunity_entry[$key]['opportunity_number'] = $opportunity_number[$key];
                $opportunity_entry[$key]['opportunity_number_attachment_url'] = $opportunity_number_attachment_url[$key];
                $opportunity_entry[$key]['opportunity_identified'] = $opportunity_identified[$key];
            }
        }
        
    
        //array
        $rootcause = $this->input->post('rootcause');
        $rootcause_attachments =  $this->input->post('rootcause_attachments');
        $rootcause_file_url = $this->input->post('rootcause_file_url');


        
        
        $rootcause_entry = json_decode($car[0]['root_cause_entry'], true);

        if(empty($rootcause_entry)){
            $rootcause_entry = array();
        }
        

        if(isset($rootcause) && is_array($rootcause)){
            foreach($rootcause as $key => $value){

                $rootcause_entry[$key]['rootcause'] = $rootcause[$key];
                $rootcause_entry[$key]['rootcause_file_url'] = $rootcause_file_url[$key];
                
    
            }
        }
        
        //array
        $identified_root = $this->input->post('identified_root');
        $tpn_control = $this->input->post('tpn_control');
        $identified_root_corrective_action = $this->input->post('identified_root_corrective_action');
        $identified_root_person_responsible = $this->input->post('identified_root_person_responsible');
        $identified_root_completion_date = $this->input->post('identified_root_completion_date');
        $identified_attachments = $this->input->post('identified_attachments');
        $identified_root_attachment_url = $this->input->post('identified_root_attachment_url');

        

        $tpn_issued_by = $this->input->post('tpn_issued_by');
        $tpn_issued_to = $this->input->post('tpn_issued_to');
        $tpn_section = $this->input->post('tpn_section');

        $identified_entry = json_decode($car[0]['identified_root_entry'], true);

        if(empty($identified_entry)){
            $identified_entry = array();
        }
        
        if(isset($identified_root) && is_array($identified_root)){
            foreach($identified_root as $key => $value){


                $identified_entry[$key]['identified_root'] = $identified_root[$key];
                $identified_entry[$key]['tpn_control'] = $tpn_control[$key];
                $identified_entry[$key]['identified_root_corrective_action'] = $identified_root_corrective_action[$key];
                $identified_entry[$key]['identified_root_person_responsible'] = $identified_root_person_responsible[$key];
                $identified_entry[$key]['identified_root_completion_date'] = $identified_root_completion_date[$key];
                $identified_entry[$key]['identified_root_attachment_url'] = $identified_root_attachment_url[$key];
                
                $identified_entry[$key]['tpn_issued_by'] = isset($tpn_issued_by[$key]) ? $tpn_issued_by[$key] : "";
                $identified_entry[$key]['tpn_issued_to'] = isset($tpn_issued_to[$key]) ? $tpn_issued_to[$key] : "";
                $identified_entry[$key]['tpn_section'] = isset($tpn_section[$key]) ? $tpn_section[$key] : "";
            }
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

            if($cardata['corrective_action_status'] == 'For Approval'){

                $car = $this->MainModel->getCarByID($car_id);
                $divchief = $this->UsersModel->fetchUserByDivAndRole('div_chief', $car[0]['issued_by']);

                foreach( $divchief as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 3&4: Corrective Action is need for Approval', 'CAR');
                }
            }else if($cardata['corrective_action_status'] == 'For Revision') {

                $car = $this->MainModel->getCarByID($car_id);

                if($car[0]['section']){
                    $head = $this->UsersModel->fetchUserByDeptSectAndRole('section_head', $car[0]['section']);
                } else if($car[0]['issued_to']){
                    $head = $this->UsersModel->fetchUserByDeptAndRole('department_head', $car[0]['issued_to']);
                }

                foreach( $head as $value){
                   $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 3&4: Corrective Action is for revision and need for action', 'CAR');
                }
            }

            $datahistory['car_id'] = $car_id;
            $datahistory['process'] = "Corrective Action - For OSQM Review";
            $datahistory['status'] = $cardata['corrective_action_status'];
            $datahistory['remarks'] = $review_action_root_cause_analysis_remarks;
            $this->MainModel->saveHistory($datahistory);

            echo 'saved';
        } else {
            echo 'error';
        }
    }

    public function saveRootFA(){

        $car_id = $this->input->post('car_id');

        $car = $this->MainModel->getCorrectiveAction($car_id);

        $approval_action_root_cause_analysis = $this->input->post('approval_action_root_cause_analysis');
        $approval_action_root_cause_analysis_remarks = $this->input->post('approval_action_root_cause_analysis_remarks');
   
        //array

        $existing_nonconformity = $this->input->post('existing_nonconformity');
        $existing_nonconformity_remarks = $this->input->post('existing_nonconformity_remarks');
        $update_doc_info = $this->input->post('update_doc_info');
        $update_doc_info_remarks = $this->input->post('update_doc_info_remarks');
    
        $risk_number = $this->input->post('risk_number');
        $risk_number_details_update = $this->input->post('risk_number_details_update');
        $risk_attachments = $this->input->post('risk_attachments');
        $risk_number_attachment_url = $this->input->post('risk_number_attachment_url');
        

        $risk_entry = json_decode($car[0]['risk_entry'], true);

        if(empty($risk_entry)){
            $risk_entry = array();
        }
        
        if(isset($risk_number) && is_array($risk_number)){
            foreach($risk_number as $key => $value){

                $risk_entry[$key]['risk_number'] = $risk_number[$key];
                $risk_entry[$key]['risk_number_details_update'] = $risk_number_details_update[$key];
                $risk_entry[$key]['risk_number_attachment_url'] = $risk_number_attachment_url[$key];
                
                
            }
        }
        
        
        $car_id = $this->input->post('car_id');
        $opportunity_identified_yn = $this->input->post('opportunity_identified_yn');
    
        //array
        $opportunity_number = $this->input->post('opportunity_number');
        $opportunity_number_attachment_url = $this->input->post('opportunity_number_attachment_url');
        $opportunity_identified = $this->input->post('opportunity_identified');
        $opportunity_attachments = $this->input->post('opportunity_attachments');

        
    
        $opportunity_entry = json_decode($car[0]['opportunity_entry'], true);

        if(empty($opportunity_entry)){
            $opportunity_entry = array();
        }
    
        if(isset($opportunity_number) && is_array($opportunity_number)){
            foreach($opportunity_number as $key => $value){

                $opportunity_entry[$key]['opportunity_number'] = $opportunity_number[$key];
                $opportunity_entry[$key]['opportunity_number_attachment_url'] = $opportunity_number_attachment_url[$key];
                $opportunity_entry[$key]['opportunity_identified'] = $opportunity_identified[$key];
                
    
            }
        }
        
    
        //array
        $rootcause = $this->input->post('rootcause');
        $rootcause_attachments =  $this->input->post('rootcause_attachments');
        $rootcause_file_url = $this->input->post('rootcause_file_url');

        
        

        $rootcause_entry = json_decode($car[0]['root_cause_entry'], true);

        if(empty($rootcause_entry)){
            $rootcause_entry = array();
        }
        
        if(isset($rootcause) && is_array($rootcause)){
            foreach($rootcause as $key => $value){

                $rootcause_entry[$key]['rootcause'] = $rootcause[$key];
                $rootcause_entry[$key]['rootcause_file_url'] = $rootcause_file_url[$key];
                
    
            }
        }
        
    
        //array
        $identified_root = $this->input->post('identified_root');
        $tpn_control = $this->input->post('tpn_control');
        $identified_root_corrective_action = $this->input->post('identified_root_corrective_action');
        $identified_root_person_responsible = $this->input->post('identified_root_person_responsible');
        $identified_root_completion_date = $this->input->post('identified_root_completion_date');
        $identified_attachments = $this->input->post('identified_attachments');
        $identified_root_attachment_url = $this->input->post('identified_root_attachment_url');
        


        $tpn_issued_by = $this->input->post('tpn_issued_by');
        $tpn_issued_to = $this->input->post('tpn_issued_to');
        $tpn_section = $this->input->post('tpn_section');
    

        $identified_entry = json_decode($car[0]['identified_root_entry'], true);

        if(empty($identified_entry)){
            $identified_entry = array();
        }
        
        if(isset($identified_root) && is_array($identified_root)){


            foreach($identified_root as $key => $value){

                $identified_entry[$key]['identified_root'] = $identified_root[$key];
                $identified_entry[$key]['tpn_control'] = $tpn_control[$key];
                $identified_entry[$key]['identified_root_corrective_action'] = $identified_root_corrective_action[$key];
                $identified_entry[$key]['identified_root_person_responsible'] = $identified_root_person_responsible[$key];
                $identified_entry[$key]['identified_root_completion_date'] = $identified_root_completion_date[$key];
                $identified_entry[$key]['identified_root_attachment_url'] = $identified_root_attachment_url[$key];
                $identified_entry[$key]['tpn_issued_by'] = isset($tpn_issued_by[$key]) ? $tpn_issued_by[$key] : "";
                $identified_entry[$key]['tpn_issued_to'] = isset($tpn_issued_to[$key]) ? $tpn_issued_to[$key] : "";
                $identified_entry[$key]['tpn_section'] = isset($tpn_section[$key]) ? $tpn_section[$key] : "";
    
            }

            $latest_completion_date = null;

            foreach($identified_root_completion_date as $completion_date){
                // Convert completion date to timestamp
                $timestamp = strtotime($completion_date);
        
                // Compare with the latest completion date found so far
                if($timestamp && ($latest_completion_date === null || $timestamp > $latest_completion_date)){
                    $latest_completion_date = $timestamp;
                }
            }
        
            // Convert the latest completion date back to a readable format
            $latest_completion_date = date('Y-m-d', $latest_completion_date);
        
        }


        $currentDate = date_create_from_format('Y-m-d', $latest_completion_date);

        // Define a variable to count working days for 30-day expiry
        $expiryDate_30 = clone $currentDate;
        $expiryDate_30->modify('+1 day'); // Move to next day for 30-day expiry
        $workingDays_30 = 0;

        // Calculate 30 working days from now
        while ($workingDays_30 < 90) {
            // Add one day to the current date
            $expiryDate_30->modify('+1 day');

            // Skip weekends (Saturday and Sunday)
            if ($expiryDate_30->format('N') < 6) {
                $workingDays_30++;
            }
        }

        // Output the results
        $expiry_90_days = $expiryDate_30->format('Y-m-d');

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
            'corrective_action_status' => $approval_action_root_cause_analysis,
            'ca_second_completion_date' => $expiry_90_days,
        );

        $this->db->where('id', $car_id);
        $result = $this->db->update('car', $cardata);
        
        if ($result) {

            if($cardata['corrective_action_status'] == 'For Implementation'){

                $car = $this->MainModel->getCarByID($car_id);
                
                if($car[0]['section']){
                    $head = $this->UsersModel->fetchUserByDeptSectAndRole('section_head', $car[0]['section']);
                } else if($car[0]['issued_to']){
                    $head = $this->UsersModel->fetchUserByDeptAndRole('department_head', $car[0]['issued_to']);
                }

                foreach( $head as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 3&4: Corrective Action is for Implementation', 'CAR');
                }
            }else if($cardata['corrective_action_status'] == 'For Revision') {
                
                $car = $this->MainModel->getCarByID($car_id);

                if($car[0]['section']){
                    $head = $this->UsersModel->fetchUserByDeptSectAndRole('section_head', $car[0]['section']);
                } else if($car[0]['issued_to']){
                    $head = $this->UsersModel->fetchUserByDeptAndRole('department_head', $car[0]['issued_to']);
                }

                foreach( $head as $value){
                   $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 3&4: Corrective Action is for revision and need for action', 'CAR');
                }
            }

            $datahistory['car_id'] = $car_id;
            $datahistory['process'] = "Corrective Action - For Approval";
            $datahistory['status'] = $cardata['corrective_action_status'];
            $datahistory['remarks'] = $approval_action_root_cause_analysis_remarks;
            $this->MainModel->saveHistory($datahistory);


            echo 'saved';
        } else {
            echo 'error';
        }
    }

    public function saveRootFV(){

        $car_id = $this->input->post('car_id');

        $car = $this->MainModel->getCorrectiveAction($car_id);

        $verification_action_root_cause_analysis = $this->input->post('verification_action_root_cause_analysis');
        $verification_action_root_cause_analysis_remarks = $this->input->post('verification_action_root_cause_analysis_remarks');
   
        //array
        $existing_nonconformity = $this->input->post('existing_nonconformity');
        $existing_nonconformity_remarks = $this->input->post('existing_nonconformity_remarks');
        $update_doc_info = $this->input->post('update_doc_info');
        $update_doc_info_remarks = $this->input->post('update_doc_info_remarks');
    

    
        $risk_entry = json_decode($car[0]['risk_entry'], true);

        if(empty($risk_entry)){
            $risk_entry = array();
        }
        
        $car_id = $this->input->post('car_id');
        $opportunity_identified_yn = $this->input->post('opportunity_identified_yn');
    
        $opportunity_entry = json_decode($car[0]['opportunity_entry'], true);

        if(empty($opportunity_entry)){
            $opportunity_entry = array();
        }
    
        //array

        $rootcause_entry = json_decode($car[0]['root_cause_entry'], true);

        if(empty($rootcause_entry)){
            $rootcause_entry = array();
        }

        //array
        $identified_root = $this->input->post('identified_root');
        $identified_root_acceptable_verification = $this->input->post('identified_root_acceptable_verification');
        $identified_root_acceptable_remarks_verification = $this->input->post('identified_root_acceptable_remarks_verification');
        $identified_root_acceptable_verification_second = $this->input->post('identified_root_acceptable_verification_second');
        $identified_root_acceptable_remarks_verification_second = $this->input->post('identified_root_acceptable_remarks_verification_second');

        $identified_entry = json_decode($car[0]['identified_root_entry'], true);

        if(empty($identified_entry)){
            $identified_entry = array();
        }
    
        if(isset($identified_root) && is_array($identified_root)){
            foreach($identified_root as $key => $value){
                $identified_entry[$key]['identified_root_acceptable_verification'] = isset($identified_root_acceptable_verification[$key]) ? $identified_root_acceptable_verification[$key] : "";
                $identified_entry[$key]['identified_root_acceptable_remarks_verification'] = isset($identified_root_acceptable_remarks_verification[$key]) ? $identified_root_acceptable_remarks_verification[$key] : "";
                $identified_entry[$key]['identified_root_acceptable_verification_second'] = isset($identified_root_acceptable_verification_second[$key]) ? $identified_root_acceptable_verification_second[$key] : "";
                $identified_entry[$key]['identified_root_acceptable_remarks_verification_second'] = isset($identified_root_acceptable_remarks_verification_second[$key]) ? $identified_root_acceptable_remarks_verification_second[$key] : "";
            }
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

            if($cardata['corrective_action_status'] == 'For Validation'){
                $car = $this->MainModel->getCarByID($car_id);
                $head = $this->UsersModel->fetchUserBySectAndRole('lead_auditor', 'internal_quality_audit');
    
                foreach( $head as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 3&4: Corrective Action is need for Validation', 'CAR');
                }
            } else if($cardata['corrective_action_status'] == 'For Revision') {
                
                $car = $this->MainModel->getCarByID($car_id);

                if($car[0]['section']){
                    $head = $this->UsersModel->fetchUserByDeptSectAndRole('section_head', $car[0]['section']);
                } else if($car[0]['issued_to']){
                    $head = $this->UsersModel->fetchUserByDeptAndRole('department_head', $car[0]['issued_to']);
                }

                foreach( $head as $value){
                   $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 3&4: Corrective Action is for revision and need for action', 'CAR');
                }
            }

            $datahistory['car_id'] = $car_id;
            $datahistory['process'] = "Corrective Action - For Verification";
            $datahistory['status'] = $cardata['corrective_action_status'];
            $datahistory['remarks'] = $verification_action_root_cause_analysis_remarks;
            $this->MainModel->saveHistory($datahistory);

            echo 'saved';
        } else {
            echo 'error';
        }
    }

    public function saveRootFVA(){

        $car_id = $this->input->post('car_id');

        $car = $this->MainModel->getCorrectiveAction($car_id);

        $validation_action_root_cause_analysis = $this->input->post('validation_action_root_cause_analysis');
        $validation_action_root_cause_analysis_remarks = $this->input->post('validation_action_root_cause_analysis_remarks');
   
   
        //array
        $existing_nonconformity = $this->input->post('existing_nonconformity');
        $existing_nonconformity_remarks = $this->input->post('existing_nonconformity_remarks');
        $update_doc_info = $this->input->post('update_doc_info');
        $update_doc_info_remarks = $this->input->post('update_doc_info_remarks');
    
        $risk_entry = json_decode($car[0]['risk_entry'], true);

        if(empty($risk_entry)){
            $risk_entry = array();
        }
        
        $car_id = $this->input->post('car_id');
        $opportunity_identified_yn = $this->input->post('opportunity_identified_yn');
    
        $opportunity_entry = json_decode($car[0]['opportunity_entry'], true);

        if(empty($opportunity_entry)){
            $opportunity_entry = array();
        }
    
        //array

        $rootcause_entry = json_decode($car[0]['root_cause_entry'], true);

        if(empty($rootcause_entry)){
            $rootcause_entry = array();
        }


        $identified_entry = json_decode($car[0]['identified_root_entry'], true);

        if(empty($identified_entry)){
            $identified_entry = array();
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
            'validation_action_root_cause_analysis_remarks' => $validation_action_root_cause_analysis_remarks,
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

            if($cardata['corrective_action_status'] == 'For Closure'){
                $car = $this->MainModel->getCarByID($car_id);

                $qmr = $this->UsersModel->fetchUserByRole('osqm_qmr');
                
                foreach( $qmr as $value){
                    $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 3&4: Corrective Action is fo Closure', 'CAR');
                }
            } else if($cardata['corrective_action_status'] == 'For Revision') {
                
                $car = $this->MainModel->getCarByID($car_id);

                if($car[0]['section']){
                    $head = $this->UsersModel->fetchUserByDeptSectAndRole('section_head', $car[0]['section']);
                } else if($car[0]['issued_to']){
                    $head = $this->UsersModel->fetchUserByDeptAndRole('department_head', $car[0]['issued_to']);
                }

                foreach( $head as $value){
                   $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') Sec 3&4: Corrective Action is for revision and need for action', 'CAR');
                }
            }

            $datahistory['car_id'] = $car_id;
            $datahistory['process'] = "Corrective Action - For Validation";
            $datahistory['status'] = $cardata['corrective_action_status'];
            $datahistory['remarks'] = $validation_action_root_cause_analysis_remarks;
            $this->MainModel->saveHistory($datahistory);

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
                $status = 'Disapproved';
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
               'corrective_action_status' => $status,
               'for_correction_status' => $status,
            //    'status' => 'For Issuance of NC',
           );
   
           // Save data to the 'car' table using the model
           $result = $this->MainModel->updateCar($data);
   
           if ($result) {

                if($status == 'For CAR action'){

                    $car = $this->MainModel->getCarByID($car_id);

                    if($car[0]['section']){
                        $head = $this->UsersModel->fetchUserByDeptSectAndRole('section_head', $car[0]['section']);
                    } else if($car[0]['issued_to']){
                        $head = $this->UsersModel->fetchUserByDeptAndRole('department_head', $car[0]['issued_to']);
                    }

                    foreach( $head as $value){
                        $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car[0]['car_no'].') is need for CAR Action', 'CAR');
                    }
                
                }

                $datahistory['car_id'] = $car_id;
                $datahistory['process'] = "Issuance of NC";
                $datahistory['status'] = $status;
                $datahistory['remarks'] = $issuance_of_nc_remarks;
                $this->MainModel->saveHistory($datahistory);

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
        
        $division = $this->session->userdata('division');
        $department = $this->MainModel->getCarByDiv($division, $_POST['status']);

        // Create an associative array to store unique entries based on 'id'
        $uniqueDepartment = array();

        // Loop through the $department array and store unique entries based on 'id'
        foreach ($department as $entry) {
            $uniqueDepartment[$entry['id']] = $entry;
        }

        // Convert the associative array back to indexed array
        $uniqueDepartment = array_values($uniqueDepartment);

        echo json_encode($uniqueDepartment);
    }

    public function getCarFiltered() {
        $division = $this->session->userdata('division');
        $department = $this->MainModel->getCarByFilter($_POST);
    
        // Create an associative array to store unique entries based on 'id'
        $uniqueDepartment = array();
        foreach ($department as $entry) {
            $uniqueDepartment[$entry['id']] = $entry;
        }
    
        // Convert the associative array back to indexed array
        foreach ($department as $entry) {
            $uniqueDepartment[$entry['id']] = $entry;
        }

        // Convert the associative array back to indexed array
        $uniqueDepartment = array_values($uniqueDepartment);

        echo json_encode($uniqueDepartment);
    }

    public function getCarExport() {
        $division = $this->session->userdata('division');
        $department = $this->MainModel->getCarByFilter($_POST);
    
        // Create an associative array to store unique entries based on 'id'
        $uniqueDepartment = array();

        foreach ($department as $entry) {
            // Map 'Source' to 'source_name'
            $entry['source'] = $entry['source_name'];

            // Map 'Issued By' to 'division'
            $entry['issued_by'] = $entry['division'];

            // Map 'Issued To' to 'department'
            $entry['issued_to'] = $entry['department'];

            // Remove unnecessary fields
            unset($entry['source_name'], $entry['division'], $entry['department'], $entry['ca_completion_date'], $entry['fc_completion_date'],  $entry['issuance_of_nc'],  $entry['issuance_of_nc_remarks'],  $entry['closing_action'],  $entry['closing_action_remarks'],  $entry['car_attachment']);

            $uniqueDepartment[$entry['id']] = $entry;
        }
    
        // Convert the associative array back to indexed array
        $uniqueDepartment = array_values($uniqueDepartment);
    
        $headers = array(
            'ID', 'CAR No.', 'Identification Date', 'Source', 'Issued By', 'Issued To',
            'Section', 'Findings', 'Consequences', 'Requirements Not Fulfilled', 'Date Closed',
            'Corrective Action Status', 'For Correction Status', 'Status', 'Registration Date',
            'Requestor'
        );
    
        // Generate CSV content
        $csv = $this->array_to_csv_with_headers($uniqueDepartment, $headers);
    
        // Set headers to force download
        header('Content-Type: text/csv');
        header('Content-Disposition: attachment; filename="filtered_car_data_' . date('Y-m-d') . '.csv"');
    
        // Output CSV data
        echo $csv;
        exit;
    }
    
    // Function to convert array to CSV format with headers
    private function array_to_csv_with_headers($array, $headers) {
        if (count($array) == 0) {
            return null;
        }
        ob_start();
        $df = fopen("php://output", 'w');
        fputcsv($df, $headers);
        foreach ($array as $row) {
            fputcsv($df, $row);
        }
        fclose($df);
        return ob_get_clean();
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
        $car_attachment = $this->input->post('car_attachment');

        // Prepare data for insertion into the 'car' table
        $currentDate = new DateTime();

        // Define a variable to count working days for 10-day expiry
        $workingDays_10 = 0;
        $expiryDate_10 = clone $currentDate;

        // Calculate 10 working days from now
        while ($workingDays_10 < 10) {
            // Add one day to the current date
            $expiryDate_10->modify('+1 day');

            // Skip weekends (Saturday and Sunday)
            if ($expiryDate_10->format('N') < 6) {
                $workingDays_10++;
            }
        }

        // Define a variable to count working days for 30-day expiry
        $expiryDate_30 = clone $currentDate;
        $expiryDate_30->modify('+1 day'); // Move to next day for 30-day expiry
        $workingDays_30 = 0;

        // Calculate 30 working days from now
        while ($workingDays_30 < 40) {
            // Add one day to the current date
            $expiryDate_30->modify('+1 day');

            // Skip weekends (Saturday and Sunday)
            if ($expiryDate_30->format('N') < 6) {
                $workingDays_30++;
            }
        }

        // Output the results
        $expiry_10_days = $expiryDate_10->format('Y-m-d');
        $expiry_40_days = $expiryDate_30->format('Y-m-d');


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
            'car_attachment' => $car_attachment,
            'corrective_action_status' => '',
            'for_correction_status' => '',
            'ca_completion_date' => $expiry_40_days,
            'fc_completion_date' => $expiry_10_days,
            'registration_date' => date('Y-m-d'),
            'corrective_action_status' => '',
            'status' => 'For Issuance of NC',
        );

        // Save data to the 'car' table using the model
        $result = $this->MainModel->saveCar($data);

        if ($result) {

            $car_id = $this->db->insert_id();

            $car = $this->MainModel->getCarByID($car_id);
            $dco = $this->UsersModel->fetchUserByRole('osqm_dco');
            $do = $this->UsersModel->fetchUserByRole('osqm_do');
            $divchief = $this->UsersModel->fetchUserByDivAndRole('div_chief', $car[0]['issued_by']);

            foreach( $dco as $value){
                $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car_no.') has been registered', 'CAR');
            }

            foreach( $do as $value){
                $this->UsersModel->registerNotification($value['id'], 'CAR No. ('.$car_no.') has been registered', 'CAR');
            }

            foreach( $divchief as $value){
                $this->UsersModel->registerNotification($value['id'], 'CAR No.('.$car_no.') is need for Issuance of NC', 'CAR');
            }

            $datahistory['car_id'] = $car_id;
            $datahistory['process'] = "Register CAR";
            $datahistory['status'] = "For Issuance of NC";
            $datahistory['remarks'] = "";
            $this->MainModel->saveHistory($datahistory);

            echo 'saved';
        } else {
            echo 'error';
        }
    }

    public function save_ca_due(){

        $car_id = $_POST['car_id'];

        $cardata = array(
            'ca_completion_date' =>  $_POST['ca_completion_date']
        );

        $this->db->where('id', $car_id);
        $result = $this->db->update('car', $cardata);

        if ($result) {


            echo 'saved';
        } else {
            echo 'error';
        }
    }

    public function save_ca_due_second(){

        $car_id = $_POST['car_id'];

        $cardata = array(
            'ca_second_completion_date' =>  $_POST['ca_second_completion_date']
        );

        $this->db->where('id', $car_id);
        $result = $this->db->update('car', $cardata);

        if ($result) {


            echo 'saved';
        } else {
            echo 'error';
        }
    }

    public function save_fc_due(){
        $car_id = $_POST['car_id'];

        $cardata = array(
            'fc_completion_date' =>  $_POST['fc_completion_date']
        );

        $this->db->where('id', $car_id);
        $result = $this->db->update('car', $cardata);

        if ($result) {


            echo 'saved';
        } else {
            echo 'error';
        }
    }

}