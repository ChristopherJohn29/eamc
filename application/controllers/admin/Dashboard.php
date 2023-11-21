<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class dashboard extends CI_Controller {

	public function __construct(){

        parent::__construct();

        $this->load->model('UsersModel');
        // $this->load->model('DocumentInformationModel');
        // $this->load->model('CarModel');
        $this->authentication->check_user_session();
		$this->role_checker->checkViewerRole();
		
    }

	public function index()
	{
		$data['page'] = 'admin/dashboard';
		$data['title'] = 'Dashboard';

		// $data['newuserlist'] = 'Dashboard';
		// $data['approveduserlist'] = 'Dashboard';
		// $data['carlist'] = 'Dashboard';
		// $data['dilist'] = 'Dashboard';
		$this->load->view('template/template', $data);
	}
}
