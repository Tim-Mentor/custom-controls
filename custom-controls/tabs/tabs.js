$(document).ready(function(){

	$(".tab-trigger").click(function(){
		// INIT SELECTION
		let myTabSet = $(this).data("tabset");
		let myTab = $(this).data("tab");

		// REMOVE ACTIVE CLASS FROM THE PREVIOUS TAB TRIGGER
		$(".tab-trigger").each(function(){
			if ($(this).data("tabset") == myTabSet) $(this).removeClass("active");
		});

		// ADD ACTIVE CLASS TO THE SELECTED TAB TRIGGER
		$(this).addClass("active");

		// HIDE PREVIOUS TAB PANE AND DISPLAY THE CURRENT
		$(".tab-pane").each(function(){
			if ($(this).data("tabset") == myTabSet && $(this).data("tab") == myTab) $(this).removeClass("d-none");
			else if ($(this).data("tabset") == myTabSet) $(this).addClass("d-none");
		});
	});

});

