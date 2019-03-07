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
function modaldemo(){
    $("#modal-demo").modal("show");
}
