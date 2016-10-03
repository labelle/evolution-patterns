document.getElementById("form-validation-login").onsubmit = function () {

    var e = document.forms["form-validation-login"]["email1"].value;
    var p = document.forms["form-validation-login"]["password1"].value;

    var submit = true;
    


    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) {  
        emailError = "Your email is not valid";
        document.getElementById("email1_error_login").innerHTML = emailError;
        submit = false;
    }


    if (p == null || p == "") {
        passwordError = "Please enter your password";
        document.getElementById("password1_error_login").innerHTML = passwordError;
        submit = false;

    } else if (p.length < 5) {
        passwordLength = "Your password must contain minimum 5 characters"
        document.getElementById("password1_error_login").innerHTML = passwordLength;
        submit = false;

    }


    return submit;
}

function removeWarningLogin1() {
    document.getElementById(this.id + "_error_login").innerHTML = "";
}

document.getElementById("email1").onkeyup = removeWarningLogin1;
document.getElementById("password1").onkeyup = removeWarningLogin1;







document.getElementById("form-validation-login-line").onsubmit = function () {

    var e = document.forms["form-validation-login-line"]["email2"].value;
    var p = document.forms["form-validation-login-line"]["password2"].value;

    var submit = true;
    

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) {  
        emailError = "Your email is not valid";
        document.getElementById("email2_error_login_line").innerHTML = emailError;
        submit = false;
    }


    if (p == null || p == "") {
        passwordErrorLine = "Please enter your password";
        document.getElementById("password2_error_login_line").innerHTML = passwordErrorLine;
        submit = false;

    } else if (p.length < 5) {
        passwordLengthLine = "Your password must contain minimum 5 characters"
        document.getElementById("password2_error_login_line").innerHTML = passwordLengthLine;
        submit = false;

    } else {
        passwordSuccessLine = "Thank you."
        document.getElementById("password2_error_login_line").innerHTML = passwordSuccessLine;
    }


    return submit;
}

function removeWarningLogin() {
    document.getElementById(this.id + "_error_login_line").innerHTML = "";
}

document.getElementById("email2").onkeyup = removeWarningLogin;
document.getElementById("password2").onkeyup = removeWarningLogin;




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