
$(function(){
  $('#one-column-slideshow').maximage({
    cycleOptions: {
      fx: 'fade',
      // Speed has to match the speed for CSS transitions
      speed: 1000, 
      timeout: 0,
      prev: '#arrow_left',
      next: '#arrow_right',
      pause: 1
    },
    onFirstImageLoaded: function(){
      jQuery('#cycle-loader').hide();
      jQuery('#1-column-slideshow').fadeIn('fast');
    },
    // cssBackgroundSize might be causing choppiness in retina display safari
    cssBackgroundSize: false 
  });
  
  // Helper function to Fill and Center the HTML5 Video
  jQuery('#html5video').maximage('maxcover');
  
  // To show it is dynamic html text
  jQuery('.in-slide-content').delay(1200).fadeIn();
});






