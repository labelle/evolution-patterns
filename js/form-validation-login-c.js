document.getElementById("form-validation-login").onsubmit = function () {

    var e = document.forms["form-validation-login"]["email3"].value;
    var p = document.forms["form-validation-login"]["password3"].value;

    var submit = true;
    


    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) {  
        emailError = "Your email is not valid";
        document.getElementById("email3_error_login").innerHTML = emailError;
        submit = false;
    }


    if (p == null || p == "") {
        passwordError = "Please enter your password";
        document.getElementById("password3_error_login").innerHTML = passwordError;
        submit = false;

    } else if (p.length < 5) {
        passwordLength = "Your password must contain minimum 5 characters"
        document.getElementById("password3_error_login").innerHTML = passwordLength;
        submit = false;

    }


    return submit;
}

function removeWarningLogin() {
    document.getElementById(this.id + "_error_login").innerHTML = "";
}

document.getElementById("email3").onkeyup = removeWarningLogin;
document.getElementById("password3").onkeyup = removeWarningLogin;







document.getElementById("form-validation-login-line").onsubmit = function () {

    var e = document.forms["form-validation-login-line"]["email2"].value;
    var p = document.forms["form-validation-login-line"]["password2"].value;

    var submit = true;
    

    // if (e == null || e == "") {
    //     emailErrorLine = "Please enter your email";
    //     document.getElementById("email2_error_login_line").innerHTML = emailErrorLine;
    //     submit = false;
    // }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) {  
        emailErrorLine = "Your email is not valid";
        document.getElementById("email2_error_login_line").innerHTML = emailErrorLine;
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

    }


    return submit;
}

function removeWarningLoginLine() {
    document.getElementById(this.id + "_error_login_line").innerHTML = "";
}

document.getElementById("email2").onkeyup = removeWarningLoginLine;
document.getElementById("password2").onkeyup = removeWarningLoginLine;




// show or hide password
function toggle_password_2(target){
    var d = document;
    var tag = d.getElementById(target);
    var tag2 = d.getElementById("showhide2");

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
function toggle_password_2_line(target){
    var d = document;
    var tag = d.getElementById(target);
    var tag2 = d.getElementById("showhide2line");

    if (tag2.innerHTML == 'show'){
        tag.setAttribute('type', 'text');   
        tag2.innerHTML = 'hide';

    } else {
        tag.setAttribute('type', 'password');   
        tag2.innerHTML = 'show';
    }

    return false;
}