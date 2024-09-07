var car = {
    load : function (){
        dataTable = $('#car-history-datatable.dataTable');

        if (dataTable.length) {
            // If it's a DataTable, destroy it
            dataTable.DataTable().destroy();
        }

        $('#car-history-datatable tbody').html('');

        $.ajax({
            type: 'POST',
            url: 'getAllHistory', // Replace 'MyController' with your controller name
            data: {},
            success: function (response) {
                if(response != 'null'){
                    $.each(JSON.parse(response), function (index, item) {
                        // Access each item's properties
                        var car_id = item.car_id;
                        var car_main_no = item.car_main_no;
                        var process = item.process;
                        var status = item.status;
                        var created_by_name = item.created_by_name;
                        var created_date = item.created_date;
                        var remarks = item.remarks;
                
                        var html = "<tr>" +
                        "<td>" + car_id + "</td>" +
                        "<td>" + car_main_no + "</td>" +
                        "<td>" + process + "</td>" +
                        "<td>" + status + "</td>" +
                        "<td>" + created_by_name + "</td>" +
                        "<td>" + created_date + "</td>" +
                        "<td>" + remarks + "</td>" +
                        "</tr>";

                        $('#car-history-datatable tbody').append(html);
                    });

                    tippy('*[data-plugin="tippy"]');

                    $("#car-history-datatable").DataTable({
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

    validateForm : function (){
        var isValid = true;
        
        // Check required fields
        $("#addCARForm [required]").each(function () {
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

    validateFormCorrection : function (){
        var isValid = true;
        
        // Check required fields
        $("#corrective-action [required]").each(function () {
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

    validateFormIssuance : function (){
        var isValid = true;
        
        // Check required fields
        $("#addCARFormIssuance [required]").each(function () {
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
    car.load();

});