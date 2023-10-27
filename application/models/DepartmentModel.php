<?php

class DepartmentModel extends CI_Model {

    public function getDepartment(){

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


    public function deleteDepartment($id){
        $this->db->where('id', $id);
        return $this->db->update('department', array('status' => 0));
    }

    public function saveDepartment($dep_name = '', $div_id = ''){
        $data = array(
            'dep_name' => $dep_name,
            'div_id' => $div_id,
            'created_date' => date('Y-m-d H:i:s'),
            'created_by' => 1
        );
        
        return $this->db->insert('department', $data);
    }

    public function updateDepartment(array $data){

        $this->db->where('id', $data['id']);
        return $this->db->update('department', array('dep_name' => $data['dep_name'], 'div_id' => $data['div_id']));

    }
    
}