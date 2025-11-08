var diObsolete = {

    loadDiList: function(){
        var dataTable = $('#di-obsolete-datatable.dataTable');

        if (dataTable.length) {
            dataTable.DataTable().destroy();
        }

        $('#di-obsolete-datatable tbody').html('');

        $.ajax({
            type: 'POST',
            url: '../documentedinformation/getDIObsolete',
            data: {},
            success: function (response) {
                if(response != 'null'){
                    $.each(JSON.parse(response), function (index, item) {
                        var id = item.id;
                        var user_id = item.user_id;
                        var doc_title = item.doc_title;
                        var doc_code = item.doc_code;
                        var dep_name = item.dep_name;
                        var section_name = item.section_name;
                        var type = item.type;
                        var created_date = item.created_date;
                        var status_name = item.status_name;

                        var section = '';

                        if(section_name !== null){
                            section = " (" + section_name + ")";
                        }

                        var viewHistory = "<button title='View History' tabindex='0' data-plugin='tippy' data-tippy-theme='gradient' type='button' class='btn btn-sm btn-secondary view-history'"+
                            "data-id='"+id+"'>" +
                            "<i class='fa fa-clock'></i></button>";

                        var actions = viewHistory +
                            "<a href='./../revisiondetails/"+id+"/"+user_id+"' class='btn btn-sm btn-primary revision-button' title='View Revisions' tabindex='0' data-plugin='tippy' data-tippy-theme='gradient'><i class='fa fa-history' aria-hidden='true'></i></a>" +
                            "<a href='./../filedetails/"+id+"/"+user_id+"' class='btn btn-sm btn-info files-button' title='View Files' tabindex='0' data-plugin='tippy' data-tippy-theme='gradient'><i class='fa fa-folder-open'></i></a>";

                        var html = "<tr class='table-obsolete'><td>" + id + "</td><td>" + doc_title + "</td><td>" + doc_code + "</td><td>" + dep_name + section + "</td><td>" + type + "</td><td>" + created_date + "</td><td>" + status_name + "</td><td>" + actions + "</td></tr>";

                        $('#di-obsolete-datatable tbody').append(html);
                    });

                    tippy('*[data-plugin="tippy"]');

                    $("#di-obsolete-datatable").DataTable({
                        language: { paginate: { previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>" } },
                        drawCallback: function () {
                            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
                        },
                    });

                    $('[data-toggle="tooltip"]').tooltip();
                }
            },
            error: function () {
                diObsolete.notifyError();
            }
        });
    },

    viewHistory: function (){
        $('#di-obsolete-datatable').on('click','.view-history', function(){
            var doc_id = $(this).data('id');

            $('#doc_history_id').val(doc_id);
            $("#di-history").modal('toggle');

            $('#di-history-datatable tbody').html('');

            $.ajax({
                type: 'POST',
                url: '../documentedinformation/getDIHistory',
                data: {doc_id: doc_id},
                success: function (response) {
                    if(response != 'null'){
                        $.each(JSON.parse(response), function (index, item) {
                            var process = item.process;
                            var status = item.status;
                            var created_by_name = item.created_by_name;
                            var created_date = item.created_date;
                            var remarks = item.remarks;

                            var html = "<tr><td>" + process + "</td><td>" + status + "</td><td>" + created_by_name + "</td><td>" + created_date + "</td><td>" + remarks + "</td></tr>";
                            $('#di-history-datatable tbody').append(html);
                        });

                        tippy('*[data-plugin="tippy"]');

                        $('[data-toggle="tooltip"]').tooltip();
                    }
                },
                error: function () {
                    diObsolete.notifyError();
                }
            });
        });
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
    }
};

jQuery(document).ready(function(){
    diObsolete.loadDiList();
    diObsolete.viewHistory();
});
