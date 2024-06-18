$(document).ready(function(){

	// LIVE SEARCH
	$(document).on("keyup paste", ".filter-input", function() {
		// INIT
		let myFilterGroup = $(this).data("filtergroup");
		let myFilterText = $.trim($(this).val().toLowerCase());

		// HANDLE
		if (myFilterText == "") {
			// SHOW ALL ITEMS IF TEXT IS BLANK
			$(".filter-item").each(function(){
				if ($(this).data("filtergroup") == myFilterGroup) $(this).removeClass("d-none");
			});
		} else {
			// ONLY SHOW ITEMS MATCHING THE TEXT
			$(".filter-item").each(function() {
				if ($(this).data("filtergroup") == myFilterGroup && $(this).html().toLowerCase().indexOf(myFilterText) != -1) $(this).removeClass("d-none");
				else if ($(this).data("filtergroup") == myFilterGroup) $(this).addClass("d-none");
			});
		}
	});

});

