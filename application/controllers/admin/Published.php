<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class published extends CI_Controller {

    public function __construct(){

        parent::__construct();
        $this->load->model('DocumentedInformationModel');
        $this->load->model('DepartmentModel');
        $this->load->model('DocumentTypeModel');
        
        $this->authentication->check_user_session();
    }

    public function details($division, $department, $documenttype, $section = 0){

        
        $data['page'] = 'admin/di_published';
		$data['title'] = 'Published';
        $data['customcss'] = 'di_published.css';
        $data['customjs'] = 'di_published.js';
        $data['department'] =  $this->DepartmentModel->getDepartment();
        $data['doctype'] =  $this->DocumentTypeModel->getDocumentType();
        $data['division_id'] = $division;
        $data['department_id'] = $department;
        $data['document_type_id'] = $documenttype;
        $data['sec_id'] = $section;

		$this->load->view('template/template', $data);
    }

    public function getDIPublishedDI(){

        $department_id = $_POST['department_id'];
        $document_type_id = $_POST['document_type_id'];
        $sec_id = $_POST['sec_id'];
        
        $documentedInformation =  $this->DocumentedInformationModel->getDocumentedInformationPublishedDI($department_id, $document_type_id, $sec_id );

        echo json_encode($documentedInformation);
    }


    public function portal($division, $department, $documenttype, $section = 0){

        
       
		$data['title'] = 'Published';
        $data['customcss'] = 'di_published.css';
        $data['customjs'] = 'di_published.js';
        $data['department'] =  $this->DepartmentModel->getDepartment();
        $data['doctype'] =  $this->DocumentTypeModel->getDocumentType();
        $data['division_id'] = $division;
        $data['department_id'] = $department;
        $data['document_type_id'] = $documenttype;
        $data['sec_id'] = $section;

		$this->load->view('admin/portal', $data);
    }



}