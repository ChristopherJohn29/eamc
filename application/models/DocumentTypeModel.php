<?php

class DocumentTypeModel extends CI_Model {

    public function getDocumentType(){

        $this->db->select('document_type.*, user_created.email AS created_by_email, user_updated.email AS last_updated_by_email');
        $this->db->from('document_type');
        $this->db->where('document_type.status', 1);
        $this->db->join('users AS user_created', 'document_type.created_by = user_created.id', 'left');
        $this->db->join('users AS user_updated', 'document_type.last_update_by = user_updated.id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function deleteDocumentType($id){

        if($id == 1){
            return true;
        }

        $this->db->where('id', $id);
        return $this->db->update('document_type', array('status' => 0, 'last_update_by' => $this->session->userdata('user_id')));
    }

    public function saveDocumentType($doc_type_name = ''){
        $data = array(
            'doc_type_name' => $doc_type_name,
            'created_date' => date('Y-m-d H:i:s'),
            'created_by' => $this->session->userdata('user_id')
        );
        
        return $this->db->insert('document_type', $data);
    }

    public function updateDocumentType(array $data){

        if($data['id'] == 1){
            return true;
        }

        $this->db->where('id', $data['id']);
        return $this->db->update('document_type', array('doc_type_name' => $data['doc_type_name'], 'last_update_by' => $this->session->userdata('user_id')));

    }
    
}