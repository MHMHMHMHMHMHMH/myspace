// JavaScript Document
$(function () {
  $('.shutter').shutter({
	shutterW: 1000, // 容器宽度
	shutterH: 358, // 容器高度
	isAutoPlay: true, // 是否自动播放
	playInterval: 3000, // 自动播放时间
	curDisplay: 3, // 当前显示页
	fullPage: false // 是否全屏展示
  });
});

$("#背影").click(function(){
					$("#content").load("file/背影.html");  
					$("#背影").css("color","#87481f");
					$("#忆北平").css("color","#FFFFFF");
					$("#岳阳楼记").css("color","#FFFFFF");
					$("#赤壁赋").css("color","#FFFFFF");
                });
				$("#赤壁赋").click(function(){
					$("#content").load("file/赤壁赋.html");
					$("#赤壁赋").css("color","#87481f");
					$("#忆北平").css("color","#FFFFFF");
					$("#岳阳楼记").css("color","#FFFFFF");
					$("#背影").css("color","#FFFFFF");
				});
				$("#忆北平").click(function(){
					$("#content").load("file/忆北平.html"); 
					$("#忆北平").css("color","#87481f");
					$("#背影").css("color","#FFFFFF");
					$("#岳阳楼记").css("color","#FFFFFF");
					$("#赤壁赋").css("color","#FFFFFF");
				});
				$("#岳阳楼记").click(function(){
					$("#content").load("file/岳阳楼记.html");
					$("#岳阳楼记").css("color","#87481f");
					$("#忆北平").css("color","#FFFFFF");
					$("#背影").css("color","#FFFFFF");
					$("#赤壁赋").css("color","#FFFFFF");
				});









