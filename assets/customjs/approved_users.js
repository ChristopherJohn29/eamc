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
                        var firstname = item.firstname;
                        var middlename = item.middlename;
                        var lastname = item.lastname;
                        var suffix = item.suffix;
                        var post_nominal = item.post_nominal;
                        var username = item.username;
                        var email = item.email;
                        var mobile_number = item.mobile_number;
                        var designation = item.designation;
                        var position = item.position;
                        var section = item.section;
                        var division = item.division;
                        var department = item.department;
                        var role = item.role;
                        var department_section = item.department_section;
                        var division_name = item.div_name ? item.div_name :'';
                        var department_name = item.dep_name ? item.dep_name : '';
                        var role_name = item.role_name ? item.role_name : '';


               
                        var data_html = "data-id='"+id+"' "+
                                        "data-firstname='"+firstname+"' "+
                                        "data-middlename='"+middlename+"' "+
                                        "data-lastname='"+lastname+"' "+
                                        "data-suffix='"+suffix+"' "+
                                        "data-post_nominal='"+post_nominal+"' "+
                                        "data-fullname='"+fullname+"' "+
                                        "data-username='"+username+"' "+
                                        "data-email='"+email+"' "+
                                        "data-mobile_number='"+mobile_number+"' "+
                                        "data-designation='"+designation+"' "+
                                        "data-position='"+position+"' "+
                                        "data-section='"+section+"' "+
                                        "data-role='"+role+"' "+
                                        "data-department='"+department+"' "+
                                        "data-department_section='"+department_section+"' "+
                                        "data-division='"+division+"' ";

                        var updateUser = "<button type='button' data-bs-toggle='modal' "+data_html+" data-bs-target='#update-user' title='Update User'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient' class='btn btn-sm btn-success waves-effect waves-light data-update' data-id='"+id+"'><i class='fa fa-file'></i></button>"; 
                        var html = "<tr><td>" + fullname + "</td><td>" + username + "</td><td>" + email + "</td><td>" + mobile_number + "</td><td>" + designation + "</td><td>" + division_name + "</td><td>" + section + "</td><td>" + department_name + "</td><td>" + role_name + "</td><td>"+ updateUser +"<button type='button' title='Deny'  tabindex='0' data-plugin='tippy' data-tippy-theme='gradient' class='btn btn-sm btn-danger waves-effect waves-light data-deny' data-id='"+id+"'><i class='mdi mdi-close'></i></button></td></tr>";
                        // Do something with the data, for example, display it on the page
                        $('#approved-users-datatable tbody').append(html);

                    });

                    tippy('*[data-plugin="tippy"]');

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

    designation: function(){
        jQuery('#designation').change(function(){
            val = $(this).val();

            jQuery('.second').addClass('d-none');
            jQuery('.third').addClass('d-none');
            jQuery('.fourth').addClass('d-none');

            jQuery('.'+val).removeClass('d-none');
            jQuery('.'+val).attr('required');
            jQuery('.second:not(.d-none) select').trigger('change');
        });
    },

    second: function(){
        jQuery('.second select').change(function(){
            jQuery('.third').addClass('d-none');
            jQuery('.fourth').addClass('d-none');
            val = $(this).val();

            jQuery('.'+val+'-division').removeClass('d-none');

            jQuery('.'+val+'-department').removeClass('d-none');
            jQuery('.'+val).removeClass('d-none');
        })
    },

    fourth: function(){
        jQuery('.fourth select').change(function(){
            jQuery('.fifth').addClass('d-none');
            val = $(this).val();

            jQuery('.'+val+'-section').removeClass('d-none');
            jQuery('.'+val).removeClass('d-none');
        })
    },

    submitForm: function(){
        jQuery('#submit-register').click(function(e){
            e.preventDefault();
            
            if (approvedUsers.validateForm()) {
                var firstName = jQuery('#firstName').val();
                var middleName = jQuery('#middleName').val();
                var lastName = jQuery('#lastName').val();
                var suffix = jQuery('#suffix').val();
                var postNominal = jQuery('#postNominal').val();
                var email = jQuery('#email').val();
                var username = jQuery('#username').val();
                var password = jQuery('#password').val();
                var mobileNumber = jQuery('#mobileNumber').val();
                var position = jQuery('#position').val();
                var designation = jQuery('#designation').val();
                var section = '';
                var department = '';
                var department_section = '';

                if(designation == 'committee'){
                    section = jQuery('#committee').val();
                    var role = jQuery('#'+section).val();
                }

                if(designation == 'division'){
                    var division = jQuery('#division').val();
                    var role = jQuery('#'+division+'-division').val();
                    department = jQuery('#'+division+'-department').val();
                    department_section = jQuery('#'+department+'-section').val();
                }
                
                $data = {
                    firstname : firstName,
                    middlename : middleName,
                    lastname : lastName,
                    suffix : suffix,
                    post_nominal : postNominal,
                    username : username,
                    password : password,
                    email : email,
                    mobile_number : mobileNumber,
                    designation : designation,
                    position : position,
                    section : section,
                    role : role,
                    department : department,
                    department_section : department_section,
                    division : division
                };

                console.log($data);

                $.ajax({
                    type: 'POST',
                    url: 'save', // Replace 'MyController' with your controller name
                    data: $data,
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            alert('Update successfully');
                            $('.parsley-error').removeClass('parsley-error');
                            $('.parsley-errors-list').addClass('hidden');
                            $('#register')[0].reset();

                            window.location.href = '/users/approvedUsers';

                        } else {
                            // alert('Username or Email already exist');
                        }
                    },
                    error: function () {
                        // Handle errors
                    }
                });
            }
        });
    },

    validateForm : function (){
        var isValid = true;
    
        // Check required fields
        $("#register [required]").each(function () {
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
    
        // Password validation
        var password = $('#password').val();
        var username = $('#username').val();
        var passwordErrorDiv = $('#password-error');
        var passwordError = $('#password-error-text');
        var lengthCheck = /.{8,}/.test(password);
        var numberCheck = /\d/.test(password);
        var symbolCheck = /[=?<>@#$*!]/.test(password);
        var usernameCheck = (username === password);
        var errorMessage = '';
    
        if (!/.{8,}/.test(password)) {
            errorMessage += '<ul class="added-pass-error parsley-errors-list filled"><li class="parsley-required">Password must be at least 8 characters.  </li></ul>';
            isValid = false;
        }
        
        // Number check
        if (!/\d/.test(password)) {
            errorMessage += '<ul class="added-pass-error parsley-errors-list filled"><li class="parsley-required">Password must contain at least 1 number. </li></ul>';
            isValid = false;
        }
        
        // Symbol check
        if (!/[=?<>@#$*!]/.test(password)) {
            errorMessage += '<ul class="added-pass-error parsley-errors-list filled"><li class="parsley-required">Password must contain at least 1 symbol. </li></ul>';
            isValid = false;
        }
        
        // Username check
        if (username === password) {
            errorMessage += '<ul class="added-pass-error parsley-errors-list filled"><li class="parsley-required">Password should not be the same as the username. </li></ul>';
            isValid = false;
        }
        
    
        if (!(lengthCheck && numberCheck && symbolCheck && !usernameCheck)) {
    
            jQuery('.added-pass-error').remove();
            passwordErrorDiv.removeClass('hidden');
            passwordError.text('Invalid password format');
            passwordError.after(errorMessage);
            $('#password').addClass('parsley-error');
            isValid = false;
            
        } else {
            passwordErrorDiv.addClass('hidden');
            passwordError.text('');
            jQuery('.added-pass-error').remove();
            $('#password').removeClass('parsley-error');
        }
        
        // Email validation
        var email = $('#email').val();
        if (!approvedUsers.validateEmail(email)) {
            $('#email').addClass('parsley-error');
            isValid = false;
        } else {
            $('#email').removeClass('parsley-error');
        }
    
        // Mobile number validation
        var mobileNumber = $('#mobileNumber').val();
        if (mobileNumber.length < 11) {
            $('#mobileNumber').addClass('parsley-error');
            isValid = false;
        } else {
            $('#mobileNumber').removeClass('parsley-error');
        }
        
        return isValid;
    },

    validateEmail: function(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    },
    

    passwordChange: function(){
        // jQuery('#submit-register').attr('disabled',true);
        jQuery('#password').on('keyup', function(){
            approvedUsers.passwordChecker();
        });
    },

    passwordChecker: function (){
        var isValid = true;
        var passwordErrorDiv = $('#password-error');
        var passwordError = $('#password-error-text');

        jQuery('#submit-register').attr('disabled',true);

        var password = $('#password').val();

        if(password != ''){
            if (!/.{8,}/.test(password)) {
                $('#password').addClass('border-danger');
                errorMessage = '<ul class="added-pass-error parsley-errors-list filled"><li class="parsley-required">Password must be at least 8 characters.  </li></ul>';
                isValid = false;
            }
            
            // Number check
            if (!/\d/.test(password)) {
                $('#password').addClass('border-danger');
                errorMessage = '<ul class="added-pass-error parsley-errors-list filled"><li class="parsley-required">Password must contain at least 1 number. </li></ul>';
                isValid = false;
            }
            
            // Symbol check
            if (!/[=?<>@#$*!]/.test(password)) {
                $('#password').addClass('border-danger');
                errorMessage = '<ul class="added-pass-error parsley-errors-list filled"><li class="parsley-required">Password must contain at least 1 symbol. </li></ul>';
                isValid = false;
            }
            
            // Username check
            if (username === password) {
                $('#password').addClass('border-danger');
                errorMessage = '<ul class="added-pass-error parsley-errors-list filled"><li class="parsley-required">Password should not be the same as the username. </li></ul>';
                isValid = false;
            }
    
            passwordError.after(errorMessage);
             if (isValid == false) {
    
                jQuery('.added-pass-error').remove();
                passwordErrorDiv.removeClass('hidden');
                passwordError.after(errorMessage);
                $('#password').addClass('parsley-error');
                isValid = false;
                
            } else {
                passwordErrorDiv.addClass('hidden');
                passwordError.text('');
                jQuery('.added-pass-error').remove();
                $('#password').removeClass('parsley-error');
                $('#password').removeClass('border-danger');
                jQuery('#submit-register').attr('disabled',false);
            }
        } else {
            passwordErrorDiv.addClass('hidden');
            passwordError.text('');
            jQuery('.added-pass-error').remove();
            $('#password').removeClass('parsley-error');
            $('#password').removeClass('border-danger');
            jQuery('#submit-register').attr('disabled',false);
        }
        
        

    },

    username: function (){
        $('#username').on('input', function() {
            $(this).val($(this).val().toUpperCase());
        });
    },

    divisionOnChange: function (){
        jQuery('.division').change(function(){

            $div = $(this).val();

            if($div == 'div_chief'){
                jQuery('.department').val('');
                jQuery('.department').attr('disabled', true);
            } else {
                jQuery('.department').attr('disabled', false);
            }
        });
    },
    
    dataUpdate: function(){
        $('#approved-users-datatable').on('click', '.data-update', function () {

            jQuery(this).data();

            var id = jQuery(this).data('id');
            var fullname = jQuery(this).data('fullname');
            var firstname = jQuery(this).data('firstname');
            var middlename = jQuery(this).data('middlename');
            var lastname = jQuery(this).data('lastname');
            var suffix = jQuery(this).data('suffix');
            var post_nominal = jQuery(this).data('post_nominal');
            var username = jQuery(this).data('username');
            var email = jQuery(this).data('email');
            var mobile_number = jQuery(this).data('mobile_number');
            var designation = jQuery(this).data('designation');
            var position = jQuery(this).data('position');
            var section = jQuery(this).data('section');
            var division = jQuery(this).data('division');
            var department = jQuery(this).data('department');
            var role = jQuery(this).data('role');
            var department_section = jQuery(this).data('department_section');
            var division_name = jQuery(this).data('division_name');
            var department_name = jQuery(this).data('department_name');
            var role_name = jQuery(this).data('role_name');
            
            jQuery('#userID').val(id);
            jQuery('#firstName').val(firstname);
            jQuery('#middleName').val(middlename);
            jQuery('#lastName').val(lastname);
            jQuery('#suffix').val(suffix);
            jQuery('#postNominal').val(post_nominal);
            jQuery('#email').val(email);
            jQuery('#username').val(username);
            jQuery('#mobileNumber').val(mobile_number);

            jQuery('#designation').val(designation);
            jQuery('#designation').trigger('change');
            
            jQuery('#position').val(position);
            jQuery('#position').trigger('change');
            

            if(designation == 'committee'){
                jQuery('#committee').val(section);
                jQuery('#committee').trigger('change');
                jQuery('#'+section).val(role);
                jQuery('#'+section).trigger('change');
            }

            if(designation == 'division'){
                jQuery('#division').val(division);
                jQuery('#division').trigger('change');
                jQuery('#'+division+'-division').val(role);
                jQuery('#'+division+'-division').trigger('change');
                jQuery('#'+division+'-department').val(department);
                jQuery('#'+division+'-department').trigger('change');
                jQuery('#'+department+'-section').val(department_section);
                jQuery('#'+department+'-section').trigger('change');
            }


        });
    }
}

jQuery(document).ready(function(){

    approvedUsers.loadApprovedUsers();
    approvedUsers.dataUpdate();
    approvedUsers.denyInit();
    approvedUsers.designation();
    approvedUsers.passwordChange();
    approvedUsers.second();
    approvedUsers.fourth();
    approvedUsers.submitForm();
    approvedUsers.username();
    approvedUsers.divisionOnChange();

});