jQuery(document).ready(function($){
  var timelineBlocks = $('.cd-timeline-block'),
    offset = 0.8;

  //hide timeline blocks which are outside the viewport
  hideBlocks(timelineBlocks, offset);

  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    (!window.requestAnimationFrame) 
      ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
      : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
  });

  function hideBlocks(blocks, offset) {
    blocks.each(function(){
      ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    });
  }

  function showBlocks(blocks, offset) {
    blocks.each(function(){
      ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
    });
  }

  $(".cd-picture").on({
      mouseenter: function () {
          console.log('ok')
          $('#picture').css({ fill: "#00aeef" });
      },
      mouseleave: function () {
          $('#picture').css({ fill: "#DCDCDB" });
      }
  });

  $(".cd-movie").on({
      mouseenter: function () {
          console.log('ok')
          $('#movie').css({ fill: "#00aeef" });
      },
      mouseleave: function () {
          $('#movie').css({ fill: "#DCDCDB" });
      }
  });

   $(".cd-location").on({
      mouseenter: function () {
          console.log('ok')
          $('#location').css({ fill: "#00aeef" });
      },
      mouseleave: function () {
          $('#location').css({ fill: "#DCDCDB" });
      }
  });

  $(".cd-picture-second").on({
      mouseenter: function () {
          console.log('ok')
          $('#picture-second').css({ fill: "#00aeef" });
      },
      mouseleave: function () {
          $('#picture-second').css({ fill: "#DCDCDB" });
      }
  });

  $(".cd-movie-second").on({
      mouseenter: function () {
          console.log('ok')
          $('#movie-second').css({ fill: "#00aeef" });
      },
      mouseleave: function () {
          $('#movie-second').css({ fill: "#DCDCDB" });
      }
  });

   $(".cd-location-second").on({
      mouseenter: function () {
          console.log('ok')
          $('#location-second').css({ fill: "#00aeef" });
      },
      mouseleave: function () {
          $('#location-second').css({ fill: "#DCDCDB" });
      }
  });

});