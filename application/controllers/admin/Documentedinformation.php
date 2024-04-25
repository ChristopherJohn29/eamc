<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class documentedinformation extends CI_Controller {

    public function __construct(){

        parent::__construct();

        $this->load->model('DocumentedInformationModel');
        $this->load->model('DepartmentModel');
        $this->load->model('SectionModel');
        $this->load->model('DocumentTypeModel');
        $this->load->model('UsersModel');

        $this->authentication->check_user_session();
    }

    public function index(){
        $this->role_checker->checkViewerRole();
        
        $data['page'] = 'admin/di_list';
		$data['title'] = 'Documented Information List';
        $data['customcss'] = 'di_list.css';
        $data['customjs'] = 'di_list.js';

        $requiredRoles = array(
            'designation' => 'division',
            'role' => ['osqm_dco', 'osqm_qmr'],
        );

        if (!$this->role_checker->checkRole($requiredRoles)) {
            $data['department'] =  $this->DepartmentModel->getDepartment();
        } else {
            $data['department'] =  $this->DepartmentModel->loadDepartment();
        }

        $data['section'] =  $this->SectionModel->getSection();
        $data['doctype'] =  $this->DocumentTypeModel->getDocumentType();

		$this->load->view('template/template', $data);
    }

    public function getDIList(){

        $requiredRoles = array(
            'designation' => 'division',
            'role' => ['osqm_dco', 'osqm_qmr', 'osqm_staff'],
        );

        if ($this->role_checker->checkRole($requiredRoles)) {
            $documentedInformation =  $this->DocumentedInformationModel->getDocumentedInformationListAll();
        } else {
            $documentedInformation =  $this->DocumentedInformationModel->getDocumentedInformationList();
        }

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

    public function getDIFormsReview(){
        $documentedInformation =  $this->DocumentedInformationModel->getDocumentedInformationFormsReview();

        echo json_encode($documentedInformation);
    }

    public function getDIFinalReview(){
        $documentedInformation =  $this->DocumentedInformationModel->getDocumentedInformationFinalReview();

        echo json_encode($documentedInformation);
    }

    public function getDIApproval(){
        $documentedInformation =  $this->DocumentedInformationModel->getDocumentedInformationApproval();

        echo json_encode($documentedInformation);
    }

    public function getDIChecking(){
        $documentedInformation =  $this->DocumentedInformationModel->getDocumentedInformationChecking();

        echo json_encode($documentedInformation);
    }

    public function getDIApprovalForPublishing(){
        $documentedInformation =  $this->DocumentedInformationModel->getDocumentedInformationApprovalForPublishing();

        echo json_encode($documentedInformation);
    }

    public function getDIPublishing(){
        $documentedInformation =  $this->DocumentedInformationModel->getDocumentedInformationPublishing();

        echo json_encode($documentedInformation);
    }

    public function getDIPublished(){

        $requiredRoles = array(
            'designation' => 'division',
            'role' => ['osqm_dco', 'osqm_qmr'],
        );

        if ($this->role_checker->checkRole($requiredRoles)) {
            $documentedInformation =  $this->DocumentedInformationModel->getDocumentedInformationPublished();
        } else {
            $documentedInformation =  $this->DocumentedInformationModel->getDocumentedInformationPublishedOwner();
        }

        

        echo json_encode($documentedInformation);
    }

    public function technicalReview(){

        $requiredRoles = array(
            'designation' => 'division',
            'role' => ['osqm_dco'],
        );

        if ($this->role_checker->checkRole($requiredRoles)) {

        $data['page'] = 'admin/di_technical_review';
		$data['title'] = 'Technical Review';
        $data['customcss'] = 'di_tr.css';
        $data['customjs'] = 'di_tr.js';

        $requiredRoles = array(
            'designation' => 'division',
            'role' => ['osqm_dco', 'osqm_qmr'],
        );

        if (!$this->role_checker->checkRole($requiredRoles)) {
            $data['department'] =  $this->DepartmentModel->getDepartment();
        } else {
            $data['department'] =  $this->DepartmentModel->loadDepartment();
        }

        $data['doctype'] =  $this->DocumentTypeModel->getDocumentType();
        $data['section'] =  $this->SectionModel->getSection();

		$this->load->view('template/template', $data);

        } else {
            // User doesn't have the required roles, show an error or redirect
            echo "Access denied. You don't have the required roles.";
        }
    }

    public function formsReview(){

        $requiredRoles = array(
            'designation' => 'committee',
            'section' => 'forms',
            'role' => ['chair', 'member'],
        );

        if ($this->role_checker->checkRole($requiredRoles)) {

        $data['page'] = 'admin/di_forms_review';
		$data['title'] = 'Forms Review';
        $data['customcss'] = 'di_forms_review.css';
        $data['customjs'] = 'di_forms_review.js';

        $data['department'] =  $this->DepartmentModel->loadDepartment();

        $data['doctype'] =  $this->DocumentTypeModel->getDocumentType();
        $data['section'] =  $this->SectionModel->getSection();

		$this->load->view('template/template', $data);

        } else {
            // User doesn't have the required roles, show an error or redirect
            echo "Access denied. You don't have the required roles.";
        }

    }

    public function finalReview(){
        $requiredRoles = array(
            'designation' => 'division',
            'role' => ['department_head', 'osqm_qmr'],
        );

        if ($this->role_checker->checkRole($requiredRoles)) {
        $data['page'] = 'admin/di_final_review';
		$data['title'] = 'Final Review';
        $data['customcss'] = 'di_final_review.css';
        $data['customjs'] = 'di_final_review.js';

        $requiredRoles = array(
            'designation' => 'division',
            'role' => ['osqm_dco', 'osqm_qmr'],
        );

        if (!$this->role_checker->checkRole($requiredRoles)) {
            $data['department'] =  $this->DepartmentModel->getDepartment();
        } else {
            $data['department'] =  $this->DepartmentModel->loadDepartment();
        }

        $data['doctype'] =  $this->DocumentTypeModel->getDocumentType();
        $data['section'] =  $this->SectionModel->getSection();

		$this->load->view('template/template', $data);

        } else {
            // User doesn't have the required roles, show an error or redirect
            echo "Access denied. You don't have the required roles.";
        }
    }

    public function approval(){
        $requiredRoles = array(
            'designation' => 'division',
            'role' => ['div_chief', 'medical_center_chief'],
        );

        if ($this->role_checker->checkRole($requiredRoles)) {

        $data['page'] = 'admin/di_approval';
		$data['title'] = 'Approval';
        $data['customcss'] = 'di_approval.css';
        $data['customjs'] = 'di_approval.js';

        $requiredRoles = array(
            'designation' => 'division',
            'role' => ['osqm_dco', 'osqm_qmr'],
        );

        if (!$this->role_checker->checkRole($requiredRoles)) {
            $data['department'] =  $this->DepartmentModel->getDepartment();
        } else {
            $data['department'] =  $this->DepartmentModel->loadDepartment();
        }

        $data['doctype'] =  $this->DocumentTypeModel->getDocumentType();
        $data['section'] =  $this->SectionModel->getSection();

		$this->load->view('template/template', $data);

        } else {
            // User doesn't have the required roles, show an error or redirect
            echo "Access denied. You don't have the required roles.";
        }
    }


    public function checking(){

        $requiredRoles = array(
            'designation' => 'division',
            'role' => ['osqm_dco'],
        );

        if ($this->role_checker->checkRole($requiredRoles)) {

        $data['page'] = 'admin/di_checking';
		$data['title'] = 'Checking';
        $data['customcss'] = 'di_checking.css';
        $data['customjs'] = 'di_checking.js';

        $requiredRoles = array(
            'designation' => 'division',
            'role' => ['osqm_dco', 'osqm_qmr'],
        );

        if (!$this->role_checker->checkRole($requiredRoles)) {
            $data['department'] =  $this->DepartmentModel->getDepartment();
        } else {
            $data['department'] =  $this->DepartmentModel->loadDepartment();
        }

        $data['doctype'] =  $this->DocumentTypeModel->getDocumentType();
        $data['section'] =  $this->SectionModel->getSection();

		$this->load->view('template/template', $data);

        } else {
            // User doesn't have the required roles, show an error or redirect
            echo "Access denied. You don't have the required roles.";
        }
    }


    public function approvalForPublishing(){

        $requiredRoles = array(
            'designation' => 'division',
            'role' => ['osqm_qmr'],
        );

        if ($this->role_checker->checkRole($requiredRoles)) {

        $data['page'] = 'admin/di_ap';
		$data['title'] = 'Approval For Publishing';
        $data['customcss'] = 'di_ap.css';
        $data['customjs'] = 'di_ap.js';

        $requiredRoles = array(
            'designation' => 'division',
            'role' => ['osqm_dco', 'osqm_qmr'],
        );

        if (!$this->role_checker->checkRole($requiredRoles)) {
            $data['department'] =  $this->DepartmentModel->getDepartment();
        } else {
            $data['department'] =  $this->DepartmentModel->loadDepartment();
        }

        $data['doctype'] =  $this->DocumentTypeModel->getDocumentType();
        $data['section'] =  $this->SectionModel->getSection();

		$this->load->view('template/template', $data);
        
        } else {
            // User doesn't have the required roles, show an error or redirect
            echo "Access denied. You don't have the required roles.";
        }
    }

    public function publishing(){

        $requiredRoles = array(
            'designation' => 'division',
            'role' => ['osqm_dco'],
        );

        if ($this->role_checker->checkRole($requiredRoles)) {

        $data['page'] = 'admin/di_publishing';
		$data['title'] = 'Publishing';
        $data['customcss'] = 'di_publishing.css';
        $data['customjs'] = 'di_publishing.js';
        
        $requiredRoles = array(
            'designation' => 'division',
            'role' => ['osqm_dco', 'osqm_qmr'],
        );

        if (!$this->role_checker->checkRole($requiredRoles)) {
            $data['department'] =  $this->DepartmentModel->getDepartment();
        } else {
            $data['department'] =  $this->DepartmentModel->loadDepartment();
        }

        $data['doctype'] =  $this->DocumentTypeModel->getDocumentType();
        $data['section'] =  $this->SectionModel->getSection();

		$this->load->view('template/template', $data);
        
        } else {
            // User doesn't have the required roles, show an error or redirect
            echo "Access denied. You don't have the required roles.";
        }
    }
    
    

    public function published(){
        $data['page'] = 'admin/di_p';
		$data['title'] = 'Published';
        $data['customcss'] = 'di_p.css';
        $data['customjs'] = 'di_p.js';

        $requiredRoles = array(
            'designation' => 'division',
            'role' => ['osqm_dco', 'osqm_qmr'],
        );

        if (!$this->role_checker->checkRole($requiredRoles)) {
            $data['department'] =  $this->DepartmentModel->getDepartment();
        } else {
            $data['department'] =  $this->DepartmentModel->loadDepartment();
        }

        $data['doctype'] =  $this->DocumentTypeModel->getDocumentType();
        $data['section'] =  $this->SectionModel->getSection();

		$this->load->view('template/template', $data);
    }


    public function save(){
        $data = $_POST;
    
        // Check if 'existing' checkbox is checked
        $existingChecked = isset($data['existing']) && $data['existing'] === 'true';
    
        // Include the 'existing' checkbox value in the data being inserted
        $data['existing_value'] = $existingChecked ? 1 : 0;

        if ($existingChecked) {
            // Include the new fields only if 'existing' checkbox is checked
            $extraData = array(
                'prepared_by_existing' => $data['prepared_by_existing'],
                'final_review_by_existing' => $data['final_review_by_existing'],
                'approved_by_existing' => $data['approved_by_existing'],
                'prepared_by_position_existing' => $data['prepared_by_position_existing'],
                'final_review_by_position_existing' => $data['final_review_by_position_existing'],
                'approved_by_position_existing' => $data['approved_by_position_existing']
            );
    
            // Merge the extra data with the original data
            $data = array_merge($data, $extraData);
        }
    
        // Unset 'existing' key as it's not part of the table columns
        unset($data['existing']);
    
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

        $dco = $this->UsersModel->fetchUserByRole('osqm_dco');
        $documentData = $this->DocumentedInformationModel->getDI($data['doc_id']);
       
        
        if($_POST['technical_review'] == 'Approved'){

            $data['status'] = 'FIR';

            if (isset($data['existing']) && $data['existing'] == '1') {
                $data['status'] = 'PUB';

                $this->UsersModel->registerNotification($documentData[0]['user_id'], 'Congratulations! your Documented Information ('.$data['doc_id'].') / Form was successfully published', 'DCM');
           
                foreach( $dco as $value){
                    $this->UsersModel->registerNotification($value['id'], 'You have successfully published a documented information ('.$data['doc_id'].') / form', 'DCM');
                }
            } else {
                $this->UsersModel->registerNotification($documentData[0]['user_id'], 'Your Documented Information ('.$data['doc_id'].') / Form has been approved, subject for Final Review', 'DCM');
           
                foreach( $dco as $value){
                    $this->UsersModel->registerNotification($value['id'], 'You have succesfuly evaluation and approved and Documented Information ('.$data['doc_id'].') / form, subject for final review ', 'DCM');
                }
            }
        } 
        else if($_POST['technical_review'] == 'Disapproved')
        {
            $data['status'] = 'D';

            $this->UsersModel->registerNotification($documentData[0]['user_id'], 'Your Documented Information ('.$data['doc_id'].') / Form has been disapproved, please DCO remarks', 'DCM');
           
            foreach( $dco as $value){
                $this->UsersModel->registerNotification($value['id'], 'You  disapproved a DOcumented Information ('.$data['doc_id'].') / Form  and returned to the ISO Coordinator', 'DCM');
            }

        }
        else if($_POST['technical_review'] == 'For Forms Committee Review')
        {
            $data['status'] = 'FCRA';
        }
        else {
            $data['status'] = 'AD';

            
            $this->UsersModel->registerNotification($documentData[0]['user_id'], 'Your Documented Information ('.$data['doc_id'].') / Form has been approved as Draft by the DCO', 'DCM');
           
            foreach( $dco as $value){
                $this->UsersModel->registerNotification($value['id'], 'You have successfully approved a Documented Information ('.$data['doc_id'].') / Form as draft', 'DCM');
            }
        }
   
        $save = $this->DocumentedInformationModel->updateDIReview($data, 'technical_review');
        
        if ($save) {
            // Insertion successful
            $datahistory['doc_id'] = $data['doc_id'];
            $datahistory['process'] = "Technical Review";
            $datahistory['status'] = $_POST['technical_review'];
            $datahistory['remarks'] = $_POST['technical_review_remarks'];
            $this->DocumentedInformationModel->saveHistory($datahistory);
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }

    public function updateFormsReview(){

        $data = $_POST;

        if($_POST['forms_review'] == 'Approved'){
            $data['status'] = 'TR';
        } else {
            $data['status'] = 'FR';
        }
   
        $save = $this->DocumentedInformationModel->updateDIReview($data, 'forms_review');
        
        if ($save) {
            // Insertion successful
            $datahistory['doc_id'] = $data['doc_id'];
            $datahistory['process'] = "Forms Review";
            $datahistory['status'] = $_POST['forms_review'];
            $datahistory['remarks'] = $_POST['forms_review_remarks'];
            $this->DocumentedInformationModel->saveHistory($datahistory);
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }

    public function updateFinalReview(){

        $data = $_POST;

        if($_POST['final_review'] == 'Approved'){
            $data['status'] = 'APR';
        } else {
            $data['status'] = 'TR';
        }
   
        $save = $this->DocumentedInformationModel->updateDIReview($data, 'final_review');
        
        if ($save) {
            // Insertion successful
            $datahistory['doc_id'] = $data['doc_id'];
            $datahistory['process'] = "Final Review";
            $datahistory['status'] = $_POST['final_review'];
            $datahistory['remarks'] = $_POST['final_review_remarks'];
            $this->DocumentedInformationModel->saveHistory($datahistory);
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }

    public function updateApproval(){

        $data = $_POST;

        if($_POST['approval'] == 'Approved'){
            $data['status'] = 'CHK';
        } else {
            $data['status'] = 'FIR';
        }
   
        $save = $this->DocumentedInformationModel->updateDIReview($data, 'approval');
        
        if ($save) {
            // Insertion successful
            $datahistory['doc_id'] = $data['doc_id'];
            $datahistory['process'] = "Approval";
            $datahistory['status'] = $_POST['approval'];
            $datahistory['remarks'] = $_POST['approval_remarks'];
            $this->DocumentedInformationModel->saveHistory($datahistory);
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }


    public function updateChecking(){

        $data = $_POST;

        if($_POST['checking'] == 'Approved'){
            $data['status'] = 'AFP';
        } else {
            $data['status'] = 'APR';
        }
   
        $save = $this->DocumentedInformationModel->updateDIReview($data, 'checking');
        
        if ($save) {
            // Insertion successful
            $datahistory['doc_id'] = $data['doc_id'];
            $datahistory['process'] = "Checking";
            $datahistory['status'] = $_POST['checking'];
            $datahistory['remarks'] = $_POST['checking_remarks'];
            $this->DocumentedInformationModel->saveHistory($datahistory);
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }

    public function updateApprovalForPublishing(){

        $data = $_POST;

        if($_POST['approval_for_publishing'] == 'Approved'){
            $data['status'] = 'PUBL';
        } else {
            $data['status'] = 'CHK';
        }
   
        $save = $this->DocumentedInformationModel->updateDIReview($data, 'approval_for_publishing');
        
        if ($save) {
            // Insertion successful
            $datahistory['doc_id'] = $data['doc_id'];
            $datahistory['process'] = "Approval For Publishing";
            $datahistory['status'] = $_POST['approval_for_publishing'];
            $datahistory['remarks'] = $_POST['approval_for_publishing_remarks'];
            $this->DocumentedInformationModel->saveHistory($datahistory);
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }


    public function updatePublishing(){

        $data = $_POST;

        if($_POST['publishing'] == 'Approved'){
            $data['status'] = 'PUB';
        } else {
            $data['status'] = 'AFP';
        }
   
        $save = $this->DocumentedInformationModel->updateDIReview($data, 'publishing');
        
        if ($save) {
            // Insertion successful
            $datahistory['doc_id'] = $data['doc_id'];
            $datahistory['process'] = "Publishing";
            $datahistory['status'] = $_POST['publishing'];
            $datahistory['remarks'] = $_POST['publishing_remarks'];
            $this->DocumentedInformationModel->saveHistory($datahistory);
            echo "saved";
        } else {
            // Insertion failed
            echo "error";
        }
    }

}