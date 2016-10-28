$(document).ready(function() {
	$("#img").click(function() {
		$(this).toggle('explode');
	});
	$('p').click(function() {
        $(this).toggle("bounce", { times:3 }, 300);
	 });
	     $('li').click(function() {
        $(this).toggle('slide');
    });
});



