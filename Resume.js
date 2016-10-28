$(document).ready(function() {
    $('#img').click(function() {
		$(this).toggle('explode');
	    
	    
    });
	
	
	$('h1').click(function() {
		$(this).effect('bounce', {times:5}, 500);
		
		
		
	});
});
