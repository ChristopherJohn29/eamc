<div class="content">
   <!-- Start Content-->
   <div class="container-fluid">

   <div id="add-section" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="standard-modalLabel">Add New Section</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form id="createSectionForm">
               
                    <div class="mb-2">
                        <label for="simpleinput" class="form-label">Section Name (required)</label>
                        <input type="text" id="section_name" name="section_name" class="form-control" required>
                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>

                    <div class="mb-2">
                        <label for="example-select" class="form-label">Department (required)</label>
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

                </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="createSection">Save</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>

    <div id="edit-section" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="standard-modalLabel">Edit Section</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form id="editSectionForm">
                    <div class="mb-2">
                        <input type="hidden" id="section_id" name="section_id" class="form-control" required>
                        <label for="simpleinput" class="form-label">Section Name (required)</label>
                        <input type="text" id="section_name_edit" name="section_name" class="form-control" required>
                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>

                    <div class="mb-2">
                        <label for="example-select" class="form-label">Department (required)</label>
                        <select class="form-select" id="dep_id_edit" name="dep_id_edit" required>
                           <option value=""></option>
                           <?php
                              foreach ($department as $key => $value) {
                                 echo '<option value="'.$value['id'].'">'.$value['dep_name'].'</option>';
                              }
                           ?>
                        </select>
                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>
                </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="editSection">Save</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>


      <!-- start page title -->
      <div class="row">
         <div class="col-12">
            <div class="page-title-box">
               <div class="page-title-right">
               <button type="button" class="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#add-section"><i class="fas fa-plus"></i> New Section</button>
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
                  <table id="section-datatable" class="table dt-responsive nowrap w-100">
                     <thead>
                        <tr>
                           <th>Section Name</th>
                           <th>Department</th>
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