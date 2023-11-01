<?php

class RevisionModel extends CI_Model {

    public function getRevision($doc_id = ''){

        $this->db->select('document_revision.*, user_created.email AS created_by_email, user_updated.email AS last_updated_by_email');
        $this->db->from('document_revision');
        $this->db->where('document_revision.status', 1);
        $this->db->where('document_revision.doc_id', $doc_id);
        $this->db->join('users AS user_created', 'document_revision.created_by = user_created.id', 'left');
        $this->db->join('users AS user_updated', 'document_revision.last_update_by = user_updated.id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function deleteRevision($id){
        $this->db->where('id', $id);
        return $this->db->update('document_revision', array('status' => 0, 'last_update_by' => $this->session->userdata('user_id')));
    }

    public function saveRevision($revision_desc = '', $doc_id = ''){
        $data = array(
            'revision_desc' => $revision_desc,
            'doc_id' => $doc_id,
            'created_date' => date('Y-m-d H:i:s'),
            'created_by' => $this->session->userdata('user_id')
        );
        
        return $this->db->insert('document_revision', $data);
    }

    public function updateRevision(array $data){

        $this->db->where('id', $data['id']);
        return $this->db->update('document_revision', array('revision_desc' => $data['revision_desc'], 'last_update_by' => $this->session->userdata('user_id')));

    }
    
}