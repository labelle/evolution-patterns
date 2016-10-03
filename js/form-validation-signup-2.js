
// THIS IS THE BEGINING OF SIGNUP FORM

document.getElementById("form-validation-login-3").onsubmit = function () {

    var e = document.forms["form-validation-login-3"]["email3"].value;
    var u = document.forms["form-validation-login-3"]["username3"].value;
    var p = document.forms["form-validation-login-3"]["password3"].value;
    var t = document.forms["form-validation-login-3"].checkbox11.checked;

    console.log(t);

    var submit = true;
    

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) {  
        emailError = "Your email is not valid";
        document.getElementById("email3_error_login").innerHTML = emailError;
        submit = false;
    }
     

    if (u.length < 8) {
        usernameError = "8 or more characters";
        document.getElementById("username3_error_login").innerHTML = usernameError;
        submit = false;

    } else if (u.length > 100) {
        usernameError = "Way too many characters";
        document.getElementById("username3_error_login").innerHTML = usernameError;
        submit = false;
    }


    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(p)) {
        passwordError = "Please match all the bullets listed below";
        document.getElementById("password3_error_login").innerHTML = passwordError;
        // document.getElementById("password1").style.border="1px solid #ec008c";
        submit = false;

    }

    if (/^(?=.*[_\W]).+$/.test(p)) {
        passwordLength = "No special characters allowed";
        document.getElementById("password3_error_login_line").innerHTML = passwordLength;
        submit = false;
    }

    if(t !== true) {
        checkboxErrorLine = "Please select the checkbox above";
        document.getElementById("checkbox3_error_login").innerHTML = checkboxErrorLine;
        submit = false;
    }


    return submit;
}

function removeWarningSignup() {
    document.getElementById(this.id + "_error_login").innerHTML = "";

    var t = document.forms["form-validation-login-3"].checkbox11.checked;

    if(t == true) {
      document.getElementById("checkbox3_error_login").innerHTML = "";
    }
}

document.getElementById("email3").onkeyup = removeWarningSignup;
document.getElementById("username3").onkeyup = removeWarningSignup;
document.getElementById("password3").onkeyup = removeWarningSignup;




// show or hide password
function toggle_password_signup(target){
    var d = document;
    var tag = d.getElementById(target);
    var tag2 = d.getElementById("showhidesignup");

    if (tag2.innerHTML == 'show'){
        tag.setAttribute('type', 'text');   
        tag2.innerHTML = 'hide';

    } else {
        tag.setAttribute('type', 'password');   
        tag2.innerHTML = 'show';
    }

    return false;
}




// HELPER TEXT
(function(){
  var password = document.querySelector('.password');
  
  var helperText = {
    charLength: document.querySelector('.helper-text .length'),
    lowercase: document.querySelector('.helper-text .lowercase'),
    uppercase: document.querySelector('.helper-text .uppercase'),
    number: document.querySelector('.helper-text .number')
    // specialchar: document.querySelector('.helper-text .specialchar')
  };
  
  var pattern = {
    charLength: function() {
      if( password.value.length >= 8 ) {
        return true;
      }
    },
    lowercase: function() {
      var regex = /^(?=.*[a-z]).+$/; // Lowercase character pattern

      if( regex.test(password.value) ) {
        return true;
      }
    },
    uppercase: function() {
      var regex = /^(?=.*[A-Z]).+$/; // Uppercase character pattern

      if( regex.test(password.value) ) {
        return true;
      }
    },
    number: function() {
      var regex = /^(?=.*[0-9]).+$/; // Number character pattern

      if( regex.test(password.value) ) {
        return true;
      }
    } 
    // specialchar: function() {
    //   var regex = /^(?=.*[_\W]).+$/; 

    //   if( regex.test(password.value) ) {
    //     return true;
    //   }
    // }   
  };
  
  // Listen for keyup action on password field
  password.addEventListener('keyup', function (){
    // Check that password is a minimum of 8 characters
    patternTest( pattern.charLength(), helperText.charLength );
    
    // Check that password contains a lowercase letter    
    patternTest( pattern.lowercase(), helperText.lowercase );
    
    // Check that password contains an uppercase letter
    patternTest( pattern.uppercase(), helperText.uppercase );
    
    // Check that password contains a number 
    patternTest( pattern.number(), helperText.number );

    // Check that password contains a special character
    // patternTest( pattern.specialchar(), helperText.specialchar );
    
    // Check that all requirements are fulfilled
    if( hasClass(helperText.charLength, 'valid') &&
        hasClass(helperText.lowercase, 'valid') && 
        hasClass(helperText.uppercase, 'valid') && 
        hasClass(helperText.number, 'valid') 
        // hasClass(helperText.specialchar, 'valid') 
    ) {
      addClass(password.parentElement, 'valid');
    }
    else {
      removeClass(password.parentElement, 'valid');
    }
  });

  
  function patternTest(pattern, response) {
    if(pattern) {
      addClass(response, 'valid');
    }
    else {
      removeClass(response, 'valid');
    }
  }
  
  function addClass(el, className) {
    if (el.classList) {
      el.classList.add(className);
    }
    else {
      el.className += ' ' + className;
    }
  }
  
  function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
      else
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
  
  function hasClass(el, className) {
    if (el.classList) {
      console.log(el.classList);
      return el.classList.contains(className);  
    }
    else {
      new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className); 
    }
  }
  
})();


// THIS IS THE END OF SIGNUP FORM










// THIS IS THE BEGINING OF FOCUSED LINE SIGNUP FORM

document.getElementById("form-validation-login-4-line").onsubmit = function () {

    var e = document.forms["form-validation-login-4-line"]["email4"].value;
    var u = document.forms["form-validation-login-4-line"]["username4"].value;
    var p = document.forms["form-validation-login-4-line"]["password4"].value;
    var t = document.forms["form-validation-login-4-line"].checkbox10.checked;

    console.log(t);


    var submit = true;
    

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) {  
        emailErrorLine = "Your email is not valid";
        document.getElementById("email4_error_login_line").innerHTML = emailErrorLine;
        submit = false;
    }
     

    if (u.length < 8) {
        usernameErrorLine = "8 or more characters";
        document.getElementById("username4_error_login_line").innerHTML = usernameErrorLine;
        submit = false;

    } else if (u.length > 100) {
        usernameErrorLine = "Way too many characters";
        document.getElementById("username4_error_login_line").innerHTML = usernameErrorLine;
        submit = false;
    }



    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(p)) {
        passwordLengthLine = "Please match all the bullets listed below";
        document.getElementById("password4_error_login_line").innerHTML = passwordLengthLine;
        // document.getElementById("password1").style.border="1px solid #ec008c";
        submit = false;

    }

    if (/^(?=.*[_\W]).+$/.test(p)) {
        passwordLengthLine = "No special characters allowed";
        document.getElementById("password4_error_login_line").innerHTML = passwordLengthLine;
        submit = false;
    }

    if(t !== true) {
        checkboxErrorLine = "Please select the checkbox above";
        document.getElementById("checkbox4_error_login_line").innerHTML = checkboxErrorLine;
        submit = false;
    } 


    return submit;
}

function removeWarningLogin() {
    document.getElementById(this.id + "_error_login_line").innerHTML = "";

    var t = document.forms["form-validation-login-line"].checkbox10.checked;

    if(t == true) {
      document.getElementById("checkbox4_error_login_line").innerHTML = "";
    }
}

document.getElementById("email4").onkeyup = removeWarningLogin;
document.getElementById("username4").onkeyup = removeWarningLogin;
document.getElementById("password4").onkeyup = removeWarningLogin;
// document.getElementById("checkbox1").onkeyup = removeWarningLogin;



// show or hide password with line
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



// HELPER TEXT 1
(function(){
  var password1 = document.querySelector('.password4');
  
  var helperText = {
    charLength: document.querySelector('.helper-text-1 .length'),
    lowercase: document.querySelector('.helper-text-1 .lowercase'),
    uppercase: document.querySelector('.helper-text-1 .uppercase'),
    number: document.querySelector('.helper-text-1 .number')
    // specialchar: document.querySelector('.helper-text-1 .specialchar')
  };
  
  var pattern = {
    charLength: function() {
      if( password1.value.length >= 8 ) {
        return true;
      }
    },
    lowercase: function() {
      var regex = /^(?=.*[a-z]).+$/; // Lowercase character pattern

      if( regex.test(password1.value) ) {
        return true;
      }
    },
    uppercase: function() {
      var regex = /^(?=.*[A-Z]).+$/; // Uppercase character pattern

      if( regex.test(password1.value) ) {
        return true;
      }
    },
    number: function() {
      var regex = /^(?=.*[0-9]).+$/; // Number pattern

      if( regex.test(password1.value) ) {
        return true;
      }
    }
    // specialchar: function() {
    //   var regex = /^(?=.*[_\W]).+$/; 

    //   if( regex.test(password1.value) ) {
    //     return true;
    //   }
    // }    
  };
  
  // Listen for keyup action on password field
  password1.addEventListener('keyup', function (){
    // Check that password is a minimum of 8 characters
    patternTest( pattern.charLength(), helperText.charLength );
    
    // Check that password contains a lowercase letter    
    patternTest( pattern.lowercase(), helperText.lowercase );
    
    // Check that password contains an uppercase letter
    patternTest( pattern.uppercase(), helperText.uppercase );
    
    // Check that password contains a number 
    patternTest( pattern.number(), helperText.number );

    // Check that password contains a special character
    // patternTest( pattern.specialchar(), helperText.specialchar );
    
    // Check that all requirements are fulfilled
    if( hasClass(helperText.charLength, 'valid') &&
        hasClass(helperText.lowercase, 'valid') && 
        hasClass(helperText.uppercase, 'valid') && 
        hasClass(helperText.number, 'valid') 
        // hasClass(helperText.specialchar, 'valid')
    ) {
      addClass(password1.parentElement, 'valid');
        var secure = $('ul.helper-text-1 li.secure').val('');
        secure.empty();
        $("ul.helper-text-1 li").fadeOut('fast');
        $("ul.helper-text-1").append("<li class='secure evo-cmy-green evo-text-small' style='background: none; list-style-position: inside; padding-left:0;'>Your password is more secure!</li>");
    }
    else {
      removeClass(password1.parentElement, 'valid');
        $("ul.helper-text-1 li.secure").remove();
        $("ul.helper-text-1 li").fadeIn();

    }
  });

  
  function patternTest(pattern, response) {
    if(pattern) {
      addClass(response, 'valid');
    }
    else {
      removeClass(response, 'valid');
    }
  }
  
  function addClass(el, className) {
    if (el.classList) {
      el.classList.add(className);
    }
    else {
      el.className += ' ' + className;
    }
  }
  
  function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
      else
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
  
  function hasClass(el, className) {
    if (el.classList) {
      console.log(el.classList);
      return el.classList.contains(className);  
    }
    else {
      new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className); 
    }
  }

  
})();

// THIS IS THE END OF FOCUSED LINE SIGNUP FORM



