const $train= $('.banner').find('.song_box')
const $bnt_left = $('.banner').find('.bnt_left')
const $bnt_right = $('.banner').find('.bnt_right')

let aume = $train.children('.song_god').length
// 原盒子数量

//克隆大盒子
$train.children('.song_god').clone().appendTo($train)

let idx = 0
// 定义下表
$bnt_right.click(rightBtn)
// 定时器
function rightBtn(){
    // 防止多次点击
    if($train.is(":animated")){
        return
    }

    idx++
    $train.animate({"left":idx * -300},400,function(){
        if(idx > aume - 1){
            idx = 0
            $train.css("left",0)  //瞬间移动
        }
    })
} 
$bnt_left.click(leftBtn)
function leftBtn(){
    // 防止多次点击
    if($train.is(":animated")){
        return
    }

    idx--
    if(idx < 0){
        idx = aume - 1;
        $train.css("left" , aume * -300);
    }
    $train.animate({"left":idx * -300},400);
} 
let timer = setInterval(rightBtn, 2000);
//定时器

$train.mouseenter(function(){
    clearInterval(timer);
});
// 取消定时

$train.mouseleave(function(){
    clearInterval(timer);
    timer = setInterval(rightBtn, 2000);
});
// 恢复定时