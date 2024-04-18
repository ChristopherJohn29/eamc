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
    
}