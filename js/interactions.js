
$('#evo-fade-1-run').click(function() {
  $("div.evo-fade-1").hide().each(function(i) {
      $(this).fadeIn(1500);
  });
});


$('#evo-slide-1-run').click(function() {
   $('div.evo-slide-1').hide().each(function (i) {
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


$("#view_code_slide").click(function(){
    $("#toggle_code_slide").slideToggle();
});
