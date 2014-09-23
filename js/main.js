var init = function(){
	$('.item-skills').each(function(){
		newWidth = $(this).parent().width() * $(this).data('percent');
		$(this).width(0);
	    $(this).animate({
	        width: newWidth,
	    }, 1000);
	});
	
	$('.icons-blue').each(function(){
		height = $(this).height();
    	$(this).animate({
        	height: 14,
    	}, 1000);
	});
	
	$('a.accomps').on('click', function(e){ 
		e.preventDefault();
		$(e.target).parent().next('ul').slideToggle();
	});
};
$(document).ready(init);

/*var resize;
window.onresize = function() {
	clearTimeout(resize);
	resize = setTimeout(function(){
		callback();
	}, 100);
};*/