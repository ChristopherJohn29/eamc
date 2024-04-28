<!DOCTYPE html>
<html lang="en" data-menu-color="brand">
   <head>
      <meta charset="utf-8" />
      <title>Register & Signup | Ubold - Responsive Bootstrap 5 Admin Dashboard</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
      <meta content="Coderthemes" name="author" />
      <!-- App favicon -->
      <link rel="shortcut icon" href="<?=base_url()?>assets/images/favicon.ico">
      <!-- Theme Config Js -->
      <script src="<?=base_url()?>assets/js/head.js"></script>
      <!-- Bootstrap css -->
      <link href="<?=base_url()?>assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" id="app-style" />
      <!-- App css -->
      <link href="<?=base_url()?>assets/css/app.min.css" rel="stylesheet" type="text/css" />
      <!-- Icons css -->
      <link href="<?=base_url()?>assets/css/icons.min.css" rel="stylesheet" type="text/css" />
      <link href="<?=base_url()?>assets/customcss/register.css" rel="stylesheet" type="text/css" />
   </head>
   <body class="authentication-bg authentication-bg-pattern">
    <div id="privacy-policy" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="standard-modalLabel">PRIVACY NOTICE</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>We at the EAMC Integrated Management Information System Section (“IMISS”) and Office for Strategy and Quality Management (“OSQM”) are committed to protecting all personal and other sensitive personal information obtained by registration and use of this iQMS.</p>
                    <p>By signing up to the iQMS, the following information will be collected:</p>
                    <ul>
                        <li>Full name;</li>
                        <li>E-mail address; and</li>
                        <li>Mobile Number.</li>
                    </ul>
                    <p>The above and other personal information supplied and/or obtained by the use of this iQMS shall be stored, processed, and later disposed of in accordance with applicable provisions of the National Archives of the Philippines (NAP) and the Data Privacy Act of 2012. Only the members of the IMISS and the OSQM have access to these sensitive and/or other personal data. Thus, rest assured that they shall only be processed for the purpose of maintaining the operability, efficiency, and effectiveness of the iQMS and the overall Quality Management System of East Avenue Medical Center;</p>
                    <p>For user applicants, all information and/or data which will be provided and/or uploaded to the iQMS must be devoid of personal, sensitive and/or other information not fit for public disclosure. To such end, user applicants likewise agree to either remove entirely, redact, or extract private and/or confidential information pursuant to Executive Order No. 2, s. 2016 Freedom of Information Memorandum Circular No. 4, s. 2019, and Republic Act No. 10173.</p>
                    <p>Finally, as data subjects, user-applicants have the right to request from the EAMC the reproduction, correction, or deletion of personal information submitted to the iQMS upon reasonable grounds.</p>
                    <p>For inquiries and other concerns, you may get in touch with IMISS through Local 438, or the OSQM through Local 445.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>

    <div id="terms" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="standard-modalLabel"></h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>iQMS USER REGISTRATION TERMS AND CONDITIONS</p>
                    <ol>
                        <li>Access to this website, maintained by the East Avenue Medical Center- Integrated Management Information System Section and Office for Strategy and Quality Management, is free to applicants applying for an access to online archiving and processing of documented information.</li>
                        <li>Safeguard of the created and registered account username and password, which shall be used as reference for all transactions in this website, shall be the responsibility of the applicant.</li>
                        <li>Correctness of the data encoded into the system must be assured by the applicant. Otherwise, corrections of data submitted can only be done by the administrators (IMISS and OSQM).</li>
                        <li>Viewing of the status of the application can only be accessed by the concerned applicant.</li>
                        <li>All entries shall be treated with utmost confidentiality and in accordance with the Data Privacy Act of 2012 (R.A. 10173).</li>
                    </ol>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>

    <div id="username-instruction" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="standard-modalLabel">Registration Instruction</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p><strong>Username:</strong></p>
                    <p>(Format: First letter of First Name-Middle Initial-Surname e.g. JCDELACRUZ)</p>
                    <p>- Auto Caps lock</p>
                    <p>- Duplication of username shall not be allowed. "Username is already used."</p>
                    <p>- May add a number if there is duplication e.g. JCDELACRUZ1</p>
               
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>

    <div id="password-instruction" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="standard-modalLabel">Registration Instruction</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p><strong>Password:</strong></p>
                    <p>- Minimum of 8 characters</p>
                    <p>- At least 1 number</p>
                    <p>- At least 1 symbol (=?<>@#$*!)</p>
                    <p>- Should not be the same as the username</p>
                    <p>- Password shall be encrypted</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>

    <div id="committee-instruction" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="standard-modalLabel">Registration Instruction</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p><strong>Committee/Division:</strong></p>
                    <p>- Committee: For Forms, Internal Quality Auditor, and Customer Satisfaction Committee.</p>
                    <p>- Division: For ISO Coordinator, Division Chief, DQT Member, Dept./Sec. Head, etc.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>


      <div class="account-pages mt-5 mb-5">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-md-8 col-lg-6 col-xl-8">
                  <div class="card bg-pattern">
                     <div class="card-body p-4">
                        <div class="text-center w-75 m-auto">
                            <div class="auth-brand">
                              <span>
                                 <img src="<?=base_url()?>assets/images/eastave.png" alt="" height="50">
                                 <h2>IQMS</h2>
                              </span>
                           </div>
                           <p class="text-muted mb-4 mt-3">Don't have an account? Create your account, it takes less than a minute</p>
                        </div>
                        <form action="#" class="register-form" id="register" >
                            <div class="row">
                                <div class="row mb-2">
                                    <div class="form-group col-md-3">
                                        <label class="form-label" for="firstName">First Name</label>
                                        <input type="text" class="form-control" id="firstName" placeholder="John" required>
                                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label class="form-label" for="middleInitial">Middle Name</label>
                                        <input type="text" class="form-control" id="middleName" placeholder="Cruz">
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label class="form-label" for="lastName">Last Name</label>
                                        <input type="text" class="form-control" id="lastName" placeholder="Doe" required>
                                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label class="form-label" for="suffix">Suffix</label>
                                        <input type="text" class="form-control" id="suffix" placeholder="Jr.">
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label class="form-label" for="postNominal">Post Nominal</label>
                                        <input type="text" class="form-control" id="postNominal" placeholder="MD">
                                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="form-group col-md-6">
                                        <label class="form-label" for="firstName">Username <i class="fe-info" data-bs-toggle="modal" data-bs-target="#username-instruction"></i></label>
                                        <input type="text" class="form-control" id="username" placeholder="JCDOE" required>
                                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label class="form-label" for="email">Password <i class="fe-info" data-bs-toggle="modal" data-bs-target="#password-instruction"></i></label>
                                        <div class="input-group input-group-merge">
                                            <input type="password" id="password" class="form-control" placeholder="Password">
                                            <div class="input-group-text" data-password="false">
                                                <span class="password-eye"></span>
                                            </div>
                                        </div>
                                        <ul class="parsley-errors-list filled hidden" id="password-error"><li class="parsley-required" id="password-error-text"></li></ul>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="form-group col-md-6">
                                        <label class="form-label" for="email">Email Address</label>
                                        <input type="email" class="form-control" id="email" placeholder="johncruzdoe@gmail.com" required>
                                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label class="form-label" for="mobileNumber">Mobile Number</label>
                                        <input type="tel" class="form-control" id="mobileNumber" min="11" placeholder="09123456789" required>
                                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-2 first col-md-12">
                                <div class="form-group col-md-6">
                                    <label class="form-label" for="designation">Committee / Division <i class="fe-info" data-bs-toggle="modal" data-bs-target="#committee-instruction"></i></label>
                                    <select class="form-control" id="designation" required>
                                        <option value="committee">Committee</option>
                                        <option value="division">Division</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="form-label" for="position">Position / Designation</label>
                                    <select class="form-control" id="position" required>
                                        <option value="Staff">Staff</option>
                                        <option value="Department Head">Department Head</option>
                                        <option value="Section Head">Section Head</option>
                                        <option value="Office Head">Office Head</option>
                                        <option value="Department Chair">Department Chair</option>
                                        <option value="Committee Chair">Committee Chair</option>
                                        <option value="Medical Officer">Medical Officer</option>
                                        <option value="Medical Specialist">Medical Specialist</option>
                                        <option value="Nurse Supervisor">Nurse Supervisor</option>
                                        <option value="Division Chief">Division Chief</option>
                                        <option value="Medical Center Chief">Medical Center Chief</option>
                                    </select>
                                    <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                </div>
                            </div>
                            <div class="row mb-2 second committee col-md-12">
                                <div class="form-group">
                                    <label class="form-label" for="committee">Section</label>
                                    <select class="form-control" id="committee">
                                        <option value="forms">Forms</option>
                                        <option value="internal_quality_audit">Internal Quality Audit</option>
                                        <option value="customer_satisfaction_committee">Customer Satisfaction Committee</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row mb-2 second d-none division col-md-12">
                                <div class="form-group">
                                    <label class="form-label" for="committee">Division</label>
                                    <select class="form-control" id="division">
                                    <?php
                                       foreach ($division as $key => $value) {
                                          echo '<option value="'.$value['id'].'">'.$value['div_name'].'</option>';
                                       }
                                    ?>
                                    </select>
                                </div>
                            </div>

                            <!-- comitee -->              
                            <div class="row mb-2 third forms col-md-12">
                                <div class="form-group">
                                    <label class="form-label" for="customer_satisfaction_committee">Role (Access Control)</label>
                                    <select class="form-control" id="forms">
                                        <option value="chair">Chair</option>
                                        <option value="member">Member</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row mb-2 third d-none internal_quality_audit col-md-12">
                                <div class="form-group">
                                    <label class="form-label" for="internal_quality_audit">Role (Access Control)</label>
                                    <select class="form-control" id="internal_quality_audit">
                                        <option value="chair">Chair</option>
                                        <option value="lead_auditor">Lead Auditor</option>
                                        <option value="auditor">Auditor</option>
                                        <option value="member">Member</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row mb-2 third d-none customer_satisfaction_committee col-md-12">
                                <div class="form-group">
                                    <label class="form-label" for="customer_satisfaction_committee">Role (Access Control)</label>
                                    <select class="form-control" id="customer_satisfaction_committee">
                                        <option value="chair">Chair</option>
                                    </select>
                                </div>
                            </div>




                            <div class="row mb-2 col-md-12">           
                            <?php
                              foreach ($division as $key => $value) {
                                 $department = $this->DepartmentModel->getDepartmentByDiv($value['id']);
                                 $departmentHtml = '';
                                 
                                 foreach ($department as $key => $val) {
                                    $departmentHtml .= '<option value="'.$val['id'].'">'.$val['dep_name'].'</option>';
                                 } 

                                 echo '<div class="form-group d-none fourth col-md-6 '.$value['id'].'-department"">
                                          <label class="form-label" for="'.$value['id'].'-department">Department</label>
                                          <select class="form-control department" id="'.$value['id'].'-department">
                                             '.$departmentHtml.'
                                          </select>
                                       </div>';  
                              }
                           ?>

                            <?php

                              foreach ($division as $key => $value) {

                                $department = $this->DepartmentModel->getDepartmentByDiv($value['id']);

                                foreach ($department as $key => $value) {
                                    $section = $this->SectionModel->getSectionByDep($value['id']);
                                    $sectionHtml = '';
                                    
                                    foreach ($section as $key => $val) {
                                       $sectionHtml .= '<option value="'.$val['id'].'">'.$val['section_name'].'</option>';
                                    } 
   
                                    echo '<div class="form-group d-none fifth col-md-6 '.$value['id'].'-section"">
                                             <label class="form-label" for="'.$value['id'].'-section">Section/Unit</label>
                                             <select class="form-control section" id="'.$value['id'].'-section">
                                                '.$sectionHtml.'
                                             </select>
                                          </div>';  
                                }

                              }
                              
                           ?>

                            <!-- division -->
                            <?php
                              foreach ($division as $key => $value) {
                                 if($value['id'] == '5'){
                                    echo '
                                       <div class="form-group d-none col-md-6 third '.$value['id'].'-division"">
                                          <label class="form-label" for="'.$value['id'].'-division">Role</label>
                                          <select class="form-control division" id="'.$value['id'].'-division">
                                             <option value="medical_center_chief">Medical Center Chief</option>
                                             <option value="department_head">Department Head</option>
                                             <option value="section_head">Section/Unit Head</option>
                                             <option value="viewer">Viewer</option>
                                             <option value="dqt_member">DQT Member</option>
                                             <option value="iso_coordinator">ISO Coordinator</option>
                                             <option value="osqm_admin">OSQM - Admin </option>
                                             <option value="osqm_dco">OSQM - Document Control Officer </option>
                                             <option value="osqm_do">OSQM - CAR Database Officer </option>
                                             <option value="osqm_qmr">OSQM - QMR  </option>
                                             <option value="osqm_la">OSQM - Lead Auditor  </option>
                                             <option value="osqm_staff">OSQM - Staff </option>
                                          </select>
                                       </div>';
                                 } else {
                                    echo '<div class="form-group d-none col-md-6 third '.$value['id'].'-division ">
                                          <label class="form-label" for="'.$value['id'].'-division">Role</label>
                                          <select class="form-control division" id="'.$value['id'].'-division">
                                             <option value="iso_coordinator">ISO Coordinator</option>
                                             <option value="div_chief">Division Chief</option>
                                             <option value="dqt_member">DQT Member</option>
                                             <option value="department_head">Department Head</option>
                                             <option value="section_head">Section/Unit Head</option>
                                             <option value="viewer">Viewer</option>
                                          </select>
                                       </div>';
                                 }
                              }
                           ?>

                            <div class="mb-3">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="checkbox-terms">
                                    <label class="form-check-label" for="checkbox-terms">I agree with the <a href="#" class="text-dark" data-bs-toggle="modal" data-bs-target="#terms">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <div class="">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="checkbox-privacy">
                                    <label class="form-check-label" for="checkbox-privacy">I agree with the <a href="#" class="text-dark" data-bs-toggle="modal" data-bs-target="#privacy-policy">Privacy Policy</a></label>
                                </div>
                            </div>

                           </div>
                            

                            <div class="row col-md-12 mb-4 mt-3">
                              <div class="text-center d-grid">
                                 <button class="btn btn-success" type="submit" id="submit-register"> Sign Up </button>
                              </div>
                            </div>


                            
                        </form>
                     </div>
                     <!-- end card-body -->
                  </div>
                  <!-- end card -->
                  <div class="row mt-3">
                     <div class="col-12 text-center">
                        <p class="text-white-50">Already have account? <a href="<?=base_url().'auth/login'?>" class="text-white ms-1"><b>Sign In</b></a></p>
                     </div>
                     <!-- end col -->
                  </div>
                  <!-- end row -->
               </div>
               <!-- end col -->
            </div>
            <!-- end row -->
         </div>
         <!-- end container -->
      </div>
      <!-- end page -->
      <footer class="footer footer-alt">
         <script>document.write(new Date().getFullYear())</script> &copy; Eastavenue Medical Center
      </footer>
      <!-- Theme Settings -->

      <!-- Vendor js -->
      <script src="<?=base_url()?>assets/js/vendor.min.js"></script>
      <!-- App js -->
      <script src="<?=base_url()?>assets/js/app.min.js"></script>
      <!-- Authentication js -->
      <script src="<?=base_url()?>assets/js/pages/authentication.init.js"></script>

      <script src="<?=base_url()?>assets/customjs/register.js"></script>
   </body>
</html>