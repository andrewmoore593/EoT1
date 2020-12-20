$(document).ready(function () {

	if (localStorage.getItem("bookingtype") == "booked") {
		$("#divOpeningWelcomeScreen").removeClass("d-flex");
		$("#divOpeningWelcomeScreen").hide();

		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen1").hide();

		$("#divOpeningWelcomeScreen2").removeClass("d-flex");
		$("#divOpeningWelcomeScreen2").show();

		$("#divOpeningWelcomeScreen3").removeClass("d-flex");
		$("#divOpeningWelcomeScreen3").hide();

		$("#divOpeningWelcomeScreen4").removeClass("d-flex");
		$("#divOpeningWelcomeScreen4").hide();

		$("#divOpeningWelcomeScreen5").removeClass("d-flex");
		$("#divOpeningWelcomeScreen5").hide();

		$("#divOpeningWelcomeScreen6").removeClass("d-flex");
		$("#divOpeningWelcomeScreen6").hide();

		$("#divOpeningWelcomeScreen7").removeClass("d-flex");
		$("#divOpeningWelcomeScreen7").hide();

		$("#divOpeningWelcomeScreen8").removeClass("d-flex");
		$("#divOpeningWelcomeScreen8").hide();

		$("#divOpeningWelcomeScreen9").removeClass("d-flex");
		$("#divOpeningWelcomeScreen9").hide();

		$("#divOpeningWelcomeScreen10").removeClass("d-flex");
		$("#divOpeningWelcomeScreen10").hide();

		$("#divOpeningWelcomeScreen11").removeClass("d-flex");
		$("#divOpeningWelcomeScreen11").hide();
	}
	else {
		$("#divOpeningWelcomeScreen").show();

		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen1").hide();

		$("#divOpeningWelcomeScreen2").removeClass("d-flex");
		$("#divOpeningWelcomeScreen2").hide();

		$("#divOpeningWelcomeScreen3").removeClass("d-flex");
		$("#divOpeningWelcomeScreen3").hide();

		$("#divOpeningWelcomeScreen4").removeClass("d-flex");
		$("#divOpeningWelcomeScreen4").hide();

		$("#divOpeningWelcomeScreen5").removeClass("d-flex");
		$("#divOpeningWelcomeScreen5").hide();

		$("#divOpeningWelcomeScreen6").removeClass("d-flex");
		$("#divOpeningWelcomeScreen6").hide();

		$("#divOpeningWelcomeScreen7").removeClass("d-flex");
		$("#divOpeningWelcomeScreen7").hide();

		$("#divOpeningWelcomeScreen8").removeClass("d-flex");
		$("#divOpeningWelcomeScreen8").hide();

		$("#divOpeningWelcomeScreen9").removeClass("d-flex");
		$("#divOpeningWelcomeScreen9").hide();

		$("#divOpeningWelcomeScreen10").removeClass("d-flex");
		$("#divOpeningWelcomeScreen10").hide();

		$("#divOpeningWelcomeScreen11").removeClass("d-flex");
		$("#divOpeningWelcomeScreen11").hide();
	}	

	$("#btnWelcomeNext").click(function () {
		$("#divOpeningWelcomeScreen").removeClass("d-flex");
		$("#divOpeningWelcomeScreen").hide();

		$("#divOpeningWelcomeScreen1").addClass("d-flex");
		$("#divOpeningWelcomeScreen1").show();

		$("#divOpeningWelcomeScreen2").removeClass("d-flex");
		$("#divOpeningWelcomeScreen2").hide();

		$("#divOpeningWelcomeScreen3").removeClass("d-flex");
		$("#divOpeningWelcomeScreen3").hide();

		$("#divOpeningWelcomeScreen4").removeClass("d-flex");
		$("#divOpeningWelcomeScreen4").hide();

		$("#divOpeningWelcomeScreen5").removeClass("d-flex");
		$("#divOpeningWelcomeScreen5").hide();

		$("#divOpeningWelcomeScreen6").removeClass("d-flex");
		$("#divOpeningWelcomeScreen6").hide();

		$("#divOpeningWelcomeScreen7").removeClass("d-flex");
		$("#divOpeningWelcomeScreen7").hide();

		$("#divOpeningWelcomeScreen8").removeClass("d-flex");
		$("#divOpeningWelcomeScreen8").hide();

		$("#divOpeningWelcomeScreen9").removeClass("d-flex");
		$("#divOpeningWelcomeScreen9").hide();

		$("#divOpeningWelcomeScreen10").removeClass("d-flex");
		$("#divOpeningWelcomeScreen10").hide();

		$("#divOpeningWelcomeScreen11").removeClass("d-flex");
		$("#divOpeningWelcomeScreen11").hide();
	});

	$("#btnUserReady").click(function () {
		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen").hide();

		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen1").hide();

		if (localStorage.getItem("bookingtype") == "booked") {
		}
		else {
			$("#divOpeningWelcomeScreen3").add("d-flex");
			$("#divOpeningWelcomeScreen3").show();
		}
		//$("#divOpeningWelcomeScreen2").addClass("d-flex");
		//$("#divOpeningWelcomeScreen2").show();
		

		$("#divOpeningWelcomeScreen4").removeClass("d-flex");
		$("#divOpeningWelcomeScreen4").hide();

		$("#divOpeningWelcomeScreen5").removeClass("d-flex");
		$("#divOpeningWelcomeScreen5").hide();

		$("#divOpeningWelcomeScreen6").removeClass("d-flex");
		$("#divOpeningWelcomeScreen6").hide();

		$("#divOpeningWelcomeScreen7").removeClass("d-flex");
		$("#divOpeningWelcomeScreen7").hide();

		$("#divOpeningWelcomeScreen8").removeClass("d-flex");
		$("#divOpeningWelcomeScreen8").hide();

		$("#divOpeningWelcomeScreen9").removeClass("d-flex");
		$("#divOpeningWelcomeScreen9").hide();

		$("#divOpeningWelcomeScreen10").removeClass("d-flex");
		$("#divOpeningWelcomeScreen10").hide();

		$("#divOpeningWelcomeScreen11").removeClass("d-flex");
		$("#divOpeningWelcomeScreen11").hide();
	});

	$("#btnServicesConfrimation").click(function () {
		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen").hide();

		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen1").hide();

		$("#divOpeningWelcomeScreen2").removeClass("d-flex");
		$("#divOpeningWelcomeScreen2").hide();

		$("#divOpeningWelcomeScreen3").addClass("d-flex");
		$("#divOpeningWelcomeScreen3").show();

		$("#divOpeningWelcomeScreen4").removeClass("d-flex");
		$("#divOpeningWelcomeScreen4").hide();

		$("#divOpeningWelcomeScreen5").removeClass("d-flex");
		$("#divOpeningWelcomeScreen5").hide();

		$("#divOpeningWelcomeScreen6").removeClass("d-flex");
		$("#divOpeningWelcomeScreen6").hide();

		$("#divOpeningWelcomeScreen7").removeClass("d-flex");
		$("#divOpeningWelcomeScreen7").hide();

		$("#divOpeningWelcomeScreen8").removeClass("d-flex");
		$("#divOpeningWelcomeScreen8").hide();

		$("#divOpeningWelcomeScreen9").removeClass("d-flex");
		$("#divOpeningWelcomeScreen9").hide();

		$("#divOpeningWelcomeScreen10").removeClass("d-flex");
		$("#divOpeningWelcomeScreen10").hide();

		$("#divOpeningWelcomeScreen11").removeClass("d-flex");
		$("#divOpeningWelcomeScreen11").hide();
	});

	$("#btnMeasurementsNext").click(function () {
		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen").hide();

		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen1").hide();

		$("#divOpeningWelcomeScreen2").removeClass("d-flex");
		$("#divOpeningWelcomeScreen2").hide();

		$("#divOpeningWelcomeScreen3").removeClass("d-flex");
		$("#divOpeningWelcomeScreen3").hide();

		$("#divOpeningWelcomeScreen4").addClass("d-flex");
		$("#divOpeningWelcomeScreen4").show();

		$("#divOpeningWelcomeScreen5").removeClass("d-flex");
		$("#divOpeningWelcomeScreen5").hide();

		$("#divOpeningWelcomeScreen6").removeClass("d-flex");
		$("#divOpeningWelcomeScreen6").hide();

		$("#divOpeningWelcomeScreen7").removeClass("d-flex");
		$("#divOpeningWelcomeScreen7").hide();

		$("#divOpeningWelcomeScreen8").removeClass("d-flex");
		$("#divOpeningWelcomeScreen8").hide();

		$("#divOpeningWelcomeScreen9").removeClass("d-flex");
		$("#divOpeningWelcomeScreen9").hide();

		$("#divOpeningWelcomeScreen10").removeClass("d-flex");
		$("#divOpeningWelcomeScreen10").hide();

		$("#divOpeningWelcomeScreen11").removeClass("d-flex");
		$("#divOpeningWelcomeScreen11").hide();
	});

	$("#btnMeasurementsNext1").click(function () {
		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen").hide();

		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen1").hide();

		$("#divOpeningWelcomeScreen2").removeClass("d-flex");
		$("#divOpeningWelcomeScreen2").hide();

		$("#divOpeningWelcomeScreen3").removeClass("d-flex");
		$("#divOpeningWelcomeScreen3").hide();

		$("#divOpeningWelcomeScreen4").removeClass("d-flex");
		$("#divOpeningWelcomeScreen4").hide();

		$("#divOpeningWelcomeScreen5").addClass("d-flex");
		$("#divOpeningWelcomeScreen5").show();

		$("#divOpeningWelcomeScreen6").removeClass("d-flex");
		$("#divOpeningWelcomeScreen6").hide();

		$("#divOpeningWelcomeScreen7").removeClass("d-flex");
		$("#divOpeningWelcomeScreen7").hide();

		$("#divOpeningWelcomeScreen8").removeClass("d-flex");
		$("#divOpeningWelcomeScreen8").hide();

		$("#divOpeningWelcomeScreen9").removeClass("d-flex");
		$("#divOpeningWelcomeScreen9").hide();

		$("#divOpeningWelcomeScreen10").removeClass("d-flex");
		$("#divOpeningWelcomeScreen10").hide();

		$("#divOpeningWelcomeScreen11").removeClass("d-flex");
		$("#divOpeningWelcomeScreen11").hide();
	});

	$("#btnGlucose1Next").click(function () {
		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen").hide();

		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen1").hide();

		$("#divOpeningWelcomeScreen2").removeClass("d-flex");
		$("#divOpeningWelcomeScreen2").hide();

		$("#divOpeningWelcomeScreen3").removeClass("d-flex");
		$("#divOpeningWelcomeScreen3").hide();

		$("#divOpeningWelcomeScreen4").removeClass("d-flex");
		$("#divOpeningWelcomeScreen4").hide();

		$("#divOpeningWelcomeScreen5").removeClass("d-flex");
		$("#divOpeningWelcomeScreen5").hide();

		$("#divOpeningWelcomeScreen6").addClass("d-flex");
		$("#divOpeningWelcomeScreen6").show();

		$("#divOpeningWelcomeScreen7").removeClass("d-flex");
		$("#divOpeningWelcomeScreen7").hide();

		$("#divOpeningWelcomeScreen8").removeClass("d-flex");
		$("#divOpeningWelcomeScreen8").hide();

		$("#divOpeningWelcomeScreen9").removeClass("d-flex");
		$("#divOpeningWelcomeScreen9").hide();

		$("#divOpeningWelcomeScreen10").removeClass("d-flex");
		$("#divOpeningWelcomeScreen10").hide();

		$("#divOpeningWelcomeScreen11").removeClass("d-flex");
		$("#divOpeningWelcomeScreen11").hide();
	});

	$("#btnGlucose2Next").click(function () {
		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen").hide();

		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen1").hide();

		$("#divOpeningWelcomeScreen2").removeClass("d-flex");
		$("#divOpeningWelcomeScreen2").hide();

		$("#divOpeningWelcomeScreen3").removeClass("d-flex");
		$("#divOpeningWelcomeScreen3").hide();

		$("#divOpeningWelcomeScreen4").removeClass("d-flex");
		$("#divOpeningWelcomeScreen4").hide();

		$("#divOpeningWelcomeScreen5").removeClass("d-flex");
		$("#divOpeningWelcomeScreen5").hide();

		$("#divOpeningWelcomeScreen6").removeClass("d-flex");
		$("#divOpeningWelcomeScreen6").hide();

		$("#divOpeningWelcomeScreen7").addClass("d-flex");
		$("#divOpeningWelcomeScreen7").show();

		$("#divOpeningWelcomeScreen8").removeClass("d-flex");
		$("#divOpeningWelcomeScreen8").hide();

		$("#divOpeningWelcomeScreen9").removeClass("d-flex");
		$("#divOpeningWelcomeScreen9").hide();

		$("#divOpeningWelcomeScreen10").removeClass("d-flex");
		$("#divOpeningWelcomeScreen10").hide();

		$("#divOpeningWelcomeScreen11").removeClass("d-flex");
		$("#divOpeningWelcomeScreen11").hide();
	});

	$("#btnGlucoseCompleteNext").click(function () {
		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen").hide();

		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen1").hide();

		$("#divOpeningWelcomeScreen2").removeClass("d-flex");
		$("#divOpeningWelcomeScreen2").hide();

		$("#divOpeningWelcomeScreen3").removeClass("d-flex");
		$("#divOpeningWelcomeScreen3").hide();

		$("#divOpeningWelcomeScreen4").removeClass("d-flex");
		$("#divOpeningWelcomeScreen4").hide();

		$("#divOpeningWelcomeScreen5").removeClass("d-flex");
		$("#divOpeningWelcomeScreen5").hide();

		$("#divOpeningWelcomeScreen6").removeClass("d-flex");
		$("#divOpeningWelcomeScreen6").hide();

		$("#divOpeningWelcomeScreen7").removeClass("d-flex");
		$("#divOpeningWelcomeScreen7").hide();

		$("#divOpeningWelcomeScreen8").addClass("d-flex");
		$("#divOpeningWelcomeScreen8").show();

		$("#divOpeningWelcomeScreen9").removeClass("d-flex");
		$("#divOpeningWelcomeScreen9").hide();

		$("#divOpeningWelcomeScreen10").removeClass("d-flex");
		$("#divOpeningWelcomeScreen10").hide();

		$("#divOpeningWelcomeScreen11").removeClass("d-flex");
		$("#divOpeningWelcomeScreen11").hide();
	});

	$("#btnEyeNext").click(function () {
		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen").hide();

		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen1").hide();

		$("#divOpeningWelcomeScreen2").removeClass("d-flex");
		$("#divOpeningWelcomeScreen2").hide();

		$("#divOpeningWelcomeScreen3").removeClass("d-flex");
		$("#divOpeningWelcomeScreen3").hide();

		$("#divOpeningWelcomeScreen4").removeClass("d-flex");
		$("#divOpeningWelcomeScreen4").hide();

		$("#divOpeningWelcomeScreen5").removeClass("d-flex");
		$("#divOpeningWelcomeScreen5").hide();

		$("#divOpeningWelcomeScreen6").removeClass("d-flex");
		$("#divOpeningWelcomeScreen6").hide();

		$("#divOpeningWelcomeScreen7").removeClass("d-flex");
		$("#divOpeningWelcomeScreen7").hide();

		$("#divOpeningWelcomeScreen8").removeClass("d-flex");
		$("#divOpeningWelcomeScreen8").hide();

		$("#divOpeningWelcomeScreen9").addClass("d-flex");
		$("#divOpeningWelcomeScreen9").show();

		$("#divOpeningWelcomeScreen10").removeClass("d-flex");
		$("#divOpeningWelcomeScreen10").hide();

		$("#divOpeningWelcomeScreen11").removeClass("d-flex");
		$("#divOpeningWelcomeScreen11").hide();
	});

	$("#btnEyesCompleteNext").click(function () {
		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen").hide();

		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen1").hide();

		$("#divOpeningWelcomeScreen2").removeClass("d-flex");
		$("#divOpeningWelcomeScreen2").hide();

		$("#divOpeningWelcomeScreen3").removeClass("d-flex");
		$("#divOpeningWelcomeScreen3").hide();

		$("#divOpeningWelcomeScreen4").removeClass("d-flex");
		$("#divOpeningWelcomeScreen4").hide();

		$("#divOpeningWelcomeScreen5").removeClass("d-flex");
		$("#divOpeningWelcomeScreen5").hide();

		$("#divOpeningWelcomeScreen6").removeClass("d-flex");
		$("#divOpeningWelcomeScreen6").hide();

		$("#divOpeningWelcomeScreen7").removeClass("d-flex");
		$("#divOpeningWelcomeScreen7").hide();

		$("#divOpeningWelcomeScreen8").removeClass("d-flex");
		$("#divOpeningWelcomeScreen8").hide();

		$("#divOpeningWelcomeScreen9").removeClass("d-flex");
		$("#divOpeningWelcomeScreen9").hide();

		$("#divOpeningWelcomeScreen10").addClass("d-flex");
		$("#divOpeningWelcomeScreen10").show();

		$("#divOpeningWelcomeScreen11").removeClass("d-flex");
		$("#divOpeningWelcomeScreen11").hide();
	});

	$("#btnBloodPressureNext").click(function () {
		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen").hide();

		$("#divOpeningWelcomeScreen1").removeClass("d-flex");
		$("#divOpeningWelcomeScreen1").hide();

		$("#divOpeningWelcomeScreen2").removeClass("d-flex");
		$("#divOpeningWelcomeScreen2").hide();

		$("#divOpeningWelcomeScreen3").removeClass("d-flex");
		$("#divOpeningWelcomeScreen3").hide();

		$("#divOpeningWelcomeScreen4").removeClass("d-flex");
		$("#divOpeningWelcomeScreen4").hide();

		$("#divOpeningWelcomeScreen5").removeClass("d-flex");
		$("#divOpeningWelcomeScreen5").hide();

		$("#divOpeningWelcomeScreen6").removeClass("d-flex");
		$("#divOpeningWelcomeScreen6").hide();

		$("#divOpeningWelcomeScreen7").removeClass("d-flex");
		$("#divOpeningWelcomeScreen7").hide();

		$("#divOpeningWelcomeScreen8").removeClass("d-flex");
		$("#divOpeningWelcomeScreen8").hide();

		$("#divOpeningWelcomeScreen9").removeClass("d-flex");
		$("#divOpeningWelcomeScreen9").hide();

		$("#divOpeningWelcomeScreen10").removeClass("d-flex");
		$("#divOpeningWelcomeScreen10").hide();

		$("#divOpeningWelcomeScreen11").addClass("d-flex");
		$("#divOpeningWelcomeScreen11").show();
	});

	$("#btnFinish").click(function () {
		window.location = BaseURL.Directory_Url + "Home/Dashboard";
	});

});