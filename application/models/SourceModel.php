<?php

class SourceModel extends CI_Model {

    public function getSource(){

        $this->db->select('source.*, user_created.email AS created_by_email, user_updated.email AS last_updated_by_email');
        $this->db->from('source');
        $this->db->where('source.status', 1);
        $this->db->join('users AS user_created', 'source.created_by = user_created.id', 'left');
        $this->db->join('users AS user_updated', 'source.last_update_by = user_updated.id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function deleteSource($id){
        $this->db->where('id', $id);
        return $this->db->update('source', array('status' => 0));
    }

    public function saveSource($source_name = ''){
        $data = array(
            'source_name' => $source_name,
            'created_date' => date('Y-m-d H:i:s'),
            'created_by' => 1
        );
        
        return $this->db->insert('source', $data);
    }

    public function updateSource(array $data){

        $this->db->where('id', $data['id']);
        return $this->db->update('source', array('source_name' => $data['source_name']));

    }
    
}