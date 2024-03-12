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
                        <div class="form-group col-md-4">
                           <label for="requestor" class="form-label">Requestor</label>
                           <input type="text" class="form-control" id="requestor" required>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="car_no" class="form-label">CAR No.</label>
                           <input type="text" class="form-control" id="car_no" required>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="identification_date" class="form-label">Identification Date</label>
                           <input type="date" class="form-control" id="identification_date" required>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-3">
                           <label for="source" class="form-label">Source</label>
                           <select class="form-select" id="source" name="source" required>
                              <option value=""></option>
                              <?php
                                 foreach ($source as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['source_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_by" class="form-label">Issued By</label>
                           <select class="form-select" id="issued_by" name="issued_by" required>
                              <option value=""></option>
                              <?php
                                 foreach ($division as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['div_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Issued To</label>
                           <select class="form-select" id="issued_to" name="issued_to" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Section Unit</label>
                           <select class="form-select" id="section" name="section" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
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
            </div>
            <!-- /.modal-content -->
         </div>
         <!-- /.modal-dialog -->
      </div>
      <div id="add-car-issuance" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
         <div class="modal-dialog modal-xl">
            <div class="modal-content">
               <div class="modal-header">
                  <h4 class="modal-title" id="standard-modalLabel">Issuance of NC</h4>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <form id="addCARFormIssuance">
                     <input type="hidden" name="car_id" class="car_id">
                     <div class="row mb-2">
                        <div class="form-group col-md-4">
                           <label for="requestor" class="form-label">Requestor</label>
                           <input type="text" class="form-control requestor" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="car_no" class="form-label">CAR No.</label>
                           <input type="text" class="form-control car_no" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="identification_date" class="form-label">Identification Date</label>
                           <input type="date" class="form-control identification_date" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-3">
                           <label for="source" class="form-label">Source</label>
                           <select class="form-select source" name="source" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($source as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['source_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_by" class="form-label">Issued By</label>
                           <select class="form-select issued_by" name="issued_by" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($division as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['div_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Issued To</label>
                           <select class="form-select issued_to" name="issued_to" >
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Section Unit</label>
                           <select class="form-select section" name="section" >
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="findings" class="form-label">Findings</label>
                           <textarea class="form-control findings" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="consequences" class="form-label">Consequences</label>
                           <textarea class="form-control consequences" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="requirements_not_fulfilled" class="form-label">Requirements Not Fulfilled: </label><i>(e.g., ISO 9001 Requirements, Statutory & Regulatory Requirements, Policies, Procedures, Guidelines, Work Instructions, or other forms of Documented Information.)</i>
                           <textarea class="form-control requirements_not_fulfilled" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="requirements_not_fulfilled" class="form-label">Issuance of NC</label>
                           <select class="form-select issuance_of_nc" name="issuance_of_nc">
                              <option value="Approved">Approved</option>
                              <option value="Disapproved">Disapproved</option>
                           </select>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="requirements_not_fulfilled" class="form-label">Remarks </label>
                           <textarea class="form-control issuance_of_nc_remarks" rows="4"></textarea>
                        </div>
                     </div>
                  </form>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary" id="saveCarIssuance">Save</button>
               </div>
            </div>
            <!-- /.modal-content -->
         </div>
         <!-- /.modal-dialog -->
      </div>
      <div id="corrective-action" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
         <div class="modal-dialog modal-xl">
            <div class="modal-content">
               <div class="modal-header">
                  <h4 class="modal-title" id="standard-modalLabel">Correction and dealing with consequences</h4>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <form class="addCARFormIssuance">
                     <h3>Section 1: NON CONFORMITY DEFINITION</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <div class="row mb-2">
                        <div class="form-group col-md-4">
                           <label for="requestor" class="form-label">Requestor</label>
                           <input type="text" class="form-control requestor" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="car_no" class="form-label">CAR No.</label>
                           <input type="text" class="form-control car_no" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="identification_date" class="form-label">Identification Date</label>
                           <input type="date" class="form-control identification_date" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-3">
                           <label for="source" class="form-label">Source</label>
                           <select class="form-select source" name="source" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($source as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['source_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_by" class="form-label">Issued By</label>
                           <select class="form-select issued_by" name="issued_by" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($division as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['div_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Issued To</label>
                           <select class="form-select issued_to" name="issued_to" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Section Unit</label>
                           <select class="form-select section" name="section" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="findings" class="form-label">Findings</label>
                           <textarea class="form-control findings" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="consequences" class="form-label">Consequences</label>
                           <textarea class="form-control consequences" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="requirements_not_fulfilled" class="form-label">Requirements Not Fulfilled: </label><i>(e.g., ISO 9001 Requirements, Statutory & Regulatory Requirements, Policies, Procedures, Guidelines, Work Instructions, or other forms of Documented Information.)</i>
                           <textarea class="form-control requirements_not_fulfilled" rows="4" disabled></textarea>
                        </div>
                     </div>
                  </form>
                  <form action="" id="correction_form" enctype="multipart/form-data">
                     <h3>Section 2: CORRECTION & DEALING WITH THE CONSEQUENCES</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <div id="correction" class="mb-3">
                        <div class="col-lg-12 correction-repeatable orig-correction">
                           <div class="card">
                              <div class="card-body">
                                 <div class="mb-3">
                                    <div class="row">
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label for="exampleInputEmail1" class="form-label">Correction</label>
                                             <input type="text" class="form-control" name="correction[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                             <input type="text" class="form-control" name="correction_person_responsible[]" placeholder="Enter Name of personel">
                                          </div>
                                       </div>
                                       <div class="col-xl-3">
                                          <div class="mb-3 mb-xl-0">
                                             <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                             <input type="date" class="form-control" name="correction_completion_date[]" placeholder="Select Date">
                                          </div>
                                       </div>
                                       <div class="col-xl-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label for="exampleInputEmail1" class="form-label">Remove</label>
                                             <button type="button" class="btn btn-danger remove-corrective-action"><i class="fas fa-trash"></i></button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <!-- end card-body-->
                           </div>
                           <!-- end card-->
                        </div>
                     </div>
                     <div class="text-end mb-3">
                        <button type="button" class="btn btn-primary left" id="add-correction">Add Correction</button>
                     </div>
                     <div id="consequencesdiv">
                        <div class="col-lg-12 consequences-repeatable orig-consequence">
                           <div class="card">
                              <div class="card-body">
                                 <div class="mb-3">
                                    <div class="row">
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label for="exampleInputEmail1" class="form-label">Dealing with the consequences</label>
                                             <input type="text" class="form-control" name="consequence[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                             <input type="text" class="form-control" name="consequence_person_responsible[]" placeholder="Enter Name of personel">
                                          </div>
                                       </div>
                                       <div class="col-xl-3">
                                          <div class="mb-3 mb-xl-0">
                                             <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                             <input type="date" class="form-control" name="consequence_completion_date[]" placeholder="Select Date">
                                          </div>
                                       </div>
                                       <div class="col-xl-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label for="exampleInputEmail1" class="form-label">Remove</label>
                                             <button type="button" class="btn btn-danger remove-consequences-action"><i class="fas fa-trash"></i></button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <!-- end card-body-->
                           </div>
                           <!-- end card-->
                        </div>
                     </div>
                     <div class="text-end">
                        <button type="button" class="btn btn-primary left" id="add-consequences">Add Consequences</button>
                     </div>
                  </form>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary" id="saveCorrection">Save</button>
               </div>
            </div>
            <!-- /.modal-content -->
         </div>
         <!-- /.modal-dialog -->
      </div>
      <div id="corrective-action-review" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
         <div class="modal-dialog modal-xl">
            <div class="modal-content">
               <div class="modal-header">
                  <h4 class="modal-title" id="standard-modalLabel">For OSQM Review</h4>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <form class="addCARFormIssuance">
                     <h3>Section 1: NON CONFORMITY DEFINITION</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <div class="row mb-2">
                        <div class="form-group col-md-4">
                           <label for="requestor" class="form-label">Requestor</label>
                           <input type="text" class="form-control requestor" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="car_no" class="form-label">CAR No.</label>
                           <input type="text" class="form-control car_no" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="identification_date" class="form-label">Identification Date</label>
                           <input type="date" class="form-control identification_date" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-3">
                           <label for="source" class="form-label">Source</label>
                           <select class="form-select source" name="source" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($source as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['source_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_by" class="form-label">Issued By</label>
                           <select class="form-select issued_by" name="issued_by" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($division as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['div_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Issued To</label>
                           <select class="form-select issued_to" name="issued_to" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Section Unit</label>
                           <select class="form-select section" name="section" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="findings" class="form-label">Findings</label>
                           <textarea class="form-control findings" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="consequences" class="form-label">Consequences</label>
                           <textarea class="form-control consequences" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="requirements_not_fulfilled" class="form-label">Requirements Not Fulfilled: </label><i>(e.g., ISO 9001 Requirements, Statutory & Regulatory Requirements, Policies, Procedures, Guidelines, Work Instructions, or other forms of Documented Information.)</i>
                           <textarea class="form-control requirements_not_fulfilled" rows="4" disabled></textarea>
                        </div>
                     </div>
                  </form>
                  <form action="" id="correction_form_review" enctype="multipart/form-data">
                     <h3>Section 2: CORRECTION & DEALING WITH THE CONSEQUENCES</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <div id="correction-review" class="mb-3">
                     </div>
                     <div id="consequencesdiv-review">
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="review_correction_dealing_with_consequences" class="form-label">Review of Correction and Dealing with the Consequences</label>
                           <select class="form-select review_correction_dealing_with_consequences" name="review_correction_dealing_with_consequences">
                              <option value="For Approval">For Approval</option>
                              <option value="For Revision">For Revision</option>
                           </select>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="review_correction_dealing_with_consequences_remarks" class="form-label">Remarks </label>
                           <textarea class="form-control review_correction_dealing_with_consequences_remarks" name="review_correction_dealing_with_consequences_remarks" rows="4"></textarea>
                        </div>
                     </div>
                  </form>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary" id="saveCorrectionFR">Save</button>
               </div>
            </div>
            <!-- /.modal-content -->
         </div>
         <!-- /.modal-dialog -->
      </div>
      <div id="corrective-action-approval" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
         <div class="modal-dialog modal-xl">
            <div class="modal-content">
               <div class="modal-header">
                  <h4 class="modal-title" id="standard-modalLabel">For Approval</h4>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <form class="addCARFormIssuance">
                     <h3>Section 1: NON CONFORMITY DEFINITION</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <div class="row mb-2">
                        <div class="form-group col-md-4">
                           <label for="requestor" class="form-label">Requestor</label>
                           <input type="text" class="form-control requestor" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="car_no" class="form-label">CAR No.</label>
                           <input type="text" class="form-control car_no" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="identification_date" class="form-label">Identification Date</label>
                           <input type="date" class="form-control identification_date" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-3">
                           <label for="source" class="form-label">Source</label>
                           <select class="form-select source" name="source" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($source as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['source_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_by" class="form-label">Issued By</label>
                           <select class="form-select issued_by" name="issued_by" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($division as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['div_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Issued To</label>
                           <select class="form-select issued_to" name="issued_to" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Section Unit</label>
                           <select class="form-select section" name="section" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="findings" class="form-label">Findings</label>
                           <textarea class="form-control findings" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="consequences" class="form-label">Consequences</label>
                           <textarea class="form-control consequences" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="requirements_not_fulfilled" class="form-label">Requirements Not Fulfilled: </label><i>(e.g., ISO 9001 Requirements, Statutory & Regulatory Requirements, Policies, Procedures, Guidelines, Work Instructions, or other forms of Documented Information.)</i>
                           <textarea class="form-control requirements_not_fulfilled" rows="4" disabled></textarea>
                        </div>
                     </div>
                  </form>
                  <form action="" id="correction_form_approval" enctype="multipart/form-data">
                     <h3>Section 2: CORRECTION & DEALING WITH THE CONSEQUENCES</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <div id="correction-approval" class="mb-3">
                     </div>
                     <div id="consequencesdiv-approval">
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="approval_correction_dealing_with_consequences" class="form-label">Review of Correction and Dealing with the Consequences</label>
                           <select class="form-select approval_correction_dealing_with_consequences" name="approval_correction_dealing_with_consequences">
                              <option value="For Verification">For Verification</option>
                              <option value="For Revision">For Revision</option>
                           </select>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="approval_correction_dealing_with_consequences_remarks" class="form-label">Remarks </label>
                           <textarea class="form-control approval_correction_dealing_with_consequences_remarks" name="approval_correction_dealing_with_consequences_remarks" rows="4"></textarea>
                        </div>
                     </div>
                  </form>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary" id="saveCorrectionFA">Save</button>
               </div>
            </div>
            <!-- /.modal-content -->
         </div>
         <!-- /.modal-dialog -->
      </div>
      <div id="corrective-action-verification" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
         <div class="modal-dialog modal-xl">
            <div class="modal-content">
               <div class="modal-header">
                  <h4 class="modal-title" id="standard-modalLabel">For Verification</h4>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <form class="addCARFormIssuance">
                     <input type="hidden" name="car_id" class="car_id">
                     <div class="row mb-2">
                        <div class="form-group col-md-4">
                           <label for="requestor" class="form-label">Requestor</label>
                           <input type="text" class="form-control requestor" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="car_no" class="form-label">CAR No.</label>
                           <input type="text" class="form-control car_no" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="identification_date" class="form-label">Identification Date</label>
                           <input type="date" class="form-control identification_date" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-3">
                           <label for="source" class="form-label">Source</label>
                           <select class="form-select source" name="source" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($source as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['source_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_by" class="form-label">Issued By</label>
                           <select class="form-select issued_by" name="issued_by" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($division as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['div_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Issued To</label>
                           <select class="form-select issued_to" name="issued_to" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Section Unit</label>
                           <select class="form-select section" name="section" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="findings" class="form-label">Findings</label>
                           <textarea class="form-control findings" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="consequences" class="form-label">Consequences</label>
                           <textarea class="form-control consequences" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="requirements_not_fulfilled" class="form-label">Requirements Not Fulfilled: </label><i>(e.g., ISO 9001 Requirements, Statutory & Regulatory Requirements, Policies, Procedures, Guidelines, Work Instructions, or other forms of Documented Information.)</i>
                           <textarea class="form-control requirements_not_fulfilled" rows="4" disabled></textarea>
                        </div>
                     </div>
                  </form>
                  <form action="" id="correction_form_verification" enctype="multipart/form-data">
                     <h3>Section 2: CORRECTION & DEALING WITH THE CONSEQUENCES</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <div id="correction-verification" class="mb-3">
                     </div>
                     <div id="consequencesdiv-verification">
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="verification_correction_dealing_with_consequences" class="form-label">Review of Correction and Dealing with the Consequences</label>
                           <select class="form-select verification_correction_dealing_with_consequences" name="verification_correction_dealing_with_consequences">
                              <option value="For Validation">For Validation</option>
                              <option value="For Revision">For Revision</option>
                           </select>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="verification_correction_dealing_with_consequences_remarks" class="form-label">Remarks </label>
                           <textarea class="form-control verification_correction_dealing_with_consequences_remarks" name="verification_correction_dealing_with_consequences_remarks" rows="4"></textarea>
                        </div>
                     </div>
                  </form>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary" id="saveCorrectionFV">Save</button>
               </div>
            </div>
            <!-- /.modal-content -->
         </div>
         <!-- /.modal-dialog -->
      </div>
      <div id="corrective-action-validation" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
         <div class="modal-dialog modal-xl">
            <div class="modal-content">
               <div class="modal-header">
                  <h4 class="modal-title" id="standard-modalLabel">For Validation</h4>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <form class="addCARFormIssuance">
                     <h3>Section 1: NON CONFORMITY DEFINITION</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <div class="row mb-2">
                        <div class="form-group col-md-4">
                           <label for="requestor" class="form-label">Requestor</label>
                           <input type="text" class="form-control requestor" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="car_no" class="form-label">CAR No.</label>
                           <input type="text" class="form-control car_no" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="identification_date" class="form-label">Identification Date</label>
                           <input type="date" class="form-control identification_date" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-3">
                           <label for="source" class="form-label">Source</label>
                           <select class="form-select source" name="source" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($source as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['source_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_by" class="form-label">Issued By</label>
                           <select class="form-select issued_by" name="issued_by" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($division as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['div_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Issued To</label>
                           <select class="form-select issued_to" name="issued_to" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Section Unit</label>
                           <select class="form-select section" name="section" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="findings" class="form-label">Findings</label>
                           <textarea class="form-control findings" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="consequences" class="form-label">Consequences</label>
                           <textarea class="form-control consequences" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="requirements_not_fulfilled" class="form-label">Requirements Not Fulfilled: </label><i>(e.g., ISO 9001 Requirements, Statutory & Regulatory Requirements, Policies, Procedures, Guidelines, Work Instructions, or other forms of Documented Information.)</i>
                           <textarea class="form-control requirements_not_fulfilled" rows="4" disabled></textarea>
                        </div>
                     </div>
                  </form>
                  <form action="" id="correction_form_validation" enctype="multipart/form-data">
                     <h3>Section 2: CORRECTION & DEALING WITH THE CONSEQUENCES</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <div id="correction-validation" class="mb-3">
                     </div>
                     <div id="consequencesdiv-validation">
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="validation_correction_dealing_with_consequences" class="form-label">Review of Correction and Dealing with the Consequences</label>
                           <select class="form-select verification_correction_dealing_with_consequences" name="validation_correction_dealing_with_consequences">
                              <option value="For Closure">Recommendation for Closure</option>
                              <option value="For Revision">For Revision</option>
                           </select>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="validation_correction_dealing_with_consequences_remarks" class="form-label">Remarks </label>
                           <textarea class="form-control validation_correction_dealing_with_consequences_remarks" name="validation_correction_dealing_with_consequences_remarks" rows="4"></textarea>
                        </div>
                     </div>
                  </form>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary" id="saveCorrectionFVA">Save</button>
               </div>
            </div>
            <!-- /.modal-content -->
         </div>
         <!-- /.modal-dialog -->
      </div>
      <div id="root-cause" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
         <div class="modal-dialog modal-xl">
            <div class="modal-content">
               <div class="modal-header">
                  <h4 class="modal-title" id="standard-modalLabel">Corrective Action and Root Cause Analysis</h4>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <form class="addCARFormIssuance">
                     <h3>Section 1: NON CONFORMITY DEFINITION</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <div class="row mb-2">
                        <div class="form-group col-md-4">
                           <label for="requestor" class="form-label">Requestor</label>
                           <input type="text" class="form-control requestor" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="car_no" class="form-label">CAR No.</label>
                           <input type="text" class="form-control car_no" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="identification_date" class="form-label">Identification Date</label>
                           <input type="date" class="form-control identification_date" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-3">
                           <label for="source" class="form-label">Source</label>
                           <select class="form-select source" name="source" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($source as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['source_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_by" class="form-label">Issued By</label>
                           <select class="form-select issued_by" name="issued_by" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($division as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['div_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Issued To</label>
                           <select class="form-select issued_to" name="issued_to" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Section Unit</label>
                           <select class="form-select section" name="section" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="findings" class="form-label">Findings</label>
                           <textarea class="form-control findings" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="consequences" class="form-label">Consequences</label>
                           <textarea class="form-control consequences" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="requirements_not_fulfilled" class="form-label">Requirements Not Fulfilled: </label><i>(e.g., ISO 9001 Requirements, Statutory & Regulatory Requirements, Policies, Procedures, Guidelines, Work Instructions, or other forms of Documented Information.)</i>
                           <textarea class="form-control requirements_not_fulfilled" rows="4" disabled></textarea>
                        </div>
                     </div>
                  </form>
                  <form action="" id="root_cause_form" enctype="multipart/form-data">
                     <h3>Section 3: ROOT CAUSE ANALYSIS</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <div id="checkboxes">
                        <div class="col-lg-12">
                           <div class="card">
                              <div class="card-body">
                                 <div class="row mb-2">
                                    <div class="col-lg-9">
                                       <h4 class="header-title">3.1 Is the nonconformity existing in other areas? Can this occur elsewhere?</h4>
                                       <p class="sub-header">If yes, the Root Cause Analysis and Corrective Actions shall be considered in all areas affected</p>
                                    </div>
                                    <div class="col-lg-3 text-inlign">
                                       <div class="form-check form-check-inline">
                                          <input type="radio" name="existing_nonconformity" value="1" class="form-check-input">
                                          <label class="form-check-label" for="existing_nonconformity">YES</label>
                                       </div>
                                       <div class="form-check form-check-inline">
                                          <input type="radio" name="existing_nonconformity" value="0" class="form-check-input">
                                          <label class="form-check-label" for="existing_nonconformity">NO</label>
                                       </div>
                                    </div>
                                    <div class="form-group col-lg-12">
                                       <label for="existing_nonconformity_remarks" class="form-label">Remarks</label>
                                       <textarea class="form-control" id="existing_nonconformity_remarks" name="existing_nonconformity_remarks" rows="4"></textarea>
                                    </div>
                                 </div>
                                 <h4 class="header-title">3.2 What are the causes of the Non conformity? Root Cause Analysis using: Ishikawa / Fishbone <br> Diagram with Why's and T (Total) P(Partial) N(No) Matrix?</h4>
                                 <div id="rootcause" class="mb-3">
                                    <div class="col-lg-12 rootcause-repeatable">
                                       <div class="card">
                                          <div class="card-body">
                                             <div class="mb-3">
                                                <div class="row">
                                                   <div class="col-xl-4">
                                                      <div class="mb-3 mb-xl-0">
                                                         <label class="form-label">Root Cause Analysis Used</label>
                                                         <input type="text" class="form-control" name="rootcause[]">
                                                      </div>
                                                   </div>
                                                   <div class="col-xl-4">
                                                      <div class="mb-3 mb-xl-0">
                                                         <label class="form-label">File Name</label>
                                                         <input type="text" class="form-control" name="rootcause_file_name[]">
                                                      </div>
                                                   </div>
                                                   <div class="col-xl-4">
                                                      <div class="mb-3 mb-xl-0">
                                                         <label class="form-label">File URL</label>
                                                         <input type="text" class="form-control" name="rootcause_file_url[]">
                                                      </div>
                                                   </div>
                                                   <div class="col-xl-3">
                                                      <div class="mb-3 mb-xl-0">
                                                         <label class="form-label">Attachment</label>
                                                         <input type="file" class="form-control" name="rootcause_attachment_attachment[]">
                                                      </div>
                                                   </div>
                                                   <div class="col-xl-1">
                                                      <div class="mb-3 mb-xl-0">
                                                         <label class="form-label">Remove</label>
                                                         <button type="button" class="btn btn-danger remove-rootcause-action"><i class="fas fa-trash"></i></button>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <!-- end card-body-->
                                       </div>
                                       <!-- end card-->
                                    </div>
                                 </div>
                                 <div class="text-end mb-3">
                                    <button type="button" class="btn btn-primary left" id="add-rootcause">Add Rootcause</button>
                                 </div>
                              </div>
                              <!-- end card-body -->
                           </div>
                           <!-- end card -->
                        </div>
                     </div>
                     <h3>Section 4: CORRECTIVE ACTIONS</h3>
                     <h5>4.1 Corrective Action - To address the cause of the nonconformity (NC) and prevent a recurence<br><br> Note:</h5>
                     <h6>1. Attach office memo/ order assigning person responsible and Standard Operating Procedures/Work Instruction if the corrective action involves Machine or equipment.</h6>
                     <h6>2. For the TPN Matrix, all T(Total) can be addressed within the concerned areas, P(Partial) can be shared to the other offices who may have responsibility with the root cause, while N(No) shall be transferred to the idetified process owner. Sharing and transferring of root  cause shall be documented.</h6>
                     <div id="identified-root" class="mb-3 font-11">
                        <div class="col-lg-12 identified-root-repeatable">
                           <div class="card">
                              <div class="card-body">
                                 <div class="mb-3">
                                    <div class="row">
                                       <div class="col-xl-4 mb-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Identified Root Cause</label>
                                             <input type="text" class="form-control" name="identified_root[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-3 mb-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">TPN Control</label>
                                             <select class="form-select tpn-control" name="tpn_control[]">
                                                <option value="total">Total</option>
                                                <option value="partial">Partial</option>
                                                <option value="no">No</option>
                                             </select>
                                          </div>
                                       </div>
                                       <div class="col-xl-3 mb-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Corrective Action</label>
                                             <input type="text" class="form-control" name="identified_root_corrective_action[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-4 mb-1">
                                          <div class="form-group">
                                             <label for="issued_by" class="form-label">Issued By</label>
                                             <select class="form-select issued_by" name="tpn_issued_by[]">
                                                <option value=""></option>
                                                <?php
                                                   foreach ($division as $key => $value) {
                                                      echo '<option value="'.$value['id'].'">'.$value['div_name'].'</option>';
                                                   }
                                                   ?>
                                             </select>
                                             <ul class="parsley-errors-list filled hidden">
                                                <li class="parsley-required"></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div class="col-xl-3 mb-1">
                                          <div class="form-group">
                                             <label for="issued_to" class="form-label">Issued To</label>
                                             <select class="form-select issued_to" name="tpn_issued_to[]">
                                                <option value=""></option>
                                             </select>
                                             <ul class="parsley-errors-list filled hidden">
                                                <li class="parsley-required"></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div class="col-xl-3 mb-1">
                                          <div class="form-group">
                                             <label for="issued_to" class="form-label">Section Unit</label>
                                             <select class="form-select section"  name="tpn_section[]">
                                                <option value=""></option>
                                             </select>
                                             <ul class="parsley-errors-list filled hidden">
                                                <li class="parsley-required"></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                             <input type="text" class="form-control" name="identified_root_person_responsible[]" placeholder="Enter Name of personel">
                                          </div>
                                       </div>
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                             <input type="date" class="form-control" name="identified_root_completion_date[]" placeholder="Select Date">
                                          </div>
                                       </div>
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">File URL</label>
                                             <input type="text" class="form-control" name="identified_root_attachment_url[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Attachment</label>
                                             <input type="file" class="form-control" name="identified_root_attachment_attachment[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Remove</label>
                                             <button type="button" class="btn btn-danger remove-identified-root-action"><i class="fas fa-trash"></i></button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <!-- end card-body-->
                           </div>
                           <!-- end card-->
                        </div>
                     </div>
                     <div class="text-end mb-3">
                        <button type="button" class="btn btn-primary left add-identified-root" id="add-identified-root">Add Identified Root Cause</button>
                     </div>
                     <h5>4.2 Update Risk Registry(Please attached updated Risk Registry)</h5>
                     <div id="risk-number" class="mb-3">
                        <div class="col-lg-12 risk-number-repeatable">
                           <div class="card">
                              <div class="card-body">
                                 <div class="mb-3">
                                    <div class="row">
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Risk Number</label>
                                             <input type="text" class="form-control" name="risk_number[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Details / Updates</label>
                                             <input type="text" class="form-control" name="risk_number_details_update[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-3">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">File URL</label>
                                             <input type="text" class="form-control" name="risk_number_attachment_url[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-3">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Attachment</label>
                                             <input type="file" class="form-control" name="risk_number_attachment[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Remove</label>
                                             <button type="button" class="btn btn-danger remove-risk-number-action"><i class="fas fa-trash"></i></button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <!-- end card-body-->
                           </div>
                           <!-- end card-->
                        </div>
                     </div>
                     <div class="text-end mb-3">
                        <button type="button" class="btn btn-primary left" id="add-risk-number">Add Risk Number</button>
                     </div>
                     <div id="checkboxes">
                        <div class="col-lg-12">
                           <div class="card">
                              <div class="card-body">
                                 <div class="row">
                                    <div class="col-lg-9">
                                       <h4 class="header-title">Is there opportunity identified? Please attach updated Opportunity Registry if YES</h4>
                                    </div>
                                    <div class="col-lg-3 text-inlign">
                                       <div class="form-check form-check-inline">
                                          <input type="radio" id="customRadio1" name="opportunity_identified_yn" value="1" class="form-check-input">
                                          <label class="form-check-label" for="opportunity_identified_yn">YES</label>
                                       </div>
                                       <div class="form-check form-check-inline">
                                          <input type="radio" id="customRadio2" name="opportunity_identified_yn" value="0" class="form-check-input">
                                          <label class="form-check-label" for="opportunity_identified_yn">NO</label>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <!-- end card-body -->
                           </div>
                           <!-- end card -->
                        </div>
                     </div>
                     <div id="opportunity-number" class="mb-3">
                        <div class="col-lg-12 opportunity-number-repeatable">
                           <div class="card">
                              <div class="card-body">
                                 <div class="mb-3">
                                    <div class="row">
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Opportunity Number</label>
                                             <input type="text" class="form-control" name="opportunity_number[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Opportunities Identified (if applicable)</label>
                                             <input type="text" class="form-control" name="opportunity_identified[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-3">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">File URL</label>
                                             <input type="text" class="form-control" name="opportunity_number_attachment_url[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-3">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Attachment</label>
                                             <input type="file" class="form-control" name="opportunity_number_attachment[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Remove</label>
                                             <button type="button" class="btn btn-danger remove-opportunity-number-action"><i class="fas fa-trash"></i></button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <!-- end card-body-->
                           </div>
                           <!-- end card-->
                        </div>
                     </div>
                     <div class="text-end mb-3">
                        <button type="button" class="btn btn-primary left" id="add-opportunity-number">Add Opportunity Number</button>
                     </div>
                     <div class="row">
                        <div class="col-lg-9">
                           <h4 class="header-title mb-2">4.3 Is there a need to make changes to QMS? E.g., updating Documented information?</h4>
                        </div>
                        <div class="col-lg-3 text-inlign">
                           <div class="form-check form-check-inline">
                              <input type="radio" name="update_doc_info" value="1" class="form-check-input">
                              <label class="form-check-label" for="update_doc_info">YES</label>
                           </div>
                           <div class="form-check form-check-inline">
                              <input type="radio"  name="update_doc_info" value="0" class="form-check-input">
                              <label class="form-check-label" for="update_doc_info">NO</label>
                           </div>
                        </div>
                        <div class="form-group col-lg-12">
                           <label for="update_doc_info_remarks" class="form-label">Remarks</label>
                           <textarea class="form-control" id="update_doc_info_remarks" name="update_doc_info_remarks" rows="4"></textarea>
                        </div>
                     </div>
                  </form>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary" id="saveRoot">Save</button>
               </div>
            </div>
            <!-- /.modal-content -->
         </div>
         <!-- /.modal-dialog -->
      </div>
      <div id="root-cause-review" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
         <div class="modal-dialog modal-xl">
            <div class="modal-content">
               <div class="modal-header">
                  <h4 class="modal-title" id="standard-modalLabel">For OSQM Review</h4>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <form class="addCARFormIssuance">
                     <h3>Section 1: NON CONFORMITY DEFINITION</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <div class="row mb-2">
                        <div class="form-group col-md-4">
                           <label for="requestor" class="form-label">Requestor</label>
                           <input type="text" class="form-control requestor" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="car_no" class="form-label">CAR No.</label>
                           <input type="text" class="form-control car_no" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="identification_date" class="form-label">Identification Date</label>
                           <input type="date" class="form-control identification_date" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-3">
                           <label for="source" class="form-label">Source</label>
                           <select class="form-select source" name="source" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($source as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['source_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_by" class="form-label">Issued By</label>
                           <select class="form-select issued_by" name="issued_by" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($division as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['div_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Issued To</label>
                           <select class="form-select issued_to" name="issued_to" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Section Unit</label>
                           <select class="form-select section" name="section" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="findings" class="form-label">Findings</label>
                           <textarea class="form-control findings" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="consequences" class="form-label">Consequences</label>
                           <textarea class="form-control consequences" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="requirements_not_fulfilled" class="form-label">Requirements Not Fulfilled: </label><i>(e.g., ISO 9001 Requirements, Statutory & Regulatory Requirements, Policies, Procedures, Guidelines, Work Instructions, or other forms of Documented Information.)</i>
                           <textarea class="form-control requirements_not_fulfilled" rows="4" disabled></textarea>
                        </div>
                     </div>
                  </form>
                  <form action="" id="root_cause_form_review" enctype="multipart/form-data">
                     <h3>Section 3: ROOT CAUSE ANALYSIS</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <div id="checkboxes">
                        <div class="col-lg-12">
                           <div class="card">
                              <div class="card-body">
                                 <div class="row mb-2">
                                    <div class="col-lg-9">
                                       <h4 class="header-title">3.1 Is the nonconformity existing in other areas? Can this occur elsewhere?</h4>
                                       <p class="sub-header">If yes, the Root Cause Analysis and Corrective Actions shall be considered in all areas affected</p>
                                    </div>
                                    <div class="col-lg-3 text-inlign">
                                       <div class="form-check form-check-inline">
                                          <input type="radio" name="existing_nonconformity" value="1" class="form-check-input">
                                          <label class="form-check-label" for="existing_nonconformity">YES</label>
                                       </div>
                                       <div class="form-check form-check-inline">
                                          <input type="radio" name="existing_nonconformity" value="0" class="form-check-input">
                                          <label class="form-check-label" for="existing_nonconformity">NO</label>
                                       </div>
                                    </div>
                                    <div class="form-group col-lg-12">
                                       <label for="existing_nonconformity_remarks" class="form-label">Remarks</label>
                                       <textarea class="form-control" id="existing_nonconformity_remarks" name="existing_nonconformity_remarks" rows="4"></textarea>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-lg-9">
                                       <h4 class="header-title mb-2">Is there a need to make changes to QMS? E.g., updating Documented information?</h4>
                                    </div>
                                    <div class="col-lg-3 text-inlign">
                                       <div class="form-check form-check-inline">
                                          <input type="radio" name="update_doc_info" value="1" class="form-check-input">
                                          <label class="form-check-label" for="update_doc_info">YES</label>
                                       </div>
                                       <div class="form-check form-check-inline">
                                          <input type="radio"  name="update_doc_info" value="0" class="form-check-input">
                                          <label class="form-check-label" for="update_doc_info">NO</label>
                                       </div>
                                    </div>
                                    <div class="form-group col-lg-12">
                                       <label for="update_doc_info_remarks" class="form-label">Remarks</label>
                                       <textarea class="form-control" id="update_doc_info_remarks" name="update_doc_info_remarks" rows="4"></textarea>
                                    </div>
                                 </div>
                              </div>
                              <!-- end card-body -->
                           </div>
                           <!-- end card -->
                        </div>
                     </div>
                     <h3>Section 4: CORRECTIVE ACTIONS</h3>
                     <div id="risk-number-review" class="mb-3">
                     </div>
                     <div id="checkboxes">
                        <div class="col-lg-12">
                           <div class="card">
                              <div class="card-body">
                                 <div class="row">
                                    <div class="col-lg-9">
                                       <h4 class="header-title">Is there opportunity identified?</h4>
                                    </div>
                                    <div class="col-lg-3 text-inlign">
                                       <div class="form-check form-check-inline">
                                          <input type="radio" id="customRadio1" name="opportunity_identified_yn" value="1" class="form-check-input">
                                          <label class="form-check-label" for="opportunity_identified_yn">YES</label>
                                       </div>
                                       <div class="form-check form-check-inline">
                                          <input type="radio" id="customRadio2" name="opportunity_identified_yn" value="0" class="form-check-input">
                                          <label class="form-check-label" for="opportunity_identified_yn">NO</label>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <!-- end card-body -->
                           </div>
                           <!-- end card -->
                        </div>
                     </div>
                     <div id="opportunity-number-review" class="mb-3">
                     </div>
                     <h5 class="header-title">3.2 What are the causes of the Non conformity? (Root Cause Analysis using: Ishikawa / Fishbone Diagram with Why's and T (Total) P(Partial) N(No) Matrix?</h5>
                     <div id="rootcause-review" class="mb-3">
                     </div>
                     <div id="identified-root-review" class="mb-3 font-11">
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="review_action_root_cause_analysis" class="form-label">Review of Action and Root Cause Analysis</label>
                           <select class="form-select review_action_root_cause_analysis" name="review_action_root_cause_analysis">
                              <option value="For Approval">For Approval</option>
                              <option value="For Revision">For Revision</option>
                           </select>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="review_action_root_cause_analysis_remarks" class="form-label">Remarks </label>
                           <textarea class="form-control review_action_root_cause_analysis_remarks" name="review_action_root_cause_analysis_remarks" rows="4"></textarea>
                        </div>
                     </div>
                  </form>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary" id="saveRootFR">Save</button>
               </div>
            </div>
            <!-- /.modal-content -->
         </div>
         <!-- /.modal-dialog -->
      </div>
      <div id="root-cause-approval" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
         <div class="modal-dialog modal-xl">
            <div class="modal-content">
               <div class="modal-header">
                  <h4 class="modal-title" id="standard-modalLabel">For Approval</h4>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <form class="addCARFormIssuance">
                     <h3>Section 1: NON CONFORMITY DEFINITION</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <div class="row mb-2">
                        <div class="form-group col-md-4">
                           <label for="requestor" class="form-label">Requestor</label>
                           <input type="text" class="form-control requestor" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="car_no" class="form-label">CAR No.</label>
                           <input type="text" class="form-control car_no" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="identification_date" class="form-label">Identification Date</label>
                           <input type="date" class="form-control identification_date" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-3">
                           <label for="source" class="form-label">Source</label>
                           <select class="form-select source" name="source" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($source as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['source_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_by" class="form-label">Issued By</label>
                           <select class="form-select issued_by" name="issued_by" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($division as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['div_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Issued To</label>
                           <select class="form-select issued_to" name="issued_to" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Section Unit</label>
                           <select class="form-select section" name="section" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="findings" class="form-label">Findings</label>
                           <textarea class="form-control findings" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="consequences" class="form-label">Consequences</label>
                           <textarea class="form-control consequences" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="requirements_not_fulfilled" class="form-label">Requirements Not Fulfilled: </label><i>(e.g., ISO 9001 Requirements, Statutory & Regulatory Requirements, Policies, Procedures, Guidelines, Work Instructions, or other forms of Documented Information.)</i>
                           <textarea class="form-control requirements_not_fulfilled" rows="4" disabled></textarea>
                        </div>
                     </div>
                  </form>
                  <form action="" id="root_cause_form_approval" enctype="multipart/form-data">
                     <h3>Section 3: ROOT CAUSE ANALYSIS</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <div id="checkboxes">
                        <div class="col-lg-12">
                           <div class="card">
                              <div class="card-body">
                                 <div class="row mb-2">
                                    <div class="col-lg-9">
                                       <h4 class="header-title">3.1 Is the nonconformity existing in other areas? Can this occur elsewhere?</h4>
                                       <p class="sub-header">If yes, the Root Cause Analysis and Corrective Actions shall be considered in all areas affected</p>
                                    </div>
                                    <div class="col-lg-3 text-inlign">
                                       <div class="form-check form-check-inline">
                                          <input type="radio" name="existing_nonconformity" value="1" class="form-check-input">
                                          <label class="form-check-label" for="existing_nonconformity">YES</label>
                                       </div>
                                       <div class="form-check form-check-inline">
                                          <input type="radio" name="existing_nonconformity" value="0" class="form-check-input">
                                          <label class="form-check-label" for="existing_nonconformity">NO</label>
                                       </div>
                                    </div>
                                    <div class="form-group col-lg-12">
                                       <label for="existing_nonconformity_remarks" class="form-label">Remarks</label>
                                       <textarea class="form-control" id="existing_nonconformity_remarks" name="existing_nonconformity_remarks" rows="4"></textarea>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-lg-9">
                                       <h4 class="header-title mb-2">Is there a need to make changes to QMS? E.g., updating Documented information?</h4>
                                    </div>
                                    <div class="col-lg-3 text-inlign">
                                       <div class="form-check form-check-inline">
                                          <input type="radio" name="update_doc_info" value="1" class="form-check-input">
                                          <label class="form-check-label" for="update_doc_info">YES</label>
                                       </div>
                                       <div class="form-check form-check-inline">
                                          <input type="radio"  name="update_doc_info" value="0" class="form-check-input">
                                          <label class="form-check-label" for="update_doc_info">NO</label>
                                       </div>
                                    </div>
                                    <div class="form-group col-lg-12">
                                       <label for="update_doc_info_remarks" class="form-label">Remarks</label>
                                       <textarea class="form-control" id="update_doc_info_remarks" name="update_doc_info_remarks" rows="4"></textarea>
                                    </div>
                                 </div>
                              </div>
                              <!-- end card-body -->
                           </div>
                           <!-- end card -->
                        </div>
                     </div>
                     <h3>Section 4: CORRECTIVE ACTIONS</h3>
                     <div id="risk-number-approval" class="mb-3">
                     </div>
                     <div id="checkboxes">
                        <div class="col-lg-12">
                           <div class="card">
                              <div class="card-body">
                                 <div class="row">
                                    <div class="col-lg-9">
                                       <h4 class="header-title">Is there opportunity identified?</h4>
                                    </div>
                                    <div class="col-lg-3 text-inlign">
                                       <div class="form-check form-check-inline">
                                          <input type="radio" id="customRadio1" name="opportunity_identified_yn" value="1" class="form-check-input">
                                          <label class="form-check-label" for="opportunity_identified_yn">YES</label>
                                       </div>
                                       <div class="form-check form-check-inline">
                                          <input type="radio" id="customRadio2" name="opportunity_identified_yn" value="0" class="form-check-input">
                                          <label class="form-check-label" for="opportunity_identified_yn">NO</label>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <!-- end card-body -->
                           </div>
                           <!-- end card -->
                        </div>
                     </div>
                     <div id="opportunity-number-approval" class="mb-3">
                     </div>
                     <div id="rootcause-approval" class="mb-3">
                     </div>
                     <div id="identified-root-approval" class="mb-3 font-11">
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="approval_action_root_cause_analysis" class="form-label">Review of Action and Root Cause Analysis</label>
                           <select class="form-select approval_action_root_cause_analysis" name="approval_action_root_cause_analysis">
                              <option value="For Verification">For Verification</option>
                              <option value="For Revision">For Revision</option>
                           </select>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="approval_action_root_cause_analysis_remarks" class="form-label">Remarks </label>
                           <textarea class="form-control approval_action_root_cause_analysis_remarks" name="approval_action_root_cause_analysis_remarks" rows="4"></textarea>
                        </div>
                     </div>
                  </form>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary" id="saveRootFA">Save</button>
               </div>
            </div>
            <!-- /.modal-content -->
         </div>
         <!-- /.modal-dialog -->
      </div>
      <div id="root-cause-verification" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
         <div class="modal-dialog modal-xl">
            <div class="modal-content">
               <div class="modal-header">
                  <h4 class="modal-title" id="standard-modalLabel">For Approval</h4>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <form class="addCARFormIssuance">
                     <h3>Section 1: NON CONFORMITY DEFINITION</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <div class="row mb-2">
                        <div class="form-group col-md-4">
                           <label for="requestor" class="form-label">Requestor</label>
                           <input type="text" class="form-control requestor" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="car_no" class="form-label">CAR No.</label>
                           <input type="text" class="form-control car_no" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="identification_date" class="form-label">Identification Date</label>
                           <input type="date" class="form-control identification_date" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-3">
                           <label for="source" class="form-label">Source</label>
                           <select class="form-select source" name="source" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($source as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['source_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_by" class="form-label">Issued By</label>
                           <select class="form-select issued_by" name="issued_by" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($division as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['div_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Issued To</label>
                           <select class="form-select issued_to" name="issued_to" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Section Unit</label>
                           <select class="form-select section" name="section" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="findings" class="form-label">Findings</label>
                           <textarea class="form-control findings" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="consequences" class="form-label">Consequences</label>
                           <textarea class="form-control consequences" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="requirements_not_fulfilled" class="form-label">Requirements Not Fulfilled: </label><i>(e.g., ISO 9001 Requirements, Statutory & Regulatory Requirements, Policies, Procedures, Guidelines, Work Instructions, or other forms of Documented Information.)</i>
                           <textarea class="form-control requirements_not_fulfilled" rows="4" disabled></textarea>
                        </div>
                     </div>
                  </form>
                  <form action="" id="root_cause_form_verification" enctype="multipart/form-data">
                     <h3>Section 3: ROOT CAUSE ANALYSIS</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <div id="checkboxes">
                        <div class="col-lg-12">
                           <div class="card">
                              <div class="card-body">
                                 <div class="row mb-2">
                                    <div class="col-lg-9">
                                       <h4 class="header-title">3.1 Is the nonconformity existing in other areas? Can this occur elsewhere?</h4>
                                       <p class="sub-header">If yes, the Root Cause Analysis and Corrective Actions shall be considered in all areas affected</p>
                                    </div>
                                    <div class="col-lg-3 text-inlign">
                                       <div class="form-check form-check-inline">
                                          <input type="radio" name="existing_nonconformity" value="1" class="form-check-input">
                                          <label class="form-check-label" for="existing_nonconformity">YES</label>
                                       </div>
                                       <div class="form-check form-check-inline">
                                          <input type="radio" name="existing_nonconformity" value="0" class="form-check-input">
                                          <label class="form-check-label" for="existing_nonconformity">NO</label>
                                       </div>
                                    </div>
                                    <div class="form-group col-lg-12">
                                       <label for="existing_nonconformity_remarks" class="form-label">Remarks</label>
                                       <textarea class="form-control" id="existing_nonconformity_remarks" name="existing_nonconformity_remarks" rows="4"></textarea>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-lg-9">
                                       <h4 class="header-title mb-2">Is there a need to make changes to QMS? E.g., updating Documented information?</h4>
                                    </div>
                                    <div class="col-lg-3 text-inlign">
                                       <div class="form-check form-check-inline">
                                          <input type="radio" name="update_doc_info" value="1" class="form-check-input">
                                          <label class="form-check-label" for="update_doc_info">YES</label>
                                       </div>
                                       <div class="form-check form-check-inline">
                                          <input type="radio"  name="update_doc_info" value="0" class="form-check-input">
                                          <label class="form-check-label" for="update_doc_info">NO</label>
                                       </div>
                                    </div>
                                    <div class="form-group col-lg-12">
                                       <label for="update_doc_info_remarks" class="form-label">Remarks</label>
                                       <textarea class="form-control" id="update_doc_info_remarks" name="update_doc_info_remarks" rows="4"></textarea>
                                    </div>
                                 </div>
                              </div>
                              <!-- end card-body -->
                           </div>
                           <!-- end card -->
                        </div>
                     </div>
                     <h3>Section 4: CORRECTIVE ACTIONS</h3>
                     <div id="risk-number-verification" class="mb-3">
                     </div>
                     <div id="checkboxes">
                        <div class="col-lg-12">
                           <div class="card">
                              <div class="card-body">
                                 <div class="row">
                                    <div class="col-lg-9">
                                       <h4 class="header-title">Is there opportunity identified?</h4>
                                    </div>
                                    <div class="col-lg-3 text-inlign">
                                       <div class="form-check form-check-inline">
                                          <input type="radio" id="customRadio1" name="opportunity_identified_yn" value="1" class="form-check-input">
                                          <label class="form-check-label" for="opportunity_identified_yn">YES</label>
                                       </div>
                                       <div class="form-check form-check-inline">
                                          <input type="radio" id="customRadio2" name="opportunity_identified_yn" value="0" class="form-check-input">
                                          <label class="form-check-label" for="opportunity_identified_yn">NO</label>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <!-- end card-body -->
                           </div>
                           <!-- end card -->
                        </div>
                     </div>
                     <div id="opportunity-number-verification" class="mb-3">
                     </div>
                     <h4 class="header-title">3.2 What are the causes of the Non conformity? (Root Cause Analysis using: Ishikawa / Fishbone Diagram with Why's and T (Total) P(Partial) N(No) Matrix?</h4>
                     <div id="rootcause-verification" class="mb-3">
                        <div class="col-lg-12 rootcause-repeatable">
                           <div class="card">
                              <div class="card-body">
                                 <div class="mb-3">
                                    <div class="row">
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Root Cause Analysis Used</label>
                                             <input type="text" class="form-control" name="rootcause[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">File Name</label>
                                             <input type="text" class="form-control" name="rootcause_file_name[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-3">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Attachment</label>
                                             <input type="file" class="form-control" name="rootcause_attachment_attachment[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Remove</label>
                                             <button type="button" class="btn btn-danger remove-rootcause-action"><i class="fas fa-trash"></i></button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <!-- end card-body-->
                           </div>
                           <!-- end card-->
                        </div>
                     </div>
                     <div id="identified-root-verification" class="mb-3 font-11">
                        <div class="col-lg-12 identified-root-repeatable">
                           <div class="card">
                              <div class="card-body">
                                 <div class="mb-3">
                                    <div class="row">
                                       <div class="col-xl-4 mb-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Identified Root Cause</label>
                                             <input type="text" class="form-control" name="identified_root[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-3 mb-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">TPN Control</label>
                                             <select class="form-select tpn-control" name="tpn_control[]">
                                                <option value="total">Total</option>
                                                <option value="partial">Partial</option>
                                                <option value="no">No</option>
                                             </select>
                                          </div>
                                       </div>
                                       <div class="col-xl-3 mb-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Corrective Action</label>
                                             <input type="text" class="form-control" name="identified_root_corrective_action[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-4 mb-1">
                                          <div class="form-group">
                                             <label for="issued_by" class="form-label">Issued By</label>
                                             <select class="form-select issued_by" name="tpn_issued_by[]">
                                                <option value=""></option>
                                                <?php
                                                   foreach ($division as $key => $value) {
                                                      echo '<option value="'.$value['id'].'">'.$value['div_name'].'</option>';
                                                   }
                                                   ?>
                                             </select>
                                             <ul class="parsley-errors-list filled hidden">
                                                <li class="parsley-required"></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div class="col-xl-3 mb-1">
                                          <div class="form-group">
                                             <label for="issued_to" class="form-label">Issued To</label>
                                             <select class="form-select issued_to" name="tpn_issued_to[]">
                                                <option value=""></option>
                                             </select>
                                             <ul class="parsley-errors-list filled hidden">
                                                <li class="parsley-required"></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div class="col-xl-3 mb-1">
                                          <div class="form-group">
                                             <label for="issued_to" class="form-label">Section Unit</label>
                                             <select class="form-select section"  name="tpn_section[]">
                                                <option value=""></option>
                                             </select>
                                             <ul class="parsley-errors-list filled hidden">
                                                <li class="parsley-required"></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                             <input type="text" class="form-control" name="identified_root_person_responsible[]" placeholder="Enter Name of personel">
                                          </div>
                                       </div>
                                       <div class="col-xl-3">
                                          <div class="mb-3 mb-xl-0">
                                             <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                             <input type="date" class="form-control" name="identified_root_completion_date[]" placeholder="Select Date">
                                          </div>
                                       </div>
                                       <div class="col-xl-3">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Attachment</label>
                                             <input type="file" class="form-control" name="identified_root_attachment_attachment[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Remove</label>
                                             <button type="button" class="btn btn-danger remove-identified-root-action"><i class="fas fa-trash"></i></button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <!-- end card-body-->
                           </div>
                           <!-- end card-->
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="verification_action_root_cause_analysis" class="form-label">Review of Action and Root Cause Analysis</label>
                           <select class="form-select verification_action_root_cause_analysis" name="verification_action_root_cause_analysis">
                              <option value="For Validation">For Validation</option>
                              <option value="For Revision">For Revision</option>
                           </select>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="verification_action_root_cause_analysis_remarks" class="form-label">Remarks </label>
                           <textarea class="form-control verification_action_root_cause_analysis_remarks" name="verification_action_root_cause_analysis_remarks" rows="4"></textarea>
                        </div>
                     </div>
                  </form>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary" id="saveRootFV">Save</button>
               </div>
            </div>
            <!-- /.modal-content -->
         </div>
         <!-- /.modal-dialog -->
      </div>
      <div id="root-cause-validation" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
         <div class="modal-dialog modal-xl">
            <div class="modal-content">
               <div class="modal-header">
                  <h4 class="modal-title" id="standard-modalLabel">For Validation</h4>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <form class="addCARFormIssuance">
                     <h3>Section 1: NON CONFORMITY DEFINITION</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <div class="row mb-2">
                        <div class="form-group col-md-4">
                           <label for="requestor" class="form-label">Requestor</label>
                           <input type="text" class="form-control requestor" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="car_no" class="form-label">CAR No.</label>
                           <input type="text" class="form-control car_no" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="identification_date" class="form-label">Identification Date</label>
                           <input type="date" class="form-control identification_date" disabled>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-3">
                           <label for="source" class="form-label">Source</label>
                           <select class="form-select source" name="source" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($source as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['source_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_by" class="form-label">Issued By</label>
                           <select class="form-select issued_by" name="issued_by" disabled>
                              <option value=""></option>
                              <?php
                                 foreach ($division as $key => $value) {
                                    echo '<option value="'.$value['id'].'">'.$value['div_name'].'</option>';
                                 }
                                 ?>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Issued To</label>
                           <select class="form-select issued_to" name="issued_to" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Section Unit</label>
                           <select class="form-select section" name="section" disabled>
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="findings" class="form-label">Findings</label>
                           <textarea class="form-control findings" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="consequences" class="form-label">Consequences</label>
                           <textarea class="form-control consequences" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="requirements_not_fulfilled" class="form-label">Requirements Not Fulfilled: </label><i>(e.g., ISO 9001 Requirements, Statutory & Regulatory Requirements, Policies, Procedures, Guidelines, Work Instructions, or other forms of Documented Information.)</i>
                           <textarea class="form-control requirements_not_fulfilled" rows="4" disabled></textarea>
                        </div>
                     </div>
                  </form>
                  <form action="" id="root_cause_form_validation" enctype="multipart/form-data">
                     <h3>Section 3: ROOT CAUSE ANALYSIS</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <div id="checkboxes">
                        <div class="col-lg-12">
                           <div class="card">
                              <div class="card-body">
                                 <div class="row mb-2">
                                    <div class="col-lg-9">
                                       <h4 class="header-title">3.1 Is the nonconformity existing in other areas? Can this occur elsewhere?</h4>
                                       <p class="sub-header">If yes, the Root Cause Analysis and Corrective Actions shall be considered in all areas affected</p>
                                    </div>
                                    <div class="col-lg-3 text-inlign">
                                       <div class="form-check form-check-inline">
                                          <input type="radio" name="existing_nonconformity" value="1" class="form-check-input">
                                          <label class="form-check-label" for="existing_nonconformity">YES</label>
                                       </div>
                                       <div class="form-check form-check-inline">
                                          <input type="radio" name="existing_nonconformity" value="0" class="form-check-input">
                                          <label class="form-check-label" for="existing_nonconformity">NO</label>
                                       </div>
                                    </div>
                                    <div class="form-group col-lg-12">
                                       <label for="existing_nonconformity_remarks" class="form-label">Remarks</label>
                                       <textarea class="form-control" id="existing_nonconformity_remarks" name="existing_nonconformity_remarks" rows="4"></textarea>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-lg-9">
                                       <h4 class="header-title mb-2">Is there a need to make changes to QMS? E.g., updating Documented information?</h4>
                                    </div>
                                    <div class="col-lg-3 text-inlign">
                                       <div class="form-check form-check-inline">
                                          <input type="radio" name="update_doc_info" value="1" class="form-check-input">
                                          <label class="form-check-label" for="update_doc_info">YES</label>
                                       </div>
                                       <div class="form-check form-check-inline">
                                          <input type="radio"  name="update_doc_info" value="0" class="form-check-input">
                                          <label class="form-check-label" for="update_doc_info">NO</label>
                                       </div>
                                    </div>
                                    <div class="form-group col-lg-12">
                                       <label for="update_doc_info_remarks" class="form-label">Remarks</label>
                                       <textarea class="form-control" id="update_doc_info_remarks" name="update_doc_info_remarks" rows="4"></textarea>
                                    </div>
                                 </div>
                              </div>
                              <!-- end card-body -->
                           </div>
                           <!-- end card -->
                        </div>
                     </div>
                     <h3>Section 4: CORRECTIVE ACTIONS</h3>
                     <div id="risk-number-validation" class="mb-3">
                     </div>
                     <div id="checkboxes">
                        <div class="col-lg-12">
                           <div class="card">
                              <div class="card-body">
                                 <div class="row">
                                    <div class="col-lg-9">
                                       <h4 class="header-title">Is there opportunity identified?</h4>
                                    </div>
                                    <div class="col-lg-3 text-inlign">
                                       <div class="form-check form-check-inline">
                                          <input type="radio" id="customRadio1" name="opportunity_identified_yn" value="1" class="form-check-input">
                                          <label class="form-check-label" for="opportunity_identified_yn">YES</label>
                                       </div>
                                       <div class="form-check form-check-inline">
                                          <input type="radio" id="customRadio2" name="opportunity_identified_yn" value="0" class="form-check-input">
                                          <label class="form-check-label" for="opportunity_identified_yn">NO</label>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <!-- end card-body -->
                           </div>
                           <!-- end card -->
                        </div>
                     </div>
                     <div id="opportunity-number-validation" class="mb-3">
                     </div>
                     <h4 class="header-title">3.2 What are the causes of the Non conformity? (Root Cause Analysis using: Ishikawa / Fishbone Diagram with Why's and T (Total) P(Partial) N(No) Matrix?</h4>
                     <div id="rootcause-validation" class="mb-3">
                        <div class="col-lg-12 rootcause-repeatable">
                           <div class="card">
                              <div class="card-body">
                                 <div class="mb-3">
                                    <div class="row">
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Root Cause Analysis Used</label>
                                             <input type="text" class="form-control" name="rootcause[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">File Name</label>
                                             <input type="text" class="form-control" name="rootcause_file_name[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-3">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Attachment</label>
                                             <input type="file" class="form-control" name="rootcause_attachment_attachment[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Remove</label>
                                             <button type="button" class="btn btn-danger remove-rootcause-action"><i class="fas fa-trash"></i></button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <!-- end card-body-->
                           </div>
                           <!-- end card-->
                        </div>
                     </div>
                     <div id="identified-root-validation" class="mb-3 font-11">
                        <div class="col-lg-12 identified-root-repeatable">
                           <div class="card">
                              <div class="card-body">
                                 <div class="mb-3">
                                    <div class="row">
                                       <div class="col-xl-4 mb-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Identified Root Cause</label>
                                             <input type="text" class="form-control" name="identified_root[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-3 mb-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">TPN Control</label>
                                             <select class="form-select tpn-control" name="tpn_control[]">
                                                <option value="total">Total</option>
                                                <option value="partial">Partial</option>
                                                <option value="no">No</option>
                                             </select>
                                          </div>
                                       </div>
                                       <div class="col-xl-3 mb-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Corrective Action</label>
                                             <input type="text" class="form-control" name="identified_root_corrective_action[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-4 mb-1">
                                          <div class="form-group">
                                             <label for="issued_by" class="form-label">Issued By</label>
                                             <select class="form-select issued_by" name="tpn_issued_by[]">
                                                <option value=""></option>
                                                <?php
                                                   foreach ($division as $key => $value) {
                                                      echo '<option value="'.$value['id'].'">'.$value['div_name'].'</option>';
                                                   }
                                                   ?>
                                             </select>
                                             <ul class="parsley-errors-list filled hidden">
                                                <li class="parsley-required"></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div class="col-xl-3 mb-1">
                                          <div class="form-group">
                                             <label for="issued_to" class="form-label">Issued To</label>
                                             <select class="form-select issued_to" name="tpn_issued_to[]">
                                                <option value=""></option>
                                             </select>
                                             <ul class="parsley-errors-list filled hidden">
                                                <li class="parsley-required"></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div class="col-xl-3 mb-1">
                                          <div class="form-group">
                                             <label for="issued_to" class="form-label">Section Unit</label>
                                             <select class="form-select section"  name="tpn_section[]">
                                                <option value=""></option>
                                             </select>
                                             <ul class="parsley-errors-list filled hidden">
                                                <li class="parsley-required"></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                             <input type="text" class="form-control" name="identified_root_person_responsible[]" placeholder="Enter Name of personel">
                                          </div>
                                       </div>
                                       <div class="col-xl-3">
                                          <div class="mb-3 mb-xl-0">
                                             <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                             <input type="date" class="form-control" name="identified_root_completion_date[]" placeholder="Select Date">
                                          </div>
                                       </div>
                                       <div class="col-xl-3">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Attachment</label>
                                             <input type="file" class="form-control" name="identified_root_attachment_attachment[]">
                                          </div>
                                       </div>
                                       <div class="col-xl-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Remove</label>
                                             <button type="button" class="btn btn-danger remove-identified-root-action"><i class="fas fa-trash"></i></button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <!-- end card-body-->
                           </div>
                           <!-- end card-->
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="validation_action_root_cause_analysis" class="form-label">Review of Action and Root Cause Analysis</label>
                           <select class="form-select validation_action_root_cause_analysis" name="validation_action_root_cause_analysis">
                              <option value="For Closure">Recommended for Closure</option>
                              <option value="For Revision">For Revision</option>
                           </select>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="validation_action_root_cause_analysis_remarks" class="form-label">Remarks </label>
                           <textarea class="form-control validation_action_root_cause_analysis_remarks" name="validation_action_root_cause_analysis_remarks" rows="4"></textarea>
                        </div>
                     </div>
                  </form>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary" id="saveRootFVA">Save</button>
               </div>
            </div>
            <!-- /.modal-content -->
         </div>
         <!-- /.modal-dialog -->
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