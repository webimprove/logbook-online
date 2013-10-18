$("#submit").click( function() {
	
	$.post( $("#logIn").attr("action"),
			$("#logIn :input").serializeArray(),
			function(info) {
				
				$("#ack").empty();
				$("#ack").html(info);
				
			});
			
	$("#logIn").submit( function() {
		return false;
	});
	
});