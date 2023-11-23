<?php

class FileDetailsModel extends CI_Model {

    public function getFileRevision($doc_file_id = ''){

        $this->db->select('*');
        $this->db->from('document_file_revision');
        $this->db->where('doc_file_id', $doc_file_id);

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function deleteFile($id){
        $this->db->where('id', $id);
        return $this->db->update('document_files', array('status' => 0, 'last_update_by' => $this->session->userdata('user_id')));
    }

    public function getDocumentTitle($doc_file_id) {
        // Query the database to retrieve the doc_title
        $query = $this->db->select('filename')
                      ->from('document_files')
                      ->where('id', $doc_file_id)
                      ->get();

        // Check if a result was found
        if ($query->num_rows() > 0) {
            return $query->row()->filename;
        } else {
            // Handle the case when no matching record is found, e.g., return null or an error message.
            return null;
        }
    }

    public function getDocumentFile($doc_file_id) {
        // Query the database to retrieve the doc_title
        $query = $this->db->select('unique_file_name')
                      ->from('document_files')
                      ->where('id', $doc_file_id)
                      ->get();

        // Check if a result was found
        if ($query->num_rows() > 0) {
            return $query->row()->unique_file_name;
        } else {
            // Handle the case when no matching record is found, e.g., return null or an error message.
            return null;
        }
    }

    public function getDocumentUser($doc_file_id) {
        // Query the database to retrieve the doc_title
        $query = $this->db->select('created_by')
                      ->from('document_files')
                      ->where('id', $doc_file_id)
                      ->get();

        // Check if a result was found
        if ($query->num_rows() > 0) {
            return $query->row()->created_by;
        } else {
            // Handle the case when no matching record is found, e.g., return null or an error message.
            return null;
        }
    }

    public function getDocumentLink($doc_file_id) {
        // Query the database to retrieve the doc_title
        $query = $this->db->select('filelink')
                      ->from('document_files')
                      ->where('id', $doc_file_id)
                      ->get();

        // Check if a result was found
        if ($query->num_rows() > 0) {
            return $query->row()->filelink;
        } else {
            // Handle the case when no matching record is found, e.g., return null or an error message.
            return null;
        }
    }

    public function saveFileRevision($data){

        $this->db->insert('document_file_revision', $data);

        if ($this->db->affected_rows() > 0) {
            return true; // Insertion was successful
        } else {
            return false; // Insertion failed
        }
    }

    public function updateFileRevision(array $data) {
        $doc_file_revision_id = $data['doc_file_revision_id'];
    
        // Check if remarks_date is NULL
        $this->db->select('remarks_date');
        $this->db->where('id', $doc_file_revision_id);
        $query = $this->db->get('document_file_revision');
    
        if ($query->num_rows() > 0) {
            $row = $query->row();
            $remarks_date = $row->remarks_date;
    
            // Update the record with the new data
            $this->db->where('id', $doc_file_revision_id);
            $update_data = array(
                'revision' => $data['revision'],
                'remarks_by_osqm' => $data['remarks_by_osqm']
            );
    
            // Only include remarks_date if it's NULL
            if (is_null($remarks_date) || empty($remarks_date)) {
                $update_data['remarks_date'] = date('Y-m-d H:i:s');
            }
    
            return $this->db->update('document_file_revision', $update_data);
        } else {
            return false; // Record not found
        }
    }

    
}