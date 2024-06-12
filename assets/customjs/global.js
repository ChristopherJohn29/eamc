var global = {
    init : function(){

        base = jQuery('#wrapper').data('base_url');

        $.ajax({
            type: 'POST',
            url: base+'/admin/Users/fetchNotification', // Replace 'MyController' with your controller name
            data: {},
            success: function (response) {
                if(response != 'null'){

                    var count = 0;
                    $.each(JSON.parse(response), function (index, item) {
                        // Access each item's properties
                        var id = item.id;
                        var module = item.module;
                        var message = item.message;
                        var date_published = item.date_published;
                        var status = item.status;
                        var url = '/'

                        if(module == 'DCM'){
                            url = '/admin/documentedinformation';
                        } else if(module == 'CAR'){
                            url = '/admin/car/car';
                        }  

                        var html = '<a href="#" data-url="'+url+'" class="dropdown-item p-0 notify-item card unread-noti shadow-none mb-1">' +
                        '<div class="card-body">' +
                            '<span class="float-end noti-close-btn text-muted"><i class="mdi mdi-close notif-close remove-'+id+'" data-id="'+id+'"></i></span>' +
                            '<div class="d-flex align-items-center">' +
                                '<div class="flex-grow-1">' +
                                    '<h5 class="noti-item-title fw-semibold font-14">'+module+' <small class="fw-normal text-muted ms-1">'+date_published+'</small></h5>' +
                                    '<small class="noti-item-subtitle text-muted">'+message+'</small>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</a>';
         
                    $('.notification-div').append(html);

                    if(status == 2){
                        count++;
                    }
                    });

                    if(count != 0){
                        jQuery('.notification-number').html(count);
                    }
                   
                }
            },
            error: function () {
                // Handle errors
                console.log('error');
            }
        });   
    },

    unreadNotif: function(){
        jQuery('.notification-div').on('click','.unread-noti', function(){
            var url = jQuery(this).data('url');
            base = jQuery('#wrapper').data('base_url');
            window.location.href = base+url;
        });
    },

    viewNotif: function(){
        jQuery('.notification-list').click(function(){
            
            base = jQuery('#wrapper').data('base_url');

            $.ajax({
                type: 'POST',
                url: base+'/admin/Users/readNotification', // Replace 'MyController' with your controller name
                data: {},
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        jQuery('.notification-number').html("");
                    } else {
                       
                    }
                },
                error: function () {
                    // Handle errors
                    console.log('error');
                }
            });
        });
    },

    deleteNotif: function(){
        jQuery('.notification-div').on('click','.notif-close', function(){
            base = jQuery('#wrapper').data('base_url');

            var id = jQuery(this).data('id');

            $.ajax({
                type: 'POST',
                url: base+'/admin/Users/deleteNotification', // Replace 'MyController' with your controller name
                data: {id:id},
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        jQuery('.notification-number').html("");
                        jQuery('.remove-' + id).parent().parent().parent().remove(); 
                    } else {
                       
                    }
                },
                error: function () {
                    // Handle errors
                    console.log('error');
                }
            });

            return false;
        });
    },

    clearNotif: function(){
        jQuery('.clear-notification').click(function(){

            base = jQuery('#wrapper').data('base_url');
            $.ajax({
                type: 'POST',
                url: base+'/admin/Users/clearNotification', // Replace 'MyController' with your controller name
                data: {},
                success: function (response) {
                    // Handle the response from the server
                    if(response == 'saved'){
                        jQuery('.notification-number').html("");
                        jQuery('.notification-div').html("");
                    } else {
                       
                    }
                },
                error: function () {
                    // Handle errors
                    console.log('error');
                }
            });
        });
    },

    passwordChange: function(){
        // jQuery('#submit-register').attr('disabled',true);
        jQuery('#password-profile').on('keyup', function(){
            approvedUsers.passwordChecker();
        });
    },

    passwordChecker: function (){
        var isValid = true;
        var passwordErrorDiv = $('#password-error-profile');
        var passwordError = $('#password-error-text-profile');

        jQuery('#submit-register-profile').attr('disabled',true);

        var password = $('#password-profile').val();

        if(password != ''){
            if (!/.{8,}/.test(password)) {
                $('#password-profile').addClass('border-danger');
                errorMessage = '<ul class="added-pass-error parsley-errors-list filled"><li class="parsley-required">Password must be at least 8 characters.  </li></ul>';
                isValid = false;
            }
            
            // Number check
            if (!/\d/.test(password)) {
                $('#password-profile').addClass('border-danger');
                errorMessage = '<ul class="added-pass-error parsley-errors-list filled"><li class="parsley-required">Password must contain at least 1 number. </li></ul>';
                isValid = false;
            }
            
            // Symbol check
            if (!/[=?<>@#$*!]/.test(password)) {
                $('#password-profile').addClass('border-danger');
                errorMessage = '<ul class="added-pass-error parsley-errors-list filled"><li class="parsley-required">Password must contain at least 1 symbol. </li></ul>';
                isValid = false;
            }
            
            // Username check
            if (username === password) {
                $('#password-profile').addClass('border-danger');
                errorMessage = '<ul class="added-pass-error parsley-errors-list filled"><li class="parsley-required">Password should not be the same as the username. </li></ul>';
                isValid = false;
            }
    
            passwordError.after(errorMessage);
             if (isValid == false) {
    
                jQuery('.added-pass-error').remove();
                passwordErrorDiv.removeClass('hidden');
                passwordError.after(errorMessage);
                $('#password-profile').addClass('parsley-error');
                isValid = false;
                
            } else {
                passwordErrorDiv.addClass('hidden');
                passwordError.text('');
                jQuery('.added-pass-error').remove();
                $('#password-profile').removeClass('parsley-error');
                $('#password-profile').removeClass('border-danger');
                jQuery('#submit-register-profile').attr('disabled',false);
            }
        } else {
            passwordErrorDiv.addClass('hidden');
            passwordError.text('');
            jQuery('.added-pass-error').remove();
            $('#password-profile').removeClass('parsley-error');
            $('#password-profile').removeClass('border-danger');
            jQuery('#submit-register-profile').attr('disabled',false);
        }
        
        

    },
    submitForm: function(){
        jQuery('#submit-register-profile').click(function(e){
            e.preventDefault();
            
            if (approvedUsers.validateForm()) {
                var url = jQuery('#base_url_profile_save').val();
                var id = jQuery('#user_id-profile').val();
                var firstName = jQuery('#firstName-profile').val();
                var middleName = jQuery('#middleName-profile').val();
                var lastName = jQuery('#lastName-profile').val();
                var suffix = jQuery('#suffix-profile').val();
                var postNominal = jQuery('#postNominal-profile').val();
                var password = jQuery('#password-profile').val();
                var mobileNumber = jQuery('#mobileNumber-profile').val();

    
                $data = {
                    id : id,
                    firstname : firstName,
                    middlename : middleName,
                    lastname : lastName,
                    suffix : suffix,
                    post_nominal : postNominal,
                    password : password,
                    mobile_number : mobileNumber,
                };

                console.log($data);

                $.ajax({
                    type: 'POST',
                    url: url, // Replace 'MyController' with your controller name
                    data: $data,
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            alert('Update successfully');
                            $('.parsley-error').removeClass('parsley-error');
                            $('.parsley-errors-list').addClass('hidden');


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
}

jQuery(document).ready(function(){
    global.init();
    global.unreadNotif();
    global.viewNotif();
    global.clearNotif();
    global.deleteNotif();
    global.passwordChange();
    global.submitForm();

    $('.password-show').on('click', function() {
        var passwordInput = $('#password');
        var passwordFieldType = passwordInput.attr('type');

        if (passwordFieldType === 'password') {
            passwordInput.attr('type', 'text');
        } else {
            passwordInput.attr('type', 'password');
        }
    });
});