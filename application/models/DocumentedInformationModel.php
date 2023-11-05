<?php

class DocumentedInformationModel extends CI_Model {

    public function getDocumentedInformationList(){

        $this->db->select('documented_information.*, department.dep_name AS dep_name, document_type.doc_type_name AS type, document_status.status_value AS status_name');
        $this->db->from('documented_information');
        $this->db->join('department', 'department.id = documented_information.dep_id', 'left');
        $this->db->join('document_status', 'document_status.status_code = documented_information.status', 'left');
        $this->db->join('document_type', 'document_type.id = documented_information.doc_type_id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDocumentedInformationHistory($doc_id){

        $this->db->select('*');
        $this->db->from('document_history');
        $this->db->where('doc_id', $doc_id);

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDocumentedInformationTechnicalReview(){

        $this->db->select('documented_information.*, department.dep_name AS dep_name, document_type.doc_type_name AS type, document_status.status_value AS status_name');
        $this->db->from('documented_information');
        $this->db->where('documented_information.status', 'TR');
        $this->db->join('department', 'department.id = documented_information.dep_id', 'left');
        $this->db->join('document_status', 'document_status.status_code = documented_information.status', 'left');
        $this->db->join('document_type', 'document_type.id = documented_information.doc_type_id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function saveDI($data){

        if($data['doc_type_id'] == '1'){
            //forms
            $status = 'FCRA';
        } else {
            $status = 'TR';
        }

        $data = array(
            'doc_title' => $data['document_title'],
            'effectivity_date' => $data['effectivity_date'],
            'doc_type_id' => $data['doc_type_id'],
            'dep_id' => $data['dep_id'],
            'doc_code' => $data['doc_code'],
            'revision_no' => $data['revision_no'],
            'status' => $status,
            'created_date' => date('Y-m-d H:i:s'),
            'user_id' => 1
        );
        
        return $this->db->insert('documented_information', $data);
    }

    public function saveHistory($data){

        $data = array(
            'doc_id' => $data['doc_id'],
            'process' => $data['process'],
            'status' => $data['status'],
            'created_date' => date('Y-m-d H:i:s')
        );
        
        return $this->db->insert('document_history', $data);
    }

    public function getDocumentTitle($doc_id) {
        // Query the database to retrieve the doc_title
        $query = $this->db->select('doc_title')
                      ->from('documented_information')
                      ->where('id', $doc_id)
                      ->get();

        // Check if a result was found
        if ($query->num_rows() > 0) {
            return $query->row()->doc_title;
        } else {
            // Handle the case when no matching record is found, e.g., return null or an error message.
            return null;
        }
    }

    public function updateDI(array $data){
        $this->db->where('id', $data['doc_id']);
        $this->db->where('user_id', $data['user_id']);

        $updateData = array(
            'doc_title' => $data['document_title'],
            'effectivity_date' => $data['effectivity_date'],
            'doc_type_id' => $data['doc_type_id'],
            'dep_id' => $data['dep_id'],
            'doc_code' => $data['doc_code'],
            'revision_no' => $data['revision_no']
        );

        return $this->db->update('documented_information', $updateData);
    }

    public function updateDITR(array $data){
        $this->db->where('id', $data['doc_id']);
        $this->db->where('user_id', $data['user_id']);

        $updateData = array(
            'doc_title' => $data['document_title'],
            'effectivity_date' => $data['effectivity_date'],
            'doc_type_id' => $data['doc_type_id'],
            'dep_id' => $data['dep_id'],
            'doc_code' => $data['doc_code'],
            'revision_no' => $data['revision_no'],
            'status' => $data['status'],
            'technical_review' => $data['technical_review']
        );

        return $this->db->update('documented_information', $updateData);
    }
}

?>