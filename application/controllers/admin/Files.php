<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class files extends CI_Controller {

    public $doc_id;
    public $doc_user_id;

    public function __construct(){

        parent::__construct();

        $this->load->model('FileModel');
        $this->load->model('FileDetailsModel');
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
        $data['status'] = $this->DocumentedInformationModel->getDocumentStatus($this->doc_id);
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
        $filename = $_POST['filename'];
        $doc_id = $_POST['doc_id'];
        $filelink = $_POST['filelink'];

        $unique_file_name = time() . '_' . uniqid() . '_' . rand(1000, 9999);

        // Handle the uploaded file
        $config['upload_path'] = './uploads/'; // Set your upload directory
        $config['allowed_types'] = 'pdf|doc|docx|ppt|pptx|xls|xlsx|jpg|jpeg|png|gif'; // Define allowed file types
        $config['max_size'] = 2048; // Define maximum file size in kilobytes
        $config['file_name'] = $unique_file_name; // Set the filename to the unique name
    
        $this->load->library('upload', $config);
    
        if ($this->upload->do_upload('file')) {
            $file_data = $this->upload->data();
            $unique_file_name = $file_data['file_name'];
            
        } else {
            $unique_file_name = '';
            $error = $this->upload->display_errors();
        }

        $data = array(
            'filename' => $filename,
            'filelink' => $filelink,
            'doc_id' => $doc_id,
            'unique_file_name' => $unique_file_name,
            'created_date' => date('Y-m-d H:i:s'),
            'created_by' => $this->session->userdata('user_id')
        );

        // FFU -> Tecnical Review
        // APPROVED DRAFT -> Technical Review
        // Disapprove -> Technical Review

        $documentData = $this->DocumentedInformationModel->getDI($doc_id);

        if ($documentData[0]['status'] == 'FFU' || $documentData[0]['status'] == 'AD' || $documentData[0]['status'] == 'D') {
            if ($documentData[0]['doc_type_id'] == '1') {
                $status = 'FCRA';
            } else {
                $status = 'TR';
            }
        }

        $didata = array(
            'doc_id' => $doc_id,
            'status' => $status
        );

        $save = $this->DocumentedInformationModel->updateDIStatus($didata);


        $save = $this->FileModel->saveFile($data);

        
        if ($save) {

            $inserted_id = $this->db->insert_id();

            $data_file_revision = array(
                'doc_file_id' => $inserted_id,
                'revision' => 'Initial',
                'revision_date' => date('Y-m-d H:i:s'),
                'remarks_by_osqm' => '',
                'remarks_date' => '',
            );

            $save = $this->FileDetailsModel->saveFileRevision($data_file_revision);

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

}
