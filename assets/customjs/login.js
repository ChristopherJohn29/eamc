var login = {

    submitCredentials: function(){
        $('#login-submit').click(function (e) {
            e.preventDefault();
            
            if (login.validateForm()) {
                var email = jQuery('#email').val();
                var password = jQuery('#password').val();

    
                $.ajax({
                    type: 'POST',
                    url: 'login/signin', // Replace 'MyController' with your controller name
                    data: { email: email, password: password },
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){

                            redirect = jQuery('#redirect').val();
                            window.location.href = redirect;
                        }else if(response == 'wrongcreds'){
                            jQuery('.login-error li').text('Incorrect Username or Password');
                            jQuery('.login-error').removeClass('hidden');
                        }else if(response == 'dconotapprove'){
                            jQuery('.login-error li').text('Account for approval');
                            jQuery('.login-error').removeClass('hidden');
                        }else if(response == 'emailnotverified'){
                            jQuery('.login-error li').text('Email not Verified');
                            jQuery('.login-error').removeClass('hidden');
                        }
                    },
                    error: function () {
                        // Handle errors
                        login.notifyError();
                    }
                });
            }
            
        });


        $('#forgot-submit').click(function (e) {
            e.preventDefault();
            
            if (login.validateForm()) {
                var email = jQuery('#email').val();

                $.ajax({
                    type: 'POST',
                    url: 'forgotpass/reset', // Replace 'MyController' with your controller name
                    data: { email: email },
                    success: function (response) {
                        // Handle the response from the server
                        if(response == 'saved'){
                            redirect = jQuery('#redirect').val();
                            alert('An email with a password reset link has been sent to your email address.');
                            window.location.href = redirect;
                        }else if(response == 'wrongcreds'){
                            jQuery('.login-error li').text('Email Doest exist');
                            jQuery('.login-error').removeClass('hidden');
                        }else if(response == 'dconotapprove'){
                            jQuery('.login-error li').text('Account for approval');
                            jQuery('.login-error').removeClass('hidden');
                        }else if(response == 'emailnotverified'){
                            jQuery('.login-error li').text('Email not Verified');
                            jQuery('.login-error').removeClass('hidden');
                        }
                    },
                    error: function () {
                        // Handle errors
                        login.notifyError();
                    }
                });
            }
            
        });
    },

    validateForm : function (){
        var isValid = true;
        
        // Check required fields
        $("#login [required]").each(function () {
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
    login.submitCredentials();
});