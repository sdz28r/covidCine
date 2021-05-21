function getVaccineCalanderByPinAndDate() {
	const date = document.querySelector('#date').value;
	const pincode = document.querySelector('#pincode').value;
	var request = new XMLHttpRequest();
	request.open('GET', `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`, true);
	request.setRequestHeader('accept-language', 'hi_IN');
	request.setRequestHeader('Access-Control-Allow-Origin', '*');
	request.setRequestHeader('cross-origin-resource-policy', '*');
	request.setRequestHeader('sec-fetch-dest', 'empty');
	request.setRequestHeader('sec-fetch-mode', 'cors');
	request.setRequestHeader('sec-fetch-site', 'cross-site');
	request.setRequestHeader('cache-control', 'max-age=0');
	request.onload = function() {
		const data = JSON.parse(this.response);
		console.log(data);
	}
	request.send();
}