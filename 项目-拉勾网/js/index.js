/**
 * Created by zhaoying on 2016/10/30.
 */
//var menuBox=document.getElementsByClassName('menu_box');
//var dn=document.getElementsByClassName('dn');
//menuBox.onmouseenter=function(e){
//    e=e||window.event;
//    dn.style.display='block';
//    console.log('ok');
//
//};
//menuBox.onmouseleave=function(e){
//    e=e||window.event;
//    dn.style.display='none';
//};

$(function(){
    var $menuBox=$('.menu_box');
    $menuBox.bind('mouseenter', function (e) {
        e=e||window.event;
        $menuBox.find('.dn').show().$menuBox.find('.dn').siblings().hide()
    }).bind('mouseleave', function (e) {
        e=e||window.event;
        $menuBox.find('.dn').hide()
    })
})










