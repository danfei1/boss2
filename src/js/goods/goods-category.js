// 分支切换
function branch(e){
	var i = 0;
	var silb = [];	
	silb[0] = $(e).parent().parent().next(".branch");
	while(silb[i].length!=0){
		silb[i].css("display","table-row");
		if(silb[i].next(".branch")){
			silb[i+1] = silb[i].next(".branch");
			i++;
		}else{
			break;
		}
	}	
	if($(e).text()=="+"){
		$(e).text("-");
	}else{
		$(e).text("+");
		for(var j=0;j<silb.length;j++){
			silb[j].css("display","none");
		}
	}
}

// 显示删除弹框
function modalDelete() {
    $("#modalDelete").modal("show");
}

// 显示添加一级分类弹框
function addFir() {
    $("#addFir").modal("show");
}

// 显示添加二级分类弹框
function addSec() {
    $("#addSec").modal("show");
}

// 显示编辑一级分类弹框
function extensionFir() {
    $("#extensionFir").modal("show");
}

// 显示编辑二级分类弹框
function extensionSec() {
    $("#extensionSec").modal("show");
}
