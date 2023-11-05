<?php

class FileModel extends CI_Model {

    public function getFile($doc_id = ''){

        $this->db->select('document_files.*, user_created.email AS created_by_email, user_updated.email AS last_updated_by_email');
        $this->db->from('document_files');
        $this->db->where('document_files.status', 1);
        $this->db->where('document_files.doc_id', $doc_id);
        $this->db->join('users AS user_created', 'document_files.created_by = user_created.id', 'left');
        $this->db->join('users AS user_updated', 'document_files.last_update_by = user_updated.id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function deleteFile($id){
        $this->db->where('id', $id);
        return $this->db->update('document_files', array('status' => 0, 'last_update_by' => $this->session->userdata('user_id')));
    }

    public function saveFile($data){

        $this->db->insert('document_files', $data);

        if ($this->db->affected_rows() > 0) {
            return true; // Insertion was successful
        } else {
            return false; // Insertion failed
        }
    }

    public function updateFile(array $data){

        $this->db->where('id', $data['id']);
        return $this->db->update('document_files', array('filename' => $data['filename'], 'last_update_by' => $this->session->userdata('user_id')));

    }
    
}