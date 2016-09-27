document.getElementById("form-validation").onsubmit = function () {
    // var x = document.forms["form-validation"]["name"].value;
    // var y = document.forms["form-validation"]["email"].value;
    var p = document.forms["form-validation"]["password"].value;
    // var z = document.forms["form-validation"]["telephone"].value;

    var submit = true;

    // if (x == null || x == "") {
    //     nameError = "Please enter your name";
    //     document.getElementById("name_error").innerHTML = nameError;
    //     submit = false;
    // }

    // if (y == null || y == "") {
    //     emailError = "Please enter your email";
    //     document.getElementById("email_error").innerHTML = emailError;
    //     submit = false;
    // } else {
    //     emailSuccess = "Thank you."
    //     document.getElementById("email_error").innerHTML = emailSuccess;
    // }


    if (p == null || p == "") {
        passwordError = "Please enter your password";
        document.getElementById("password_error").innerHTML = passwordError;
        submit = false;

    } else if (p.length < 5) {
        passwordLength = "5 or more characters"
        document.getElementById("password_error").innerHTML = passwordLength;
        submit = false;

    } else {
        passwordSuccess = "Thank you."
        document.getElementById("password_error").innerHTML = passwordSuccess;
        // submit = false;
    }

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
// document.getElementById("email").onkeyup = removeWarning;
document.getElementById("password").onkeyup = removeWarning;
// document.getElementById("telephone").onkeyup = removeWarning;







document.getElementById("form-validation-line").onsubmit = function () {

    var p = document.forms["form-validation-line"]["password1"].value;
    // var y = document.forms["form-validation-line"]["email_line"].value;

    var submit = true;
    
    // if (y == null || y == "") {
    //     emailError = "Please enter your email";
    //     document.getElementById("email_error_line").innerHTML = emailError;
    //     submit = false;
    // } else {
    //     emailSuccess = "Thank you."
    //     document.getElementById("email_error_line").innerHTML = emailSuccess;
    // }

    if (p == null || p == "") {
        passwordError = "Please enter your password";
        document.getElementById("password1_error_line").innerHTML = passwordError;
        submit = false;

    } else if (p.length < 5) {
        passwordLength = "5 or more characters"
        document.getElementById("password1_error_line").innerHTML = passwordLength;
        submit = false;

    } else {
        passwordSuccess = "Thank you."
        document.getElementById("password1_error_line").innerHTML = passwordSuccess;
        // submit = false;
    }


    return submit;
}

function removeWarningLine() {
    document.getElementById(this.id + "_error_line").innerHTML = "";
}


document.getElementById("password1").onkeyup = removeWarningLine;








document.getElementById("form-validation-header").onsubmit = function () {

    var p = document.forms["form-validation-header"]["password2"].value;

    var submit = true;
    

    if (p == null || p == "") {
        passwordError = "Please enter your password";
        document.getElementById("password2_error_header").innerHTML = passwordError;
        submit = false;

    } else if (p.length < 5) {
        passwordLength = "Your password must contain minimum 5 characters"
        document.getElementById("password2_error_header").innerHTML = passwordLength;
        submit = false;

    } else {
        passwordSuccess = "Thank you."
        document.getElementById("password2_error_header").innerHTML = passwordSuccess;
    }


    return submit;
}

function removeWarningHeader() {
    document.getElementById(this.id + "_error_header").innerHTML = "";
}


document.getElementById("password2").onkeyup = removeWarningHeader;





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



// show or hide password with eye-book-gray.svg
function toggle_password_eye(target){
    var d = document;
    var tag = d.getElementById(target);
    var tag2 = d.getElementById("showhide");

    if (tag2.innerHTML == '<img src="https://labelle.github.io/evolution-patterns/icons-gray/book-gray/eye-book-gray.svg" id="input_img">'){
        tag.setAttribute('type', 'text');   
        tag2.innerHTML = '<img src="https://labelle.github.io/evolution-patterns/icons-gray/book-gray/eye-slash-book-gray.svg" id="input_img">';

    } else {
        tag.setAttribute('type', 'password');   
        tag2.innerHTML = '<img src="https://labelle.github.io/evolution-patterns/icons-gray/book-gray/eye-book-gray.svg" id="input_img">';
    }

    return false;
}

