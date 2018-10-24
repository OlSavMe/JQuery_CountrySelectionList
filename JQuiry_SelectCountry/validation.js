$(function () {

    $("#register-form").validate({
        rules: {
            inputFirstName: {
                required: true,
                minlength: 2,
                maxlength: 40
            },
            inputLastName: {
                required: true,
                minlength: 2,
                maxlength: 40
            },

            inputAddress: {
                    required: true,
                    minlength: 5,
                    maxlength: 50
                },

            inputPostalCode: {
                    required: true,
                    digits: true
                },

            inputCountry: {
                    required: true
                },

            inputCompany: {
                    required: true
                },

            email: {
                required: true,
                email: true
            }

        },
        messages: {
            inputFirstName: {
                required: 'Please enter your first name',
                minlength: 'Please lengthen this text to 2 characters or more (you are currently using 1 character).',
                maxlength: 'Please shorten your text to 40 characters or fewer (you are currently using over 40 characters).'
            },
            inputLastName: {
                required: 'Please enter your last name',
                minlength: 'Please lengthen this text to 2 characters or more (you are currently using 1 character).',
                maxlength: 'Please shorten your text to 40 characters or fewer (you are currently using over 40 characters).'
            },

            inputAddress: {
                required: 'Please enter your address',
                minlength: 'Please lengthen this text to 5 characters or more (you are currently using 4 characters or fewer).',
                maxlength: 'Please shorten your text to 50 characters or fewer (you are currently using over 50 characters).'
            },

            inputPostalCode: {
                required: 'Please enter your postal code',
                digits: 'Postal address must contain only digits'
            },

            inputCountry: {
                required: 'Please enter your country'
           
            },

            inputCompany: {
                required: 'Please enter your company name'
         
            },

            email: {
                required: 'Please enter an email address',
                email: 'Please enter a <em>valid</em> email address'
                        }

        }
    });
}
);