var BaseURL = {
	Directory_Url: window.location.href.indexOf('localhost:') > 0 ? window.location.href.split('/')[0] +
		'//' + window.location.href.split('/')[2] + '/'
		: window.location.href.split('/')[0] + '//' + window.location.href.split('/')[2] + '/' + '/'
};

function OnlyNumber(e) {
	if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
		alert(1);
		return false;
	}
}

function ValidateDate(testdate) {
	var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
	return date_regex.test(testdate);
}

function ShowMessage(strMessage, strType, strModal) {
	noty({
		text: strMessage,
		type: strType,
		layout: "top",
		timeout: 5000,
		modal: strModal,
		killer: true,
		buttons: (strType != 'confirm') ? false : [
			{
				addClass: 'btn btn-primary', text: 'Ok', onClick: function ($noty) {
					$noty.close();
					noty({ force: true, text: 'You Clicked Ok', type: 'success', layout: 'top' });
				}
			}, {
				addClass: 'btn btn-danger', text: 'Cancel', onClick: function ($noty) {
					$noty.close();
					noty({ force: true, text: 'You Clicked Cancel', type: 'error', layout: 'top' });
				}
			}
		]
	});
}