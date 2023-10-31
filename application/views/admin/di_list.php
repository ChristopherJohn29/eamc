<div class="content">
   <!-- Start Content-->
   <div class="container-fluid">

      <div id="add-di" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
         <div class="modal-dialog modal-lg">
               <div class="modal-content">
                  <div class="modal-header">
                     <h4 class="modal-title" id="standard-modalLabel">Add Documented Information</h4>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <form id="addDocumentedInformationForm">
                  
                     <div class="row mb-2">
                        <div class="form-group col-md-8">
                              <label for="document_title" class="form-label">Document Title</label>
                              <input type="text" class="form-control" id="document_title" required>
                              <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                        </div>
                        <div class="form-group col-md-4">
                              <label for="effectivity_date" class="form-label">Effectivity Date</label>
                              <input type="date" class="form-control" id="effectivity_date" required>
                              <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                        </div>
                     </div>

                     <div class="row mb-2">
                        <div class="form-group col-md-3">
                              <label for="doc_type_id" class="form-label">Document Type</label>
                              <select class="form-select" id="doc_type_id" name="doc_type_id" required>
                                 <option value=""></option>
                                 <?php
                                    foreach ($doctype as $key => $value) {
                                       echo '<option value="'.$value['id'].'">'.$value['doc_type_name'].'</option>';
                                    }
                                 ?>
                              </select>
                              <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                        </div>
                        <div class="form-group col-md-3">
                              <label for="dep_id" class="form-label">Department / Unit</label>
                              <select class="form-select" id="dep_id" name="dep_id" required>
                                 <option value=""></option>
                                 <?php
                                    foreach ($department as $key => $value) {
                                       echo '<option value="'.$value['id'].'">'.$value['dep_name'].'</option>';
                                    }
                                 ?>
                              </select>
                              <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                        </div>
                        <div class="form-group col-md-3">
                              <label for="doc_code" class="form-label">Document Code</label>
                              <input type="text" class="form-control" id="doc_code" name="doc_code" required>
                              <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                        </div>
                        <div class="form-group col-md-3">
                              <label for="revision_no" class="form-label">Revision No.</label>
                              <input type="text" class="form-control" id="revision_no" name="revision_no" required>
                              <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                        </div>
                     </div>

                  </form>
                  </div>
                  <div class="modal-footer">
                     <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                     <button type="button" class="btn btn-primary" id="saveDI">Save</button>
                  </div>
               </div><!-- /.modal-content -->
         </div><!-- /.modal-dialog -->
      </div>


      <!-- start page title -->
      <div class="row">
         <div class="col-12">
            <div class="page-title-box">
               <div class="page-title-right">
                  <button type="button" class="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#add-di"><i class="fas fa-plus"></i> New Documented Information</button>
               </div>
               <h4 class="page-title"><?=$title?></h4>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-12">
            <div class="card">
               <div class="card-body">
                  <table id="di-list-datatable" class="table dt-responsive nowrap w-100">
                     <thead>
                        <tr>
                           <th>Document Code</th>
                           <th>Department / Unit</th>
                           <th>Type</th>
                           <th>Date Submitted</th>
                           <th>Status</th>
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