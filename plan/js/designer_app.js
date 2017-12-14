var scale = 1,width=0,height=0;
$(function(){
	//加载容器属性和元件
	initContainer();
	setInterval("refreshContainer()",10000);
	setInterval("refreshTimer()",1000);
	$(window).resize(function() {
		scale = $("body").width()/width;
		$("svg.designer").css("transform","scale("+scale+")");
		$("div.full-wrapper").css("height",height*scale);
		
		var modalScale = window.innerWidth/$(window).width();
		
		$("#commandModal .modal-dialog").css("transform","scale("+modalScale+")");
		$("#commandModal .modal-dialog").css("margin-left",(window.pageXOffset+($(window).width()-260)*0.5*modalScale)+"px");
		$("#commandModal .modal-dialog").css("margin-top",(window.pageYOffset+20)+"px");
		
		$("#commandFixedModal .modal-dialog").css("transform","scale("+modalScale+")");
		$("#commandFixedModal .modal-dialog").css("margin-left",(window.pageXOffset+($(window).width()-240)*0.5*modalScale)+"px");
		$("#commandFixedModal .modal-dialog").css("margin-top",(window.pageYOffset+20)+"px");
	});
});
/**
 * 初始化容器
 * @return
 */
function initContainer(){
	$.ajax({
		 url:'DesignerAction!loadDesigner.action',
		 data: {'ruleId':$("#ruleId").val(),'dtuSn':$("#dtuSn").val()},
	     type: 'POST',
	     dataType:"json",
	     success: function(json) {
			//初始化容器样式
			 if(json.result){
				 var con = json.container;
				 if(con){
					 height=con.height;
					 width=con.width;
					 scale = $("body").width()/width;
					 $("div.full-wrapper").css("height",height*scale);
					 $("svg.designer").css("transform","scale("+scale+")");
					 $("svg.designer").css("width",con.width);
					 $("svg.designer").css("height",con.height);
					 $("svg.designer").css("background-color",con.bgColor);
					 $("svg.designer").css("background-image","url("+initCDN+"userimg/"+con.bgImage+")");
					 $("svg.designer").empty();
					 $("#conId").val(con.id);
				 }
				 json.signals.map(function(signal){
					 signalMap[''+signal.id]=signal;
				 });
				 json.elements.map(createElement);
			 }
	     }
	});
}

function refreshContainer(){
	$.ajax({
		 url:'DesignerAction!loadDesignerByConId.action',
		 data: {
				'ruleId':$("#ruleId").val(),
				'conId':$("#conId").val(),
				'dtuSn':$("#dtuSn").val()
		 },
	     type: 'POST',
	     dataType:"json",
	     success: function(json) {
			//初始化容器样式
			 if(json.result){
				 var con = json.container;
				 if(con){
					 height=con.height;
					 width=con.width;
					 scale = $("body").width()/width;
					 $("div.full-wrapper").css("height",height*scale);
					 $("svg.designer").css("transform","scale("+scale+")");
					 $("svg.designer").css("width",con.width);
					 $("svg.designer").css("height",con.height);
					 $("svg.designer").css("background-color",con.bgColor);
					 $("svg.designer").css("background-image","url("+initCDN+"userimg/"+con.bgImage+")");
					 $("svg.designer").empty();
				 }
				 json.signals.map(function(signal){
					 signalMap[''+signal.id]=signal;
				 });
				 json.elements.map(createElement);
			 }
	     }
	});
}
function refreshTimer(){
	d3.select("svg text.timer-text").text(function(d){return new Date().Format(d.content);});
}