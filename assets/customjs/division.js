var division = {
    

    deleteInit: function(){
        jQuery('#division-datatable').on('click','.data-delete', function(){

            var div_id = jQuery(this).data('id');

            jQuery('#div_id').val(div_id);

            var result = confirm("Are you sure you want to proceed deleting Division?");

            // Check the result of the confirmation dialog
            if (result) {
                // User clicked "OK," handle accordingly
                $.ajax({
                    type: 'POST',
                    url: 'division/delete', // Replace 'MyController' with your controller name
                    data: {div_id : div_id},
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            division.notifyDelete();
                            division.loadDivision();
                        } else {
                            division.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        division.notifyError();
                    }
                });
                // Add your logic to execute when the user confirms
            } 
                    
        });
    },

    notifyDelete: function(){
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
                i.NotificationApp.send("Alert!", "You successfully Deleted Division", "top-right", "#5ba035", "warning");
        })(window.jQuery);
    },


    editInit: function(){
        jQuery('#division-datatable').on('click','.edit-data', function(){

            var div_name = jQuery(this).data('div_name');
            var div_id = jQuery(this).data('id');

            jQuery('#div_name_edit').val(div_name);
            jQuery('#div_id').val(div_id);

            jQuery("#edit-division").modal('toggle');
            
        });

        $('#editDivision').click(function (e) {
            e.preventDefault();
            
            if (division.validateEditForm()) {
                var div_name = jQuery('#div_name_edit').val();
                var div_id = jQuery('#div_id').val();

                var data = {
                    div_name: div_name,
                    div_id: div_id // Include div_id in the data object
                };

                jQuery("#edit-division").modal('toggle');
    
                $.ajax({
                    type: 'POST',
                    url: 'division/update', // Replace 'MyController' with your controller name
                    data: data,
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            division.notifySuccess();
                            division.loadDivision();
                        } else {
                            division.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        division.notifyError();
                    }
                });
            }
            
        });

    },

    saveDivision: function(){
        $('#createDivision').click(function (e) {
            e.preventDefault();
            
            if (division.validateForm()) {
                var div_name = jQuery('#div_name').val();

                jQuery("#add-division").modal('toggle');
    
                $.ajax({
                    type: 'POST',
                    url: 'division/save', // Replace 'MyController' with your controller name
                    data: { div_name: div_name },
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            division.notifySuccess();
                            division.loadDivision();
                            $('#createDivisionForm')[0].reset();
                        } else {
                            division.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        division.notifyError();
                    }
                });
            }
            
        });
    },

    validateForm : function (){
        var isValid = true;
        
        // Check required fields
        $("#createDivisionForm [required]").each(function () {
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

    validateEditForm : function (){
        var isValid = true;
        
        // Check required fields
        $("#editDivisionForm [required]").each(function () {
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
                i.NotificationApp.send("Well Done!", "You successfully saved Division", "top-right", "#5ba035", "success");
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

    loadDivision: function(){

        dataTable = $('#division-datatable.dataTable');

        if (dataTable.length) {
            // If it's a DataTable, destroy it
            dataTable.DataTable().destroy();
        }

        $('#division-datatable tbody').html('');
        

        $.ajax({
            type: 'POST',
            url: 'division/getDivision', // Replace 'MyController' with your controller name
            data: {},
            success: function (response) {
                if(response != 'null'){
                    $.each(JSON.parse(response), function (index, item) {
                        // Access each item's properties
                        var id = item.id;
                        var div_name = item.div_name;
                        var created_by_email = item.created_by_email ? item.created_by_email : '';
                        var created_date = item.created_date;
                        var last_updated_by_email = item.last_updated_by_email ? item.last_updated_by_email : '';
                    
                        // Do something with the data, for example, display it on the page
                        $('#division-datatable tbody').append("<tr><td>"+div_name+"</td><td>"+created_by_email+"</td><td>"+created_date+"</td><td>"+last_updated_by_email+"</td><td><button title='Edit'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient' type='button' class='btn btn-sm btn-warning waves-effect waves-light edit-data' data-id='"+id+"' data-div_name='"+div_name+"'><i class='mdi mdi-file'></i></button><button type='button' title='Delete'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient' class='btn btn-sm btn-danger waves-effect waves-light data-delete' data-id='"+id+"'><i class='mdi mdi-close'></i></button></td></tr>");
                    });

                    tippy('*[data-plugin="tippy"]');

                    $("#division-datatable").DataTable({
                        language: { paginate: { previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>" } },
                        drawCallback: function () {
                            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
                        },
                    });
                    
                }
            },
            error: function () {
                // Handle errors
                division.notifyError();
            }
        });


       
    }
}

jQuery(document).ready(function(){

    division.saveDivision();
    division.editInit();
    division.deleteInit();
    division.loadDivision();

});