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
    
}