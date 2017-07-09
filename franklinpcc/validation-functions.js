var studentCounter = 1;

$(document).ready(function() {
    $('#test-form').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },        
        fields: {
            parent1FirstName: {
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
            parent1LastName: {
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
                        regexp: /^[A-z ']+$/,
                        message: 'The entered last name can only consist of alphabetical characters'
                    },
                }
            },
            parent1HomePhone: {
                message: 'The entered home phone number is not valid',
                validators: {
                    notEmpty: {
                        message: 'The home phone number field is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^\+?1?([()/\.\-\s]*[0-9]){10}\s*((ext|x)\s*[0-9]+)*$/,
                        message: 'The entered home phone number can only consist of numerical characters and dashes'
                    },
                }
            },
            parent1CellPhone: {
                message: 'The entered cell phone number is not valid',
                validators: {
                    notEmpty: {
                        message: 'The cell phone number field is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^\+?1?([()/\.\-\s]*[0-9]){10}\s*((ext|x)\s*[0-9]+)*$/,
                        message: 'The entered cell phone number can only consist of numerical characters and dashes'
                    },
                }
            },
            parent1Email: {
                validators: {
                    notEmpty: {
                        message: 'The email field is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The entered email address is not valid'
                    }
                }
            },
            parent1StreetAddress: {
                message: 'The entered street address is not valid',
                validators: {
                    notEmpty: {
                        message: 'The street address field is required and cannot be empty'
                    }
                }
            },
            parent1City: {
                message: 'The entered city is not valid',
                validators: {
                    notEmpty: {
                        message: 'The city field is required and cannot be empty'
                    }
                }
            },
            parent1State: {
                message: 'The entered state is not valid',
                validators: {
                    notEmpty: {
                        message: 'The state field is required and cannot be empty'
                    }
                }
            },
            parent1Zip: {
                message: 'The entered zipcode is not valid',
                validators: {
                    notEmpty: {
                        message: 'The zipcode field is required and cannot be empty'
                    }
                }
            },
            recievePCCEmail1: {
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            student1FirstName: {
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
            student1LastName: {
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
                        regexp: /^[A-z ']+$/,
                        message: 'The entered last name can only consist of alphabetical characters'
                    },
                }
            },
            student1Grade: {
                icon: false,
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            student1Teacher: {
                icon: false,
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            classroomFriendshipList1: {
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            gradeLevelFriendshipList1: {
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            schoolWideStudentDirectory1: {
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            roomParent1: {
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            copyHelper1: {
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            familyFieldDay: {
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            winterAuction: {
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            springCarnival: {
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            bookFairs: {
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            communityPartners: {
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            square1Art: {
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            boxTopsForEducation: {
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            familyStudentActivities: {
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            communityService: {
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            educationalEnrichment: {
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            fifthGradeCelebration: {
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            yearbook: {
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            outdoorBeautification: {
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            },
            roomParentTeam: {
                validators: {
                    notEmpty: {
                        message: 'This question is required'
                    }
                }
            }
        }
    })
    .on('success.form.bv', function(e) {
        e.preventDefault();

        var values = $('.parentFormTemplate1 input:text').map(function() {
            return this.value;
        }).get().join(' ');
        
        var parent1 = values;
        console.log(parent1);

        if (!$('.parentFormTemplate2').hasClass('hidden')) {
            var values2 = $('.parentFormTemplate2 input:text').map(function() {
                return this.value;
            }).get().join(' ');
            
            var parent2 = values2;
            console.log(parent2);
        }

        var parentStr = "parentInformation=" + parent1 + ((parent2 == null) ? '' : ("\n\n" + parent2));

        var parentEmailsStr = "&parentEmails=" + $("#parent1Email").val() + (!$('.parentFormTemplate2').hasClass('hidden') ? ("\n" + $("#parent1Email").val()) : '');

        var wouldLikeEmailsStr = "&wouldLikeEmails=" + $('input[name="recievePCCEmail1"]:checked').val() + (!$('.parentFormTemplate2').hasClass('hidden') ? ("\n" + $('input[name="recievePCCEmail2"]:checked').val()) : '');

        var data = parentStr + parentEmailsStr + wouldLikeEmailsStr;

        console.log(data);

        var url = 'https://script.google.com/macros/s/AKfycbyFoJrns7Yk94Ok8Ku8ZCFlDkMptd6tGxIpuJWXOG7OKmpB7pSX/exec';
        var redirectUrl = 'success-page.html';
        
        $('.submitButton').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
        
        var jqxhr = $.post(url, data, function(data) {
            //$(location).attr('href', redirectUrl);
        })
        .fail(function(data) {
            if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                //$(location).attr('href', redirectUrl);                
            }
        });

        /* var $form = $(e.target);
        console.log($form.serialize());

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
        }); */
    });
    
    $('.parentAddButton').click(function() {
        $('.parentFormTemplate2').removeClass('hidden');
    });

    $('.parentRemoveButton').click(function() {
        $('.parentFormTemplate2').addClass('hidden');
    });

    $('.studentAddButton').click(function() {
        if (studentCounter < 4) {
            studentCounter++;
            $('.studentFormTemplate').eq(studentCounter - 1).removeClass('hidden');
        }
    });

    $('.studentRemoveButton').click(function() {
        studentCounter--;
        $('.studentFormTemplate').eq(studentCounter).addClass('hidden');
    });

    $('[data-toggle="tooltip"]').tooltip();

    $('a[href="#"]').click(function(e) {
        event.preventDefault();
    });
});