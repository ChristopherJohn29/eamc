var source = {
    
    deleteInit: function(){
        jQuery('#source-datatable').on('click','.data-delete', function(){

            var source_id = jQuery(this).data('id');

            var result = confirm("Are you sure you want to proceed deleting Source?");

            // Check the result of the confirmation dialog
            if (result) {
                // User clicked "OK," handle accordingly
                $.ajax({
                    type: 'POST',
                    url: 'source/delete', // Replace 'MyController' with your controller name
                    data: {source_id : source_id},
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            source.notifyDelete();
                            source.loadSource();
                        } else {
                            source.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        source.notifyError();
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
                i.NotificationApp.send("Alert!", "You successfully Deleted Source", "top-right", "#5ba035", "warning");
        })(window.jQuery);
    },


    editInit: function(){
        jQuery('#source-datatable').on('click','.edit-data', function(){

            var source_name = jQuery(this).data('source_name');
            var source_id = jQuery(this).data('id');

            jQuery('#source_name_edit').val(source_name);
            jQuery('#source_id').val(source_id);

            jQuery("#edit-source").modal('toggle');
            
        });

        $('#editSource').click(function (e) {
            e.preventDefault();
            
            if (source.validateEditForm()) {
                var source_name = jQuery('#source_name_edit').val();
                var source_id = jQuery('#source_id').val();

                var data = {
                    source_name: source_name,
                    source_id: source_id
                };

                jQuery("#edit-source").modal('toggle');
    
                $.ajax({
                    type: 'POST',
                    url: 'source/update', // Replace 'MyController' with your controller name
                    data: data,
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            source.notifySuccess();
                            source.loadSource();
                            $('#createSourceForm')[0].reset();
                        } else {
                            source.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        source.notifyError();
                    }
                });
            }
            
        });

    },

    saveSource: function(){
        $('#createSource').click(function (e) {
            e.preventDefault();
            
            if (source.validateForm()) {
                var source_name = jQuery('#source_name').val();

                jQuery("#add-source").modal('toggle');
    
                $.ajax({
                    type: 'POST',
                    url: 'source/save', // Replace 'MyController' with your controller name
                    data: { source_name: source_name},
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            source.notifySuccess();
                            source.loadSource();
                        } else {
                            source.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        source.notifyError();
                    }
                });
            }
            
        });
    },

    validateForm : function (){
        var isValid = true;
        
        // Check required fields
        $("#createSourceForm [required]").each(function () {
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
        $("#editSourceForm [required]").each(function () {
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
                i.NotificationApp.send("Well Done!", "You successfully saved Source", "top-right", "#5ba035", "success");
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

    loadSource: function(){

        dataTable = $('#source-datatable.dataTable');

        if (dataTable.length) {
            // If it's a DataTable, destroy it
            dataTable.DataTable().destroy();
        }

        $('#source-datatable tbody').html('');
        

        $.ajax({
            type: 'POST',
            url: 'source/getSource', // Replace 'MyController' with your controller name
            data: {},
            success: function (response) {
                if(response != 'null'){
                    $.each(JSON.parse(response), function (index, item) {
                        // Access each item's properties
                        var id = item.id;
                        var source_name = item.source_name;
                        var created_by_email = item.created_by_email ? item.created_by_email : '';
                        var created_date = item.created_date;
                        var last_updated_by_email = item.last_updated_by_email ? item.last_updated_by_email : '';
                    
                        // Do something with the data, for example, display it on the page
                        $('#source-datatable tbody').append("<tr><td>"+source_name+"</td><td>"+created_by_email+"</td><td>"+created_date+"</td><td>"+last_updated_by_email+"</td><td><button type='button' class='btn btn-warning waves-effect waves-light edit-data' data-id='"+id+"' data-source_name='"+source_name+"'><i class='mdi mdi-file'></i></button><button type='button' class='btn btn-danger waves-effect waves-light data-delete' data-id='"+id+"'><i class='mdi mdi-close'></i></button></td></tr>");
                    });

                    $("#source-datatable").DataTable({
                        language: { paginate: { previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>" } },
                        drawCallback: function () {
                            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
                        },
                    });
                    
                }
            },
            error: function () {
                // Handle errors
                source.notifyError();
            }
        });


       
    }
}

jQuery(document).ready(function(){

    source.saveSource();
    source.editInit();
    source.deleteInit();
    source.loadSource();

});