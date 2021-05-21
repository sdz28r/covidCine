function getVaccineCalanderByPinAndDate() {
	const date = document.querySelector('#date').value;
	const pincode = document.querySelector('#pincode').value;
	var request = new XMLHttpRequest();
	request.open('GET', `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`, true);
	request.setRequestHeader('cross-origin-resource-policy', '*');
	request.setRequestHeader('cache-control', 'max-age=0');
	request.setRequestHeader("Access-Control-Allow-Origin", "*");
	request.setRequestHeader("Access-Control-Allow-Credentials", "true");
	request.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
	request.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
	request.onload = function() {
		const data = JSON.parse(this.response);
		console.log(data);
	}
	request.send();
}