var approvedUsers = {
    notifyDeny: function(){
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
                i.NotificationApp.send("Alert!", "You successfully Denied User", "top-right", "#5ba035", "warning");
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

    denyInit: function(){
        jQuery('#approved-users-datatable').on('click','.data-deny', function(){

            var user_id = jQuery(this).data('id');

            var result = confirm("This User is already approved, Are you sure you want to revoke approval on this User?");

            // Check the result of the confirmation dialog
            if (result) {
                // User clicked "OK," handle accordingly
                $.ajax({
                    type: 'POST',
                    url: 'deny', // Replace 'MyController' with your controller name
                    data: {user_id : user_id},
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            approvedUsers.notifyDeny();
                            approvedUsers.loadnewUsers();
                        } else {
                            approvedUsers.notifyError();
                        }
                    },
                    error: function () {
                        // Handle errors
                        approvedUsers.notifyError();
                    }
                });
                // Add your logic to execute when the user confirms
            } 
                    
        });
    },

    loadApprovedUsers: function(){
        dataTable = $('#approved-users-datatable.dataTable');

        if (dataTable.length) {
            // If it's a DataTable, destroy it
            dataTable.DataTable().destroy();
        }

        $('#approved-users-datatable tbody').html('');
        
        $.ajax({
            type: 'POST',
            url: 'getApprovedUsers', // Replace 'MyController' with your controller name
            data: {},
            success: function (response) {
                if(response != 'null'){
                    $.each(JSON.parse(response), function (index, item) {
                        // Access each item's properties
                        var id = item.id;

                        var fullname = item.fullname;
                        var username = item.username;
                        var email = item.email;
                        var mobile_number = item.mobile_number;
                        var designation = item.designation;
                        var division = item.div_name ? item.div_name :'';
                        var section = item.section ? item.section : '';
                        var department = item.dep_name ? item.dep_name : '';
                        var role = item.role_name ? item.role_name : '';
                        
                        var html = "<tr><td>" + fullname + "</td><td>" + username + "</td><td>" + email + "</td><td>" + mobile_number + "</td><td>" + designation + "</td><td>" + division + "</td><td>" + section + "</td><td>" + department + "</td><td>" + role + "</td><td><button type='button' class='btn btn-danger waves-effect waves-light data-deny' data-id='"+id+"'><i class='mdi mdi-close'></i></button></td></tr>";
                        // Do something with the data, for example, display it on the page
                        $('#approved-users-datatable tbody').append(html);

                    });

                    $("#approved-users-datatable").DataTable({
                        language: { paginate: { previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>" } },
                        drawCallback: function () {
                            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
                        },
                    });
                    
                }
            },
            error: function () {
                // Handle errors
                approvedUsers.notifyError();
            }
        });
    },

    notifyDeny: function(){
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
                i.NotificationApp.send("Alert!", "You successfully Denied User", "top-right", "#5ba035", "warning");
        })(window.jQuery);
    },

    notifyApprove: function(){
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
                i.NotificationApp.send("Saved!", "You successfully Approved User", "top-right", "#5ba035", "success");
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

    approvedUsers.loadApprovedUsers();
    approvedUsers.denyInit();

});