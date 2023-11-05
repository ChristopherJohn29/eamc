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

    public function getDIHistory(){
        $doc_id = $_POST['doc_id'];
        $documentedInformation =  $this->DocumentedInformationModel->getDocumentedInformationHistory($doc_id);

        echo json_encode($documentedInformation);
    }

    public function getDITR(){
        $documentedInformation =  $this->DocumentedInformationModel->getDocumentedInformationTechnicalReview();

        echo json_encode($documentedInformation);
    }

    public function technicalReview(){
        $data['page'] = 'admin/di_technical_review';
		$data['title'] = 'Technical Review';
        $data['customcss'] = 'di_tr.css';
        $data['customjs'] = 'di_tr.js';
        $data['department'] =  $this->DepartmentModel->getDepartment();
        $data['doctype'] =  $this->DocumentTypeModel->getDocumentType();

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

    public function updateTR(){

        $data = $_POST;

        if($_POST['technical_review'] == 'Approved'){
            $data['status'] = 'FR';
        }
   
        $save = $this->DocumentedInformationModel->updateDITR($data);
        
        if ($save) {
            // Insertion successful
            $datahistory['doc_id'] = $data['doc_id'];
            $datahistory['process'] = "Technical Review";
            $datahistory['status'] = $_POST['technical_review'];
            $this->DocumentedInformationModel->saveHistory($datahistory);
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }
}