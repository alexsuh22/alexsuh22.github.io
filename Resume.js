$(document).ready(function() {
    $('#img').click(function() {
		$(this).toggle('explode');
	    
	    
    });
	
	
	$('p').click(function() {
		$(this).toggle('bounce', {times:5}, 500);
		
		
		
	});
	
	
	$('#lit').click(function() {
		$(this).toggle('slide', {times:3}, 500);
    });
	
});
