(function() { 
  var instances = plyr.setup({
    debug: true
  });

  function get(selector) {
    return document.querySelector(selector);
  }

  function on(element, type, callback) {
    if (!(element instanceof HTMLElement)) {
      element = get(element);
    }
    element.addEventListener(type, callback, false);
  }

  instances.forEach(function(instance) {
    on('.js-play', 'click', function() { 
      instance.play();
    });
    
    on('.js-pause', 'click', function() { 
      instance.pause();
    });
    
    on('.js-stop', 'click', function() { 
      instance.stop();
    });
    
    on('.js-rewind', 'click', function() { 
      instance.rewind();
    });
    
    on('.js-forward', 'click', function() { 
      instance.forward();
    });
  });
})();