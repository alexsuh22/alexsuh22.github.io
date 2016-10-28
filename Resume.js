$(document).ready(function() {
    $('#img').click(function() {
		$(this).effect('explode');
	    
	    
    });
	
	
	$('#addy').click(function() {
		$(this).effect('bounce', {times:5}, 500);
		
		
		
	});
	
	
	$('h4').click(function() {
		$(this).effect('slide', {times:3}, 500);
    });
	
});
