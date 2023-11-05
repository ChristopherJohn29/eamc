<div class="content">
   <!-- Start Content-->
   <div class="container-fluid">



   <div id="add-file-revision" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="standard-modalLabel">Add Comment</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form id="createFileRevisionForm">
                     <div class="mb-2">
                        <input type="hidden" id="doc_file_id" name="doc_file_id" value="<?=$doc_file_id?>" class="form-control" required>
                        <label for="revision" class="form-label">Revision (required)</label>
                        <textarea class="form-control" id="revision" rows="3" required></textarea>
                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>
         
                </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="createFileRevision">Save</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>

    <div id="edit-file-revision" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="standard-modalLabel">Edit Revision</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form id="editFileRevisionForm">
                    <div class="mb-2">
                        <input type="hidden" id="doc_file_revision_id_edit" name="doc_file_revision_id_edit" class="form-control" required>
                        <label for="revision_edit" class="form-label">Revision (required)</label>
                        <textarea class="form-control" id="revision_edit" rows="3" required></textarea>
                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>
                    <div class="mb-2">
                        <label for="remarks_by_osqm_edit" class="form-label">Remarks by OSQM (required)</label>
                        <textarea class="form-control" id="remarks_by_osqm_edit" rows="3" required></textarea>
                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>
                </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="editFileRevision">Save</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>

      <!-- start page title -->
      <div class="row">
         <div class="col-12">
            <div class="page-title-box">
               <h4 class="page-title"><?=ucwords($filename)?> <?=$title?></h4>
               <div class="">
                  <?php 
                  if($filelink){
                     ?><iframe src="<?=$filelink?>" id="documentIframe" class="col-lg-12" allowfullscreen></iframe><?php
                  } else if($unique_file_name) {
                     ?><iframe class="col-lg-12" src="https://docs.google.com/gview?url=<?=base_url().'uploads/'.$unique_file_name?>&embedded=true" allowfullscreen frameborder="0"></iframe><?php
                  }
                  
                  ?>
               </div>
               <div class="page-title-right mb-2">
               <a href="<?=$goback?>" type="button" class="btn btn-danger waves-effect waves-light"><i class="fas fa-arrow-left"></i> Go Back</a>
               <button type="button" class="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#add-file-revision"><i class="fas fa-plus"></i> New Comment</button>
               </div>
               
            </div>
         </div>
      </div>
      <!-- end page title -->
      
      <div class="row">
         <div class="col-12">
            <div class="card">
               <div class="card-body">
                  <table id="file-revision-datatable" class="table dt-responsive nowrap w-100">
                     <thead>
                        <tr>
                           <th>No</th>
                           <th>Revision</th>
                           <th>Date</th>
                           <th>Remarks By OSQM</th>
                           <th>Date</th>
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