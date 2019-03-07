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

$(".select").click(function(){
  	$(".select-content").slideToggle();
});

// 自己写的tab切换
$(".select-left li").hover(function() {
    $(this).siblings().removeClass("blue");
    $(this).addClass("blue");
    $(".select-right ul").hide();
    var index=$(".select-left li").index($(this));
    $(".select-right ul").eq(index).show();
});


// 显示推广弹框
function extension() {
    $("#extension").modal("show");
}

// 显示删除弹框
function modalDelete() {
    $("#modalDelete").modal("show");
}

// 显示添加页面
function addPageManage(){
    $("#pageManage").css("display","none");
    $("#addpage").css("display","block");
}

// 页面管理添加完成
function addFinish(){
    $("#pageManage").css("display","block");
    $("#addpage").css("display","none");
}   
