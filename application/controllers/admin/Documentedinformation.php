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
        $this->load->model('MainModel');

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
        
        if($this->session->userdata('role') == 'super_admin'){
            $documentedInformation =  $this->DocumentedInformationModel->getDocumentedInformationListAdmin();
        }
        

        echo json_encode($documentedInformation);
    }

    public function getDIListFiltered(){

        $requiredRoles = array(
            'designation' => 'division',
            'role' => ['osqm_dco', 'osqm_qmr', 'osqm_staff'],
        );

        if(isset($_POST)){
            $documentedInformation = $this->DocumentedInformationModel->getDocumentedInformationListFiltered($_POST);
        } else {
            if ($this->role_checker->checkRole($requiredRoles)) {
                $documentedInformation =  $this->DocumentedInformationModel->getDocumentedInformationListAll();
            } else {
                $documentedInformation =  $this->DocumentedInformationModel->getDocumentedInformationList();
            }
            
            if($this->session->userdata('role') == 'super_admin'){
                $documentedInformation =  $this->DocumentedInformationModel->getDocumentedInformationListAdmin();
            }
        }


        echo json_encode($documentedInformation);
    }

    public function getDIListExport() {
        if (isset($_POST)) {
            $documentedInformation = $this->DocumentedInformationModel->getDocumentedInformationListFiltered($_POST);
        }
    
        $uniqueDI = array();
    
        foreach ($documentedInformation as $entry) {
            // Map fields to their new names
            $entry['ID'] = $entry['id'];
            $entry['Document Title'] = $entry['doc_title'];
            $entry['Document Code'] = $entry['doc_code'];
            $entry['Revision No.'] = $entry['revision_no'];
            $entry['Effectivity Date'] = $entry['effectivity_date'];
            $entry['Date Submitted'] = $entry['created_date'];
            $entry['Document Type'] = $entry['type']; 
            $entry['Department / Unit'] = $entry['dep_name'];
            $entry['Section'] = $entry['section_name'];
            $entry['Status'] = $entry['status_name'];
    
            // Remove unnecessary fields
            unset(
                $entry['id'], $entry['doc_title'], $entry['doc_code'], $entry['revision_no'], $entry['effectivity_date'],
                $entry['created_date'], $entry['doc_type_id'], $entry['dep_id'], $entry['sec_id'], $entry['status'],
                $entry['type'], $entry['dep_name'], $entry['section_name'], $entry['status_name']
            );
    
            // Add the entry to the uniqueDI array with 'ID' as the key
            $uniqueDI[] = $entry; // No need to use $entry['id'] as the key here
        }
    
        // Define the CSV headers
        $headers = array(
            'ID', 'Document Title', 'Document Code', 'Revision No.', 'Effectivity Date',
            'Date Submitted', 'Document Type', 'Department / Unit', 'Section', 'Status'
        );
    
        // Generate CSV content
        $csv = $this->array_to_csv_with_headers($uniqueDI, $headers);
    
        // Set headers to force download
        header('Content-Type: text/csv');
        header('Content-Disposition: attachment; filename="documented_information_export_' . date('Y-m-d') . '.csv"');
    
        // Output CSV data
        echo $csv;
        exit;
    }
    
    // Function to convert array to CSV format with headers
    private function array_to_csv_with_headers($array, $headers) {
        if (count($array) == 0) {
            return null;
        }
        ob_start();
        $df = fopen("php://output", 'w');
        fputcsv($df, $headers);
        foreach ($array as $row) {
            // Ensure each row matches the header order
            fputcsv($df, array(
                $row['ID'] ?? '',
                $row['Document Title'] ?? '',
                $row['Document Code'] ?? '',
                $row['Revision No.'] ?? '',
                $row['Effectivity Date'] ?? '',
                $row['Date Submitted'] ?? '',
                $row['Document Type'] ?? '',
                $row['Department / Unit'] ?? '',
                $row['Section'] ?? '',
                $row['Status'] ?? ''
            ));
        }
        fclose($df);
        return ob_get_clean();
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

    public function revision(){
        $data = $_POST;

        $save = $this->DocumentedInformationModel->saveRevision($data);
        
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
        
        $documentData = $this->DocumentedInformationModel->getDI($data['doc_id']);
        $dco = $this->UsersModel->fetchUserByRole('osqm_dco');
        $dephead = $this->UsersModel->fetchUserByDeptAndRole('department_head', $documentData[0]['dep_id']);
        
    
        if($_POST['technical_review'] == 'Approved'){

            $data['status'] = 'FIR';

            if (isset($data['existing']) && $data['existing'] == '1') {
                $data['status'] = 'PUB';

                $this->UsersModel->registerNotification($documentData[0]['user_id'], 'Congratulations! your Documented Information (ID-'.$data['doc_id'].') / Form was successfully published', 'DCM');
           
                foreach( $dco as $value){
                    $this->UsersModel->registerNotification($value['id'], 'You have successfully published a documented information (ID-'.$data['doc_id'].') / form', 'DCM');
                }
            } else {
                $this->UsersModel->registerNotification($documentData[0]['user_id'], 'Your Documented Information (ID-'.$data['doc_id'].') / Form has been approved, subject for Final Review', 'DCM');
           
                foreach( $dco as $value){
                    $this->UsersModel->registerNotification($value['id'], 'You have succesfuly evaluation and approved and Documented Information (ID-'.$data['doc_id'].') / form, subject for final review ', 'DCM');
                }

                foreach( $dephead as $value){
                    $this->UsersModel->registerNotification($value['id'], 'Documented Information (ID-'.$data['doc_id'].') has been evaluated by the DCO and subject for your review ', 'DCM');
                }

            }
        } 
        else if($_POST['technical_review'] == 'Disapproved')
        {
            $data['status'] = 'D';

            $this->UsersModel->registerNotification($documentData[0]['user_id'], 'Your Documented Information (ID-'.$data['doc_id'].') / Form has been disapproved, please DCO remarks', 'DCM');
           
            foreach( $dco as $value){
                $this->UsersModel->registerNotification($value['id'], 'You disapproved a Documented Information (ID-'.$data['doc_id'].') / Form  and returned to the ISO Coordinator', 'DCM');
            }

        }
        else if($_POST['technical_review'] == 'For Forms Committee Review')
        {
            $data['status'] = 'FCRA';
        }
        else {
            $data['status'] = 'AD';

            
            $this->UsersModel->registerNotification($documentData[0]['user_id'], 'Your Documented Information (ID-'.$data['doc_id'].') / Form has been approved as Draft by the DCO', 'DCM');
           
            foreach( $dco as $value){
                $this->UsersModel->registerNotification($value['id'], 'You have successfully approved a Documented Information (ID-'.$data['doc_id'].') / Form as draft', 'DCM');
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

    public function diHistory(){
        $this->role_checker->checkViewerRole();
        $data['page'] = 'admin/di_history';
		$data['title'] = 'Documented Info Logs';
        $data['customcss'] = 'di_logs.css';
        $data['customjs'] = 'di_logs.js';
        $data['role'] = $this->session->userdata('role');
        
		$this->load->view('template/template', $data);
    }

    public function getAllHistory(){

        $history =  $this->MainModel->getAllDIHistory();

        echo json_encode($history);
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

        $documentData = $this->DocumentedInformationModel->getDI($data['doc_id']);
        $dco = $this->UsersModel->fetchUserByRole('osqm_dco');
        $dephead = $this->UsersModel->fetchUserByDeptAndRole('department_head', $documentData[0]['dep_id']);
        $div = $this->UsersModel->fetchDivByDepID($documentData[0]['dep_id']);
        $divchief = $this->UsersModel->fetchUserByDivAndRole('div_chief', $div[0]['div_id']);

        if($_POST['final_review'] == 'Approved'){
            $data['status'] = 'APR';

            $this->UsersModel->registerNotification($documentData[0]['user_id'], 'Your Documented Information (ID-'.$data['doc_id'].') / Form has been Approved, subject for Approval of the Division Chief / MCC', 'DCM');
           
            foreach( $dephead as $value){
                $this->UsersModel->registerNotification($value['id'], 'You have successfully reviewed the documented information (ID-'.$data['doc_id'].') / form and subject for your Final Review and Approval', 'DCM');
            }

            foreach( $divchief as $value){
                $this->UsersModel->registerNotification($value['id'], 'A documented Information (ID-'.$data['doc_id'].') / Form has been Reviewed and subject for your final Review and Approval', 'DCM');
            }

        } else {
            $data['status'] = 'D';

            $this->UsersModel->registerNotification($documentData[0]['user_id'], 'Your Documented Information (ID-'.$data['doc_id'].') / Form has been Disapproved, please see Department Head remarks', 'DCM');
           
            foreach( $dephead as $value){
                $this->UsersModel->registerNotification($value['id'], 'You have disapproved a documented information (ID-'.$data['doc_id'].') / form and returned to ISO Coordinator', 'DCM');
            }

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

        $documentData = $this->DocumentedInformationModel->getDI($data['doc_id']);
        $dco = $this->UsersModel->fetchUserByRole('osqm_dco');
        $div = $this->UsersModel->fetchDivByDepID($documentData[0]['dep_id']);
        $divchief = $this->UsersModel->fetchUserByDivAndRole('div_chief', $div[0]['div_id']);

        if($_POST['approval'] == 'Approved'){
            $data['status'] = 'CHK';

            $this->UsersModel->registerNotification($documentData[0]['user_id'], 'Your Documented Information (ID-'.$data['doc_id'].') / Form has been approved, subject for checking by the DCO', 'DCM');
           
            foreach( $dco as $value){
                $this->UsersModel->registerNotification($value['id'], 'A documented information (ID-'.$data['doc_id'].') / form is subject for Checking by the DCO', 'DCM');
            }

            foreach( $divchief as $value){
                $this->UsersModel->registerNotification($value['id'], 'You have successfully reviewed and approved the documented information (ID-'.$data['doc_id'].') / form and subject for checking by the DCO', 'DCM');
            }

        } else {
            $data['status'] = 'D';

            $this->UsersModel->registerNotification($documentData[0]['user_id'], 'Your documented Information (ID-'.$data['doc_id'].') / Form has been disapproved by the Division Chief / MCC, please see remarks', 'DCM');
           
            foreach( $divchief as $value){
                $this->UsersModel->registerNotification($value['id'], 'You have disapproved the documented Information (ID-'.$data['doc_id'].') / Form and returned to ISO coordinator', 'DCM');
            }
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

        $documentData = $this->DocumentedInformationModel->getDI($data['doc_id']);
        $dco = $this->UsersModel->fetchUserByRole('osqm_dco');
        $qmr = $this->UsersModel->fetchUserByRole('osqm_qmr');

        if($_POST['checking'] == 'Approved'){
            $data['status'] = 'AFP';

            $this->UsersModel->registerNotification($documentData[0]['user_id'], 'Your Documented Information (ID-'.$data['doc_id'].') / Form has been approved by the DCO after checking, subject for Approval for Publishing', 'DCM');
           
            foreach( $dco as $value){
                $this->UsersModel->registerNotification($value['id'], 'you have successfully checked and approved a documented information (ID-'.$data['doc_id'].') / form', 'DCM');
            }

            foreach( $qmr as $value){
                $this->UsersModel->registerNotification($value['id'], 'A documented information (ID-'.$data['doc_id'].') / form has been checked by the DCO and subject for your Approval for Publishing', 'DCM');
            }

        } else {
            $data['status'] = 'D';

            $this->UsersModel->registerNotification($documentData[0]['user_id'], 'Your Documented information (ID-'.$data['doc_id'].') / Form has been disapproved by the the DCO after  checking', 'DCM');
           
            foreach( $dco as $value){
                $this->UsersModel->registerNotification($value['id'], 'You have disapproved a documented information (ID-'.$data['doc_id'].') / form after checking by the DCO and has been returned to the ISO Coordinator', 'DCM');
            }
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

        $documentData = $this->DocumentedInformationModel->getDI($data['doc_id']);
        $dco = $this->UsersModel->fetchUserByRole('osqm_dco');
        $qmr = $this->UsersModel->fetchUserByRole('osqm_qmr');

        if($_POST['approval_for_publishing'] == 'Approved'){
            $data['status'] = 'PUBL';

            $this->UsersModel->registerNotification($documentData[0]['user_id'], 'Your Documented Information (ID-'.$data['doc_id'].') / Form has bee approved for publishing', 'DCM');
           
            foreach( $dco as $value){
                $this->UsersModel->registerNotification($value['id'], 'A documented Informatin (ID-'.$data['doc_id'].') / Form has been approved  by the QMR for publishing. subject for publishing by the DCO', 'DCM');
            }

            foreach( $qmr as $value){
                $this->UsersModel->registerNotification($value['id'], 'You have successfully approved a documented information (ID-'.$data['doc_id'].') / form for publishing', 'DCM');
            }

        } else {
            $data['status'] = 'D';

            $this->UsersModel->registerNotification($documentData[0]['user_id'], 'Your documented Information (ID-'.$data['doc_id'].') / Form has been disapproved for publishing, please see remarks by the QMR', 'DCM');

            foreach( $qmr as $value){
                $this->UsersModel->registerNotification($value['id'], 'You have disapproved a documented information (ID-'.$data['doc_id'].') / form for publishing and has been returned to the  ISO coordinator', 'DCM');
            }
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

        $documentData = $this->DocumentedInformationModel->getDI($data['doc_id']);
        $dco = $this->UsersModel->fetchUserByRole('osqm_dco');

        if($_POST['publishing'] == 'Approved'){
            $data['status'] = 'PUB';

            $this->UsersModel->registerNotification($documentData[0]['user_id'], 'Congratulations! your Documented Information (ID-'.$data['doc_id'].') / Form was successfully published', 'DCM');
           
            foreach( $dco as $value){
                $this->UsersModel->registerNotification($value['id'], 'You have successfully published a documented information (ID-'.$data['doc_id'].') / form', 'DCM');
            }

        } else {
            $data['status'] = 'D';

            $this->UsersModel->registerNotification($documentData[0]['user_id'], 'Publishing of your Documented Information (ID-'.$data['doc_id'].') / Form has been disaproved, please see remarks by the DCO', 'DCM');
           
            foreach( $dco as $value){
                $this->UsersModel->registerNotification($value['id'], 'You have disapproved a documented information (ID-'.$data['doc_id'].') / form  and returned to the ISO Coordinator', 'DCM');
            }

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