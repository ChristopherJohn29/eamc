<?php

class SectionModel extends CI_Model {

    public function getSection(){

        $this->db->select('section.*, user_created.email AS created_by_email, user_updated.email AS last_updated_by_email, department.dep_name AS dep_name');
        $this->db->from('section');
        $this->db->where('section.status', 1);
        $this->db->join('users AS user_created', 'section.created_by = user_created.id', 'left');
        $this->db->join('users AS user_updated', 'section.last_update_by = user_updated.id', 'left');
        $this->db->join('department AS department', 'section.dep_id = department.id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function deleteSection($id){

        $this->db->where('id', $id);
        return $this->db->update('section', array('status' => 0, 'last_update_by' => $this->session->userdata('user_id')));
    }

    public function saveSection($section_name = '', $dep_id = ''){
        
        $data = array(
            'section_name' => $section_name,
            'dep_id' => $dep_id,
            'created_date' => date('Y-m-d H:i:s'),
            'created_by' => $this->session->userdata('user_id')
        );
        
        return $this->db->insert('section', $data);
    }

    public function updateSection(array $data){

        $this->db->where('id', $data['id']);
        return $this->db->update('section', array('section_name' => $data['section_name'], 'dep_id' => $data['dep_id'], 'last_update_by' => $this->session->userdata('user_id')));
    }
    
}