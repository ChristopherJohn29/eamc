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

    public function tpn(){

        $this->db->select('car.*, source_car.source_name AS source_name, division.div_name AS division, department.dep_name AS department');
        $this->db->from('car');

        $this->db->group_start(); // Start grouping OR conditions
        $this->db->where('(corrective_action_status = "For CAR action" OR corrective_action_status = "For Implementation")');
        $this->db->group_end();

        $this->db->join('source_car', 'source_car.id = car.source', 'left');
        $this->db->join('division', 'division.id = car.issued_by', 'left');
        $this->db->join('department', 'department.id = car.issued_to', 'left');
        $query = $this->db->get();
        $results = $query->result_array();

        $role = $this->session->userdata('role');
        $section = $this->session->userdata('section');
        $department = $this->session->userdata('department');
        $department_section = $this->session->userdata('department_section');

        $final_result = [];

        foreach($results as $key => $result){
            $entries = json_decode($result['identified_root_entry']);

            foreach($entries as $entry){
                $tpn_issued_to = $entry['tpn_issued_to'];
                $tpn_section = $entry['section'];

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

        return $final_result;

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
        
        if($department_section){
            $this->db->where('section', $department_section);
        }
        
        if($role != 'osqm_qmr' && $role != 'osqm_dco' && $role != 'chair' && $role != 'auditor' && $role != 'lead_auditor'){
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


        $this->db->join('source_car', 'source_car.id = car.source', 'left');
        $this->db->join('division', 'division.id = car.issued_by', 'left');
        $this->db->join('department', 'department.id = car.issued_to', 'left');

        if($status != 'all'){
            $this->db->where('car.status', $status);
        }

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