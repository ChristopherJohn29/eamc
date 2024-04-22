<?php

class LoginModel extends CI_Model {
    public function __construct() {
        parent::__construct();
    }

    public function login($emailOrUsername, $password) {
        // Perform a database query to check if the user with the given email and password exists.
        $this->db->where('(email = ' . $this->db->escape($emailOrUsername) . ' OR username = ' . $this->db->escape($emailOrUsername) . ')');
        // $this->db->where('email_verified', 1);
        $this->db->where('osqm_approved', 1);
        $this->db->where('status', 1);
        $this->db->where('password', md5($password)); // Hash the input password with MD5.
        $query = $this->db->get('users');

        // If a user with the provided email and password is found, return the user's data.
        if ($query->num_rows() > 0) {
            return $query->row();
        }

        return false; // User not found.
    }

    public function checkCreds($emailOrUsername, $password) {
        // Perform a database query to check if the user with the given email and password exists.
        $this->db->where('(email = ' . $this->db->escape($emailOrUsername) . ' OR username = ' . $this->db->escape($emailOrUsername) . ')');
        $this->db->where('status', 1);
        $this->db->where('password', md5($password)); // Hash the input password with MD5.
        $query = $this->db->get('users');

        // If a user with the provided email and password is found, return the user's data.
        if ($query->num_rows() > 0) {
            return $query->row();
        }

        return false; // User not found.
    }

    public function checkDCO($emailOrUsername, $password) {
        // Perform a database query to check if the user with the given email and password exists.
        $this->db->where('(email = ' . $this->db->escape($emailOrUsername) . ' OR username = ' . $this->db->escape($emailOrUsername) . ')');
        // $this->db->where('email_verified', 1);
        $this->db->where('osqm_approved', 1);
        $this->db->where('status', 1);
        $this->db->where('password', md5($password)); // Hash the input password with MD5.
        $query = $this->db->get('users');

        // If a user with the provided email and password is found, return the user's data.
        if ($query->num_rows() > 0) {
            return $query->row();
        }

        return false; // User not found.
    }

    public function checkEmail($emailOrUsername, $password) {
        // Perform a database query to check if the user with the given email and password exists.
        $this->db->where('(email = ' . $this->db->escape($emailOrUsername) . ' OR username = ' . $this->db->escape($emailOrUsername) . ')');
        $this->db->where('email_verified', 1);
        $this->db->where('osqm_approved', 1);
        $this->db->where('status', 1);
        $this->db->where('password', md5($password)); // Hash the input password with MD5.
        $query = $this->db->get('users');

        // If a user with the provided email and password is found, return the user's data.
        if ($query->num_rows() > 0) {
            return $query->row();
        }

        return false; // User not found.
    }
}