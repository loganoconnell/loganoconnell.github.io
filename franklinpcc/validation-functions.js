$(document).ready(function() {
    $('#test-form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },        
        fields: {
            firstName: {
             message: 'The entered first name is not valid',
                validators: {
                    notEmpty: {
                        message: 'The first name field is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'The entered first name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        message: 'The entered first name can only accept alphabetical input'
                    },
                }
            },
            lastName: {
                message: 'The entered last name is not valid',
                validators: {
                    notEmpty: {
                        message: 'The last name field is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'The entered last name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        message: 'The entered last name can only consist of alphabetical characters'
                    },
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address field is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The entered email address is not a valid'
                    }
                }
            },
            address: {
                message: 'The entered address is not valid',
                validators: {
                    notEmpty: {
                        message: 'The address field is required and cannot be empty'
                    }
                }
            }, 

        }
    })
    .on('success.form.bv', function(e) {
        e.preventDefault();

        var $form = $(e.target);

        var bv = $form.data('bootstrapValidator');

        var url = 'https://script.google.com/macros/s/AKfycbyFoJrns7Yk94Ok8Ku8ZCFlDkMptd6tGxIpuJWXOG7OKmpB7pSX/exec';
        var redirectUrl = 'success-page.html';
        
        $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
        
        var jqxhr = $.post(url, $form.serialize(), function(data) {
            $(location).attr('href', redirectUrl);
        })
        .fail(function(data) {
            if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                $(location).attr('href', redirectUrl);                
            }
        });
    });
});