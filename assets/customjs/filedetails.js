var filedetails = {

    editInit: function(){
        jQuery('#file-revision-datatable').on('click','.edit-data', function(){

            var doc_file_revision_id_edit = jQuery(this).data('id');
            var revision = jQuery(this).data('revision');
            var remarks_by_osqm_edit = jQuery(this).data('remarks_by_osqm');

            jQuery('#doc_file_revision_id_edit').val(doc_file_revision_id_edit);
            jQuery('#revision_edit').val(revision);
            jQuery('#remarks_by_osqm_edit').val(remarks_by_osqm_edit);

            jQuery("#edit-file-revision").modal('toggle');
            
        });

        jQuery('#editFileRevision').click(function (e) {
            e.preventDefault();
            
            if (filedetails.validateEditForm()) {
                var revision = jQuery('#revision_edit').val();
                var doc_file_revision_id = jQuery('#doc_file_revision_id_edit').val();
                var remarks_by_osqm = jQuery('#remarks_by_osqm_edit').val();

                var data = {
                    revision: revision,
                    doc_file_revision_id: doc_file_revision_id,
                    remarks_by_osqm: remarks_by_osqm
                };

                jQuery("#edit-file-revision").modal('toggle');
    
                $.ajax({
                    type: 'POST',
                    url: '../filedetails/update', // Replace 'MyController' with your controller name
                    data: data,
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            filedetails.notifySuccess();
                            filedetails.loadFileRevision();
                            $('#editFileRevisionForm')[0].reset();
                        } else {
                            filedetails.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        filedetails.notifyError();
                    }
                });
            }
            
        });
    },

    validateEditForm : function (){
        var isValid = true;
        
        // Check required fields
        $("#editFileRevisionForm [required]").each(function () {
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

    saveFileRevision: function(){
        $('#createFileRevision').click(function (e) {
            e.preventDefault();
            
            if (filedetails.validateForm()) {
                
                var doc_file_id = jQuery('#doc_file_id').val();
                var revision = jQuery('#revision').val();

                jQuery("#add-file-revision").modal('toggle');

                var formData = new FormData(); // Create a FormData object
                formData.append('doc_file_id', doc_file_id);
                formData.append('revision', revision);  

                $.ajax({
                    type: 'POST',
                    url: '../filedetails/save', // Replace 'MyController' with your controller name
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            filedetails.notifySuccess();
                            filedetails.loadFileRevision();
                            $('#createFileRevisionForm')[0].reset();
                        } else {
                            filedetails.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        filedetails.notifyError();
                    }
                });
            }
            
        });
    },

    validateForm : function (){
        var isValid = true;

        // Check required fields
        $("#createFileRevisionForm [required]").each(function () {
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
                i.NotificationApp.send("Well Done!", "You successfully saved File Revision", "top-right", "#5ba035", "success");
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

    loadFileRevision: function(){

        dataTable = $('#file-revision-datatable.dataTable');

        if (dataTable.length) {
            // If it's a DataTable, destroy it
            dataTable.DataTable().destroy();
        }

        $('#file-revision-datatable tbody').html('');
        
        var $doc_file_id = jQuery('#doc_file_id').val();
        
        $.ajax({
            type: 'POST',
            url: '../loadfilerevision/'+$doc_file_id+'', // Replace 'MyController' with your controller name
            data: {},
            success: function (response) {
                if(response != 'null'){

                    var no = 0;
                    $.each(JSON.parse(response), function (index, item) {
                        // Access each item's properties
                        var id = item.id;
                        no++;
                        var revision = item.revision;
                        var revision_date = item.revision_date;
                        var remarks_by_osqm = item.remarks_by_osqm;
                        var remarks_date = item.remarks_date;
                    
                        // Do something with the data, for example, display it on the page
                        $('#file-revision-datatable tbody').append("<tr><td>"+no+"</td><td>"+revision+"</td><td>"+revision_date+"</td><td>"+remarks_by_osqm+"</td><td>"+remarks_date+"</td><td><button title='Edit'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient' type='button' class='btn btn-sm btn-warning waves-effect waves-light edit-data' data-id='"+id+"' data-revision='"+revision+"' data-remarks_by_osqm='"+remarks_by_osqm+"'><i class='mdi mdi-file'></i></button></td></tr>");
                    });

                    tippy('*[data-plugin="tippy"]');

                    $("#file-revision-datatable").DataTable({
                        language: { paginate: { previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>" } },
                        drawCallback: function () {
                            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
                        },
                    });

                }
            },
            error: function () {
                // Handle errors
                filedetails.notifyError();
            }
        });

    }
}

jQuery(document).ready(function(){
    filedetails.saveFileRevision();
    filedetails.loadFileRevision();
    filedetails.editInit();
});