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
            data: {'status' : 'For CAR action'},
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
                        "</td><td>" + issued_to + 
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
                        "<a class='dropdown-item edit-car' data-requestor='" + requestor + "'  data-findings='" + findings + "' data-consequences='" + consequences + "' data-requirements_not_fulfilled='" + requirements_not_fulfilled + "' data-issuance_of_nc_remarks='" + issuance_of_nc_remarks + "' data-issuance_of_nc='" + issuance_of_nc + "' data-car_id='" + car_id + "' data-car_no='" + car_no + "' data-source='" + source_name + "' data-section='" + section + "' data-issued_by='" + issued_by_name + "' data-issued_to='" + issued_to + "' data-identification_date='" + identification_date + "' data-registration_date='" + registration_date + "' data-bs-toggle='modal' data-bs-target='#add-car'>Issuance of NC</a>" +
                        "<a class='dropdown-item' href='#'>History</a>" +
                        "<a class='dropdown-item edit-corrective-action' href='#' data-car_id='" + car_id + "' data-bs-toggle='modal' data-bs-target='#root-cause'>Corrective Action</a>" +
                        "<a class='dropdown-item' href='#'  data-bs-toggle='modal' data-bs-target='#corrective-action'>Correction</a>" +
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

            if(source == 1 || source == 2 || source == 8){

                if(source == 1){
                    $('#issued_to').html('<option value="IQA Chair">IQA Chair</option>');
                }

                if(source == 2){
                    $('#issued_to').html('<option value="Internal Auditor">Internal Auditor</option>');
                }

                if(source == 8){
                    $('#issued_to').html('<option value="CSAT">CSAT</option>');
                }

            } else {

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
        
                                var html = '<option value="'+dep_name+'">'+dep_name+'</option>';
                                // Do something with the data, for example, display it on the page
                                $('#issued_to').append(html);
                            });
    
                             $('#issued_to').append('<option value="IQA Chair">IQA Chair</option>');
                             $('#issued_to').append('<option value="Internal Auditor">Internal Auditor</option>');
                             $('#issued_to').append('<option value="CSAT">CSAT</option>');
                        }   
                    },
                    error: function () {
                        // Handle errors
                        diList.notifyError();
                    }
                });

            }

        }); 

        jQuery('#issued_by').change(function(){
            source = jQuery('#source').val();
            if(source == 1 || source == 2 || source == 8){

                if(source == 1){
                    $('#issued_to').html('<option value="IQA Chair">IQA Chair</option>');
                }

                if(source == 2){
                    $('#issued_to').html('<option value="Internal Auditor">Internal Auditor</option>');
                }

                if(source == 8){
                    $('#issued_to').html('<option value="CSAT">CSAT</option>');
                }

            } else {
                division = $(this).val();
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
        
                                var html = '<option value="'+dep_name+'">'+dep_name+'</option>';
                                // Do something with the data, for example, display it on the page
                                $('#issued_to').append(html);
                            });
    
                             $('#issued_to').append('<option value="IQA Chair">IQA Chair</option>');
                             $('#issued_to').append('<option value="Internal Auditor">Internal Auditor</option>');
                             $('#issued_to').append('<option value="CSAT">CSAT</option>');
                        }   
                    },
                    error: function () {
                        // Handle errors
                        diList.notifyError();
                    }
                });
            }

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
                var issued_by = jQuery('#issued_by').val();
                var issued_to = jQuery('#issued_to').val();
                var findings = jQuery('#findings').val();
                var consequences = jQuery('#consequences').val();
                var requirements_not_fulfilled = jQuery('#requirements_not_fulfilled').val();
                
                var data = {
                    'car_no' : car_no,
                    'identification_date' : identification_date,
                    'source' : source,
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
                success: function(response) {
                    // Handle the success response from the server
                    console.log(response);
                    // You can update the UI or perform other actions here
                },
                error: function(error) {
                    // Handle the error response from the server
                    console.error(error);
                    // You can display an error message or perform other actions here
                }
            });
        })
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
        $('#car-global-datatable').on('click', '.edit-corrective-action', function () {
            
            $car_id = jQuery(this).data('car_id');
            jQuery('.car_id').val($car_id);
        });
       

        $('#car-global-datatable').on('click', '.edit-car', function () {
            $car_id = jQuery(this).data('car_id');
            $requestor = jQuery(this).data('requestor');
            $car_no = jQuery(this).data('car_no');
            $source = jQuery(this).data('source');
            $issued_by = jQuery(this).data('issued_by');
            $issued_to = jQuery(this).data('issued_to');
            $identification_date = jQuery(this).data('identification_date');
            $issuance_of_nc = jQuery(this).data('issuance_of_nc');
            $issuance_of_nc_remarks = jQuery(this).data('issuance_of_nc_remarks');

            $findings = jQuery(this).data('findings');
            $consequences = jQuery(this).data('consequences');
            $requirements_not_fulfilled = jQuery(this).data('requirements_not_fulfilled');
        
            jQuery('#car_id').val($car_id);
            jQuery('#requestor').val($requestor);
            jQuery('#car_no').val($car_no);
            jQuery('#source').val($source); // Replace 'source' with the actual ID of your element
            jQuery('#issued_by').val($issued_by); // Replace 'issued_by' with the actual ID of your element
            jQuery('#issued_to').val($issued_to); // Replace 'issued_to' with the actual ID of your element
            jQuery('#identification_date').val($identification_date); // Replace 'identification_date' with the actual ID of your element
            jQuery('#issuance_of_nc').val($issuance_of_nc); // Replace 'issuance_of_nc' with the actual ID of your element
            jQuery('#issuance_of_nc_remarks').val($issuance_of_nc_remarks); // Replace 'issuance_of_nc_remarks' with the actual ID of your element        
            jQuery('#findings').val($findings); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('#consequences').val($consequences); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 
            jQuery('#requirements_not_fulfilled').val($requirements_not_fulfilled); // Replace 'issuance_of_nc_remarks' with the actual ID of your element 

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

                            var html = '<option value="'+dep_name+'">'+dep_name+'</option>';
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

});