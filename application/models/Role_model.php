<?php 

class Role_model extends CI_Model {
    public function getRoles($userId) {
        $query = $this->db->get_where('users', array('id' => $userId));
        $user = $query->row();
        if ($user) {
            return array(
                'designation' => $user->designation,
                'section' => $user->section,
                'role' => $user->role,
                'division' => $user->division,
                'department' => $user->department,
            );
        }
        return array();
    }
}