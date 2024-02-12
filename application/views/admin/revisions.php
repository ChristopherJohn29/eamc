<div class="content">
   <!-- Start Content-->
   <div class="container-fluid">

   <div id="add-revision" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="standard-modalLabel">Add New Revision</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form id="createRevisionForm">
                    <div class="form-group">
                            <label for="revision_no" class="form-label">Revision No.</label>
                            <input type="text" class="form-control" id="revision_no" name="revision_no" required>
                            <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>
                    <div class="mb-2">
                        <input type="hidden" id="doc_id" name="doc_id" value="<?=$doc_id?>" class="form-control" required>
                        <input type="hidden" id="doc_user_id" name="doc_user_id" value="<?=$doc_user_id?>" class="form-control" required>
                        <label for="revision_desc" class="form-label">Description of Change</label>
                        <textarea class="form-control" id="revision_desc" rows="3" required></textarea>
                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>
                    <div class="form-group">
                            <label for="effectivity_date" class="form-label">Effectivity Date</label>
                            <input type="date" class="form-control" id="effectivity_date">
                            <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>
                </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="createRevision">Save</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>

    <div id="edit-revision" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="standard-modalLabel">Edit Revision</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form id="editRevisionForm">
                    <div class="form-group">
                            <label for="revision_no_edit" class="form-label">Revision No.</label>
                            <input type="text" class="form-control" id="revision_no_edit" name="revision_no" required>
                            <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>
                    <div class="mb-2">
                        <input type="hidden" id="doc_id" name="doc_id" value="<?=$doc_id?>" class="form-control" required>
                        <input type="hidden" id="doc_user_id" name="doc_user_id" value="<?=$doc_user_id?>" class="form-control" required>
                        <label for="revision_desc_edit" class="form-label">Description of Change</label>
                        <textarea class="form-control" id="revision_desc_edit" name="revision_desc" rows="3" required></textarea>
                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>
                    <div class="form-group">
                            <label for="effectivity_date" class="form-label">Effectivity Date</label>
                            <input type="date" class="form-control" id="effectivity_date_edit" name="effectivity_date">
                            <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>
                </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="editRevision">Save</button>
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
               <button type="button" class="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#add-revision"><i class="fas fa-plus"></i> New Revision</button>
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
                  <table id="revision-datatable" class="table dt-responsive nowrap w-100">
                     <thead>
                        <tr>
                           <th>Revision</th>
                           <th>Created By</th>
                           <th>Date Created</th>
                           <th>Last Update By</th>
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