jQuery(function($){
	var temp=0;
	var pic=$('.pic ul');
	var leng=$('.pic li').length;
	var timer;
	var imgWidth=1920;
	timer=setInterval(function(){	
		pic.animate({left:'-'+imgWidth+'px'},function(){
			 pic.children('li:first').insertAfter(pic.children('li:last'));
			 pic.css('left',0)
		});
	},3000)
        
});