$bigbox = $('.banner').find('.question_box')

$bigbox.mouseenter(function(){
    $(this).children(".question_bottom").stop(true).slideDown();
});

$bigbox.mouseleave(function(){
    $(this).children(".question_bottom").stop(true).slideUp();
});