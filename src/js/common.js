jQuery(function($){
	var index=0;
	var notice=$('.show_notice')
	setInterval(function(){
		notice.find('li').eq(index).animate({marginTop:-28px})
	},1000);
});