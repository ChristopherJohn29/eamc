<?php

class RegisterModel extends CI_Model {

    public function registerUser($data) {
        // Check if email and username already exist in the database
        $email = $data['email'];
        $username = $data['username'];

        $this->db->where('email', $email);
        $email_exists = $this->db->get('users');

        $this->db->where('username', $username);
        $username_exists = $this->db->get('users');

        if ($email_exists->num_rows() > 0 || $username_exists->num_rows() > 0) {
            return false; // Email or username already exists
        }

        // Insert data into the database
        $this->db->insert('users', $data);

        return true; // Registration was successful
    }
    
    public function saveUser($data) {
        $id = $data['id'];
    
        // Check if the user already exists in the database
        $this->db->where('id', $id);
        $user_exists = $this->db->get('users');
    
        if ($user_exists->num_rows() > 0) {
            // User exists, update the data
            $this->db->where('id', $id);
            $this->db->update('users', $data);
            return true; // Data updated successfully
        } else {
            // User doesn't exist, insert new data
            $this->db->insert('users', $data);
            return true; // Registration was successful
        }
    }
}