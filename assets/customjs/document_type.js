var documenttype = {
    
    deleteInit: function(){
        jQuery('#document-type-datatable').on('click','.data-delete', function(){

            var doc_type_id = jQuery(this).data('id');

            var result = confirm("Are you sure you want to proceed deleting Document Type?");

            // Check the result of the confirmation dialog
            if (result) {
                // User clicked "OK," handle accordingly
                $.ajax({
                    type: 'POST',
                    url: 'documenttype/delete', // Replace 'MyController' with your controller name
                    data: {doc_type_id : doc_type_id},
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            documenttype.notifyDelete();
                            documenttype.loadDocumentType();
                        } else {
                            documenttype.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        documenttype.notifyError();DataType
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
                i.NotificationApp.send("Alert!", "You successfully Deleted Document Type", "top-right", "#5ba035", "warning");
        })(window.jQuery);
    },


    editInit: function(){
        jQuery('#document-type-datatable').on('click','.edit-data', function(){

            var doc_type_name = jQuery(this).data('doc_type_name');
            var doc_type_id = jQuery(this).data('id');

            jQuery('#doc_type_name_edit').val(doc_type_name);
            jQuery('#doc_type_id').val(doc_type_id);

            jQuery("#edit-document-type").modal('toggle');
            
        });

        $('#editDocumentType').click(function (e) {
            e.preventDefault();
            
            if (documenttype.validateEditForm()) {
                var doc_type_name = jQuery('#doc_type_name_edit').val();
                var doc_type_id = jQuery('#doc_type_id').val();

                var data = {
                    doc_type_name: doc_type_name,
                    doc_type_id: doc_type_id
                };

                jQuery("#edit-document-type").modal('toggle');
    
                $.ajax({
                    type: 'POST',
                    url: 'documenttype/update', // Replace 'MyController' with your controller name
                    data: data,
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            documenttype.notifySuccess();
                            documenttype.loadDocumentType();
                            $('#editDocumentTypeForm')[0].reset();
                        } else {
                            documenttype.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        documenttype.notifyError();
                    }
                });
            }
            
        });

    },

    saveDocumentType: function(){
        $('#createDocumentType').click(function (e) {
            e.preventDefault();
            
            if (documenttype.validateForm()) {
                var doc_type_name = jQuery('#doc_type_name').val();

                jQuery("#add-document-type").modal('toggle');
    
                $.ajax({
                    type: 'POST',
                    url: 'documenttype/save', // Replace 'MyController' with your controller name
                    data: { doc_type_name: doc_type_name},
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            documenttype.notifySuccess();
                            documenttype.loadDocumentType();
                            $('#createDocumentTypeForm')[0].reset();
                        } else {
                            documenttype.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        documenttype.notifyError();
                    }
                });
            }
            
        });
    },

    validateForm : function (){
        var isValid = true;
        
        // Check required fields
        $("#createDocumentTypeForm [required]").each(function () {
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
        $("#editDocumentTypeForm [required]").each(function () {
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
                i.NotificationApp.send("Well Done!", "You successfully saved Document Type", "top-right", "#5ba035", "success");
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

    loadDocumentType: function(){

        dataTable = $('#document-type-datatable.dataTable');

        if (dataTable.length) {
            // If it's a DataTable, destroy it
            dataTable.DataTable().destroy();
        }

        $('#document-type-datatable tbody').html('');
        

        $.ajax({
            type: 'POST',
            url: 'documenttype/getDocumentType', // Replace 'MyController' with your controller name
            data: {},
            success: function (response) {
                if(response != 'null'){
                    $.each(JSON.parse(response), function (index, item) {
                        // Access each item's properties
                        var id = item.id;
                        var doc_type_name = item.doc_type_name;
                        var created_by_email = item.created_by_email ? item.created_by_email : '';
                        var created_date = item.created_date;
                        var last_updated_by_email = item.last_updated_by_email ? item.last_updated_by_email : '';
                    
                        // Do something with the data, for example, display it on the page
                        $('#document-type-datatable tbody').append("<tr><td>"+doc_type_name+"</td><td>"+created_by_email+"</td><td>"+created_date+"</td><td>"+last_updated_by_email+"</td><td><button type='button' class='btn btn-warning waves-effect waves-light edit-data' data-id='"+id+"' data-doc_type_name='"+doc_type_name+"'><i class='mdi mdi-file'></i></button><button type='button' class='btn btn-danger waves-effect waves-light data-delete' data-id='"+id+"'><i class='mdi mdi-close'></i></button></td></tr>");
                    });

                    $("#document-type-datatable").DataTable({
                        language: { paginate: { previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>" } },
                        drawCallback: function () {
                            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
                        },
                    });
                    
                }
            },
            error: function () {
                // Handle errors
                documenttype.notifyError();
            }
        });


       
    }
}

jQuery(document).ready(function(){

    documenttype.saveDocumentType();
    documenttype.editInit();
    documenttype.deleteInit();
    documenttype.loadDocumentType();

});