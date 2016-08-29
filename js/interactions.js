
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
