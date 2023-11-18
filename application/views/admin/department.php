<div class="content">
   <!-- Start Content-->
   <div class="container-fluid">

   <div id="add-department" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="standard-modalLabel">Add New Department</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form id="createDepartmentForm">
                    <div class="mb-2">
                        <label for="simpleinput" class="form-label">Department Name (required)</label>
                        <input type="text" id="dep_name" name="dep_name" class="form-control" required>
                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>
                    
                    <div class="mb-2">
                        <label for="example-select" class="form-label">Division (required)</label>
                        <select class="form-select" id="div_id" name="div_id" required>
                           <option value=""></option>
                           <?php
                              foreach ($division as $key => $value) {
                                 echo '<option value="'.$value['id'].'">'.$value['div_name'].'</option>';
                              }
                           ?>
                        </select>
                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>
                </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="createDepartment">Save</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>

    <div id="edit-department" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="standard-modalLabel">Edit Department</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form id="editDepartmentForm">
                    <div class="mb-2">
                        <input type="hidden" id="dep_id" name="dep_id" class="form-control" required>
                        <label for="simpleinput" class="form-label">Department Name (required)</label>
                        <input type="text" id="dep_name_edit" name="dep_name" class="form-control" required>
                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>
                    <div class="mb-2">
                        <label for="example-select" class="form-label">Division (required)</label>
                        <select class="form-select" id="div_id_edit" name="div_id_edit" required>
                           <option value=""></option>
                           <?php
                              foreach ($division as $key => $value) {
                                 echo '<option value="'.$value['id'].'">'.$value['div_name'].'</option>';
                              }
                           ?>
                        </select>
                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                    </div>
                </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="editDepartment">Save</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>


      <!-- start page title -->
      <div class="row">
         <div class="col-12">
            <div class="page-title-box">
               <div class="page-title-right">
               <button type="button" class="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#add-department"><i class="fas fa-plus"></i> New Department</button>
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
                  <table id="department-datatable" class="table dt-responsive nowrap w-100">
                     <thead>
                        <tr>
                           <th>ID</th>
                           <th>Division</th>
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