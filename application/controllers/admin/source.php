<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class source extends CI_Controller {

    public function __construct(){

        parent::__construct();

        $this->load->model('SourceModel');
		$this->load->model('DepartmentModel');
        $this->authentication->check_user_session();
    }

	public function index()
	{
		$data['page'] = 'admin/source';
		$data['title'] = 'Source';
        $data['customcss'] = 'source.css';
        $data['customjs'] = 'source.js';
		$data['department'] =  $this->DepartmentModel->getDepartment();

		$this->load->view('template/template', $data);
	}

    public function delete()
    {
        $source_id = $_POST['source_id'];

        $save = $this->SourceModel->deleteSource($source_id);
        
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
        $source_name = $_POST['source_name'];

        $save = $this->SourceModel->saveSource($source_name);
        
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }

    public function getSource(){

        $source = $this->SourceModel->getSource();

        echo json_encode($source);
        
    }

    public function update(){

        $data = array(
            'source_name' => $_POST['source_name'],
            'id' => $_POST['source_id']
            
        );

        $save = $this->SourceModel->updateSource($data);
        
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }
}
