<div class="content">
   <!-- Start Content-->
   <div class="container-fluid">

   <div id="add-file" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="standard-modalLabel">Add New File</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form id="createFileForm">
                    <div class="mb-2">
                        <input type="hidden" id="doc_id" name="doc_id" value="<?=$doc_id?>" class="form-control" required>
                        <input type="hidden" id="doc_user_id" name="doc_user_id" value="<?=$doc_user_id?>" class="form-control" required>
                        <label for="filename" class="form-label">File Name (required)</label>
                        <input type="text" id="filename" name="filename" class="form-control" required>
                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>
                    <div class="mb-2">
                        <label for="fileinput" class="form-label">File Link</label>
                        <input type="url" id="filelink" class="form-control">
                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>
                    <div class="mb-2">
                        <label for="fileinput" class="form-label">File input</label>
                        <input type="file" id="fileinput" class="form-control">
                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>
                </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="createFile">Save</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>

      <!-- start page title -->
      <div class="row">
         <div class="col-12">
            <div class="page-title-box">
               <div class="page-title-right">
               <a href="<?=$goback?>" type="button" class="btn btn-danger waves-effect waves-light"><i class="fas fa-arrow-left"></i> Go Back</a>
               <?php 

                  $requiredRoles = array(
                     'designation' => 'division',
                     'role' => ['osqm_dco'],
                  );

                  if($status == 'FFU' || $status == 'AD' || $status == 'D' || $this->role_checker->checkRole($requiredRoles)){
                     ?>
                     <button type="button" class="btn btn-primary waves-effect waves-light new-file" data-bs-toggle="modal" data-bs-target="#add-file"><i class="fas fa-plus"></i> New File</button>
                     <?php
                  } 
               ?>
               </div>
               <h4 class="page-title"><?=ucwords($document_title)?> <?=$title?></h4>
            </div>
         </div>
      </div>
      <!-- end page title -->
      
      <div class="row">
         <div class="col-12">
            <div class="card">
               <div class="card-body">
                  <table id="files-datatable" data-role="<?=$this->session->role?>" class="table dt-responsive nowrap w-100">
                     <thead>
                        <tr>
                           <th>ID</th>
                           <th>Filename</th>
                           <th>Created By</th>
                           <th>Date Created</th>
                           <th>Option</th>
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