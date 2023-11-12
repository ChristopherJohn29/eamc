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
                                        <label class="form-label" for="firstName">Username</label>
                                        <input type="text" class="form-control" id="username" placeholder="JCDOE" required>
                                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label class="form-label" for="email">Password</label>
                                        <input type="password" class="form-control" id="password" required>
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
                                        <input type="tel" class="form-control" id="mobileNumber" placeholder="09123456789" required>
                                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-2 first col-md-12">
                                <div class="form-group">
                                    <label class="form-label" for="designation">Designation</label>
                                    <select class="form-control" id="designation" required>
                                        <option value="committee">Committee</option>
                                        <option value="division">Division</option>
                                    </select>
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
                                    <label class="form-label" for="customer_satisfaction_committee">Role</label>
                                    <select class="form-control" id="forms">
                                        <option value="chair">Chair</option>
                                        <option value="member">Member</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row mb-2 third d-none internal_quality_audit col-md-12">
                                <div class="form-group">
                                    <label class="form-label" for="internal_quality_audit">Role</label>
                                    <select class="form-control" id="internal_quality_audit">
                                        <option value="chair">Chair</option>
                                        <option value="auditor">Auditor</option>
                                        <option value="member">Member</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row mb-2 third d-none customer_satisfaction_committee col-md-12">
                                <div class="form-group">
                                    <label class="form-label" for="customer_satisfaction_committee">Role</label>
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

                            <!-- division -->
                            <?php
                              foreach ($division as $key => $value) {
                                 if($value['div_name'] == 'SUPPORT'){
                                    echo '
                                       <div class="form-group d-none col-md-6 third '.$value['id'].'-division"">
                                          <label class="form-label" for="'.$value['id'].'-division">Role</label>
                                          <select class="form-control division" id="'.$value['id'].'-division">
                                             <option value="medical_center_chief">Medical Center Chief</option>
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
                                             <option value="div_chief">Division Chief</option>
                                             <option value="dqt_member">DQT Member</option>
                                             <option value="iso_coordinator">ISO Coordinator</option>
                                             <option value="department_head">Department Head</option>
                                             <option value="section_head">Section/Unit Head</option>
                                          </select>
                                       </div>';
                                 }
                              }
                           ?>

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