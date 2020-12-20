$(document).ready(function () {
	$("#btnBooked").click(function () {	
		localStorage.setItem("bookingtype", "booked");
		window.location = BaseURL.Directory_Url + "Home/ChooseLanguage";
	});

	$("#btnMakeBooking").click(function () {
		localStorage.setItem("bookingtype", "makebook");
		window.location = BaseURL.Directory_Url + "Home/ChooseLanguage";
	});
});