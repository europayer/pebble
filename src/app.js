/*
var GetProps = function(obj) {
	this.getProperties = function() {
		var properties = [];
		for (var prop in obj) {
			if (typeof obj[prop] != 'function') {
				properties.push(prop);
			}
		}
		return properties;
	};
};
var GetFunc = function(obj) {
	this.getFunctions = function() {
		var functions = [];
		for (var func in obj) {
			if (typeof obj[func] == 'function') {
				functions.push(func);
			}
		}
		return functions;
	};
};
//screen size = 144 × 168
*/
var Settings = require('settings');
var UI = require('ui');
var Vector2 = require('vector2');
var Vibe = require('ui/vibe');
var ajax = require('ajax');


var log = function(txt) {
	console.log("---------> " + txt);
};

var storedData = Settings.option();
//var localOptions = Settings.data();
var saveUrl = 'https://rawgit.com/europayer/pebble/master/configuration.html?' + encodeURIComponent(JSON.stringify(storedData));
Settings.config({
		url: saveUrl,
		autoSave: true
	},
	function(e) {
		log('Saved options:' + JSON.stringify(e.options));
		Settings.option(e.options);
		// Show the raw response if parsing failed
		if (e.failed) {
			log(e.response);
		}
	}
);
storedData = Settings.option();
var key = storedData.key;
var includeLocal = storedData.Y;
var unitHourly = 'metric';
var unitTemp = 'celsius';
var unitTempShort = 'C';
var unitSpeed = 'kph';
var unitHeight = 'mm';
var fcttext = 'fcttext_metric';
if (storedData.F){
	unitHourly = 'english';
	unitTemp = 'fahrenheit';
	unitTempShort = 'F';
	unitSpeed = 'mph';
	unitHeight = 'in';
	fcttext = 'fcttext';
}

var iconSet  = {
	"chanceflurries": "09",
	"chancerain": "05",
	"chancesleet": "09",
	"chancesnow": "09",
	"chancetstorms": "06",
	"clear": "01",
	"cloudy": "02",
	"flurries": "09",
	"fog": "08",
	"hazy": "08",
	"mostlycloudy": "03",
	"partlysunny": "02",
	"rain": "07",
	"sleet": "09",
	"snow": "09",
	"sunny": "01",
	"tstorms": "06",
	"unknown": "99",
	"partlycloudy": "03"
};
var weatherData = [];
var weatherCard = new UI.Card({
	fullscreen: true
});
function encodeCId(id) {
	return 'id' + id.replace(/\./g, "-");
}

function decodeCId(id) {
	return id.substring(2).replace(/-/g, ".");
}
function getIcon (condition, hrs) {
	var icon = iconSet[condition];
	if (hrs > 18 || hrs < 6){
		icon = 'images/' + icon + 'n.png';
	} else {
		icon = 'images/' + icon + '.png';
	}
	return icon;
}

function updateCard(title, icon, subtitle, subicon, body, scrollable) {
	weatherCard.title(title);
	weatherCard.icon(icon);
	weatherCard.subtitle(subtitle);
	weatherCard.subicon(subicon);
	weatherCard.body(body);
	weatherCard.scrollable(scrollable);
}

function formatDailyWeatherData(arr) {
	var dow = arr.date.weekday_short;
	var cDay = arr.date.day;
	var cMonth = arr.date.month;
	var cYear = arr.date.year + '';
	var cDate = dow + ', ' + cDay + '.' + cMonth + '.' + cYear;
	var cDateShort = cDay + '.' + cMonth + '.' + cYear.substring(2,4);
	var cDateMenu = cDay + '.' + cMonth;
	var icon = getIcon(arr.icon, arr.hour);
	var description = arr.conditions;
	var tempHigh = arr.high[unitTemp];
	var tempLow = arr.low[unitTemp];
	var pop = arr.pop;
	var qpf_allday = arr.qpf_allday[unitHeight];
	var snow_allday = arr.snow_allday[unitHeight];
	var aveHumidity = arr.avehumidity;
	var maxwind = arr.maxwind[unitSpeed];
	var avewind = arr.avewind[unitSpeed];
	return {
		cDate: cDate,
		cDateShort: cDateShort,
		cDateMenu: cDateMenu,
		icon: icon,
		description: description,
		tempHigh: tempHigh,
		tempLow: tempLow,
		pop: pop,
		qpf_allday: qpf_allday,
		snow_allday: snow_allday,
		aveHumidity: aveHumidity,
		maxwind: maxwind,
		avewind: avewind
	};
}

function formatHourlyWeatherData(arr) {
	var dow = arr.FCTTIME.weekday_name_abbrev;
	var cDay = arr.FCTTIME.mday_padded;
	var cMonth = arr.FCTTIME.mon_padded;
	var cYear = arr.FCTTIME.year;
	var cDate = dow + ', ' + cDay + '.' + cMonth + '.' + cYear;
	var icon = getIcon(arr.icon, arr.FCTTIME.hour);
	var description = arr.wx;
	var temp = arr.temp[unitHourly];
	var feelslike = arr.feelslike[unitHourly];
	var pop = arr.pop;
	var humidity = arr.humidity;
	var wind = arr.wspd[unitHourly];
	return {
		cDate: cDate,
		icon: icon,
		description: description,
		temp: temp,
		feelslike: feelslike,
		pop: pop,
		humidity: humidity,
		wind: wind
	};
}

function getWeatherDetails(data, type, short) {
	var wD;
	var details;
	if (type === 'daily'){
		wD = formatDailyWeatherData(data);
		if (short){
			details =
			'T: ' + wD.tempHigh + ' ' + unitTempShort + '\n' +
			'PoP: ' + wD.pop + '%\n' +
			'QoP: ' + wD.qpf_allday + ' ' + unitHeight + '\n' +
			'W: ' + wD.maxwind + ' ' + unitSpeed;
		} else {
			details =
			'Temp Max: ' + wD.tempHigh + ' ' + unitTemp + '\n' +
			'Temp Min: ' + wD.tempLow + ' ' + unitTemp + '\n' +
			'Probability of Precipitation: ' + wD.pop + '%\n' +
			'Quantity of Precipitation: ' + wD.qpf_allday + ' ' + unitHeight + '\n' +
			'Wind Max: ' + wD.maxwind + ' ' + unitSpeed + '\n' +
			'Humidity: ' + wD.aveHumidity + '%\n';
		}
	
	} else {
		wD = formatHourlyWeatherData(data);
		if (short){
			details =
			'T: ' + wD.temp + ' ' + unitTempShort + '\n' +
			'PoP: ' + wD.pop + '%\n' +
			'W: ' + wD.wind + '\n' +
			'H: ' + wD.humidity + '%\n';
		} else {
			details =
			'Temperature: ' + wD.temp + '\n' +
			'Feels like: ' + wD.feelslike + '\n' +
			'Probability of Precipitation: ' + wD.pop + '%\n' +
			'Wind: ' + wD.wind + '\n' +
			'Humidity: ' + wD.humidity + '%\n';
		}
	}
	return details;
}

function showTxtCard(text, id){
	var title1 = text[id][0].title + ', ' + text[id][2];
	var title2 = text[id][1].title + ', ' + text[id][2];
	var text1 = text[id][0][fcttext];
	var text2 = text[id][1][fcttext];
	updateCard('', '', '', '', title1 + ':\n' + text1 + '\n\n' + title2 + ':\n' + text2, true);
	weatherCard.show();
}

function buildWeatherMenu(data, text){
	var weatherMenu = new UI.Menu({
		sections: [{
			title: 'Forcast next  ' + data.length + ' Days:'
		}],
		fullscreen: true
	});
	var wDIdx;
	var items = [];
	for (var i = 0; i < data.length; i++) {
		var wD = formatDailyWeatherData(data[i]);
		var item = {
			title: wD.cDateMenu + ' (' + wD.tempLow + ' / ' + wD.tempHigh + ')',
			subtitle: wD.description,
			icon: wD.icon
		};
		items.push(item);
		text[i].push(wD.cDateShort);
	}
	weatherMenu.items(0, items);
	weatherMenu.show();
	weatherMenu.on('select', function(e) {
		wDIdx = e.itemIndex;
		showTxtCard(text, wDIdx);
	});
	weatherCard.on('click', 'select', function(e) {
		weatherCard.hide();
		if (wDIdx === data.length - 1) {
			wDIdx = -1;
		}
		wDIdx++;
		showTxtCard(text, wDIdx);
	});
}

function showWeatherMenu(wD, locationId, location, event){
	var type = event.item.title.toLowerCase();
	if (event.itemIndex === 0) {
		buildWeatherMenu(wD.dataValues.daily, wD.dataValues.dailyText);
	} else {
		var weatherMenu = new UI.Menu({
			sections: [{
				title: location,
				items: [{
					title: 'Temperature /' + unitTempShort,
					icon: 'images/temp.png',
					subtitle: 'High Temp Graph'
				}, {
					title: 'Pecipitation %',
					icon: 'images/pecip.png',
					subtitle: 'Chance of Pecip.'
				}, {
					title: 'Pecip. /' + unitHeight,
					icon: 'images/height.png',
					subtitle: 'Pecip. amount'
				}, {
					title: 'Wind /' + unitSpeed,
					icon: 'images/wind.png',
					subtitle: 'Wind Graph'
				}, {
					title: 'Humidity %',
					icon: 'images/humidity.png',
					subtitle: 'Humidity Graph'
				}]
			}],
			fullscreen: true
		});
		weatherMenu.on('select', function(e) {
			var values = [];
			for (var i = 0; i < 10; i++) {
				var dat = wD.dataValues[type][i];
				switch(e.itemIndex) {
					case 0: //Temperature
						if(type === 'daily') {
							values.push(dat.high[unitTemp]);
						}	else {
							values.push(dat.temp[unitHourly]);
						}
						break;
					case 1: //Percentage of Pecipitation
						if(type === 'daily') {
							values.push(dat.pop);
						}	else {
							values.push(dat.pop);
						}
						break;
					case 2: //Pecipitation in mm or in
						if(type === 'daily') {
							values.push(dat.qpf_allday[unitHeight]);
						}	else {
							values.push(dat.qpf[unitHourly]);
						}
						break;
					case 3: //Wind
						if(type === 'daily') {
							values.push(dat.avewind[unitSpeed]);
						}	else {
							values.push(dat.wspd[unitHourly]);
						}
						break;
					case 4: //Humidity
						if(type === 'daily') {
							values.push(dat.avehumidity);
						}	else {
							values.push(dat.humidity);
						}
						break;
				}
			}
			showGraph(type, values, wD.scale[type], e.item.title, wD);
		});
		weatherMenu.show();
	}
}
function ajaxCall(ajaxUrlDaily, ajaxUrlHourly, dataObj, locationId, location, event){
	var animate = true;
	var waitingWindow = new UI.Window({
		fullscreen: true
	});
	var waitingText = new UI.Text({
		position: new Vector2(0, 60),
		size: new Vector2(144 , 18),
		font: 'gothic-18-bold',
		text: 'Loading Data...',
		textAlign: 'center'
	});
	waitingWindow.add(waitingText);
	waitingWindow.show();
	ajax({
		url: ajaxUrlDaily,
		type: 'json'
	}, function(data) {
		for (var i = 0; i < 10; i++) {
			dataObj.dataValues.daily[i] = data.forecast.simpleforecast.forecastday[i];
			var txtId = 0;
			if (i > 0 ){
				txtId = i * 2;
			}
			dataObj.dataValues.dailyText[i] = [data.forecast.txt_forecast.forecastday[txtId], data.forecast.txt_forecast.forecastday[txtId + 1]];
			dataObj.scale.daily[i] = data.forecast.simpleforecast.forecastday[i].date.weekday_short.substring(0, 1);
		}				
		ajax({
			url: ajaxUrlHourly,
			type: 'json'
		}, function(data) {
			animate = false;
			Vibe.vibrate('double');
			for (var i = 0; i < 10; i++) {
				dataObj.dataValues.hourly[i] = data.hourly_forecast[i];
				dataObj.scale.hourly[i] = data.hourly_forecast[i].FCTTIME.hour;
			}
			weatherData[encodeCId(locationId)] = dataObj;
			waitingWindow.hide();
			showWeatherMenu(dataObj, locationId, location, event);
		}, function(error) {
			animate = false;
			Vibe.vibrate('long');
			log('Ajax failed: ' + error);
			updateCard('Error', 'images/error.png', 'No data from Weather Underground', '', 'Press "select" to retry.', false);
			weatherCard.on('click', 'select', function(e) {
				getWeatherData(locationId, location, event);
			});
			weatherCard.show();
			return;
		});
	}, function(error) {
		animate = false;
		Vibe.vibrate('long');
		log('Ajax failed: ' + error);
		updateCard('Error', 'images/error.png', 'No data from Weather Underground', '', 'Press "select" to retry.', false);
		weatherCard.on('click', 'select', function(e) {
			getWeatherData(locationId, location, event);
		});
		weatherCard.show();
		return;
	});
}

function getWeatherData(locationId, location, e) {
	var encodedLocId = encodeCId(locationId);
	if (!weatherData[encodedLocId]) {
		var dataValues = {};
		var scale = {};
		dataValues.daily = [];
		dataValues.dailyText = [];
		dataValues.hourly = [];
		scale.daily = [];
		scale.hourly = [];
		var dataObj = {
			"dataValues": dataValues,
			"scale": scale
		};
		var urlHead = 'http://api.wunderground.com/api/' + key + '/lang:' + storedData.lang + '/';
		var urlDaily = urlHead + 'forecast10day/q/';
		var urlHourly = urlHead + 'hourly/q/';
		var urlEnd = '.json';
		var ajaxUrlDaily;
		var ajaxUrlHourly;
		if (locationId === 'zmw:local'){
			navigator.geolocation.getCurrentPosition(function(pos) {
				var coords = pos.coords;
				ajaxUrlDaily = urlDaily + coords.latitude + ',' + coords.longitude + urlEnd;
				ajaxUrlHourly = urlHourly + coords.latitude + ',' + coords.longitude + urlEnd;
				log(ajaxUrlDaily);
				log(ajaxUrlHourly);
				ajaxCall(ajaxUrlDaily, ajaxUrlHourly, dataObj, locationId, location, e);
			});
		} else {
			ajaxUrlDaily = urlDaily + locationId + urlEnd;
			ajaxUrlHourly = urlHourly + locationId + urlEnd;
			log(ajaxUrlDaily);
			log(ajaxUrlHourly);
			ajaxCall(ajaxUrlDaily, ajaxUrlHourly, dataObj, locationId, location, e);
		}
	} else {
		showWeatherMenu(weatherData[encodedLocId], locationId, location, e);
	}
}

function showGraph(type, values, scale, legendText, wD) {
	var graph = new UI.Window({
		fullscreen: true
	});
	var legendTextElement = new UI.Text({
		position: new Vector2(20, 1),
		size: new Vector2(124, 18),
		font: 'gothic-18-bold',
		text: legendText,
		textAlign: 'center'
	});
	graph.add(legendTextElement);
	//calculating baseline
	var base = 138;
	var scaleTextOffset = 140;
	var barCount = values.length;
	if (barCount > 10) {
		barCount = 10;
	}
	var valuesPercent = [];
	var j;
	for (j = 0; j < barCount; j++) {
		values[j] = values[j] - 0;
	}
	var min = values.slice(0).sort(function(a, b) {
		return a - b;
	})[0];
	var max = values.slice(0).sort(function(a, b) {
		return a - b;
	})[9];
	if (max === 0){
		max = 1;
	}

	if (min < 0) {
		var minPlus = Math.abs(min);
		max = minPlus + max;
		if (max === 0){
			max = 1;
		}
		base = base - Math.round(minPlus / max * 89) - 10;
		for (j = 0; j < barCount; j++) {
			var value = values[j];
			var valPush;
			if (value < 0) {
				valPush = Math.round(value * -1 / max * 89) * -1;
			} else if (value > 0) {
				valPush = Math.round(value / max * 89);
			} else {
				valPush = 0;
			}
			valuesPercent.push(valPush);
		}
	} else {
		for (j = 0; j < barCount; j++) {
			valuesPercent.push(Math.round(values[j] / max * 100));
		}
	}
	var zeroLine = new UI.Rect({
		size: new Vector2(120, 1)
	});
	zeroLine.position().x = 20;
	zeroLine.position().y = base;
	graph.add(zeroLine);
	var zeroText = new UI.Text({
		position: new Vector2(zeroLine.position().x - 18, base - 10),
		size: new Vector2(14, 14),
		font: 'gothic-14-bold',
		text: '0',
		textAlign: 'center'
	});
	graph.add(zeroText);
	graph.show();
	//first bar offset
	var pX = 9;
	var pXIncrease = 12;
	var eSX = 10;

	function addValScale(valText, scaleText) {
		setTimeout(function() {
			graph.add(valText);
		}, 200);
		setTimeout(function() {
			graph.add(scaleText);
		}, 700);
	}
	var bars = [];
	var bar, scaleVal, scaleText, val, valText, valTextY;
	for (var i = 0; i < barCount; i++) {
		bar = new UI.Rect({});
		scaleVal = scale[i];
		val = valuesPercent[i];
		valText = values[i];
		pX += pXIncrease;
		bar.position(new Vector2(pX, base));
		valTextY = base - val - 17;
		if (val < 0) {
			valTextY = valTextY + 17;
		}
		valText = new UI.Text({
			position: new Vector2(bar.position().x - 16, valTextY),
			size: new Vector2(42, 14),
			font: 'gothic-14',
			text: valText,
			textAlign: 'center'
		});
		scaleText = new UI.Text({
			position: new Vector2(bar.position().x - 16, scaleTextOffset),
			size: new Vector2(42, 14),
			font: 'gothic-14',
			text: scaleVal,
			textAlign: 'center'
		});
		bar.size().x = eSX;
		bar.size().y = 0;
		graph.add(bar);
		bar.size().y += val * -1;
		bar.animate('size', bar.size(), 500);
		bar.queue(addValScale(valText, scaleText));
		bars.push(bar);
	}
	for (i = 0; i < barCount; i++) {
		bars[i].dequeue();
	}
	var showDetails = false;
	var detailsFrame = new UI.Rect({
		size: new Vector2(57, 57),
		position: new Vector2(13, 30),
		backgroundColor: 'black',
		borderColor: 'white'
	});
	
	var detailsText = new UI.Text({
		size: new Vector2(56, 56),
		position: new Vector2(14, 28),
		font: 'gothic-14',
		textAlign: 'left'
	});
	function showBarDetails(idx, showDetails){
		var detailsOffset;
		if (selectedBar != -1){
			if (graph.index(detailsFrame) != -1){
				graph.remove(detailsText);
				graph.remove(detailsFrame);
			}
			if (idx < 5){
				detailsOffset = (idx * 10) + 39 + idx;
			} else {
				detailsOffset = (idx * 10) - 39 + idx;
			}
			if (showDetails){
				detailsFrame.position().set(detailsOffset, 30);
				detailsText.position().set(detailsOffset + 1, 28);
				detailsText.text(getWeatherDetails(wD.dataValues[type][selectedBar], type, true));
				graph.add(detailsFrame);
				graph.add(detailsText);
			}
		}
	}
	function selectBar(idx, dir) {
		var count = -3;
		var deselect = 0;
		if (dir === 'down') {
			if (idx === 0) {
				deselect = 9;
			} else {
				deselect = idx - 1;
			}
		} else {
			if (idx === 9) {
				deselect = 0;
			} else {
				deselect = idx + 1;
			}
		}
		graph.each(function(element) {
			if (count === deselect) {
				element.backgroundColor('white');
				element.borderColor('clear');
			}
			if (count === idx) {
				element.backgroundColor('black');
				element.borderColor('white');
			}
			count++;
		});
	}
	var selectedBar = -1;
	graph.on('click', 'down', function() {
		selectedBar++;
		if (selectedBar === 10) {
			selectedBar = 0;
		}
		selectBar(selectedBar, 'down');
		showBarDetails(selectedBar, showDetails);
	});
	graph.on('click', 'up', function() {
		selectedBar--;
		if (selectedBar < 0) {
			selectedBar = 9;
		}
		selectBar(selectedBar, 'up');
		showBarDetails(selectedBar, showDetails);
	});
	graph.on('click', 'select', function() {
		showDetails = !showDetails;
		showBarDetails(selectedBar, showDetails);
	});
}

var locationMenu = new UI.Menu({
	fullscreen: true
});
var cities = storedData.cities;
var localObj = ['local', 'Local Weather'];
if (includeLocal && cities.indexOf(localObj) == -1){
	cities.unshift(localObj);
}
log('first length');
for (var i = 0; i < cities.length; i++) {
	locationMenu.item(0, i, {title: cities[i][1]});
}
locationMenu.on('select', function(e) {
	var location = e.item.title;
	var locationId = encodeCId(cities[e.itemIndex][0]);
	var weatherTypeMenu = new UI.Menu({
		sections: [{
			title: location,
			items: [{
				title: 'Overview',
				icon: 'images/weather.png',
				subtitle: 'Weathermenu'
			},{
				title: 'Daily',
				icon: 'images/daily.png',
				subtitle: '10-Day Forecast'
			}, {
				title: 'Hourly',
				icon: 'images/hourly.png',
				subtitle: 'Next 10 Hours'
			}]
		}],
		fullscreen: true
	});
	weatherTypeMenu.on('select', function(e) {
		getWeatherData('zmw:' + decodeCId(locationId), location, e);
	});
	weatherTypeMenu.show();
});
var mainMenu = new UI.Menu({
	sections: [{
		items: [{
			title: 'Quickstart',
			icon: 'images/quickstart.png',
			subtitle: 'Personal Screen'
		}, {
			title: 'Weather',
			icon: 'images/weather.png',
			subtitle: 'Weather Graphs'
		}, {
			title: 'SOS-Screen',
			icon: 'images/sos.png',
			subtitle: 'Emergency Info'
		}]
	}],
	fullscreen: true
});
mainMenu.on('select', function(e) {
	if (e.itemIndex === 0) {
	} else if (e.itemIndex === 1) {
		locationMenu.show();		
	} else if (e.itemIndex === 2) {
		var sosCard = new UI.Card({
			fullscreen: true,
			icon: 'images/sos.png',
			title: storedData.sosTitle,
			body: storedData.sosText,
			scrollable: true
		});
		sosCard.show();
	}
});
mainMenu.show();
//EOF