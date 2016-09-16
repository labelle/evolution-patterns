/* ================================================================================ */
/* -------------------------------- SLIDESHOW ------------------------------------- */
/* ================================================================================ */


jQuery(document).ready(function ($) {

  // $('#checkbox').change(function(){
  //   setInterval(function () {
  //       moveRight();
  //   }, 3000);
  // });
  
  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  
  $('#slider').css({ width: slideWidth, height: slideHeight });
  
  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});





jQuery(document).ready(function ($) {

  // $('#checkbox').change(function(){
  //   setInterval(function () {
  //       moveRight();
  //   }, 3000);
  // });
  
  var slideCount = $('#slider-full-width ul li').length;
  var slideWidth = $('#slider-full-width ul li').width();
  var slideHeight = $('#slider-full-width ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  
  $('#slider-full-width').css({ width: slideWidth, height: slideHeight });
  
  $('#slider-full-width ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
    $('#slider-full-width ul li:last-child').prependTo('#slider-full-width ul');

    function moveLeft() {
        $('#slider-full-width ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider-full-width ul li:last-child').prependTo('#slider-full-width ul');
            $('#slider-full-width ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider-full-width ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider-full-width ul li:first-child').appendTo('#slider-full-width ul');
            $('#slider-full-width ul').css('left', '');
        });
    };

    $('a.control_prev_full').click(function () {
        moveLeft();
    });

    $('a.control_next_full').click(function () {
        moveRight();
    });

});






jQuery(document).ready(function ($) {

  // $('#checkbox').change(function(){
  //   setInterval(function () {
  //       moveRight();
  //   }, 3000);
  // });
  
  var slideCount = $('#slider-full-screen ul li').length;
  var slideWidth = $('#slider-full-screen ul li').width();
  var slideHeight = $('#slider-full-screen ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  
  $('#slider-full-screen').css({ width: slideWidth, height: slideHeight });
  
  $('#slider-full-screen ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
    $('#slider-full-screen ul li:last-child').prependTo('#slider-full-screen ul');

    function moveLeft() {
        $('#slider-full-screen ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider-full-screen ul li:last-child').prependTo('#slider-full-screen ul');
            $('#slider-full-screen ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider-full-screen ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider-full-screen ul li:first-child').appendTo('#slider-full-screen ul');
            $('#slider-full-screen ul').css('left', '');
        });
    };

    $('a.control_prev_full_screen').click(function () {
        moveLeft();
    });

    $('a.control_next_full_screen').click(function () {
        moveRight();
    });

});






// ----------------------------------------------------------------
//                      Container Slideshow 
// ----------------------------------------------------------------


$(document).ready(function() {
 
  $("#container-slideshow").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});
