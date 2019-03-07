// tab切换
var mall_decorate_main = {
    init: function() {
        this.changeTabs()
    },
    bindEvent: function() {

    },
    //tab切换
    changeTabs: function() {
        jQuery.Huitab = function(tabBar, tabCon, class_name, tabEvent, i) {
            var $tab_menu = $(tabBar);
            // 初始化操作
            $tab_menu.removeClass(class_name);
            $(tabBar).eq(i).addClass(class_name);
            $(tabCon).hide();
            $(tabCon).eq(i).show();

            $tab_menu.bind(tabEvent, function() {
                $tab_menu.removeClass(class_name);
                $(this).addClass(class_name);
                var index = $tab_menu.index(this);
                $(tabCon).hide();
                $(tabCon).eq(index).show()
            })
        };
        jQuery.Huitab("#tab_demo .tabBar span", "#tab_demo .tabCon", "current", "click", "0");
    }
};
$(function() {
    mall_decorate_main.init();
})

// 自己写的tab切换
$(".link-ul li").hover(function() {
    $(this).siblings().removeClass("blue");
    $(this).addClass("blue");
    $(".link-right").hide();
    var index=$(".link-ul li").index($(this));
    $(".link-right").eq(index).show();
});

$(".cat-left ul li").hover(function() {
    $(this).siblings().removeClass("blue");
    $(this).addClass("blue");
    $(".cat-right ul").hide();
    var index=$(".cat-left ul li").index($(this));
    $(".cat-right ul").eq(index).show();
});

// 显示弹窗1
function modaldemo(){
    $("#modal-demo").modal("show");
}
function modaladd(){
    $("#modal-add").modal("show");
}
// 显示弹框2
function showModal2(){
    $("#modal2").modal("show");
}
 function closeModal2(){
    $("#modal2").modal("hide");
}    
// 显示添加页面
function addLunBo(){
    $("#addLunBo").css("display","none");
    $("#addpage").css("display","block");
}
// 显示添加详情页面
function addModal(){
    $("#addmodal1").css("display","none");
    $("#addmodal2").css("display","block");
}  
// 显示添加详情完成
function addModalFinsh(){
    $("#addmodal1").css("display","block");
    $("#addmodal2").css("display","none");
} 
// 添加轮播完成
function addFinish(){
    $("#addLunBo").css("display","block");
    $("#addpage").css("display","none");
}    
// 显示添加图片完成
function addPicFinsh(){
   $("#modal-add").modal("hide");
}

// 滑动条
scale = function (btn, bar) {
    this.btn = document.getElementById(btn);
    this.bar = document.getElementById(bar);
    this.init();
};
scale.prototype = {
    init: function () {
        var f = this, g = document, b = window, m = Math;
        f.btn.onmousedown = function (e) {
            var x = (e || b.event).clientX;
            var l = this.offsetLeft;
            var max = f.bar.offsetWidth - this.offsetWidth;
            g.onmousemove = function (e) {
                var thisX = (e || b.event).clientX;
                var to = m.min(max, m.max(-2, l + (thisX - x)));
                f.btn.style.left = to + 'px';

                //此句代码可以除去选中效果
                b.getSelection ? b.getSelection().removeAllRanges() : g.selection.empty();
            };
            g.onmouseup = function(){this.onmousemove=null;};
        }
    }
}
new scale('move', 'bl');


// 显示下拉
$(".down").click(function(){
    $(".item-cat").slideToggle();
});
