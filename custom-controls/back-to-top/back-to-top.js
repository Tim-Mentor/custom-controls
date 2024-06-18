$(document).ready(function(){

	// INIT
	let mybutton = document.getElementById("btn-back-to-top");

	// FUNCTION TO SHOW THE CONTROL WHEN THE USER HAS SCROLLED DOWN 20PX FROM THE TOP OF THE DOCUMENT
	function scrollFunction() {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			mybutton.style.display = "block";
		} else {
			mybutton.style.display = "none";
		}
	}

	// FUNCTION TO SCROLL TO THE TOP OF THE PAGE
	function backToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	// CALL THE SCROLL FUNCTION WHEN THE USER SCROLLS UP OR DOWN THE DOCUMENT
	window.onscroll = function () {
		scrollFunction();
	};

	// CALL THE BACK TO TOP FUNCTION WHEN THE USER CLICKS THE BUTTON
	mybutton.addEventListener("click", backToTop);

});

