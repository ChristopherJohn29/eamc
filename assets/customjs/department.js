var department = {


    deleteInit: function(){
        jQuery('#department-datatable').on('click','.data-delete', function(){

            var dep_id = jQuery(this).data('id');

            jQuery('#dep_id').val(dep_id);

            var result = confirm("Are you sure you want to proceed deleting Department?");

            // Check the result of the confirmation dialog
            if (result) {
                // User clicked "OK," handle accordingly
                $.ajax({
                    type: 'POST',
                    url: 'department/delete', // Replace 'MyController' with your controller name
                    data: {dep_id : dep_id},
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            department.notifyDelete();
                            department.loadDepartment();
                        } else {
                            department.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        department.notifyError();
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
                i.NotificationApp.send("Alert!", "You successfully Deleted Department", "top-right", "#5ba035", "warning");
        })(window.jQuery);
    },


    editInit: function(){
        jQuery('#department-datatable').on('click','.edit-data', function(){

            var dep_name = jQuery(this).data('dep_name');
            var div_id = jQuery(this).data('div_id');
            var dep_id = jQuery(this).data('id');

            jQuery('#dep_name_edit').val(dep_name);
            jQuery('#div_id_edit').val(div_id);
            jQuery('#dep_id').val(dep_id);
           
            jQuery("#edit-department").modal('toggle');
            
        });

        $('#editDepartment').click(function (e) {
            e.preventDefault();
            
            if (department.validateEditForm()) {
                var dep_name = jQuery('#dep_name_edit').val();
                var div_id = jQuery('#div_id_edit').val();
                var dep_id = jQuery('#dep_id').val();

                var data = {
                    dep_name: dep_name,
                    div_id: div_id,
                    dep_id: dep_id // Include dep_id in the data object
                };

                jQuery("#edit-department").modal('toggle');
    
                $.ajax({
                    type: 'POST',
                    url: 'department/update', // Replace 'MyController' with your controller name
                    data: data,
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            department.notifySuccess();
                            department.loadDepartment();
                        } else {
                            department.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        department.notifyError();
                    }
                });
            }
            
        });

    },

    saveDepartment: function(){
        $('#createDepartment').click(function (e) {
            e.preventDefault();
            
            if (department.validateForm()) {
                var dep_name = jQuery('#dep_name').val();
                var div_id = jQuery('#div_id').val();

                jQuery("#add-department").modal('toggle');
    
                $.ajax({
                    type: 'POST',
                    url: 'department/save', // Replace 'MyController' with your controller name
                    data: { dep_name: dep_name, div_id: div_id },
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            department.notifySuccess();
                            department.loadDepartment();
                            $('#createDepartmentForm')[0].reset();
                        } else {
                            department.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        department.notifyError();
                    }
                });
            }
            
        });
    },

    validateForm : function (){
        var isValid = true;
        
        // Check required fields
        $("#createDepartmentForm [required]").each(function () {
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
        $("#editDepartmentForm [required]").each(function () {
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
                i.NotificationApp.send("Well Done!", "You successfully saved Department", "top-right", "#5ba035", "success");
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

    loadDepartment: function(){

        dataTable = $('#department-datatable.dataTable');

        if (dataTable.length) {
            // If it's a DataTable, destroy it
            dataTable.DataTable().destroy();
        }

        $('#department-datatable tbody').html('');
        

        $.ajax({
            type: 'POST',
            url: 'department/getDepartment', // Replace 'MyController' with your controller name
            data: {},
            success: function (response) {
                if(response != 'null'){
                    $.each(JSON.parse(response), function (index, item) {
                        // Access each item's properties
                        var id = item.id;
                        var dep_name = item.dep_name;
                        var div_id = item.div_id;
                        var div_name = item.div_name;
                        var created_by_email = item.created_by_email ? item.created_by_email : '';
                        var created_date = item.created_date;
                        var last_updated_by_email = item.last_updated_by_email ? item.last_updated_by_email : '';
                    
                        // Do something with the data, for example, display it on the page
                        $('#department-datatable tbody').append("<tr><td>"+id+"</td><td>"+div_name+"</td><td>"+dep_name+"</td><td>"+created_by_email+"</td><td>"+created_date+"</td><td>"+last_updated_by_email+"</td><td><button type='button' title='Edit'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient' class='btn btn-sm btn-warning waves-effect waves-light edit-data' data-div_id='"+div_id+"' data-id='"+id+"' data-dep_name='"+dep_name+"'><i class='mdi mdi-file'></i></button><button title='Delete'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient' type='button' class='btn btn-sm btn-danger waves-effect waves-light data-delete' data-id='"+id+"'><i class='mdi mdi-close'></i></button></td></tr>");
                    });

                    tippy('*[data-plugin="tippy"]');

                    $("#department-datatable").DataTable({
                        language: { paginate: { previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>" } },
                        drawCallback: function () {
                            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
                        },
                    });
                    
                }
            },
            error: function () {
                // Handle errors
                department.notifyError();
            }
        });


       
    }
}

jQuery(document).ready(function(){

    department.saveDepartment();
    department.editInit();
    department.deleteInit();
    department.loadDepartment();

});