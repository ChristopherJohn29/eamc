<?php

class DocumentedInformationModel extends CI_Model {

    public function getDocumentedInformationList(){

        $this->db->select('documented_information.*, department.dep_name AS dep_name, section.section_name AS section_name, document_type.doc_type_name AS type, document_status.status_value AS status_name');
        $this->db->from('documented_information');
        $this->db->where('documented_information.user_id', $this->session->userdata('user_id'));
        $this->db->where('documented_information.status !=', 'PUB');
        $this->db->join('department', 'department.id = documented_information.dep_id', 'left');
        $this->db->join('section', 'section.id = documented_information.sec_id', 'left');
        $this->db->join('document_status', 'document_status.status_code = documented_information.status', 'left');
        $this->db->join('document_type', 'document_type.id = documented_information.doc_type_id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDocumentedInformationListAll(){

        $this->db->select('documented_information.*, department.dep_name AS dep_name, section.section_name AS section_name, document_type.doc_type_name AS type, document_status.status_value AS status_name');
        $this->db->from('documented_information');
        $this->db->where('documented_information.status !=', 'PUB');
        // $this->db->where('documented_information.status !=', 'FFU');
        $this->db->where('documented_information.status !=', 'AD');
        $this->db->join('department', 'department.id = documented_information.dep_id', 'left');
        $this->db->join('section', 'section.id = documented_information.sec_id', 'left');
        $this->db->join('document_status', 'document_status.status_code = documented_information.status', 'left');
        $this->db->join('document_type', 'document_type.id = documented_information.doc_type_id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDocumentedInformationListFiltered($data) {
        $this->db->select('documented_information.*, department.dep_name AS dep_name, section.section_name AS section_name, document_type.doc_type_name AS type, document_status.status_value AS status_name');
        $this->db->from('documented_information');
        $this->db->join('department', 'department.id = documented_information.dep_id', 'left');
        $this->db->join('section', 'section.id = documented_information.sec_id', 'left');
        $this->db->join('document_status', 'document_status.status_code = documented_information.status', 'left');
        $this->db->join('document_type', 'document_type.id = documented_information.doc_type_id', 'left');
    
        // Adding filters based on form data
        if (!empty($data['filter_document_title'])) {
            $this->db->like('documented_information.doc_title', $data['filter_document_title']);
        }
        if (!empty($data['filter_doc_code'])) {
            $this->db->where('documented_information.doc_code', $data['filter_doc_code']);
        }
        if (!empty($data['filter_revision_no'])) {
            $this->db->where('documented_information.revision_no', $data['filter_revision_no']);
        }
        if (!empty($data['filter_effectivity_date_start']) || !empty($data['filter_effectivity_date_end'])) {
            if (!empty($data['filter_effectivity_date_start'])) {
                $this->db->where('documented_information.effectivity_date >=', $data['filter_effectivity_date_start']);
            }
            if (!empty($data['filter_effectivity_date_end'])) {
                $this->db->where('documented_information.effectivity_date <=', $data['filter_effectivity_date_end']);
            }
        }
        if (!empty($data['filter_date_submitted_start']) || !empty($data['filter_date_submitted_end'])) {
            if (!empty($data['filter_date_submitted_start'])) {
                $this->db->where('documented_information.created_date >=', $data['filter_date_submitted_start']);
            }
            if (!empty($data['filter_date_submitted_end'])) {
                $this->db->where('documented_information.created_date <=', $data['filter_date_submitted_end']);
            }
        }
        if (!empty($data['filter_doc_type_id'])) {
            $this->db->where('documented_information.doc_type_id', $data['filter_doc_type_id']);
        }
        if (!empty($data['filter_dep_id'])) {
            $this->db->where('documented_information.dep_id', $data['filter_dep_id']);
        }
        if (!empty($data['filter_sec_id'])) {
            $this->db->where('documented_information.sec_id', $data['filter_sec_id']);
        }
        if (!empty($data['filter_status'])) {
            $this->db->where('documented_information.status', $data['filter_status']);
        }
    
        $query = $this->db->get();
        return $query->result_array();
    }    
    

    public function getDocumentedInformationListAdmin(){

        $this->db->select('documented_information.*, department.dep_name AS dep_name, section.section_name AS section_name, document_type.doc_type_name AS type, document_status.status_value AS status_name');
        $this->db->from('documented_information');
        // $this->db->where('documented_information.status !=', 'FFU');
        $this->db->join('department', 'department.id = documented_information.dep_id', 'left');
        $this->db->join('section', 'section.id = documented_information.sec_id', 'left');
        $this->db->join('document_status', 'document_status.status_code = documented_information.status', 'left');
        $this->db->join('document_type', 'document_type.id = documented_information.doc_type_id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDI($doc_id){
        $this->db->select('*');
        $this->db->from('documented_information');
        $this->db->where('id', intval($doc_id));

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDIPortal($doc_id){
        $this->db->select('di.*, 
        u1.fullname AS forms_reviewer, 
        u2.fullname AS technical_reviewer, 
        u3.fullname AS final_reviewer, 
        u3.position AS final_reviewer_position, 
        u4.fullname AS approval_person, 
        u4.position AS approval_person_position,
        u5.fullname AS checker, 
        u6.fullname AS approval_for_publishing_person, 
        u7.fullname AS publisher,
        u8.fullname AS prepared_by,
        u8.position AS prepared_by_position'
        );

        $this->db->from('documented_information AS di');
        $this->db->join('users AS u1', 'u1.id = di.forms_review_by', 'left');
        $this->db->join('users AS u2', 'u2.id = di.technical_review_by', 'left');
        $this->db->join('users AS u3', 'u3.id = di.final_review_by', 'left');
        $this->db->join('users AS u4', 'u4.id = di.approval_by', 'left');
        $this->db->join('users AS u5', 'u5.id = di.checking_by', 'left');
        $this->db->join('users AS u6', 'u6.id = di.approval_for_publishing_by', 'left');
        $this->db->join('users AS u7', 'u7.id = di.publishing_by', 'left');
        $this->db->join('users AS u8', 'u8.id = di.user_id', 'left');
        $this->db->where('di.id', intval($doc_id));

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDocumentedInformationHistory($doc_id){

        $this->db->select('document_history.*, user_created.fullname AS created_by_name');
        $this->db->from('document_history');
        $this->db->where('doc_id', $doc_id);
        $this->db->join('users AS user_created', 'document_history.created_by = user_created.id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDocumentedInformationTechnicalReview(){

        $this->db->select('documented_information.*, department.dep_name AS dep_name, section.section_name AS section_name, document_type.doc_type_name AS type, document_status.status_value AS status_name');
        $this->db->from('documented_information');
        $this->db->where('documented_information.status', 'TR');
        $this->db->or_where('documented_information.status', 'AD');
        $this->db->join('department', 'department.id = documented_information.dep_id', 'left');
        $this->db->join('section', 'section.id = documented_information.sec_id', 'left');
        $this->db->join('document_status', 'document_status.status_code = documented_information.status', 'left');
        $this->db->join('document_type', 'document_type.id = documented_information.doc_type_id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDocumentedInformationFormsReview(){

        $this->db->select('documented_information.*, department.dep_name AS dep_name, section.section_name AS section_name, document_type.doc_type_name AS type, document_status.status_value AS status_name');
        $this->db->from('documented_information');
        $this->db->where('documented_information.status', 'FCRA');
        $this->db->join('department', 'department.id = documented_information.dep_id', 'left');
        $this->db->join('section', 'section.id = documented_information.sec_id', 'left');
        $this->db->join('document_status', 'document_status.status_code = documented_information.status', 'left');
        $this->db->join('document_type', 'document_type.id = documented_information.doc_type_id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDocumentedInformationFinalReview(){

        $this->db->select('documented_information.*, department.dep_name AS dep_name, section.section_name AS section_name, document_type.doc_type_name AS type, document_status.status_value AS status_name');
        $this->db->from('documented_information');
        $this->db->where('documented_information.status', 'FIR');
        $this->db->where('documented_information.dep_id', $this->session->userdata('department'));
        $this->db->join('department', 'department.id = documented_information.dep_id', 'left');
        $this->db->join('section', 'section.id = documented_information.sec_id', 'left');
        $this->db->join('document_status', 'document_status.status_code = documented_information.status', 'left');
        $this->db->join('document_type', 'document_type.id = documented_information.doc_type_id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDocumentedInformationApproval(){

        $division_id = $this->session->userdata('division');

        $this->db->select('*');
        $this->db->from('department');
        $this->db->where('status', 1);
        $this->db->where('div_id', $division_id);

        $query = $this->db->get();
        $department_ids = array_column($query->result_array(), 'id');

        $this->db->select('documented_information.*, department.dep_name AS dep_name, section.section_name AS section_name, document_type.doc_type_name AS type, document_status.status_value AS status_name');
        $this->db->from('documented_information');
        $this->db->where('documented_information.status', 'APR');
        $this->db->where_in('documented_information.dep_id', $department_ids);
        $this->db->join('department', 'department.id = documented_information.dep_id', 'left');
        $this->db->join('section', 'section.id = documented_information.sec_id', 'left');
        $this->db->join('document_status', 'document_status.status_code = documented_information.status', 'left');
        $this->db->join('document_type', 'document_type.id = documented_information.doc_type_id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDocumentedInformationChecking(){

        $this->db->select('documented_information.*, department.dep_name AS dep_name, section.section_name AS section_name, document_type.doc_type_name AS type, document_status.status_value AS status_name');
        $this->db->from('documented_information');
        $this->db->where('documented_information.status', 'CHK');
        $this->db->join('department', 'department.id = documented_information.dep_id', 'left');
        $this->db->join('section', 'section.id = documented_information.sec_id', 'left');
        $this->db->join('document_status', 'document_status.status_code = documented_information.status', 'left');
        $this->db->join('document_type', 'document_type.id = documented_information.doc_type_id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDocumentedInformationApprovalForPublishing(){
        $this->db->select('documented_information.*, department.dep_name AS dep_name, section.section_name AS section_name, document_type.doc_type_name AS type, document_status.status_value AS status_name');
        $this->db->from('documented_information');
        $this->db->where('documented_information.status', 'AFP');
        $this->db->join('department', 'department.id = documented_information.dep_id', 'left');
        $this->db->join('section', 'section.id = documented_information.sec_id', 'left');
        $this->db->join('document_status', 'document_status.status_code = documented_information.status', 'left');
        $this->db->join('document_type', 'document_type.id = documented_information.doc_type_id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDocumentedInformationPublishing(){
        $this->db->select('documented_information.*, department.dep_name AS dep_name, section.section_name AS section_name, document_type.doc_type_name AS type, document_status.status_value AS status_name');
        $this->db->from('documented_information');
        $this->db->where('documented_information.status', 'PUBL');
        $this->db->join('department', 'department.id = documented_information.dep_id', 'left');
        $this->db->join('section', 'section.id = documented_information.sec_id', 'left');
        $this->db->join('document_status', 'document_status.status_code = documented_information.status', 'left');
        $this->db->join('document_type', 'document_type.id = documented_information.doc_type_id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDocumentedInformationPublished(){

        $this->db->select('documented_information.*, department.dep_name AS dep_name, section.section_name AS section_name, document_type.doc_type_name AS type, document_status.status_value AS status_name');
        $this->db->from('documented_information');
        $this->db->where('documented_information.status', 'PUB');
        $this->db->join('department', 'department.id = documented_information.dep_id', 'left');
        $this->db->join('section', 'section.id = documented_information.sec_id', 'left');
        $this->db->join('document_status', 'document_status.status_code = documented_information.status', 'left');
        $this->db->join('document_type', 'document_type.id = documented_information.doc_type_id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDocumentedInformationPublishedOwner(){

        $this->db->select('documented_information.*, department.dep_name AS dep_name, section.section_name AS section_name, document_type.doc_type_name AS type, document_status.status_value AS status_name');
        $this->db->from('documented_information');
        $this->db->where('documented_information.user_id', $this->session->userdata('user_id'));
        $this->db->where('documented_information.status', 'PUB');
        $this->db->join('department', 'department.id = documented_information.dep_id', 'left');
        $this->db->join('section', 'section.id = documented_information.sec_id', 'left');
        $this->db->join('document_status', 'document_status.status_code = documented_information.status', 'left');
        $this->db->join('document_type', 'document_type.id = documented_information.doc_type_id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDocumentedInformationPublishedDI($department_id, $document_type_id, $section){

        $subquery = $this->db->select('MAX(df.id) AS latest_file_id, df.doc_id')
            ->from('document_files df')
            ->group_by('df.doc_id')
            ->get_compiled_select();

        $this->db->select('documented_information.*, department.dep_name AS dep_name, section.section_name AS section_name, document_type.doc_type_name AS type, document_status.status_value AS status_name, latest_file_id.latest_file_id');
        $this->db->from('documented_information');
        $this->db->where('documented_information.status', 'PUB');
        $this->db->where('documented_information.dep_id', $department_id);
        $this->db->where('documented_information.doc_type_id', $document_type_id);
        $this->db->join('department', 'department.id = documented_information.dep_id', 'left');
        $this->db->join('section', 'section.id = documented_information.sec_id', 'left');
        $this->db->join('document_status', 'document_status.status_code = documented_information.status', 'left');
        $this->db->join('document_type', 'document_type.id = documented_information.doc_type_id', 'left');

        $this->db->join("($subquery) AS latest_file_id", 'documented_information.id = latest_file_id.doc_id', 'left');

        if($section){
            $this->db->where('documented_information.sec_id', $section);
        }

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDocumentedInformationPublishedDIOwner($department_id, $document_type_id, $section){

        $subquery = $this->db->select('MAX(df.id) AS latest_file_id, df.doc_id')
            ->from('document_files df')
            ->group_by('df.doc_id')
            ->get_compiled_select();

        $this->db->select('documented_information.*, department.dep_name AS dep_name, section.section_name AS section_name, document_type.doc_type_name AS type, document_status.status_value AS status_name, latest_file_id.latest_file_id');
        $this->db->from('documented_information');
        $this->db->where('documented_information.user_id', $this->session->userdata('user_id'));
        $this->db->where('documented_information.status', 'PUB');
        $this->db->where('documented_information.dep_id', $department_id);
        $this->db->where('documented_information.doc_type_id', $document_type_id);
        $this->db->join('department', 'department.id = documented_information.dep_id', 'left');
        $this->db->join('section', 'section.id = documented_information.sec_id', 'left');
        $this->db->join('document_status', 'document_status.status_code = documented_information.status', 'left');
        $this->db->join('document_type', 'document_type.id = documented_information.doc_type_id', 'left');
        $this->db->join("($subquery) AS latest_file_id", 'documented_information.id = latest_file_id.doc_id', 'left');

        if($section){
            $this->db->where('documented_information.sec_id', $section);
        }

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function saveDI($data){

        // Check if the 'existing' data exists and remove it
        if (isset($data['existing'])) {
            unset($data['existing']);
        }
    
        $status = 'FFU';
    
        $save_data = array(
            'doc_title' => $data['document_title'],
            'effectivity_date' => $data['effectivity_date'],
            'doc_type_id' => $data['doc_type_id'],
            'dep_id' => $data['dep_id'],
            'sec_id' => $data['sec_id'],
            'doc_code' => $data['doc_code'],
            'revision_no' => $data['revision_no'],
            'status' => $status,
            'created_date' => date('Y-m-d H:i:s'),
            'user_id' => $this->session->userdata('user_id'),
            'existing' => $data['existing_value'] // Save 'existing' checkbox value in the database
        );
        
        // Include the new fields if they exist in $data
        if (isset($data['prepared_by_existing'])) {
            $save_data['prepared_by_existing'] = $data['prepared_by_existing'];
            $save_data['final_review_by_existing'] = $data['final_review_by_existing'];
            $save_data['approved_by_existing'] = $data['approved_by_existing'];
            $save_data['prepared_by_position_existing'] = $data['prepared_by_position_existing'];
            $save_data['final_review_by_position_existing'] = $data['final_review_by_position_existing'];
            $save_data['approved_by_position_existing'] = $data['approved_by_position_existing'];
        }
        
        return $this->db->insert('documented_information', $save_data);
    }
    

    public function saveHistory($data){

        $data = array(
            'doc_id' => $data['doc_id'],
            'process' => $data['process'],
            'status' => $data['status'],
            'created_date' => date('Y-m-d H:i:s'),
            'remarks' => isset($data['remarks']) ? $data['remarks'] : '',
            'created_by' => $this->session->userdata('user_id')
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

    public function getDocumentStatus($doc_id) {
        // Query the database to retrieve the doc_title
        $query = $this->db->select('status')
                      ->from('documented_information')
                      ->where('id', $doc_id)
                      ->get();

        // Check if a result was found
        if ($query->num_rows() > 0) {
            return $query->row()->status;
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
            'sec_id' => $data['sec_id'],
            'doc_code' => $data['doc_code'],
            'revision_no' => $data['revision_no']
        );
    
        // Include additional fields only if 'existing' is checked
        if (isset($data['existing']) && $data['existing'] == '1') {
            $updateData['prepared_by_existing'] = $data['prepared_by_existing'];
            $updateData['final_review_by_existing'] = $data['final_review_by_existing'];
            $updateData['approved_by_existing'] = $data['approved_by_existing'];
            $updateData['prepared_by_position_existing'] = $data['prepared_by_position_existing'];
            $updateData['final_review_by_position_existing'] = $data['final_review_by_position_existing'];
            $updateData['approved_by_position_existing'] = $data['approved_by_position_existing'];
        }
    
        return $this->db->update('documented_information', $updateData);
    }

    public function updateDIStatus(array $data){
        $this->db->where('id', $data['doc_id']);

        $updateData = array(
            'status' =>  $data['status']
        );

        return $this->db->update('documented_information', $updateData);
    }

    public function updateDIReview(array $data, $review = ''){
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
            $review => $data[$review],
            $review.'_remarks' => $data[$review.'_remarks'],
            $review.'_by' => $this->session->userdata('user_id')
        );

        // Include additional fields only if 'existing' is checked
        if (isset($data['existing']) && $data['existing'] == '1') {
            $updateData['prepared_by_existing'] = $data['prepared_by_existing'];
            $updateData['final_review_by_existing'] = $data['final_review_by_existing'];
            $updateData['approved_by_existing'] = $data['approved_by_existing'];
            $updateData['prepared_by_position_existing'] = $data['prepared_by_position_existing'];
            $updateData['final_review_by_position_existing'] = $data['final_review_by_position_existing'];
            $updateData['approved_by_position_existing'] = $data['approved_by_position_existing'];
        }
            
        if(isset($data['sec_id'])){
            $updateData['sec_id'] = $data['sec_id'];
        }

        return $this->db->update('documented_information', $updateData);
    }
    
}

?>