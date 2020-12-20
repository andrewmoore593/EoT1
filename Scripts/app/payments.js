$(document).ready(function () {

	$("#divPayment").show();
	$("#divSelectTimeSlot").hide();
	$("#divPaymentSuccess").hide();
	$("#btnScheduleDateTime").hide();
	$("#divScheduleSuccess").hide();

	var dtToday = new Date();

	var month = dtToday.getMonth() + 1;
	var day = dtToday.getDate();
	var year = dtToday.getFullYear();
	if (month < 10)
		month = '0' + month.toString();
	if (day < 10)
		day = '0' + day.toString();

	var maxDate = year + '-' + month + '-' + day;
	$('#txtScheduleDate').attr('min', maxDate);

	$("#btnPaymentSuccess").click(function () {
		$("#divPayment").hide();
		$("#divSelectTimeSlot").show();
		$("#divPaymentSuccess").hide();
		$("#btnPaymentSuccess").hide();
		$("#btnPaymentFailed").hide();
		$("#btnScheduleDateTime").show();
		$("#divScheduleSuccess").hide();
	});

	$("#btnScheduleDateTime").click(function () {
		$("#divPayment").hide();
		$("#divSelectTimeSlot").hide();
		$("#btnPaymentSuccess").hide();
		$("#btnPaymentFailed").hide();
		$("#divScheduleSuccess").hide();
		var d = new Date();
		var strDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();		
		if (strDate == $("#txtScheduleDate").val()) {
			$("#btnScheduleDateTime").hide();
			$("#divPaymentSuccess").show();
		}
		else {
			$("#divScheduleSuccess").hide();
			$("#divScheduleSuccess").show();
			$("#btnScheduleDateTime").hide();
		}
	});
});