<?php

class DivisionModel extends CI_Model {

    public function getDivision(){

        $this->db->select('division.*, user_created.email AS created_by_email, user_updated.email AS last_updated_by_email');
        $this->db->from('division');
        $this->db->where('division.status', 1);
        $this->db->join('users AS user_created', 'division.created_by = user_created.id', 'left');
        $this->db->join('users AS user_updated', 'division.last_update_by = user_updated.id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function deleteDivision($id){
        $this->db->where('id', $id);
        return $this->db->update('division', array('status' => 0));
    }

    public function saveDivision($div_name = ''){
        $data = array(
            'div_name' => $div_name,
            'created_date' => date('Y-m-d H:i:s'),
            'created_by' => 1
        );
        
        return $this->db->insert('division', $data);
    }

    public function updateDivision(array $data){

        $this->db->where('id', $data['id']);
        return $this->db->update('division', array('div_name' => $data['div_name']));

    }
    
}