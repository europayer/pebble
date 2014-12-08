//menu weather app
var Settings = require('settings');
var UI = require('ui');
var Vector2 = require('vector2');
var Vibe = require('ui/vibe');
var ajax = require('ajax');

var log = function(txt) {
	console.log("---------> " + txt);
};
var conf = {
	ver: 'ver 0.2',
	weatherDays: '7',
	weatherURL: 'http://api.openweathermap.org/data/2.5/forecast/daily?&units=metric&',
	weatherData: undefined,
	days: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
	wDIdx: 0,
	sosTxt: 'Bitte im Notfall kontaktieren:\n'
};

log('Version: ' + conf.ver);

var weatherMenu = new UI.Menu({
	sections: [{
		title: 'Forcast of next  ' + conf.weatherDays + ' Days:'
	}],
	fullscreen : true
});

var weatherCard = new UI.Card({
	fullscreen: true
});

var updateCard = function(title, icon, subtitle, subicon, body, scrollable) {
	log('Updating weatherCard:\n' + title + '\n' + icon + '\n' + subtitle + '\n' + body + '\n' + scrollable);
	weatherCard.title(title);
	weatherCard.icon(icon);
	weatherCard.subtitle(subtitle);
	weatherCard.subicon(subicon);
	weatherCard.body(body);
	weatherCard.scrollable(true);
};

var formatWeatherData = function(arr) {
	log(JSON.stringify(arr));
	var description = arr.weather[0].description;
	description = description.charAt(0).toUpperCase() + description.substring(1);
	var icon = 'images/' + arr.weather[0].icon + '.png';
	var timestamp = new Date(arr.dt * 1000);
	var dow = conf.days[timestamp.getDay()];
	var cDay = timestamp.getDate();
	var cMonth = timestamp.getMonth() + 1;
	var cYear = (timestamp.getFullYear() + '').substring(2, 4);
	var cDate = dow + ', ' + cDay + '.' + cMonth + '.' + cYear;
	var tempMinDay = Math.round(arr.temp.min);
	var tempMaxDay = Math.round(arr.temp.max);
	var tempMinNight = Math.round(arr.temp.eve);
	var tempMaxNight = Math.round(arr.temp.morn);
	var humidity = arr.humidity;
	var wind = Math.round(arr.speed);
	var clouds = arr.clouds;
	return {
		description: description,
		icon: icon,
		cDate: cDate,
		dow: dow,
		tempMinDay: tempMinDay,
		tempMaxDay: tempMaxDay,
		tempMinNight: tempMinNight,
		tempMaxNight: tempMaxNight,
		humidity: humidity,
		wind: wind,
		clouds: clouds
	};
};

var getWeatherDataDetails = function(data) {
	var wD = formatWeatherData(data);
	var details =
		'Day: ' + wD.tempMinDay + 'c / ' + wD.tempMaxDay + 'c\n' +
		'Night: ' + wD.tempMinNight + 'c / ' + wD.tempMaxNight + 'c\n' +
		'Wind: ' + wD.wind + '\n' +
		'Humidity: ' + wD.humidity + '%\n' +
		'Clouds: ' + wD.clouds + '%\n';
	updateCard(wD.cDate, '', wD.description, wD.icon, details, true);
};

var buildWeatherMenu = function(data){
	var items = [];
	for (var i = 0; i < data.list.length; i++) {
		var wD = formatWeatherData(data.list[i]);
		var item = {
			title: wD.dow + ' (' + wD.tempMinDay + ' / ' + wD.tempMaxDay + ')',
			icon: wD.icon,
			subtitle: wD.description
		};
		log(JSON.stringify(item));
		items.push(item);
	}
	weatherMenu.items(0, items);
	weatherCard.hide();
	weatherMenu.show();
	weatherMenu.on('select', function(e) {
		conf.wDIdx = e.itemIndex;
		getWeatherDataDetails(data.list[conf.wDIdx]);
		weatherCard.show();
	});
	weatherCard.on('click', 'select', function(e) {
		weatherCard.hide();
		if (conf.wDIdx === conf.weatherDays - 1) {
			conf.wDIdx = -1;
		}
		conf.wDIdx++;
		getWeatherDataDetails(data.list[conf.wDIdx]);
		weatherCard.show();
	});
};

var getWeatherData = function() {
	navigator.geolocation.getCurrentPosition(function(pos) {
		var coords = pos.coords;
		conf.weatherURL += '&cnt=' + conf.weatherDays + '&lat=' + coords.latitude + '&lon=' + coords.longitude;
		log("getting weather from URL...");
		log(conf.weatherURL);
		ajax({
			url: conf.weatherURL,
			type: 'json'
		}, function(data) {
			Vibe.vibrate('double');
			log(JSON.stringify(data));
			conf.weatherdata = data;
			buildWeatherMenu(conf.weatherdata);
		}, function(error) {
			Vibe.vibrate('long');
			log('Ajax failed: ' + error);
			updateCard('Error', 'images/error.png', 'No data from openweathermap', '', 'Press "select" to retry.', false);
			weatherCard.on('click', 'select', function(e) {
				getWeatherData();
			});
		});
	});
};

var mainMenu = new UI.Menu({
	sections: [{
		items: [{
			title: 'Weather',
			icon: 'images/weather.png',
			subtitle: 'Check the weather'
		}, {
			title: 'SOS',
			icon: 'images/sos.png',
			subtitle: 'Emergency Info'
		}]
	}],
	fullscreen: true
});

mainMenu.on('select', function(e) {
	if (e.itemIndex === 0) {
		log("Selected 1st");
		updateCard('Loading weather', 'images/weather.png', 'Please wait...', '', '', false);
		weatherCard.show();
		if (!conf.weatherdata){
			getWeatherData();
		} else {
			buildWeatherMenu(conf.weatherdata);
		}
		
	} else if (e.itemIndex === 1) {
		log("Selected 2nd");
		var sosCard = new UI.Card({
			icon: 'images/sos.png',
			title: 'Notfallinfo:',
			subtitle: conf.sosTxt,
			scrollable: true,
			fullscreen: true
		});
		sosCard.show();
	}
});

log("Starting app...");
mainMenu.show();
// EOF