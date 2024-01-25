<div class="content">
   <!-- Start Content-->
   <div class="container-fluid">

   <div id="add-car" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
         <div class="modal-dialog modal-xl">
               <div class="modal-content">
                  <div class="modal-header">
                     <h4 class="modal-title" id="standard-modalLabel">Register CAR</h4>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <form id="addCARForm">
                  
                     <div class="row mb-2">
                        <div class="form-group col-md-3">
                              <label for="car_no" class="form-label">CAR No.</label>
                              <input type="text" class="form-control" id="car_no" required>
                              <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                        </div>
                        <div class="form-group col-md-3">
                              <label for="identification_date" class="form-label">Identification Date</label>
                              <input type="date" class="form-control" id="identification_date" required>
                              <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                        </div>

                        <div class="form-group col-md-2">
                              <label for="source" class="form-label">Source</label>
                              <select class="form-select" id="source" name="source" required>
                                 <option value=""></option>
                                 <?php
                                    foreach ($source as $key => $value) {
                                       echo '<option value="'.$value['id'].'">'.$value['source_name'].'</option>';
                                    }
                                 ?>
                              </select>
                              <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                        </div>

                        <div class="form-group col-md-2">
                              <label for="issued_by" class="form-label">Issued By</label>
                              <select class="form-select" id="issued_by" name="issued_by" required>
                                 <option value=""></option>
                                 <?php
                                    foreach ($division as $key => $value) {
                                       echo '<option value="'.$value['id'].'">'.$value['div_name'].'</option>';
                                    }
                                 ?>
                              </select>
                              <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                        </div>

                        <div class="form-group col-md-2">
                              <label for="issued_to" class="form-label">Issued To</label>
                              <select class="form-select" id="issued_to" name="issued_to" required>
                                 <option value=""></option>
                              </select>
                              <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                        </div>


                     </div>

                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="findings" class="form-label">Findings</label>
                           <textarea class="form-control" id="findings" rows="4"></textarea>
                        </div>
                     </div>

                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="consequences" class="form-label">Consequences</label>
                           <textarea class="form-control" id="consequences" rows="4"></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="requirements_not_fulfilled" class="form-label">Requirements Not Fulfilled: </label><i>(e.g., ISO 9001 Requirements, Statutory & Regulatory Requirements, Policies, Procedures, Guidelines, Work Instructions, or other forms of Documented Information.)</i>
                           <textarea class="form-control" id="requirements_not_fulfilled" rows="4"></textarea>
                        </div>
                     </div>

                  </form>
                  </div>
                  <div class="modal-footer">
                     <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                     <button type="button" class="btn btn-primary" id="saveCar">Save</button>
                  </div>
               </div><!-- /.modal-content -->
         </div><!-- /.modal-dialog -->
      </div>

      <!-- start page title -->
      <div class="row">
         <div class="col-12">
            <div class="page-title-box">
               <div class="page-title-right">
                  <button type="button" class="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#add-car"><i class="fas fa-plus"></i> Register CAR</button>
               </div>
               <h4 class="page-title"><?=$title?></h4>        
            </div>
         </div>
      </div>

      <div class="row">
         <div class="col-12">
            <div class="card">
               <div class="card-body">
                  <table id="car-global-datatable" class="table dt-responsive nowrap w-100">
                     <thead>
                        <tr>
                           <th>CAR NO.</th>
                           <th>Source</th>
                           <th>Issued By</th>
                           <th>Issued To</th>
                           <th>Identification Date</th>
                           <th>Registration Date</th>
                           <th>Date Closed</th>
                           <th>Corrective Action Status</th>
                           <th>For Correction Status</th>
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