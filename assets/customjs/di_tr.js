var diTR = {

    loadTRList: function(){
        dataTable = $('#di-tr-datatable.dataTable');

        if (dataTable.length) {
            // If it's a DataTable, destroy it
            dataTable.DataTable().destroy();
        }

        $('#di-tr-datatable tbody').html('');
        

        $.ajax({
            type: 'POST',
            url: 'documentedinformation/getDITR', // Replace 'MyController' with your controller name
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
                        $('#di-tr-datatable tbody').append(html);
                    });

                    $("#di-tr-datatable").DataTable({
                        language: { paginate: { previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>" } },
                        drawCallback: function () {
                            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
                        },
                    });
                    
                }
            },
            error: function () {
                // Handle errors
                newUsers.notifyError();
            }
        });
    }

}

jQuery(document).ready(function(){
    diTR.loadTRList();
});