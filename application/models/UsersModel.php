<?php

class UsersModel extends CI_Model {

    public function getNewUsers() {

        $this->db->select('users.*, department.dep_name AS dep_name, division.div_name AS div_name, roles.role_name AS role_name');
        $this->db->from('users');
        $this->db->where('users.osqm_approved', 0);
        $this->db->join('department', 'users.department = department.id', 'left');
        $this->db->join('division', 'users.division = division.id', 'left');
        $this->db->join('roles', 'users.role = roles.role_initial', 'left');

        $query = $this->db->get();

        return $query->result_array();
    }

    public function getApprovedUsers() {

        $this->db->select('users.*, department.dep_name AS dep_name, division.div_name AS div_name, roles.role_name AS role_name');
        $this->db->from('users');
        $this->db->where('users.osqm_approved', 1);
        $this->db->join('department', 'users.department = department.id', 'left');
        $this->db->join('division', 'users.division = division.id', 'left');
        $this->db->join('roles', 'users.role = roles.role_initial', 'left');

        $query = $this->db->get();

        return $query->result_array();
    }

    public function denyUser($id){
        $this->db->where('id', $id);
        return $this->db->update('users', array('osqm_approved' => 2));
    }


    public function approveUser($id){
        $this->db->where('id', $id);
        return $this->db->update('users', array('osqm_approved' => 1));
    }
    
}