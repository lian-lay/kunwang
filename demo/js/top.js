// 顶端购物车下拉框
const $cart = $('.top .tap_nav .cart')
const $no_cart = $('.top .no_cart')
$cart.mouseover(function () {
	$no_cart.css({'display': 'block'})
})
$cart.mouseout(function () {
	$no_cart.css({'display': 'none'})
})

// 顶端购物车下拉框结束

//nav下拉菜单
$nav = $('.main').find('.nav_bo')
$xiala = $('.main').find('.xiala')

$nav.mouseenter(function(){
	$('.main .loog').addClass('showbor')
    $('.main').children(".xiala").stop(true).slideDown();
});

$nav.mouseleave(function(){
	$('.main .loog').removeClass('showbor')
    $('.main').children(".xiala").stop(true).slideUp();
});

$xiala.mouseenter(function(){
	$('.main .loog').addClass('showbor')
    $('.main').children(".xiala").stop(true).slideDown();
});

$xiala.mouseleave(function(){
	$('.main .loog').removeClass('showbor')
    $('.main').children(".xiala").stop(true).slideUp();
});
//nav下拉菜单结束

//轮播图左侧nav控制显示菜单
const $lunbo_nav = $('.main').find('.lunbo_nav')
const $show_box = $('.main').find('.show_box')

$lunbo_nav.mouseenter(function () {
    $show_box.css({'display': 'flex'})
})
$lunbo_nav.mouseleave(function () {
    $show_box.css({'display': 'none'})
})
$show_box.mouseenter(function () {
    $show_box.css({'display': 'flex'})
})
$show_box.mouseleave(function () {
    $show_box.css({'display': 'none'})
})

//轮播图左侧nav控制显示菜单结束

// 主页轮播图
let idx = 0
const $right_bnt = $('.lunbo').find('.bnt_right')
const $left_bnt = $('.lunbo').find('.bnt_left')
const $smli = $('.lunbo').find('.cent_use')
const $lunbo_img = $('.lunbo').find('.img_box')
const img_length = $lunbo_img.children().length

//右按钮的监听
$right_bnt.click(function(){
    //防动画积累
    if($lunbo_img.is(":animated")) return;
    //老图淡出
    $lunbo_img.find("img").eq(idx).fadeOut('fast');
    //信号量改变
    idx++;
    if(idx > img_length - 1){
        idx = 0;
    }
    //新图淡入
    $lunbo_img.find("img").eq(idx).fadeIn('fast');

    //缩略图的变化
    $smli.eq(idx).addClass("show_thume").siblings().removeClass("show_thume");
});

//左按钮的监听
$left_bnt.click(function(){
    //防动画积累
    if($lunbo_img.is(":animated")) return;

    //老图淡出
    $lunbo_img.find("img").eq(idx).fadeOut('fast');
    //信号量改变
    idx--;
    if(idx < 0){
        idx = 4;
    }
    //新图淡入
    $lunbo_img.find("img").eq(idx).fadeIn('fast');

    //小圆点的变化
    $smli.eq(idx).addClass("show_thume").siblings().removeClass("show_thume");
});


//缩略图的监听
$smli.click(function(){
    //老图淡出
    $lunbo_img.find("img").eq(idx).fadeOut('fast');
    //改变下标
    idx = $(this).index();
    //新图淡入
    $lunbo_img.find("img").eq(idx).fadeIn('fast');

    //缩略图的变化
    $smli.eq(idx).addClass("show_thume").siblings().removeClass("show_thume");
});
// 主页轮播图结束