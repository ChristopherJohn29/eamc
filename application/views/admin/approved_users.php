<div class="content">
   <!-- Start Content-->
   <div class="container-fluid">

   <div id="update-user" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
         <div class="modal-dialog modal-xl">
            <div class="modal-content">
               <div class="modal-header">
                  <h4 class="modal-title" id="standard-modalLabel">Update User</h4>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">

               <form action="#" class="register-form" id="register" >
                  <input type="hidden" id="user_id" value="">
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
                                        <label class="form-label" for="firstName">Username</label>
                                        <input type="text" class="form-control" id="username" placeholder="JCDOE" required>
                                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label class="form-label" for="email">Password</label>
                                        <div class="input-group input-group-merge">
                                            <input type="password" id="password" value="" class="form-control password" placeholder="Password" autocomplete="new-password">
                                            <div class="input-group-text password-show" data-password="false">
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
                                    <label class="form-label" for="designation">Comitee / Division</label>
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

                           </div>
                            

                            <div class="row col-md-12 mb-4 mt-3">
                              <div class="text-center d-grid">
                                 <button class="btn btn-success" type="submit" id="submit-register"> Update </button>
                              </div>
                            </div>


                            
                        </form>
                 
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
               </div>
            </div>
            <!-- /.modal-content -->
         </div>
         <!-- /.modal-dialog -->
      </div>
      <!-- start page title -->
      <div class="row">
         <div class="col-12">
            <div class="page-title-box">
          
               <h4 class="page-title"><?=$title?></h4>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-12">
            <div class="card">
               <div class="card-body">
                  <table id="approved-users-datatable" class="table dt-responsive nowrap w-100">
                     <thead>
                        <tr>
                           <th>Fullname</th>
                           <th>Username</th>
                           <th>Email</th>
                           <th>Mobile Number</th>
                           <th>Designation</th>
                           <th>Division</th>
                           <th>Department</th>
                           <th>Section</th>
                           <th>Role</th>
                           <th>Approved By</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>


                     </tbody>
                  </table>
               </div>
               <!-- end card body-->
            </div>
            <!-- end card -->
         </div>
         <!-- end col-->
      </div>
      <!-- end row -->
   </div>
   <!-- container -->
</div>