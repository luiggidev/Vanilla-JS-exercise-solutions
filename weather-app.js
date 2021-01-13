
    var el = document.querySelector("#app");
    var post;
    var API_KEY = 'fa36d6cc9ee44c67a3f0a184e4d13b39';
// Call the API
fetch('https://ipapi.co/json').then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {

	// Store the post data to a variable
	post = data;
    // console.log(data.city);
	// Fetch another API
	return fetch('https://api.weatherbit.io/v2.0/current?city=' + data.city + '&key=' + API_KEY );

}).then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (userData) {
    var temp = userData.data[0].temp;
    console.log( 'test: ' , temp );
    var msg = 'You are in ' + post.city + ' city and the temperature is ' + temp;
    el.textContent = msg;
}).catch(function (error) {
	console.warn(error);
});

