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
                                        <label class="form-label" for="mobileNumber">Mobile Number</label>
                                        <input type="tel" class="form-control" id="mobileNumber" min="11" placeholder="09123456789" required>
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