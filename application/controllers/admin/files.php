<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class files extends CI_Controller {

    public $doc_id;
    public $doc_user_id;

    public function __construct(){

        parent::__construct();

        $this->load->model('FileModel');
		$this->load->model('DepartmentModel');
        $this->load->model('DocumentedInformationModel');
        $this->authentication->check_user_session();
    }

	public function details($doc_id, $doc_user_id)
	{
        
        $this->doc_id = $doc_id;
        $this->doc_user_id = $doc_user_id;

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

		$data['page'] = 'admin/files';
		$data['title'] = 'Files';
        $data['customcss'] = 'files.css';
        $data['customjs'] = 'files.js';
        $data['doc_id'] = $this->doc_id;
        $data['doc_user_id'] = $this->doc_user_id;
		$data['document_title'] =  $this->DocumentedInformationModel->getDocumentTitle($this->doc_id);

		$this->load->view('template/template', $data);
	}

    public function delete()
    {
        $file_id = $_POST['files_id'];

        $save = $this->FileModel->deleteFile($file_id);
        
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
        $doc_file_title = $_POST['doc_file_title'];
        $filename = $_POST['filename'];
        $doc_id = $_POST['doc_id'];

        $save = $this->FileModel->saveFile($doc_file_title, $doc_id);
         
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }

    public function getFile($doc_id, $doc_user_id){

        $this->doc_id = $doc_id;
        $this->doc_user_id = $doc_user_id;

        $file = $this->FileModel->getFile($doc_id);

        echo json_encode($file);
        
    }

    public function update(){

        $data = array(
            'doc_file_title' => $_POST['doc_file_title'],
            'filename' => $_POST['filename'],
            'id' => $_POST['doc_file_id']
            
        );

        $save = $this->FileModel->updateFile($data);
        
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }
}
