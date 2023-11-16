<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class filedetails extends CI_Controller {

    public $file_id;

    public function __construct(){

        parent::__construct();

        $this->load->model('FileModel');
        $this->load->model('FileDetailsModel');
		$this->load->model('DepartmentModel');
        $this->load->model('DocumentedInformationModel');
        $this->authentication->check_user_session();
    }

	public function details($file_id)
	{
        $this->file_id = $file_id;

        if (isset($_SERVER['HTTP_REFERER'])) {
            $referer = $_SERVER['HTTP_REFERER'];

            // Check if the referrer is on the same server
        if (strpos($referer, $_SERVER['HTTP_HOST']) !== false) {
                $data['goback'] = $referer;
            } else {
                $data['goback'] = base_url().'admin/documentedinformation';
            }
        } else {
            $data['goback'] = base_url().'admin/documentedinformation';
        }

		$data['page'] = 'admin/filedetails';
		$data['title'] = 'File Details';
        $data['customcss'] = 'filedetails.css';
        $data['customjs'] = 'filedetails.js';
        $data['doc_file_id'] = $this->file_id;
		$data['filename'] =  $this->FileDetailsModel->getDocumentTitle($this->file_id);
        $data['filelink'] =  $this->FileDetailsModel->getDocumentLink($this->file_id);
        $data['unique_file_name'] =  $this->FileDetailsModel->getDocumentFile($this->file_id);

		$this->load->view('template/template', $data);
	}

    public function portalDetails($department, $file_id)
	{
        $this->file_id = $file_id;

        $data['department_name'] =  $this->DepartmentModel->getDepartmentName($department);
        $data['customcss'] = 'portalfiledetails.css';
        $data['customjs'] = 'portalfiledetails.js';
        $data['doc_file_id'] = $this->file_id;
		$data['filename'] =  $this->FileDetailsModel->getDocumentTitle($this->file_id);
        $data['filelink'] =  $this->FileDetailsModel->getDocumentLink($this->file_id);
        $data['unique_file_name'] =  $this->FileDetailsModel->getDocumentFile($this->file_id);

		$this->load->view('admin/portalfiledetails', $data);
	}



    public function save()
    {
        $doc_file_id = $_POST['doc_file_id'];
        $revision = $_POST['revision'];

        $data_file_revision = array(
            'doc_file_id' => $doc_file_id,
            'revision' => $revision,
            'revision_date' => date('Y-m-d H:i:s'),
            'remarks_by_osqm' => '',
            'remarks_date' => '',
        );

        $save = $this->FileDetailsModel->saveFileRevision($data_file_revision);
        
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }

    public function getFileRevision($file_id){

        $this->file_id = $file_id;

        $file = $this->FileDetailsModel->getFileRevision($file_id);

        echo json_encode($file);
    }

    public function update(){
        
        $doc_file_revision_id = $_POST['doc_file_revision_id'];
        $revision = $_POST['revision'];


        $data_file_revision = array(
            'doc_file_revision_id' => $doc_file_revision_id,
            'revision' => $revision
        );

        if($_POST['remarks_by_osqm']){
            $data_file_revision['remarks_by_osqm'] =  $_POST['remarks_by_osqm'];


        }

        $save = $this->FileDetailsModel->updateFileRevision($data_file_revision);
        
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }


}
