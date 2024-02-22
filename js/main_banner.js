$(function () {
  var item_width = $('.main_item').outerWidth(true);
  var timer;

  function slide_ani() {
      var left_indent = parseInt($('.main_banner_img_all').css('left')) - item_width;
      $('.main_banner_img_all').animate({
          'left': left_indent + 'px'
      }, 600, function () {
          $('.main_banner_img_all .main_item:last').after($('.main_banner_img_all .main_item:first'));
          $('.main_banner_img_all').css('left', -item_width + 'px');
      });
  }

  function start_timer() {
      timer = setInterval(slide_ani, 6000);
  }

  function stop_timer() {
      clearInterval(timer);
  }

  // 마우스 이벤트 
$(".main_banner_slide").mouseenter(function () {
     stop_timer();
 }).mouseleave(function () {
     start_timer();
 });

  $('.slide_button .prev').click(function () {
      var left_indent = parseInt($('.main_banner_img_all').css('left')) + item_width;
      $('.main_banner_img_all').animate({
          'left': left_indent + 'px'
      }, 600, function () {
          $('.main_banner_img_all .main_item:first').before($('.main_banner_img_all .main_item:last'));
          $('.main_banner_img_all').css({
              'left': -item_width + 'px'
          });
      });
  });

  $('.slide_button .next').click(function () {
    var left_indent = parseInt($('.main_banner_img_all').css('left')) - item_width;
    $('.main_banner_img_all').animate({
        'left': left_indent + 'px'
    }, 600, function () {
        $('.main_banner_img_all').css({
            'left': -item_width + 'px'
        });
        $('.main_banner_img_all .main_item:last').after($('.main_banner_img_all .main_item:first'));
    });
});


  start_timer();
});
