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



// HELPER TEXT
(function(){
  var password = document.querySelector('.password');
  
  var helperText = {
    charLength: document.querySelector('.helper-text .length'),
    lowercase: document.querySelector('.helper-text .lowercase'),
    uppercase: document.querySelector('.helper-text .uppercase'),
    number: document.querySelector('.helper-text .number'),
    specialchar: document.querySelector('.helper-text .specialchar')
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
    }, 
    specialchar: function() {
      var regex = /^(?=.*[_\W]).+$/; // Special character pattern

      if( regex.test(password.value) ) {
        return true;
      }
    }   
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
    patternTest( pattern.specialchar(), helperText.specialchar );
    
    // Check that all requirements are fulfilled
    if( hasClass(helperText.charLength, 'valid') &&
        hasClass(helperText.lowercase, 'valid') && 
        hasClass(helperText.uppercase, 'valid') && 
        hasClass(helperText.number, 'valid') &&
        hasClass(helperText.specialchar, 'valid') 
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






// HELPER TEXT 1
(function(){
  var password1 = document.querySelector('.password1');
  
  var helperText = {
    charLength: document.querySelector('.helper-text-1 .length'),
    lowercase: document.querySelector('.helper-text-1 .lowercase'),
    uppercase: document.querySelector('.helper-text-1 .uppercase'),
    number: document.querySelector('.helper-text-1 .number'),
    specialchar: document.querySelector('.helper-text-1 .specialchar')
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
    },
    specialchar: function() {
      var regex = /^(?=.*[_\W]).+$/; // Special character pattern

      if( regex.test(password1.value) ) {
        return true;
      }
    }    
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
    patternTest( pattern.specialchar(), helperText.specialchar );
    
    // Check that all requirements are fulfilled
    if( hasClass(helperText.charLength, 'valid') &&
        hasClass(helperText.lowercase, 'valid') && 
        hasClass(helperText.uppercase, 'valid') && 
        hasClass(helperText.number, 'valid') &&
        hasClass(helperText.specialchar, 'valid')
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