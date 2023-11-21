<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class revisions extends CI_Controller {

    public $doc_id;
    public $doc_user_id;

    public function __construct(){

        parent::__construct();

        $this->load->model('RevisionModel');
		$this->load->model('DepartmentModel');
        $this->load->model('DocumentedInformationModel');
        $this->authentication->check_user_session();
    }

	public function details($doc_id, $doc_user_id)
	{
        $this->role_checker->checkViewerRole();
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

		$data['page'] = 'admin/revisions';
		$data['title'] = 'Revisions';
        $data['customcss'] = 'revisions.css';
        $data['customjs'] = 'revisions.js';
        $data['doc_id'] = $this->doc_id;
        $data['doc_user_id'] = $this->doc_user_id;
		$data['document_title'] =  $this->DocumentedInformationModel->getDocumentTitle($this->doc_id);

		$this->load->view('template/template', $data);
	}

    public function delete()
    {
        $revision_id = $_POST['revision_id'];

        $save = $this->RevisionModel->deleteRevision($revision_id);
        
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
        $revision_desc = $_POST['revision_desc'];
        $doc_id = $_POST['doc_id'];

        $save = $this->RevisionModel->saveRevision($revision_desc, $doc_id);
         
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }

    public function getRevision($doc_id, $doc_user_id){

        $this->doc_id = $doc_id;
        $this->doc_user_id = $doc_user_id;

        $revision = $this->RevisionModel->getRevision($doc_id);

        echo json_encode($revision);
        
    }

    public function update(){

        $data = array(
            'revision_desc' => $_POST['revision_desc'],
            'id' => $_POST['revision_id']
            
        );

        $save = $this->RevisionModel->updateRevision($data);
        
        if ($save) {
            // Insertion successful
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }
}
