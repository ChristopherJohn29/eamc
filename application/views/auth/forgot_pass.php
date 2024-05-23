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
                           <p class="text-muted mb-4 mt-3">Enter your email address and we'll send you an email with instructions to reset your password.</p>
                        </div>
                        <form action="#" id="forgot">
                           <input class="form-control" type="hidden" id="redirect" value="<?=$redirect?>">
                           <div class="mb-3">
                              <label for="emailaddress" class="form-label">Email address</label>
                              <input class="form-control" type="text" id="email" required="" placeholder="Enter your email">
                              <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                           </div>
                           <ul class="parsley-errors-list filled mb-3 hidden login-error"><li class="parsley-required">Email doesn't Exist</li></ul>
                           <div class="text-center d-grid">
                              <button class="btn btn-primary" type="submit" id="forgot-submit"> Reset Password </button>
                           </div>
                        </form>
                     </div>
                     <!-- end card-body -->
                  </div>
                  <!-- end card -->
                  <div class="row mt-3">
                     <div class="col-12 text-center">
                        <p> Back to <a href="<?=base_url().'auth/login'?>" class="text-white-50 ms-1">Login</a></p>
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