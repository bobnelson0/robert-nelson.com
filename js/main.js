var init = function(){
	$('.icons-blue').each(function(){
		height = $(this).height();
    	$(this).animate({
        	height: 14
    	}, 1000);
	});
	
	$('a.accomps').on('click', function(e){ 
		e.preventDefault();
		$(e.target).parent().next('ul').slideToggle();
	});
	$('#first-accomps').click();

	// Some light obfuscation
	$('#email').attr('href', "mailto:bob.nelsonSWIRLgmailBOOPcom".replace(/SWIRL/,'@').replace(/BOOP/,'.'));
	$('#email').text("bob.nelsonSWIRLgmailBOOPcom".replace(/SWIRL/,'@').replace(/BOOP/,'.'));
};
$(document).ready(init);