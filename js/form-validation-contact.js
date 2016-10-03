document.getElementById("form-validation-contact").onsubmit = function () {

    var n = document.forms["form-validation-contact"]["name"].value;
    var e = document.forms["form-validation-contact"]["email"].value;
    var m = document.forms["form-validation-contact"]["message"].value;

    // console.log(n)

    var submit = true;


    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) {  
        emailError = "Your email is not valid";
        document.getElementById("email_error_contact").innerHTML = emailError;
        submit = false;
    }   

    if (n.length < 8) {
        nameError = "8 or more characters";
        document.getElementById("name_error_contact").innerHTML = nameError;
        submit = false;

    } else if (n.length > 100) {
        nameError = "Way too many characters";
        document.getElementById("name_error_contact").innerHTML = nameError;
        submit = false;
    }

    if (m.length < 12) {
        messageError = "12 or more characters";
        document.getElementById("message_error_contact").innerHTML = messageError;
        submit = false;

    }


    return submit;
}

function removeWarningContact() {
    document.getElementById(this.id + "_error_contact").innerHTML = "";
}


document.getElementById("name").onkeyup = removeWarningContact;
document.getElementById("email").onkeyup = removeWarningContact;
document.getElementById("message").onkeyup = removeWarningContact;









document.getElementById("form-validation-contact-line").onsubmit = function () {


    var n = document.forms["form-validation-contact-line"]["name1"].value;
    var e = document.forms["form-validation-contact-line"]["email1"].value;
    var m = document.forms["form-validation-contact-line"]["message1"].value;

    // console.log(n)

    var submit = true;


    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) {  
        emailErrorLine = "Your email is not valid";
        document.getElementById("email1_error_contact_line").innerHTML = emailErrorLine;
        submit = false;
    }   

    if (n.length < 8) {
        nameErrorLine = "8 or more characters";
        document.getElementById("name1_error_contact_line").innerHTML = nameErrorLine;
        submit = false;

    } else if (n.length > 100) {
        nameErrorLine = "Way too many characters";
        document.getElementById("name1_error_contact_line").innerHTML = nameErrorLine;
        submit = false;
    }

    if (m.length < 12) {
        messageErrorLine = "12 or more characters";
        document.getElementById("message1_error_contact_line").innerHTML = messageErrorLine;
        submit = false;

    }


    return submit;
}

function removeWarningContactLine() {
    document.getElementById(this.id + "_error_contact_line").innerHTML = "";
}


document.getElementById("name1").onkeyup = removeWarningContactLine;
document.getElementById("email1").onkeyup = removeWarningContactLine;
document.getElementById("message1").onkeyup = removeWarningContactLine;

