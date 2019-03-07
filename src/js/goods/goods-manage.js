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

// 显示删除弹框
function modalDelete(){
    $("#modal-demo").modal("show");
}

// 显示上架失败弹框
function bookFail(){
    $("#book-fail").modal("show");
}



// 多选框
$(function(){
    $('.skin-minimal input').iCheck({
        checkboxClass: 'icheckbox-blue',
        radioClass: 'iradio-blue',
        increaseArea: '20%'
})});

// 显示商品分类
$(".xiala div").click(function(){
    $(".items-content").slideToggle();
});
$(".xiala-all").click(function(){
    $(".items").slideToggle();
});
$(".xiala-one").click(function(){
    $(".items ul").slideToggle();
});



// 富文本
// var ue = UE.getEditor('editor');