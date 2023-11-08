<div class="content">
   <!-- Start Content-->
   <div class="container-fluid">

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