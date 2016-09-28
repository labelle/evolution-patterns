
// THIS IS THE BEGINING OF SIGNUP FORM

document.getElementById("form-validation-login").onsubmit = function () {

    var e = document.forms["form-validation-login"]["email"].value;
    var u = document.forms["form-validation-login"]["username"].value;
    var p = document.forms["form-validation-login"]["password"].value;

    var pattern = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

    var submit = true;
    

    if (e == null || e == "") {
        emailError = "Please enter your email";
        document.getElementById("email_error_login").innerHTML = emailError;
        submit = false;
    }

    if (u == null || u == "") {
        usernameError = "Please enter your username";
        document.getElementById("username_error_login").innerHTML = usernameError;
        submit = false;
    }


    if (p == null || p == "") {
        passwordError = "Please enter your password";
        document.getElementById("password_error_login").innerHTML = passwordError;
        submit = false;

    } else if (p !== pattern.test(p)) {
        passwordLength = "Please match all the bullets listed below";
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
document.getElementById("username").onkeyup = removeWarningLogin;
document.getElementById("password").onkeyup = removeWarningLogin;




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

document.getElementById("form-validation-login-line").onsubmit = function () {

    var e = document.forms["form-validation-login-line"]["email1"].value;
    var u = document.forms["form-validation-login-line"]["username1"].value;
    var p = document.forms["form-validation-login-line"]["password1"].value;
    var t = document.forms["form-validation-login-line"].checkbox10.checked;

    console.log(t);


    var submit = true;
    

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) {  
        emailErrorLine = "Your email is not valid";
        document.getElementById("email1_error_login_line").innerHTML = emailErrorLine;
        submit = false;
    }
     

    if (u.length < 8) {
        usernameErrorLine = "8 or more characters";
        document.getElementById("username1_error_login_line").innerHTML = usernameErrorLine;
        submit = false;

    } else if (u.length > 100) {
        usernameErrorLine = "Way too many characters";
        document.getElementById("username1_error_login_line").innerHTML = usernameErrorLine;
        submit = false;
    }



    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(p)) {
        passwordLengthLine = "Please match all the bullets listed below";
        document.getElementById("password1_error_login_line").innerHTML = passwordLengthLine;
        // document.getElementById("password1").style.border="1px solid #ec008c";
        submit = false;

    }

    if(/^(?=.*[_\W]).+$/.test(p)) {
        passwordLengthLine = "No special characters allowed";
        document.getElementById("password1_error_login_line").innerHTML = passwordLengthLine;
        submit = false;
    }

    if(t !== true) {
        checkboxErrorLine = "Please select the checkbox above";
        document.getElementById("checkbox1_error_login_line").innerHTML = checkboxErrorLine;
        submit = false;
    } 


    return submit;
}

function removeWarningLogin() {
    document.getElementById(this.id + "_error_login_line").innerHTML = "";

    var t = document.forms["form-validation-login-line"].checkbox10.checked;

    if(t == true) {
      document.getElementById("checkbox1_error_login_line").innerHTML = "";
    }
}

document.getElementById("email1").onkeyup = removeWarningLogin;
document.getElementById("username1").onkeyup = removeWarningLogin;
document.getElementById("password1").onkeyup = removeWarningLogin;
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
  var password1 = document.querySelector('.password1');
  
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
    }
    else {
      removeClass(password1.parentElement, 'valid');
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

