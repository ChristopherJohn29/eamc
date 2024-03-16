var car = {

    load : function (){
        dataTable = $('#car-global-datatable.dataTable');

        if (dataTable.length) {
            // If it's a DataTable, destroy it
            dataTable.DataTable().destroy();
        }

        $('#car-global-datatable tbody').html('');

        $.ajax({
            type: 'POST',
            url: 'getCar', // Replace 'MyController' with your controller name
            data: {'status' : 'all'},
            success: function (response) {
                if(response != 'null'){
                    $.each(JSON.parse(response), function (index, item) {
                        // Access each item's properties
                        var car_id = item.id || '';
                        var requestor = item.requestor || '';
                        var car_no = item.car_no || '';
                        var source_name = item.source_name || '';
                        var source = item.source || '';
                        var issued_by_name = item.division || '';
                        var issued_by = item.issued_by || '';
                        var issued_to = item.issued_to || '';
                        var issued_to_name = item.department || '';
                        var section = item.section || '';
                        var findings = item.findings || '';
                        var consequences = item.consequences || '';
                        var requirements_not_fulfilled = item.requirements_not_fulfilled || '';
                        var identification_date = item.identification_date || '';
                        var registration_date = item.registration_date || '';
                        var ca_completion_date = item.ca_completion_date || '';
                        var fc_completion_date = item.fc_completion_date || '';
                        var date_closed = item.date_closed || '';
                        var corrective_action_status = item.corrective_action_status || '';
                        var for_correction_status = item.for_correction_status || '';
                        var status = item.status || '';
                        var issuance_of_nc = item.issuance_of_nc || '';
                        var issuance_of_nc_remarks = item.issuance_of_nc_remarks || '';

                        var corrective_action_status = item.corrective_action_status || '';
                        var for_correction_status = item.for_correction_status || '';

                        var osqm_review_correction = "";
                        var osqm_approval_correction = "";
                        var osqm_verification_correction = "";
                        var osqm_validation_correction = "";
                        var osqm_review_corrective_action = "";
                        var osqm_approval_corrective_action = "";
                        var osqm_verification_corrective_action = "";
                        var osqm_validation_corrective_action = "";


                        var osqm_review_corrective_action = "";
                        
                        if(for_correction_status == 'For Approval' || for_correction_status == 'For Verification' || for_correction_status == 'For Validation' || for_correction_status == 'For Closure'){
                            var osqm_approval_correction = "<a class='dropdown-item for-osqm-approval-correction' href='#' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action-approval'>Correction - For Approval</a>";
                        }

                        if(for_correction_status == 'For Verification' || for_correction_status == 'For Validation' || for_correction_status == 'For Closure'){
                            var osqm_verification_correction = "<a class='dropdown-item for-osqm-verification-correction' href='#' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action-verification'>Correction - For Verification</a>";
                        }

                        if(for_correction_status == 'For Validation' || for_correction_status == 'For Closure'){
                            var osqm_validation_correction = "<a class='dropdown-item for-osqm-validation-correction' href='#' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action-validation'>Correction - For Validation</a>";
                        }
                        
                        if(for_correction_status == 'For OSQM Review' || for_correction_status == 'For Approval' || for_correction_status == 'For Verification' || for_correction_status == 'For Validation' || for_correction_status == 'For Closure'){
                            var osqm_review_correction = "<a class='dropdown-item for-osqm-review-correction' href='#' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action-review'>Correction - For OSQM Review</a>";
                        }

                        if(corrective_action_status == 'For OSQM Review' || corrective_action_status == 'For Approval' || corrective_action_status == 'For Verification' || corrective_action_status == 'For Validation' || corrective_action_status == 'For Closure'){
                            var osqm_review_corrective_action = "<a class='dropdown-item for-osqm-review-corrective-action' href='#' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>Corrective Action - For OSQM Review</a>";
                        }

                        if(corrective_action_status == 'For Approval' || corrective_action_status == 'For Verification' || corrective_action_status == 'For Validation' || corrective_action_status == 'For Closure'){
                            var osqm_approval_corrective_action = "<a class='dropdown-item for-osqm-approval-corrective-action' href='#' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause-approval'>Corrective Action - For Approval</a>";
                        }

                        if(corrective_action_status == 'For Verification' || corrective_action_status == 'For Validation' || corrective_action_status == 'For Closure'){
                            var osqm_verification_corrective_action = "<a class='dropdown-item for-osqm-verification-corrective-action' href='#' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause-verification'>Corrective Action - For Verification</a>";
                        }

                        if(corrective_action_status == 'For Validation'  || corrective_action_status == 'For Closure'){
                            var osqm_validation_corrective_action = "<a class='dropdown-item for-osqm-validation-corrective-action' href='#' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause-validation'>Corrective Action - For Validation</a>";
                        }

                        if(corrective_action_status == 'For Closure' && for_correction_status == 'For Closure'){
                            var osqm_validation_correction = "<a class='dropdown-item' href='admin/car/closing?c="+car_id+"' target='blank'>Closing</a>";
                        }
                        
                        var html = "<tr><td>" + car_no + 
                        "</td><td>" + source_name + 
                        "</td><td>" + issued_by_name + 
                        "</td><td>" + issued_to_name + 
                        "</td><td>" + identification_date + 
                        "</td><td>" + registration_date + 
                        "</td><td>" + date_closed + 
                        "</td><td>" + corrective_action_status + "<br><small>" + ca_completion_date + "</small>" +
                        "</td><td>" + for_correction_status + "<br><small>" + fc_completion_date + "</small>" +
                        "</td><td>" + status +
                        "</td><td>" +
                        "<div class='btn-group mb-2'>" +
                        "<button type='button' class='btn btn-success dropdown-toggle' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><i class='fa fa-file'></i> <i class='mdi mdi-chevron-down'></i></button>" +
                        "<div class='dropdown-menu'>" +
                        "<a class='dropdown-item edit-car' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#add-car-issuance'>Issuance of NC</a>" +
                        "<a class='dropdown-item' href='#'>History</a>" +
                        "<a class='dropdown-item edit-corrective-action' href='#' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#root-cause'>Corrective Action</a>" +
                        "<a class='dropdown-item edit-correction-action' href='#' data-status='"+status+"' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source + "' data-section='" + section + "' data-issued_by='" + issued_by + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>Correction</a>" +
                        osqm_review_correction +
                        osqm_review_corrective_action +
                        osqm_approval_correction+
                        osqm_verification_correction+
                        osqm_validation_correction+
                        osqm_approval_corrective_action +
                        osqm_verification_corrective_action +
                        osqm_validation_corrective_action +
                        "</div>" +
                        "</div>" +
                        "</td></tr>";
                        // Do something with the data, for example, display it on the page
                        $('#car-global-datatable tbody').append(html);

                    });

                    tippy('*[data-plugin="tippy"]');

                    $("#car-global-datatable").DataTable({
                        language: { paginate: { previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>" } },
                        drawCallback: function () {
                            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
                        },
                    });

                    $('[data-toggle="tooltip"]').tooltip()
                    
                }
            },
            error: function () {
                // Handle errors
                car.notifyError();
            }
        });
    },

    loadDepartment : function(){
        jQuery('#source').change(function(){
            source = jQuery(this).val();

            division = jQuery('#issued_by').val();

            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){

                        $('#issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;
    
                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('#issued_to').append(html);
                        });

                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });

        }); 

        jQuery('#issued_to').change(function(){
            department = $(this).val();
            $.ajax({
                type: 'POST',
                url: '../car/getSection', // Replace 'MyController' with your controller name
                data: {department: department},
                success: function (response) {
                    if(response != 'null'){

                        $('#section').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var section_name = item.section_name;
    
                            var html = '<option value="'+id+'">'+section_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('#section').append(html);
                        });

                       
                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
        });

        jQuery('#addCARFormIssuance .issued_to').change(function(){
            department = $(this).val();
            $.ajax({
                type: 'POST',
                url: '../car/getSection', // Replace 'MyController' with your controller name
                data: {department: department},
                success: function (response) {
                    if(response != 'null'){

                        $('#addCARFormIssuance .section').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var section_name = item.section_name;
    
                            var html = '<option value="'+id+'">'+section_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('#addCARFormIssuance .section').append(html);
                        });

                       
                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
        });
    },

    loadCorrectiveAction: function(){
        $('#car-global-datatable').on('click', '.edit-correction-action', function () {


            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            

            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
        
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 

            division = jQuery('.addCARFormIssuance .issued_by').val();

            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){

                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;

                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });

                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);

                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });

                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });




            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#correction').empty();
            $('#consequencesdiv').empty();

            $.ajax({
                type: 'POST',
                url: '../car/getCorrectionAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != '[]'){

                        response = JSON.parse(response);

                        console.log(response);

                        var correctionEntries = JSON.parse(response[0].correction_entry);
                        
                        // Loop through correction entries and create HTML for each entry
                        correctionEntries.forEach(function (correction) {
                            var correctionHtml = `
                                <div class="col-lg-12 correction-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Correction</label>
                                                            <input type="text" class="form-control" readonly name="correction[]" value="${correction.correction}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="correction_person_responsible[]" placeholder="Enter Name of personnel" value="${correction.correction_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-3">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="correction_completion_date[]" value="${correction.correction_completion_date}">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                    
                            // Append the correction HTML to the container
                            $('#correction').append(correctionHtml);
                        });

                        var consequenceEntries = JSON.parse(response[0].consequence_entry);
                        
                        // Loop through correction entries and create HTML for each entry
                        consequenceEntries.forEach(function (consequence) {

                            var consequenceHtml = `
                                <div class="col-lg-12 consequences-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Dealing with the consequences</label>
                                                            <input type="text" class="form-control" readonly name="consequence[]" value="${consequence.consequence}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="consequence_person_responsible[]" placeholder="Enter Name of personnel" value="${consequence.consequence_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-3">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="consequence_completion_date[]" value="${consequence.consequence_completion_date}">
                                                        </div>
                                                    </div>
                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                            // Append the correction HTML to the container
                            $('#consequencesdiv').append(consequenceHtml);
                        });

                    } else {
                        // car.notifyError();
                    }   
                    
                    var correctionHtmlLast = `
                        <div class="col-lg-12 correction-repeatable">
                            <div class="card">
                                <div class="card-body">
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col-xl-4">
                                                <div class="mb-3 mb-xl-0">
                                                    <label for="exampleInputEmail1" class="form-label">Correction</label>
                                                    <input type="text" class="form-control" name="correction[]" value="">
                                                </div>
                                            </div>
                                            <div class="col-xl-4">
                                                <div class="mb-3 mb-xl-0">
                                                    <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                    <input type="text" class="form-control" name="correction_person_responsible[]" placeholder="Enter Name of personnel" value="">
                                                </div>
                                            </div>
                                            <div class="col-xl-3">
                                                <div class="mb-3 mb-xl-0">
                                                    <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                    <input type="date" class="form-control" name="correction_completion_date[]" value="">
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
                            </div>
                        </div>
                    `;

                    $('#correction').append(correctionHtmlLast);

                    var consequenceHtmlLast = `
                            <div class="col-lg-12 consequences-repeatable">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <div class="row">
                                                <div class="col-xl-4">
                                                    <div class="mb-3 mb-xl-0">
                                                        <label for="exampleInputEmail1" class="form-label">Dealing with the consequences</label>
                                                        <input type="text" class="form-control" name="consequence[]" value="">
                                                    </div>
                                                </div>
                                                <div class="col-xl-4">
                                                    <div class="mb-3 mb-xl-0">
                                                        <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                        <input type="text" class="form-control" name="consequence_person_responsible[]" placeholder="Enter Name of personnel" value="">
                                                    </div>
                                                </div>
                                                <div class="col-xl-3">
                                                    <div class="mb-3 mb-xl-0">
                                                        <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                        <input type="date" class="form-control" name="consequence_completion_date[]" value="">
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
                                </div>
                            </div>
                    `;

                    $('#consequencesdiv').append(consequenceHtmlLast);
            
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });

        });

        $('#car-global-datatable').on('click', '.for-osqm-review-correction', function () {

            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            

            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
        
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 

            division = jQuery('.addCARFormIssuance .issued_by').val();

            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){

                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;

                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });

                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);

                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });

                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });

            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#correction-review').empty();
            $('#consequencesdiv-review').empty();

            $.ajax({
                type: 'POST',
                url: '../car/getCorrectionAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != '[]'){

                        response = JSON.parse(response);

                        var review_correction_dealing_with_consequences = response[0].review_correction_dealing_with_consequences;
                        var review_correction_dealing_with_consequences_remarks = response[0].review_correction_dealing_with_consequences_remarks;

                        
                        jQuery('.review_correction_dealing_with_consequences').val(review_correction_dealing_with_consequences);
                        jQuery('.review_correction_dealing_with_consequences_remarks').val(review_correction_dealing_with_consequences_remarks);

                        var correctionEntries = JSON.parse(response[0].correction_entry);
                        
                        var count = 0;

                        // Loop through correction entries and create HTML for each entry
                        correctionEntries.forEach(function (correction) {


                            var approval = correction.correction_acceptable_approval !== undefined ? correction.correction_acceptable_approval : '';
                            var verification = correction.correction_acceptable_verification !== undefined ? correction.correction_acceptable_verification : '';
                            var validation = correction.correction_acceptable_validation !== undefined ? correction.correction_acceptable_validation : '';
                            
                            var approval_remarks = correction.correction_acceptable_remarks_approval !== undefined ? correction.correction_acceptable_remarks_approval : '';
                            var verification_remarks = correction.correction_acceptable_remarks_verification !== undefined ? correction.correction_acceptable_remarks_verification : '';
                            var validation_remarks = correction.correction_acceptable_remarks_validation !== undefined ? correction.correction_acceptable_remarks_validation : '';


                            var reviewValue = correction.correction_acceptable_review !== undefined ? correction.correction_acceptable_review : ''; // Added
                            var remarksReview = correction.correction_acceptable_remarks_review !== undefined ? correction.correction_acceptable_remarks_review : ''; // Added

                            var correctionHtml = `
                                <div class="col-lg-12 correction-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row mb-2">
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Correction</label>
                                                            <input type="text" class="form-control" readonly name="correction[]" value="${correction.correction}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="correction_person_responsible[]" placeholder="Enter Name of personnel" value="${correction.correction_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="correction_completion_date[]" value="${correction.correction_completion_date}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">Acceptable</label>

                                                    <input type="hidden" value="${approval}" name="correction_acceptable_approval[${count}]">
                                                    <input type="hidden" value="${verification}" name="correction_acceptable_verification[${count}]">
                                                    <input type="hidden" value="${validation}" name="correction_acceptable_validation[${count}]">

                                                    <input type="hidden" value="${approval_remarks}" name="correction_acceptable_remarks_approval[${count}]">
                                                    <input type="hidden" value="${verification_remarks}" name="correction_acceptable_remarks_verification[${count}]">
                                                    <input type="hidden" value="${validation_remarks}" name="correction_acceptable_remarks_validation[${count}]">

                                                    <div class="col-lg-3 text-inlign mb-2">
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="correction_acceptable_review[${count}]" value="1" class="form-check-input" ${reviewValue === '1' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="correction_acceptable_review">YES</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="correction_acceptable_review[${count}]" value="0" class="form-check-input" ${reviewValue === '0' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="correction_acceptable_review">NO</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label for="correction_acceptable_remarks_review" class="form-label">Remarks</label>
                                                        <textarea class="form-control" name="correction_acceptable_remarks_review[${count}]" rows="4">${remarksReview}</textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                            count++;

                            // Append the correction HTML to the container
                            $('#correction-review').append(correctionHtml);
                        });

                        var consequenceEntries = JSON.parse(response[0].consequence_entry);
                        
                        var count = 0;
                        // Loop through correction entries and create HTML for each entry
                        consequenceEntries.forEach(function (consequence) {

                            var approval = consequence.consequence_acceptable_approval !== undefined ? consequence.consequence_acceptable_approval : '';
                            var verification = consequence.consequence_acceptable_verification !== undefined ? consequence.consequence_acceptable_verification : '';
                            var validation = consequence.consequence_acceptable_validation !== undefined ? consequence.consequence_acceptable_validation : '';

                            var approval_remarks = consequence.consequence_acceptable_remarks_approval !== undefined ? consequence.consequence_acceptable_remarks_approval : '';
                            var verification_remarks = consequence.consequence_acceptable_remarks_verification !== undefined ? consequence.consequence_acceptable_remarks_verification : '';
                            var validation_remarks = consequence.consequence_acceptable_remarks_validation !== undefined ? consequence.consequence_acceptable_remarks_validation : '';


                            var reviewValue = consequence.consequence_acceptable_review !== undefined ? consequence.consequence_acceptable_review : ''; // Added
                            var remarksReview = consequence.consequence_acceptable_remarks_review !== undefined ? consequence.consequence_acceptable_remarks_review : ''; // Added

                            var consequenceHtml = `
                                <div class="col-lg-12 consequences-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row mb-2">
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Dealing with the consequences</label>
                                                            <input type="text" class="form-control" readonly name="consequence[]" value="${consequence.consequence}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="consequence_person_responsible[]" value="${consequence.consequence_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="consequence_completion_date[]" value="${consequence.consequence_completion_date}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">Acceptable</label>
                                                    
                                                        <input type="hidden" value="${approval}" name="consequence_acceptable_approval[${count}]">
                                                        <input type="hidden" value="${verification}" name="consequence_acceptable_verification[${count}]">
                                                        <input type="hidden" value="${validation}" name="consequence_acceptable_validation[${count}]">
                                                        
                                                        <input type="hidden" value="${approval_remarks}" name="consequence_acceptable_remarks_approval[${count}]">
                                                        <input type="hidden" value="${verification_remarks}" name="consequence_acceptable_remarks_verification[${count}]">
                                                        <input type="hidden" value="${validation_remarks}" name="consequence_acceptable_remarks_validation[${count}]">

                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="consequence_acceptable_review[${count}]" value="1" class="form-check-input" ${reviewValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="consequence_acceptable_review">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="consequence_acceptable_review[${count}]" value="0" class="form-check-input" ${reviewValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="consequence_acceptable_review">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="consequence_acceptable_remarks_review" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="consequence_acceptable_remarks_review[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            
                            count++;
                            // Append the correction HTML to the container
                            $('#consequencesdiv-review').append(consequenceHtml);
                        });

                    } else {
                        // car.notifyError();
                    }   
                    
            
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });

        
        });

        $('#car-global-datatable').on('click', '.for-osqm-approval-correction', function () {

            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            

            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
        
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 

            division = jQuery('.addCARFormIssuance .issued_by').val();

            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){

                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;

                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });

                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);

                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });

                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });

            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#correction-approval').empty();
            $('#consequencesdiv-approval').empty();
        
            $.ajax({
                type: 'POST',
                url: '../car/getCorrectionAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != '[]'){
        
                        response = JSON.parse(response);
        
                        var approval_correction_dealing_with_consequences = response[0].approval_correction_dealing_with_consequences;
                        var approval_correction_dealing_with_consequences_remarks = response[0].approval_correction_dealing_with_consequences_remarks;
        
                        
                        jQuery('.approval_correction_dealing_with_consequences').val(approval_correction_dealing_with_consequences);
                        jQuery('.approval_correction_dealing_with_consequences_remarks').val(approval_correction_dealing_with_consequences_remarks);
        
                        var correctionEntries = JSON.parse(response[0].correction_entry);
                        
                        var count = 0;
        
                        // Loop through correction entries and create HTML for each entry
                        correctionEntries.forEach(function (correction) {
        
        
                            var review = correction.correction_acceptable_review !== undefined ? correction.correction_acceptable_review : '';
                            var verification = correction.correction_acceptable_verification !== undefined ? correction.correction_acceptable_verification : '';
                            var validation = correction.correction_acceptable_validation !== undefined ? correction.correction_acceptable_validation : '';
                            
                            var review_remarks = correction.correction_acceptable_remarks_review !== undefined ? correction.correction_acceptable_remarks_review : '';
                            var verification_remarks = correction.correction_acceptable_remarks_verification !== undefined ? correction.correction_acceptable_remarks_verification : '';
                            var validation_remarks = correction.correction_acceptable_remarks_validation !== undefined ? correction.correction_acceptable_remarks_validation : '';
        
        
                            var approvalValue = correction.correction_acceptable_approval !== undefined ? correction.correction_acceptable_approval : ''; // Added
                            var remarksReview = correction.correction_acceptable_remarks_approval !== undefined ? correction.correction_acceptable_remarks_approval : ''; // Added
        
                            var correctionHtml = `
                                <div class="col-lg-12 correction-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row mb-2">
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Correction</label>
                                                            <input type="text" class="form-control" readonly name="correction[]" value="${correction.correction}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="correction_person_responsible[]" placeholder="Enter Name of personnel" value="${correction.correction_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="correction_completion_date[]" value="${correction.correction_completion_date}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">Acceptable</label>
        
                                                    <input type="hidden" value="${review}" name="correction_acceptable_review[${count}]">
                                                    <input type="hidden" value="${verification}" name="correction_acceptable_verification[${count}]">
                                                    <input type="hidden" value="${validation}" name="correction_acceptable_validation[${count}]">
        
                                                    <input type="hidden" value="${review_remarks}" name="correction_acceptable_remarks_review[${count}]">
                                                    <input type="hidden" value="${verification_remarks}" name="correction_acceptable_remarks_verification[${count}]">
                                                    <input type="hidden" value="${validation_remarks}" name="correction_acceptable_remarks_validation[${count}]">
        
                                                    <div class="col-lg-3 text-inlign mb-2">
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="correction_acceptable_approval[${count}]" value="1" class="form-check-input" ${approvalValue === '1' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="correction_acceptable_approval">YES</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="correction_acceptable_approval[${count}]" value="0" class="form-check-input" ${approvalValue === '0' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="correction_acceptable_approval">NO</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label for="correction_acceptable_remarks_approval" class="form-label">Remarks</label>
                                                        <textarea class="form-control" name="correction_acceptable_remarks_approval[${count}]" rows="4">${remarksReview}</textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
        
                            count++;
        
                            // Append the correction HTML to the container
                            $('#correction-approval').append(correctionHtml);
                        });
        
                        var consequenceEntries = JSON.parse(response[0].consequence_entry);
                        
                        var count = 0;
                        // Loop through correction entries and create HTML for each entry
                        consequenceEntries.forEach(function (consequence) {
        
                            var review = consequence.consequence_acceptable_review !== undefined ? consequence.consequence_acceptable_review : '';
                            var verification = consequence.consequence_acceptable_verification !== undefined ? consequence.consequence_acceptable_verification : '';
                            var validation = consequence.consequence_acceptable_validation !== undefined ? consequence.consequence_acceptable_validation : '';
        
                            var review_remarks = consequence.consequence_acceptable_remarks_review !== undefined ? consequence.consequence_acceptable_remarks_review : '';
                            var verification_remarks = consequence.consequence_acceptable_remarks_verification !== undefined ? consequence.consequence_acceptable_remarks_verification : '';
                            var validation_remarks = consequence.consequence_acceptable_remarks_validation !== undefined ? consequence.consequence_acceptable_remarks_validation : '';
        
        
                            var approvalValue = consequence.consequence_acceptable_approval !== undefined ? consequence.consequence_acceptable_approval : ''; // Added
                            var remarksReview = consequence.consequence_acceptable_remarks_approval !== undefined ? consequence.consequence_acceptable_remarks_approval : ''; // Added
        
                            var consequenceHtml = `
                                <div class="col-lg-12 consequences-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row mb-2">
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Dealing with the consequences</label>
                                                            <input type="text" class="form-control" readonly name="consequence[]" value="${consequence.consequence}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="consequence_person_responsible[]" value="${consequence.consequence_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="consequence_completion_date[]" value="${consequence.consequence_completion_date}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">Acceptable</label>
                                                    
                                                        <input type="hidden" value="${review}" name="consequence_acceptable_review[${count}]">
                                                        <input type="hidden" value="${verification}" name="consequence_acceptable_verification[${count}]">
                                                        <input type="hidden" value="${validation}" name="consequence_acceptable_validation[${count}]">
                                                        
                                                        <input type="hidden" value="${review_remarks}" name="consequence_acceptable_remarks_review[${count}]">
                                                        <input type="hidden" value="${verification_remarks}" name="consequence_acceptable_remarks_verification[${count}]">
                                                        <input type="hidden" value="${validation_remarks}" name="consequence_acceptable_remarks_validation[${count}]">
        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="consequence_acceptable_approval[${count}]" value="1" class="form-check-input" ${approvalValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="consequence_acceptable_approval">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="consequence_acceptable_approval[${count}]" value="0" class="form-check-input" ${approvalValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="consequence_acceptable_approval">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="consequence_acceptable_remarks_approval" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="consequence_acceptable_remarks_approval[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            
                            count++;
                            // Append the correction HTML to the container
                            $('#consequencesdiv-approval').append(consequenceHtml);
                        });
        
                    } else {
                        // car.notifyError();
                    }   
                    
            
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        
        
        });

        $('#car-global-datatable').on('click', '.for-osqm-verification-correction', function () {

            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            

            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
        
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 

            division = jQuery('.addCARFormIssuance .issued_by').val();

            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){

                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;

                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });

                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);

                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });

                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });

            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#correction-verification').empty();
            $('#consequencesdiv-verification').empty();
        
            $.ajax({
                type: 'POST',
                url: '../car/getCorrectionAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != '[]'){
        
                        response = JSON.parse(response);
        
                        var verification_correction_dealing_with_consequences = response[0].verification_correction_dealing_with_consequences;
                        var verification_correction_dealing_with_consequences_remarks = response[0].verification_correction_dealing_with_consequences_remarks;
        
                        
                        jQuery('.verification_correction_dealing_with_consequences').val(verification_correction_dealing_with_consequences);
                        jQuery('.verification_correction_dealing_with_consequences_remarks').val(verification_correction_dealing_with_consequences_remarks);
        
                        var correctionEntries = JSON.parse(response[0].correction_entry);
                        
                        var count = 0;
        
                        // Loop through correction entries and create HTML for each entry
                        correctionEntries.forEach(function (correction) {
        
        
                            var review = correction.correction_acceptable_review !== undefined ? correction.correction_acceptable_review : '';
                            var approval = correction.correction_acceptable_approval !== undefined ? correction.correction_acceptable_approval : '';
                            var validation = correction.correction_acceptable_validation !== undefined ? correction.correction_acceptable_validation : '';
                            
                            var review_remarks = correction.correction_acceptable_remarks_review !== undefined ? correction.correction_acceptable_remarks_review : '';
                            var approval_remarks = correction.correction_acceptable_remarks_approval !== undefined ? correction.correction_acceptable_remarks_approval : '';
                            var validation_remarks = correction.correction_acceptable_remarks_validation !== undefined ? correction.correction_acceptable_remarks_validation : '';
        
        
                            var verificationValue = correction.correction_acceptable_verification !== undefined ? correction.correction_acceptable_verification : ''; // Added
                            var remarksReview = correction.correction_acceptable_remarks_verification !== undefined ? correction.correction_acceptable_remarks_verification : ''; // Added
        
                            var correctionHtml = `
                                <div class="col-lg-12 correction-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row mb-2">
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Correction</label>
                                                            <input type="text" class="form-control" readonly name="correction[]" value="${correction.correction}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="correction_person_responsible[]" placeholder="Enter Name of personnel" value="${correction.correction_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="correction_completion_date[]" value="${correction.correction_completion_date}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">Acceptable</label>
        
                                                    <input type="hidden" value="${review}" name="correction_acceptable_review[${count}]">
                                                    <input type="hidden" value="${approval}" name="correction_acceptable_approval[${count}]">
                                                    <input type="hidden" value="${validation}" name="correction_acceptable_validation[${count}]">
        
                                                    <input type="hidden" value="${review_remarks}" name="correction_acceptable_remarks_review[${count}]">
                                                    <input type="hidden" value="${approval_remarks}" name="correction_acceptable_remarks_approval[${count}]">
                                                    <input type="hidden" value="${validation_remarks}" name="correction_acceptable_remarks_validation[${count}]">
        
                                                    <div class="col-lg-3 text-inlign mb-2">
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="correction_acceptable_verification[${count}]" value="1" class="form-check-input" ${verificationValue === '1' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="correction_acceptable_verification">YES</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="correction_acceptable_verification[${count}]" value="0" class="form-check-input" ${verificationValue === '0' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="correction_acceptable_verification">NO</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label for="correction_acceptable_remarks_verification" class="form-label">Remarks</label>
                                                        <textarea class="form-control" name="correction_acceptable_remarks_verification[${count}]" rows="4">${remarksReview}</textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
        
                            count++;
        
                            // Append the correction HTML to the container
                            $('#correction-verification').append(correctionHtml);
                        });
        
                        var consequenceEntries = JSON.parse(response[0].consequence_entry);
                        
                        var count = 0;
                        // Loop through correction entries and create HTML for each entry
                        consequenceEntries.forEach(function (consequence) {
        
                            var review = consequence.consequence_acceptable_review !== undefined ? consequence.consequence_acceptable_review : '';
                            var approval = consequence.consequence_acceptable_approval !== undefined ? consequence.consequence_acceptable_approval : '';
                            var validation = consequence.consequence_acceptable_validation !== undefined ? consequence.consequence_acceptable_validation : '';
        
                            var review_remarks = consequence.consequence_acceptable_remarks_review !== undefined ? consequence.consequence_acceptable_remarks_review : '';
                            var approval_remarks = consequence.consequence_acceptable_remarks_approval !== undefined ? consequence.consequence_acceptable_remarks_approval : '';
                            var validation_remarks = consequence.consequence_acceptable_remarks_validation !== undefined ? consequence.consequence_acceptable_remarks_validation : '';
        
        
                            var verificationValue = consequence.consequence_acceptable_verification !== undefined ? consequence.consequence_acceptable_verification : ''; // Added
                            var remarksReview = consequence.consequence_acceptable_remarks_verification !== undefined ? consequence.consequence_acceptable_remarks_verification : ''; // Added
        
                            var consequenceHtml = `
                                <div class="col-lg-12 consequences-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row mb-2">
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Dealing with the consequences</label>
                                                            <input type="text" class="form-control" readonly name="consequence[]" value="${consequence.consequence}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="consequence_person_responsible[]" value="${consequence.consequence_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="consequence_completion_date[]" value="${consequence.consequence_completion_date}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">Acceptable</label>
                                                    
                                                        <input type="hidden" value="${review}" name="consequence_acceptable_review[${count}]">
                                                        <input type="hidden" value="${approval}" name="consequence_acceptable_approval[${count}]">
                                                        <input type="hidden" value="${validation}" name="consequence_acceptable_validation[${count}]">
                                                        
                                                        <input type="hidden" value="${review_remarks}" name="consequence_acceptable_remarks_review[${count}]">
                                                        <input type="hidden" value="${approval_remarks}" name="consequence_acceptable_remarks_approval[${count}]">
                                                        <input type="hidden" value="${validation_remarks}" name="consequence_acceptable_remarks_validation[${count}]">
        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="consequence_acceptable_verification[${count}]" value="1" class="form-check-input" ${verificationValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="consequence_acceptable_verification">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="consequence_acceptable_verification[${count}]" value="0" class="form-check-input" ${verificationValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="consequence_acceptable_verification">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="consequence_acceptable_remarks_verification" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="consequence_acceptable_remarks_verification[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            
                            count++;
                            // Append the correction HTML to the container
                            $('#consequencesdiv-verification').append(consequenceHtml);
                        });
        
                    } else {
                        // car.notifyError();
                    }   
                    
            
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        
        
        });


        $('#car-global-datatable').on('click', '.for-osqm-validation-correction', function () {

            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            

            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
        
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 

            division = jQuery('.addCARFormIssuance .issued_by').val();

            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){

                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;

                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });

                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);

                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });

                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });

            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#correction-validation').empty();
            $('#consequencesdiv-validation').empty();
        
            $.ajax({
                type: 'POST',
                url: '../car/getCorrectionAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != '[]'){
        
                        response = JSON.parse(response);
        
                        var validation_correction_dealing_with_consequences = response[0].validation_correction_dealing_with_consequences;
                        var validation_correction_dealing_with_consequences_remarks = response[0].validation_correction_dealing_with_consequences_remarks;
        
                        
                        jQuery('.validation_correction_dealing_with_consequences').val(validation_correction_dealing_with_consequences);
                        jQuery('.validation_correction_dealing_with_consequences_remarks').val(validation_correction_dealing_with_consequences_remarks);
        
                        var correctionEntries = JSON.parse(response[0].correction_entry);
                        
                        var count = 0;
        
                        // Loop through correction entries and create HTML for each entry
                        correctionEntries.forEach(function (correction) {
        
        
                            var review = correction.correction_acceptable_review !== undefined ? correction.correction_acceptable_review : '';
                            var approval = correction.correction_acceptable_approval !== undefined ? correction.correction_acceptable_approval : '';
                            var verification = correction.correction_acceptable_verification !== undefined ? correction.correction_acceptable_validation : '';
                            
                            var review_remarks = correction.correction_acceptable_remarks_review !== undefined ? correction.correction_acceptable_remarks_review : '';
                            var approval_remarks = correction.correction_acceptable_remarks_approval !== undefined ? correction.correction_acceptable_remarks_approval : '';
                            var verification_remarks = correction.correction_acceptable_remarks_verification !== undefined ? correction.correction_acceptable_remarks_verification : '';
        
        
                            var validationValue = correction.correction_acceptable_validation !== undefined ? correction.correction_acceptable_validation : ''; // Added
                            var remarksReview = correction.correction_acceptable_remarks_validation !== undefined ? correction.correction_acceptable_remarks_validation : ''; // Added
        
                            var correctionHtml = `
                                <div class="col-lg-12 correction-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row mb-2">
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Correction</label>
                                                            <input type="text" class="form-control" readonly name="correction[]" value="${correction.correction}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="correction_person_responsible[]" placeholder="Enter Name of personnel" value="${correction.correction_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="correction_completion_date[]" value="${correction.correction_completion_date}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">Acceptable</label>
        
                                                    <input type="hidden" value="${review}" name="correction_acceptable_review[${count}]">
                                                    <input type="hidden" value="${approval}" name="correction_acceptable_approval[${count}]">
                                                    <input type="hidden" value="${verification}" name="correction_acceptable_verification[${count}]">
        
                                                    <input type="hidden" value="${review_remarks}" name="correction_acceptable_remarks_review[${count}]">
                                                    <input type="hidden" value="${approval_remarks}" name="correction_acceptable_remarks_approval[${count}]">
                                                    <input type="hidden" value="${verification_remarks}" name="correction_acceptable_remarks_verification[${count}]">
        
                                                    <div class="col-lg-3 text-inlign mb-2">
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="correction_acceptable_validation[${count}]" value="1" class="form-check-input" ${validationValue === '1' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="correction_acceptable_validation">YES</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="correction_acceptable_validation[${count}]" value="0" class="form-check-input" ${validationValue === '0' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="correction_acceptable_validation">NO</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label for="correction_acceptable_remarks_validation" class="form-label">Remarks</label>
                                                        <textarea class="form-control" name="correction_acceptable_remarks_validation[${count}]" rows="4">${remarksReview}</textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
        
                            count++;
        
                            // Append the correction HTML to the container
                            $('#correction-validation').append(correctionHtml);
                        });
        
                        var consequenceEntries = JSON.parse(response[0].consequence_entry);
                        
                        var count = 0;
                        // Loop through correction entries and create HTML for each entry
                        consequenceEntries.forEach(function (consequence) {
        
                            var review = consequence.consequence_acceptable_review !== undefined ? consequence.consequence_acceptable_review : '';
                            var approval = consequence.consequence_acceptable_approval !== undefined ? consequence.consequence_acceptable_approval : '';
                            var verification = consequence.consequence_acceptable_verification !== undefined ? consequence.consequence_acceptable_verification : '';
        
                            var review_remarks = consequence.consequence_acceptable_remarks_review !== undefined ? consequence.consequence_acceptable_remarks_review : '';
                            var approval_remarks = consequence.consequence_acceptable_remarks_approval !== undefined ? consequence.consequence_acceptable_remarks_approval : '';
                            var verification_remarks = consequence.consequence_acceptable_remarks_verification !== undefined ? consequence.consequence_acceptable_remarks_verification : '';
        
        
                            var validationValue = consequence.consequence_acceptable_validation !== undefined ? consequence.consequence_acceptable_validation : ''; // Added
                            var remarksReview = consequence.consequence_acceptable_remarks_validation !== undefined ? consequence.consequence_acceptable_remarks_validation : ''; // Added
        
                            var consequenceHtml = `
                                <div class="col-lg-12 consequences-repeatable added-repeat">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row mb-2">
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Dealing with the consequences</label>
                                                            <input type="text" class="form-control" readonly name="consequence[]" value="${consequence.consequence}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" readonly name="consequence_person_responsible[]" value="${consequence.consequence_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" readonly name="consequence_completion_date[]" value="${consequence.consequence_completion_date}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">Acceptable</label>
                                                    
                                                        <input type="hidden" value="${review}" name="consequence_acceptable_review[${count}]">
                                                        <input type="hidden" value="${approval}" name="consequence_acceptable_approval[${count}]">
                                                        <input type="hidden" value="${verification}" name="consequence_acceptable_verification[${count}]">
                                                        
                                                        <input type="hidden" value="${review_remarks}" name="consequence_acceptable_remarks_review[${count}]">
                                                        <input type="hidden" value="${approval_remarks}" name="consequence_acceptable_remarks_approval[${count}]">
                                                        <input type="hidden" value="${verification_remarks}" name="consequence_acceptable_remarks_verification[${count}]">
        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="consequence_acceptable_validation[${count}]" value="1" class="form-check-input" ${validationValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="consequence_acceptable_validation">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="consequence_acceptable_validation[${count}]" value="0" class="form-check-input" ${validationValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="consequence_acceptable_validation">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="consequence_acceptable_remarks_validation" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="consequence_acceptable_remarks_validation[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            
                            count++;
                            // Append the correction HTML to the container
                            $('#consequencesdiv-validation').append(consequenceHtml);
                        });
        
                    } else {
                        // car.notifyError();
                    }   
                    
            
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        
        
        });

       

        $('#car-global-datatable').on('click', '.edit-corrective-action', function () {

            jQuery('#car-action').html('');
         
            jQuery('#car-action').removeClass();
            jQuery('#car-action').addClass('mt-4');
            jQuery('#car-action').addClass('row');
            jQuery('#car-action').addClass('corrective-action');
         
            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            
         
            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
         
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
         
            division = jQuery('.addCARFormIssuance .issued_by').val();
         
            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){
         
                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;
         
                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });
         
                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);
         
                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });
         
                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
         
            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#risk-number').empty();
            $('#opportunity-number').empty();
            $('#rootcause').empty();
            $('#identified-root').empty();
         
            $.ajax({
                type: 'POST',
                url: '../car/getCorrectiveAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != 'null'){
                        
                        response = JSON.parse(response);
         
                        if(response[0]){
                            $('input[name="existing_nonconformity"][value="'+ response[0].existing_nonconformity +'"]').prop('checked', true);
                            $('input[name="update_doc_info"][value="'+ response[0].update_doc_info +'"]').prop('checked', true);
                            $('input[name="opportunity_identified_yn"][value="'+ response[0].opportunity_identified +'"]').prop('checked', true);
         
                            $('[name="existing_nonconformity_remarks"]').val(response[0].existing_nonconformity_remarks);
                            $('[name="update_doc_info_remarks"]').val(response[0].update_doc_info_remarks);
         
                            var riskEntries = JSON.parse(response[0].risk_entry);
                            var count = 0;
                            riskEntries.forEach(function (risk) {
                                var riskHtml = `
                                    <div class="col-lg-12 risk-number-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Risk Number</label>
                                                                <textarea rows="4" class="form-control" name="risk_number[]">${risk.risk_number}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Details / Updates</label>
                                                                <textarea rows="4" class="form-control" name="risk_number_details_update[]">${risk.risk_number_details_update}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">File URL</label>
                                                                <input type="text" class="form-control" readonly name="risk_number_attachment_url[]" value="${risk.risk_number_attachment_url}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="file" class="form-control hidden risk_number_attachment" name="risk_number_attachment[${risk.risk_number_attachment_url}]" value="">
                                                                <input type="hidden" name="risk_attachments[]" value="${count}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the risk HTML to the container
                                count++;
                                $('#risk-number').append(riskHtml);
                            });
         
         
                            var opportunityEntries = JSON.parse(response[0].opportunity_entry);
                            var count = 0;
                            opportunityEntries.forEach(function (opportunity) {
                                var opportunityHtml = `
                                    <div class="col-lg-12 opportunity-number-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Opportunity Number</label>
                                                                <textarea rows="4" class="form-control" name="opportunity_number[]">${opportunity.opportunity_number}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Opportunities Identified (if applicable)</label>
                                                                <textarea rows="4" class="form-control" name="opportunity_identified[]">${opportunity.opportunity_identified}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3">
                                                            <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control" readonly name="opportunity_number_attachment_url[]" value="${opportunity.opportunity_number_attachment_url}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="file" class="form-control hidden opportunity_number_attachment" name="opportunity_number_attachment[${count}]" value="">
                                                                <input type="hidden" name="opportunity_attachments[]" value="${opportunity.opportunity_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the opportunity HTML to the container
                                count++;
                                $('#opportunity-number').append(opportunityHtml);
                            });
         
         
                            var rootCauseEntries = JSON.parse(response[0].root_cause_entry);
                            var count = 0;
                            rootCauseEntries.forEach(function (rootCause) {
                                var rootCauseHtml = `
                                    <div class="col-lg-12 rootcause-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-3">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Root Cause Analysis Used</label>
                                                                <input type="text" class="form-control" readonly name="rootcause[]" value="${rootCause.rootcause}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">File Name</label>
                                                                <input type="text" class="form-control" readonly name="rootcause_file_name[]" value="${rootCause.rootcause_file_name}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3">
                                                            <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control" readonly name="rootcause_file_url[]" value="${rootCause.rootcause_file_url}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="file" class="form-control hidden rootcause_attachment_attachment" name="rootcause_attachment_attachment[${count}]" value="">
                                                                <input type="hidden" name="rootcause_attachments[]" value="${rootCause.rootcause_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the root cause HTML to the container
                                count++;
                                $('#rootcause').append(rootCauseHtml);
                            });
         
         
                            var identifiedRootEntries = JSON.parse(response[0].identified_root_entry);
                            var count = 0;
                            identifiedRootEntries.forEach(function (identifiedRoot) {
         
                                var issued_by = '';
                                var issued_to = '';
                                var section_name = '';
                                
                                if(identifiedRoot.tpn_issued_by){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getDivisionByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_issued_by},
                                        success: function (response) {
                                            response = JSON.parse(response);
         
                                            if(response[0]){
                                                 issued_by = response[0].div_name;
                                            }
                                        }
                                    });
                                }
         
                                if(identifiedRoot.tpn_issued_to){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getDepartmentByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_issued_to},
                                        success: function (response) {
                                            response = JSON.parse(response);
                                            if(response[0]){
                                                 issued_to = response[0].dep_name;
                                            }
                                        }
                                    });
                                }
                                
                                if(identifiedRoot.section){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getSectionByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.section},
                                        success: function (response) {
                                            response = JSON.parse(response);
                                            if(response[0]){
                                                 section_name = response[0].section_name;
                                            }
                                        }
                                    });
                                }
         
                                setTimeout(function() {
         
                                var identifiedRootHtml = `
                                    <div class="col-lg-12 identified-root-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-6 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Identified Root Cause</label>
                                                                <textarea rows="4" class="form-control" name="identified_root[]">${identifiedRoot.identified_root}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Corrective Action</label>
                                                                <textarea rows="4" class="form-control" name="identified_root_corrective_action[]">${identifiedRoot.identified_root_corrective_action}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">TPN Control</label>
                                                                <input type="text" readonly class="form-control" name="tpn_control[]" value="${identifiedRoot.tpn_control}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-2">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Person Responsible</label>
                                                                <input type="text" readonly class="form-control" name="identified_root_person_responsible[]" placeholder="Enter Name of personnel" value="${identifiedRoot.identified_root_person_responsible}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Completion Date</label>
                                                                <input type="date" readonly class="form-control" name="identified_root_completion_date[]" value="${identifiedRoot.identified_root_completion_date}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                        <div class="form-group">
                                                            <label for="issued_by" class="form-label">Issued By</label>
                                                            <input type="text" readonly class="form-control" name="tpn_issued_by[${count}]" value="${issued_by}">
                                                            <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                        </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="form-group">
                                                                <label for="issued_to" class="form-label">Issued To</label>
                                                                <input type="text" readonly class="form-control" name="tpn_issued_to[${count}]" value="${issued_to}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="form-group">
                                                                <label for="section" class="form-label">Section Unit</label>
                                                                <input type="text" readonly class="form-control" name="section[${count}]" value="${section_name}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control" readonly name="identified_root_attachment_url[]"  value="${identifiedRoot.identified_root_attachment_url}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="file" class="form-control hidden identified_root_attachment_attachment" name="identified_root_attachment_attachment[${count}]" value="">
                                                                <input type="hidden" name="identified_attachments[]" value="${identifiedRoot.identified_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the identified root HTML to the container
                                $('#identified-root').append(identifiedRootHtml);
         
                                count++;
                                }, 3000);
                            });
         
                        }
         
                    }   
         
                    
                var riskHtml = `
                <div class="col-lg-12 risk-number-repeatable">
                    <div class="card">
                        <div class="card-body">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-xl-6 mb-2">
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
                                        <input type="text" class="form-control" name="risk_number_attachment_url[]">
                                        </div>
                                    </div>
                                    <div class="col-xl-4">
                                        <div class="mb-3 mb-xl-0">
                                            <label class="form-label">Attachment</label>
                                            <input type="file" class="form-control risk_number_attachment" name="risk_number_attachment[]" value="">
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
                    </div>
                </div>
                `;
                // Append the risk HTML to the container
                $('#risk-number').append(riskHtml);
         
                var opportunityHtml = `
                <div class="col-lg-12 opportunity-number-repeatable">
                    <div class="card">
                        <div class="card-body">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-xl-6 mb-2">
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
                                        <input type="text" class="form-control" name="opportunity_number_attachment_url[]">
                                        </div>
                                    </div>
                                    <div class="col-xl-3">
                                        <div class="mb-3 mb-xl-0">
                                            <label class="form-label">Attachment</label>
                                            <input type="file" class="form-control opportunity_number_attachment" name="opportunity_number_attachment[]" value="">
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
                    </div>
                </div>
                `;
                // Append the opportunity HTML to the container
                $('#opportunity-number').append(opportunityHtml);
         
                var rootCauseHtml = `
                                <div class="col-lg-12 rootcause-repeatable">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-4 mb-2">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Root Cause Analysis Used</label>
                                                            <input type="text" class="form-control" name="rootcause[]" value="">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File Name</label>
                                                            <input type="text" class="form-control" name="rootcause_file_name[]" value="">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-3">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Attachment</label>
                                                            <input type="file" class="form-control rootcause_attachment_attachment" name="rootcause_attachment_attachment[]" value="">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                        <label class="form-label">File URL</label>
                                                        <input type="text" class="form-control" name="rootcause_file_url[]">
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
                                    </div>
                                </div>
                `;
                // Append the root cause HTML to the container
                $('#rootcause').append(rootCauseHtml);
                
         
                setTimeout(function() {
         
                    $.ajax({
                        type: 'POST',
                        url: '../car/getDivision', // Replace 'MyController' with your controller name
                        data: {},
                        success: function (response) {
                            var html 
                            if(response != 'null'){
         
                                $.each(JSON.parse(response), function (index, item) {
                                    // Access each item's properties
                                    var id = item.id;
                                    var div_name = item.div_name;
            
                                    html += '<option value="'+id+'">'+div_name+'</option>';
                                    // Do something with the data, for example, display it on the page
                                });
         
                                var identifiedRootHtml = `
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
         
                                                            <div class="col-xl-4 mb-2">
                                                                <div class="mb-3 mb-xl-0">
                                                                    <label class="form-label">Person Responsible</label>
                                                                    <input type="text" class="form-control" name="identified_root_person_responsible[]" placeholder="Enter Name of personnel" value="">
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-4">
                                                                <div class="mb-3 mb-xl-0">
                                                                    <label class="form-label">Completion Date</label>
                                                                    <input type="date" class="form-control" name="identified_root_completion_date[]" value="">
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-4 mb-1">
                                                            <div class="form-group" style="display: none;>
                                                                <label for="issued_by" class="form-label">Issued By</label>
                                                                <select class="form-select issued_by" name="tpn_issued_by[]">
                                                                    <option value=""></option>
                                                                    ${html}
                                                                </select>
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                            </div>
                                                            <div class="col-xl-4 mb-1">
                                                                <div class="form-group" style="display: none;>
                                                                    <label for="issued_to" class="form-label">Issued To</label>
                                                                    <select class="form-select issued_to" name="tpn_issued_to[]">
                                                                        <option value=""></option>
                                                                    </select>
                                                                    <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-4 mb-1">
                                                                <div class="form-group" style="display: none;>
                                                                    <label for="section" class="form-label">Section Unit</label>
                                                                    <select class="form-select section"  name="tpn_section[]">
                                                                        <option value=""></option>
                                                                    </select>
                                                                    <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
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
                                                                    <input type="file" class="form-control identified_root_attachment_attachment" name="identified_root_attachment_attachment[]" value="">
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
                                            </div>
                                        </div>
                                    `;
                                    // Append the identified root HTML to the container
                                $('#identified-root').append(identifiedRootHtml);
         
                                issued_by = jQuery(this).parent().parent().parent().find('.issued_by');
                                issued_to = jQuery(this).parent().parent().parent().find('.issued_to');
                                section = jQuery(this).parent().parent().parent().find('.section');
                
                                issued_by.val();
                                issued_to.val();
                                section.val();
                
                                issued_by.parent().hide();
                                issued_to.parent().hide();
                                section.parent().hide();
         
                            }   
                        },
                        error: function () {
                            // Handle errors
                            diList.notifyError();
                        }
                    });
                    
                }, 3000);
         
         
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
        });

        $('#car-global-datatable').on('click', '.for-osqm-review-corrective-action', function () {

            var $action = '<div class="row mb-2">' +
                    '<div class="form-group col-md-12">' +
                    '<label for="review_action_root_cause_analysis" class="form-label">Review of Action and Root Cause Analysis</label>' +
                    '<select class="form-select review_action_root_cause_analysis" name="review_action_root_cause_analysis">' +
                        '<option value="For Approval">For Approval</option>' +
                        '<option value="For Revision">For Revision</option>' +
                    '</select>' +
                    '</div>' +
                '</div>' +
                '<div class="row mb-2">' +
                    '<div class="form-group col-md-12">' +
                    '<label for="review_action_root_cause_analysis_remarks" class="form-label">Remarks </label>' +
                    '<textarea class="form-control review_action_root_cause_analysis_remarks" name="review_action_root_cause_analysis_remarks" rows="4"></textarea>' +
                    '</div>' +
                '</div>';
         
            jQuery('#car-action').html($action);
         
            jQuery('#car-action').removeClass();
            jQuery('#car-action').addClass('mt-4');
            jQuery('#car-action').addClass('row');
            jQuery('#car-action').addClass('corrective-action-review');
         
            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            
         
            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
         
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
         
            division = jQuery('.addCARFormIssuance .issued_by').val();
         
            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){
         
                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;
         
                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });
         
                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);
         
                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });
         
                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
         
            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#risk-number').empty();
            $('#opportunity-number').empty();
            $('#rootcause').empty();
            $('#identified-root').empty();
         
            $.ajax({
                type: 'POST',
                url: '../car/getCorrectiveAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != 'null'){
                        
                        response = JSON.parse(response);
                        
                        var review_action_root_cause_analysis = response[0].review_action_root_cause_analysis;
                        var review_action_root_cause_analysis_remarks = response[0].review_action_root_cause_analysis_remarks;
         
                        jQuery('.review_action_root_cause_analysis').val(review_action_root_cause_analysis);
                        jQuery('.review_action_root_cause_analysis_remarks').val(review_action_root_cause_analysis_remarks);
         
                        if(response[0]){
                            $('input[name="existing_nonconformity"][value="'+ response[0].existing_nonconformity +'"]').prop('checked', true);
                            $('input[name="update_doc_info"][value="'+ response[0].update_doc_info +'"]').prop('checked', true);
                            $('input[name="opportunity_identified_yn"][value="'+ response[0].opportunity_identified +'"]').prop('checked', true);
         
                            $('[name="existing_nonconformity_remarks"]').val(response[0].existing_nonconformity_remarks);
                            $('[name="update_doc_info_remarks"]').val(response[0].update_doc_info_remarks);
         
                            var riskEntries = JSON.parse(response[0].risk_entry);
                            var count = 0;
                            riskEntries.forEach(function (risk) {
         
                              var approval = risk.risk_number_acceptable_approval !== undefined ? risk.risk_number_acceptable_approval : '';
                              var verification = risk.risk_number_acceptable_verification !== undefined ? risk.risk_number_acceptable_verification : '';
                              var validation = risk.risk_number_acceptable_validation !== undefined ? risk.risk_number_acceptable_validation : ''
         
                              var approval_remarks = risk.risk_number_acceptable_remarks_approval !== undefined ? risk.risk_number_acceptable_remarks_approval : '';
                              var verification_remarks = risk.risk_number_acceptable_remarks_verification !== undefined ? risk.risk_number_acceptable_remarks_verification : '';
                              var validation_remarks = risk.risk_number_acceptable_remarks_validation !== undefined ? risk.risk_number_acceptable_remarks_validation : '';
         
                              var reviewValue = risk.risk_number_acceptable_review !== undefined ? risk.risk_number_acceptable_review : ''; // Added
                              var remarksReview = risk.risk_number_acceptable_remarks_review !== undefined ? risk.risk_number_acceptable_remarks_review : ''; // Added
         
                                var riskHtml = `
                                    <div class="col-lg-12 risk-number-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Risk Number</label>
                                                                <textarea rows="4" class="form-control" name="risk_number[]">${risk.risk_number}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Details / Updates</label>
                                                                <textarea rows="4" class="form-control" name="risk_number_details_update[]">${risk.risk_number_details_update}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">File URL</label>
                                                                <input type="text" class="form-control" readonly name="risk_number_attachment_url[]" value="${risk.risk_number_attachment_url}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="hidden" name="risk_attachments[]" value="${risk.risk_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="row">
                                                         <label for="acceptable" class="form-label">Acceptable</label>
         
                                                         <input type="hidden" value="${approval}" name="risk_number_acceptable_approval[${count}]">
                                                         <input type="hidden" value="${verification}" name="risk_number_acceptable_verification[${count}]">
                                                         <input type="hidden" value="${validation}" name="risk_number_acceptable_validation[${count}]">
         
                                                         <input type="hidden" value="${approval_remarks}" name="risk_number_acceptable_remarks_approval[${count}]">
                                                         <input type="hidden" value="${verification_remarks}" name="risk_number_acceptable_remarks_verification[${count}]">
                                                         <input type="hidden" value="${validation_remarks}" name="risk_number_acceptable_remarks_validation[${count}]">
                                                         
                                                         <div class="col-lg-3 text-inlign mb-2">
                                                               <div class="form-check form-check-inline">
                                                                  <input type="radio" name="risk_number_acceptable_review[${count}]" value="1" class="form-check-input" ${reviewValue === '1' ? 'checked' : ''}>
                                                                  <label class="form-check-label" for="risk_number_acceptable_review">YES</label>
                                                               </div>
                                                               <div class="form-check form-check-inline">
                                                                  <input type="radio" name="risk_number_acceptable_review[${count}]" value="0" class="form-check-input" ${reviewValue === '0' ? 'checked' : ''}>
                                                                  <label class="form-check-label" for="risk_number_acceptable_review">NO</label>
                                                               </div>
                                                         </div>
                                                         <div class="form-group col-lg-12">
                                                               <label for="risk_number_acceptable_remarks_review" class="form-label">Remarks</label>
                                                               <textarea class="form-control" name="risk_number_acceptable_remarks_review[${count}]" rows="4">${remarksReview}</textarea>
                                                         </div>
                                                      </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the risk HTML to the container
                                count++;
                                $('#risk-number').append(riskHtml);
                            });
         
         
                            var opportunityEntries = JSON.parse(response[0].opportunity_entry);
                            var count = 0;
                            opportunityEntries.forEach(function (opportunity) {
         
                              var approval = opportunity.opportunity_number_acceptable_approval !== undefined ? opportunity.risk_number_acceptable_approval : '';
                              var verification = opportunity.opportunity_number_acceptable_verification !== undefined ? opportunity.opportunity_number_acceptable_verification : '';
                              var validation = opportunity.opportunity_number_acceptable_validation !== undefined ? opportunity.opportunity_number_acceptable_validation : '';
         
                              var approval_remarks = opportunity.opportunity_number_acceptable_remarks_approval !== undefined ? opportunity.risk_number_acceptable_remarks_approval : '';
                              var verification_remarks = opportunity.opportunity_number_acceptable_remarks_verification !== undefined ? opportunity.opportunity_number_acceptable_remarks_verification : '';
                              var validation_remarks = opportunity.opportunity_number_acceptable_remarks_validation !== undefined ? opportunity.opportunity_number_acceptable_remarks_validation : '';
         
         
                              var reviewValue = opportunity.opportunity_number_acceptable_review !== undefined ? opportunity.opportunity_number_acceptable_review : ''; // Added
                              var remarksReview = opportunity.opportunity_number_acceptable_remarks_review !== undefined ? opportunity.opportunity_number_acceptable_remarks_review : ''; // Added
         
                                var opportunityHtml = `
                                    <div class="col-lg-12 opportunity-number-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Opportunity Number</label>
                                                                <textarea rows="4" class="form-control" name="opportunity_number[]">${opportunity.opportunity_number}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Opportunities Identified (if applicable)</label>
                                                                <textarea rows="4" class="form-control" name="opportunity_identified[]">${opportunity.opportunity_identified}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3">
                                                            <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control" readonly name="opportunity_number_attachment_url[]" value="${opportunity.opportunity_number_attachment_url}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="hidden" name="opportunity_attachments[]" value="${opportunity.opportunity_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                      <label for="acceptable" class="form-label">Acceptable</label>
         
                                                         <input type="hidden" value="${approval}" name="opportunity_number_acceptable_approval[${count}]">
                                                         <input type="hidden" value="${verification}" name="opportunity_number_acceptable_verification[${count}]">
                                                         <input type="hidden" value="${validation}" name="opportunity_number_acceptable_validation[${count}]">
         
                                                         <input type="hidden" value="${approval_remarks}" name="opportunity_number_acceptable_remarks_approval[${count}]">
                                                         <input type="hidden" value="${verification_remarks}" name="opportunity_number_acceptable_remarks_verification[${count}]">
                                                         <input type="hidden" value="${validation_remarks}" name="opportunity_number_acceptable_remarks_validation[${count}]">
         
                                                      <div class="col-lg-3 text-inlign mb-2">
                                                         <div class="form-check form-check-inline">
                                                               <input type="radio" name="opportunity_number_acceptable_review[${count}]" value="1" class="form-check-input" ${reviewValue === '1' ? 'checked' : ''}>
                                                               <label class="form-check-label" for="opportunity_number_acceptable_review">YES</label>
                                                         </div>
                                                         <div class="form-check form-check-inline">
                                                               <input type="radio" name="opportunity_number_acceptable_review[${count}]" value="0" class="form-check-input" ${reviewValue === '0' ? 'checked' : ''}>
                                                               <label class="form-check-label" for="opportunity_number_acceptable_review">NO</label>
                                                         </div>
                                                      </div>
                                                      <div class="form-group col-lg-12">
                                                         <label for="opportunity_number_acceptable_remarks_review" class="form-label">Remarks</label>
                                                         <textarea class="form-control" name="opportunity_number_acceptable_remarks_review[${count}]" rows="4">${remarksReview}</textarea>
                                                      </div>
                                                   </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the opportunity HTML to the container
                                count++;
                                $('#opportunity-number').append(opportunityHtml);
                            });
         
         
                            var rootCauseEntries = JSON.parse(response[0].root_cause_entry);
                            var count = 0;
                            rootCauseEntries.forEach(function (rootCause) {
         
                              var approval = rootCause.rootcause_acceptable_approval !== undefined ? rootCause.rootcause_acceptable_approval : '';
                              var verification = rootCause.rootcause_acceptable_verification !== undefined ? rootCause.rootcause_acceptable_verification : '';
                              var validation = rootCause.rootcause_acceptable_validation !== undefined ? rootCause.rootcause_acceptable_validation : '';
         
                              var approval_remarks = rootCause.rootcause_acceptable_remarks_approval !== undefined ? rootCause.rootcause_acceptable_remarks_approval : '';
                              var verification_remarks = rootCause.rootcause_acceptable_remarks_verification !== undefined ? rootCause.rootcause_acceptable_remarks_verification : '';
                              var validation_remarks = rootCause.rootcause_acceptable_remarks_validation !== undefined ? rootCause.rootcause_acceptable_remarks_validation : '';
         
         
                              var reviewValue = rootCause.rootcause_acceptable_review !== undefined ? rootCause.rootcause_acceptable_review : ''; // Added
                              var remarksReview = rootCause.rootcause_acceptable_remarks_review !== undefined ? rootCause.rootcause_acceptable_remarks_review : ''; // Added
         
                                var rootCauseHtml = `
                                    <div class="col-lg-12 rootcause-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-3">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Root Cause Analysis Used</label>
                                                                <input type="text" class="form-control" readonly name="rootcause[]" value="${rootCause.rootcause}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">File Name</label>
                                                                <input type="text" class="form-control" readonly name="rootcause_file_name[]" value="${rootCause.rootcause_file_name}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3">
                                                            <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control" readonly name="rootcause_file_url[]" value="${rootCause.rootcause_file_url}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="hidden" name="rootcause_attachments[]" value="${rootCause.rootcause_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                         <label for="acceptable" class="form-label">Acceptable</label>
         
                                                            <input type="hidden" value="${approval}" name="rootcause_acceptable_approval[${count}]">
                                                            <input type="hidden" value="${verification}" name="rootcause_acceptable_verification[${count}]">
                                                            <input type="hidden" value="${validation}" name="rootcause_acceptable_validation[${count}]">
         
                                                            <input type="hidden" value="${approval_remarks}" name="rootcause_acceptable_remarks_approval[${count}]">
                                                            <input type="hidden" value="${verification_remarks}" name="rootcause_acceptable_remarks_verification[${count}]">
                                                            <input type="hidden" value="${validation_remarks}" name="rootcause_acceptable_remarks_validation[${count}]">
         
                                                         <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                  <input type="radio" name="rootcause_acceptable_review[${count}]" value="1" class="form-check-input" ${reviewValue === '1' ? 'checked' : ''}>
                                                                  <label class="form-check-label" for="rootcause_acceptable_review">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                  <input type="radio" name="rootcause_acceptable_review[${count}]" value="0" class="form-check-input" ${reviewValue === '0' ? 'checked' : ''}>
                                                                  <label class="form-check-label" for="rootcause_acceptable_review">NO</label>
                                                            </div>
                                                         </div>
                                                         <div class="form-group col-lg-12">
                                                            <label for="rootcause_acceptable_remarks_review" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="rootcause_acceptable_remarks_review[${count}]" rows="4">${remarksReview}</textarea>
                                                         </div>
                                                      </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the root cause HTML to the container
                                count++;
                                $('#rootcause').append(rootCauseHtml);
                            });
         
         
                            var identifiedRootEntries = JSON.parse(response[0].identified_root_entry);
                            var count = 0;
                            identifiedRootEntries.forEach(function (identifiedRoot) {
         
                              var issued_by = '';
                              var issued_to = '';
                              var section_name = '';
         
                              var approval = identifiedRoot.identified_root_acceptable_approval !== undefined ? identifiedRoot.identified_root_acceptable_approval : '';
                              var verification = identifiedRoot.identified_root_acceptable_verification !== undefined ? identifiedRoot.identified_root_acceptable_verification : '';
                              var validation = identifiedRoot.identified_root_acceptable_validation !== undefined ? identifiedRoot.identified_root_acceptable_validation : '';
                              
                              var approval_remarks = identifiedRoot.identified_root_acceptable_remarks_approval !== undefined ? identifiedRoot.identified_root_acceptable_remarks_approval : '';
                              var verification_remarks = identifiedRoot.identified_root_acceptable_remarks_verification !== undefined ? identifiedRoot.identified_root_acceptable_remarks_verification : '';
                              var validation_remarks = identifiedRoot.identified_root_acceptable_remarks_validation !== undefined ? identifiedRoot.identified_root_acceptable_remarks_validation : '';
         
                              var reviewValue = identifiedRoot.identified_root_acceptable_review !== undefined ? identifiedRoot.identified_root_acceptable_review : ''; // Added
                              var remarksReview = identifiedRoot.identified_root_acceptable_remarks_review !== undefined ? identifiedRoot.identified_root_acceptable_remarks_review : ''; // Added
         
                                
                                if(identifiedRoot.tpn_issued_by){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getDivisionByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_issued_by},
                                        success: function (response) {
                                            response = JSON.parse(response);
         
                                            if(response[0]){
                                                 issued_by = response[0].div_name;
                                            }
                                        }
                                    });
                                }
         
                                if(identifiedRoot.tpn_issued_to){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getDepartmentByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_issued_to},
                                        success: function (response) {
                                            response = JSON.parse(response);
                                            if(response[0]){
                                                 issued_to = response[0].dep_name;
                                            }
                                        }
                                    });
                                }
                                
                                if(identifiedRoot.section){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getSectionByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.section},
                                        success: function (response) {
                                            response = JSON.parse(response);
                                            if(response[0]){
                                                 section_name = response[0].section_name;
                                            }
                                        }
                                    });
                                }
         
                                setTimeout(function() {
         
                                var identifiedRootHtml = `
                                    <div class="col-lg-12 identified-root-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-6 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Identified Root Cause</label>
                                                                <textarea rows="4" class="form-control" name="identified_root[]">${identifiedRoot.identified_root}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Corrective Action</label>
                                                                <textarea rows="4" class="form-control" name="identified_root_corrective_action[]">${identifiedRoot.identified_root_corrective_action}</textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">TPN Control</label>
                                                                <input type="text" readonly class="form-control" name="tpn_control[]" value="${identifiedRoot.tpn_control}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-2">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Person Responsible</label>
                                                                <input type="text" readonly class="form-control" name="identified_root_person_responsible[]" placeholder="Enter Name of personnel" value="${identifiedRoot.identified_root_person_responsible}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Completion Date</label>
                                                                <input type="date" readonly class="form-control" name="identified_root_completion_date[]" value="${identifiedRoot.identified_root_completion_date}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                        <div class="form-group">
                                                            <label for="issued_by" class="form-label">Issued By</label>
                                                            <input type="text" readonly class="form-control" name="tpn_issued_by[${count}]" value="${issued_by}">
                                                            <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                        </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="form-group">
                                                                <label for="issued_to" class="form-label">Issued To</label>
                                                                <input type="text" readonly class="form-control" name="tpn_issued_to[${count}]" value="${issued_to}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="form-group">
                                                                <label for="section" class="form-label">Section Unit</label>
                                                                <input type="text" readonly class="form-control" name="section[${count}]" value="${section_name}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control" readonly name="identified_root_attachment_url[]"  value="${identifiedRoot.identified_root_attachment_url}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="hidden" name="identified_attachments[]" value="${identifiedRoot.identified_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                      <label for="acceptable" class="form-label">Acceptable</label>
         
                                                         <input type="hidden" value="${approval}" name="identified_root_acceptable_approval[${count}]">
                                                         <input type="hidden" value="${verification}" name="identified_root_acceptable_verification[${count}]">
                                                         <input type="hidden" value="${validation}" name="identified_root_acceptable_validation[${count}]">
         
                                                         <input type="hidden" value="${approval_remarks}" name="identified_root_acceptable_remarks_approval[${count}]">
                                                         <input type="hidden" value="${verification_remarks}" name="identified_root_acceptable_remarks_verification[${count}]">
                                                         <input type="hidden" value="${validation_remarks}" name="identified_root_acceptable_remarks_validation[${count}]">
         
                                                      <div class="col-lg-3 text-inlign mb-2">
                                                         <div class="form-check form-check-inline">
                                                               <input type="radio" name="identified_root_acceptable_review[${count}]" value="1" class="form-check-input" ${reviewValue === '1' ? 'checked' : ''}>
                                                               <label class="form-check-label" for="identified_root_acceptable_review">YES</label>
                                                         </div>
                                                         <div class="form-check form-check-inline">
                                                               <input type="radio" name="identified_root_acceptable_review[${count}]" value="0" class="form-check-input" ${reviewValue === '0' ? 'checked' : ''}>
                                                               <label class="form-check-label" for="identified_root_acceptable_review">NO</label>
                                                         </div>
                                                      </div>
                                                      <div class="form-group col-lg-12">
                                                         <label for="identified_root_acceptable_remarks_review" class="form-label">Remarks</label>
                                                         <textarea class="form-control" name="identified_root_acceptable_remarks_review[${count}]" rows="4">${remarksReview}</textarea>
                                                      </div>
                                                   </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the identified root HTML to the container
                                $('#identified-root').append(identifiedRootHtml);
         
                                count++;
                                }, 3000);
                            });
         
                        }
         
                    }   
         
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
         
         
         
        });

        $('#car-global-datatable').on('click', '.for-osqm-review-corrective-action-past', function () {

            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            

            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
        
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 

            division = jQuery('.addCARFormIssuance .issued_by').val();

            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){

                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;

                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });

                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);

                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });

                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });

            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#risk-number-review').empty();
            $('#opportunity-number-review').empty();
            $('#rootcause-review').empty();
            $('#identified-root-review').empty();

            $.ajax({
                type: 'POST',
                url: '../car/getCorrectiveAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != 'null'){
                        
                        response = JSON.parse(response);

                        if(response[0]){
                            $('input[name="existing_nonconformity"][value="'+ response[0].existing_nonconformity +'"]').prop('checked', true);
                            $('input[name="update_doc_info"][value="'+ response[0].update_doc_info +'"]').prop('checked', true);
                            $('input[name="opportunity_identified_yn"][value="'+ response[0].opportunity_identified +'"]').prop('checked', true);

                            $('[name="existing_nonconformity_remarks"]').val(response[0].existing_nonconformity_remarks);
                            $('[name="update_doc_info_remarks"]').val(response[0].update_doc_info_remarks);

                            var review_action_root_cause_analysis = response[0].review_action_root_cause_analysis;
                            var review_action_root_cause_analysis_remarks = response[0].review_action_root_cause_analysis_remarks;

                            jQuery('.review_action_root_cause_analysis').val(review_action_root_cause_analysis);
                            jQuery('.review_action_root_cause_analysis_remarks').val(review_action_root_cause_analysis_remarks);

                            var riskEntries = JSON.parse(response[0].risk_entry);

                            

                            var count = 0;
                            riskEntries.forEach(function (risk) {

                                var approval = risk.risk_number_acceptable_approval !== undefined ? risk.risk_number_acceptable_approval : '';
                                var verification = risk.risk_number_acceptable_verification !== undefined ? risk.risk_number_acceptable_verification : '';
                                var validation = risk.risk_number_acceptable_validation !== undefined ? risk.risk_number_acceptable_validation : ''

                                var approval_remarks = risk.risk_number_acceptable_remarks_approval !== undefined ? risk.risk_number_acceptable_remarks_approval : '';
                                var verification_remarks = risk.risk_number_acceptable_remarks_verification !== undefined ? risk.risk_number_acceptable_remarks_verification : '';
                                var validation_remarks = risk.risk_number_acceptable_remarks_validation !== undefined ? risk.risk_number_acceptable_remarks_validation : '';

                                var reviewValue = risk.risk_number_acceptable_review !== undefined ? risk.risk_number_acceptable_review : ''; // Added
                                var remarksReview = risk.risk_number_acceptable_remarks_review !== undefined ? risk.risk_number_acceptable_remarks_review : ''; // Added

                                var riskHtml = `
                                    <div class="col-lg-12 risk-number-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Risk Number</label>
                                                                <input type="text" class="form-control" readonly name="risk_number[]" value="${risk.risk_number}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Details / Updates</label>
                                                                <input type="text" class="form-control" readonly name="risk_number_details_update[]" value="${risk.risk_number_details_update}">
                                                            </div>
                                                        </div>
                                     
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="hidden" name="risk_attachments[]" value="${risk.risk_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <label for="acceptable" class="form-label">Acceptable</label>

                                                            <input type="hidden" value="${approval}" name="risk_number_acceptable_approval[${count}]">
                                                            <input type="hidden" value="${verification}" name="risk_number_acceptable_verification[${count}]">
                                                            <input type="hidden" value="${validation}" name="risk_number_acceptable_validation[${count}]">

                                                            <input type="hidden" value="${approval_remarks}" name="risk_number_acceptable_remarks_approval[${count}]">
                                                            <input type="hidden" value="${verification_remarks}" name="risk_number_acceptable_remarks_verification[${count}]">
                                                            <input type="hidden" value="${validation_remarks}" name="risk_number_acceptable_remarks_validation[${count}]">
                                                            
                                                            <div class="col-lg-3 text-inlign mb-2">
                                                                <div class="form-check form-check-inline">
                                                                    <input type="radio" name="risk_number_acceptable_review[${count}]" value="1" class="form-check-input" ${reviewValue === '1' ? 'checked' : ''}>
                                                                    <label class="form-check-label" for="risk_number_acceptable_review">YES</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input type="radio" name="risk_number_acceptable_review[${count}]" value="0" class="form-check-input" ${reviewValue === '0' ? 'checked' : ''}>
                                                                    <label class="form-check-label" for="risk_number_acceptable_review">NO</label>
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-lg-12">
                                                                <label for="risk_number_acceptable_remarks_review" class="form-label">Remarks</label>
                                                                <textarea class="form-control" name="risk_number_acceptable_remarks_review[${count}]" rows="4">${remarksReview}</textarea>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the risk HTML to the container

                                count++;
                                $('#risk-number-review').append(riskHtml);
                            });


                            var opportunityEntries = JSON.parse(response[0].opportunity_entry);
                            
                            var count = 0;
                            opportunityEntries.forEach(function (opportunity) {

                                var approval = opportunity.opportunity_number_acceptable_approval !== undefined ? opportunity.risk_number_acceptable_approval : '';
                                var verification = opportunity.opportunity_number_acceptable_verification !== undefined ? opportunity.opportunity_number_acceptable_verification : '';
                                var validation = opportunity.opportunity_number_acceptable_validation !== undefined ? opportunity.opportunity_number_acceptable_validation : '';

                                var approval_remarks = opportunity.opportunity_number_acceptable_remarks_approval !== undefined ? opportunity.risk_number_acceptable_remarks_approval : '';
                                var verification_remarks = opportunity.opportunity_number_acceptable_remarks_verification !== undefined ? opportunity.opportunity_number_acceptable_remarks_verification : '';
                                var validation_remarks = opportunity.opportunity_number_acceptable_remarks_validation !== undefined ? opportunity.opportunity_number_acceptable_remarks_validation : '';


                                var reviewValue = opportunity.opportunity_number_acceptable_review !== undefined ? opportunity.opportunity_number_acceptable_review : ''; // Added
                                var remarksReview = opportunity.opportunity_number_acceptable_remarks_review !== undefined ? opportunity.opportunity_number_acceptable_remarks_review : ''; // Added

                                var opportunityHtml = `
                                    <div class="col-lg-12 opportunity-number-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Opportunity Number</label>
                                                                <input type="text" class="form-control" readonly name="opportunity_number[]" value="${opportunity.opportunity_number}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Opportunities Identified (if applicable)</label>
                                                                <input type="text" class="form-control" readonly name="opportunity_identified[]" value="${opportunity.opportunity_identified}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="hidden" name="opportunity_attachments[]" value="${opportunity.opportunity_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                        
                                                    </div>
                                                    <div class="row">
                                                        <label for="acceptable" class="form-label">Acceptable</label>

                                                            <input type="hidden" value="${approval}" name="opportunity_number_acceptable_approval[${count}]">
                                                            <input type="hidden" value="${verification}" name="opportunity_number_acceptable_verification[${count}]">
                                                            <input type="hidden" value="${validation}" name="opportunity_number_acceptable_validation[${count}]">

                                                            <input type="hidden" value="${approval_remarks}" name="opportunity_number_acceptable_remarks_approval[${count}]">
                                                            <input type="hidden" value="${verification_remarks}" name="opportunity_number_acceptable_remarks_verification[${count}]">
                                                            <input type="hidden" value="${validation_remarks}" name="opportunity_number_acceptable_remarks_validation[${count}]">

                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="opportunity_number_acceptable_review[${count}]" value="1" class="form-check-input" ${reviewValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="opportunity_number_acceptable_review">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="opportunity_number_acceptable_review[${count}]" value="0" class="form-check-input" ${reviewValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="opportunity_number_acceptable_review">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="opportunity_number_acceptable_remarks_review" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="opportunity_number_acceptable_remarks_review[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the opportunity HTML to the container
                                count++;
                                $('#opportunity-number-review').append(opportunityHtml);
                            });


                            var rootCauseEntries = JSON.parse(response[0].root_cause_entry);
                            var count = 0;
                            rootCauseEntries.forEach(function (rootCause) {

                                var approval = rootCause.rootcause_acceptable_approval !== undefined ? rootCause.rootcause_acceptable_approval : '';
                                var verification = rootCause.rootcause_acceptable_verification !== undefined ? rootCause.rootcause_acceptable_verification : '';
                                var validation = rootCause.rootcause_acceptable_validation !== undefined ? rootCause.rootcause_acceptable_validation : '';

                                var approval_remarks = rootCause.rootcause_acceptable_remarks_approval !== undefined ? rootCause.rootcause_acceptable_remarks_approval : '';
                                var verification_remarks = rootCause.rootcause_acceptable_remarks_verification !== undefined ? rootCause.rootcause_acceptable_remarks_verification : '';
                                var validation_remarks = rootCause.rootcause_acceptable_remarks_validation !== undefined ? rootCause.rootcause_acceptable_remarks_validation : '';


                                var reviewValue = rootCause.rootcause_acceptable_review !== undefined ? rootCause.rootcause_acceptable_review : ''; // Added
                                var remarksReview = rootCause.rootcause_acceptable_remarks_review !== undefined ? rootCause.rootcause_acceptable_remarks_review : ''; // Added

                                var rootCauseHtml = `
                                    <div class="col-lg-12 rootcause-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Root Cause Analysis Used</label>
                                                                <input type="text" class="form-control" readonly name="rootcause[]" value="${rootCause.rootcause}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">File Name</label>
                                                                <input type="text" class="form-control" readonly name="rootcause_file_name[]" value="${rootCause.rootcause_file_name}">
                                                            </div>
                                                        </div>
                                                        <<div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="hidden" name="rootcause_attachments[]" value="${rootCause.rootcause_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                            
                                                    </div>

                                                    <div class="row">
                                                        <label for="acceptable" class="form-label">Acceptable</label>

                                                            <input type="hidden" value="${approval}" name="rootcause_acceptable_approval[${count}]">
                                                            <input type="hidden" value="${verification}" name="rootcause_acceptable_verification[${count}]">
                                                            <input type="hidden" value="${validation}" name="rootcause_acceptable_validation[${count}]">

                                                            <input type="hidden" value="${approval_remarks}" name="rootcause_acceptable_remarks_approval[${count}]">
                                                            <input type="hidden" value="${verification_remarks}" name="rootcause_acceptable_remarks_verification[${count}]">
                                                            <input type="hidden" value="${validation_remarks}" name="rootcause_acceptable_remarks_validation[${count}]">

                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="rootcause_acceptable_review[${count}]" value="1" class="form-check-input" ${reviewValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="rootcause_acceptable_review">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="rootcause_acceptable_review[${count}]" value="0" class="form-check-input" ${reviewValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="rootcause_acceptable_review">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="rootcause_acceptable_remarks_review" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="rootcause_acceptable_remarks_review[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the root cause HTML to the container
                                count++;
                                $('#rootcause-review').append(rootCauseHtml);
                            });


                            var identifiedRootEntries = JSON.parse(response[0].identified_root_entry);
                            var count = 0;
                            identifiedRootEntries.forEach(function (identifiedRoot) {

                                var issued_by = '';
                                var issued_to = '';
                                var section_name = '';

                                var approval = identifiedRoot.identified_root_acceptable_approval !== undefined ? identifiedRoot.identified_root_acceptable_approval : '';
                                var verification = identifiedRoot.identified_root_acceptable_verification !== undefined ? identifiedRoot.identified_root_acceptable_verification : '';
                                var validation = identifiedRoot.identified_root_acceptable_validation !== undefined ? identifiedRoot.identified_root_acceptable_validation : '';
                                
                                var approval_remarks = identifiedRoot.identified_root_acceptable_remarks_approval !== undefined ? identifiedRoot.identified_root_acceptable_remarks_approval : '';
                                var verification_remarks = identifiedRoot.identified_root_acceptable_remarks_verification !== undefined ? identifiedRoot.identified_root_acceptable_remarks_verification : '';
                                var validation_remarks = identifiedRoot.identified_root_acceptable_remarks_validation !== undefined ? identifiedRoot.identified_root_acceptable_remarks_validation : '';

                                var reviewValue = identifiedRoot.identified_root_acceptable_review !== undefined ? identifiedRoot.identified_root_acceptable_review : ''; // Added
                                var remarksReview = identifiedRoot.identified_root_acceptable_remarks_review !== undefined ? identifiedRoot.identified_root_acceptable_remarks_review : ''; // Added

                                
                                if(identifiedRoot.tpn_issued_by){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getDivisionByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_issued_by},
                                        success: function (response) {
                                            response = JSON.parse(response);

                                            if(response[0]){
                                                 issued_by = response[0].div_name;
                                            }
                                        }
                                    });
                                }

                                if(identifiedRoot.tpn_issued_to){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getDepartmentByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_issued_to},
                                        success: function (response) {
                                            response = JSON.parse(response);
                                            if(response[0]){
                                                 issued_to = response[0].dep_name;
                                            }
                                        }
                                    });
                                }
                                
                                if(identifiedRoot.section){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getSectionByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.section},
                                        success: function (response) {
                                            response = JSON.parse(response);
                                            if(response[0]){
                                                 section_name = response[0].section_name;
                                            }
                                        }
                                    });
                                }

                                setTimeout(function() {

                                var identifiedRootHtml = `
                                    <div class="col-lg-12 identified-root-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Identified Root Cause</label>
                                                                <input type="text" readonly class="form-control" name="identified_root[]" value="${identifiedRoot.identified_root}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">TPN Control</label>
                                                                <input type="text" readonly class="form-control" name="tpn_control[]" value="${identifiedRoot.tpn_control}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Corrective Action</label>
                                                                <input type="text" readonly class="form-control" name="identified_root_corrective_action[]" value="${identifiedRoot.identified_root_corrective_action}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="form-group">
                                                                <label for="issued_by" class="form-label">Issued By</label>
                                                                <input type="text" readonly class="form-control" name="tpn_issued_by[${count}]" value="${issued_by}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3 mb-1">
                                                            <div class="form-group">
                                                                <label for="issued_to" class="form-label">Issued To</label>
                                                                <input type="text" readonly class="form-control" name="tpn_issued_to[${count}]" value="${issued_to}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3 mb-1">
                                                            <div class="form-group">
                                                                <label for="section" class="form-label">Section Unit</label>
                                                                <input type="text" readonly class="form-control" name="section[${count}]" value="${section_name}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Person Responsible</label>
                                                                <input type="text" readonly class="form-control" name="identified_root_person_responsible[]" placeholder="Enter Name of personnel" value="${identifiedRoot.identified_root_person_responsible}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Completion Date</label>
                                                                <input type="date" readonly class="form-control" name="identified_root_completion_date[]" value="${identifiedRoot.identified_root_completion_date}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="hidden" name="identified_attachments[]" value="${identifiedRoot.identified_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <label for="acceptable" class="form-label">Acceptable</label>

                                                            <input type="hidden" value="${approval}" name="identified_root_acceptable_approval[${count}]">
                                                            <input type="hidden" value="${verification}" name="identified_root_acceptable_verification[${count}]">
                                                            <input type="hidden" value="${validation}" name="identified_root_acceptable_validation[${count}]">

                                                            <input type="hidden" value="${approval_remarks}" name="identified_root_acceptable_remarks_approval[${count}]">
                                                            <input type="hidden" value="${verification_remarks}" name="identified_root_acceptable_remarks_verification[${count}]">
                                                            <input type="hidden" value="${validation_remarks}" name="identified_root_acceptable_remarks_validation[${count}]">

                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="identified_root_acceptable_review[${count}]" value="1" class="form-check-input" ${reviewValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="identified_root_acceptable_review">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="identified_root_acceptable_review[${count}]" value="0" class="form-check-input" ${reviewValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="identified_root_acceptable_review">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="identified_root_acceptable_remarks_review" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="identified_root_acceptable_remarks_review[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the identified root HTML to the container
                                count++;
                                $('#identified-root-review').append(identifiedRootHtml);
                                }, 3000);
                            });

                        }

                    }   

                    
              


                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
        });

        $('#car-global-datatable').on('click', '.for-osqm-approval-corrective-action', function () {

            var $action = '<div class="row mb-2">' +
            '<div class="form-group col-md-12">' +
            '<label for="approval_action_root_cause_analysis" class="form-label">Review of Action and Root Cause Analysis</label>' +
            '<select class="form-select approval_action_root_cause_analysis" name="approval_action_root_cause_analysis">' +
                '<option value="For Approval">For Verification</option>' +
                '<option value="For Revision">For Revision</option>' +
            '</select>' +
            '</div>' +
        '</div>' +
        '<div class="row mb-2">' +
            '<div class="form-group col-md-12">' +
            '<label for="approval_action_root_cause_analysis_remarks" class="form-label">Remarks </label>' +
            '<textarea class="form-control approval_action_root_cause_analysis_remarks" name="approval_action_root_cause_analysis_remarks" rows="4"></textarea>' +
            '</div>' +
        '</div>';

        jQuery('#car-action').html($action);

        jQuery('#car-action').removeClass();
        jQuery('#car-action').addClass('mt-4');
        jQuery('#car-action').addClass('row');
        jQuery('#car-action').addClass('corrective-action-approval');
     
        $car_id = jQuery(this).data('car_id');
        $requestor = jQuery(this).data('requestor');
        $car_no = jQuery(this).data('car_no');
        $source = jQuery(this).data('source');
        $issued_by = jQuery(this).data('issued_by');
        $issued_to = jQuery(this).data('issued_to');
        $section = jQuery(this).data('section');
        $identification_date = jQuery(this).data('identification_date');
        $issuance_of_nc = jQuery(this).data('issuance_of_nc');
        $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
        $status = jQuery(this).data('status');
        
     
        $findings = jQuery(this).data('findings');
        $consequences = jQuery(this).data('consequences');
        $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
     
        jQuery('.addCARFormIssuance .car_id').val($car_id);
        jQuery('.addCARFormIssuance .requestor').val($requestor);
        jQuery('.addCARFormIssuance .car_no').val($car_no);
        jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
        jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
        jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
        jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
        jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
        jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
        jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
        jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
        jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
     
        division = jQuery('.addCARFormIssuance .issued_by').val();
     
        $.ajax({
            type: 'POST',
            url: '../car/getDepartment', // Replace 'MyController' with your controller name
            data: {division: division},
            success: function (response) {
                if(response != 'null'){
     
                    $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                    $.each(JSON.parse(response), function (index, item) {
                        // Access each item's properties
                        var id = item.id;
                        var dep_name = item.dep_name;
     
                        var html = '<option value="'+id+'">'+dep_name+'</option>';
                        // Do something with the data, for example, display it on the page
                        $('.addCARFormIssuance .issued_to').append(html);
                    });
     
                    jQuery('.addCARFormIssuance .issued_to').val($issued_to);
     
                    department = $issued_to;
                    $.ajax({
                        type: 'POST',
                        url: '../car/getSection', // Replace 'MyController' with your controller name
                        data: {department: department},
                        success: function (response) {
                            if(response != 'null'){
        
                                $('.addCARFormIssuance .section').html('<option value=""></option>');
                                $.each(JSON.parse(response), function (index, item) {
                                    // Access each item's properties
                                    var id = item.id;
                                    var section_name = item.section_name;
            
                                    var html = '<option value="'+id+'">'+section_name+'</option>';
                                    // Do something with the data, for example, display it on the page
                                    $('.addCARFormIssuance .section').append(html);
                                });
        
                                jQuery('.addCARFormIssuance .section').val($section);
                            }   
                        },
                        error: function () {
                            // Handle errors
                            diList.notifyError();
                        }
                    });
     
                }   
            },
            error: function () {
                // Handle errors
                diList.notifyError();
            }
        });
     
        var car_id = jQuery(this).data('car_id');
        jQuery('.car_id').val(car_id);
        $('#risk-number').empty();
        $('#opportunity-number').empty();
        $('#rootcause').empty();
        $('#identified-root').empty();
     
        $.ajax({
            type: 'POST',
            url: '../car/getCorrectiveAction', // Replace 'MyController' with your controller name
            data: {car_id: car_id},
            success: function (response) {
                if(response != 'null'){
                    
                    response = JSON.parse(response);
     
                    if(response[0]){
                        $('input[name="existing_nonconformity"][value="'+ response[0].existing_nonconformity +'"]').prop('checked', true);
                        $('input[name="update_doc_info"][value="'+ response[0].update_doc_info +'"]').prop('checked', true);
                        $('input[name="opportunity_identified_yn"][value="'+ response[0].opportunity_identified +'"]').prop('checked', true);
     
                        $('[name="existing_nonconformity_remarks"]').val(response[0].existing_nonconformity_remarks);
                        $('[name="update_doc_info_remarks"]').val(response[0].update_doc_info_remarks);
     
                        var riskEntries = JSON.parse(response[0].risk_entry);
     
                        riskEntries.forEach(function (risk) {

                            var review = risk.risk_number_acceptable_review !== undefined ? risk.risk_number_acceptable_review : '';
                            var verification = risk.risk_number_acceptable_verification !== undefined ? risk.risk_number_acceptable_verification : '';
                            var validation = risk.risk_number_acceptable_validation !== undefined ? risk.risk_number_acceptable_validation : ''
    
                            var review_remarks = risk.risk_number_acceptable_remarks_review !== undefined ? risk.risk_number_acceptable_remarks_review : '';
                            var verification_remarks = risk.risk_number_acceptable_remarks_verification !== undefined ? risk.risk_number_acceptable_remarks_verification : '';
                            var validation_remarks = risk.risk_number_acceptable_remarks_validation !== undefined ? risk.risk_number_acceptable_remarks_validation : '';
    
                            var approvalValue = risk.risk_number_acceptable_approval !== undefined ? risk.risk_number_acceptable_approval : ''; // Added
                            var remarksReview = risk.risk_number_acceptable_remarks_approval !== undefined ? risk.risk_number_acceptable_remarks_approval : ''; // Added
    
                            var riskHtml = `
                                <div class="col-lg-12 risk-number-repeatable">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-6">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Risk Number</label>
                                                            <textarea rows="4" class="form-control" name="risk_number[]">${risk.risk_number}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Details / Updates</label>
                                                            <textarea rows="4" class="form-control" name="risk_number_details_update[]">${risk.risk_number_details_update}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File URL</label>
                                                            <input type="text" class="form-control" readonly name="risk_number_attachment_url[]" value="${risk.risk_number_attachment_url}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-1">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Attachment</label>
                                                            <input type="hidden" name="rootcause_attachments[]" value="${rootCause.rootcause_attachments}">
                                                            <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <div class="row">
                                                        <label for="acceptable" class="form-label">Acceptable</label>
    
                                                        <input type="hidden" value="${review}" name="risk_number_acceptable_review[${count}]">
                                                        <input type="hidden" value="${verification}" name="risk_number_acceptable_verification[${count}]">
                                                        <input type="hidden" value="${validation}" name="risk_number_acceptable_validation[${count}]">
    
                                                        <input type="hidden" value="${review_remarks}" name="risk_number_acceptable_remarks_review[${count}]">
                                                        <input type="hidden" value="${verification_remarks}" name="risk_number_acceptable_remarks_verification[${count}]">
                                                        <input type="hidden" value="${validation_remarks}" name="risk_number_acceptable_remarks_validation[${count}]">
                                                        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="risk_number_acceptable_approval[${count}]" value="1" class="form-check-input" ${approvalValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="risk_number_acceptable_approval">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="risk_number_acceptable_approval[${count}]" value="0" class="form-check-input" ${approvalValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="risk_number_acceptable_approval">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="risk_number_acceptable_remarks_approval" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="risk_number_acceptable_remarks_approval[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            // Append the risk HTML to the container
                            $('#risk-number').append(riskHtml);
                        });
     
     
                        var opportunityEntries = JSON.parse(response[0].opportunity_entry);
     
                        opportunityEntries.forEach(function (opportunity) {

                            var review = opportunity.opportunity_number_acceptable_review !== undefined ? opportunity.risk_number_acceptable_review : '';
                            var verification = opportunity.opportunity_number_acceptable_verification !== undefined ? opportunity.opportunity_number_acceptable_verification : '';
                            var validation = opportunity.opportunity_number_acceptable_validation !== undefined ? opportunity.opportunity_number_acceptable_validation : '';
    
                            var review_remarks = opportunity.opportunity_number_acceptable_remarks_review !== undefined ? opportunity.risk_number_acceptable_remarks_review : '';
                            var verification_remarks = opportunity.opportunity_number_acceptable_remarks_verification !== undefined ? opportunity.opportunity_number_acceptable_remarks_verification : '';
                            var validation_remarks = opportunity.opportunity_number_acceptable_remarks_validation !== undefined ? opportunity.opportunity_number_acceptable_remarks_validation : '';
    
    
                            var approvalValue = opportunity.opportunity_number_acceptable_approval !== undefined ? opportunity.opportunity_number_acceptable_approval : ''; // Added
                            var remarksReview = opportunity.opportunity_number_acceptable_remarks_approval !== undefined ? opportunity.opportunity_number_acceptable_remarks_approval : ''; // Added
    
                            var opportunityHtml = `
                                <div class="col-lg-12 opportunity-number-repeatable">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-6">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Opportunity Number</label>
                                                            <textarea rows="4" class="form-control" name="opportunity_number[]">${opportunity.opportunity_number}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Opportunities Identified (if applicable)</label>
                                                            <textarea rows="4" class="form-control" name="opportunity_identified[]">${opportunity.opportunity_identified}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-3">
                                                        <div class="mb-3 mb-xl-0">
                                                        <label class="form-label">File URL</label>
                                                        <input type="text" class="form-control" readonly name="opportunity_number_attachment_url[]" value="${opportunity.opportunity_number_attachment_url}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-1">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Attachment</label>
                                                            <input type="hidden" name="opportunity_attachments[]" value="${opportunity.opportunity_attachments}">
                                                            <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                        </div>
                                                    </div>
                                    
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">Acceptable</label>
    
                                                        <input type="hidden" value="${review}" name="opportunity_number_acceptable_review[${count}]">
                                                        <input type="hidden" value="${verification}" name="opportunity_number_acceptable_verification[${count}]">
                                                        <input type="hidden" value="${validation}" name="opportunity_number_acceptable_validation[${count}]">
    
                                                        <input type="hidden" value="${review_remarks}" name="opportunity_number_acceptable_remarks_review[${count}]">
                                                        <input type="hidden" value="${verification_remarks}" name="opportunity_number_acceptable_remarks_verification[${count}]">
                                                        <input type="hidden" value="${validation_remarks}" name="opportunity_number_acceptable_remarks_validation[${count}]">
    
                                                    <div class="col-lg-3 text-inlign mb-2">
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="opportunity_number_acceptable_approval[${count}]" value="1" class="form-check-input" ${approvalValue === '1' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="opportunity_number_acceptable_approval">YES</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="opportunity_number_acceptable_approval[${count}]" value="0" class="form-check-input" ${approvalValue === '0' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="opportunity_number_acceptable_approval">NO</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label for="opportunity_number_acceptable_remarks_approval" class="form-label">Remarks</label>
                                                        <textarea class="form-control" name="opportunity_number_acceptable_remarks_approval[${count}]" rows="4">${remarksReview}</textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            // Append the opportunity HTML to the container
                            $('#opportunity-number').append(opportunityHtml);
                        });
     
     
                        var rootCauseEntries = JSON.parse(response[0].root_cause_entry);
     
                        rootCauseEntries.forEach(function (rootCause) {

                            var review = rootCause.rootcause_acceptable_review !== undefined ? rootCause.rootcause_acceptable_review : '';
                            var verification = rootCause.rootcause_acceptable_verification !== undefined ? rootCause.rootcause_acceptable_verification : '';
                            var validation = rootCause.rootcause_acceptable_validation !== undefined ? rootCause.rootcause_acceptable_validation : '';
    
                            var review_remarks = rootCause.rootcause_acceptable_remarks_review !== undefined ? rootCause.rootcause_acceptable_remarks_review : '';
                            var verification_remarks = rootCause.rootcause_acceptable_remarks_verification !== undefined ? rootCause.rootcause_acceptable_remarks_verification : '';
                            var validation_remarks = rootCause.rootcause_acceptable_remarks_validation !== undefined ? rootCause.rootcause_acceptable_remarks_validation : '';
    
    
                            var approvalValue = rootCause.rootcause_acceptable_approval !== undefined ? rootCause.rootcause_acceptable_approval : ''; // Added
                            var remarksReview = rootCause.rootcause_acceptable_remarks_approval !== undefined ? rootCause.rootcause_acceptable_remarks_approval : ''; // Added
    
                            var rootCauseHtml = `
                                <div class="col-lg-12 rootcause-repeatable">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-3">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Root Cause Analysis Used</label>
                                                            <input type="text" class="form-control" readonly name="rootcause[]" value="${rootCause.rootcause}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-3">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">File Name</label>
                                                            <input type="text" class="form-control" readonly name="rootcause_file_name[]" value="${rootCause.rootcause_file_name}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-3">
                                                        <div class="mb-3 mb-xl-0">
                                                        <label class="form-label">File URL</label>
                                                        <input type="text" class="form-control" readonly name="rootcause_file_url[]" value="${rootCause.rootcause_file_url}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-1">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Attachment</label>
                                                            <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                <label for="acceptable" class="form-label">Acceptable</label>

                                                    <input type="hidden" value="${review}" name="rootcause_acceptable_review[${count}]">
                                                    <input type="hidden" value="${verification}" name="rootcause_acceptable_verification[${count}]">
                                                    <input type="hidden" value="${validation}" name="rootcause_acceptable_validation[${count}]">

                                                    <input type="hidden" value="${review_remarks}" name="rootcause_acceptable_remarks_review[${count}]">
                                                    <input type="hidden" value="${verification_remarks}" name="rootcause_acceptable_remarks_verification[${count}]">
                                                    <input type="hidden" value="${validation_remarks}" name="rootcause_acceptable_remarks_validation[${count}]">

                                                <div class="col-lg-3 text-inlign mb-2">
                                                    <div class="form-check form-check-inline">
                                                        <input type="radio" name="rootcause_acceptable_approval[${count}]" value="1" class="form-check-input" ${approvalValue === '1' ? 'checked' : ''}>
                                                        <label class="form-check-label" for="rootcause_acceptable_approval">YES</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input type="radio" name="rootcause_acceptable_approval[${count}]" value="0" class="form-check-input" ${approvalValue === '0' ? 'checked' : ''}>
                                                        <label class="form-check-label" for="rootcause_acceptable_approval">NO</label>
                                                    </div>
                                                </div>
                                                <div class="form-group col-lg-12">
                                                    <label for="rootcause_acceptable_remarks_approval" class="form-label">Remarks</label>
                                                    <textarea class="form-control" name="rootcause_acceptable_remarks_approval[${count}]" rows="4">${remarksReview}</textarea>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            // Append the root cause HTML to the container
                            $('#rootcause').append(rootCauseHtml);
                        });
     
     
                        var identifiedRootEntries = JSON.parse(response[0].identified_root_entry);
                        var count = 0;
                        identifiedRootEntries.forEach(function (identifiedRoot) {
     
                            var issued_by = '';
                            var issued_to = '';
                            var section_name = '';

                            var review = identifiedRoot.identified_root_acceptable_review !== undefined ? identifiedRoot.identified_root_acceptable_review : '';
                            var verification = identifiedRoot.identified_root_acceptable_verification !== undefined ? identifiedRoot.identified_root_acceptable_verification : '';
                            var validation = identifiedRoot.identified_root_acceptable_validation !== undefined ? identifiedRoot.identified_root_acceptable_validation : '';
                            
                            var review_remarks = identifiedRoot.identified_root_acceptable_remarks_review !== undefined ? identifiedRoot.identified_root_acceptable_remarks_review : '';
                            var verification_remarks = identifiedRoot.identified_root_acceptable_remarks_verification !== undefined ? identifiedRoot.identified_root_acceptable_remarks_verification : '';
                            var validation_remarks = identifiedRoot.identified_root_acceptable_remarks_validation !== undefined ? identifiedRoot.identified_root_acceptable_remarks_validation : '';
    
                            var approvalValue = identifiedRoot.identified_root_acceptable_approval !== undefined ? identifiedRoot.identified_root_acceptable_approval : ''; // Added
                            var remarksReview = identifiedRoot.identified_root_acceptable_remarks_approval !== undefined ? identifiedRoot.identified_root_acceptable_remarks_approval : ''; // Added
                            
                            if(identifiedRoot.tpn_issued_by){
                                $.ajax({
                                    type: 'POST',
                                    url: '../car/getDivisionByID', // Replace 'MyController' with your controller name
                                    data: {id: identifiedRoot.tpn_issued_by},
                                    success: function (response) {
                                        response = JSON.parse(response);
     
                                        if(response[0]){
                                             issued_by = response[0].div_name;
                                        }
                                    }
                                });
                            }
     
                            if(identifiedRoot.tpn_issued_to){
                                $.ajax({
                                    type: 'POST',
                                    url: '../car/getDepartmentByID', // Replace 'MyController' with your controller name
                                    data: {id: identifiedRoot.tpn_issued_to},
                                    success: function (response) {
                                        response = JSON.parse(response);
                                        if(response[0]){
                                             issued_to = response[0].dep_name;
                                        }
                                    }
                                });
                            }
                            
                            if(identifiedRoot.section){
                                $.ajax({
                                    type: 'POST',
                                    url: '../car/getSectionByID', // Replace 'MyController' with your controller name
                                    data: {id: identifiedRoot.section},
                                    success: function (response) {
                                        response = JSON.parse(response);
                                        if(response[0]){
                                             section_name = response[0].section_name;
                                        }
                                    }
                                });
                            }
     
                            setTimeout(function() {
     
                            var identifiedRootHtml = `
                                <div class="col-lg-12 identified-root-repeatable">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-xl-6 mb-1">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Identified Root Cause</label>
                                                            <textarea rows="4" class="form-control" name="identified_root[]">${identifiedRoot.identified_root}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6 mb-1">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Corrective Action</label>
                                                            <textarea rows="4" class="form-control" name="identified_root_corrective_action[]">${identifiedRoot.identified_root_corrective_action}</textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 mb-1">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">TPN Control</label>
                                                            <input type="text" readonly class="form-control" name="tpn_control[]" value="${identifiedRoot.tpn_control}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 mb-2">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Person Responsible</label>
                                                            <input type="text" readonly class="form-control" name="identified_root_person_responsible[]" placeholder="Enter Name of personnel" value="${identifiedRoot.identified_root_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Completion Date</label>
                                                            <input type="date" readonly class="form-control" name="identified_root_completion_date[]" value="${identifiedRoot.identified_root_completion_date}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 mb-1">
                                                    <div class="form-group">
                                                        <label for="issued_by" class="form-label">Issued By</label>
                                                        <input type="text" readonly class="form-control" name="tpn_issued_by[${count}]" value="${issued_by}">
                                                        <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                    </div>
                                                    </div>
                                                    <div class="col-xl-4 mb-1">
                                                        <div class="form-group">
                                                            <label for="issued_to" class="form-label">Issued To</label>
                                                            <input type="text" readonly class="form-control" name="tpn_issued_to[${count}]" value="${issued_to}">
                                                            <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 mb-1">
                                                        <div class="form-group">
                                                            <label for="section" class="form-label">Section Unit</label>
                                                            <input type="text" readonly class="form-control" name="section[${count}]" value="${section_name}">
                                                            <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                        <label class="form-label">File URL</label>
                                                        <input type="text" class="form-control" readonly name="identified_root_attachment_url[]"  value="${identifiedRoot.identified_root_attachment_url}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-1">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label class="form-label">Attachment</label>
                                                            <input type="hidden" name="identified_attachments[]" value="${identifiedRoot.identified_attachments}">
                                                            <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <label for="acceptable" class="form-label">Acceptable</label>
    
                                                        <input type="hidden" value="${review}" name="identified_root_acceptable_review[${count}]">
                                                        <input type="hidden" value="${verification}" name="identified_root_acceptable_verification[${count}]">
                                                        <input type="hidden" value="${validation}" name="identified_root_acceptable_validation[${count}]">
    
                                                        <input type="hidden" value="${review_remarks}" name="identified_root_acceptable_remarks_review[${count}]">
                                                        <input type="hidden" value="${verification_remarks}" name="identified_root_acceptable_remarks_verification[${count}]">
                                                        <input type="hidden" value="${validation_remarks}" name="identified_root_acceptable_remarks_validation[${count}]">
    
                                                    <div class="col-lg-3 text-inlign mb-2">
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="identified_root_acceptable_approval[${count}]" value="1" class="form-check-input" ${approvalValue === '1' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="identified_root_acceptable_approval">YES</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input type="radio" name="identified_root_acceptable_approval[${count}]" value="0" class="form-check-input" ${approvalValue === '0' ? 'checked' : ''}>
                                                            <label class="form-check-label" for="identified_root_acceptable_approval">NO</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label for="identified_root_acceptable_remarks_approval" class="form-label">Remarks</label>
                                                        <textarea class="form-control" name="identified_root_acceptable_remarks_approval[${count}]" rows="4">${remarksReview}</textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            // Append the identified root HTML to the container
                            $('#identified-root').append(identifiedRootHtml);
     
                            count++;
                            }, 3000);
                        });
     
                    }
     
                }   
              
            },
            error: function () {
                // Handle errors
                diList.notifyError();
            }
        });
        });

        $('#car-global-datatable').on('click', '.for-osqm-approval-corrective-action-past', function () {

            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            

            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
        
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 

            division = jQuery('.addCARFormIssuance .issued_by').val();

            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){

                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;

                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });

                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);

                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });

                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });

            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#risk-number-approval').empty();
            $('#opportunity-number-approval').empty();
            $('#rootcause-approval').empty();
            $('#identified-root-approval').empty();
        
            $.ajax({
                type: 'POST',
                url: '../car/getCorrectiveAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != 'null'){
                        
                        response = JSON.parse(response);
        
                        if(response[0]){
                            $('input[name="existing_nonconformity"][value="'+ response[0].existing_nonconformity +'"]').prop('checked', true);
                            $('input[name="update_doc_info"][value="'+ response[0].update_doc_info +'"]').prop('checked', true);
                            $('input[name="opportunity_identified_yn"][value="'+ response[0].opportunity_identified +'"]').prop('checked', true);
        
                            $('[name="existing_nonconformity_remarks"]').val(response[0].existing_nonconformity_remarks);
                            $('[name="update_doc_info_remarks"]').val(response[0].update_doc_info_remarks);

                            var approval_action_root_cause_analysis = response[0].approval_action_root_cause_analysis;
                            var approval_action_root_cause_analysis_remarks = response[0].approval_action_root_cause_analysis_remarks;

                            jQuery('.approval_action_root_cause_analysis').val(approval_action_root_cause_analysis);
                            jQuery('.approval_action_root_cause_analysis_remarks').val(approval_action_root_cause_analysis_remarks);
        
                            var riskEntries = JSON.parse(response[0].risk_entry);
                            
    
                            var count = 0;
                            riskEntries.forEach(function (risk) {
        
                                var review = risk.risk_number_acceptable_review !== undefined ? risk.risk_number_acceptable_review : '';
                                var verification = risk.risk_number_acceptable_verification !== undefined ? risk.risk_number_acceptable_verification : '';
                                var validation = risk.risk_number_acceptable_validation !== undefined ? risk.risk_number_acceptable_validation : ''
        
                                var review_remarks = risk.risk_number_acceptable_remarks_review !== undefined ? risk.risk_number_acceptable_remarks_review : '';
                                var verification_remarks = risk.risk_number_acceptable_remarks_verification !== undefined ? risk.risk_number_acceptable_remarks_verification : '';
                                var validation_remarks = risk.risk_number_acceptable_remarks_validation !== undefined ? risk.risk_number_acceptable_remarks_validation : '';
        
                                var approvalValue = risk.risk_number_acceptable_approval !== undefined ? risk.risk_number_acceptable_approval : ''; // Added
                                var remarksReview = risk.risk_number_acceptable_remarks_approval !== undefined ? risk.risk_number_acceptable_remarks_approval : ''; // Added
        
                                var riskHtml = `
                                    <div class="col-lg-12 risk-number-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Risk Number</label>
                                                                <input type="text" class="form-control" readonly name="risk_number[]" value="${risk.risk_number}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Details / Updates</label>
                                                                <input type="text" class="form-control" readonly name="risk_number_details_update[]" value="${risk.risk_number_details_update}">
                                                            </div>
                                                        </div>
                                     
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="hidden" name="risk_attachments[]" value="${risk.risk_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
        
                                                        <div class="row">
                                                            <label for="acceptable" class="form-label">Acceptable</label>
        
                                                            <input type="hidden" value="${review}" name="risk_number_acceptable_review[${count}]">
                                                            <input type="hidden" value="${verification}" name="risk_number_acceptable_verification[${count}]">
                                                            <input type="hidden" value="${validation}" name="risk_number_acceptable_validation[${count}]">
        
                                                            <input type="hidden" value="${review_remarks}" name="risk_number_acceptable_remarks_review[${count}]">
                                                            <input type="hidden" value="${verification_remarks}" name="risk_number_acceptable_remarks_verification[${count}]">
                                                            <input type="hidden" value="${validation_remarks}" name="risk_number_acceptable_remarks_validation[${count}]">
                                                            
                                                            <div class="col-lg-3 text-inlign mb-2">
                                                                <div class="form-check form-check-inline">
                                                                    <input type="radio" name="risk_number_acceptable_approval[${count}]" value="1" class="form-check-input" ${approvalValue === '1' ? 'checked' : ''}>
                                                                    <label class="form-check-label" for="risk_number_acceptable_approval">YES</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input type="radio" name="risk_number_acceptable_approval[${count}]" value="0" class="form-check-input" ${approvalValue === '0' ? 'checked' : ''}>
                                                                    <label class="form-check-label" for="risk_number_acceptable_approval">NO</label>
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-lg-12">
                                                                <label for="risk_number_acceptable_remarks_approval" class="form-label">Remarks</label>
                                                                <textarea class="form-control" name="risk_number_acceptable_remarks_approval[${count}]" rows="4">${remarksReview}</textarea>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the risk HTML to the container
        
                                count++;
                                $('#risk-number-approval').append(riskHtml);
                            });
        
        
                            var opportunityEntries = JSON.parse(response[0].opportunity_entry);
                            
                            var count = 0;
                            opportunityEntries.forEach(function (opportunity) {
        
                                var review = opportunity.opportunity_number_acceptable_review !== undefined ? opportunity.risk_number_acceptable_review : '';
                                var verification = opportunity.opportunity_number_acceptable_verification !== undefined ? opportunity.opportunity_number_acceptable_verification : '';
                                var validation = opportunity.opportunity_number_acceptable_validation !== undefined ? opportunity.opportunity_number_acceptable_validation : '';
        
                                var review_remarks = opportunity.opportunity_number_acceptable_remarks_review !== undefined ? opportunity.risk_number_acceptable_remarks_review : '';
                                var verification_remarks = opportunity.opportunity_number_acceptable_remarks_verification !== undefined ? opportunity.opportunity_number_acceptable_remarks_verification : '';
                                var validation_remarks = opportunity.opportunity_number_acceptable_remarks_validation !== undefined ? opportunity.opportunity_number_acceptable_remarks_validation : '';
        
        
                                var approvalValue = opportunity.opportunity_number_acceptable_approval !== undefined ? opportunity.opportunity_number_acceptable_approval : ''; // Added
                                var remarksReview = opportunity.opportunity_number_acceptable_remarks_approval !== undefined ? opportunity.opportunity_number_acceptable_remarks_approval : ''; // Added
        
                                var opportunityHtml = `
                                    <div class="col-lg-12 opportunity-number-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Opportunity Number</label>
                                                                <input type="text" class="form-control" readonly name="opportunity_number[]" value="${opportunity.opportunity_number}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Opportunities Identified (if applicable)</label>
                                                                <input type="text" class="form-control" readonly name="opportunity_identified[]" value="${opportunity.opportunity_identified}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="hidden" name="opportunity_attachments[]" value="${opportunity.opportunity_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                        
                                                    </div>
                                                    <div class="row">
                                                        <label for="acceptable" class="form-label">Acceptable</label>
        
                                                            <input type="hidden" value="${review}" name="opportunity_number_acceptable_review[${count}]">
                                                            <input type="hidden" value="${verification}" name="opportunity_number_acceptable_verification[${count}]">
                                                            <input type="hidden" value="${validation}" name="opportunity_number_acceptable_validation[${count}]">
        
                                                            <input type="hidden" value="${review_remarks}" name="opportunity_number_acceptable_remarks_review[${count}]">
                                                            <input type="hidden" value="${verification_remarks}" name="opportunity_number_acceptable_remarks_verification[${count}]">
                                                            <input type="hidden" value="${validation_remarks}" name="opportunity_number_acceptable_remarks_validation[${count}]">
        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="opportunity_number_acceptable_approval[${count}]" value="1" class="form-check-input" ${approvalValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="opportunity_number_acceptable_approval">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="opportunity_number_acceptable_approval[${count}]" value="0" class="form-check-input" ${approvalValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="opportunity_number_acceptable_approval">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="opportunity_number_acceptable_remarks_approval" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="opportunity_number_acceptable_remarks_approval[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the opportunity HTML to the container
                                count++;
                                $('#opportunity-number-approval').append(opportunityHtml);
                            });
        
        
                            var rootCauseEntries = JSON.parse(response[0].root_cause_entry);
                            var count = 0;
                            rootCauseEntries.forEach(function (rootCause) {
        
                                var review = rootCause.rootcause_acceptable_review !== undefined ? rootCause.rootcause_acceptable_review : '';
                                var verification = rootCause.rootcause_acceptable_verification !== undefined ? rootCause.rootcause_acceptable_verification : '';
                                var validation = rootCause.rootcause_acceptable_validation !== undefined ? rootCause.rootcause_acceptable_validation : '';
        
                                var review_remarks = rootCause.rootcause_acceptable_remarks_review !== undefined ? rootCause.rootcause_acceptable_remarks_review : '';
                                var verification_remarks = rootCause.rootcause_acceptable_remarks_verification !== undefined ? rootCause.rootcause_acceptable_remarks_verification : '';
                                var validation_remarks = rootCause.rootcause_acceptable_remarks_validation !== undefined ? rootCause.rootcause_acceptable_remarks_validation : '';
        
        
                                var approvalValue = rootCause.rootcause_acceptable_approval !== undefined ? rootCause.rootcause_acceptable_approval : ''; // Added
                                var remarksReview = rootCause.rootcause_acceptable_remarks_approval !== undefined ? rootCause.rootcause_acceptable_remarks_approval : ''; // Added
        
                                var rootCauseHtml = `
                                    <div class="col-lg-12 rootcause-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Root Cause Analysis Used</label>
                                                                <input type="text" class="form-control" readonly name="rootcause[]" value="${rootCause.rootcause}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">File Name</label>
                                                                <input type="text" class="form-control" readonly name="rootcause_file_name[]" value="${rootCause.rootcause_file_name}">
                                                            </div>
                                                        </div>
                                                        <<div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="hidden" name="rootcause_attachments[]" value="${rootCause.rootcause_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                            
                                                    </div>
        
                                                    <div class="row">
                                                        <label for="acceptable" class="form-label">Acceptable</label>
        
                                                            <input type="hidden" value="${review}" name="rootcause_acceptable_review[${count}]">
                                                            <input type="hidden" value="${verification}" name="rootcause_acceptable_verification[${count}]">
                                                            <input type="hidden" value="${validation}" name="rootcause_acceptable_validation[${count}]">
        
                                                            <input type="hidden" value="${review_remarks}" name="rootcause_acceptable_remarks_review[${count}]">
                                                            <input type="hidden" value="${verification_remarks}" name="rootcause_acceptable_remarks_verification[${count}]">
                                                            <input type="hidden" value="${validation_remarks}" name="rootcause_acceptable_remarks_validation[${count}]">
        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="rootcause_acceptable_approval[${count}]" value="1" class="form-check-input" ${approvalValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="rootcause_acceptable_approval">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="rootcause_acceptable_approval[${count}]" value="0" class="form-check-input" ${approvalValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="rootcause_acceptable_approval">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="rootcause_acceptable_remarks_approval" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="rootcause_acceptable_remarks_approval[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the root cause HTML to the container
                                count++;
                                $('#rootcause-approval').append(rootCauseHtml);
                            });
        
        
                            var identifiedRootEntries = JSON.parse(response[0].identified_root_entry);
                            var count = 0;
                            identifiedRootEntries.forEach(function (identifiedRoot) {
        
                                var issued_by = '';
                                var issued_to = '';
                                var section_name = '';
        
                                var review = identifiedRoot.identified_root_acceptable_review !== undefined ? identifiedRoot.identified_root_acceptable_review : '';
                                var verification = identifiedRoot.identified_root_acceptable_verification !== undefined ? identifiedRoot.identified_root_acceptable_verification : '';
                                var validation = identifiedRoot.identified_root_acceptable_validation !== undefined ? identifiedRoot.identified_root_acceptable_validation : '';
                                
                                var review_remarks = identifiedRoot.identified_root_acceptable_remarks_review !== undefined ? identifiedRoot.identified_root_acceptable_remarks_review : '';
                                var verification_remarks = identifiedRoot.identified_root_acceptable_remarks_verification !== undefined ? identifiedRoot.identified_root_acceptable_remarks_verification : '';
                                var validation_remarks = identifiedRoot.identified_root_acceptable_remarks_validation !== undefined ? identifiedRoot.identified_root_acceptable_remarks_validation : '';
        
                                var approvalValue = identifiedRoot.identified_root_acceptable_approval !== undefined ? identifiedRoot.identified_root_acceptable_approval : ''; // Added
                                var remarksReview = identifiedRoot.identified_root_acceptable_remarks_approval !== undefined ? identifiedRoot.identified_root_acceptable_remarks_approval : ''; // Added
        
                                
                                if(identifiedRoot.tpn_issued_by){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getDivisionByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_issued_by},
                                        success: function (response) {
                                            response = JSON.parse(response);
        
                                            if(response[0]){
                                                 issued_by = response[0].div_name;
                                            }
                                        }
                                    });
                                }
        
                                if(identifiedRoot.tpn_issued_to){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getDepartmentByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_issued_to},
                                        success: function (response) {
                                            response = JSON.parse(response);
                                            if(response[0]){
                                                 issued_to = response[0].dep_name;
                                            }
                                        }
                                    });
                                }
                                
                                if(identifiedRoot.section){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getSectionByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.section},
                                        success: function (response) {
                                            response = JSON.parse(response);
                                            if(response[0]){
                                                 section_name = response[0].section_name;
                                            }
                                        }
                                    });
                                }
        
                                setTimeout(function() {
        
                                var identifiedRootHtml = `
                                    <div class="col-lg-12 identified-root-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Identified Root Cause</label>
                                                                <input type="text" readonly class="form-control" name="identified_root[]" value="${identifiedRoot.identified_root}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">TPN Control</label>
                                                                <input type="text" readonly class="form-control" name="tpn_control[]" value="${identifiedRoot.tpn_control}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Corrective Action</label>
                                                                <input type="text" readonly class="form-control" name="identified_root_corrective_action[]" value="${identifiedRoot.identified_root_corrective_action}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="form-group">
                                                                <label for="issued_by" class="form-label">Issued By</label>
                                                                <input type="text" readonly class="form-control" name="tpn_issued_by[${count}]" value="${issued_by}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3 mb-1">
                                                            <div class="form-group">
                                                                <label for="issued_to" class="form-label">Issued To</label>
                                                                <input type="text" readonly class="form-control" name="tpn_issued_to[${count}]" value="${issued_to}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3 mb-1">
                                                            <div class="form-group">
                                                                <label for="section" class="form-label">Section Unit</label>
                                                                <input type="text" readonly class="form-control" name="section[${count}]" value="${section_name}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Person Responsible</label>
                                                                <input type="text" readonly class="form-control" name="identified_root_person_responsible[]" placeholder="Enter Name of personnel" value="${identifiedRoot.identified_root_person_responsible}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Completion Date</label>
                                                                <input type="date" readonly class="form-control" name="identified_root_completion_date[]" value="${identifiedRoot.identified_root_completion_date}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="hidden" name="identified_attachments[]" value="${identifiedRoot.identified_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <label for="acceptable" class="form-label">Acceptable</label>
        
                                                            <input type="hidden" value="${review}" name="identified_root_acceptable_review[${count}]">
                                                            <input type="hidden" value="${verification}" name="identified_root_acceptable_verification[${count}]">
                                                            <input type="hidden" value="${validation}" name="identified_root_acceptable_validation[${count}]">
        
                                                            <input type="hidden" value="${review_remarks}" name="identified_root_acceptable_remarks_review[${count}]">
                                                            <input type="hidden" value="${verification_remarks}" name="identified_root_acceptable_remarks_verification[${count}]">
                                                            <input type="hidden" value="${validation_remarks}" name="identified_root_acceptable_remarks_validation[${count}]">
        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="identified_root_acceptable_approval[${count}]" value="1" class="form-check-input" ${approvalValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="identified_root_acceptable_approval">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="identified_root_acceptable_approval[${count}]" value="0" class="form-check-input" ${approvalValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="identified_root_acceptable_approval">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="identified_root_acceptable_remarks_approval" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="identified_root_acceptable_remarks_approval[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the identified root HTML to the container
                                count++;
                                $('#identified-root-approval').append(identifiedRootHtml);
                                }, 3000);
                            });
        
                        }
        
                    }   
        
                    
              
        
        
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
        });

        $('#car-global-datatable').on('click', '.for-osqm-verification-corrective-action', function () {

            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            

            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
        
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 

            division = jQuery('.addCARFormIssuance .issued_by').val();

            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){

                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;

                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });

                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);

                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });

                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });

            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#risk-number-verification').empty();
            $('#opportunity-number-verification').empty();
            $('#rootcause-verification').empty();
            $('#identified-root-verification').empty();
        
            $.ajax({
                type: 'POST',
                url: '../car/getCorrectiveAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != 'null'){
                        
                        response = JSON.parse(response);
        
                        if(response[0]){
                            $('input[name="existing_nonconformity"][value="'+ response[0].existing_nonconformity +'"]').prop('checked', true);
                            $('input[name="update_doc_info"][value="'+ response[0].update_doc_info +'"]').prop('checked', true);
                            $('input[name="opportunity_identified_yn"][value="'+ response[0].opportunity_identified +'"]').prop('checked', true);
        
                            $('[name="existing_nonconformity_remarks"]').val(response[0].existing_nonconformity_remarks);
                            $('[name="update_doc_info_remarks"]').val(response[0].update_doc_info_remarks);

                            var verification_action_root_cause_analysis = response[0].verification_action_root_cause_analysis;
                            var verification_action_root_cause_analysis_remarks = response[0].verification_action_root_cause_analysis_remarks;

                            jQuery('.verification_action_root_cause_analysis').val(verification_action_root_cause_analysis);
                            jQuery('.verification_action_root_cause_analysis_remarks').val(verification_action_root_cause_analysis_remarks);
        
                            var riskEntries = JSON.parse(response[0].risk_entry);
        
                            
        
                            var count = 0;
                            riskEntries.forEach(function (risk) {
        
                                var review = risk.risk_number_acceptable_review !== undefined ? risk.risk_number_acceptable_review : '';
                                var approval = risk.risk_number_acceptable_approval !== undefined ? risk.risk_number_acceptable_approval : '';
                                var validation = risk.risk_number_acceptable_validation !== undefined ? risk.risk_number_acceptable_validation : ''
        
                                var review_remarks = risk.risk_number_acceptable_remarks_review !== undefined ? risk.risk_number_acceptable_remarks_review : '';
                                var approval_remarks = risk.risk_number_acceptable_remarks_approval !== undefined ? risk.risk_number_acceptable_remarks_approval : '';
                                var validation_remarks = risk.risk_number_acceptable_remarks_validation !== undefined ? risk.risk_number_acceptable_remarks_validation : '';
        
                                var verificationValue = risk.risk_number_acceptable_verification !== undefined ? risk.risk_number_acceptable_verification : ''; // Added
                                var remarksReview = risk.risk_number_acceptable_remarks_verification !== undefined ? risk.risk_number_acceptable_remarks_verification : ''; // Added
        
                                var riskHtml = `
                                    <div class="col-lg-12 risk-number-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Risk Number</label>
                                                                <input type="text" class="form-control" readonly name="risk_number[]" value="${risk.risk_number}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Details / Updates</label>
                                                                <input type="text" class="form-control" readonly name="risk_number_details_update[]" value="${risk.risk_number_details_update}">
                                                            </div>
                                                        </div>
                                     
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="hidden" name="risk_attachments[]" value="${risk.risk_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
        
                                                        <div class="row">
                                                            <label for="acceptable" class="form-label">Acceptable</label>
        
                                                            <input type="hidden" value="${review}" name="risk_number_acceptable_review[${count}]">
                                                            <input type="hidden" value="${approval}" name="risk_number_acceptable_approval[${count}]">
                                                            <input type="hidden" value="${validation}" name="risk_number_acceptable_validation[${count}]">
        
                                                            <input type="hidden" value="${review_remarks}" name="risk_number_acceptable_remarks_review[${count}]">
                                                            <input type="hidden" value="${approval_remarks}" name="risk_number_acceptable_remarks_approval[${count}]">
                                                            <input type="hidden" value="${validation_remarks}" name="risk_number_acceptable_remarks_validation[${count}]">
                                                            
                                                            <div class="col-lg-3 text-inlign mb-2">
                                                                <div class="form-check form-check-inline">
                                                                    <input type="radio" name="risk_number_acceptable_verification[${count}]" value="1" class="form-check-input" ${verificationValue === '1' ? 'checked' : ''}>
                                                                    <label class="form-check-label" for="risk_number_acceptable_verification">YES</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input type="radio" name="risk_number_acceptable_verification[${count}]" value="0" class="form-check-input" ${verificationValue === '0' ? 'checked' : ''}>
                                                                    <label class="form-check-label" for="risk_number_acceptable_verification">NO</label>
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-lg-12">
                                                                <label for="risk_number_acceptable_remarks_verification" class="form-label">Remarks</label>
                                                                <textarea class="form-control" name="risk_number_acceptable_remarks_verification[${count}]" rows="4">${remarksReview}</textarea>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the risk HTML to the container
        
                                count++;
                                $('#risk-number-verification').append(riskHtml);
                            });
        
        
                            var opportunityEntries = JSON.parse(response[0].opportunity_entry);
                            
                            var count = 0;
                            opportunityEntries.forEach(function (opportunity) {
        
                                var review = opportunity.opportunity_number_acceptable_review !== undefined ? opportunity.risk_number_acceptable_review : '';
                                var approval = opportunity.opportunity_number_acceptable_approval !== undefined ? opportunity.opportunity_number_acceptable_approval : '';
                                var validation = opportunity.opportunity_number_acceptable_validation !== undefined ? opportunity.opportunity_number_acceptable_validation : '';
        
                                var review_remarks = opportunity.opportunity_number_acceptable_remarks_review !== undefined ? opportunity.risk_number_acceptable_remarks_review : '';
                                var approval_remarks = opportunity.opportunity_number_acceptable_remarks_approval !== undefined ? opportunity.opportunity_number_acceptable_remarks_approval : '';
                                var validation_remarks = opportunity.opportunity_number_acceptable_remarks_validation !== undefined ? opportunity.opportunity_number_acceptable_remarks_validation : '';
        
        
                                var verificationValue = opportunity.opportunity_number_acceptable_verification !== undefined ? opportunity.opportunity_number_acceptable_verification : ''; // Added
                                var remarksReview = opportunity.opportunity_number_acceptable_remarks_verification !== undefined ? opportunity.opportunity_number_acceptable_remarks_verification : ''; // Added
        
                                var opportunityHtml = `
                                    <div class="col-lg-12 opportunity-number-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Opportunity Number</label>
                                                                <input type="text" class="form-control" readonly name="opportunity_number[]" value="${opportunity.opportunity_number}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Opportunities Identified (if applicable)</label>
                                                                <input type="text" class="form-control" readonly name="opportunity_identified[]" value="${opportunity.opportunity_identified}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="hidden" name="opportunity_attachments[]" value="${opportunity.opportunity_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                        
                                                    </div>
                                                    <div class="row">
                                                        <label for="acceptable" class="form-label">Acceptable</label>
        
                                                            <input type="hidden" value="${review}" name="opportunity_number_acceptable_review[${count}]">
                                                            <input type="hidden" value="${approval}" name="opportunity_number_acceptable_approval[${count}]">
                                                            <input type="hidden" value="${validation}" name="opportunity_number_acceptable_validation[${count}]">
        
                                                            <input type="hidden" value="${review_remarks}" name="opportunity_number_acceptable_remarks_review[${count}]">
                                                            <input type="hidden" value="${approval_remarks}" name="opportunity_number_acceptable_remarks_approval[${count}]">
                                                            <input type="hidden" value="${validation_remarks}" name="opportunity_number_acceptable_remarks_validation[${count}]">
        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="opportunity_number_acceptable_verification[${count}]" value="1" class="form-check-input" ${verificationValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="opportunity_number_acceptable_verification">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="opportunity_number_acceptable_verification[${count}]" value="0" class="form-check-input" ${verificationValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="opportunity_number_acceptable_verification">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="opportunity_number_acceptable_remarks_verification" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="opportunity_number_acceptable_remarks_verification[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the opportunity HTML to the container
                                count++;
                                $('#opportunity-number-verification').append(opportunityHtml);
                            });
        
        
                            var rootCauseEntries = JSON.parse(response[0].root_cause_entry);
                            var count = 0;
                            rootCauseEntries.forEach(function (rootCause) {
        
                                var review = rootCause.rootcause_acceptable_review !== undefined ? rootCause.rootcause_acceptable_review : '';
                                var approval = rootCause.rootcause_acceptable_approval !== undefined ? rootCause.rootcause_acceptable_approval : '';
                                var validation = rootCause.rootcause_acceptable_validation !== undefined ? rootCause.rootcause_acceptable_validation : '';
        
                                var review_remarks = rootCause.rootcause_acceptable_remarks_review !== undefined ? rootCause.rootcause_acceptable_remarks_review : '';
                                var approval_remarks = rootCause.rootcause_acceptable_remarks_approval !== undefined ? rootCause.rootcause_acceptable_remarks_approval : '';
                                var validation_remarks = rootCause.rootcause_acceptable_remarks_validation !== undefined ? rootCause.rootcause_acceptable_remarks_validation : '';
        
        
                                var verificationValue = rootCause.rootcause_acceptable_verification !== undefined ? rootCause.rootcause_acceptable_verification : ''; // Added
                                var remarksReview = rootCause.rootcause_acceptable_remarks_verification !== undefined ? rootCause.rootcause_acceptable_remarks_verification : ''; // Added
        
                                var rootCauseHtml = `
                                    <div class="col-lg-12 rootcause-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Root Cause Analysis Used</label>
                                                                <input type="text" class="form-control" readonly name="rootcause[]" value="${rootCause.rootcause}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">File Name</label>
                                                                <input type="text" class="form-control" readonly name="rootcause_file_name[]" value="${rootCause.rootcause_file_name}">
                                                            </div>
                                                        </div>
                                                        <<div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="hidden" name="rootcause_attachments[]" value="${rootCause.rootcause_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                            
                                                    </div>
        
                                                    <div class="row">
                                                        <label for="acceptable" class="form-label">Acceptable</label>
        
                                                            <input type="hidden" value="${review}" name="rootcause_acceptable_review[${count}]">
                                                            <input type="hidden" value="${approval}" name="rootcause_acceptable_approval[${count}]">
                                                            <input type="hidden" value="${validation}" name="rootcause_acceptable_validation[${count}]">
        
                                                            <input type="hidden" value="${review_remarks}" name="rootcause_acceptable_remarks_review[${count}]">
                                                            <input type="hidden" value="${approval_remarks}" name="rootcause_acceptable_remarks_approval[${count}]">
                                                            <input type="hidden" value="${validation_remarks}" name="rootcause_acceptable_remarks_validation[${count}]">
        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="rootcause_acceptable_verification[${count}]" value="1" class="form-check-input" ${verificationValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="rootcause_acceptable_verification">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="rootcause_acceptable_verification[${count}]" value="0" class="form-check-input" ${verificationValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="rootcause_acceptable_verification">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="rootcause_acceptable_remarks_verification" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="rootcause_acceptable_remarks_verification[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the root cause HTML to the container
                                count++;
                                $('#rootcause-verification').append(rootCauseHtml);
                            });
        
        
                            var identifiedRootEntries = JSON.parse(response[0].identified_root_entry);
                            var count = 0;
                            identifiedRootEntries.forEach(function (identifiedRoot) {
        
                                var issued_by = '';
                                var issued_to = '';
                                var section_name = '';
        
                                var review = identifiedRoot.identified_root_acceptable_review !== undefined ? identifiedRoot.identified_root_acceptable_review : '';
                                var approval = identifiedRoot.identified_root_acceptable_approval !== undefined ? identifiedRoot.identified_root_acceptable_approval : '';
                                var validation = identifiedRoot.identified_root_acceptable_validation !== undefined ? identifiedRoot.identified_root_acceptable_validation : '';
                                
                                var review_remarks = identifiedRoot.identified_root_acceptable_remarks_review !== undefined ? identifiedRoot.identified_root_acceptable_remarks_review : '';
                                var approval_remarks = identifiedRoot.identified_root_acceptable_remarks_approval !== undefined ? identifiedRoot.identified_root_acceptable_remarks_approval : '';
                                var validation_remarks = identifiedRoot.identified_root_acceptable_remarks_validation !== undefined ? identifiedRoot.identified_root_acceptable_remarks_validation : '';
        
                                var verificationValue = identifiedRoot.identified_root_acceptable_verification !== undefined ? identifiedRoot.identified_root_acceptable_verification : ''; // Added
                                var remarksReview = identifiedRoot.identified_root_acceptable_remarks_verification !== undefined ? identifiedRoot.identified_root_acceptable_remarks_verification : ''; // Added
        
                                
                                if(identifiedRoot.tpn_issued_by){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getDivisionByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_issued_by},
                                        success: function (response) {
                                            response = JSON.parse(response);
        
                                            if(response[0]){
                                                 issued_by = response[0].div_name;
                                            }
                                        }
                                    });
                                }
        
                                if(identifiedRoot.tpn_issued_to){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getDepartmentByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_issued_to},
                                        success: function (response) {
                                            response = JSON.parse(response);
                                            if(response[0]){
                                                 issued_to = response[0].dep_name;
                                            }
                                        }
                                    });
                                }
                                
                                if(identifiedRoot.section){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getSectionByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.section},
                                        success: function (response) {
                                            response = JSON.parse(response);
                                            if(response[0]){
                                                 section_name = response[0].section_name;
                                            }
                                        }
                                    });
                                }
        
                                setTimeout(function() {
        
                                var identifiedRootHtml = `
                                    <div class="col-lg-12 identified-root-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Identified Root Cause</label>
                                                                <input type="text" readonly class="form-control" name="identified_root[]" value="${identifiedRoot.identified_root}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">TPN Control</label>
                                                                <input type="text" readonly class="form-control" name="tpn_control[]" value="${identifiedRoot.tpn_control}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Corrective Action</label>
                                                                <input type="text" readonly class="form-control" name="identified_root_corrective_action[]" value="${identifiedRoot.identified_root_corrective_action}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="form-group">
                                                                <label for="issued_by" class="form-label">Issued By</label>
                                                                <input type="text" readonly class="form-control" name="tpn_issued_by[${count}]" value="${issued_by}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3 mb-1">
                                                            <div class="form-group">
                                                                <label for="issued_to" class="form-label">Issued To</label>
                                                                <input type="text" readonly class="form-control" name="tpn_issued_to[${count}]" value="${issued_to}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3 mb-1">
                                                            <div class="form-group">
                                                                <label for="section" class="form-label">Section Unit</label>
                                                                <input type="text" readonly class="form-control" name="section[${count}]" value="${section_name}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Person Responsible</label>
                                                                <input type="text" readonly class="form-control" name="identified_root_person_responsible[]" placeholder="Enter Name of personnel" value="${identifiedRoot.identified_root_person_responsible}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Completion Date</label>
                                                                <input type="date" readonly class="form-control" name="identified_root_completion_date[]" value="${identifiedRoot.identified_root_completion_date}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="hidden" name="identified_attachments[]" value="${identifiedRoot.identified_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <label for="acceptable" class="form-label">Acceptable</label>
        
                                                            <input type="hidden" value="${review}" name="identified_root_acceptable_review[${count}]">
                                                            <input type="hidden" value="${approval}" name="identified_root_acceptable_approval[${count}]">
                                                            <input type="hidden" value="${validation}" name="identified_root_acceptable_validation[${count}]">
        
                                                            <input type="hidden" value="${review_remarks}" name="identified_root_acceptable_remarks_review[${count}]">
                                                            <input type="hidden" value="${approval_remarks}" name="identified_root_acceptable_remarks_approval[${count}]">
                                                            <input type="hidden" value="${validation_remarks}" name="identified_root_acceptable_remarks_validation[${count}]">
        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="identified_root_acceptable_verification[${count}]" value="1" class="form-check-input" ${verificationValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="identified_root_acceptable_verification">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="identified_root_acceptable_verification[${count}]" value="0" class="form-check-input" ${verificationValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="identified_root_acceptable_verification">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="identified_root_acceptable_remarks_verification" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="identified_root_acceptable_remarks_verification[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the identified root HTML to the container
                                count++;
                                $('#identified-root-verification').append(identifiedRootHtml);
                                }, 3000);
                            });
        
                        }
        
                    }   
        
                    
              
        
        
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
        });

        $('#car-global-datatable').on('click', '.for-osqm-validation-corrective-action', function () {

            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');
            

            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
        
            jQuery('.addCARFormIssuance .car_id').val($car_id);
            jQuery('.addCARFormIssuance .requestor').val($requestor);
            jQuery('.addCARFormIssuance .car_no').val($car_no);
            jQuery('.addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('.addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('.addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('.addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('.addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('.addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 

            division = jQuery('.addCARFormIssuance .issued_by').val();

            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){

                        $('.addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;

                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('.addCARFormIssuance .issued_to').append(html);
                        });

                        jQuery('.addCARFormIssuance .issued_to').val($issued_to);

                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('.addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('.addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('.addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });

                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });

            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);
            $('#risk-number-validation').empty();
            $('#opportunity-number-validation').empty();
            $('#rootcause-validation').empty();
            $('#identified-root-validation').empty();
        
            $.ajax({
                type: 'POST',
                url: '../car/getCorrectiveAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != 'null'){
                        
                        response = JSON.parse(response);
        
                        if(response[0]){
                            $('input[name="existing_nonconformity"][value="'+ response[0].existing_nonconformity +'"]').prop('checked', true);
                            $('input[name="update_doc_info"][value="'+ response[0].update_doc_info +'"]').prop('checked', true);
                            $('input[name="opportunity_identified_yn"][value="'+ response[0].opportunity_identified +'"]').prop('checked', true);
        
                            $('[name="existing_nonconformity_remarks"]').val(response[0].existing_nonconformity_remarks);
                            $('[name="update_doc_info_remarks"]').val(response[0].update_doc_info_remarks);
        
                            var validation_action_root_cause_analysis = response[0].validation_action_root_cause_analysis;
                            var validation_action_root_cause_analysis_remarks = response[0].validation_action_root_cause_analysis_remarks;

                            jQuery('.validation_action_root_cause_analysis').val(validation_action_root_cause_analysis);
                            jQuery('.validation_action_root_cause_analysis_remarks').val(validation_action_root_cause_analysis_remarks);

                            var riskEntries = JSON.parse(response[0].risk_entry);
        
        
                            var count = 0;
                            riskEntries.forEach(function (risk) {
        
                                var review = risk.risk_number_acceptable_review !== undefined ? risk.risk_number_acceptable_review : '';
                                var approval = risk.risk_number_acceptable_approval !== undefined ? risk.risk_number_acceptable_approval : '';
                                var verification = risk.risk_number_acceptable_verification !== undefined ? risk.risk_number_acceptable_verification : ''
        
                                var review_remarks = risk.risk_number_acceptable_remarks_review !== undefined ? risk.risk_number_acceptable_remarks_review : '';
                                var approval_remarks = risk.risk_number_acceptable_remarks_approval !== undefined ? risk.risk_number_acceptable_remarks_approval : '';
                                var verification_remarks = risk.risk_number_acceptable_remarks_verification !== undefined ? risk.risk_number_acceptable_remarks_verification : '';
        
                                var validationValue = risk.risk_number_acceptable_validation !== undefined ? risk.risk_number_acceptable_validation : ''; // Added
                                var remarksReview = risk.risk_number_acceptable_remarks_validation !== undefined ? risk.risk_number_acceptable_remarks_validation : ''; // Added
        
                                var riskHtml = `
                                    <div class="col-lg-12 risk-number-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Risk Number</label>
                                                                <input type="text" class="form-control" readonly name="risk_number[]" value="${risk.risk_number}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Details / Updates</label>
                                                                <input type="text" class="form-control" readonly name="risk_number_details_update[]" value="${risk.risk_number_details_update}">
                                                            </div>
                                                        </div>
                                     
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="hidden" name="risk_attachments[]" value="${risk.risk_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
        
                                                        <div class="row">
                                                            <label for="acceptable" class="form-label">Acceptable</label>
        
                                                            <input type="hidden" value="${review}" name="risk_number_acceptable_review[${count}]">
                                                            <input type="hidden" value="${approval}" name="risk_number_acceptable_approval[${count}]">
                                                            <input type="hidden" value="${verification}" name="risk_number_acceptable_verification[${count}]">
        
                                                            <input type="hidden" value="${review_remarks}" name="risk_number_acceptable_remarks_review[${count}]">
                                                            <input type="hidden" value="${approval_remarks}" name="risk_number_acceptable_remarks_approval[${count}]">
                                                            <input type="hidden" value="${verification_remarks}" name="risk_number_acceptable_remarks_verification[${count}]">
                                                            
                                                            <div class="col-lg-3 text-inlign mb-2">
                                                                <div class="form-check form-check-inline">
                                                                    <input type="radio" name="risk_number_acceptable_validation[${count}]" value="1" class="form-check-input" ${validationValue === '1' ? 'checked' : ''}>
                                                                    <label class="form-check-label" for="risk_number_acceptable_validation">YES</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input type="radio" name="risk_number_acceptable_validation[${count}]" value="0" class="form-check-input" ${validationValue === '0' ? 'checked' : ''}>
                                                                    <label class="form-check-label" for="risk_number_acceptable_validation">NO</label>
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-lg-12">
                                                                <label for="risk_number_acceptable_remarks_validation" class="form-label">Remarks</label>
                                                                <textarea class="form-control" name="risk_number_acceptable_remarks_validation[${count}]" rows="4">${remarksReview}</textarea>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the risk HTML to the container
        
                                count++;
                                $('#risk-number-validation').append(riskHtml);
                            });
        
        
                            var opportunityEntries = JSON.parse(response[0].opportunity_entry);
                            
                            var count = 0;
                            opportunityEntries.forEach(function (opportunity) {
        
                                var review = opportunity.opportunity_number_acceptable_review !== undefined ? opportunity.risk_number_acceptable_review : '';
                                var approval = opportunity.opportunity_number_acceptable_approval !== undefined ? opportunity.opportunity_number_acceptable_approval : '';
                                var verification = opportunity.opportunity_number_acceptable_verification !== undefined ? opportunity.opportunity_number_acceptable_verification : '';
        
                                var review_remarks = opportunity.opportunity_number_acceptable_remarks_review !== undefined ? opportunity.risk_number_acceptable_remarks_review : '';
                                var approval_remarks = opportunity.opportunity_number_acceptable_remarks_approval !== undefined ? opportunity.opportunity_number_acceptable_remarks_approval : '';
                                var verification_remarks = opportunity.opportunity_number_acceptable_remarks_verification !== undefined ? opportunity.opportunity_number_acceptable_remarks_verification : '';
        
        
                                var validationValue = opportunity.opportunity_number_acceptable_validation !== undefined ? opportunity.opportunity_number_acceptable_validation : ''; // Added
                                var remarksReview = opportunity.opportunity_number_acceptable_remarks_validation !== undefined ? opportunity.opportunity_number_acceptable_remarks_validation : ''; // Added
        
                                var opportunityHtml = `
                                    <div class="col-lg-12 opportunity-number-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Opportunity Number</label>
                                                                <input type="text" class="form-control" readonly name="opportunity_number[]" value="${opportunity.opportunity_number}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Opportunities Identified (if applicable)</label>
                                                                <input type="text" class="form-control" readonly name="opportunity_identified[]" value="${opportunity.opportunity_identified}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="hidden" name="opportunity_attachments[]" value="${opportunity.opportunity_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                        
                                                    </div>
                                                    <div class="row">
                                                        <label for="acceptable" class="form-label">Acceptable</label>
        
                                                            <input type="hidden" value="${review}" name="opportunity_number_acceptable_review[${count}]">
                                                            <input type="hidden" value="${approval}" name="opportunity_number_acceptable_approval[${count}]">
                                                            <input type="hidden" value="${verification}" name="opportunity_number_acceptable_verification[${count}]">
        
                                                            <input type="hidden" value="${review_remarks}" name="opportunity_number_acceptable_remarks_review[${count}]">
                                                            <input type="hidden" value="${approval_remarks}" name="opportunity_number_acceptable_remarks_approval[${count}]">
                                                            <input type="hidden" value="${verification_remarks}" name="opportunity_number_acceptable_remarks_verification[${count}]">
        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="opportunity_number_acceptable_validation[${count}]" value="1" class="form-check-input" ${validationValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="opportunity_number_acceptable_validation">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="opportunity_number_acceptable_validation[${count}]" value="0" class="form-check-input" ${validationValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="opportunity_number_acceptable_validation">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="opportunity_number_acceptable_remarks_validation" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="opportunity_number_acceptable_remarks_validation[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the opportunity HTML to the container
                                count++;
                                $('#opportunity-number-validation').append(opportunityHtml);
                            });
        
        
                            var rootCauseEntries = JSON.parse(response[0].root_cause_entry);
                            var count = 0;
                            rootCauseEntries.forEach(function (rootCause) {
        
                                var review = rootCause.rootcause_acceptable_review !== undefined ? rootCause.rootcause_acceptable_review : '';
                                var approval = rootCause.rootcause_acceptable_approval !== undefined ? rootCause.rootcause_acceptable_approval : '';
                                var verification = rootCause.rootcause_acceptable_verification !== undefined ? rootCause.rootcause_acceptable_verification : '';
        
                                var review_remarks = rootCause.rootcause_acceptable_remarks_review !== undefined ? rootCause.rootcause_acceptable_remarks_review : '';
                                var approval_remarks = rootCause.rootcause_acceptable_remarks_approval !== undefined ? rootCause.rootcause_acceptable_remarks_approval : '';
                                var verification_remarks = rootCause.rootcause_acceptable_remarks_verification !== undefined ? rootCause.rootcause_acceptable_remarks_verification : '';
        
        
                                var validationValue = rootCause.rootcause_acceptable_validation !== undefined ? rootCause.rootcause_acceptable_validation : ''; // Added
                                var remarksReview = rootCause.rootcause_acceptable_remarks_validation !== undefined ? rootCause.rootcause_acceptable_remarks_validation : ''; // Added
        
                                var rootCauseHtml = `
                                    <div class="col-lg-12 rootcause-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Root Cause Analysis Used</label>
                                                                <input type="text" class="form-control" readonly name="rootcause[]" value="${rootCause.rootcause}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">File Name</label>
                                                                <input type="text" class="form-control" readonly name="rootcause_file_name[]" value="${rootCause.rootcause_file_name}">
                                                            </div>
                                                        </div>
                                                        <<div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="hidden" name="rootcause_attachments[]" value="${rootCause.rootcause_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                            
                                                    </div>
        
                                                    <div class="row">
                                                        <label for="acceptable" class="form-label">Acceptable</label>
        
                                                            <input type="hidden" value="${review}" name="rootcause_acceptable_review[${count}]">
                                                            <input type="hidden" value="${approval}" name="rootcause_acceptable_approval[${count}]">
                                                            <input type="hidden" value="${verification}" name="rootcause_acceptable_verification[${count}]">
        
                                                            <input type="hidden" value="${review_remarks}" name="rootcause_acceptable_remarks_review[${count}]">
                                                            <input type="hidden" value="${approval_remarks}" name="rootcause_acceptable_remarks_approval[${count}]">
                                                            <input type="hidden" value="${verification_remarks}" name="rootcause_acceptable_remarks_verification[${count}]">
        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="rootcause_acceptable_validation[${count}]" value="1" class="form-check-input" ${validationValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="rootcause_acceptable_validation">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="rootcause_acceptable_validation[${count}]" value="0" class="form-check-input" ${validationValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="rootcause_acceptable_validation">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="rootcause_acceptable_remarks_validation" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="rootcause_acceptable_remarks_validation[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the root cause HTML to the container
                                count++;
                                $('#rootcause-validation').append(rootCauseHtml);
                            });
        
        
                            var identifiedRootEntries = JSON.parse(response[0].identified_root_entry);
                            var count = 0;
                            identifiedRootEntries.forEach(function (identifiedRoot) {
        
                                var issued_by = '';
                                var issued_to = '';
                                var section_name = '';
        
                                var review = identifiedRoot.identified_root_acceptable_review !== undefined ? identifiedRoot.identified_root_acceptable_review : '';
                                var approval = identifiedRoot.identified_root_acceptable_approval !== undefined ? identifiedRoot.identified_root_acceptable_approval : '';
                                var verification = identifiedRoot.identified_root_acceptable_verification !== undefined ? identifiedRoot.identified_root_acceptable_verification : '';
                                
                                var review_remarks = identifiedRoot.identified_root_acceptable_remarks_review !== undefined ? identifiedRoot.identified_root_acceptable_remarks_review : '';
                                var approval_remarks = identifiedRoot.identified_root_acceptable_remarks_approval !== undefined ? identifiedRoot.identified_root_acceptable_remarks_approval : '';
                                var verification_remarks = identifiedRoot.identified_root_acceptable_remarks_verification !== undefined ? identifiedRoot.identified_root_acceptable_remarks_verification : '';
        
                                var validationValue = identifiedRoot.identified_root_acceptable_validation !== undefined ? identifiedRoot.identified_root_acceptable_validation : ''; // Added
                                var remarksReview = identifiedRoot.identified_root_acceptable_remarks_validation !== undefined ? identifiedRoot.identified_root_acceptable_remarks_validation : ''; // Added
        
                                
                                if(identifiedRoot.tpn_issued_by){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getDivisionByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_issued_by},
                                        success: function (response) {
                                            response = JSON.parse(response);
        
                                            if(response[0]){
                                                 issued_by = response[0].div_name;
                                            }
                                        }
                                    });
                                }
        
                                if(identifiedRoot.tpn_issued_to){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getDepartmentByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.tpn_issued_to},
                                        success: function (response) {
                                            response = JSON.parse(response);
                                            if(response[0]){
                                                 issued_to = response[0].dep_name;
                                            }
                                        }
                                    });
                                }
                                
                                if(identifiedRoot.section){
                                    $.ajax({
                                        type: 'POST',
                                        url: '../car/getSectionByID', // Replace 'MyController' with your controller name
                                        data: {id: identifiedRoot.section},
                                        success: function (response) {
                                            response = JSON.parse(response);
                                            if(response[0]){
                                                 section_name = response[0].section_name;
                                            }
                                        }
                                    });
                                }
        
                                setTimeout(function() {
        
                                var identifiedRootHtml = `
                                    <div class="col-lg-12 identified-root-repeatable">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Identified Root Cause</label>
                                                                <input type="text" readonly class="form-control" name="identified_root[]" value="${identifiedRoot.identified_root}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">TPN Control</label>
                                                                <input type="text" readonly class="form-control" name="tpn_control[]" value="${identifiedRoot.tpn_control}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3 mb-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Corrective Action</label>
                                                                <input type="text" readonly class="form-control" name="identified_root_corrective_action[]" value="${identifiedRoot.identified_root_corrective_action}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4 mb-1">
                                                            <div class="form-group">
                                                                <label for="issued_by" class="form-label">Issued By</label>
                                                                <input type="text" readonly class="form-control" name="tpn_issued_by[${count}]" value="${issued_by}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3 mb-1">
                                                            <div class="form-group">
                                                                <label for="issued_to" class="form-label">Issued To</label>
                                                                <input type="text" readonly class="form-control" name="tpn_issued_to[${count}]" value="${issued_to}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3 mb-1">
                                                            <div class="form-group">
                                                                <label for="section" class="form-label">Section Unit</label>
                                                                <input type="text" readonly class="form-control" name="section[${count}]" value="${section_name}">
                                                                <ul class="parsley-errors-list filled hidden"><li class="parsley-required"></li></ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Person Responsible</label>
                                                                <input type="text" readonly class="form-control" name="identified_root_person_responsible[]" placeholder="Enter Name of personnel" value="${identifiedRoot.identified_root_person_responsible}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-3">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Completion Date</label>
                                                                <input type="date" readonly class="form-control" name="identified_root_completion_date[]" value="${identifiedRoot.identified_root_completion_date}">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-1">
                                                            <div class="mb-3 mb-xl-0">
                                                                <label class="form-label">Attachment</label>
                                                                <input type="hidden" name="identified_attachments[]" value="${identifiedRoot.identified_attachments}">
                                                                <button type="button" class="btn btn-success"><i class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <label for="acceptable" class="form-label">Acceptable</label>
        
                                                            <input type="hidden" value="${review}" name="identified_root_acceptable_review[${count}]">
                                                            <input type="hidden" value="${approval}" name="identified_root_acceptable_approval[${count}]">
                                                            <input type="hidden" value="${verification}" name="identified_root_acceptable_verification[${count}]">
        
                                                            <input type="hidden" value="${review_remarks}" name="identified_root_acceptable_remarks_review[${count}]">
                                                            <input type="hidden" value="${approval_remarks}" name="identified_root_acceptable_remarks_approval[${count}]">
                                                            <input type="hidden" value="${verification_remarks}" name="identified_root_acceptable_remarks_verification[${count}]">
        
                                                        <div class="col-lg-3 text-inlign mb-2">
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="identified_root_acceptable_validation[${count}]" value="1" class="form-check-input" ${validationValue === '1' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="identified_root_acceptable_validation">YES</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" name="identified_root_acceptable_validation[${count}]" value="0" class="form-check-input" ${validationValue === '0' ? 'checked' : ''}>
                                                                <label class="form-check-label" for="identified_root_acceptable_validation">NO</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label for="identified_root_acceptable_remarks_validation" class="form-label">Remarks</label>
                                                            <textarea class="form-control" name="identified_root_acceptable_remarks_validation[${count}]" rows="4">${remarksReview}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                // Append the identified root HTML to the container
                                count++;
                                $('#identified-root-validation').append(identifiedRootHtml);
                                }, 3000);
                            });
        
                        }
        
                    }   
        
                    
              
        
        
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
        });

        
    },

    validateForm : function (){
        var isValid = true;
        
        // Check required fields
        $("#addCARForm [required]").each(function () {
            if ($(this).val() === "") {
                $(this).addClass('parsley-error');
                isValid = false;
                $(this).next('.parsley-errors-list').removeClass('hidden');
                $(this).next('.parsley-errors-list').find('.parsley-required').text('This field is required');
                // You can customize error handling here, for example, displaying an error message.
            } else {
                $(this).removeClass('parsley-error');
                $(this).next('.parsley-errors-list').addClass('hidden');
                $(this).next('.parsley-errors-list').find('.parsley-required').text('');
            }
        });
    
        return isValid;
    },

    validateFormIssuance : function (){
        var isValid = true;
        
        // Check required fields
        $("#addCARFormIssuance [required]").each(function () {
            if ($(this).val() === "") {
                $(this).addClass('parsley-error');
                isValid = false;
                $(this).next('.parsley-errors-list').removeClass('hidden');
                $(this).next('.parsley-errors-list').find('.parsley-required').text('This field is required');
                // You can customize error handling here, for example, displaying an error message.
            } else {
                $(this).removeClass('parsley-error');
                $(this).next('.parsley-errors-list').addClass('hidden');
                $(this).next('.parsley-errors-list').find('.parsley-required').text('');
            }
        });
    
        return isValid;
    },

    notifySuccess: function(){
        !(function (p) {
            "use strict";
            function t() {}
            (t.prototype.send = function (t, i, o, e, n, a, s, r) {
                var c = { heading: t, text: i, position: o, loaderBg: e, icon: n, hideAfter: (a = a || 3e3), stack: (s = s || 1) };
                r && (c.showHideTransition = r), console.log(c), p.toast().reset("all"), p.toast(c);
            }),
                (p.NotificationApp = new t()),
                (p.NotificationApp.Constructor = t);
        })(window.jQuery),
            (function (i) {
                "use strict";
                i.NotificationApp.send("Well Done!", "You successfully saved CAR", "top-right", "#5ba035", "success");
        })(window.jQuery);
    },

    notifyError: function(){
        !(function (p) {
            "use strict";
            function t() {}
            (t.prototype.send = function (t, i, o, e, n, a, s, r) {
                var c = { heading: t, text: i, position: o, loaderBg: e, icon: n, hideAfter: (a = a || 3e3), stack: (s = s || 1) };
                r && (c.showHideTransition = r), console.log(c), p.toast().reset("all"), p.toast(c);
            }),
                (p.NotificationApp = new t()),
                (p.NotificationApp.Constructor = t);
        })(window.jQuery),
            (function (i) {
                "use strict";
                i.NotificationApp.send("Oh snap!", "Change a few things up and try submitting again.", "top-right", "#bf441d", "danger");
        })(window.jQuery);
    },

    saveCar: function(){
        jQuery('#saveCar').click(function(e){
            e.preventDefault();
    
            if (car.validateForm()) {
    
                var car_no = jQuery('#car_no').val();
                var identification_date = jQuery('#identification_date').val();
                var source = jQuery('#source').val();
                var requestor = jQuery('#requestor').val();
                var issued_by = jQuery('#issued_by').val();
                var issued_to = jQuery('#issued_to').val();
                var findings = jQuery('#findings').val();
                var consequences = jQuery('#consequences').val();
                var requirements_not_fulfilled = jQuery('#requirements_not_fulfilled').val();
                
                var data = {
                    'car_no' : car_no,
                    'identification_date' : identification_date,
                    'source' : source,
                    'requestor' : requestor,
                    'issued_by' : issued_by,
                    'issued_to' : issued_to,
                    'findings' : findings,
                    'consequences' : consequences,
                    'requirements_not_fulfilled': requirements_not_fulfilled
                }
    
                jQuery("#add-car").modal('toggle');
    
                $.ajax({
                    type: 'POST',
                    url: '../car/save', // Replace 'MyController' with your controller name
                    data: data,
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            car.notifySuccess();
                            car.load();
                            $('#addCARForm')[0].reset();
                        } else {
                            car.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        car.notifyError();
                    }
                });
            }
    
        });


        jQuery('#saveCarIssuance').click(function(e){
            e.preventDefault();
    
            if (car.validateFormIssuance()) {

                var car_id = jQuery('#addCARFormIssuance .car_id').val();
                var issued_to = jQuery('#addCARFormIssuance .issued_to').val();
                var section = jQuery('#addCARFormIssuance .section').val();
                var issuance_of_nc = jQuery('#addCARFormIssuance .issuance_of_nc').val();
                var issuance_of_nc_remarks = jQuery('#addCARFormIssuance .issuance_of_nc_remarks').val();
                
                var data = {
                    'car_id' : car_id,
                    'issued_to' : issued_to,
                    'section' : section,
                    'issuance_of_nc': issuance_of_nc,
                    'issuance_of_nc_remarks': issuance_of_nc_remarks,
                }
    
                jQuery("#add-car-issuance").modal('toggle');
    
                $.ajax({
                    type: 'POST',
                    url: '../car/issuanceSave', // Replace 'MyController' with your controller name
                    data: data,
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            car.notifySuccess();
                            car.load();
                            $('#addCARFormIssuance')[0].reset();
                        } else {
                            car.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        car.notifyError();
                    }
                });
            }
    
        });



        jQuery('#saveRoot').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#root_cause_form")[0]);


            if(jQuery('#car-action.corrective-action').length){
                // Iterate over file inputs and append to formData
                $('.risk_number_attachment').each(function (index, element) {
                    var files = element.files;
                    var name = jQuery(this).attr('name');
                    for (var i = 0; i < files.length; i++) {
                        formData.append(name, files[i]);
                    }
                });

                $('.opportunity_number_attachment').each(function (index, element) {
                    var files = element.files;
                    var name = jQuery(this).attr('name');
                    for (var i = 0; i < files.length; i++) {
                        formData.append(name, files[i]);
                    }
                });

                $('.rootcause_attachment_attachment').each(function (index, element) {
                    var files = element.files;
                    var name = jQuery(this).attr('name');
                    for (var i = 0; i < files.length; i++) {
                        formData.append(name, files[i]);
                    }
                });

                $('.identified_root_attachment_attachment').each(function (index, element) {
                    var files = element.files;
                    var name = jQuery(this).attr('name');
                    for (var i = 0; i < files.length; i++) {
                        formData.append(name, files[i]);
                    }
                });

                var action = "../car/saveRoot";
            } else if(jQuery('#car-action.corrective-action-review').length){
                var action = "../car/saveRootFR";
            }

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: action, // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#root_cause_form')[0].reset();
                        $('#root-cause').modal('hide');
                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });


        });

        jQuery('#saveRootFR').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#root_cause_form_review")[0]);

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: "../car/saveRootFR", // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#root_cause_form_review')[0].reset();
                        $('#root-cause-review').modal('hide');
                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        });

        jQuery('#saveRootFA').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#root_cause_form_approval")[0]);

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: "../car/saveRootFA", // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#root_cause_form_approval')[0].reset();
                        $('#root-cause-approval').modal('hide');
                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        });

        jQuery('#saveRootFV').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#root_cause_form_verification")[0]);

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: "../car/saveRootFV", // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#root_cause_form_verification')[0].reset();
                        $('#root-cause-verification').modal('hide');
                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        });

        jQuery('#saveRootFVA').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#root_cause_form_validation")[0]);

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: "../car/saveRootFVA", // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#root_cause_form_validation')[0].reset();
                        $('#root-cause-validation').modal('hide');
                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        });


        jQuery('#saveCorrection').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#correction_form")[0]);

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: "../car/saveCorrection", // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#correction_form')[0].reset();
                        $('#corrective-action').modal('hide');

                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        });

        jQuery('#saveCorrectionFR').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#correction_form_review")[0]);

            console.log(formData);

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: "../car/saveCorrectionFR", // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#correction_form_review')[0].reset();
                        $('#corrective-action-review').modal('hide');

                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        });

        jQuery('#saveCorrectionFA').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#correction_form_approval")[0]);

            console.log(formData);

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: "../car/saveCorrectionFA", // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#correction_form_approval')[0].reset();
                        $('#corrective-action-approval').modal('hide');

                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        });

        jQuery('#saveCorrectionFV').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#correction_form_verification")[0]);

            console.log(formData);

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: "../car/saveCorrectionFV", // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#correction_form_verification')[0].reset();
                        $('#corrective-action-verification').modal('hide');

                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        });

        jQuery('#saveCorrectionFVA').click(function(e){
            e.preventDefault();

            var formData = new FormData($("#correction_form_validation")[0]);

            console.log(formData);

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: "../car/saveCorrectionFVA", // Replace with your server-side endpoint
                data: formData,
                processData: false,  // Prevent jQuery from processing the data
                contentType: false,
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        car.notifySuccess();
                        car.load();
                        $('#correction_form_validation')[0].reset();
                        $('#corrective-action-validation').modal('hide');

                    } else {
                        car.notifyError();
                    }
                },
                error: function () {
                    // Handle errors
                    car.notifyError();
                }
            });
        });



    },

    correction: function(){
        $("#add-correction").on("click", function(){
            // Clone the first .correction-repeatable div
            var clone = $(".correction-repeatable:last").clone();
            
            // Clear input values in the cloned section
            clone.find('input').val('');
    
            // Append the cloned section to the parent container
            $(".correction-repeatable:last").after(clone);
    
            // Show the remove button for the new entry
            clone.find('.remove-corrective-action').show();
    
            // Add Remove Correction button click event for the new entry
            clone.find('.remove-corrective-action').on("click", function(){
                // Check if there is more than one entry before removal
                if ($('.correction-repeatable').length > 1) {
                    $(this).closest('.correction-repeatable').remove();
                }
            });
        });
    
        // Remove Correction button click event for the initial entry
        $(".remove-corrective-action").on("click", function(){
            // Check if there is more than one entry before removal
            if ($('.correction-repeatable').length > 1) {
                $(this).closest('.correction-repeatable').remove();
            }
        });
    }, 

    consequences : function (){
        $("#add-consequences").on("click", function(){
            // Clone the first .consequences-repeatable div
            var clone = $(".consequences-repeatable:last").clone();
            
            // Clear input values in the cloned section
            clone.find('input').val('');
    
            // Append the cloned section to the parent container
            $(".consequences-repeatable:last").after(clone);
    
            // Show the remove button for the new entry
            clone.find('.remove-consequences-action').show();
    
            // Add Remove Consequences button click event for the new entry
            clone.find('.remove-consequences-action').on("click", function(){
                // Check if there is more than one entry before removal
                if ($('.consequences-repeatable').length > 1) {
                    $(this).closest('.consequences-repeatable').remove();
                }
            });
        });
    
        // Remove Consequences button click event for the initial entry
        $(".remove-consequences-action").on("click", function(){
            // Check if there is more than one entry before removal
            if ($('.consequences-repeatable').length > 1) {
                $(this).closest('.consequences-repeatable').remove();
            }
        });
    },

    riskNumber: function(){
        $("#add-risk-number").on("click", function(){
            // Clone the first .risk-number-repeatable div
            var clone = $(".risk-number-repeatable:last").clone();
            
            // Clear input values in the cloned section
            clone.find('input').val('');
    
            // Append the cloned section to the parent container
            $(".risk-number-repeatable:last").after(clone);
    
            // Show the remove button for the new entry
            clone.find('.remove-risk-number-action').show();
    
            // Add Remove Risk Number button click event for the new entry
            clone.find('.remove-risk-number-action').on("click", function(){
                // Check if there is more than one entry before removal
                if ($('.risk-number-repeatable').length > 1) {
                    $(this).closest('.risk-number-repeatable').remove();
                }
            });
        });
    
        // Remove Risk Number button click event for the initial entry
        $(".remove-risk-number-action").on("click", function(){
            // Check if there is more than one entry before removal
            if ($('.risk-number-repeatable').length > 1) {
                $(this).closest('.risk-number-repeatable').remove();
            }
        });
    },

    opportunityNumber: function (){
        $("#add-opportunity-number").on("click", function(){
            // Clone the first .opportunity-number-repeatable div
            var clone = $(".opportunity-number-repeatable:last").clone();
            
            // Clear input values in the cloned section
            clone.find('input').val('');
    
            // Append the cloned section to the parent container
            $(".opportunity-number-repeatable:last").after(clone);
    
            // Show the remove button for the new entry
            clone.find('.remove-opportunity-number-action').show();
    
            // Add Remove Opportunity Number button click event for the new entry
            clone.find('.remove-opportunity-number-action').on("click", function(){
                // Check if there is more than one entry before removal
                if ($('.opportunity-number-repeatable').length > 1) {
                    $(this).closest('.opportunity-number-repeatable').remove();
                }
            });
        });
    
        // Remove Opportunity Number button click event for the initial entry
        $(".remove-opportunity-number-action").on("click", function(){
            // Check if there is more than one entry before removal
            if ($('.opportunity-number-repeatable').length > 1) {
                $(this).closest('.opportunity-number-repeatable').remove();
            }
        });
    },

    rootCause: function(){
        $("#add-rootcause").on("click", function(){

            // Clone the first .rootcause-repeatable div
            var clone = $('#rootcause').find(".rootcause-repeatable:last").clone();
            
            // Clear input values in the cloned section
            clone.find('input').val('');
    
            // Append the cloned section to the parent container
            $('#rootcause').find(".rootcause-repeatable:last").after(clone);
    
            // Show the remove button for the new entry
            clone.find('.remove-rootcause-action').show();
    
            // Add Remove Root Cause button click event for the new entry
            clone.find('.remove-rootcause-action').on("click", function(){
                // Check if there is more than one entry before removal
                if ($('.rootcause-repeatable').length > 1) {
                    $(this).closest('.rootcause-repeatable').remove();
                }
            });
        });
    
        // Remove Root Cause button click event for the initial entry
        $(".remove-rootcause-action").on("click", function(){
            // Check if there is more than one entry before removal
            if ($('.rootcause-repeatable').length > 1) {
                $(this).closest('.rootcause-repeatable').remove();
            }
        });


        $('#identified-root').on('change', '.tpn-control', function () {

            var tpn_control = jQuery(this).val();

            console.log(tpn_control);

            if(tpn_control != 'total'){

                issued_by = jQuery(this).parent().parent().parent().find('.issued_by');
                issued_to = jQuery(this).parent().parent().parent().find('.issued_to');
                section = jQuery(this).parent().parent().parent().find('.section');

                issued_by.parent().show();
                issued_to.parent().show();
                section.parent().show();

                issued_by.change(function(){
        
                    division = jQuery(this).val();

                    issued_to = jQuery(this).parent().parent().parent().find('.issued_to');

        
                    $.ajax({
                        type: 'POST',
                        url: '../car/getDepartment', // Replace 'MyController' with your controller name
                        data: {division: division},
                        success: function (response) {
                            if(response != 'null'){
        
                                issued_to.html('<option value=""></option>');
                                $.each(JSON.parse(response), function (index, item) {
                                    // Access each item's properties
                                    var id = item.id;
                                    var dep_name = item.dep_name;
            
                                    var html = '<option value="'+id+'">'+dep_name+'</option>';
                                    // Do something with the data, for example, display it on the page
                                    issued_to.append(html);
                                });
        
                            }   
                        },
                        error: function () {
                            // Handle errors
                            diList.notifyError();
                        }
                    });
        
                }); 
                

                issued_to.change(function(){

                    section = jQuery(this).parent().parent().parent().find('.section');
                    department = jQuery(this).val();

                    $.ajax({
                        type: 'POST',
                        url: '../car/getSection', // Replace 'MyController' with your controller name
                        data: {department: department},
                        success: function (response) {
                            if(response != 'null'){
                                
                                section.html('<option value=""></option>');
                                $.each(JSON.parse(response), function (index, item) {
                                    // Access each item's properties
                                    var id = item.id;
                                    var section_name = item.section_name;
            
                                    var html = '<option value="'+id+'">'+section_name+'</option>';
                                    // Do something with the data, for example, display it on the page
                                    section.append(html);
                                });
        
                               
                            }   
                        },
                        error: function () {
                            // Handle errors
                            diList.notifyError();
                        }
                    });
                });


            } else {
                issued_by = jQuery(this).parent().parent().parent().find('.issued_by');
                issued_to = jQuery(this).parent().parent().parent().find('.issued_to');
                section = jQuery(this).parent().parent().parent().find('.section');

                issued_by.val();
                issued_to.val();
                section.val();

                issued_by.parent().hide();
                issued_to.parent().hide();
                section.parent().hide();
            }
            



        });
    },

    identifiedRoot: function(){
        $("#add-identified-root").on("click", function(){
            // Clone the first .identified-root-repeatable div
            var clone = jQuery('#identified-root').find(".identified-root-repeatable:last").clone();
            
            // Clear input values in the cloned section
            clone.find('input').val('');
    
            // Append the cloned section to the parent container
            jQuery('#identified-root').find(".identified-root-repeatable:last").after(clone);
    
            // Show the remove button for the new entry
            clone.find('.remove-identified-root-action').show();
    
            // Add Remove Identified Root Cause button click event for the new entry
            clone.find('.remove-identified-root-action').on("click", function(){
                // Check if there is more than one entry before removal
                if ($('.identified-root-repeatable').length > 1) {
                    $(this).closest('.identified-root-repeatable').remove();
                }
            });
        });
    
        // Remove Identified Root Cause button click event for the initial entry
        $(".remove-identified-root-action").on("click", function(){
            // Check if there is more than one entry before removal
            if ($('.identified-root-repeatable').length > 1) {
                $(this).closest('.identified-root-repeatable').remove();
            }
        });
    },

    carEdit: function(){
       
        $('#car-global-datatable').on('click', '.edit-car', function () {

            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $section = jQuery(this).data('section');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');
            $status = jQuery(this).data('status');

            if($status == 'For Issuance of NC'){
                jQuery('#saveCarIssuance').removeClass('hidden');
            } else {
                
                jQuery('#saveCarIssuance').addClass('hidden');
            }
            

            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
        
            jQuery('#addCARFormIssuance .car_id').val($car_id);
            jQuery('#addCARFormIssuance .requestor').val($requestor);
            jQuery('#addCARFormIssuance .car_no').val($car_no);
            jQuery('#addCARFormIssuance .source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('#addCARFormIssuance .issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('#addCARFormIssuance .issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('#addCARFormIssuance .identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('#addCARFormIssuance .issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('#addCARFormIssuance .issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('#addCARFormIssuance .findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('#addCARFormIssuance .consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('#addCARFormIssuance .requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 

            division = jQuery('#addCARFormIssuance .issued_by').val();

            $.ajax({
                type: 'POST',
                url: '../car/getDepartment', // Replace 'MyController' with your controller name
                data: {division: division},
                success: function (response) {
                    if(response != 'null'){

                        $('#addCARFormIssuance .issued_to').html('<option value=""></option>');
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var id = item.id;
                            var dep_name = item.dep_name;

                            var html = '<option value="'+id+'">'+dep_name+'</option>';
                            // Do something with the data, for example, display it on the page
                            $('#addCARFormIssuance .issued_to').append(html);
                        });

                        jQuery('#addCARFormIssuance .issued_to').val($issued_to);

                        department = $issued_to;
                        $.ajax({
                            type: 'POST',
                            url: '../car/getSection', // Replace 'MyController' with your controller name
                            data: {department: department},
                            success: function (response) {
                                if(response != 'null'){
            
                                    $('#addCARFormIssuance .section').html('<option value=""></option>');
                                    $.each(JSON.parse(response), function (index, item) {
                                        // Access each item's properties
                                        var id = item.id;
                                        var section_name = item.section_name;
                
                                        var html = '<option value="'+id+'">'+section_name+'</option>';
                                        // Do something with the data, for example, display it on the page
                                        $('#addCARFormIssuance .section').append(html);
                                    });
            
                                    jQuery('#addCARFormIssuance .section').val($section);
                                }   
                            },
                            error: function () {
                                // Handle errors
                                diList.notifyError();
                            }
                        });

                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });

        });

    },

}

jQuery(document).ready(function(){
    car.load();
    car.loadDepartment();
    car.saveCar();
    car.correction();
    car.consequences();
    car.riskNumber();
    car.opportunityNumber();
    car.rootCause();
    car.identifiedRoot();
    car.carEdit();
    car.loadCorrectiveAction();
});