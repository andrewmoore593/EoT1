$(document).ready(function () {
	var strQueryString = window.location.search.substring(1),
		params = strQueryString.split("&");
	var hash;
	
	if (params.length > 0) {
		hash = params[0].split("=");
		if (hash[1] == "nu") {
			$("#divNewUser").show();
			$("#divExistingUser").hide();
		}
		else if (hash[1] == "eu") {
			$("#divNewUser").hide();
			$("#divExistingUser").show();
		}
	}

	$("#btnLetsStart").click(function () {
		if ($("#txtFullName").val().length == 0) {
			ShowMessage("Please enter Full name", "error");
		}
		else if (!$("#chkTermsAndConditions").is(":checked")) {
			ShowMessage("Check the Terms of Use", "error");
		}
		else if (!$("#chkTermsAndConditions1").is(":checked")) {
			ShowMessage("Check consent to Data Policy", "error");
		}
		else {
			window.location = BaseURL.Directory_Url + "User/Questionnaires";
		}
	});

});
