document.getElementById("form-validation").onsubmit = function () {
    // var x = document.forms["form-validation"]["name"].value;
    var y = document.forms["form-validation"]["email"].value;
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
        emailSuccess = "Thank you."
        document.getElementById("email_error").innerHTML = emailSuccess;
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
document.getElementById("email").onkeyup = removeWarning;
// document.getElementById("telephone").onkeyup = removeWarning;







// document.getElementById("form-validation-line").onsubmit = function () {

//     var y = document.forms["form-validation-line"]["email_line"].value;

//     var submit = true;
    
//     if (y == null || y == "") {
//         emailError = "Please enter your email";
//         document.getElementById("email_error_line").innerHTML = emailError;
//         submit = false;
//     } else {
//         emailSuccess = "Thank you."
//         document.getElementById("email_error_line").innerHTML = emailSuccess;
//     }


//     return submit;
// }

// function removeWarning() {
//     document.getElementById(this.id + "_error_line").innerHTML = "";
// }


// document.getElementById("email_line").onkeyup = removeWarning;
