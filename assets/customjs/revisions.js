var revision = {
    
    deleteInit: function(){
        jQuery('#revision-datatable').on('click','.data-delete', function(){

            var revision_id = jQuery(this).data('id');

            var result = confirm("Are you sure you want to proceed deleting Revision?");

            // Check the result of the confirmation dialog
            if (result) {
                // User clicked "OK," handle accordingly
                $.ajax({
                    type: 'POST',
                    url: '../../revisions/delete', // Replace 'MyController' with your controller name
                    data: {revision_id : revision_id},
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            revision.notifyDelete();
                            revision.loadRevision();
                        } else {
                            revision.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        revision.notifyError();
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
                i.NotificationApp.send("Alert!", "You successfully Deleted Revision", "top-right", "#5ba035", "warning");
        })(window.jQuery);
    },


    editInit: function(){
        jQuery('#revision-datatable').on('click','.edit-data', function(){

            var revision_desc = jQuery(this).data('revision_desc');
            var revision_no = jQuery(this).data('revision_no');
            var effectivity_date = jQuery(this).data('effectivity_date');
            var revision_id = jQuery(this).data('id');

            jQuery('#revision_desc_edit').val(revision_desc);
            jQuery('#revision_no_edit').val(revision_no);
            jQuery('#effectivity_date_edit').val(effectivity_date);
            jQuery('#revision_id').val(revision_id);

            jQuery("#edit-revision").modal('toggle');
            
        });

        $('#editRevision').click(function (e) {
            e.preventDefault();
            
            if (revision.validateEditForm()) {
                var revision_desc = jQuery('#revision_desc_edit').val();
                var revision_no = jQuery('#revision_no_edit').val();
                var effectivity_date = jQuery('#effectivity_date_edit').val();
                var revision_id = jQuery('#revision_id').val();

                var data = {
                    revision_desc: revision_desc,
                    revision_id: revision_id,
                    revision_no: revision_no,
                    effectivity_date: effectivity_date
                };

                jQuery("#edit-revision").modal('toggle');
    
                $.ajax({
                    type: 'POST',
                    url: '../../revisions/update', // Replace 'MyController' with your controller name
                    data: data,
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            revision.notifySuccess();
                            revision.loadRevision();
                            $('#editRevisionForm')[0].reset();
                        } else {
                            revision.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        revision.notifyError();
                    }
                });
            }
            
        });

    },

    saveRevision: function(){
        $('#createRevision').click(function (e) {
            e.preventDefault();
            
            if (revision.validateForm()) {
                var revision_desc = jQuery('#revision_desc').val();
                var doc_id = jQuery('#doc_id').val();
                var doc_user_id = jQuery('#doc_user_id').val();

                jQuery("#add-revision").modal('toggle');
    
                $.ajax({
                    type: 'POST',
                    url: '../../revisions/save', // Replace 'MyController' with your controller name
                    data: { revision_desc: revision_desc, doc_id, doc_user_id},
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            revision.notifySuccess();
                            revision.loadRevision();
                            $('#createRevisionForm')[0].reset();
                        } else {
                            revision.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        revision.notifyError();
                    }
                });
            }
            
        });
    },

    validateForm : function (){
        var isValid = true;
        
        // Check required fields
        $("#createRevisionForm [required]").each(function () {
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
        $("#editRevisionForm [required]").each(function () {
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
                i.NotificationApp.send("Well Done!", "You successfully saved Revision", "top-right", "#5ba035", "success");
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

    loadRevision: function(){

        dataTable = $('#revision-datatable.dataTable');

        if (dataTable.length) {
            // If it's a DataTable, destroy it
            dataTable.DataTable().destroy();
        }

        $('#revision-datatable tbody').html('');

        var $doc_id = jQuery('#doc_id').val();
        var $doc_user_id = jQuery('#doc_user_id').val();
        
        $.ajax({
            type: 'POST',
            url: '../../loadrevision/'+$doc_id+'/'+$doc_user_id, // Replace 'MyController' with your controller name
            data: {},
            success: function (response) {
                if(response != 'null'){
                    $.each(JSON.parse(response), function (index, item) {
                        // Access each item's properties
                        var id = item.id;
                        var revision_desc = item.revision_desc;
                        var created_by_email = item.created_by_email ? item.created_by_email : '';
                        var created_date = item.created_date;
                        var last_updated_by_email = item.last_updated_by_email ? item.last_updated_by_email : '';
                    
                        // Do something with the data, for example, display it on the page
                        $('#revision-datatable tbody').append("<tr><td>"+revision_desc+"</td><td>"+created_by_email+"</td><td>"+created_date+"</td><td>"+last_updated_by_email+"</td><td><button title='Edit'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient' type='button' class='btn btn-sm btn-warning waves-effect waves-light edit-data' data-id='"+id+"' data-revision_desc='"+revision_desc+"'><i class='mdi mdi-file'></i></button><button title='Delete'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient' type='button' class='btn btn-sm btn-danger waves-effect waves-light data-delete' data-id='"+id+"'><i class='mdi mdi-close'></i></button></td></tr>");
                    });

                    tippy('*[data-plugin="tippy"]');

                    $("#revision-datatable").DataTable({
                        language: { paginate: { previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>" } },
                        drawCallback: function () {
                            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
                        },
                    });
                    
                }
            },
            error: function () {
                // Handle errors
                revision.notifyError();
            }
        });


       
    }
}

jQuery(document).ready(function(){

    revision.saveRevision();
    revision.editInit();
    revision.deleteInit();
    revision.loadRevision();

});