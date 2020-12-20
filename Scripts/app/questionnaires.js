$(document).ready(function () {


	$("#divQuestionPart1").show();
	$("#divQuestionPart2").hide();
	$("#divQuestionPart3").hide();
	$("#divQuestionPart4").hide();
	$("#divQuestionPart5").hide();
	$("#btnQuestionnairesNext").show();
	$("#btnQuestionnairesDone").hide();
	$("#btnQuestionnairesNext1").hide();
	

	$("#btnQuestionnairesNext").click(function () {
		var isValid = true;

		if ($("#inlineRadio1").is(":checked") && !$("#inlineRadio2").is(":checked")) {
			isValid = true;
			if ($("#txtDateOfBirth").val().length == 0 || $("#txtDateOfBirth").val() == "mm/dd/yyyy") {
				ShowMessage("Please enter Date Of Birth", "error");
				isValid = false;
			}
			else if (!$("#radGenderMale").is(":checked") && !$("#radGenderFemale").is(":checked")) {
				ShowMessage("Please select your Gender", "error");
				isValid = false;
			}
			if (isValid) {
				$("#divQuestionPart1").hide();
				$("#divQuestionPart2").show();
				$('#inlineRadio2').prop('checked', true);
				$("#btnQuestionnairesNext").show();
				$("#btnQuestionnairesDone").hide();
				$("#btnQuestionnairesNext1").hide();
			}
		}
		else if ($("#inlineRadio1").is(":checked") && $("#inlineRadio2").is(":checked") && !$("#inlineRadio3").is(":checked")) {
			if ($("#txtHeight").val().length == 0) {
				ShowMessage("Please enter your height", "error");
				isValid = false;
			}
			else if ($("#txtWeight").val().length == 0) {
				ShowMessage("Please enter your weight", "error");
				isValid = false;
			}
			else if ($("#txtCalculatedBMI").val().length == 0) {
				ShowMessage("Please enter your calculated BMI", "error");
				isValid = false;
			}

			if (isValid) {
				$("#divQuestionPart1").hide();
				$("#divQuestionPart2").hide();
				$("#divQuestionPart3").show();
				$('#inlineRadio3').prop('checked', true);
				$("#btnQuestionnairesNext").show();
				$("#btnQuestionnairesDone").hide();
				$("#btnQuestionnairesNext1").hide();
			}
		}
		else if ($("#inlineRadio1").is(":checked") && $("#inlineRadio2").is(":checked") && $("#inlineRadio3").is(":checked")
			&& !$("#inlineRadio4").is(":checked")) {

			if (!$("#radType2diabetesYes").is(":checked") && !$("#radType2diabetesNo").is(":checked")) {
				ShowMessage("Please select Type2 diabetes", "error");
				isValid = false;
			}
			else if (!$("#radSmokerYes").is(":checked") && !$("#radSmokerNo").is(":checked")) {
				ShowMessage("Please select Smoker or not", "error");
				isValid = false;
			}

			if (isValid) {
				$("#divQuestionPart1").hide();
				$("#divQuestionPart2").hide();
				$("#divQuestionPart3").hide();
				$("#divQuestionPart4").show();
				$('#inlineRadio4').prop('checked', true);
				$("#btnQuestionnairesNext").hide();
				$("#btnQuestionnairesDone").show();
				$("#btnQuestionnairesNext1").hide();
			}
		}
	});

	$("#btnQuestionnairesDone").click(function () {
		var isValid = true;
		if (!$("#radBloodPressureYes").is(":checked") && !$("#radBloodPressureNo").is(":checked")) {
			ShowMessage("Please select blood pressure", "error");
			isValid = false;
		}
		else if ($("#txtEmailAddress").val().length == 0) {
			ShowMessage("Please enter Email Address", "error");
			isValid = false;
		}
		else if ($("#txtEmailAddress").val().length > 0) {
			const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (!re.test(String($("#txtEmailAddress").val()).toLowerCase())) {
				ShowMessage("Please enter valid Email Address", "error");
				isValid = false;
			}
		}

		if (isValid) {
			$("#divQuestionPart1").hide();
			$("#divQuestionPart2").hide();
			$("#divQuestionPart3").hide();
			$("#divQuestionPart4").hide();
			$("#divQuestionPart5").show();
			$("#btnQuestionnairesNext").hide();
			$("#btnQuestionnairesDone").hide();
			$("#btnQuestionnairesNext1").show();
			$("#divProcessingRadios").hide();
		}
	});
});