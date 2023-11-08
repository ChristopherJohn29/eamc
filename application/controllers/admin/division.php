<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class division extends CI_Controller {

    public function __construct(){

        parent::__construct();

        $this->load->model('DivisionModel');
        $this->load->model('DocumentTypeModel');
        $this->load->model('DepartmentModel');
        $this->authentication->check_user_session();
    }

	public function index()
	{
		$data['page'] = 'admin/division';
		$data['title'] = 'Division';
        $data['customcss'] = 'division.css';
        $data['customjs'] = 'division.js';

		$this->load->view('template/template', $data);
	}

    public function delete()
    {
        $div_id = $_POST['div_id'];

        $save = $this->DivisionModel->deleteDivision($div_id);
        
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
        $div_name = $_POST['div_name'];

        $save = $this->DivisionModel->saveDivision($div_name);
        
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }

    public function getDivision(){

        $division = $this->DivisionModel->getDivision();

        echo json_encode($division);
        
    }

    public function update(){

        $data = array(
            'div_name' => $_POST['div_name'],
            'id' => $_POST['div_id'],
        );

        $save = $this->DivisionModel->updateDivision($data);
        
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }
}
