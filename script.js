$(function() {
    var form = $("#form");
    enableFastFeedback(form);

    $("#form").submit(function() {
        var name = $("#name").val();
        var password = $("#password").val();
        var message = $("#message").val();
        var checked = $("#checkbox").is(":checked");

        validateNameField(name, event);
        validatePasswordField(password, event);
        validateMessageField(message, event);
        validateCheckboxField(checked, event);
    })
})
function enableFastFeedback(formElemtent) {
    var nameInput = formElemtent.find("#name");
    var passwordInput = formElemtent.find("#password");
    var messageInput = formElemtent.find("#message");
    var checkboxInput = formElemtent.find("#checkbox");

    nameInput.blur(function(event) {
        var name = $(this).val();
        validateNameField(name, event);

        if (!isValidName(name)) {
            $(this).css({"box-shadow":"0 0 5px #811", 
            "border": "2px solid #600"});
        } else {
            $(this).css({"box-shadow":"0 0 5px #181", 
            "border": "2px solid #060"});
            $(this).text("");

        }
    });
    
    passwordInput.blur(function(event) {
        var password = $(this).val();
        validatePasswordField(password, event);

        if (!isValidPassword(password)) {
            $(this).css({"box-shadow":"0 0 5px #811", 
            "border": "2px solid #600"});
        } else {
            $(this).css({"box-shadow":"0 0 5px #181", 
            "border": "2px solid #060"});
        }
    });

    messageInput.blur(function(event) {
        var message = $(this).val();
        validateMessageField(message, event);

        if (!isValidMessage(message)) {
            $(this).css({"box-shadow":"0 0 5px #811", 
            "border": "2px solid #600"});
        } else {
            $(this).css({"box-shadow":"0 0 5px #181", 
            "border": "2px solid #060"});
        }
    });

    checkboxInput.change(function(event) {
        var isChecked = $(this).is(":checked");
        validateCheckboxField(isChecked, event);

        if (!isChecked) {
            $(this).add("label[for='checkbox']").css({"box-shadow":"0 0 5px #811", 
            "border": "1px solid #600"});
        } else {
            $(this).add("label[for='checkbox']").css({"box-shadow":"0 0 5px #181", 
            "border": "1px solid #060"});
        }
    });
}

function validateNameField(name, event) {
    if (!isValidName(name)) {
        $("#name-feedback").text("Please enter at least 4 characters")
        event.preventDefault();
    } else {
        $("name-feedback").text("");
    }
}

function isValidName(name) {
    return name.length >= 4;
}

function validatePasswordField(password, event) {
    if (!isValidPassword(password)) {
        $("#password-feedback").text("Please enter a password with at least four characters and one number")
        event.preventDefault();
    } else {
        $("password-feedback").text("");
    }
}

function isValidPassword(password) {
    return password.length >= 4 && /.*[0-9].*/.test(password);
}

function validateMessageField(message, event) {
    if (!isValidMessage(message)) {
        $("#message-feedback").text("Please enter a message")
        event.preventDefault();
    } else {
        $("message-feedback").text("");
    }
}

function isValidMessage(message) {
    return message.length >= 1;
}

function validateCheckboxField(isChecked, event) {
    if (!isChecked) {
        $("#checkbox-feedback").text("Please agree to the terms and conditions")
        event.preventDefault();
    } else {
        $("checkbox-feedback").text("");
    }
}