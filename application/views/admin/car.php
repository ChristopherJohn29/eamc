<div class="content">
   <!-- Start Content-->
   <div class="container-fluid">
      <div id="car-history" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
               <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h4 class="modal-title" id="standard-modalLabel">History</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                     <input type="hidden" id="car_history_id" value="">

                     <table id="car-history-datatable" class="table table-bordered dt-responsive nowrap w-100">
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

      <div id="car-dues-corrective" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
               <div class="modal-dialog">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h4 class="modal-title" id="standard-modalLabel">Adjust Corrective Action Due Date</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                     <input type="hidden" id="ca_completion_date_id" value="">
                        <div class="form-group col-md-12">
                           <label for="ca_completion_date" class="form-label">Corrective Action Due Date</label>
                           <input type="date" class="form-control" id="ca_completion_date" required>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>

                        <?php 
               
                        $requiredRoles = array(
                           'designation' => 'division',
                           'role' => ['osqm_dco', 'osqm_do'],
                        );

                        if ($this->role_checker->checkRole($requiredRoles)) {
                        ?>
                           <button type="button" class="btn btn-primary" id="saveDueCorrective">Save</button>
                           <?php
                        }

                        ?>
                     </div>
                  </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
      </div>

      <div id="car-dues-corrective-second" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
               <div class="modal-dialog">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h4 class="modal-title" id="standard-modalLabel">Adjust Corrective Action Due Date</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                     <input type="hidden" id="ca_second_completion_date_id" value="">
                        <div class="form-group col-md-12">
                           <label for="ca_second_completion_date" class="form-label">Corrective Action Due Date</label>
                           <input type="date" class="form-control" id="ca_second_completion_date" required>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>

                        <?php 
               
                        $requiredRoles = array(
                           'designation' => 'division',
                           'role' => ['osqm_dco', 'osqm_do'],
                        );

                        if ($this->role_checker->checkRole($requiredRoles)) {
                        ?>
                           <button type="button" class="btn btn-primary" id="saveDueCorrectiveSecond">Save</button>
                           <?php
                        }

                        ?>
                     </div>
                  </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
      </div>
      
      <div id="car-dues-correction" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
               <div class="modal-dialog">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h4 class="modal-title" id="standard-modalLabel">Adjust Correction Due Date</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                     <input type="hidden" id="fc_completion_date_id" value="">
                        <div class="form-group col-md-12">
                           <label for="fc_completion_date" class="form-label">Correction Due Date</label>
                           <input type="date" class="form-control" id="fc_completion_date" required>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>

                        <?php 
               
                        $requiredRoles = array(
                           'designation' => 'division',
                           'role' => ['osqm_dco', 'osqm_do'],
                        );

                        if ($this->role_checker->checkRole($requiredRoles)) {
                        ?>
                           <button type="button" class="btn btn-primary" id="saveDueCorrection">Save</button>
                           <?php
                        }

                        ?>

                        
                     </div>
                  </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
      </div>

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
                           <select class="form-select" id="issued_to" name="issued_to">
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                        <div class="form-group col-md-3">
                           <label for="issued_to" class="form-label">Section Unit</label>
                           <select class="form-select" id="section" name="section">
                              <option value=""></option>
                           </select>
                           <ul class="parsley-errors-list filled hidden">
                              <li class="parsley-required"></li>
                           </ul>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="findings" class="form-label">Note: </label><small> <i> Identification date may be different from the date when non-conformity happened. This can be after the validation or investigation that the nonconformity really exists. E.g. IQA closing meeting, Customer  Complaint/ Never Event Investigation, etc.</i></small>
                           
                        </div>
                        <hr>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="findings" class="form-label">Findings: </label><small><i>(Clear definition of nonconformity. Must state What, When, and Proof or Objective Evidence that the nonconformity exist E.g. Document, records, statement of facts, or observations)</i></small>
                           <textarea class="form-control" id="findings" rows="4"></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="consequences" class="form-label">Consequences: </label><small><i>(The result of effect of the nonconformance.)</i></small>
                           <textarea class="form-control" id="consequences" rows="4"></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="requirements_not_fulfilled" class="form-label">Requirements Not Fulfilled: </label><small><i>(e.g., ISO 9001 Requirements, Statutory & Regulatory Requirements, Policies, Procedures, Guidelines, Work Instructions, or other forms of Documented Information.)</i></small>
                           <textarea class="form-control" id="requirements_not_fulfilled" rows="4"></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="consequences" class="form-label">Attachment (Please attach File URL)</label>
                           <input type="text" class="form-control car_attachment selectize-close-btn" id="car_attachment" required>
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
                           <label for="findings" class="form-label">Note: </label><small><i> Identification date may be different from the date when non-conformity happened. This can be after the validation or investigation that the nonconformity really exists. E.g. IQA closing meeting, Customer  Complaint/ Never Event Investigation, etc.</i></small>
                           
                        </div>
                        <hr>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="findings" class="form-label">Findings: </label><small><i>(Clear definition of nonconformity. Must state What, When, and Proof or Objective Evidence that the nonconformity exist E.g. Document, records, statement of facts, or observations)</i></small>
                           <textarea class="form-control findings" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="consequences" class="form-label">Consequences: </label><small><i>(The result of effect of the nonconformance.)</i></small>
                           <textarea class="form-control consequences" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="requirements_not_fulfilled" class="form-label">Requirements Not Fulfilled: </label><small><i>(e.g., ISO 9001 Requirements, Statutory & Regulatory Requirements, Policies, Procedures, Guidelines, Work Instructions, or other forms of Documented Information.)</i></small>
                           <textarea class="form-control requirements_not_fulfilled" rows="4" disabled></textarea>
                        </div>
                     </div>
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="consequences" class="form-label">Attachment (Please attach File URL)</label>
                           <input type="text" class="form-control car_attachment selectize-close-btn" disabled>
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

                  <?php 
               
                  $requiredRoles = array(
                     'designation' => 'division',
                     'role' => ['div_chief'],
                  );

                  if ($this->role_checker->checkRole($requiredRoles)) {
                  ?>
                     <button type="button" class="btn btn-primary" id="saveCarIssuance">Save</button>
                     <?php
                  }

                  ?>

                  
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
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="consequences" class="form-label">Attachment (Please attach File URL)</label>
                           <input type="text" class="form-control car_attachment selectize-close-btn"  disabled>
                        </div>
                     </div>
                  </form>
                  <form action="" id="correction_form" enctype="multipart/form-data">
                     <h3>Section 2: CORRECTION & DEALING WITH THE CONSEQUENCES</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <h5>2.1 Correction of the nonconformity: (Immediate action to control and correct the nonconformity)</h5>
                     <div id="correction" class="mb-3">
                        <div class="col-lg-12 correction-repeatable orig-correction">
                           <div class="card">
                              <div class="card-body">
                                 <div class="mb-3">
                                    <div class="row">
                                       <div class="col-xl-12">
                                          <div class="mb-3 mb-xl-0">
                                             <label for="exampleInputEmail1" class="form-label">Correction</label>
                                             <textarea class="form-control" name="correction[]" rows="4"></textarea>
                                          </div>
                                       </div>
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                             <input type="text" class="form-control" name="correction_person_responsible[]" placeholder="Enter Name of personel">
                                          </div>
                                       </div>
                                       <div class="col-xl-4">
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
                     <h5>2.2 Dealing with the Consequences: (Action to handle or treat the result or efect of the nonconformance)</h5>
                     <div id="consequencesdiv">
                        <div class="col-lg-12 consequences-repeatable orig-consequence">
                           <div class="card">
                              <div class="card-body">
                                 <div class="mb-3">
                                    <div class="row">
                                       <div class="col-xl-12">
                                          <div class="mb-3 mb-xl-0">
                                             <label for="exampleInputEmail1" class="form-label">Dealing with the consequences</label>
                                             <textarea class="form-control" name="consequence[]" rows="4"></textarea>
                                          </div>
                                       </div>
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                             <input type="text" class="form-control" name="consequence_person_responsible[]" placeholder="Enter Name of personel">
                                          </div>
                                       </div>
                                       <div class="col-xl-4">
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

                     <div class="row mt-4" id="car-correction-action">

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
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="consequences" class="form-label">Attachment (Please attach File URL)</label>
                           <input type="text" class="form-control car_attachment selectize-close-btn"  disabled>
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
                                                         <label class="form-label">File URL</label>
                                                         <input type="text" class="form-control selectize-close-btn" name="rootcause_file_url[]">
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
                     <div id="identified-root" class="mb-3">
                        <div class="col-lg-12 identified-root-repeatable">
                           <div class="card">
                              <div class="card-body">
                                 <div class="mb-3">
                                    <div class="row">
                                       <div class="col-xl-6 mb-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Identified Root Cause</label>
                                             <textarea rows="4" class="form-control" name="identified_root[]"></textarea>
                                          </div>
                                       </div>
                                       
                                       <div class="col-xl-6 mb-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Corrective Action</label>
                                             <textarea rows="4" class="form-control" name="identified_root_corrective_action[]"></textarea>
                                          </div>
                                       </div>
                                       <div class="col-xl-4 mb-1">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">TPN Control</label>
                                             <select class="form-select tpn-control" name="tpn_control[]">
                                                <option value="total">Total</option>
                                                <option value="partial">Partial</option>
                                                <option value="no">No</option>
                                             </select>
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
                                       <div class="col-xl-4 mb-1">
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
                                       <div class="col-xl-4 mb-1">
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
                                             <label class="form-label">File URL</label>
                                             <input type="text" class="form-control selectize-close-btn" name="identified_root_attachment_url[]">
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
                                       <div class="col-xl-6">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Risk Number</label>
                                             <textarea rows="4" class="form-control" name="risk_number[]"></textarea>
                                          </div>
                                       </div>
                                       <div class="col-xl-6">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Details / Updates</label>
                                             <textarea rows="4" class="form-control" name="risk_number_details_update[]"></textarea>
                                          </div>
                                       </div>
                                       <div class="col-xl-4">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">File URL</label>
                                             <input type="text" class="form-control selectize-close-btn" name="risk_number_attachment_url[]">
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
                                          <input type="radio" id="customRadio1" name="opportunity_identified_yn" value="1" checked class="form-check-input">
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
                                       <div class="col-xl-6">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Opportunity Number</label>
                                             <textarea rows="4" class="form-control" name="opportunity_number[]"></textarea>
                                          </div>
                                       </div>
                                       <div class="col-xl-6">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">Opportunities Identified (if applicable)</label>
                                             <textarea rows="4" class="form-control" name="opportunity_identified[]"></textarea>
                                          </div>
                                       </div>
                                       <div class="col-xl-3">
                                          <div class="mb-3 mb-xl-0">
                                             <label class="form-label">File URL</label>
                                             <input type="text" class="form-control selectize-close-btn" name="opportunity_number_attachment_url[]">
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
                           <label for="update_doc_info_remarks" class="form-label">Details</label>
                           <textarea class="form-control" id="update_doc_info_remarks" name="update_doc_info_remarks" rows="4"></textarea>
                        </div>
                     </div>
                     <div class="row mt-4" id="car-action">

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

      <div id="closing" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
         <div class="modal-dialog modal-xl">
            <div class="modal-content">
               
             <img src="<?=base_url()?>assets/images/header_car.png" alt="logo" class="car_header_image hidden">
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
                     <div class="row mb-2">
                        <div class="form-group col-md-12">
                           <label for="consequences" class="form-label">Attachment (Please attach File URL)</label>
                           <input type="text" class="form-control car_attachment selectize-close-btn"  disabled>
                        </div>
                     </div>
                  </form>
                  <form action="" id="correction_form_closing" enctype="multipart/form-data">
                     <h3>Section 2: CORRECTION & DEALING WITH THE CONSEQUENCES</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <h5>2.1 Correction of the nonconformity: (Immediate action to control and correct the nonconformity)</h5>
                     <div id="correction_closing" class="mb-3">

                     </div>
                     <h5>2.2 Dealing with the Consequences: (Action to handle or treat the result or efect of the nonconformance)</h5>
                     <div id="consequencesdiv_closing">
                     
                     </div>
                  </form>
                  <form action="" id="root_cause_form_closing" enctype="multipart/form-data">
                     <h3>Section 3: ROOT CAUSE ANALYSIS</h3>
                     <input type="hidden" name="car_id" class="car_id">
                     <div id="checkboxes_closing">
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
                                       <textarea class="form-control" id="existing_nonconformity_remarks_closing" name="existing_nonconformity_remarks" rows="4"></textarea>
                                    </div>
                                 </div>
                                 <h4 class="header-title">3.2 What are the causes of the Non conformity? Root Cause Analysis using: Ishikawa / Fishbone <br> Diagram with Why's and T (Total) P(Partial) N(No) Matrix?</h4>
                                 <div id="rootcause_closing" class="mb-3">
                                  
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
                     <div id="identified-root_closing" class="mb-3">
                        
                     </div>
                     <h5>4.2 Update Risk Registry(Please attached updated Risk Registry)</h5>
                     <div id="risk-number_closing" class="mb-3">
                     </div>
                     <div id="checkboxes_closing">
                        <div class="col-lg-12">
                           <div class="card">
                              <div class="card-body">
                                 <div class="row">
                                    <div class="col-lg-9">
                                       <h4 class="header-title">Is there opportunity identified? Please attach updated Opportunity Registry if YES</h4>
                                    </div>
                                    <div class="col-lg-3 text-inlign">
                                       <div class="form-check form-check-inline">
                                          <input type="radio" id="customRadio1" name="opportunity_identified_yn" value="1" checked class="form-check-input">
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
                     <div id="opportunity-number_closing" class="mb-3">
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
                           <label for="update_doc_info_remarks" class="form-label">Details</label>
                           <textarea class="form-control" id="update_doc_info_remarks" name="update_doc_info_remarks" rows="4"></textarea>
                        </div>
                     </div>
                     <div class="row mt-4" id="car-closing">

                     </div>
                  </form>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary" id="saveClosing">Save</button>
                  <button type="button" class="btn btn-primary" id="printModalBtn">Print</button>
               </div>
            </div>
            <!-- /.modal-content -->
         </div>
         <!-- /.modal-dialog -->
      </div>
      
      <?php 
      if ($role) {
      ?>
         <div class="user-client" data-section="<?=$section?>" data-role="<?=$role?>" data-department_section="<?=$department_section?>" data-department="<?=$department?>"></div>
         <?php
      }
      ?>

      <!-- start page title -->
      <div class="row">
         <div class="col-12">
            <div class="page-title-box">
               <div class="page-title-right">
             

               </div>
               <h4 class="page-title"><?=$title?></h4>
            </div>
         </div>
      </div>
      <div class="row">
      <?php 
         $requiredRoles = array(
            'designation' => 'division',
            'role' => ['osqm_dco', 'osqm_do'],
         );

         if ($this->role_checker->checkRole($requiredRoles)) {
         ?>
      <form id="filterCARForm">
         <div class="row mb-2">
            <div class="form-group col-md-2">
                  <label for="filter_car_id" class="form-label">CAR ID</label>
                  <input type="text" class="form-control" id="filter_car_id" name="filter_car_id">
            </div>
            <div class="form-group col-md-2">
                  <label for="filter_car_no" class="form-label">CAR No.</label>
                  <input type="text" class="form-control" id="filter_car_no" name="filter_car_no">
            </div>
            <div class="form-group col-md-2">
                  <label for="filter_source" class="form-label">Source</label>
                  <select class="form-select" id="filter_source" name="filter_source">
                     <option value=""></option>
                     <option value="1">Internal Audit (systemic)</option>
                     <option value="2">Internal (non-systemic)</option>
                     <option value="3">Unmet Target in QOP</option>
                     <option value="4">(Strategic Absence of Gap Analysis)</option>
                     <option value="5">Unmet Target in QOP (Core)</option>
                     <option value="6">Unmet Target in QOP (Support)</option>
                     <option value="7">Safety/Hazard/Never Event/Sentinel Event</option>
                     <option value="8">Customer Complaint</option>
                  </select>
            </div>
            <div class="form-group col-md-2">
                  <label for="filter_issued_by" class="form-label">Issued By</label>
                  <select class="form-select" id="filter_issued_by" name="filter_issued_by">
                     <option value=""></option>
                     <option value="2">HOPSS</option>
                     <option value="3">MEDICAL</option>
                     <option value="4">NURSING</option>
                     <option value="5">OFFICE UNDER THE MCC</option>
                     <option value="6">ALLIED</option>
                     <option value="8">FINANCE</option>
                  </select>
            </div>
            <div class="form-group col-md-2">
                  <label for="filter_issued_to" class="form-label">Issued To</label>
                  <select class="form-select" id="filter_issued_to" name="filter_issued_to">
                     <option value=""></option>
                  </select>
            </div>
            <div class="form-group col-md-2">
                  <label for="filter_section" class="form-label">Section</label>
                  <select class="form-select" id="filter_section" name="filter_section">
                     <option value=""></option>
                  </select>
            </div>
         </div>
         <div class="row mb-2">
            <div class="form-group col-md-2">
                  <label for="filter_identification_date_start" class="form-label">Identification Date (Start)</label>
                  <input type="date" class="form-control" id="filter_identification_date_start" name="filter_identification_date_start">
            </div>
            <div class="form-group col-md-2">
                  <label for="filter_identification_date_end" class="form-label">Identification Date (End)</label>
                  <input type="date" class="form-control" id="filter_identification_date_end" name="filter_identification_date_end">
            </div>
            <div class="form-group col-md-2">
                  <label for="filter_registration_date_start" class="form-label">Registration Date (Start)</label>
                  <input type="date" class="form-control" id="filter_registration_date_start" name="filter_registration_date_start">
            </div>
            <div class="form-group col-md-2">
                  <label for="filter_registration_date_end" class="form-label">Registration Date (End)</label>
                  <input type="date" class="form-control" id="filter_registration_date_end" name="filter_registration_date_end">
            </div>
            <div class="form-group col-md-2">
                  <label for="filter_date_closed_start" class="form-label">Date Closed (Start)</label>
                  <input type="date" class="form-control" id="filter_date_closed_start" name="filter_date_closed_start">
            </div>
            <div class="form-group col-md-2">
                  <label for="filter_date_closed_end" class="form-label">Date Closed (End)</label>
                  <input type="date" class="form-control" id="filter_date_closed_end" name="filter_date_closed_end">
            </div>
         </div>
         <div class="row mb-2">
            <div class="form-group col-md-2">
                  <label for="filter_for_correction_status" class="form-label">For Correction Status</label>
                  <select class="form-select" id="filter_for_correction_status" name="filter_for_correction_status">
                     <option value=""></option>
                     <option value="For Issuance of NC">For Issuance of NC</option>
                     <option value="For CAR action">For CAR action</option>
                     <option value="For Revision">For Revision</option>
                     <option value="For OSQM Review">For OSQM Review</option>
                     <option value="For Approval">For Approval</option>
                     <option value="For Implementation">For Implementation</option>
                     <option value="For Verification">For Verification</option>
                     <option value="For Validation">For Validation</option>
                     <option value="For Closure">For Closure</option>
                     <option value="Closed">Closed</option>
                  </select>
            </div>
            <div class="form-group col-md-2">
                  <label for="filter_corrective_action_status" class="form-label">Corrective Action Status</label>
                  <select class="form-select" id="filter_corrective_action_status" name="filter_corrective_action_status">
                     <option value=""></option>
                     <option value="For Issuance of NC">For Issuance of NC</option>
                     <option value="For CAR action">For CAR action</option>
                     <option value="For Revision">For Revision</option>
                     <option value="For OSQM Review">For OSQM Review</option>
                     <option value="For Approval">For Approval</option>
                     <option value="For Implementation">For Implementation</option>
                     <option value="For Verification">For Verification</option>
                     <option value="For Validation">For Validation</option>
                     <option value="For Closure">For Closure</option>
                     <option value="Closed">Closed</option>
                  </select>
            </div>
            <div class="form-group col-md-2">
                  <label for="filter_status" class="form-label">Status</label>
                  <select class="form-select" id="filter_status" name="filter_status">
                     <option value=""></option>
                     <option value="For Issuance of NC">For Issuance of NC</option>
                     <option value="For CAR action">For CAR action</option>
                     <option value="For Revision">For Revision</option>
                     <option value="For OSQM Review">For OSQM Review</option>
                     <option value="For Approval">For Approval</option>
                     <option value="For Implementation">For Implementation</option>
                     <option value="For Verification">For Verification</option>
                     <option value="For Validation">For Validation</option>
                     <option value="For Closure">For Closure</option>
                     <option value="Dissapproved">Dissapproved</option>
                     <option value="Closed">Closed</option>
                  </select>
            </div>
         </div>
         <div class="row mb-2" style="text-align:right;">
            <div class="form-group col-md-12">
                  <button type="button" id="previewButton" class="btn btn-primary">Preview</button>
                  <button type="button" id="exportCsvButton" class="btn btn-primary">Export CSV Data</button>
            </div>
         </div>
      </form>
      <?php
         }
      ?>
      <div class="page-title-right mb-2" style="text-align:right;">
         <?php 
         $requiredRoles = array(
            'designation' => 'division',
            'role' => ['osqm_dco', 'osqm_do'],
         );

         if ($this->role_checker->checkRole($requiredRoles)) {
         ?>
            <button type="button" class="btn btn-primary waves-effect waves-light add-car-button" data-bs-toggle="modal" data-bs-target="#add-car"><i class="fas fa-plus"></i> Register CAR</button>
            <?php
         }
         ?>

      </div>
         
         <div class="col-12">
            <div class="card">
               <div class="card-body">
                  <table id="car-global-datatable" class="table dt-responsive nowrap w-100">
                     <thead>
                        <tr>
                           <th>CAR ID.</th>
                           <th>CAR NO.</th>
                           <th>Source</th>
                           <th>Issued By</th>
                           <th>Issued To</th>
                           <th>Identification Date</th>
                           <th>Registration Date</th>
                           <th>Date Closed</th>
                           <th>For Correction Status</th>
                           <th>Corrective Action Status</th>
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