<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class section extends CI_Controller {

    public function __construct(){

        parent::__construct();

        $this->load->model('SectionModel');
		$this->load->model('DepartmentModel');
        $this->authentication->check_user_session();
    }

	public function index()
	{
        $this->role_checker->checkViewerRole();
		$data['page'] = 'admin/section';
		$data['title'] = 'Section';
        $data['customcss'] = 'section.css';
        $data['customjs'] = 'section.js';
		$data['department'] =  $this->DepartmentModel->getDepartment();

		$this->load->view('template/template', $data);
	}

    public function delete()
    {
        $section_id = $_POST['section_id'];

        $save = $this->SectionModel->deleteSection($section_id);
        
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }

    public function save()
    {
        $section_name = $_POST['section_name'];
        $dep_id = $_POST['dep_id'];

        $save = $this->SectionModel->saveSection($section_name, $dep_id);
        
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }

    public function getSection(){

        $section = $this->SectionModel->getSection();

        echo json_encode($section);
        
    }

    public function update(){

        $data = array(
            'section_name' => $_POST['section_name'],
            'dep_id' => $_POST['dep_id'],
            'id' => $_POST['section_id']
        );

        $save = $this->SectionModel->updateSection($data);
        
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }
}
