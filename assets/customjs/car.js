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
                        "<a class='dropdown-item edit-corrective-action' href='#' data-car_id='" + car_id + "' data-bs-toggle='modal' data-bs-target='#root-cause'>Corrective Action</a>" +
                        "<a class='dropdown-item edit-correction-action' href='#' data-car_id='" + car_id + "' data-bs-toggle='modal' data-bs-target='#corrective-action'>Correction</a>" +
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
                            var dep_name = item.dep_name;
    
                            var html = '<option value="'+id+'">'+dep_name+'</option>';
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
                                                            <input type="text" class="form-control" name="correction[]" value="${correction.correction}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" name="correction_person_responsible[]" placeholder="Enter Name of personnel" value="${correction.correction_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-3">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" name="correction_completion_date[]" value="${correction.correction_completion_date}">
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
                                                            <input type="text" class="form-control" name="consequence[]" value="${consequence.consequence}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Person Responsible</label>
                                                            <input type="text" class="form-control" name="consequence_person_responsible[]" placeholder="Enter Name of personnel" value="${consequence.consequence_person_responsible}">
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-3">
                                                        <div class="mb-3 mb-xl-0">
                                                            <label for="exampleInputEmail1" class="form-label">Completion Date</label>
                                                            <input type="date" class="form-control" name="consequence_completion_date[]" value="${consequence.consequence_completion_date}">
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

        $('#car-global-datatable').on('click', '.edit-corrective-action', function () {

            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);

            $.ajax({
                type: 'POST',
                url: '../car/getCorrectiveAction', // Replace 'MyController' with your controller name
                data: {car_id: car_id},
                success: function (response) {
                    if(response != 'null'){

                        response = JSON.parse(response);

                        console.log(response[0].existing_nonconformity);

                        $('input[name="existing_nonconformity"][value="'+ response[0].existing_nonconformity +'"]').prop('checked', true);
                        $('input[name="update_doc_info"][value="'+ response[0].update_doc_info +'"]').prop('checked', true);
                        $('input[name="opportunity_identified_yn"][value="'+ response[0].opportunity_identified +'"]').prop('checked', true);

                        // $('#issued_to').html('<option value=""></option>');
                        // $.each(JSON.parse(response), function (index, item) {
                        //     // Access each item's properties
                        //     var id = item.id;
                        //     var dep_name = item.dep_name;

                        //     var html = '<option value="'+dep_name+'">'+dep_name+'</option>';
                        //     // Do something with the data, for example, display it on the page
                        //     $('#issued_to').append(html);
                        // });
                    }   
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
            });
        });
    },

    loadCorrectionAction: function(){

        $('#car-global-datatable').on('click', '.edit-correctiion-action', function () {

            var car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val(car_id);

            // $.ajax({
            //     type: 'POST',
            //     url: '../car/getCorrectionAction', // Replace 'MyController' with your controller name
            //     data: {car_id: car_id},
            //     success: function (response) {
            //         if(response != 'null'){

            //             response = JSON.parse(response);

            //             console.log(response[0].existing_nonconformity);

            //             $('input[name="existing_nonconformity"][value="'+ response[0].existing_nonconformity +'"]').prop('checked', true);
            //             $('input[name="update_doc_info"][value="'+ response[0].update_doc_info +'"]').prop('checked', true);
            //             $('input[name="opportunity_identified_yn"][value="'+ response[0].opportunity_identified +'"]').prop('checked', true);

            //             // $('#issued_to').html('<option value=""></option>');
            //             // $.each(JSON.parse(response), function (index, item) {
            //             //     // Access each item's properties
            //             //     var id = item.id;
            //             //     var dep_name = item.dep_name;

            //             //     var html = '<option value="'+dep_name+'">'+dep_name+'</option>';
            //             //     // Do something with the data, for example, display it on the page
            //             //     $('#issued_to').append(html);
            //             // });
            //         }   
            //     },
            //     error: function () {
            //         // Handle errors
            //         diList.notifyError();
            //     }
            // });
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

                        
            // Iterate over file inputs and append to formData
            $('[name^="risk_number_attachment[]"]').each(function (index, element) {
                var files = element.files;
                for (var i = 0; i < files.length; i++) {
                    formData.append('risk_number_attachment[]', files[i]);
                }
            });

            $('[name^="opportunity_number_attachment[]"]').each(function (index, element) {
                var files = element.files;
                for (var i = 0; i < files.length; i++) {
                    formData.append('opportunity_number_attachment[]', files[i]);
                }
            });

            $('[name^="rootcause_attachment_attachment[]"]').each(function (index, element) {
                var files = element.files;
                for (var i = 0; i < files.length; i++) {
                    formData.append('rootcause_attachment_attachment[]', files[i]);
                }
            });

            $('[name^="identified_root_attachment_attachment[]"]').each(function (index, element) {
                var files = element.files;
                for (var i = 0; i < files.length; i++) {
                    formData.append('identified_root_attachment_attachment[]', files[i]);
                }
            });


            
            console.log('FormData Content:', formData);
            console.log('Risk Number Attachment Files:', $('[name^="risk_number_attachment[]"]')[0].files);

            // Make an AJAX request to submit the form data
            $.ajax({
                type: "POST", // or "GET" depending on your server-side handling
                url: "../car/saveRoot", // Replace with your server-side endpoint
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


    },

    correction: function(){
        $("#add-correction").on("click", function(){
            // Clone the first .correction-repeatable div
            var clone = $(".correction-repeatable:first").clone();
            
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
            var clone = $(".consequences-repeatable:first").clone();
            
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
            var clone = $(".risk-number-repeatable:first").clone();
            
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
            var clone = $(".opportunity-number-repeatable:first").clone();
            
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
            var clone = $(".rootcause-repeatable:first").clone();
            
            // Clear input values in the cloned section
            clone.find('input').val('');
    
            // Append the cloned section to the parent container
            $(".rootcause-repeatable:last").after(clone);
    
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
    },

    identifiedRoot: function(){
        $("#add-identified-root").on("click", function(){
            // Clone the first .identified-root-repeatable div
            var clone = $(".identified-root-repeatable:first").clone();
            
            // Clear input values in the cloned section
            clone.find('input').val('');
    
            // Append the cloned section to the parent container
            $(".identified-root-repeatable:last").after(clone);
    
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
                jQuery('#saveCorrection').addClass('hidden');
            } else {
                jQuery('#saveCorrection').removeClass('hidden');
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
    car.loadCorrectionAction();
});