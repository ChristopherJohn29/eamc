var register = {

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

    submitForm: function(){
        jQuery('#submit-register').click(function(e){
            e.preventDefault();
            
            if (register.validateForm()) {
                var firstName = jQuery('#firstName').val();
                var middleName = jQuery('#middleName').val();
                var lastName = jQuery('#lastName').val();
                var suffix = jQuery('#suffix').val();
                var postNominal = jQuery('#postNominal').val();
                var email = jQuery('#email').val();
                var username = jQuery('#username').val();
                var password = jQuery('#password').val();
                var mobileNumber = jQuery('#mobileNumber').val();
                var designation = jQuery('#designation').val();
                var section = '';
                var department = '';

                if(designation == 'committee'){
                    section = jQuery('#committee').val();
                    var role = jQuery('#'+section).val();
                }

                if(designation == 'division'){
                    var division = jQuery('#division').val();
                    var role = jQuery('#'+division+'-division').val();
                    department = jQuery('#'+division+'-department').val();
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
                    section : section,
                    role : role,
                    department : department,
                    division : division
                };

                console.log($data);

                $.ajax({
                    type: 'POST',
                    url: 'register/save', // Replace 'MyController' with your controller name
                    data: $data,
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            alert('Register successfully wait for OSQM validation');
                            $('.parsley-error').removeClass('parsley-error');
                            $('.parsley-errors-list').addClass('hidden');
                            $('#register')[0].reset();
                        } else {
                            alert('Username or Email already exist');
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
        
        return isValid;
    },

    username: function (){
        $('#username').on('input', function() {
            $(this).val($(this).val().toUpperCase());
        });
    }


}

jQuery(document).ready(function(){
    register.designation();
    register.second();
    register.submitForm();
    register.username();
});
