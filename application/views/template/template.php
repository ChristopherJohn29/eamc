<!DOCTYPE html>
<html lang="en" data-topbar-color="brand" data-bs-theme="light" data-layout-mode="detached" data-layout-width="default" data-menu-color="brand" data-menu-icon="default" data-sidenav-size="default" class="">
   <head>
      <meta charset="utf-8" />
      <title>East Avenue Medical Center IQMS</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- App favicon -->
      <link rel="shortcut icon" href="<?=base_url()?>assets/images/favicon.ico">
      <!-- plugin css -->
      <link href="<?=base_url()?>assets/libs/jquery-toast-plugin/jquery.toast.min.css" rel="stylesheet" type="text/css" />
      <link href="<?=base_url()?>assets/libs/datatables.net-bs5/css/dataTables.bootstrap5.min.css" rel="stylesheet" type="text/css" />
      <link href="<?=base_url()?>assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css" rel="stylesheet" type="text/css" />
      <!-- Theme Config Js -->
      <script src="<?=base_url()?>assets/js/head.js"></script>
      <!-- Bootstrap css -->
      <link href="<?=base_url()?>assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" id="app-style" />
      <!-- App css -->
      <link href="<?=base_url()?>assets/css/app.min.css" rel="stylesheet" type="text/css" />
      <!-- Icons css -->

      <link href="<?=base_url()?>assets/css/icons.min.css" rel="stylesheet" type="text/css" />
      <link href="<?=base_url()?>assets/customcss/global.css" rel="stylesheet" type="text/css" />

      <link href="<?=base_url()?>assets/libs/multiselect/css/multi-select.css" rel="stylesheet" type="text/css" />
      <link href="<?=base_url()?>assets/libs/select2/css/select2.min.css" rel="stylesheet" type="text/css" />
      <link href="<?=base_url()?>assets/libs/selectize/css/selectize.bootstrap3.css" rel="stylesheet" type="text/css" />


      <?php 
      if(isset($customcss)){
         echo '<link href="'.base_url().'assets/customcss/'.$customcss.'" rel="stylesheet" type="text/css" />';
      }
      ?>
      

   </head>
   <body>
      <!-- Begin page -->
      <div id="wrapper" data-base_url="<?=base_url()?>">
         <!-- ========== Menu ========== -->
         <div class="app-menu">
            <div class="logo-box mt-2">
               <!-- Brand Logo Light -->
               <a href="https://eamc-iqms.infoadvance.com.ph/" target="_blank" class="logo-light">
               <img src="<?=base_url()?>assets/images/eastave.png" alt="logo" class="avatar-md rounded-circle mt-3 ">
               </a>
            </div>
            <!-- menu-left -->
            <div class="scrollbar mt-3">
               <!-- User box -->
               <!--- Menu -->
               <ul class="menu">
                  <?php $this->load->view('template/sidebar') ?>
               </ul>
               <!--- End Menu -->
               <div class="clearfix"></div>
            </div>
         </div>
         <!-- ========== Left menu End ========== -->
         <!-- ============================================================== -->
         <!-- Start Page Content here -->
         <!-- ============================================================== -->
         <div class="content-page">
            <!-- ========== Topbar Start ========== -->
            <div class="navbar-custom">
               <div class="topbar">
                  <div class="topbar-menu d-flex align-items-center gap-1">
                     <!-- Topbar Brand Logo -->
                     <div class="logo-box">
                        <!-- Brand Logo Light -->
                        <a href="index.html" class="logo-light">
                        <img src="<?=base_url()?>assets/images/logo-light.png" alt="logo" class="logo-lg">
                        <img src="<?=base_url()?>assets/images/logo-sm.png" alt="small logo" class="logo-sm">
                        </a>
                        <!-- Brand Logo Dark -->
                        <a href="index.html" class="logo-dark">
                        <img src="<?=base_url()?>assets/images/logo-dark.png" alt="dark logo" class="logo-lg">
                        <img src="<?=base_url()?>assets/images/logo-sm.png" alt="small logo" class="logo-sm">
                        </a>
                     </div>
                     <!-- Sidebar Menu Toggle Button -->
                     <button class="button-toggle-menu">
                     <i class="mdi mdi-menu"></i>
                     </button>
                     <!-- Dropdown Menu -->

                     <!-- Mega Menu Dropdown -->
               
                  </div>
                  <ul class="topbar-menu d-flex align-items-center">
                     <!-- Topbar Search Form -->
               
                     <!-- Fullscreen Button -->
                     <li class="d-none d-md-inline-block">
                        <a class="nav-link waves-effect waves-light" href="" data-toggle="fullscreen">
                        <i class="fe-maximize font-22"></i>
                        </a>
                     </li>
                     <!-- Search Dropdown (for Mobile/Tablet) -->
                     <li class="dropdown d-lg-none">
                        <a class="nav-link dropdown-toggle waves-effect waves-light arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                        <i class="ri-search-line font-22"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                           <form class="p-3">
                              <input type="search" class="form-control" placeholder="Search ..." aria-label="Recipient's username">
                           </form>
                        </div>
                     </li>
                     <!-- App Dropdown -->
                   
                     <!-- Language flag dropdown  -->
        
                     <!-- Notofication dropdown -->
                     <li class="dropdown notification-list">
                        <a class="nav-link dropdown-toggle waves-effect waves-light arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                        <i class="fe-bell font-22"></i>
                        <span class="badge bg-danger rounded-circle noti-icon-badge notification-number"></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                           <div class="p-2 border-top-0 border-start-0 border-end-0 border-dashed border mb-2">
                              <div class="row align-items-center">
                                 <div class="col">
                                    <h6 class="m-0 font-16 fw-semibold"> Notification</h6>
                                 </div>
                                 <div class="col-auto">
                                    <a href="#" class="text-dark text-decoration-underline clear-notification">
                                    <small>Clear All</small>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div class="px-1 notification-div" style="max-height: 300px; min-width: 300px; overflow-y: scroll;">
                              <!-- item-->
                              
                              <!-- item-->
                              <div class="text-center">
                                 <i class="mdi mdi-dots-circle mdi-spin text-muted h3 mt-0"></i>
                              </div>
                           </div>
                           <!-- All-->
                        </div>
                     </li>





                     <!-- Light/Dark Mode Toggle Button -->
                     <li class="d-none d-sm-inline-block">
                        <div class="nav-link waves-effect waves-light" id="light-dark-mode">
                           <i class="ri-moon-line font-22"></i>
                        </div>
                     </li>
                     <!-- User Dropdown -->
                     <li class="dropdown">
                        <a class="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                        <img src="<?=base_url()?>assets/images/users/user-1.jpg" alt="user-image" class="rounded-circle">
                        <span class="ms-1 d-none d-md-inline-block">
                        <?php echo $this->session->userdata('firstname'); ?> <i class="mdi mdi-chevron-down"></i>
                        </span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end profile-dropdown ">
                           <!-- item-->
                           <div class="dropdown-header noti-title">
                              <h6 class="text-overflow m-0">Welcome !</h6>
                           </div>
                           <!-- item-->
                           <a href="#" class="dropdown-item notify-item" data-bs-toggle='modal'  data-bs-target='#update-user-profile'>
                           <i class="fe-user"></i>
                           <span>My Account</span>
                           </a>
                           <!-- item-->
                           <!-- item-->
                           <a href="javascript:void(0);" class="dropdown-item notify-item">
                           <i class="fe-lock"></i>
                           <span>Lock Screen</span>
                           </a>
                           <div class="dropdown-divider"></div>
                           <!-- item-->
                           <a href="<?=base_url()?>/auth/login/signout" class="dropdown-item notify-item">
                           <i class="fe-log-out"></i>
                           <span>Logout</span>
                           </a>
                        </div>
                     </li>
                     <!-- Right Bar offcanvas button (Theme Customization Panel) -->
      
                  </ul>
               </div>
            </div>

            <div id="update-user-profile" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
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

            <!-- ========== Topbar End ========== -->
            <?php $this->load->view($page)?>
            <!-- content -->
            <!-- Footer Start -->
            <footer class="footer">
               <div class="container-fluid">
                  <div class="row">
                     <div class="col-md-6">
                        <div>
                           <script>document.write(new Date().getFullYear())</script> © East Avenue Medical Center</a>
                        </div>
                     </div>
                     <div class="col-md-6">

                     </div>
                  </div>
               </div>
            </footer>
            <!-- end Footer -->
         </div>
         <!-- ============================================================== -->
         <!-- End Page content -->
         <!-- ============================================================== -->
      </div>
      <!-- END wrapper -->
      <!-- Theme Settings -->

      <!-- Vendor js -->
      <script src="<?=base_url()?>assets/js/vendor.min.js"></script>
      <!-- App js -->
      <script src="<?=base_url()?>assets/js/app.min.js"></script>

      <script src="<?=base_url()?>assets/libs/selectize/js/standalone/selectize.min.js"></script>
      <script src="<?=base_url()?>assets/libs/mohithg-switchery/switchery.min.js"></script>
      <script src="<?=base_url()?>assets/libs/multiselect/js/jquery.multi-select.js"></script>
      <script src="<?=base_url()?>assets/libs/select2/js/select2.min.js"></script>
      <!-- Plugins js-->
      <script src="<?=base_url()?>assets/libs/jquery-sparkline/jquery.sparkline.min.js"></script>
      <script src="<?=base_url()?>assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js"></script>
      <script src="<?=base_url()?>assets/libs/admin-resources/jquery.vectormap/maps/jquery-jvectormap-world-mill-en.js"></script>
      <!-- third party js -->
      <script src="<?=base_url()?>assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>
      <script src="<?=base_url()?>assets/libs/datatables.net-bs5/js/dataTables.bootstrap5.min.js"></script>
      <script src="<?=base_url()?>assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
      <script src="<?=base_url()?>assets/libs/datatables.net-responsive-bs5/js/responsive.bootstrap5.min.js"></script>
      <script src="<?=base_url()?>assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
      <script src="<?=base_url()?>assets/libs/datatables.net-buttons-bs5/js/buttons.bootstrap5.min.js"></script>
      <script src="<?=base_url()?>assets/libs/datatables.net-buttons/js/buttons.html5.min.js"></script>
      <script src="<?=base_url()?>assets/libs/datatables.net-buttons/js/buttons.flash.min.js"></script>
      <script src="<?=base_url()?>assets/libs/datatables.net-buttons/js/buttons.print.min.js"></script>
      <script src="<?=base_url()?>assets/libs/datatables.net-keytable/js/dataTables.keyTable.min.js"></script>
      <script src="<?=base_url()?>assets/libs/datatables.net-select/js/dataTables.select.min.js"></script>
      <script src="<?=base_url()?>assets/libs/pdfmake/build/pdfmake.min.js"></script>
      <script src="<?=base_url()?>assets/libs/pdfmake/build/vfs_fonts.js"></script>
      <script src="<?=base_url()?>assets/libs/jquery-toast-plugin/jquery.toast.min.js"></script>
      <script src="<?=base_url()?>assets/customjs/global.js"></script>
      <!-- third party js ends -->
      <!-- Datatables init -->

      <?php 
      if(isset($customjs)){
         echo ' <script src="'.base_url().'assets/customjs/'.$customjs.'"></script>';
      }
      ?>

   </body>
</html>