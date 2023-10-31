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
    
}

?>