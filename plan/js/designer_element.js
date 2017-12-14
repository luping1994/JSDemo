var signalMap = {};
var chartDataMap = {};
function createElement(ele){
	if(ele.type=="line"){
		createLine(ele);
	}else if(ele.type=="rect"){
		createRect(ele);
	}else if(ele.type=="circle"){
		createCircle(ele);
	}else if(ele.type=="ellipse"){
		createEllipse(ele);
	}else if(ele.type=="triangle"){
		createTriangle(ele);
	}else if(ele.type=="text"){
		createText(ele);
	}else if(ele.type=="image"){
		createImage(ele);
	}else if(ele.type=="dataText"){
		createDataText(ele);
	}else if(ele.type=="lightRect"){
		createLightRect(ele);
	}else if(ele.type=="lightCircle"){
		createLightCircle(ele);
	}else if(ele.type=="lightImage"){
		createLightImage(ele);
	}else if(ele.type=="fillHRect"){
		createFillHRect(ele);
	}else if(ele.type=="fillVRect"){
		createFillVRect(ele);
	}else if(ele.type=="dashboard"){
		createDashBoard(ele);
	}else if(ele.type=="controlText"){
		createControlText(ele);
	}else if(ele.type=="controlImage"){
		createControlImage(ele);
	}else if(ele.type=="controlTextFixed"){
		createControlTextFixed(ele);
	}else if(ele.type=="controlImageFixed"){
		createControlImageFixed(ele);
	}else if(ele.type=="timer"){
		createTimer(ele);
	}else if(ele.type=="lineChart"){
		createLineChart(ele);
	}else if(ele.type=="linkText"){
		createLinkText(ele);
	}else if(ele.type=="linkImage"){
		createLinkImage(ele);
	}else if(ele.type=="openPageText"){
		return createOpenPageText(ele);
	}else if(ele.type=="openPageImage"){
		return createOpenPageImage(ele);
	}
}

/**
 * 创建一条连线
 * @param data 绑定数据
 * @return
 */
function createLine(data){
	var lineGroup = d3.select("svg").append("g")
	.data([data])
	.classed("ele",true);
	
	lineGroup.append("line")
	.classed("shape-line",true)
	.attr("x1",data.x)
	.attr("y1",data.y)
	.attr("x2",data.width)
	.attr("y2",data.height)
	.style({'stroke':data.stroke,'stroke-width':data.strokeWidth,'stroke-dasharray':data.strokeDasharray});
}
/**
 * 创建一个矩形
 * @param data
 * @return
 */
function createRect(data){
	var rectGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	rectGroup.append("rect")
	.classed("shape-rect",true)
	.attr("x",function(d){return d.x})
	.attr("y",function(d){return d.y})
	.attr("rx",function(d){return d.radius})
	.attr("ry",function(d){return d.radius})
	.attr("width",function(d){return d.width})
	.attr("height",function(d){return d.height})
	.style({'fill':data.fill,'stroke':data.stroke,'stroke-width':data.strokeWidth,'stroke-dasharray':data.strokeDasharray});
}

/**
 * 创建一个圆形
 * @param data
 * @return
 */
function createCircle(data){
	var circleGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	circleGroup.append("circle")
	.classed("shape-circle",true)
	.attr("cx",function(d){return d.x})
	.attr("cy",function(d){return d.y})
	.attr("r",function(d){return d.width})
	.style({'fill':data.fill,'stroke':data.stroke,'stroke-width':data.strokeWidth,'stroke-dasharray':data.strokeDasharray});
}

/**
 * 创建一个椭圆
 * @param data
 * @return
 */
function createEllipse(data){
	var ellipseGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	ellipseGroup.append("ellipse")
	.classed("shape-ellipse",true)
	.attr("cx",function(d){return d.x})
	.attr("cy",function(d){return d.y})
	.attr("rx",function(d){return d.width})
	.attr("ry",function(d){return d.height})
	.style({'fill':data.fill,'stroke':data.stroke,'stroke-width':data.strokeWidth,'stroke-dasharray':data.strokeDasharray});
}

/**
 * 创建一个三角形
 * @param data
 * @return
 */
function createTriangle(data){
	var triangleGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	triangleGroup.append("polygon")
	.classed("shape-triangle",true)
	.attr("points",function(d){
		return d.x+","+d.y+" "+d.x2+","+d.y2+" "+d.width+","+d.height;
	})
	.style({'fill':data.fill,'stroke':data.stroke,'stroke-width':data.strokeWidth,'stroke-dasharray':data.strokeDasharray});
}

/**
 * 创建一个文本
 * @param data
 * @return
 */
function createText(data){
	var textGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	textGroup.append("rect")
	.classed("shape-text",true)
	.attr("x",function(d){return d.x})
	.attr("y",function(d){return d.y})
	.attr("rx",function(d){return d.radius})
	.attr("ry",function(d){return d.radius})
	.attr("width",function(d){return d.width})
	.attr("height",function(d){return d.height})
	.style({'fill':data.fill,'stroke':data.stroke,'stroke-width':data.strokeWidth,"opacity":data.showBg,'stroke-dasharray':data.strokeDasharray});
	
	textGroup.append("text")
	.classed("shape-text",true)
	.attr("x",function(d){return Math.round(d.x+d.width/2)})
	.attr("y",function(d){return Math.round(d.y+d.height/2)})
	.attr("dy",".3em")
	.attr("font-family",function(d){return d.fontFamily;})
	.attr("font-size",function(d){return d.fontSize;})
	.attr("font-weight",function(d){return d.fontWeight;})
	.attr("fill",function(d){return d.color})
	.text(function(d){return d.content;});
}

/**
 * 创建一个图片
 * @param data
 * @return
 */
function createImage(data){
	var imageGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	imageGroup.append("image")
	.classed("shape-image",true)
	.attr("x",function(d){return d.x})
	.attr("y",function(d){return d.y})
	.attr("width",function(d){return d.width})
	.attr("height",function(d){return d.height})
	.attr("xlink:href",function(d){
		return initCDN+"userimg/"+d.href;
	});
	
	imageGroup.attr("transform",function(d){
		return "rotate("+d.radius+","+d.x2+","+d.y2+")";
	});
}

/**
 * 创建一个数显框
 * @param data
 * @return
 */
function createDataText(data){
	var signal = signalMap[data.signalFlag];
	var textGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	textGroup.append("rect")
	.classed("data-text",true)
	.attr("x",function(d){return d.x})
	.attr("y",function(d){return d.y})
	.attr("rx",function(d){return d.radius})
	.attr("ry",function(d){return d.radius})
	.attr("width",function(d){return d.width})
	.attr("height",function(d){return d.height})
	.style({'fill':data.fill,'stroke':data.stroke,'stroke-width':data.strokeWidth,"opacity":data.showBg,'stroke-dasharray':data.strokeDasharray});
	
	textGroup.append("text")
	.classed("data-text",true)
	.attr("x",function(d){return Math.round(d.x+d.width/2)})
	.attr("y",function(d){return Math.round(d.y+d.height/2)})
	.attr("dy",".3em")
	.attr("font-family",function(d){return d.fontFamily;})
	.attr("font-size",function(d){return d.fontSize;})
	.attr("font-weight",function(d){return d.fontWeight;})
	.attr("fill",function(d){return d.color})
	.text(function(d){
		if(signal){
			if(signal.dataType=='bit'){
				if(signal.value=='1'){
					return signal.falseValue;
				}else{
					return signal.trueValue;
				}
			}
			return signal.value;
		}
	});
}

/**
 * 创建一个圆形指示灯
 * @param data
 * @return
 */
function createLightCircle(data){
	var signal = signalMap[data.signalFlag];
	var fill = data.trueAlter;
	if(signal && (Math.round(signal.value)==0)){
		fill=data.falseAlter;
	}
	var lightGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	lightGroup.append("circle")
	.classed("light-circle",true)
	.attr("cx",function(d){return d.x})
	.attr("cy",function(d){return d.y})
	.attr("r",function(d){return d.width})
	.style({'fill':fill,'stroke':data.stroke,'stroke-width':data.strokeWidth,'stroke-dasharray':data.strokeDasharray});
}
/**
 * 创建一个矩形指示灯
 * @param d
 * @return
 */
function createLightRect(data){
	var signal = signalMap[data.signalFlag];
	var fill = data.trueAlter;
	if(signal && (Math.round(signal.value)==0)){
		fill=data.falseAlter;
	}
	var lightGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	lightGroup.append("rect")
	.classed("light-rect",true)
	.attr("x",function(d){return d.x})
	.attr("y",function(d){return d.y})
	.attr("rx",function(d){return d.radius})
	.attr("ry",function(d){return d.radius})
	.attr("width",function(d){return d.width})
	.attr("height",function(d){return d.height})
	.style({'fill':fill,'stroke':data.stroke,'stroke-width':data.strokeWidth,'stroke-dasharray':data.strokeDasharray});
}
/**
 * 创建一个图片指示灯
 * @param data
 * @return
 */
function createLightImage(data){
	var signal = signalMap[data.signalFlag];
	var href = initCDN+"userimg/"+data.trueAlter;
	if(signal && (Math.round(signal.value)==0)){
		href= initCDN+"userimg/"+data.falseAlter;
	}
	var imageGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	imageGroup.append("image")
	.classed("light-image",true)
	.attr("x",function(d){return d.x})
	.attr("y",function(d){return d.y})
	.attr("width",function(d){return d.width})
	.attr("height",function(d){return d.height})
	.attr("xlink:href",href);
	
	imageGroup.attr("transform",function(d){
		return "rotate("+d.radius+","+d.x2+","+d.y2+")";
	});
	
	if((href.length-initCDN.length)<9){
		imageGroup.style("opacity",data.showBg);
	}
}
/**
 * 创建一个横向填充控件
 * @param data
 * @return
 */
function createFillHRect(data){
	var signal = signalMap[data.signalFlag];
	var linear = d3.scale.linear()
	.domain([data.x2,data.y2])
	.range([0,data.width]);
	
	var fillGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	fillGroup.append("rect")
	.classed("fill-rect",true)
	.attr("x",function(d){return d.x})
	.attr("y",function(d){return d.y})
	.attr("width",function(d){return d.width})
	.attr("height",function(d){return d.height})
	.style({'fill':data.falseAlter,'stroke':data.stroke,
		'stroke-width':data.strokeWidth,"opacity":data.showBg,'stroke-dasharray':data.strokeDasharray});
	
	var width = 0;
	var value="";
	if(signal){
		width = linear(signal.value);
		if(width<0){
			width=0;
		}
		if(width>data.width){
			width=data.width;
		}
		value = signal.value;
	}
	fillGroup.append("polygon")
	.classed("fill-rect",true)
	.attr("points",function(d){
		return Math.round(d.x+1)+","+Math.round(d.y+1)+
		" "+Math.round(d.x+width-1)+","+Math.round(d.y+1)+
		" "+Math.round(d.x+width-1)+","+Math.round(d.y+d.height-1)+
		" "+Math.round(d.x+1)+","+Math.round(d.y+d.height-1);
	})
	.style({'fill':data.trueAlter});
	
	fillGroup.append("text")
	.classed("fill-rect",true)
	.attr("x",function(d){return Math.round(d.x+width+5)})
	.attr("y",function(d){return Math.round(d.y+d.height/2)})
	.attr("dy",".3em")
	.style("font-family",function(d){return d.fontFamily;})
	.style("font-size",function(d){return d.fontSize;})
	.style("fill",function(d){return d.color})
	.text(value);
}
/**
 * 创建纵向填充控件
 * @param d
 * @return
 */
function createFillVRect(data){
	var signal = signalMap[data.signalFlag];
	if(!signal){
		return false;
	}
	var linear = d3.scale.linear()
	.domain([data.x2,data.y2])
	.range([0,data.height]);
	
	console.log(linear(signal.value));
	var fillGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	fillGroup.append("rect")
	.classed("fill-rect",true)
	.attr("x",function(d){return d.x})
	.attr("y",function(d){return d.y})
	.attr("width",function(d){return d.width})
	.attr("height",function(d){return d.height})
	.style({'fill':data.falseAlter,'stroke':data.stroke,
		'stroke-width':data.strokeWidth,"opacity":data.showBg,'stroke-dasharray':data.strokeDasharray});
	
	var height = 0;
	var value="";
	if(signal){
		height = linear(signal.value);
		if(height<0){
			height=0;
		}
		if(height>data.height){
			height=data.height;
		}
		value = signal.value;
	}
	
	fillGroup.append("polygon")
	.classed("fill-rect",true)
	.attr("points",function(d){
		return Math.round(d.x+1)+","+Math.round(d.y+d.height-height-1)+
		" "+Math.round(d.x+d.width-1)+","+Math.round(d.y+d.height-height-1)+
		" "+Math.round(d.x+d.width-1)+","+Math.round(d.y+d.height-1)+
		" "+Math.round(d.x+1)+","+Math.round(d.y+d.height-1);
	})
	.style({'fill':data.trueAlter});
	
	fillGroup.append("text")
	.classed("fill-rect",true)
	.classed("vertical",true)
	.attr("x",function(d){return Math.round(d.x+d.width/2)})
	.attr("y",function(d){return Math.round(d.y+d.height-height-10)})
	.attr("dy",".3em")
	.style("font-family",function(d){return d.fontFamily;})
	.style("font-size",function(d){return d.fontSize;})
	.style("fill",function(d){return d.color})
	.text(value);
}


/**
 * 创建一个仪表盘元件
 * @param data
 * @return
 */
function createDashBoard(data){
	
	var signal = signalMap[data.signalFlag];
	var colors = ['#91C7AE','#63869E','#C23531']
	
	var dashBoard = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data])
	.attr("transform","translate("+data.x+","+data.y+")");
	
	dashBoard.append("circle")
	.classed("dashboard",true)
	.attr("cx",0)
	.attr("cy",0)
	.attr("r",function(d){return d.width});
	
	var arc = d3.svg.arc().outerRadius(data.width).innerRadius(Math.round(data.width*0.8))
	var scale = d3.svg.arc().outerRadius(data.width).innerRadius(Math.round(data.width*0.93))
	
	dashBoard.selectAll("path.dashboard")
	 .data([{startAngle:-0.75*Math.PI,endAngle:0.75*Math.PI}])
	 .enter()
	 .append("path")
	 .classed("dashboard",true)
	 .attr("d",function(d,i){return arc(d,i);})
	 .style("fill",data.fill);
	 
	var saxis = new Array();
	var laxis = new Array();
	for(var i=-24;i<25;i++){
		if(i%5==0){
			laxis.push({startAngle:i*0.03*Math.PI,endAngle:i*0.03*Math.PI});
		}else{
			saxis.push({startAngle:i*0.03*Math.PI,endAngle:i*0.03*Math.PI});
		}
	}
	dashBoard.selectAll("path.dashboard-laxis")
	 .data(laxis)
	 .enter()
	 .append("path")
	 .classed("dashboard-laxis",true)
	 .attr("d",function(d,i){return arc(d,i);})
	 .style("stroke",data.stroke);
	
	dashBoard.selectAll("path.dashboard-saxis")
	 .data(saxis)
	 .enter()
	 .append("path")
	 .classed("dashboard-saxis",true)
	 .attr("d",function(d,i){return scale(d,i);})
	 .style("stroke",data.stroke);
	
	var scale = d3.scale.linear()
	.domain([data.x2,data.y2])
	.range([0,100]);
	
	var value = 0;
	var signalName = "";
	var content = "";
	if(signal){
		value = scale(signal.value);
		signalName = signal.signalName;
		content = signal.value+" "+signal.unit;
	}
	
	var radian = 1.75-value*0.015;
	if(value>100){
		radian=0.22;
	}
	if(value<0){
		radian=1.77;
	}
	dashBoard.append("polygon")
		.classed("dashboard-point",true)
		.attr("points",function(d){
			var points = 0.7*d.width*Math.sin(radian*Math.PI)+","+0.7*d.width*Math.cos(radian*Math.PI)
				 +" "+0.07*d.width*Math.sin((radian+0.5)*Math.PI)+","+0.07*d.width*Math.cos((radian+0.5)*Math.PI)
				 +" "+0.1*d.width*Math.sin((radian+1)*Math.PI)+","+0.1*d.width*Math.cos((radian+1)*Math.PI)
				 +" "+0.07*d.width*Math.sin((radian+1.5)*Math.PI)+","+0.07*d.width*Math.cos((radian+1.5)*Math.PI);
			return points;
		})
		.style("fill",data.fill);
	
	var linear = d3.scale.linear()
		.domain([0,100])
		.range([data.x2,data.y2]);
	
	dashBoard.selectAll("text.dashboard")
	 .data([0,10,20,30,40,50,60,70,80,90,100])
	 .enter()
	 .append("text")
	 .classed("dashboard",true)
	 .attr("x",function(t){
		 var radian = 1.75-t*0.015;
		 return 0.7*data.width*Math.sin(radian*Math.PI);
	 })
	 .attr("y",function(t){
		 var radian = 1.75-t*0.015;
		 return 0.7*data.width*Math.cos(radian*Math.PI);
	 })
	 .text(function(t){
		 return Math.round(linear(t)*100)/100;
	 })
	 .style("font-family",data.fontFamily)
	 .style("fill",data.color);
	
	dashBoard.append("text")
	.classed("dashboard-title",true)
	 .attr("x",0)
	 .attr("y",-0.4*data.width)
	 .style("font-family",data.fontFamily)
	 .style("fill",data.color)
	 .text(signalName);
	
	dashBoard.append("text")
	.classed("dashboard-value",true)
	 .attr("x",0)
	 .attr("y",0.4*data.width)
	 .style("font-family",data.fontFamily)
	 .style("font-size",data.fontSize)
	 .style("fill",data.color)
	 .text(content);
}

/**
 * 创建一个数显框
 * @param data
 * @return
 */
function createControlText(data){
	var controlGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	controlGroup.append("rect")
	.classed("control-text",true)
	.attr("x",function(d){return d.x})
	.attr("y",function(d){return d.y})
	.attr("rx",function(d){return d.radius})
	.attr("ry",function(d){return d.radius})
	.attr("width",function(d){return d.width})
	.attr("height",function(d){return d.height})
	.style({'fill':data.fill,'stroke':data.stroke,'stroke-width':data.strokeWidth,"opacity":data.showBg,'stroke-dasharray':data.strokeDasharray});
	
	controlGroup.append("text")
	.classed("control-text",true)
	.attr("x",function(d){return Math.round(d.x+d.width/2)})
	.attr("y",function(d){return Math.round(d.y+d.height/2)})
	.attr("dy",".3em")
	.attr("font-family",function(d){return d.fontFamily;})
	.attr("font-size",function(d){return d.fontSize;})
	.attr("font-weight",function(d){return d.fontWeight;})
	.attr("fill",function(d){return d.color})
	.text(function(d){return d.content;});
	
	controlGroup.on("click",openCommandModal);
}

function createControlImage(data){
	var controlGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	controlGroup.append("image")
	.classed("control-image",true)
	.attr("x",function(d){return d.x})
	.attr("y",function(d){return d.y})
	.attr("width",function(d){return d.width})
	.attr("height",function(d){return d.height})
	.attr("xlink:href",function(d){
		return initCDN+"userimg/"+d.href;
	});
	
	controlGroup.on("click",openCommandModal);
}

function createControlTextFixed(data){
	var controlGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	controlGroup.append("rect")
	.classed("control-text",true)
	.attr("x",function(d){return d.x})
	.attr("y",function(d){return d.y})
	.attr("rx",function(d){return d.radius})
	.attr("ry",function(d){return d.radius})
	.attr("width",function(d){return d.width})
	.attr("height",function(d){return d.height})
	.style({'fill':data.fill,'stroke':data.stroke,'stroke-width':data.strokeWidth,"opacity":data.showBg,'stroke-dasharray':data.strokeDasharray});
	
	controlGroup.append("text")
	.classed("control-text",true)
	.attr("x",function(d){return Math.round(d.x+d.width/2)})
	.attr("y",function(d){return Math.round(d.y+d.height/2)})
	.attr("dy",".3em")
	.attr("font-family",function(d){return d.fontFamily;})
	.attr("font-size",function(d){return d.fontSize;})
	.attr("font-weight",function(d){return d.fontWeight;})
	.attr("fill",function(d){return d.color})
	.text(function(d){return d.content;});
	
	controlGroup.on("click",confirmCommandModal);
}

function createControlImageFixed(data){
	var controlGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	controlGroup.append("image")
	.classed("control-image",true)
	.attr("x",function(d){return d.x})
	.attr("y",function(d){return d.y})
	.attr("width",function(d){return d.width})
	.attr("height",function(d){return d.height})
	.attr("xlink:href",function(d){
		return initCDN+"userimg/"+d.href;
	});
	
	controlGroup.on("click",confirmCommandModal);
}

function createTimer(data){
	var timerGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	timerGroup.append("rect")
	.classed("timer-text",true)
	.attr("x",function(d){return d.x})
	.attr("y",function(d){return d.y})
	.attr("rx",function(d){return d.radius})
	.attr("ry",function(d){return d.radius})
	.attr("width",function(d){return d.width})
	.attr("height",function(d){return d.height})
	.style({'fill':data.fill,'stroke':data.stroke,'stroke-width':data.strokeWidth,'stroke-dasharray':data.strokeDasharray,"opacity":data.showBg});
	
	timerGroup.append("text")
	.classed("timer-text",true)
	.attr("x",function(d){return Math.round(d.x+d.width/2)})
	.attr("y",function(d){return Math.round(d.y+d.height/2)})
	.attr("dy",".3em")
	.style("font-family",function(d){return d.fontFamily;})
	.style("font-size",function(d){return d.fontSize;})
	.style("font-weight",function(d){return d.fontWeight;})
	.style("fill",function(d){return d.color})
	.text(function(d){return new Date().Format(d.content);});
	
}


/**
 * 创建一个曲线图
 * @param data
 * @return
 */
function createLineChart(data){
	
	var chartGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	//绘制背景
	chartGroup.append("rect")
	.classed("line-chart",true)
	.attr("x",function(d){return d.x})
	.attr("y",function(d){return d.y})
	.attr("width",function(d){return d.width})
	.attr("height",function(d){return d.height})
	.style({'fill':data.fill,"opacity":data.showBg});
	
	//设置曲线图大小及边距
	chartGroup.append("svg")
	.classed("line-chart",true)
	.attr("x",data.x)
	.attr("y",data.y)
	.attr("width", data.width)
	.attr("height", data.height)
	.append("g")
	.attr("transform", "translate(60,30)")
	.style({'font-family':data.fontFamily,'font-size':data.fontSize});
	
	//处理曲线数据，并绘制曲线图
	handlerChartData();
	
	/**
	 * 处理趋势图数据
	 * @return
	 */
	function handlerChartData(){
		var historyData = chartDataMap[data.signalFlag];
		var signal = signalMap[data.signalFlag];
		if(historyData && historyData instanceof Array){
			var lastData = historyData[historyData.length-1];
			if(lastData.x.getTime() < signal.currentTime.time){
				var ct = new Date();
				ct.setTime(signal.currentTime.time);
				historyData.push({"x":ct,"y":signal.value});
				//判断第一个元素是否超出时间段，如果超出删除该元素
				var firstData = historyData[0];
				if((firstData.x.getTime()+Number(data.content)*60000)<new Date().getTime()){
					historyData.shift();
				}
			}
			renderChartLine([historyData]);
		}else{
			loadHistoryChartData();
		}
	}
	
	function loadHistoryChartData(){
		var from = new Date();
		from.setTime(from.getTime()-Number(data.content)*60000);
		$.ajax({
			 url:'DataAction!_loadChartBySignal.action',
			 data: {
			 	"signalId":data.signalFlag,
			 	"dtuSn":$("#dtuSn").val(),
			 	"from":from.Format("yyyy-MM-dd hh:mm")
			 },
		     type: 'POST',
		     dataType:"json",
		     success: function(json) {
				 if(json.result){
					 var regExp = new RegExp("-","gm");
					 historyData = json.list.map(function (item) {
			                return {"x":new Date(item.time.replace(regExp,"/")),"y":item.value};
			         })
			         chartDataMap[data.signalFlag] = historyData;
			         renderChartLine([historyData]);
				 }
		     }
		});
	}
	
	function renderChartLine(chartData){
		//绘制坐标轴
		var width = data.width-100;
		var height =  data.height-80;
		
		if(width<0 || height<0){
			return false;
		}
		
		var xScale = d3.time.scale()
			.domain(calcXDomain())
			.range([0,width]);
		
		var yScale = d3.scale.linear()
		    .domain(calcYDomain())
		    .range([0, height]);
		
		var xAxis = d3.svg.axis()
		    .scale(xScale)
		    .tickPadding(10)
		    .tickSize(-height)
		    .tickSubdivide(true)
		    .orient("bottom")
		    .tickFormat(d3.time.format("%H:%M"))
		    .ticks(Math.ceil(width/70));
		
		var yAxis = d3.svg.axis()
		    .scale(yScale)
		    .tickPadding(10)
		    .tickSize(-width)
		    .tickSubdivide(true)
		    .orient("left")
		    .ticks(Math.ceil(height/35));
		
		chartGroup.select("svg.line-chart > g")
			.append("g")
			.classed("axis",true)
			.classed("x-axis",true)
			.attr("transform",function(){
				return "translate(0,"+height+")";
			})
			.call(xAxis);
		chartGroup.select("svg.line-chart > g")
			.append("g")
			.classed("axis",true)
			.classed("y-axis",true)
			.call(yAxis);
		
		chartGroup.select("svg.line-chart > g")
			.append("clipPath")
			.attr("id", "clip")
			.append("rect")
			.attr("width", width)
			.attr("height", height);
		
		//绘制曲线
		
		var line = d3.svg.line()
		    .interpolate("linear")	
		    .x(function(d) { return xScale(d.x); })
		    .y(function(d) { return yScale(d.y); });
		
		chartGroup.select("svg.line-chart > g").selectAll('path.line')
			.data(chartData)
			.enter()
			.append("path")
		    .attr("class", "line")
		    .attr("clip-path", "url(#clip)")
			.attr('stroke', data.stroke)
			.attr("d", line);
		
		
		chartGroup.selectAll("svg.line-chart > g > g.axis text").style("fill", data.color);
		chartGroup.selectAll("svg.line-chart > g > g.axis line").style("stroke", data.trueAlter);
		chartGroup.selectAll("svg.line-chart > g > g.axis path").style("stroke", data.trueAlter);
	}
	
	

	
	
	/**
	 * 计算X轴取值范围
	 * @param data
	 * @return
	 */
	function calcXDomain(){
		var historyData = chartDataMap[data.signalFlag];
		var from = new Date();
		from.setTime(from.getTime()-Number(data.content)*60000);
		if(historyData && historyData.length>0){
			for(var i in historyData){
				if(historyData[i].x.getTime()<from.getTime()){
					from.setTime(historyData[i].x.getTime());
				}
			}
		}
		return [from, new Date()];
	}
	
	/**
	 * 计算Y轴取值范围
	 * @param data
	 * @return
	 */
	function calcYDomain(){
		var historyData = chartDataMap[data.signalFlag];
		var yMax,yMin;
		if(historyData && historyData.length>0){
			for(var i in historyData){
				if(i==0){
					yMax = Number(historyData[i].y);
					yMin = Number(historyData[i].y);
				}else{
					if(yMax < Number(historyData[i].y)){
						yMax = Number(historyData[i].y);
					}
					
					if(yMin > Number(historyData[i].y)){
						yMin = Number(historyData[i].y);
					}
				}
			}
		}
		if(yMax == yMin){
			return [(yMax+0.2*yMax),(yMin-0.2*yMin)]
		}
		return [(yMax+0.2*(yMax-yMin)),(yMin-0.2*(yMax-yMin))];	
	}
	
}

function createLinkText(data){
	var linkGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	linkGroup.append("rect")
	.classed("link-text",true)
	.attr("x",function(d){return d.x})
	.attr("y",function(d){return d.y})
	.attr("rx",function(d){return d.radius})
	.attr("ry",function(d){return d.radius})
	.attr("width",function(d){return d.width})
	.attr("height",function(d){return d.height})
	.style({'fill':data.fill,'stroke':data.stroke,'stroke-width':data.strokeWidth,"opacity":data.showBg,'stroke-dasharray':data.strokeDasharray});
	
	linkGroup.append("text")
	.classed("link-text",true)
	.attr("x",function(d){return Math.round(d.x+d.width/2)})
	.attr("y",function(d){return Math.round(d.y+d.height/2)})
	.attr("dy",".3em")
	.attr("font-family",function(d){return d.fontFamily;})
	.attr("font-size",function(d){return d.fontSize;})
	.attr("font-weight",function(d){return d.fontWeight;})
	.attr("fill",function(d){return d.color})
	.text(function(d){return d.content;});
	
	linkGroup.on("click",function(){
		window.open(data.trueAlter,data.falseAlter);
	});
}

function createLinkImage(data){
	var linkGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	linkGroup.append("image")
	.classed("link-image",true)
	.attr("x",function(d){return d.x})
	.attr("y",function(d){return d.y})
	.attr("width",function(d){return d.width})
	.attr("height",function(d){return d.height})
	.attr("xlink:href",function(d){
		return initCDN+"userimg/"+d.href;
	});
	
	linkGroup.on("click",function(){
		window.open(data.trueAlter,data.falseAlter);
	});
}

/**
 * 创建一个文本元件
 * @param data
 * @return
 */
function createOpenPageText(data){
	var openPageGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	openPageGroup.append("rect")
	.classed("openPage-text",true)
	.attr("x",function(d){return d.x})
	.attr("y",function(d){return d.y})
	.attr("rx",function(d){return d.radius})
	.attr("ry",function(d){return d.radius})
	.attr("width",function(d){return d.width})
	.attr("height",function(d){return d.height})
	.style({'fill':data.fill,'stroke':data.stroke,'stroke-width':data.strokeWidth,'stroke-dasharray':data.strokeDasharray,"opacity":data.showBg});
	
	openPageGroup.append("text")
	.classed("openPage-text",true)
	.attr("x",function(d){return Math.round(d.x+d.width/2)})
	.attr("y",function(d){return Math.round(d.y+d.height/2)})
	.attr("dy",".3em")
	.style("font-family",function(d){return d.fontFamily;})
	.style("font-size",function(d){return d.fontSize;})
	.style("font-weight",function(d){return d.fontWeight;})
	.style("fill",function(d){return d.color})
	.text(function(d){return d.content;});
	
	openPageGroup.on("click",function(){
		if(data.signalFlag && data.signalFlag!=''){
			$("#conId").val(data.signalFlag);
			$("svg.designer").empty();
			refreshContainer();
		}
	});
}

/**
 * 创建一个位图控件
 * @param data
 * @return
 */
function createOpenPageImage(data){
	var openPageGroup = d3.select("svg")
	.append("g")
	.classed("ele",true)
	.data([data]);
	
	openPageGroup.append("image")
	.classed("openPage-image",true)
	.attr("x",function(d){return d.x})
	.attr("y",function(d){return d.y})
	.attr("width",function(d){return d.width})
	.attr("height",function(d){return d.height})
	.attr("xlink:href",function(d){
		return initCDN+"userimg/"+d.href;
	});
	
	openPageGroup.on("click",function(){
		if(data.signalFlag && data.signalFlag!=''){
			$("#conId").val(data.signalFlag);
			$("svg.designer").empty();
			refreshContainer();
		}
	});
}