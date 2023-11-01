<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class documentedinformation extends CI_Controller {

    public function __construct(){

        parent::__construct();

        $this->load->model('DocumentedInformationModel');
        $this->load->model('DepartmentModel');
        $this->load->model('DocumentTypeModel');

        $this->authentication->check_user_session();
    }

    public function index(){

        $data['page'] = 'admin/di_list';
		$data['title'] = 'Documented Information List';
        $data['customcss'] = 'di_list.css';
        $data['customjs'] = 'di_list.js';
        $data['department'] =  $this->DepartmentModel->getDepartment();
        $data['doctype'] =  $this->DocumentTypeModel->getDocumentType();

		$this->load->view('template/template', $data);
    }

    public function getDIList(){
        $documentedInformation =  $this->DocumentedInformationModel->getDocumentedInformationList();

        echo json_encode($documentedInformation);
    }

    public function getDITR(){
        $documentedInformation =  $this->DocumentedInformationModel->getDocumentedInformationTechnicalReview();

        echo json_encode($documentedInformation);
    }

    public function technicalReview(){
        $data['page'] = 'admin/di_technical_review';
		$data['title'] = 'Technical Review';
        $data['customcss'] = 'doctr.css';
        $data['customjs'] = 'doctr.js';

		$this->load->view('template/template', $data);
    }

    public function save(){
        $data = $_POST;

        $save = $this->DocumentedInformationModel->saveDI($data);
        
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }

    public function update(){

        $data = $_POST;

        $save = $this->DocumentedInformationModel->updateDI($data);
        
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }
}