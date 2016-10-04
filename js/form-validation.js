document.getElementById("form-validation").onsubmit = function () {
    // var x = document.forms["form-validation"]["name"].value;
    var y = document.forms["form-validation"]["email"].value;
    // var p = document.forms["form-validation"]["password"].value;
    // var z = document.forms["form-validation"]["telephone"].value;

    var submit = true;

    // if (x == null || x == "") {
    //     nameError = "Please enter your name";
    //     document.getElementById("name_error").innerHTML = nameError;
    //     submit = false;
    // }

    if (y == null || y == "") {
        emailError = "Please enter your email";
        document.getElementById("email_error").innerHTML = emailError;
        submit = false;

    } else {
        var success = $('#form-validation').val('');
        success.empty();
        $("#form-validation").append("<div class='secure evo-cmy-magenta evo-text-small'>Thank you! You will be notified.</div>");
        submit = false;
    }


    // if (p == null || p == "") {
    //     console.log('nope')
    //     passwordError = "Please enter your password";
    //     document.getElementById("password_error").innerHTML = passwordError;
    //     submit = false;
    // } else {
    //     passwordSuccess = "Thank you."
    //     document.getElementById("password_error").innerHTML = passwordSuccess;
    //     submit = false;
    // }

    // if (z == null || z == "") {
    //     telephoneError = "Please enter your telephone";
    //     document.getElementById("telephone_error").innerHTML = telephoneError;
    //     submit = false;
    // }

    return submit;
}

function removeWarning() {
    document.getElementById(this.id + "_error").innerHTML = "";
}

// document.getElementById("name").onkeyup = removeWarning;
document.getElementById("email").onkeyup = removeWarning;
// document.getElementById("password").onkeyup = removeWarning;
// document.getElementById("telephone").onkeyup = removeWarning;







document.getElementById("form-validation-line").onsubmit = function () {

    var y = document.forms["form-validation-line"]["email1"].value;

    var submit = true;
    
    if (y == null || y == "") {
        emailError = "Please enter your email";
        document.getElementById("email1_error_line").innerHTML = emailError;
        submit = false;
    } else {
        var success = $('#form-validation-line').val('');
        success.empty();
        $("#form-validation-line").append("<div class='secure evo-cmy-magenta evo-text-small'>Thank you! You will be notified.</div>");
        submit = false;
    }


    return submit;
}

function removeWarningLine() {
    document.getElementById(this.id + "_error_line").innerHTML = "";
}


document.getElementById("email1").onkeyup = removeWarningLine;








document.getElementById("form-validation-header").onsubmit = function () {

    var y = document.forms["form-validation-header"]["email2"].value;

    var submit = true;
    
    if (y == null || y == "") {
        emailError = "Please enter your email";
        document.getElementById("email2_error_header").innerHTML = emailError;
        submit = false;

    } else {
        var success = $('#form-validation-header').val('');
        success.empty();
        $("#form-validation-header").append("<div class='secure evo-cmy-magenta evo-text-small'>Thank you! You will be notified.</div>");
        submit = false;
    }


    return submit;
}

function removeWarningHeader() {
    document.getElementById(this.id + "_error_header").innerHTML = "";
}


document.getElementById("email2").onkeyup = removeWarningHeader;


