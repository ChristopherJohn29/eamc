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
            data: {'status':'all'},
            success: function (response) {
                if(response != 'null'){
                    $.each(JSON.parse(response), function (index, item) {
                        // Access each item's properties
                        var car_no = item.car_no || '';
                        var source = item.source_name || '';
                        var issued_by = item.division || '';
                        var issued_to = item.issued_to || '';
                        var identification_date = item.identification_date || '';
                        var registration_date = item.registration_date || '';
                        var ca_completion_date = item.ca_completion_date || '';
                        var fc_completion_date = item.fc_completion_date || '';
                        var date_closed = item.date_closed || '';
                        var corrective_action_status = item.corrective_action_status || '';
                        var for_correction_status = item.for_correction_status || '';
                        var status = item.status || '';
                
                        
                        var html = "<tr><td>" + car_no + 
                        "</td><td>" + source + 
                        "</td><td>" + issued_by + 
                        "</td><td>" + issued_to + 
                        "</td><td>" + identification_date + 
                        "</td><td>" + registration_date + 
                        "</td><td>" + date_closed + 
                        "</td><td>" + corrective_action_status + "<br><small>"+ ca_completion_date + "</small>" +
                        "</td><td>" + for_correction_status + "<br><small>"+  fc_completion_date + "</small>" +
                        "</td><td>" + status + 
                        "</td><td>" + "<button class='btn btn-primary btn-small hidden' data-bs-toggle='modal' data-bs-target='#add-car'><i class='fas fa-plus'></i></button>" + 
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
    }

}

jQuery(document).ready(function(){
    car.load();
    // car.loadDepartment();
    car.saveCar();
});