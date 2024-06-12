<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class documenttype extends CI_Controller {

    public function __construct(){

        parent::__construct();

        $this->load->model('DocumentTypeModel');
		$this->load->model('DepartmentModel');
        $this->authentication->check_user_session();
    }

	public function index()
	{
        $this->role_checker->higherRole();
        $this->role_checker->checkViewerRole();
		$data['page'] = 'admin/document_type';
		$data['title'] = 'Document Type';
        $data['customcss'] = 'document_type.css';
        $data['customjs'] = 'document_type.js';

		$this->load->view('template/template', $data);
	}

    public function delete()
    {
        $doc_type_id = $_POST['doc_type_id'];

        $save = $this->DocumentTypeModel->deleteDocumentType($doc_type_id);
        
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
        $doc_type_name = $_POST['doc_type_name'];

        $save = $this->DocumentTypeModel->saveDocumentType($doc_type_name);
        
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }

    public function getDocumentType(){

        $documenttype = $this->DocumentTypeModel->getDocumentType();

        echo json_encode($documenttype);
        
    }

    public function update(){

        $data = array(
            'doc_type_name' => $_POST['doc_type_name'],
            'id' => $_POST['doc_type_id']
            
        );

        $save = $this->DocumentTypeModel->updateDocumentType($data);
        
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }
}
