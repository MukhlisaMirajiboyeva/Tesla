$(function(){
    $('.slider').slick({
        arrows:false,
        fade:true,
        autoplay:3000,
        dots: true
    });
 

  $('.button_side').on('click', function(){
    $('.menu').addClass('active');
  });
 $('.close').on('click', function(){
  $('.menu').removeClass('active');
 });
});