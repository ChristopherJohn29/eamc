<?php

class MainModel extends CI_Model {

    public function getCarSource(){

        $this->db->select('*');
        $this->db->from('source_car');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDivision(){
        $this->db->select('*');
        $this->db->from('division');
        $this->db->where('status', 1);
                

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDivisionByID($id){
        $this->db->select('*');
        $this->db->from('division');
        $this->db->where('status', 1);
        $this->db->where('id', $id);
                

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDepartmentByID($id){
        $this->db->select('*');
        $this->db->from('department');
        $this->db->where('status', 1);
        $this->db->where('id', $id); 

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getSectionByID($id){
        $this->db->select('*');
        $this->db->from('section');
        $this->db->where('status', 1);
        $this->db->where('id', $id); 

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getCorrectiveAction($car_id){
        $this->db->select('*');
        $this->db->from('corrective_action');
        $this->db->where('car_id', $car_id);
                
        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getCorrectionAction($car_id){
        $this->db->select('*');
        $this->db->from('correction');
        $this->db->where('car_id', $car_id);
                
        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getCARHistory($doc_id){

        $this->db->select('car_history.*, user_created.fullname AS created_by_name');
        $this->db->from('car_history');
        $this->db->where('car_id', $doc_id);
        $this->db->join('users AS user_created', 'car_history.created_by = user_created.id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getAllCARHistory(){

        $this->db->select('car_history.*, user_created.fullname AS created_by_name, car_main.car_no AS car_main_no');
        $this->db->from('car_history');
        $this->db->join('users AS user_created', 'car_history.created_by = user_created.id', 'left');
        $this->db->join('car AS car_main', 'car_history.car_id = car_main.id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }


    public function getAllDIHistory(){

        $this->db->select('document_history.*, user_created.fullname AS created_by_name, doc_info.doc_code AS document_code');
        $this->db->from('document_history');
        $this->db->join('users AS user_created', 'document_history.created_by = user_created.id', 'left');
        $this->db->join('documented_information AS doc_info', 'document_history.doc_id = doc_info.id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function saveHistory($data){

        $data = array(
            'car_id' => $data['car_id'],
            'process' => $data['process'],
            'status' => $data['status'],
            'created_date' => date('Y-m-d H:i:s'),
            'remarks' => isset($data['remarks']) ? $data['remarks'] : '',
            'created_by' => $this->session->userdata('user_id')
        );
        
        return $this->db->insert('car_history', $data);
    }

    public function tpn(){

        $this->db->select('car.*, source_car.source_name AS source_name, division.div_name AS division, department.dep_name AS department, corrective_action.identified_root_entry AS identified_root_entry');
        $this->db->from('car');

        $this->db->group_start(); // Start grouping OR conditions
        $this->db->where('(corrective_action_status = "For CAR action" OR corrective_action_status = "For Implementation")');
        $this->db->or_where('corrective_action_status = "For Partial"');
        $this->db->group_end();

        $this->db->join('source_car', 'source_car.id = car.source', 'left');
        $this->db->join('division', 'division.id = car.issued_by', 'left');
        $this->db->join('department', 'department.id = car.issued_to', 'left');
        $this->db->join('corrective_action', 'corrective_action.car_id = car.id', 'left');

        $query = $this->db->get();
        $results = $query->result_array();

        $role = $this->session->userdata('role');
        $section = $this->session->userdata('section');
        $department = $this->session->userdata('department');
        $department_section = $this->session->userdata('department_section');

        $final_result = [];

        foreach($results as $key => $result){

            if(isset($result['identified_root_entry'])){



                $entries = json_decode($result['identified_root_entry'], true);

                foreach($entries as $entry){
                    $tpn_issued_to = isset($entry['tpn_issued_to']) ? $entry['tpn_issued_to'] : "";
                    $tpn_section = isset($entry['section']) ? $entry['section'] : "";
    
                    if($tpn_section){
                        if($department_section == $tpn_section){
                            $final_result[] = $results[$key];
                        }
                    } else {
                        if($department == $tpn_issued_to){
                            $final_result[] = $results[$key];
                        }
                    }
                }
            }
            
        }


        return $final_result;

    }

    public function getCarByFilter($data) {
        // Separate data for easier manipulation
        $car_id = isset($data['filter_car_id']) ? $data['filter_car_id'] : '';
        $car_no = isset($data['filter_car_no']) ? $data['filter_car_no'] : '';
        $source = isset($data['filter_source']) ? $data['filter_source'] : '';
        $issued_by = isset($data['filter_issued_by']) ? $data['filter_issued_by'] : '';
        $issued_to = isset($data['filter_issued_to']) ? $data['filter_issued_to'] : '';
        $section = isset($data['filter_section']) ? $data['filter_section'] : '';
        $identification_date_start = isset($data['filter_identification_date_start']) ? $data['filter_identification_date_start'] : '';
        $identification_date_end = isset($data['filter_identification_date_end']) ? $data['filter_identification_date_end'] : '';
        $registration_date_start = isset($data['filter_registration_date_start']) ? $data['filter_registration_date_start'] : '';
        $registration_date_end = isset($data['filter_registration_date_end']) ? $data['filter_registration_date_end'] : '';
        $date_closed_start = isset($data['filter_date_closed_start']) ? $data['filter_date_closed_start'] : '';
        $date_closed_end = isset($data['filter_date_closed_end']) ? $data['filter_date_closed_end'] : '';
        $for_correction_status = isset($data['filter_for_correction_status']) ? $data['filter_for_correction_status'] : '';
        $corrective_action_status = isset($data['filter_corrective_action_status']) ? $data['filter_corrective_action_status'] : '';
        $status = isset($data['filter_status']) ? $data['filter_status'] : '';
    
        // Select relevant fields
        $this->db->select('car.*, source_car.source_name AS source_name, division.div_name AS division, department.dep_name AS department');
        $this->db->from('car');
    
        // Join tables
        $this->db->join('source_car', 'source_car.id = car.source', 'left');
        $this->db->join('division', 'division.id = car.issued_by', 'left');
        $this->db->join('department', 'department.id = car.issued_to', 'left');
    
        // Apply filters based on provided data
        if (!empty($car_id)) {
            $this->db->where('car.id', $car_id);
        }
        if (!empty($car_no)) {
            $this->db->like('car.car_no', $car_no);
        }
        if (!empty($source)) {
            $this->db->where('car.source', $source);
        }
        if (!empty($issued_by)) {
            $this->db->where('car.issued_by', $issued_by);
        }
        if (!empty($issued_to)) {
            $this->db->where('car.issued_to', $issued_to);
        }
        if (!empty($section)) {
            $this->db->where('car.section', $section);
        }
        if (!empty($identification_date_start) && !empty($identification_date_end)) {
            $this->db->where("car.identification_date BETWEEN '$identification_date_start' AND '$identification_date_end'");
        } elseif (!empty($identification_date_start)) {
            $this->db->where("car.identification_date >= '$identification_date_start'");
        } elseif (!empty($identification_date_end)) {
            $this->db->where("car.identification_date <= '$identification_date_end'");
        }
        if (!empty($registration_date_start) && !empty($registration_date_end)) {
            $this->db->where("car.registration_date BETWEEN '$registration_date_start' AND '$registration_date_end'");
        } elseif (!empty($registration_date_start)) {
            $this->db->where("car.registration_date >= '$registration_date_start'");
        } elseif (!empty($registration_date_end)) {
            $this->db->where("car.registration_date <= '$registration_date_end'");
        }
        if (!empty($date_closed_start) && !empty($date_closed_end)) {
            $this->db->where("car.date_closed BETWEEN '$date_closed_start' AND '$date_closed_end'");
        } elseif (!empty($date_closed_start)) {
            $this->db->where("car.date_closed >= '$date_closed_start'");
        } elseif (!empty($date_closed_end)) {
            $this->db->where("car.date_closed <= '$date_closed_end'");
        }
        if (!empty($for_correction_status)) {
            $this->db->where('car.for_correction_status', $for_correction_status);
        }
        if (!empty($corrective_action_status)) {
            $this->db->where('car.corrective_action_status', $corrective_action_status);
        }
        if (!empty($status)) {
            $this->db->where('car.status', $status);
        }
    
        // Execute query
        $query = $this->db->get();
        $result = $query->result_array();
    
        // Merge with additional data (if needed)
        $tpn = $this->tpn();  // Assuming tpn() fetches some additional data
        $result = array_merge($tpn, $result);
    
        return $result;
    }
    

    public function getCarByDiv($division, $status){

        $tpn  = $this->tpn();

        // foreach
        
        $this->db->select('car.*, source_car.source_name AS source_name, division.div_name AS division, department.dep_name AS department');
        $this->db->from('car');

        $role = $this->session->userdata('role');
        $section = $this->session->userdata('section');
        $department = $this->session->userdata('department');
        $department_section = $this->session->userdata('department_section');


        if($role != 'super_admin'){
            if($department_section && ( $role != 'osqm_dco' && $role != 'osqm_do' && $role != 'osqm_qmr')){
                $this->db->where('section', $department_section);
            }
            
            if($role != 'osqm_qmr' && $role != 'osqm_dco' && $role != 'osqm_do' && $role != 'chair' && $role != 'auditor' && $role != 'lead_auditor'){
                $this->db->where('issued_by', $division);
            }
    
            if($role == 'department_head' || $role == 'iso_coordinator'){
                $this->db->where('issued_to', $department);
            }
    
            if ($role == 'chair' && $section == 'internal_quality_audit') {
                $this->db->group_start(); // Start grouping OR conditions
                $this->db->where('(corrective_action_status = "For Verification" OR for_correction_status = "For Verification")');
                $this->db->or_where('(corrective_action_status = "For Validation" OR for_correction_status = "For Validation")');
                $this->db->or_where('(corrective_action_status = "For Closure" OR for_correction_status = "For Closure")');
                $this->db->or_where('car.status', 'Closed');
                $this->db->group_end(); // End grouping OR conditions
                $this->db->where('car.source', '1');
            }
    
    
            if ($role == 'auditor' && $section == 'internal_quality_audit') {
                $this->db->group_start(); // Start grouping OR conditions
                $this->db->where('(corrective_action_status = "For Verification" OR for_correction_status = "For Verification")');
                $this->db->or_where('(corrective_action_status = "For Validation" OR for_correction_status = "For Validation")');
                $this->db->or_where('(corrective_action_status = "For Closure" OR for_correction_status = "For Closure")');
                $this->db->or_where('car.status', 'Closed');
                $this->db->group_end(); // End grouping OR conditions
                $this->db->where('car.source', '2');
            }
    
            if ($role == 'lead_auditor' && $section == 'internal_quality_audit') {
                $this->db->group_start(); // Start grouping OR conditions
                $this->db->or_where('(corrective_action_status = "For Validation" OR for_correction_status = "For Validation")');
                $this->db->or_where('(corrective_action_status = "For Closure" OR for_correction_status = "For Closure")');
                $this->db->or_where('car.status', 'Closed');
                $this->db->group_end(); // End grouping OR conditions
            }

            if($status != 'all'){
                $this->db->where('car.status', $status);
            }
        }

        $this->db->join('source_car', 'source_car.id = car.source', 'left');
        $this->db->join('division', 'division.id = car.issued_by', 'left');
        $this->db->join('department', 'department.id = car.issued_to', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        $result = array_merge($tpn, $result);

        return $result;

    }

    public function getCar($status = ''){
        $this->db->select('car.*, source_car.source_name AS source_name, division.div_name AS division, department.dep_name AS department');
        $this->db->from('car');
        $this->db->join('source_car', 'source_car.id = car.source', 'left');
        $this->db->join('division', 'division.id = car.issued_by', 'left');
        $this->db->join('department', 'department.id = car.issued_to', 'left');

        if($status != 'all'){
            $this->db->where('car.status', $status);
        }

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getCarBYID($id){
        $this->db->select('car.*, source_car.source_name AS source_name, division.div_name AS division, department.dep_name AS department');
        $this->db->from('car');
        $this->db->join('source_car', 'source_car.id = car.source', 'left');
        $this->db->join('division', 'division.id = car.issued_by', 'left');
        $this->db->join('department', 'department.id = car.issued_to', 'left');
        $this->db->where('car.id', $id);
    

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    

    public function getDepartment($division = 0){
        $this->db->select('*');
        $this->db->from('department');
        $this->db->where('status', 1);
        $this->db->where('div_id', $division);

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getSection($department = 0){
        $this->db->select('*');
        $this->db->from('section');
        $this->db->where('status', 1);
        $this->db->where('dep_id', $department);

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    

    public function saveCar($data) {
        // Insert data into the 'car' table
        $this->db->insert('car', $data);
        
        // Return true if insertion was successful, else false
        return $this->db->affected_rows() > 0 ? true : false;
    }

    public function saveCorrective($data){

        
        $this->db->insert('corrective_action', $data);
        
        // Return true if insertion was successful, else false
        return $this->db->affected_rows() > 0 ? true : false;
    }

    public function updateCar($data) {
        if (!isset($data['car_id']) || !is_numeric($data['car_id'])) {
            // Handle invalid or missing car_id
            return false;
        }
    
        // Initialize the update data array
        $updateData = array();
    
        // Loop through $data and add valid fields to $updateData
        foreach ($data as $key => $value) {
            // Exclude 'car_id' from the update data
            if ($key !== 'car_id') {
                $updateData[$key] = $value;
            }
        }
    
        // Chain the methods for a more concise syntax
        return $this->db->where('id', $data['car_id'])->update('car', $updateData);
    }

    
}