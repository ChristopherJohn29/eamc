var diList = {

    loadDiList: function(){
        dataTable = $('#di-global-datatable.dataTable');

        if (dataTable.length) {
            // If it's a DataTable, destroy it
            dataTable.DataTable().destroy();
        }

        $('#di-global-datatable tbody').html('');
        
        var department_id = jQuery('#department_id').val();
        var document_type_id =  jQuery('#document_type_id').val();

        $.ajax({
            type: 'POST',
            url: '../../../published/getDIPublishedDI', // Replace 'MyController' with your controller name
            data: {department_id : department_id, document_type_id : document_type_id},
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
                        var doc_type_id = item.doc_type_id;
                        var type = item.type;
                        var created_date = item.created_date;
                        var status_name = item.status_name;
                        var status = item.status;
                        var effectivity_date = item.effectivity_date;
                        var revision_no = item.revision_no;

                        if(status == 'PUB'){
                            $action_button = "";
                        } else {
                            $action_button = '';
                        }

                        $view_history = "<button title='View History'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient' type='button' class='btn btn-sm btn-secondary view-history'"+
                            "data-id='"+id+"'>" +
                            "<i class='fa fa-clock'></i></button>";
                        
                        
                        var html = "<tr><td>" + doc_title + "</td><td>" + doc_code + "</td><td>" + dep_name + "</td><td>" + type + "</td><td>" + created_date + "</td><td>" + status_name + "</td><td>" +$view_history+""+ $action_button + "<a href='./../revisiondetails/"+id+"/"+user_id+"' class='btn btn-sm btn-primary revision-button' title='View Revisions'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient'><i class='fa fa-history' aria-hidden='true'></i></a><a href='./../filedetails/"+id+"/"+user_id+"' class='btn btn-sm btn-info files-button' title='View Files'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient'><i class='fa fa-folder-open'></i></a></td></tr>";
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
                            var created_date = item.created_date;
                            var remarks = item.remarks;
                            
                            var html = "<tr><td>" + process + "</td><td>" + status + "</td><td>" + created_date + "</td><td>" + remarks + "</td></tr>";
                            // Do something with the data, for example, display it on the page
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



}

jQuery(document).ready(function(){
    diList.loadDiList();
    diList.viewHistory();
});