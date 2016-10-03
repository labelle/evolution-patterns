document.getElementById("form-validation-login").onsubmit = function () {

    var e = document.forms["form-validation-login"]["email"].value;
    var p = document.forms["form-validation-login"]["password"].value;

    var submit = true;
    

    if (e == null || e == "") {
        emailError = "Please enter your email";
        document.getElementById("email_error_login").innerHTML = emailError;
        submit = false;
    }


    if (p == null || p == "") {
        passwordError = "Please enter your password";
        document.getElementById("password_error_login").innerHTML = passwordError;
        submit = false;

    } else if (p.length < 5) {
        passwordLength = "Your password must contain minimum 5 characters"
        document.getElementById("password_error_login").innerHTML = passwordLength;
        submit = false;

    } else {
        passwordSuccess = "Thank you."
        document.getElementById("password_error_login").innerHTML = passwordSuccess;
    }


    return submit;
}

function removeWarningLogin() {
    document.getElementById(this.id + "_error_login").innerHTML = "";
}

document.getElementById("email").onkeyup = removeWarningLogin;
document.getElementById("password").onkeyup = removeWarningLogin;







document.getElementById("form-validation-login-line").onsubmit = function () {

    var e = document.forms["form-validation-login-line"]["email1"].value;
    var p = document.forms["form-validation-login-line"]["password1"].value;

    var submit = true;
    

    if (e == null || e == "") {
        emailErrorLine = "Please enter your email";
        document.getElementById("email1_error_login_line").innerHTML = emailErrorLine;
        submit = false;
    }


    if (p == null || p == "") {
        passwordErrorLine = "Please enter your password";
        document.getElementById("password1_error_login_line").innerHTML = passwordErrorLine;
        submit = false;

    } else if (p.length < 5) {
        passwordLengthLine = "Your password must contain minimum 5 characters"
        document.getElementById("password1_error_login_line").innerHTML = passwordLengthLine;
        submit = false;

    } else {
        passwordSuccessLine = "Thank you."
        document.getElementById("password1_error_login_line").innerHTML = passwordSuccessLine;
    }


    return submit;
}

function removeWarningLogin() {
    document.getElementById(this.id + "_error_login_line").innerHTML = "";
}

document.getElementById("email1").onkeyup = removeWarningLogin;
document.getElementById("password1").onkeyup = removeWarningLogin;




// show or hide password
function toggle_password(target){
    var d = document;
    var tag = d.getElementById(target);
    var tag2 = d.getElementById("showhide");

    if (tag2.innerHTML == 'show'){
        tag.setAttribute('type', 'text');   
        tag2.innerHTML = 'hide';

    } else {
        tag.setAttribute('type', 'password');   
        tag2.innerHTML = 'show';
    }

    return false;
}



// show or hide password
function toggle_password_line(target){
    var d = document;
    var tag = d.getElementById(target);
    var tag2 = d.getElementById("showhideline");

    if (tag2.innerHTML == 'show'){
        tag.setAttribute('type', 'text');   
        tag2.innerHTML = 'hide';

    } else {
        tag.setAttribute('type', 'password');   
        tag2.innerHTML = 'show';
    }

    return false;
}