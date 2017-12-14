var command;
var closeTimer;
$(function(){
	$("#btnReadCommand").click(function(){
		if($("#commandModal").data("sending")){
			return;
		}
		var eleId = $("#hiddenElementId").val();
		$("#commandLoader").empty();
		$("#inputCommandValue").val('');
		$("input[name='commandValue']").prop('checked',false);
		$("#commandModal").data("sending",true);
		$("#commandLoader").empty().append("<span class='confirm-msg'><i class='fa fa-spinner fa-spin fa-lg fa-fw'></i> 读取中...</span>");
		$.ajax({
			 url:'DataAction!newSendCommand.action?t='+new Date().getTime(),
			 data: {
			 	"commandId":$("#hiddenCommandId").val(),
			 	"dtuSn":$("#dtuSn").val(),
			 	"code":0
			 },
		     type: 'POST',
		     dataType:"json",
		     success: function(json) {
				 if(eleId==$("#hiddenElementId").val()){
					 if(json.result=="success"){
						 if($("#hiddenCommandFCode").val()=='5'){
							 if(json.value=='1'){
								 $("#inputRadioFalse").prop('checked',false);
								 $("#inputRadioTrue").prop('checked',true);
							 }else if(json.value=='0'){
								 $("#inputRadioTrue").prop('checked',false);
								 $("#inputRadioFalse").prop('checked',true);
							 }
						 }else{
							 $("#inputCommandValue").val(json.value);
						 }
						 $("#commandLoader").empty().append("<span class='sendAT-success confirm-msg'><i class='fa fa-check fa-lg'></i> 读取成功</span>");
					 }else{
						 $("#commandLoader").empty().append("<span class='sendAT-error confirm-msg'><i class='fa fa-close fa-lg'></i> "+json.msg+"</span>");
					 }
				 }
				 $("#commandModal").data("sending",false);
		     },
		     error:function(e){
		    	 if(eleId==$("#hiddenElementId").val()){
		    		 $("#commandLoader").empty().append("<span class='sendAT-error confirm-msg'><i class='fa fa-close fa-lg'></i> 读取异常</span>");
		    	 }
		    	 $("#commandModal").data("sending",false);
		     }
		});
	});
	
	$("#btnWriteCommand").click(function(){
		if($("#commandModal").data("sending")){
			return;
		}
		$("#commandLoader").empty();
		var regValue = $("input[name='commandValue']:checked").val();
		if($("#hiddenCommandFCode").val()=='5'){
			if(!regValue){
				$("#commandLoader").empty().append("<span class='sendAT-error confirm-msg'><i class='fa fa-close fa-lg'></i> 不能为空，请选择</span>");
				return ;
			}
		}else{
			if(!$("#inputCommandValue").val()){
				$("#commandLoader").empty().append("<span class='sendAT-error confirm-msg'><i class='fa fa-close fa-lg'></i> 不能为空</span>");
				return ;
			}
			if(isNaN($("#inputCommandValue").val())){
				$("#commandLoader").empty().append("<span class='sendAT-error confirm-msg'><i class='fa fa-close fa-lg'></i> 请填写数值</span>");
				return ;
			}
			if(Number($("#inputCommandValue").val())<Number(command.lowerLimit) || 
					Number($("#inputCommandValue").val())>Number(command.upperLimit)){
				$("#commandLoader").empty().append("<span class='sendAT-error confirm-msg'><i class='fa fa-close fa-lg'></i> 写入超限，有限范围"
						+command.lowerLimit+"到"+command.upperLimit+"</span>");
				return ;
			}
			regValue = $("#inputCommandValue").val();
		}
		var eleId = $("#hiddenElementId").val();
		$("#commandModal").data("sending",true);
		$("#commandLoader").empty().append("<span class='confirm-msg'><i class='fa fa-spinner fa-spin fa-lg fa-fw'></i> 写入中...</span>");
		$.ajax({
			 url:'DataAction!newSendCommand.action?t='+new Date().getTime(),
			 data: {
			 	"commandId":$("#hiddenCommandId").val(),
			 	"dtuSn":$("#dtuSn").val(),
			 	"regValue":regValue,
			 	"code":1
			 },
		     type: 'POST',
		     dataType:"json",
		     success: function(json) {
				 if(eleId==$("#hiddenElementId").val()){
					 if(json.result=="success"){
						 $("#commandLoader").empty().append("<span class='sendAT-success confirm-msg'><i class='fa fa-check fa-lg'></i> 写入成功</span>");
						 refreshContainer();
						 closeTimer = setTimeout("$('#commandModal').modal('hide')",3000);
					 }else{
						 $("#commandLoader").empty().append("<span class='sendAT-error confirm-msg'><i class='fa fa-close fa-lg'></i> "+json.msg+"</span>");
					 }
				 }
				 $("#commandModal").data("sending",false);
		     },
		     error:function(e){
		    	 if(eleId==$("#hiddenElementId").val()){
		    		 $("#commandLoader").empty().append("<span class='sendAT-error confirm-msg'><i class='fa fa-close fa-lg'></i> 写入异常</span>");
		    	 }
		    	 $("#commandModal").data("sending",false);
		     }
		});
	});
	
	$("#btnWriteOK").click(function(){
		if($("#commandFixedModal").data("sending")){
			return;
		}
		if(!$("#hiddenCommandRegValue").val()){
			$("#commandFixedModal .modal-body").empty().append("<span class='sendAT-error confirm-msg'><i class='fa fa-close fa-lg'></i> 无法写入空值</span>");
			return ;
		}
		var eleId = $("#hiddenFixedElementId").val();
		$("#commandFixedModal").data("sending",true);
		$("#commandFixedModal .modal-body").empty().append("<span class='confirm-msg'><i class='fa fa-spinner fa-spin fa-lg fa-fw'></i> 执行中...</span>");
		$.ajax({
			 url:'DataAction!newSendCommand.action?t='+new Date().getTime(),
			 data: {
			 	"commandId":$("#hiddenSignalFlag").val(),
			 	"dtuSn":$("#dtuSn").val(),
			 	"regValue":$("#hiddenCommandRegValue").val(),
			 	"code":1
			 },
		     type: 'POST',
		     dataType:"json",
		     success: function(json) {
				 if(eleId==$("#hiddenFixedElementId").val()){
					 if(json.result=="success"){
						 $("#commandFixedModal .modal-body").empty().append("<span class='sendAT-success confirm-msg'><i class='fa fa-check fa-lg'></i> 执行成功！</span>");
						 refreshContainer();
						 closeTimer = setTimeout("$('#commandFixedModal').modal('hide')",3000);
					 }else{
						 $("#commandFixedModal .modal-body").empty().append("<span class='sendAT-error confirm-msg'><i class='fa fa-close fa-lg'></i> "+json.msg+"</span>");
					 }
				 }
				 $("#commandFixedModal").data("sending",false);
		     },
		     error:function(e){
		    	 if(eleId==$("#hiddenFixedElementId").val()){
		    		 $("#commandFixedModal .modal-body").empty().append("<span class='sendAT-error confirm-msg'><i class='fa fa-close fa-lg'></i> 执行异常！</span>");
		    	 }
		    	 $("#commandFixedModal").data("sending",false);
		     }
		});
	});
});

function openCommandModal(d){
	if(d.signalFlag){
		if($("#equipStatus").val()=='0'){
			modalMsg('失败！','设备离线，无法发送命令。',true);
			return ;
		}
		$("#commandLoader").empty();
		$("#inputCommandValue").val('');
		$("#hiddenElementId").val(d.id);
		$("input[name='commandValue']").prop('checked',false);
		$.ajax({
			 url:'RuleAction!selectByCommandId.action',
			 data: {'commandId':d.signalFlag},
		     type: 'POST',
		     dataType:"json",
		     success: function(json) {
				//初始化容器样式
				 if(json.result){
					$("#commandModalLabel").empty().append(json.command.fieldName);
					if(json.command.functionCode=='5'){
						$("#textGroup").hide();
						$("#radioGroup").show();
						$("#radioTrueValue").empty().append(json.command.trueValue);
						$("#radioFalseValue").empty().append(json.command.falseValue);
					}else{
						$("#textGroup").show();
						$("#radioGroup").hide();
						if(json.command.unit && json.command.unit!=""){
							$("#inputCommandUnit").show();
							$("#inputCommandUnit").empty().append(json.command.unit);
						}else{
							$("#inputCommandUnit").hide();
						}
					}
					command = json.command;
					$("#hiddenCommandId").val(json.command.id);
					$("#hiddenCommandFCode").val(json.command.functionCode);
					$("#commandModal").data("sending",false);
					clearTimeout(closeTimer);
					$('#commandModal').modal('show');
					var modalScale = window.innerWidth/$(window).width();
					$("#commandModal .modal-dialog").css("transform","scale("+modalScale+")");
					$("#commandModal .modal-dialog").css("margin-left",(window.pageXOffset+($(window).width()-260)*0.5*modalScale)+"px");
					$("#commandModal .modal-dialog").css("margin-top",(window.pageYOffset+20)+"px");
				 }
		     }
		});
	}
}

function confirmCommandModal(d){
	if(d.signalFlag){
		if($("#equipStatus").val()=='0'){
			modalMsg('失败！','设备离线，无法发送命令。',true);
			return ;
		}
		$.ajax({
			 url:'RuleAction!selectByCommandId.action',
			 data: {'commandId':d.signalFlag},
		     type: 'POST',
		     dataType:"json",
		     success: function(json) {
				//初始化容器样式
				 if(json.result){
					$("#commandFixedModalLabel").empty().append(json.command.fieldName);
					if(json.command.functionCode=='5'){
						if(d.trueAlter=="0"){
							$("#commandFixedModal .modal-body").empty().append("<span class='confirm-msg'>是否执行\"<strong>"+json.command.falseValue+"</strong>\"？</span>");
						}else if(d.trueAlter=="1"){
							$("#commandFixedModal .modal-body").empty().append("<span class='confirm-msg'>是否执行\"<strong>"+json.command.trueValue+"</strong>\"？</span>");
						}else{
							$("#commandFixedModal .modal-body").empty().append("<span class='sendAT-error confirm-msg'><i class='fa fa-close fa-lg'></i> 无法写入空值</span>");
						}
					}else{
						if(d.trueAlter && d.trueAlter!=""){
							$("#commandFixedModal .modal-body").empty().append("<span class='confirm-msg'>是否执行写入\"<strong>"+d.trueAlter+"</strong>\"？</span>");
						}else{
							$("#commandFixedModal .modal-body").empty().append("<span class='sendAT-error confirm-msg'><i class='fa fa-close fa-lg'></i> 无法写入空值</span>");
						}
					}
					$("#hiddenSignalFlag").val(d.signalFlag);
					$("#hiddenFixedElementId").val(d.id);
					$("#hiddenCommandRegValue").val(d.trueAlter);
					$("#commandFixedModal").data("sending",false);
					clearTimeout(closeTimer);
					$('#commandFixedModal').modal('show');
					var modalScale = window.innerWidth/$(window).width();
					$("#commandFixedModal .modal-dialog").css("transform","scale("+modalScale+")");
					$("#commandFixedModal .modal-dialog").css("margin-left",(window.pageXOffset+($(window).width()-240)*0.5*modalScale)+"px");
					$("#commandFixedModal .modal-dialog").css("margin-top",(window.pageYOffset+20)+"px");
				 }
		     }
		});
	}
}