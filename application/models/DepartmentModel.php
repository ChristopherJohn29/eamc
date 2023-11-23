<?php

class DepartmentModel extends CI_Model {

    public function loadDepartment(){

        $this->db->select('department.*, user_created.email AS created_by_email, user_updated.email AS last_updated_by_email, division.div_name AS div_name');
        $this->db->from('department');
        $this->db->where('department.status', 1);
        $this->db->join('users AS user_created', 'department.created_by = user_created.id', 'left');
        $this->db->join('users AS user_updated', 'department.last_update_by = user_updated.id', 'left');
        $this->db->join('division AS division', 'department.div_id = division.id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDepartment(){

        $this->db->select('department.*, user_created.email AS created_by_email, user_updated.email AS last_updated_by_email, division.div_name AS div_name');
        $this->db->from('department');
        $this->db->where('department.status', 1);
        $this->db->join('users AS user_created', 'department.created_by = user_created.id', 'left');
        $this->db->join('users AS user_updated', 'department.last_update_by = user_updated.id', 'left');
        $this->db->join('division AS division', 'department.div_id = division.id', 'left');

        $requiredRoles = array(
            'designation' => 'division',
            'role' => ['osqm_dco', 'osqm_qmr'],
        );

        if (!$this->role_checker->checkRole($requiredRoles)) {
            $this->db->where('department.id', $this->session->userdata('department'));
        }

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getDepartmentName($dep_id) {
        // Query the database to retrieve the doc_title
        $query = $this->db->select('dep_name')
                      ->from('department')
                      ->where('id', $dep_id)
                      ->get();

        // Check if a result was found
        if ($query->num_rows() > 0) {
            return $query->row()->dep_name;
        } else {
            // Handle the case when no matching record is found, e.g., return null or an error message.
            return null;
        }
    }

    

    public function getDepartmentByDiv($div_id = 1){

        $this->db->select('department.*, user_created.email AS created_by_email, user_updated.email AS last_updated_by_email, division.div_name AS div_name');
        $this->db->from('department');
        $this->db->where('department.status', 1);
        $this->db->where('department.div_id', $div_id);
        $this->db->join('users AS user_created', 'department.created_by = user_created.id', 'left');
        $this->db->join('users AS user_updated', 'department.last_update_by = user_updated.id', 'left');
        $this->db->join('division AS division', 'department.div_id = division.id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    public function getSectionByDip($dep_id = 1){

        $this->db->select('section.*, user_created.email AS created_by_email, user_updated.email AS last_updated_by_email, department.dep_name AS dep_name');
        $this->db->from('section');
        $this->db->where('section.status', 1);
        $this->db->where('section.dep_id', $dep_id);
        $this->db->join('users AS user_created', 'section.created_by = user_created.id', 'left');
        $this->db->join('users AS user_updated', 'section.last_update_by = user_updated.id', 'left');
        $this->db->join('department AS department', 'section.dep_id = department.id', 'left');

        $query = $this->db->get();
        $result = $query->result_array();

        return $result;
    }

    


    public function deleteDepartment($id){
        $this->db->where('id', $id);
        return $this->db->update('department', array('status' => 0, 'last_update_by' => $this->session->userdata('user_id')));
    }

    public function saveDepartment($dep_name = '', $div_id = ''){
        $data = array(
            'dep_name' => $dep_name,
            'div_id' => $div_id,
            'created_date' => date('Y-m-d H:i:s'),
            'created_by' => $this->session->userdata('user_id')
        );
        
        return $this->db->insert('department', $data);
    }

    public function updateDepartment(array $data){

        $this->db->where('id', $data['id']);
        return $this->db->update('department', array('dep_name' => $data['dep_name'], 'div_id' => $data['div_id'], 'last_update_by' => $this->session->userdata('user_id')));

    }
    
}