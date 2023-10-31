<div class="content">
   <!-- Start Content-->
   <div class="container-fluid">

   <div id="add-document-type" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="standard-modalLabel">Add New Document Type</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form id="createDocumentTypeForm">
               
                    <div class="mb-2">
                        <label for="simpleinput" class="form-label">Document Type (required)</label>
                        <input type="text" id="doc_type_name" name="doc_type_name" class="form-control" required>
                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>

                </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="createDocumentType">Save</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>

    <div id="edit-document-type" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="standard-modalLabel">Edit Document Type</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form id="editDocumentTypeForm">
                    <div class="mb-2">
                        <input type="hidden" id="doc_type_id" name="doc_type_id" class="form-control" required>
                        <label for="simpleinput" class="form-label">Document Type (required)</label>
                        <input type="text" id="doc_type_name_edit" name="doc_type_name" class="form-control" required>
                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>
                </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="editDocumentType">Save</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>


      <!-- start page title -->
      <div class="row">
         <div class="col-12">
            <div class="page-title-box">
               <div class="page-title-right">
               <button type="button" class="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#add-document-type"><i class="fas fa-plus"></i> New Document Type</button>
               </div>
               <h4 class="page-title"><?=$title?></h4>
            </div>
         </div>
      </div>
      <!-- end page title -->
      
      <div class="row">
         <div class="col-12">
            <div class="card">
               <div class="card-body">
                  <table id="document-type-datatable" class="table dt-responsive nowrap w-100">
                     <thead>
                        <tr>
                           <th>Document Type</th>
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