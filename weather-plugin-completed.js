
var getTheWeather = function (options) {

	//
	// Configurações
	//

	// Configurações padrão
	var defaults = {
		apiKey: null,
		selector: '#app',
		convertTemp: true,
		description: 'It is currently {{temp}} degrees and {{conditions}} in {{city}}, {{state}}.',
		noWeather: 'Unable to get weather data at this time. Sorry!',
		showIcon: true
	};

	// Merge do user options na configuração padrão
	var settings = Object.assign(defaults, options);


	//
	// Variaveis
	//

	// Get the #app element
	var app = document.querySelector(settings.selector);


	//
	// Methodos
	//

	/**
	 * Sanitização e encode do HTML numa string submetida pelo usuario
	 * @param  {String} str  The user-submitted string
	 * @return {String} str  The sanitized string
	 */
	var sanitizeHTML = function (str) {
		var temp = document.createElement('div');
		temp.textContent = str;
		return temp.innerHTML;
	};

	/**
	 * Converte Fahrenhet pra Celsius 
	 * @param  {String} temp The temperature in celcius
	 * @return {Number}      The temperature in fahrenheit
	 */
	var fToC = function (temp) {

		// If temperature should be converted, convert it
		if (settings.convertTemp) {
			return (parseFloat(temp) * 9/5) + 32;
		}

		// Otherwise, return it as-is
		return temp;

	};

	/**
	 * Get the icon for the current weather conditions
	 * @param  {Object} weather The weather object
	 * @return {String}         A markup string for the icon
	 */
	var getIcon = function (weather) {

		// If the icon is deactivated, return an empty string
		if (!settings.showIcon) return '';

		// Otherwise, return the icon
		var html =
			'<p>' +
				'<img src="https://www.weatherbit.io/static/img/icons/' + weather.weather.icon + '.png">' +
			'</p>';
		return html;

	};

	/**
	 * Get the description for the current weather conditions
	 * @param  {Object} weather The weather object
	 * @return {String}         A markup string for the weather description
	 */
	var getDescription = function (weather) {
		return settings.description
			.replace('{{temp}}', fToC(sanitizeHTML(weather.temp)))
			.replace('{{conditions}}', sanitizeHTML(weather.weather.description).toLowerCase())
			.replace('{{city}}', sanitizeHTML(weather.city_name))
			.replace('{{state}}', sanitizeHTML(weather.state_code));
	};

	/**
	 * Render the weather data into the DOM
	 * @param  {Object} weather The weather data object
	 */
	var renderWeather = function (weather) {
		app.innerHTML =
			getIcon(weather) +
			'<p>' + getDescription(weather) + '</p>';
	};

	/**
	 * Display a message when no weather data can be found
	 */
	var renderNoWeather = function () {
		app.innerHTML = settings.noWeather;
	};


	//
	// Inits
	//

	// Don't run if no API key was provided
	if (!settings.apiKey) {
		console.warn('Please provide an API key.');
		return;
	}

	// Get the user's location by IP address
	// Then, pass that into the weather API and get the current weather
	fetch('https://ipapi.co/json').then(function (response) {
		// Get the JSON object from the response
		return response.json();
	}).then(function (data) {
		// Pass data into another API request
		// Then, return the new Promise into the stream
		return fetch('https://api.weatherbit.io/v2.0/current?key=' + settings.apiKey + '&lat=' + data.latitude + '&lon=' + data.longitude);
	}).then(function (response) {
		// Get the JSON object from the weather API
		return response.json();
	}).then(function (data) {
		// Pass the first weather item into a helper function to render the UI
		renderWeather(data.data[0]);
	}).catch(function () {
		renderNoWeather();
	});

};

// Initialize the plugin
getTheWeather({
	apiKey: '1234abcd', // Replace this with your API key
	showIcon: false,
	convertTemp: false,
	description: '{{conditions}}, {{temp}} degrees. Ick.'
});

