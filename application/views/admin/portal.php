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
      <?php 
         if(isset($customcss)){
            echo '<link href="'.base_url().'assets/customcss/'.$customcss.'" rel="stylesheet" type="text/css" />';
         }
         ?>
   </head>
   <body>
      <!-- Begin page -->
      <div id="wrapper">
         <!-- ========== Menu ========== -->
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
                        <span class="badge bg-danger rounded-circle noti-icon-badge">9</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg py-0">
                           <div class="p-2 border-top-0 border-start-0 border-end-0 border-dashed border">
                              <div class="row align-items-center">
                                 <div class="col">
                                    <h6 class="m-0 font-16 fw-semibold"> Notification</h6>
                                 </div>
                                 <div class="col-auto">
                                    <a href="javascript: void(0);" class="text-dark text-decoration-underline">
                                    <small>Clear All</small>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div class="px-1" style="max-height: 300px;" data-simplebar>
                              <h5 class="text-muted font-13 fw-normal mt-2">Today</h5>
                              <!-- item-->
                              <a href="javascript:void(0);" class="dropdown-item p-0 notify-item card unread-noti shadow-none mb-1">
                                 <div class="card-body">
                                    <span class="float-end noti-close-btn text-muted"><i class="mdi mdi-close"></i></span>
                                    <div class="d-flex align-items-center">
                                       <div class="flex-shrink-0">
                                          <div class="notify-icon bg-primary">
                                             <i class="mdi mdi-comment-account-outline"></i>
                                          </div>
                                       </div>
                                       <div class="flex-grow-1 text-truncate ms-2">
                                          <h5 class="noti-item-title fw-semibold font-14">Datacorp <small class="fw-normal text-muted ms-1">1 min ago</small></h5>
                                          <small class="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                                       </div>
                                    </div>
                                 </div>
                              </a>
                              <!-- item-->
                              <a href="javascript:void(0);" class="dropdown-item p-0 notify-item card read-noti shadow-none mb-1">
                                 <div class="card-body">
                                    <span class="float-end noti-close-btn text-muted"><i class="mdi mdi-close"></i></span>
                                    <div class="d-flex align-items-center">
                                       <div class="flex-shrink-0">
                                          <div class="notify-icon bg-info">
                                             <i class="mdi mdi-account-plus"></i>
                                          </div>
                                       </div>
                                       <div class="flex-grow-1 text-truncate ms-2">
                                          <h5 class="noti-item-title fw-semibold font-14">Admin <small class="fw-normal text-muted ms-1">1 hours ago</small></h5>
                                          <small class="noti-item-subtitle text-muted">New user registered</small>
                                       </div>
                                    </div>
                                 </div>
                              </a>
                              <h5 class="text-muted font-13 fw-normal mt-0">Yesterday</h5>
                              <!-- item-->
                              <a href="javascript:void(0);" class="dropdown-item p-0 notify-item card read-noti shadow-none mb-1">
                                 <div class="card-body">
                                    <span class="float-end noti-close-btn text-muted"><i class="mdi mdi-close"></i></span>
                                    <div class="d-flex align-items-center">
                                       <div class="flex-shrink-0">
                                          <div class="notify-icon">
                                             <img src="<?=base_url()?>assets/images/users/avatar-2.jpg" class="img-fluid rounded-circle" alt="" />
                                          </div>
                                       </div>
                                       <div class="flex-grow-1 text-truncate ms-2">
                                          <h5 class="noti-item-title fw-semibold font-14">Cristina Pride <small class="fw-normal text-muted ms-1">1 day ago</small></h5>
                                          <small class="noti-item-subtitle text-muted">Hi, How are you? What about our next meeting</small>
                                       </div>
                                    </div>
                                 </div>
                              </a>
                              <h5 class="text-muted font-13 fw-normal mt-0">30 Dec 2021</h5>
                              <!-- item-->
                              <a href="javascript:void(0);" class="dropdown-item p-0 notify-item card read-noti shadow-none mb-1">
                                 <div class="card-body">
                                    <span class="float-end noti-close-btn text-muted"><i class="mdi mdi-close"></i></span>
                                    <div class="d-flex align-items-center">
                                       <div class="flex-shrink-0">
                                          <div class="notify-icon bg-primary">
                                             <i class="mdi mdi-comment-account-outline"></i>
                                          </div>
                                       </div>
                                       <div class="flex-grow-1 text-truncate ms-2">
                                          <h5 class="noti-item-title fw-semibold font-14">Datacorp</h5>
                                          <small class="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                                       </div>
                                    </div>
                                 </div>
                              </a>
                              <!-- item-->
                              <a href="javascript:void(0);" class="dropdown-item p-0 notify-item card read-noti shadow-none mb-1">
                                 <div class="card-body">
                                    <span class="float-end noti-close-btn text-muted"><i class="mdi mdi-close"></i></span>
                                    <div class="d-flex align-items-center">
                                       <div class="flex-shrink-0">
                                          <div class="notify-icon">
                                             <img src="<?=base_url()?>assets/images/users/avatar-4.jpg" class="img-fluid rounded-circle" alt="" />
                                          </div>
                                       </div>
                                       <div class="flex-grow-1 text-truncate ms-2">
                                          <h5 class="noti-item-title fw-semibold font-14">Karen Robinson</h5>
                                          <small class="noti-item-subtitle text-muted">Wow ! this admin looks good and awesome design</small>
                                       </div>
                                    </div>
                                 </div>
                              </a>
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
                           <a href="javascript:void(0);" class="dropdown-item notify-item">
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
            <!-- ========== Topbar End ========== -->
            <div class="content">
               <!-- Start Content-->
               <div class="container-fluid">
                  <!-- start page title -->
                  <div class="row mt-3">
                     <div class="col-12">
                        <div class="card">
                           <div class="card-body">
                              <h4 class="header-title mb-4"><?=$department_name?></h4>
                              <ul class="nav nav-pills navtab-bg nav-justified">
                                <?php 
                                $documenttype = $this->DocumentTypeModel->getDocumentType();
                                         
                                foreach ($documenttype as $dtkey => $dtvalue) {

                                $active = '';
                                if($dtvalue['id'] == $document_type_id){
                                    $active = 'active';
                                }
                                
                                ?>
                                    <li class="nav-item">
                                        <a href="<?=base_url().'admin/portal/'.$division_id.'/'.$department_id.'/'.$dtvalue['id'].'/'.$sec_id?>" aria-expanded="false" class="nav-link <?=$active?>">
                                            <?=$dtvalue['doc_type_name']?>
                                        </a>
                                    </li>
                                <?php
                                }
                                
                                ?>
                              </ul>
                              <div class="tab-content">
                                 <div class="" id="home1">
                                 <table id="di-global-datatable" class="table dt-responsive nowrap w-100">
                                    <input type="hidden" id="division_id" value="<?=$division_id?>">
                                    <input type="hidden" id="department_id" value="<?=$department_id?>">
                                    <input type="hidden" id="document_type_id" value="<?=$document_type_id?>">
                                    <input type="hidden" id="sec_id" value="<?=$sec_id?>">
                                        <thead>
                                            <tr>
                                            <th class="document-title">Document Title</th>
                                            <th>Document Code</th>
                                            <th>Effectivity Date</th>
                                            <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <!-- end card-->
                     </div>
                  </div>
               </div>
            </div>
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
      <!-- third party js ends -->
      <!-- Datatables init -->
      <?php 
         if(isset($customjs)){
            echo ' <script src="'.base_url().'assets/customjs/'.$customjs.'"></script>';
         }
         ?>
   </body>
</html>