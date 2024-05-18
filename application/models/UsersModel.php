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

    public function get_user_by_id($user_id) {
        // Query the database to find the user by ID
        $query = $this->db->get_where('users', array('id' => $user_id));
        
        // Check if a user with the provided ID exists
        if ($query->num_rows() > 0) {
            // Return the user's data
            return $query->row_array();
        } else {
            // Return false if no user found with the provided ID
            return false;
        }
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

    public function updateUserAndEmail($id){
        $email = uniqid().''.uniqid().'@gmail.com';
        $username = uniqid().''.uniqid();

        $this->db->where('id', $id);
        return $this->db->update('users', array('email' =>  $email, 'username' => $username));
    }


    public function approveUser($id){
        $this->db->where('id', $id);
        return $this->db->update('users', array('osqm_approved' => 1));
    }

    public function save_verification_token($user_id, $verification_token) {
        // Update the user's verification token in the database
        $this->db->set('verification_token', $verification_token);
        $this->db->where('id', $user_id);
        $this->db->update('users');
        
        // Check if the update was successful
        if ($this->db->affected_rows() > 0) {
            return true; // Token saved successfully
        } else {
            return false; // Token saving failed
        }
    }

    public function get_by_verification_token($verification_token, $user_id) {
        // Query the database to find the user by verification token and user ID
        $query = $this->db->get_where('users', array(
            'verification_token' => $verification_token,
            'id' => $user_id
        ));
        
        // Check if a user with the verification token and user ID exists
        if ($query->num_rows() > 0) {
            // Return the user's data
            return $query->row_array();
        } else {
            // Return false if no user found with the verification token and user ID
            return false;
        }
    }
    
    public function mark_as_verified($user_id) {
        // Update the user's record to mark them as verified
        $this->db->set('email_verified', 1);
        $this->db->where('id', $user_id);
        $this->db->update('users');
        
        // Check if the update was successful
        if ($this->db->affected_rows() > 0) {
            return true; // User marked as verified successfully
        } else {
            return false; // Marking as verified failed
        }
    }

    public function registerNotification($user_id, $message, $module){

        $data = [
            'user_id' => $user_id,
            'message' => $message,
            'module' => $module,
            'status' => 2,
            'date_published' => date('Y-m-d H:i:s')
        ];
        
        $this->db->insert('notification', $data);

        return $this->db->affected_rows() > 0 ? true : false;
    }

    public function fetchNotification() {
        $this->db->select('*');
        $this->db->from('notification');
        $this->db->where('user_id', $this->session->userdata('user_id'));
        $this->db->where('status !=', 0);
        $this->db->order_by('id', 'DESC');
    
        $query = $this->db->get();
    
        return $query->result_array();
    }

    public function readNotification(){
        $this->db->where('user_id', $this->session->userdata('user_id'));
        $this->db->where('status !=', 0);

        return $this->db->update('notification', array('status' => 1));
    }

    public function clearNotification(){
        $this->db->where('user_id', $this->session->userdata('user_id'));
        $this->db->where('status !=', 0);

        return $this->db->update('notification', array('status' => 0));
    }

    public function deleteNotification($id){
        $this->db->where('user_id', $this->session->userdata('user_id'));
        $this->db->where('id', $id);

        return $this->db->update('notification', array('status' => 0));
    }


    public function fetchUserByRole($role){
        $this->db->select('*');
        $this->db->from('users');
        $this->db->where('role', $role);
    
        $query = $this->db->get();
    
        return $query->result_array();
    }

    public function fetchUserByDeptSectAndRole($role, $dept){
        $this->db->select('*');
        $this->db->from('users');
        $this->db->where('role', $role);
        $this->db->where('department_section', $dept);
    
        $query = $this->db->get();
    
        return $query->result_array();
    }

    public function fetchUserBySectAndRole($role, $dept){
        $this->db->select('*');
        $this->db->from('users');
        $this->db->where('role', $role);
        $this->db->where('section', $dept);
    
        $query = $this->db->get();
    
        return $query->result_array();
    }

    public function fetchUserByDeptAndRole($role, $dept){
        $this->db->select('*');
        $this->db->from('users');
        $this->db->where('role', $role);
        $this->db->where('department', $dept);
    
        $query = $this->db->get();
    
        return $query->result_array();
    }

    public function fetchUserByDivAndRole($role, $dept){
        $this->db->select('*');
        $this->db->from('users');
        $this->db->where('role', $role);
        $this->db->where('division', $dept);
    
        $query = $this->db->get();
    
        return $query->result_array();
    }

    public function fetchDivByDepID($dept){
        $this->db->select('*');
        $this->db->from('department');
        $this->db->where('id', $dept);
    
        $query = $this->db->get();
    
        return $query->result_array();
    }
    
}