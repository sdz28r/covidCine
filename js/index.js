function getVaccineCalanderByPinAndDate() {
	const date = document.querySelector('#date').value;
	const pincode = document.querySelector('#pincode').value;
	const url = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByPin?pincode='+pincode+'&date='+date;
	var request = new XMLHttpRequest();
	request.open('GET', url, false);
	request.onload = function() {
		const data = JSON.parse(this.response);
		console.log(data);
	}
	request.send( null );
}
