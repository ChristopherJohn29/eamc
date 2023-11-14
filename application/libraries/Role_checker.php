<?php 

class Role_checker {
    protected $CI;

    public function __construct() {
        $this->CI =& get_instance();
        $this->CI->load->model('Role_model');
    }

    public function checkRole($requiredRoles) {
        $userId = $this->CI->session->userdata('user_id');
        if ($userId) {
            $userRoles = $this->CI->Role_model->getRoles($userId);

            foreach ($requiredRoles as $field => $value) {
                // Check if the field is 'role' and if the user has any of the required roles
                if ($field === 'role') {
                    if (is_array($value)) {
                        // Check if user has any of the required roles
                        if (count(array_intersect($value, [$userRoles[$field]])) > 0) {
                            return true;
                        }
                    } else {
                        // Check if user has the required role
                        if ($userRoles[$field] == $value) {
                            return true;
                        }
                    }
                } else {
                    // Check other fields as usual
                    if (!empty($value) && isset($userRoles[$field]) && $userRoles[$field] != $value) {
                        return false; // User does not have the required value for the specified field
                    }
                }
            }

            return false; // User does not have the required 'role'
        }

        return false; // User not logged in
    }

}