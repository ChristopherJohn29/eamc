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

    public function getCar($status = ''){
        $this->db->select('car.*, source_car.source_name AS source_name, division.div_name AS division');
        $this->db->from('car');
        $this->db->join('source_car', 'source_car.id = car.source', 'left');
        $this->db->join('division', 'division.id = car.issued_by', 'left');

        if($status != 'all'){
            $this->db->where('car.status', $status);
        }

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