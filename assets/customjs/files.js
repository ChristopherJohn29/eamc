var file = {
    deleteInit: function(){
        jQuery('#files-datatable').on('click','.data-delete', function(){

            var files_id = jQuery(this).data('id');

            var result = confirm("Are you sure you want to proceed deleting File?");

            // Check the result of the confirmation dialog
            if (result) {
                // User clicked "OK," handle accordingly
                $.ajax({
                    type: 'POST',
                    url: '../../files/delete', // Replace 'MyController' with your controller name
                    data: {files_id : files_id},
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            file.notifyDelete();
                            file.loadFile();
                        } else {
                            file.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        file.notifyError();
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
                i.NotificationApp.send("Alert!", "You successfully Deleted file", "top-right", "#5ba035", "warning");
        })(window.jQuery);
    },

    saveFile: function(){
        $('#createFile').click(function (e) {
            e.preventDefault();
            
            if (file.validateForm()) {
                var filename = jQuery('#filename').val();
                var doc_id = jQuery('#doc_id').val();
                var doc_user_id = jQuery('#doc_user_id').val();
                var filelink = jQuery('#filelink').val();
                var fileInput = document.getElementById('fileinput'); // Get the file input element
                var realfile = fileInput.files[0]; 

                jQuery("#add-file").modal('toggle');

                var formData = new FormData(); // Create a FormData object
                formData.append('filename', filename);
                formData.append('doc_id', doc_id);
                formData.append('doc_user_id', doc_user_id);
                formData.append('filelink', filelink);

                if( realfile !== undefined){
                    formData.append('file', realfile);
                }
                
                $.ajax({
                    type: 'POST',
                    url: '../../files/save', // Replace 'MyController' with your controller name
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            file.notifySuccess();
                            file.loadFile();
                            jQuery('.new-file').addClass('hidden');
                            $('#createFileForm')[0].reset();
                        } else {
                            file.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        file.notifyError();
                    }
                });
            }
            
        });
    },

    validateForm : function (){
        var isValid = true;

        // Check required fields
        $("#createFileForm [required]").each(function () {
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
                i.NotificationApp.send("Well Done!", "You successfully saved File", "top-right", "#5ba035", "success");
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

    loadFile: function(){

        dataTable = $('#files-datatable.dataTable');

        if (dataTable.length) {
            // If it's a DataTable, destroy it
            dataTable.DataTable().destroy();
        }

        $('#files-datatable tbody').html('');
        
        var $doc_id = jQuery('#doc_id').val();
        var $doc_user_id = jQuery('#doc_user_id').val();
        
        $.ajax({
            type: 'POST',
            url: '../../loadfile/'+$doc_id+'/'+$doc_user_id, // Replace 'MyController' with your controller name
            data: {},
            success: function (response) {
                if(response != 'null'){
                    $.each(JSON.parse(response), function (index, item) {
                        // Access each item's properties
                        var id = item.id;
                        var filename = item.filename;
                        var created_by_fullname = item.created_by_fullname ? item.created_by_fullname : '';
                        var created_date = item.created_date;
                        var fileurl = item.unique_file_name;
                        var filelink = item.filelink;
                    
                        // Do something with the data, for example, display it on the page

                        filelinkslide = filelink.split('/edit');
                        var role = jQuery('#files-datatable').data('role');
                        
                        if(role != 'super_admin'){
                            if(fileurl){
                                var download = "<a target='_blank' href='../../../uploads/"+fileurl+"' title='Download File'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient' download class='hidden btn btn-sm btn-primary waves-effect waves-light download-data' data-id='"+id+"' data-filename='"+filename+"'><i class='mdi mdi-download'></i></a>";
                            } else if(filelink) {
                                var download = "<a target='_blank' href='"+filelinkslide[0]+"/export/pptx' title='Download File'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient' download class='hidden btn btn-sm btn-primary waves-effect waves-light download-data' data-id='"+id+"' data-filename='"+filename+"'><i class='mdi mdi-download'></i></a>";
                            }
                        } else {
                            var download = '';
                        }
                        
                        

                        $('#files-datatable tbody').append("<tr><td>"+index+"</td><td>"+filename+"</td><td>"+created_by_fullname+"</td><td>"+created_date+"</td><td><a target='_blank' href='../../filerevisiondetails/"+id+"' title='View File'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient' type='button' class='btn btn-sm btn-info waves-effect waves-light view-data' data-id='"+id+"' data-filename='"+filename+"'><i class='mdi mdi-eye'></i></a>"+download+"<button title='Delete'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient' type='button' class='btn btn-sm hidden btn-danger waves-effect waves-light data-delete' data-id='"+id+"'><i class='mdi mdi-close'></i></button></td></tr>");
                  
                   
                    });

                    tippy('*[data-plugin="tippy"]');

                    $("#files-datatable").DataTable({
                        language: { paginate: { previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>" } },
                        drawCallback: function () {
                            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
                        },
                    });

                    if(jQuery('#menuMasterFile').length){
                        jQuery('.download-data').removeClass('hidden');
                    }

                }
            },
            error: function () {
                // Handle errors
                file.notifyError();
            }
        });

        

    }
}

jQuery(document).ready(function(){
    file.saveFile();
    file.deleteInit();
    file.loadFile();
});