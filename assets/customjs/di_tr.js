var diList = {

    loadDiList: function(){
        dataTable = $('#di-global-datatable.dataTable');

        if (dataTable.length) {
            // If it's a DataTable, destroy it
            dataTable.DataTable().destroy();
        }

        $('#di-global-datatable tbody').html('');
        

        $.ajax({
            type: 'POST',
            url: '../documentedinformation/getDITR', // Replace 'MyController' with your controller name
            data: {},
            success: function (response) {
                if(response != 'null'){
                    $.each(JSON.parse(response), function (index, item) {
                        // Access each item's properties
                        var id = item.id;
                        var user_id = item.user_id;
                        var doc_title = item.doc_title;
                        var doc_code = item.doc_code;
                        var dep_name = item.dep_name;
                        var dep_id = item.dep_id;
                        var sec_id = item.sec_id;
                        var section_name = item.section_name;
                        var doc_type_id = item.doc_type_id;
                        var type = item.type;
                        var created_date = item.created_date;
                        var status_name = item.status_name;
                        var status = item.status;
                        var effectivity_date = item.effectivity_date;
                        var revision_no = item.revision_no;

                        var prepared_by_existing = item.prepared_by_existing;
                        var final_review_by_existing = item.final_review_by_existing;
                        var approved_by_existing = item.approved_by_existing;

                        var prepared_by_position_existing = item.prepared_by_position_existing;
                        var final_review_by_position_existing = item.final_review_by_position_existing;
                        var approved_by_position_existing = item.approved_by_position_existing;


                        var existing = item.existing;

                        if(status == 'FFU' ||  status == 'AD' || status == 'D' || status == 'TR'){
                            var $action_button = "<button title='Technical Review'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient' type='button' class='btn btn-sm btn-blue edit-data'" +
                                "data-id='" + id + "' data-user_id='" + user_id + "'" +
                                "data-doc_title='" + doc_title + "' data-doc_code='" + doc_code + "'" +
                                "data-dep_id='" + dep_id + "' data-sec_id='" + sec_id + "' data-doc_type_id='" + doc_type_id + "'" +
                                "data-effectivity_date='" + effectivity_date + "' data-revision_no='" + revision_no + "'";
                        
                            // Include the new fields in the data attributes only if 'existing' has a value of 1
                            $action_button +=
                            "data-prepared_by_existing='" + prepared_by_existing + "' " +
                            "data-final_review_by_existing='" + final_review_by_existing + "' " +
                            "data-approved_by_existing='" + approved_by_existing + "' " +
                            "data-prepared_by_position_existing='" + prepared_by_position_existing + "' " +
                            "data-final_review_by_position_existing='" + final_review_by_position_existing + "' " +
                            "data-approved_by_position_existing='" + approved_by_position_existing + "' " +
                            "data-existing='" + existing + "' ";
                        
                            $action_button += ">" +
                                "<i class='mdi mdi-file'></i></button>";

                                
                        } else {
                            $action_button = '';
                        }

                        $view_history = "<button title='View History'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient' type='button' class='btn btn-sm btn-secondary view-history'"+
                            "data-id='"+id+"'>" +
                            "<i class='fa fa-clock'></i></button>";

                        section = '';

                        if(section_name !== null){
                            section = "(" + section_name + ")";
                        }
                        
                        
                        var html = "<tr><td>" + id + "</td><td>" + doc_title + "</td><td>" + doc_code + "</td><td>" + dep_name +" "+ section+ " </td><td>" + type + "</td><td>" + created_date + "</td><td>" + status_name + "</td><td>" +$view_history+""+  $action_button + "<a href='./../revisiondetails/"+id+"/"+user_id+"' class='btn btn-sm btn-primary revision-button' title='View Revisions'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient'><i class='fa fa-history' aria-hidden='true'></i></a><a href='./../filedetails/"+id+"/"+user_id+"' class='btn btn-sm btn-info files-button' title='View Files'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient'><i class='fa fa-folder-open'></i></a></td></tr>";
                        // Do something with the data, for example, display it on the page
                        $('#di-global-datatable tbody').append(html);

                    });

                    tippy('*[data-plugin="tippy"]');

                    $("#di-global-datatable").DataTable({
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
                diList.notifyError();
            }
        });
    },

    viewHistory: function (){
        
        jQuery('#di-global-datatable').on('click','.view-history', function(){
            var doc_id = jQuery(this).data('id');

            jQuery('#doc_history_id').val(doc_id);
            jQuery("#di-history").modal('toggle');

            $('#di-history-datatable tbody').html('');

        
            $.ajax({
                type: 'POST',
                url: '../documentedinformation/getDIHistory', // Replace 'MyController' with your controller name
                data: {doc_id: doc_id},
                success: function (response) {
                    if(response != 'null'){
                        $.each(JSON.parse(response), function (index, item) {
                            // Access each item's properties
                            var process = item.process;
                            var status = item.status;
                            var created_by_name = item.created_by_name;
                            var created_date = item.created_date;
                            var remarks = item.remarks;
                            
                            var html = "<tr><td>" + process + "</td><td>" + status + "</td><td>" + created_by_name + "</td><td>" + created_date + "</td><td>" + remarks + "</td></tr>";
                            $('#di-history-datatable tbody').append(html);
                        });
    
                        tippy('*[data-plugin="tippy"]');
    
    
                        $('[data-toggle="tooltip"]').tooltip()
                        
                    }
                },
                error: function () {
                    // Handle errors
                    diList.notifyError();
                }
                });
        });


        
    },

    validateEditForm : function (){
        var isValid = true;
        
        // Check required fields
        $("#editDocumentedInformationForm [required]").each(function () {
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

    editInit: function(){
        jQuery('#di-global-datatable').on('click','.edit-data', function(){

            var doc_id = jQuery(this).data('id');
            var user_id = jQuery(this).data('user_id');
            var doc_title = jQuery(this).data('doc_title');
            var doc_code = jQuery(this).data('doc_code');
            var dep_id = jQuery(this).data('dep_id');
            var sec_id = jQuery(this).data('sec_id');
            var doc_type_id = jQuery(this).data('doc_type_id');
            var effectivity_date = jQuery(this).data('effectivity_date');
            var revision_no = jQuery(this).data('revision_no');

            jQuery('#sec_id_edit option[value="'+sec_id+'"]').prop('disabled', false);

            jQuery('#doc_id_edit').val(doc_id);
            jQuery('#user_id_edit').val(user_id);
            jQuery('#document_title_edit').val(doc_title);
            jQuery('#doc_code_edit').val(doc_code);
            jQuery('#dep_id_edit').val(dep_id);
            jQuery('#sec_id_edit').val(sec_id);
            jQuery('#doc_type_id_edit').val(doc_type_id);
            jQuery('#effectivity_date_edit').val(effectivity_date);
            jQuery('#revision_no_edit').val(revision_no);

            jQuery('#prepared_by_existing_edit').val(prepared_by_existing);
            jQuery('#final_review_by_existing_edit').val(final_review_by_existing);
            jQuery('#approved_by_existing_edit').val(approved_by_existing);
            jQuery('#prepared_by_position_existing_edit').val(prepared_by_position_existing);
            jQuery('#final_review_by_position_existing_edit').val(final_review_by_position_existing);
            jQuery('#approved_by_position_existing_edit').val(approved_by_position_existing);
            
            if (existing === '1') {
                jQuery('#existing_edit').prop('checked', true);
            } else {
                jQuery('#existing_edit').prop('checked', false);
            }

            jQuery("#edit-di").modal('toggle');
            
        });

        $('#editDI').click(function (e) {
            e.preventDefault();
            
            if (diList.validateEditForm()) {
                var doc_id = jQuery('#doc_id_edit').val();
                var user_id = jQuery('#user_id_edit').val();
                var document_title = jQuery('#document_title_edit').val();
                var doc_code = jQuery('#doc_code_edit').val();
                var dep_id = jQuery('#dep_id_edit').val();
                var sec_id = jQuery('#sec_id_edit').val();
                var doc_type_id = jQuery('#doc_type_id_edit').val();
                var effectivity_date = jQuery('#effectivity_date_edit').val();
                var revision_no = jQuery('#revision_no_edit').val();
                var technical_review = jQuery('#technical_review').val();
                var technical_review_remarks = jQuery('#remarks').val();
                var prepared_by_existing = jQuery('#prepared_by_existing_edit').val();
                var final_review_by_existing = jQuery('#final_review_by_existing_edit').val();
                var approved_by_existing = jQuery('#approved_by_existing_edit').val();
                var prepared_by_position_existing = jQuery('#prepared_by_position_existing_edit').val();
                var final_review_by_position_existing = jQuery('#final_review_by_position_existing_edit').val();
                var approved_by_position_existing = jQuery('#approved_by_position_existing_edit').val();
                var existing = jQuery('#existing_edit').is(':checked') ? '1' : '0'; // Check if the checkbox is checked

                var data = {
                    doc_id: doc_id,
                    user_id: user_id,
                    document_title: document_title,
                    doc_code: doc_code,
                    dep_id: dep_id,
                    sec_id: sec_id,
                    doc_type_id: doc_type_id,
                    effectivity_date: effectivity_date,
                    revision_no: revision_no,
                    technical_review: technical_review,
                    technical_review_remarks: technical_review_remarks,
                    prepared_by_existing: prepared_by_existing,
                    final_review_by_existing: final_review_by_existing,
                    approved_by_existing: approved_by_existing,
                    prepared_by_position_existing: prepared_by_position_existing,
                    final_review_by_position_existing: final_review_by_position_existing,
                    approved_by_position_existing: approved_by_position_existing,
                    existing: existing
                    
                };

                jQuery("#edit-di").modal('toggle');

                $.ajax({
                    type: 'POST',
                    url: '../documentedinformation/updateTR', // Replace 'MyController' with your controller name
                    data: data,
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            diList.notifySuccess();
                            diList.loadDiList();
                            $('#editRevisionForm')[0].reset();
                        } else {
                            diList.notifyError();
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
                i.NotificationApp.send("Well Done!", "You successfully saved Documented Information", "top-right", "#5ba035", "success");
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

    loadSection : function (){
        jQuery('#dep_id').change(function(){
            if(jQuery(this).val() != ''){
                jQuery('select#sec_id').val('');
                jQuery('select#sec_id option').addClass('hidden');
                jQuery('select#sec_id option[data-dep_id="' + jQuery(this).val() + '"]').removeClass('hidden');
                jQuery('select#sec_id option').prop('disabled', true);
                jQuery('select#sec_id option[data-dep_id="' + jQuery(this).val() + '"]').prop('disabled', false);
            }
        });
        jQuery('#dep_id_edit').change(function(){
            if(jQuery(this).val() != ''){
                jQuery('select#sec_id_edit').val('');
                jQuery('select#sec_id_edit option').addClass('hidden');
                jQuery('select#sec_id_edit option[data-dep_id="' + jQuery(this).val() + '"]').removeClass('hidden');
                jQuery('select#sec_id_edit option').prop('disabled', true);
                jQuery('select#sec_id_edit option[data-dep_id="' + jQuery(this).val() + '"]').prop('disabled', false);
            }
        });
    },

    existingEdit: function() {
        var $specificFieldsEdit = $('#prepared_by_existing_edit, #final_review_by_existing_edit, #approved_by_existing_edit, #prepared_by_position_existing_edit, #final_review_by_position_existing_edit, #approved_by_position_existing_edit');
    
        // Hide specific fields by default
        $specificFieldsEdit.closest('.row.mb-2').hide();
    
        // Check if #existing_edit checkbox is checked on page load
        if ($('#existing_edit').is(':checked')) {
            $specificFieldsEdit.closest('.row.mb-2').show();
        }
    
        // On checkbox change, toggle the visibility of the specific fields
        $('#existing_edit').change(function () {
            if ($(this).is(':checked')) {
                $specificFieldsEdit.closest('.row.mb-2').show();
            } else {
                $specificFieldsEdit.closest('.row.mb-2').hide();
            }
        });
    }

}

jQuery(document).ready(function(){
    diList.loadDiList();
    diList.editInit();
    diList.viewHistory();
    diList.loadSection();
    diList.existingEdit();
});