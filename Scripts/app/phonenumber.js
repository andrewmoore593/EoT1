$(document).ready(function () {

	$("#txtPhoneNumber").val("+65 ");
	$("#txtPhoneNumber").focus();
	$("#divPhoneNumber").show();
	$("#divPhoneNumberOtpValidate").hide();

	if (localStorage.getItem("bookingtype") == "booked") {
		$("#btnNewUser").hide();
		$("#btnExistingUser").hide();
	}

	$(".numpad").click(function () {
		var txtvalue = $("#txtPhoneNumber").val();
		if (txtvalue.length < 12) {
			txtvalue = txtvalue + $(this).text();
			$("#txtPhoneNumber").val(txtvalue);
		}
	});

	$("#txtPhoneNumber").keypress(function (e) {
		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			return false;
		}
	});

	$("#txtPhoneNumberOtp").keypress(function (e) {
		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			return false;
		}
	});

	$("#btnValidatePhoneNumber").click(function () {
		if ($("#txtPhoneNumber").val().length == 12) {
			$("#divPhoneNumberOtpValidate").show();
			$("#divPhoneNumber").hide();
			$("#lblSubHeaderValidate").text("Validate OTP!");
			$(".icon-box").removeAttr("style");
			$("#divValidate").addClass("col-lg-8");
			$("#divValidate").addClass("col-md-8");
			$("#txtPhoneNumberOtp").focus();
		}
		else {
			ShowMessage("Please enter valid number!", "error");
		}
	});

	$("#btnValidateOtp").click(function () {
		var strOtp = $("#txtPhoneNumberOtp").val();

		if (strOtp.length == 0) {
			ShowMessage("Please enter OTP!", "error");
		}
		else if (strOtp.length < 6) {
			ShowMessage("Please enter 6 digits OTP!", "error");
		}
		else if (strOtp != "123456") {
			ShowMessage("Please enter valid OTP!", "error");
		}
		else {
			if (localStorage.getItem("bookingtype") == "makebook")
				window.location = BaseURL.Directory_Url + "Home/Information?type=nu";
			else if (localStorage.getItem("bookingtype") == "booked")
				window.location = BaseURL.Directory_Url + "Screening/Screening";
		}
		return false;
	});

	$("#btnNewUser").click(function () {
		
		var strOtp = $("#txtPhoneNumberOtp").val();

		if (strOtp.length == 0) {
			ShowMessage("Please enter OTP!", "error");
		}
		else if (strOtp.length < 6) {
			ShowMessage("Please enter 6 digits OTP!", "error");
		}
		else if (strOtp != "123456") {
			ShowMessage("Please enter valid OTP!", "error");
		}
		else {
			window.location = BaseURL.Directory_Url + "Home/Information?type=nu";
		}
		return false;
	});

	$("#btnExistingUser").click(function () {
		var strOtp = $("#txtPhoneNumberOtp").val();

		if (strOtp.length == 0) {
			ShowMessage("Please enter OTP!", "error");
		}
		else if (strOtp.length < 6) {
			ShowMessage("Please enter 6 digits OTP!", "error");
		}
		else if (strOtp != "123456") {
			ShowMessage("Please enter valid OTP!", "error");
		}
		else {
			if (localStorage.getItem("bookingtype") == "makebook")
				window.location = BaseURL.Directory_Url + "Home/Information?type=eu";
			else if (localStorage.getItem("bookingtype") == "booked")
				window.location = BaseURL.Directory_Url + "Screening/Screening";
		}
		return false;
	});

});

