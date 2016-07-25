jQuery(function($){
	//注册切换
	var regnav=$('.regnav li');
	var lc=$('.lang_con')
	regnav.first().on('click',function(){
		$('.lang2').hide();
		$('.lang1').show();
		regnav.first().css({backgroundPositionY:'-58px'});
		regnav.last().css({backgroundPositionY:'-102px'});
		regnav.first().find('span').css({color:'#fff',backgroundPositionY:'-232px'});
		regnav.last().find('span').css({color:'#777',backgroundPositionY:'-302px'})
	});
	regnav.last().on('click',function(){
		$('.lang1').hide();
		$('.lang2').show();
		regnav.last().css({backgroundPositionY:'-58px'});
		regnav.first().css({backgroundPositionY:'-102px'});
		regnav.last().find('span').css({color:'#fff',backgroundPositionY:'-285px'});
		regnav.first().find('span').css({color:'#777',backgroundPositionY:'-212px'})
	});
});