
$('#evo-fade-1-run').click(function() {
  $("div.evo-fade-1").hide().each(function(i) {
      $(this).fadeIn(1500);
  });
});


$('#evo-swipe-1-run').click(function() {
   $('div.evo-swipe-1').hide().each(function (i) {
      var step = $(this);
      setTimeout(function () {
          step.slideDown(1500);
      }, 0)
  });
});

$("#evo-scroll-1-run").click(function() {
    $('html, body').animate({
        scrollTop: $("#scroll_here").offset().top
    }, 1500);
});


$(".view-hide").click(function(){
    $(this).text(function(i, v) {
      return v === 'view code' ?  'hide code' : 'view code';
    })
});


$("#view_code_fade").click(function(){
    $("#toggle_code_fade").slideToggle();
});


$("#view_code_swipe").click(function(){
    $("#toggle_code_swipe").slideToggle();
});

$("#view_code_1").click(function(){
    $("#toggle_code_1").slideToggle();
});

$("#view_code_2").click(function(){
    $("#toggle_code_2").slideToggle();
});

$("#view_code_3").click(function(){
    $("#toggle_code_3").slideToggle();
});

$("#view_code_4").click(function(){
    $("#toggle_code_4").slideToggle();
});

$("#view_code_5").click(function(){
    $("#toggle_code_5").slideToggle();
});

$("#view_code_6").click(function(){
    $("#toggle_code_6").slideToggle();
});

$("#view_code_7").click(function(){
    $("#toggle_code_7").slideToggle();
});

$("#view_code_8").click(function(){
    $("#toggle_code_8").slideToggle();
});

$("#view_code_9").click(function(){
    $("#toggle_code_9").slideToggle();
});

$("#view_code_10").click(function(){
    $("#toggle_code_10").slideToggle();
});

$("#view_code_11").click(function(){
    $("#toggle_code_11").slideToggle();
});

$("#view_code_12").click(function(){
    $("#toggle_code_12").slideToggle();
});

$("#view_code_13").click(function(){
    $("#toggle_code_13").slideToggle();
});

$("#view_code_14").click(function(){
    $("#toggle_code_14").slideToggle();
});






$(document).ready(function() {
  window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check; 
  }

  if(window.mobilecheck() === false) {
  
    $(window).scroll(function() {
      var $scroll_img = $('.monolake-scroll-img');
      var st = $(window).scrollTop();
      var opac = (1 - (st-400)/300);

      // Obtains value for how far from top page is scrolled
      var top_scroll = $(window).scrollTop();


      // Parallax effect to main background
      $scroll_img.css({
        top: (Math.abs(top_scroll) * 0.7) + 'px'
      });
      if(top_scroll > 200) {
        $scroll_img.css({
          "opacity": opac
        });
      }
      // if(top_scroll < 200) {
      //   $scroll_img.css({
      //     "opacity": 0
      //   });
      // }
    });


    // Fade in / Fade out effect on windows resize
    $(window).resize(function(){
      var $resize_img = $('.monolake-scroll-img');

      var timer;

      if ($(window).width() < 580) {
        timer = setTimeout(function() {
          $($resize_img).animate({
            opacity: '0'
          }, 800);

        }, 0);

        function stopTimer() {
          if ($resize_img.css('opacity') == 0) {
            clearTimeout(timer);
          }
        }

        stopTimer();

      }

      if ($(window).width() > 581) {
        timer = setTimeout(function() {
          if ($resize_img.css('opacity') == 0) {
            $($resize_img).animate({
              opacity: '1'
            }, 800);
          }

        }, 0);

        function stopTimer() {
          if ($resize_img.css('opacity') == 1) {
            clearTimeout(timer);
          }
        }

        stopTimer();

      }

    });

  }


});




// ----------------------------------------------------------------
// Isotope Portfolio Grid / Filtering functionality
// ----------------------------------------------------------------
$(function () {
    "use strict";

    $(document).ready(function () {
        int_isotopPortfolio();
    });

    $(window).load(function () {
        int_isotopPortfolio();

        // Site Preloader
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });

    });

    function int_isotopPortfolio() {

        // Portfolio Grid
        var $container = $('.portfolio-grid');

        var layout_mode;
        if ($container.hasClass("masonry")) {
            layout_mode = "masonry";
        } else {
            layout_mode = "fitRows"
        }


        $container.isotope({
            itemSelector: '.portfolio-item',
            layoutMode: layout_mode,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        })


        // bind filter button click
        $('.portfolio-filter').on('click', '.categories', function () {
            var filterValue = $(this).attr('data-filter');
            $container.isotope({ filter: filterValue });
            console.log("ok")
        });

        // change active class on categories
        $('.categories-filter').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', '.categories', function () {
                $buttonGroup.find('.active').removeClass('active');
                $(this).addClass('active');
            });

        });
    };

});



// ----------------------------------------------------------------
//                      Scale Image 
// ----------------------------------------------------------------

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );



(function() {
  var triggerBttn = document.getElementById( 'trigger-overlay' ),
    overlay = document.querySelector( 'div.overlay' ),
    closeBttn = overlay.querySelector( 'button.overlay-close' );
    transEndEventNames = {
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'msTransition': 'MSTransitionEnd',
      'transition': 'transitionend'
    },
    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
    support = { transitions : Modernizr.csstransitions };

  function toggleOverlay() {
    if( classie.has( overlay, 'open' ) ) {
      classie.remove( overlay, 'open' );
      classie.add( overlay, 'close' );
      var onEndTransitionFn = function( ev ) {
        if( support.transitions ) {
          if( ev.propertyName !== 'visibility' ) return;
          this.removeEventListener( transEndEventName, onEndTransitionFn );
        }
        classie.remove( overlay, 'close' );
      };
      if( support.transitions ) {
        overlay.addEventListener( transEndEventName, onEndTransitionFn );
      }
      else {
        onEndTransitionFn();
      }
    }
    else if( !classie.has( overlay, 'close' ) ) {
      classie.add( overlay, 'open' );
    }
  }

  triggerBttn.addEventListener( 'click', toggleOverlay );
  closeBttn.addEventListener( 'click', toggleOverlay );

  $('#trigger-overlay').click(function(){
  $('html').css('overflow', 'hidden');
  });
  $('.overlay-close').click(function(){
  $('html').css('overflow', 'scroll');
  });
  
})();




// ----------------------------------------------------------------
//            Fix for HTML5 Video on any device 
// ----------------------------------------------------------------


var v = document.getElementById("movie");
v.onclick = function() {
  if (v.paused) {
    v.play();
  } else {
    v.pause();
  }
};






