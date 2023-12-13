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

    public function getCar(){
        $this->db->select('car.*, source_car.source_name AS source_name, division.div_name AS division');
        $this->db->from('car');
        $this->db->join('source_car', 'source_car.id = car.source', 'left');
        $this->db->join('division', 'division.id = car.issued_by', 'left');

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

    public function saveCar($data) {
        // Insert data into the 'car' table
        $this->db->insert('car', $data);
        
        // Return true if insertion was successful, else false
        return $this->db->affected_rows() > 0 ? true : false;
    }

    
}