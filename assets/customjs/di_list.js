var diList = {

    loadDiList: function(){
        dataTable = $('#di-list-datatable.dataTable');

        if (dataTable.length) {
            // If it's a DataTable, destroy it
            dataTable.DataTable().destroy();
        }

        $('#di-list-datatable tbody').html('');
        

        $.ajax({
            type: 'POST',
            url: 'documentedinformation/getDIList', // Replace 'MyController' with your controller name
            data: {},
            success: function (response) {
                if(response != 'null'){
                    $.each(JSON.parse(response), function (index, item) {
                        // Access each item's properties
                        var id = item.id;

                        var doc_code = item.doc_code;
                        var dep_name = item.dep_name;
                        var type = item.type;
                        var created_date = item.created_date;
                        var status_name = item.status_name;
                        
                        var html = "<tr><td>" + doc_code + "</td><td>" + dep_name + "</td><td>" + type + "</td><td>" + created_date + "</td><td>" + status_name + "</td></tr>";
                        // Do something with the data, for example, display it on the page
                        $('#di-list-datatable tbody').append(html);

                    });

                    $("#di-list-datatable").DataTable({
                        language: { paginate: { previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>" } },
                        drawCallback: function () {
                            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
                        },
                    });
                    
                }
            },
            error: function () {
                // Handle errors
                diList.notifyError();
            }
        });
    },

    saveDI: function(){
        jQuery('#saveDI').click(function(e){
            e.preventDefault();

            if (diList.validateForm()) {

                
                var document_title = jQuery('#document_title').val();
                var effectivity_date = jQuery('#effectivity_date').val();
                var doc_type_id = jQuery('#doc_type_id').val();
                var dep_id = jQuery('#dep_id').val();
                var doc_code = jQuery('#doc_code').val();
                var revision_no = jQuery('#revision_no').val();

                var data = {
                    'document_title' : document_title,
                    'effectivity_date' : effectivity_date,
                    'doc_type_id' : doc_type_id,
                    'dep_id' : dep_id,
                    'doc_code' : doc_code,
                    'revision_no' : revision_no,
                }

                jQuery("#add-di").modal('toggle');
    
                $.ajax({
                    type: 'POST',
                    url: 'documentedinformation/save', // Replace 'MyController' with your controller name
                    data: data,
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            diList.notifySuccess();
                            diList.loadDiList();
                            $('#addDocumentedInformationForm')[0].reset();
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

    validateForm : function (){
        var isValid = true;
        
        // Check required fields
        $("#addDocumentedInformationForm [required]").each(function () {
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
    
}

jQuery(document).ready(function(){
    diList.loadDiList();
    diList.saveDI();
});