var section = {
    
    deleteInit: function(){
        jQuery('#section-datatable').on('click','.data-delete', function(){

            var section_id = jQuery(this).data('id');

            var result = confirm("Are you sure you want to proceed deleting Section?");

            // Check the result of the confirmation dialog
            if (result) {
                // User clicked "OK," handle accordingly
                $.ajax({
                    type: 'POST',
                    url: 'section/delete', // Replace 'MyController' with your controller name
                    data: {section_id : section_id},
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            section.notifyDelete();
                            section.loadSection();
                        } else {
                            section.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        section.notifyError();
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
                i.NotificationApp.send("Alert!", "You successfully Deleted Section", "top-right", "#5ba035", "warning");
        })(window.jQuery);
    },


    editInit: function(){
        jQuery('#section-datatable').on('click','.edit-data', function(){

            var section_name = jQuery(this).data('section_name');
            var dep_id = jQuery(this).data('dep_id');
            var section_id = jQuery(this).data('id');

            jQuery('#section_name_edit').val(section_name);
            jQuery('#dep_id_edit').val(dep_id);
            jQuery('#section_id').val(section_id);

            jQuery("#edit-section").modal('toggle');
            
        });

        $('#editSection').click(function (e) {
            e.preventDefault();
            
            if (section.validateEditForm()) {
                var section_name = jQuery('#section_name_edit').val();
                var dep_id = jQuery('#dep_id_edit').val();
                var section_id = jQuery('#section_id').val();

                var data = {
                    section_name: section_name,
                    dep_id : dep_id,
                    section_id: section_id
                };

                jQuery("#edit-section").modal('toggle');
    
                $.ajax({
                    type: 'POST',
                    url: 'section/update', // Replace 'MyController' with your controller name
                    data: data,
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            section.notifySuccess();
                            section.loadSection();
                            $('#createSectionForm')[0].reset();
                        } else {
                            section.notifyError();
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

    saveSection: function(){
        $('#createSection').click(function (e) {
            e.preventDefault();
            
            if (section.validateForm()) {
                var section_name = jQuery('#section_name').val();
                var dep_id = jQuery('#dep_id').val();

                jQuery("#add-section").modal('toggle');
    
                $.ajax({
                    type: 'POST',
                    url: 'section/save', // Replace 'MyController' with your controller name
                    data: { section_name: section_name, dep_id : dep_id},
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            section.notifySuccess();
                            section.loadSection();
                        } else {
                            section.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        section.notifyError();
                    }
                });
            }
            
        });
    },

    validateForm : function (){
        var isValid = true;
        
        // Check required fields
        $("#createSectionForm [required]").each(function () {
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
        $("#editSectionForm [required]").each(function () {
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
                i.NotificationApp.send("Well Done!", "You successfully saved Section", "top-right", "#5ba035", "success");
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

    loadSection: function(){

        dataTable = $('#section-datatable.dataTable');

        if (dataTable.length) {
            // If it's a DataTable, destroy it
            dataTable.DataTable().destroy();
        }

        $('#section-datatable tbody').html('');
        

        $.ajax({
            type: 'POST',
            url: 'section/getSection', // Replace 'MyController' with your controller name
            data: {},
            success: function (response) {
                if(response != 'null'){
                    $.each(JSON.parse(response), function (index, item) {
                        // Access each item's properties
                        var id = item.id;
                        var section_name = item.section_name;
                        var dep_id = item.dep_id;
                        var dep_name = item.dep_name;
                        var created_by_email = item.created_by_email ? item.created_by_email : '';
                        var created_date = item.created_date;
                        var last_updated_by_email = item.last_updated_by_email ? item.last_updated_by_email : '';
                    
                        // Do something with the data, for example, display it on the page
                        $('#section-datatable tbody').append("<tr><td>"+section_name+"</td><td>"+dep_name+"</td><td>"+created_by_email+"</td><td>"+created_date+"</td><td>"+last_updated_by_email+"</td><td><button title='Edit' tabindex='0' data-plugin='tippy' data-tippy-theme='gradient' type='button' class='btn btn-sm btn-warning waves-effect waves-light edit-data' data-id='"+id+"' data-section_name='"+section_name+"' data-dep_id='"+dep_id+"'><i class='mdi mdi-file'></i></button><button title='Delete'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient' type='button' class='btn btn-sm btn-danger waves-effect waves-light data-delete' data-id='"+id+"'><i class='mdi mdi-close'></i></button></td></tr>");
                    });

                    tippy('*[data-plugin="tippy"]');

                    $("#section-datatable").DataTable({
                        language: { paginate: { previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>" } },
                        drawCallback: function () {
                            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
                        },
                    });
                    
                }
            },
            error: function () {
                // Handle errors
                section.notifyError();
            }
        });


       
    }
}

jQuery(document).ready(function(){

    section.saveSection();
    section.editInit();
    section.deleteInit();
    section.loadSection();

});