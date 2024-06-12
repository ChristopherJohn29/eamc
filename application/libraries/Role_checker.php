<?php 

class Role_checker {
    protected $CI;

    public function __construct() {
        $this->CI =& get_instance();
        $this->CI->load->model('Role_model');
    }

    public function higherRole(){
        $requiredRoles = array(
            'designation' => 'division',
            'role' => ['osqm_dco', 'osqm_staff'],
        );

        if($this->checkRole($requiredRoles)){

        } elseif($this->CI->session->userdata('role') == 'super_admin'){

        } else {
            redirect('admin/dashboard');
        }
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

    public function checkViewerRole() {
        if ($this->checkRole(['role' => 'viewer'])) {

            $section = $this->CI->session->userdata('section') ? $this->CI->session->userdata('department') : 0;
            redirect(base_url().'admin/portal/'.$this->CI->session->userdata('division').'/'.$this->CI->session->userdata('department').'/1/'.$section); // Redirect if role is 'viewer'
        }
    }

}