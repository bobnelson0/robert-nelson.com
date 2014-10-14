var init = function(){
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
	$('#first-accomps').click();
};
$(document).ready(init);