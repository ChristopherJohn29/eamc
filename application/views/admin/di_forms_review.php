<div class="content">
   <!-- Start Content-->
   <div class="container-fluid">

      <div id="edit-di" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
               <div class="modal-content">
                  <div class="modal-header">
                     <h4 class="modal-title" id="standard-modalLabel">Edit Documented Information</h4>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <form id="editDocumentedInformationForm">
                  
                     <div class="row mb-2">
                        <div class="form-group col-md-8">
                              <input type="hidden" class="form-control" id="doc_id_edit" required>
                              <input type="hidden" class="form-control" id="user_id_edit" required>
                              <label for="document_title_edit" class="form-label">Document Title</label>
                              <input type="text" class="form-control" id="document_title_edit" disabled>
                              <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                        </div>
                        <div class="form-group col-md-4">
                              <label for="effectivity_date_edit" class="form-label">Effectivity Date</label>
                              <input type="date" class="form-control" id="effectivity_date_edit" disabled>
                              <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                        </div>
                     </div>

                     <div class="row mb-2">
                           <div class="form-group col-md-6">
                                 <label for="doc_type_id_edit" class="form-label">Document Type</label>
                                 <select class="form-select" id="doc_type_id_edit" name="doc_type_id_edit" required disabled>
                                    <option value=""></option>
                                    <?php
                                       foreach ($doctype as $key => $value) {
                                          echo '<option value="'.$value['id'].'">'.$value['doc_type_name'].'</option>';
                                       }
                                    ?>
                                 </select>
                                 <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                           </div>
                           <div class="form-group col-md-6">
                                 <label for="dep_id_edit" class="form-label">Department / Unit</label>
                                 <select class="form-select" id="dep_id_edit" name="dep_id_edit" required disabled>
                                    <option value=""></option>
                                    <?php
                                       foreach ($department as $key => $value) {
                                          echo '<option value="'.$value['id'].'">'.$value['dep_name'].'</option>';
                                       }
                                    ?>
                                 </select>
                                 <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                           </div>
                        </div>

                        <div class="row mb-2">
                           <div class="form-group col-md-4">
                                 <label for="sec_id_edit" class="form-label">Section (if applied)</label>
                                 <select class="form-select" id="sec_id_edit" name="sec_id_edit" disabled>
                                    <option value=""></option>
                                    <?php
                                       foreach ($section as $key => $value) {
                                          echo '<option value="'.$value['id'].'" disabled data-dep_id="'.$value['dep_id'].'">'.$value['section_name'].'</option>';
                                       }
                                    ?>
                                 </select>
                                 <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                           </div>
                           <div class="form-group col-md-4">
                                 <label for="doc_code_edit" class="form-label">Document Code</label>
                                 <input type="text" class="form-control" id="doc_code_edit" name="doc_code_edit" required disabled>
                                 <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                           </div>
                           <div class="form-group col-md-4">
                                 <label for="revision_no_edit" class="form-label">Revision No.</label>
                                 <input type="text" class="form-control" id="revision_no_edit" name="revision_no_edit" required disabled>
                                 <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                           </div>
                        </div>
                     
                     <div class="row mb-2">
                     <div class="form-group col-md-12">
                           <label for="forms_review" class="form-label">Forms Review</label>
                           <select class="form-select" id="forms_review" name="forms_review" required>
                              <option value=""></option>
                              <option value="Approved">Approved</option>
                              <option value="Disapproved">Disapproved</option>
                           </select>
                           <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                        </div>
                     </div>

                     <div class="row mb-2">
                     <div class="form-group col-md-12">
                           <label for="remarks" class="form-label">Remarks</label>
                           <textarea class="form-control" id="remarks" rows="4"></textarea>
                        </div>
                     </div>
                  </form>
                  </div>
                  <div class="modal-footer">
                     <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                     <button type="button" class="btn btn-primary" id="editDI">Save</button>
                  </div>
               </div><!-- /.modal-content -->
         </div><!-- /.modal-dialog -->
      </div>

      <div id="di-history" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
               <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h4 class="modal-title" id="standard-modalLabel">History</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                     <input type="hidden" id="doc_history_id" value="">

                     <table id="di-history-datatable" class="table table-bordered dt-responsive nowrap w-100">
                        <thead>
                           <tr>
                              <th>Process</th>
                              <th>Status</th>
                              <th>Person Responsible</th>
                              <th>Time and Date</th>
                              <th>Remarks</th>
                           </tr>
                        </thead>
                        <tbody>
                        </tbody>
                     </table>
                  
                     </div>
                     <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
   
                     </div>
                  </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
      </div>

      <!-- start page title -->
      <div class="row">
         <div class="col-12">
            <div class="page-title-box">
          
               <h4 class="page-title"><?=$title?></h4>        
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-12">
            <div class="card">
               <div class="card-body">
                  <table id="di-global-datatable" class="table dt-responsive nowrap w-100">
                     <thead>
                        <tr>
                           <th>ID</th>
                           <th>Document Title</th>
                           <th>Document Code</th>
                           <th>Department / Unit</th>
                           <th>Type</th>
                           <th>Date Submitted</th>
                           <th>Status</th>
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