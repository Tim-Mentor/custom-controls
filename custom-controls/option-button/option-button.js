$(document).ready(function(){

	$(".option-item").click(function(){
		// INIT SELECTION
		let myOptionSet = $(this).data("optionset");
		let myOption = $(this).data("option");
		
		// REMOVE SELECTED CLASS FROM THE PREVIOUS OPTION
		$(".option-button").each(function(){
			if ($(this).data("optionset") == myOptionSet && $(this).data("option") == myOption) $(this).addClass("selected");
			else if ($(this).data("optionset") == myOptionSet) $(this).removeClass("selected");
		});
	});

});

