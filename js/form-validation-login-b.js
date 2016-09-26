document.getElementById("form-validation-login-b").onsubmit = function () {

    var p = document.forms["form-validation-login-b"]["password"].value;

    var submit = true;
    

    if (p == null || p == "") {
        passwordError = "Please enter your password";
        document.getElementById("password_error_login_b").innerHTML = passwordError;
        submit = false;

    } else if (p.length < 5) {
        passwordLength = "Your password must contain minimum 5 characters"
        document.getElementById("password_error_login_b").innerHTML = passwordLength;
        submit = false;

    } else {
        passwordSuccess = "Thank you."
        document.getElementById("password_error_login_b").innerHTML = passwordSuccess;
    }


    return submit;
}

function removeWarningLogin() {
    document.getElementById(this.id + "_error_login_b").innerHTML = "";
}


document.getElementById("password").onkeyup = removeWarningLogin;






document.getElementById("form-validation-login-b-line").onsubmit = function () {

    var p = document.forms["form-validation-login-b-line"]["password1"].value;

    var submit = true;
    

    if (p == null || p == "") {
        passwordError = "Please enter your password";
        document.getElementById("password1_error_login_b_line").innerHTML = passwordError;
        submit = false;

    } else if (p.length < 5) {
        passwordLength = "Your password must contain minimum 5 characters"
        document.getElementById("password1_error_login_b_line").innerHTML = passwordLength;
        submit = false;

    } else {
        passwordSuccess = "Thank you."
        document.getElementById("password1_error_login_b_line").innerHTML = passwordSuccess;
    }


    return submit;
}

function removeWarningLoginLine() {
    document.getElementById(this.id + "_error_login_b_line").innerHTML = "";
}


document.getElementById("password1").onkeyup = removeWarningLoginLine;





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