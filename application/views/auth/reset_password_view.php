<!DOCTYPE html>
<html lang="en" data-menu-color="brand">
   <head>
      <meta charset="utf-8" />
      <title></title>
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
      <link href="<?=base_url()?>assets/customcss/login.css" rel="stylesheet" type="text/css" />
   </head>
   <body class="authentication-bg authentication-bg-pattern">
      <div class="account-pages mt-5 mb-5">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-md-8 col-lg-6 col-xl-4">
                  <div class="card bg-pattern">
                     <div class="card-body p-4">
                        <div class="text-center w-75 m-auto">
                           <div class="auth-brand">
                              <span>
                                 <img src="<?=base_url()?>assets/images/eastave.png" alt="" height="50">
                                 <h2>IQMS</h2>
                              </span>
                           </div>
                           <p class="text-muted mb-4 mt-3">Enter your new password to access admin panel.</p>
                        </div>
                        <form action="<?=base_url().'auth/ForgotPass/update_password'?>" id="login">
                           <input class="form-control" type="hidden" id="token" value="<?=$token?>">
                           <div class="mb-3">
                              <label for="password" class="form-label">Password</label>
                              <div class="input-group input-group-merge">
                                 <input type="password" id="password" class="form-control" placeholder="Enter your password">
                                 <div class="input-group-text" data-password="false">
                                    <span class="password-eye"></span>
                                 </div>
                              </div>
                              <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                           </div>
  
                           <div class="text-center d-grid">
                              <button class="btn btn-primary" type="submit"> Submit </button>
                           </div>
                        </form>
                     </div>
                     <!-- end card-body -->
                  </div>
                  <!-- end card -->
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
          <script>document.write(new Date().getFullYear())</script> &copy; East Avenue Medical Center
      </footer>
      <!-- Authentication js -->
      <script src="<?=base_url()?>assets/js/vendor.min.js"></script>
      <!-- App js -->
      <script src="<?=base_url()?>assets/js/app.min.js"></script>
      <!-- Authentication js -->
      <script src="<?=base_url()?>assets/js/pages/authentication.init.js"></script>
      <script src="<?=base_url()?>assets/customjs/login.js"></script>
   </body>
</html>