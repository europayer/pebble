//http://api.wunderground.com/api/4a9e857279f1d074/forecast10day/q/zmw:00000.3.10866.json
var daily = {
	"response": {
		"version": "0.1",
		"termsofService": "http://www.wunderground.com/weather/api/d/terms.html",
		"features": {
			"forecast10day": 1
		}
	},
	"forecast": {
		"txt_forecast": {
			"date": "9:07 AM CET",
			"forecastday": [{
				"period": 0,
				"icon": "clear",
				"icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
				"title": "Wednesday",
				"fcttext": "Lots of sunshine. Temps nearly steady in the mid 30s. Winds E at 10 to 15 mph.",
				"fcttext_metric": "Lots of sunshine. High 3C. Winds E at 15 to 25 km/h.",
				"pop": "0"
			}, {
				"period": 1,
				"icon": "nt_clear",
				"icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
				"title": "Wednesday Night",
				"fcttext": "Mainly clear. Widespread frost likely. Low near 30F. Winds E at 5 to 10 mph.",
				"fcttext_metric": "Clear to partly cloudy. Widespread frost likely. Low -1C. Winds E at 10 to 15 km/h.",
				"pop": "10"
			}, {
				"period": 2,
				"icon": "partlycloudy",
				"icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
				"title": "Thursday",
				"fcttext": "Considerable clouds early. Some decrease in clouds later in the day. High 37F. Winds NNW at 5 to 10 mph.",
				"fcttext_metric": "Partly to mostly cloudy. High 3C. Winds NNW at 10 to 15 km/h.",
				"pop": "20"
			}, {
				"period": 3,
				"icon": "nt_mostlycloudy",
				"icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
				"title": "Thursday Night",
				"fcttext": "Mostly cloudy. Low 32F. Winds light and variable.",
				"fcttext_metric": "Mostly cloudy. Low around 0C. Winds light and variable.",
				"pop": "20"
			}, {
				"period": 4,
				"icon": "snow",
				"icon_url": "http://icons.wxug.com/i/c/k/snow.gif",
				"title": "Friday",
				"fcttext": "Variable clouds with snow showers. Temps nearly steady in the mid 30s. Winds WNW at 5 to 10 mph. Chance of snow 60%. Snow accumulations less than one inch.",
				"fcttext_metric": "Occasional snow showers. High 3C. Winds WNW at 10 to 15 km/h. Chance of snow 60%. Snow accumulations less than 2cm.",
				"pop": "60"
			}, {
				"period": 5,
				"icon": "nt_snow",
				"icon_url": "http://icons.wxug.com/i/c/k/nt_snow.gif",
				"title": "Friday Night",
				"fcttext": "Variably cloudy with snow showers. Low 31F. Winds light and variable. Chance of snow 60%.",
				"fcttext_metric": "Variably cloudy with snow showers. Low around -0C. Winds light and variable. Chance of snow 60%. Snow accumulations less than 2cm.",
				"pop": "60"
			}, {
				"period": 6,
				"icon": "snow",
				"icon_url": "http://icons.wxug.com/i/c/k/snow.gif",
				"title": "Saturday",
				"fcttext": "Variably cloudy with snow showers. High around 35F. Winds WNW at 5 to 10 mph. Chance of snow 40%.",
				"fcttext_metric": "Snow showers. High 2C. Winds WNW at 10 to 15 km/h. Chance of snow 40%.",
				"pop": "40"
			}, {
				"period": 7,
				"icon": "nt_snow",
				"icon_url": "http://icons.wxug.com/i/c/k/nt_snow.gif",
				"title": "Saturday Night",
				"fcttext": "Snow showers. Low 31F. Winds WNW at 5 to 10 mph. Chance of snow 50%.",
				"fcttext_metric": "Variable clouds with snow showers. Low -1C. Winds WNW at 10 to 15 km/h. Chance of snow 60%. Snow accumulations less than 2cm.",
				"pop": "50"
			}, {
				"period": 8,
				"icon": "snow",
				"icon_url": "http://icons.wxug.com/i/c/k/snow.gif",
				"title": "Sunday",
				"fcttext": "Variably cloudy with snow showers. Temps nearly steady in the mid 30s. Winds WNW at 10 to 15 mph. Chance of snow 50%.",
				"fcttext_metric": "Variable clouds with snow showers. High 2C. Winds WNW at 15 to 25 km/h. Chance of snow 50%. Snow accumulations less than 2cm.",
				"pop": "50"
			}, {
				"period": 9,
				"icon": "nt_snow",
				"icon_url": "http://icons.wxug.com/i/c/k/nt_snow.gif",
				"title": "Sunday Night",
				"fcttext": "Scattered flurries and snow showers. Low 28F. Winds WNW at 5 to 10 mph. Chance of snow 40%.",
				"fcttext_metric": "Mostly cloudy with snow flurries and snow showers, especially overnight hours. Low -2C. Winds WNW at 10 to 15 km/h. Chance of snow 40%.",
				"pop": "40"
			}, {
				"period": 10,
				"icon": "partlycloudy",
				"icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
				"title": "Monday",
				"fcttext": "Mostly cloudy early, then afternoon sunshine. High 34F. Winds W at 5 to 10 mph.",
				"fcttext_metric": "Cloudy early, becoming mostly sunny in the afternoon. High 1C. Winds light and variable.",
				"pop": "20"
			}, {
				"period": 11,
				"icon": "nt_clear",
				"icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
				"title": "Monday Night",
				"fcttext": "A few clouds overnight. Low 29F. Winds SW at 5 to 10 mph.",
				"fcttext_metric": "Partly cloudy. Low -1C. Winds SW at 10 to 15 km/h.",
				"pop": "20"
			}, {
				"period": 12,
				"icon": "snow",
				"icon_url": "http://icons.wxug.com/i/c/k/snow.gif",
				"title": "Tuesday",
				"fcttext": "Cloudy with snow showers developing during the afternoon. Temps nearly steady in the mid 30s. Winds W at 10 to 20 mph. Chance of snow 60%. Snow accumulations less than one inch.",
				"fcttext_metric": "Cloudy with snow showers developing during the afternoon. High 2C. Winds W at 15 to 30 km/h. Chance of snow 60%. Snow accumulations less than 2cm.",
				"pop": "60"
			}, {
				"period": 13,
				"icon": "nt_snow",
				"icon_url": "http://icons.wxug.com/i/c/k/nt_snow.gif",
				"title": "Tuesday Night",
				"fcttext": "Variable clouds with snow showers. Low 32F. Winds W at 5 to 10 mph. Chance of snow 60%. Snow accumulations less than one inch.",
				"fcttext_metric": "Occasional snow showers. Low around -0C. Winds W at 10 to 15 km/h. Chance of snow 60%. Snow accumulations less than 2cm.",
				"pop": "60"
			}, {
				"period": 14,
				"icon": "partlycloudy",
				"icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
				"title": "Wednesday",
				"fcttext": "Partly cloudy skies. Temps nearly steady in the mid 30s. Winds WSW at 5 to 10 mph.",
				"fcttext_metric": "Intervals of clouds and sunshine. High 2C. Winds WSW at 10 to 15 km/h.",
				"pop": "20"
			}, {
				"period": 15,
				"icon": "nt_snow",
				"icon_url": "http://icons.wxug.com/i/c/k/nt_snow.gif",
				"title": "Wednesday Night",
				"fcttext": "Occasional snow showers. Low 32F. Winds WSW at 5 to 10 mph. Chance of snow 40%. About one inch of snow expected.",
				"fcttext_metric": "Occasional snow showers. Low near -0C. Winds WSW at 10 to 15 km/h. Chance of snow 40%. Snow accumulations less than 2cm.",
				"pop": "40"
			}, {
				"period": 16,
				"icon": "snow",
				"icon_url": "http://icons.wxug.com/i/c/k/snow.gif",
				"title": "Thursday",
				"fcttext": "Snow during the morning will taper off to light snow during the afternoon. High 37F. Winds SW at 10 to 15 mph. Chance of snow 60%. Snow accumulating 1 to 3 inches.",
				"fcttext_metric": "Snow during the morning will taper off to light snow during the afternoon. High 3C. Winds SW at 10 to 15 km/h. Chance of snow 60%. 3-7cm of snow expected.",
				"pop": "60"
			}, {
				"period": 17,
				"icon": "nt_snow",
				"icon_url": "http://icons.wxug.com/i/c/k/nt_snow.gif",
				"title": "Thursday Night",
				"fcttext": "Rain and snow in the evening, becoming all snow late. Low near 30F. Winds WSW at 10 to 15 mph. Chance of precip 60%. 1 to 3 inches of snow expected.",
				"fcttext_metric": "Rain and snow in the evening turning to all snow late. Low -1C. Winds WSW at 15 to 25 km/h. Chance of precip 60%. Snow accumulating 3-7cm.",
				"pop": "60"
			}, {
				"period": 18,
				"icon": "snow",
				"icon_url": "http://icons.wxug.com/i/c/k/snow.gif",
				"title": "Friday",
				"fcttext": "Snow during the morning will give way to lingering snow showers during the afternoon. High 37F. Winds WSW at 10 to 20 mph. Chance of snow 60%. 1 to 3 inches of snow expected.",
				"fcttext_metric": "Snow during the morning will give way to lingering snow showers during the afternoon. High 3C. Winds WSW at 15 to 30 km/h. Chance of snow 60%. Snow accumulating 3-7cm.",
				"pop": "60"
			}, {
				"period": 19,
				"icon": "nt_snow",
				"icon_url": "http://icons.wxug.com/i/c/k/nt_snow.gif",
				"title": "Friday Night",
				"fcttext": "Cloudy with snow showers in the evening and steady snow likely after midnight. Low 33F. Winds W at 10 to 15 mph. Chance of snow 60%. Snow accumulating 1 to 3 inches.",
				"fcttext_metric": "Cloudy with snow showers becoming a steady light snow later. Low around 0C. Winds W at 15 to 25 km/h. Chance of snow 60%. Snow accumulating 3-7cm.",
				"pop": "60"
			}]
		},
		"simpleforecast": {
			"forecastday": [{
				"date": {
					"epoch": "1421863200",
					"pretty": "7:00 PM CET on January 21, 2015",
					"day": 21,
					"month": 1,
					"year": 2015,
					"yday": 20,
					"hour": 19,
					"min": "00",
					"sec": 0,
					"isdst": "0",
					"monthname": "January",
					"monthname_short": "Jan",
					"weekday_short": "Wed",
					"weekday": "Wednesday",
					"ampm": "PM",
					"tz_short": "CET",
					"tz_long": "Europe/Berlin"
				},
				"period": 1,
				"high": {
					"fahrenheit": "37",
					"celsius": "3"
				},
				"low": {
					"fahrenheit": "30",
					"celsius": "-1"
				},
				"conditions": "Clear",
				"icon": "clear",
				"icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
				"skyicon": "",
				"pop": 0,
				"qpf_allday": {
					"in": 0.00,
					"mm": 0
				},
				"qpf_day": {
					"in": 0.00,
					"mm": 0
				},
				"qpf_night": {
					"in": 0.00,
					"mm": 0
				},
				"snow_allday": {
					"in": 0.0,
					"cm": 0.0
				},
				"snow_day": {
					"in": 0.0,
					"cm": 0.0
				},
				"snow_night": {
					"in": 0.0,
					"cm": 0.0
				},
				"maxwind": {
					"mph": 15,
					"kph": 24,
					"dir": "E",
					"degrees": 89
				},
				"avewind": {
					"mph": 11,
					"kph": 18,
					"dir": "E",
					"degrees": 89
				},
				"avehumidity": 74,
				"maxhumidity": 0,
				"minhumidity": 0
			}, {
				"date": {
					"epoch": "1421949600",
					"pretty": "7:00 PM CET on January 22, 2015",
					"day": 22,
					"month": 1,
					"year": 2015,
					"yday": 21,
					"hour": 19,
					"min": "00",
					"sec": 0,
					"isdst": "0",
					"monthname": "January",
					"monthname_short": "Jan",
					"weekday_short": "Thu",
					"weekday": "Thursday",
					"ampm": "PM",
					"tz_short": "CET",
					"tz_long": "Europe/Berlin"
				},
				"period": 2,
				"high": {
					"fahrenheit": "37",
					"celsius": "3"
				},
				"low": {
					"fahrenheit": "32",
					"celsius": "0"
				},
				"conditions": "Partly Cloudy",
				"icon": "partlycloudy",
				"icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
				"skyicon": "",
				"pop": 20,
				"qpf_allday": {
					"in": 0.00,
					"mm": 0
				},
				"qpf_day": {
					"in": 0.00,
					"mm": 0
				},
				"qpf_night": {
					"in": 0.00,
					"mm": 0
				},
				"snow_allday": {
					"in": 0.0,
					"cm": 0.0
				},
				"snow_day": {
					"in": 0.0,
					"cm": 0.0
				},
				"snow_night": {
					"in": 0.0,
					"cm": 0.0
				},
				"maxwind": {
					"mph": 10,
					"kph": 16,
					"dir": "NNW",
					"degrees": 335
				},
				"avewind": {
					"mph": 6,
					"kph": 10,
					"dir": "NNW",
					"degrees": 335
				},
				"avehumidity": 86,
				"maxhumidity": 0,
				"minhumidity": 0
			}, {
				"date": {
					"epoch": "1422036000",
					"pretty": "7:00 PM CET on January 23, 2015",
					"day": 23,
					"month": 1,
					"year": 2015,
					"yday": 22,
					"hour": 19,
					"min": "00",
					"sec": 0,
					"isdst": "0",
					"monthname": "January",
					"monthname_short": "Jan",
					"weekday_short": "Fri",
					"weekday": "Friday",
					"ampm": "PM",
					"tz_short": "CET",
					"tz_long": "Europe/Berlin"
				},
				"period": 3,
				"high": {
					"fahrenheit": "37",
					"celsius": "3"
				},
				"low": {
					"fahrenheit": "31",
					"celsius": "-1"
				},
				"conditions": "Snow Showers",
				"icon": "snow",
				"icon_url": "http://icons.wxug.com/i/c/k/snow.gif",
				"skyicon": "",
				"pop": 60,
				"qpf_allday": {
					"in": 0.09,
					"mm": 2
				},
				"qpf_day": {
					"in": 0.06,
					"mm": 2
				},
				"qpf_night": {
					"in": 0.03,
					"mm": 1
				},
				"snow_allday": {
					"in": 0.9,
					"cm": 2.3
				},
				"snow_day": {
					"in": 0.6,
					"cm": 1.5
				},
				"snow_night": {
					"in": 0.3,
					"cm": 0.8
				},
				"maxwind": {
					"mph": 10,
					"kph": 16,
					"dir": "WNW",
					"degrees": 286
				},
				"avewind": {
					"mph": 7,
					"kph": 11,
					"dir": "WNW",
					"degrees": 286
				},
				"avehumidity": 90,
				"maxhumidity": 0,
				"minhumidity": 0
			}, {
				"date": {
					"epoch": "1422122400",
					"pretty": "7:00 PM CET on January 24, 2015",
					"day": 24,
					"month": 1,
					"year": 2015,
					"yday": 23,
					"hour": 19,
					"min": "00",
					"sec": 0,
					"isdst": "0",
					"monthname": "January",
					"monthname_short": "Jan",
					"weekday_short": "Sat",
					"weekday": "Saturday",
					"ampm": "PM",
					"tz_short": "CET",
					"tz_long": "Europe/Berlin"
				},
				"period": 4,
				"high": {
					"fahrenheit": "35",
					"celsius": "2"
				},
				"low": {
					"fahrenheit": "31",
					"celsius": "-1"
				},
				"conditions": "Snow Showers",
				"icon": "snow",
				"icon_url": "http://icons.wxug.com/i/c/k/snow.gif",
				"skyicon": "",
				"pop": 40,
				"qpf_allday": {
					"in": 0.01,
					"mm": 0
				},
				"qpf_day": {
					"in": 0.00,
					"mm": 0
				},
				"qpf_night": {
					"in": 0.01,
					"mm": 0
				},
				"snow_allday": {
					"in": 0.1,
					"cm": 0.3
				},
				"snow_day": {
					"in": 0.0,
					"cm": 0.0
				},
				"snow_night": {
					"in": 0.1,
					"cm": 0.3
				},
				"maxwind": {
					"mph": 10,
					"kph": 16,
					"dir": "WNW",
					"degrees": 293
				},
				"avewind": {
					"mph": 7,
					"kph": 11,
					"dir": "WNW",
					"degrees": 293
				},
				"avehumidity": 84,
				"maxhumidity": 0,
				"minhumidity": 0
			}, {
				"date": {
					"epoch": "1422208800",
					"pretty": "7:00 PM CET on January 25, 2015",
					"day": 25,
					"month": 1,
					"year": 2015,
					"yday": 24,
					"hour": 19,
					"min": "00",
					"sec": 0,
					"isdst": "0",
					"monthname": "January",
					"monthname_short": "Jan",
					"weekday_short": "Sun",
					"weekday": "Sunday",
					"ampm": "PM",
					"tz_short": "CET",
					"tz_long": "Europe/Berlin"
				},
				"period": 5,
				"high": {
					"fahrenheit": "35",
					"celsius": "2"
				},
				"low": {
					"fahrenheit": "28",
					"celsius": "-2"
				},
				"conditions": "Snow Showers",
				"icon": "snow",
				"icon_url": "http://icons.wxug.com/i/c/k/snow.gif",
				"skyicon": "",
				"pop": 50,
				"qpf_allday": {
					"in": 0.03,
					"mm": 1
				},
				"qpf_day": {
					"in": 0.03,
					"mm": 1
				},
				"qpf_night": {
					"in": 0.00,
					"mm": 0
				},
				"snow_allday": {
					"in": 0.3,
					"cm": 0.8
				},
				"snow_day": {
					"in": 0.3,
					"cm": 0.8
				},
				"snow_night": {
					"in": 0.0,
					"cm": 0.0
				},
				"maxwind": {
					"mph": 15,
					"kph": 24,
					"dir": "WNW",
					"degrees": 297
				},
				"avewind": {
					"mph": 11,
					"kph": 18,
					"dir": "WNW",
					"degrees": 297
				},
				"avehumidity": 84,
				"maxhumidity": 0,
				"minhumidity": 0
			}, {
				"date": {
					"epoch": "1422295200",
					"pretty": "7:00 PM CET on January 26, 2015",
					"day": 26,
					"month": 1,
					"year": 2015,
					"yday": 25,
					"hour": 19,
					"min": "00",
					"sec": 0,
					"isdst": "0",
					"monthname": "January",
					"monthname_short": "Jan",
					"weekday_short": "Mon",
					"weekday": "Monday",
					"ampm": "PM",
					"tz_short": "CET",
					"tz_long": "Europe/Berlin"
				},
				"period": 6,
				"high": {
					"fahrenheit": "34",
					"celsius": "1"
				},
				"low": {
					"fahrenheit": "29",
					"celsius": "-2"
				},
				"conditions": "Partly Cloudy",
				"icon": "partlycloudy",
				"icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
				"skyicon": "",
				"pop": 20,
				"qpf_allday": {
					"in": 0.00,
					"mm": 0
				},
				"qpf_day": {
					"in": 0.00,
					"mm": 0
				},
				"qpf_night": {
					"in": 0.00,
					"mm": 0
				},
				"snow_allday": {
					"in": 0.0,
					"cm": 0.0
				},
				"snow_day": {
					"in": 0.0,
					"cm": 0.0
				},
				"snow_night": {
					"in": 0.0,
					"cm": 0.0
				},
				"maxwind": {
					"mph": 10,
					"kph": 16,
					"dir": "W",
					"degrees": 262
				},
				"avewind": {
					"mph": 6,
					"kph": 10,
					"dir": "W",
					"degrees": 262
				},
				"avehumidity": 75,
				"maxhumidity": 0,
				"minhumidity": 0
			}, {
				"date": {
					"epoch": "1422381600",
					"pretty": "7:00 PM CET on January 27, 2015",
					"day": 27,
					"month": 1,
					"year": 2015,
					"yday": 26,
					"hour": 19,
					"min": "00",
					"sec": 0,
					"isdst": "0",
					"monthname": "January",
					"monthname_short": "Jan",
					"weekday_short": "Tue",
					"weekday": "Tuesday",
					"ampm": "PM",
					"tz_short": "CET",
					"tz_long": "Europe/Berlin"
				},
				"period": 7,
				"high": {
					"fahrenheit": "36",
					"celsius": "2"
				},
				"low": {
					"fahrenheit": "32",
					"celsius": "0"
				},
				"conditions": "Snow Showers",
				"icon": "snow",
				"icon_url": "http://icons.wxug.com/i/c/k/snow.gif",
				"skyicon": "",
				"pop": 60,
				"qpf_allday": {
					"in": 0.11,
					"mm": 3
				},
				"qpf_day": {
					"in": 0.05,
					"mm": 1
				},
				"qpf_night": {
					"in": 0.06,
					"mm": 2
				},
				"snow_allday": {
					"in": 1.1,
					"cm": 2.8
				},
				"snow_day": {
					"in": 0.5,
					"cm": 1.3
				},
				"snow_night": {
					"in": 0.6,
					"cm": 1.5
				},
				"maxwind": {
					"mph": 20,
					"kph": 32,
					"dir": "W",
					"degrees": 267
				},
				"avewind": {
					"mph": 14,
					"kph": 23,
					"dir": "W",
					"degrees": 267
				},
				"avehumidity": 80,
				"maxhumidity": 0,
				"minhumidity": 0
			}, {
				"date": {
					"epoch": "1422468000",
					"pretty": "7:00 PM CET on January 28, 2015",
					"day": 28,
					"month": 1,
					"year": 2015,
					"yday": 27,
					"hour": 19,
					"min": "00",
					"sec": 0,
					"isdst": "0",
					"monthname": "January",
					"monthname_short": "Jan",
					"weekday_short": "Wed",
					"weekday": "Wednesday",
					"ampm": "PM",
					"tz_short": "CET",
					"tz_long": "Europe/Berlin"
				},
				"period": 8,
				"high": {
					"fahrenheit": "36",
					"celsius": "2"
				},
				"low": {
					"fahrenheit": "32",
					"celsius": "0"
				},
				"conditions": "Partly Cloudy",
				"icon": "partlycloudy",
				"icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
				"skyicon": "",
				"pop": 20,
				"qpf_allday": {
					"in": 0.09,
					"mm": 2
				},
				"qpf_day": {
					"in": 0.00,
					"mm": 0
				},
				"qpf_night": {
					"in": 0.09,
					"mm": 2
				},
				"snow_allday": {
					"in": 0.9,
					"cm": 2.3
				},
				"snow_day": {
					"in": 0.0,
					"cm": 0.0
				},
				"snow_night": {
					"in": 0.9,
					"cm": 2.3
				},
				"maxwind": {
					"mph": 10,
					"kph": 16,
					"dir": "WSW",
					"degrees": 246
				},
				"avewind": {
					"mph": 8,
					"kph": 13,
					"dir": "WSW",
					"degrees": 246
				},
				"avehumidity": 84,
				"maxhumidity": 0,
				"minhumidity": 0
			}, {
				"date": {
					"epoch": "1422554400",
					"pretty": "7:00 PM CET on January 29, 2015",
					"day": 29,
					"month": 1,
					"year": 2015,
					"yday": 28,
					"hour": 19,
					"min": "00",
					"sec": 0,
					"isdst": "0",
					"monthname": "January",
					"monthname_short": "Jan",
					"weekday_short": "Thu",
					"weekday": "Thursday",
					"ampm": "PM",
					"tz_short": "CET",
					"tz_long": "Europe/Berlin"
				},
				"period": 9,
				"high": {
					"fahrenheit": "37",
					"celsius": "3"
				},
				"low": {
					"fahrenheit": "30",
					"celsius": "-1"
				},
				"conditions": "Snow",
				"icon": "snow",
				"icon_url": "http://icons.wxug.com/i/c/k/snow.gif",
				"skyicon": "",
				"pop": 60,
				"qpf_allday": {
					"in": 0.51,
					"mm": 13
				},
				"qpf_day": {
					"in": 0.24,
					"mm": 6
				},
				"qpf_night": {
					"in": 0.27,
					"mm": 7
				},
				"snow_allday": {
					"in": 3.5,
					"cm": 8.9
				},
				"snow_day": {
					"in": 1.7,
					"cm": 4.3
				},
				"snow_night": {
					"in": 1.8,
					"cm": 4.6
				},
				"maxwind": {
					"mph": 15,
					"kph": 24,
					"dir": "SW",
					"degrees": 230
				},
				"avewind": {
					"mph": 10,
					"kph": 16,
					"dir": "SW",
					"degrees": 230
				},
				"avehumidity": 89,
				"maxhumidity": 0,
				"minhumidity": 0
			}, {
				"date": {
					"epoch": "1422640800",
					"pretty": "7:00 PM CET on January 30, 2015",
					"day": 30,
					"month": 1,
					"year": 2015,
					"yday": 29,
					"hour": 19,
					"min": "00",
					"sec": 0,
					"isdst": "0",
					"monthname": "January",
					"monthname_short": "Jan",
					"weekday_short": "Fri",
					"weekday": "Friday",
					"ampm": "PM",
					"tz_short": "CET",
					"tz_long": "Europe/Berlin"
				},
				"period": 10,
				"high": {
					"fahrenheit": "37",
					"celsius": "3"
				},
				"low": {
					"fahrenheit": "33",
					"celsius": "1"
				},
				"conditions": "Snow",
				"icon": "snow",
				"icon_url": "http://icons.wxug.com/i/c/k/snow.gif",
				"skyicon": "",
				"pop": 60,
				"qpf_allday": {
					"in": 0.36,
					"mm": 9
				},
				"qpf_day": {
					"in": 0.18,
					"mm": 5
				},
				"qpf_night": {
					"in": 0.18,
					"mm": 5
				},
				"snow_allday": {
					"in": 3.6,
					"cm": 9.1
				},
				"snow_day": {
					"in": 1.8,
					"cm": 4.6
				},
				"snow_night": {
					"in": 1.8,
					"cm": 4.6
				},
				"maxwind": {
					"mph": 20,
					"kph": 32,
					"dir": "WSW",
					"degrees": 250
				},
				"avewind": {
					"mph": 14,
					"kph": 23,
					"dir": "WSW",
					"degrees": 250
				},
				"avehumidity": 79,
				"maxhumidity": 0,
				"minhumidity": 0
			}]
		}
	}
};

//http://api.wunderground.com/api/4a9e857279f1d074/hourly/q/zmw:00000.3.10866.json
var hourly = {
	"response": {
		"version": "0.1",
		"termsofService": "http://www.wunderground.com/weather/api/d/terms.html",
		"features": {
			"hourly": 1
		}
	},
	"hourly_forecast": [{
		"FCTTIME": {
			"hour": "14",
			"hour_padded": "14",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "20",
			"mday_padded": "20",
			"yday": "19",
			"isdst": "0",
			"epoch": "1421758800",
			"pretty": "2:00 PM CET on January 20, 2015",
			"civil": "2:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Tuesday",
			"weekday_name_night": "Tuesday Night",
			"weekday_name_abbrev": "Tue",
			"weekday_name_unlang": "Tuesday",
			"weekday_name_night_unlang": "Tuesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "36",
			"metric": "2"
		},
		"dewpoint": {
			"english": "30",
			"metric": "-1"
		},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "59",
		"wspd": {
			"english": "4",
			"metric": "6"
		},
		"wdir": {
			"dir": "WNW",
			"degrees": "304"
		},
		"wx": "Partly Cloudy",
		"uvi": "1",
		"humidity": "80",
		"windchill": {
			"english": "32",
			"metric": "0"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "32",
			"metric": "0"
		},
		"qpf": {
			"english": "2.1",
			"metric": "2"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "0",
		"mslp": {
			"english": "29.85",
			"metric": "1011"
		}
	}, {
		"FCTTIME": {
			"hour": "15",
			"hour_padded": "15",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "20",
			"mday_padded": "20",
			"yday": "19",
			"isdst": "0",
			"epoch": "1421762400",
			"pretty": "3:00 PM CET on January 20, 2015",
			"civil": "3:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Tuesday",
			"weekday_name_night": "Tuesday Night",
			"weekday_name_abbrev": "Tue",
			"weekday_name_unlang": "Tuesday",
			"weekday_name_night_unlang": "Tuesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "37",
			"metric": "3"
		},
		"dewpoint": {
			"english": "30",
			"metric": "-1"
		},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "50",
		"wspd": {
			"english": "5",
			"metric": "8"
		},
		"wdir": {
			"dir": "NW",
			"degrees": "320"
		},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "78",
		"windchill": {
			"english": "33",
			"metric": "1"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "33",
			"metric": "1"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "0",
		"mslp": {
			"english": "29.85",
			"metric": "1011"
		}
	}, {
		"FCTTIME": {
			"hour": "16",
			"hour_padded": "16",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "20",
			"mday_padded": "20",
			"yday": "19",
			"isdst": "0",
			"epoch": "1421766000",
			"pretty": "4:00 PM CET on January 20, 2015",
			"civil": "4:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Tuesday",
			"weekday_name_night": "Tuesday Night",
			"weekday_name_abbrev": "Tue",
			"weekday_name_unlang": "Tuesday",
			"weekday_name_night_unlang": "Tuesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "36",
			"metric": "2"
		},
		"dewpoint": {
			"english": "31",
			"metric": "-1"
		},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "45",
		"wspd": {
			"english": "4",
			"metric": "6"
		},
		"wdir": {
			"dir": "NNW",
			"degrees": "346"
		},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "80",
		"windchill": {
			"english": "32",
			"metric": "0"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "32",
			"metric": "0"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "0",
		"mslp": {
			"english": "29.86",
			"metric": "1011"
		}
	}, {
		"FCTTIME": {
			"hour": "17",
			"hour_padded": "17",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "20",
			"mday_padded": "20",
			"yday": "19",
			"isdst": "0",
			"epoch": "1421769600",
			"pretty": "5:00 PM CET on January 20, 2015",
			"civil": "5:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Tuesday",
			"weekday_name_night": "Tuesday Night",
			"weekday_name_abbrev": "Tue",
			"weekday_name_unlang": "Tuesday",
			"weekday_name_night_unlang": "Tuesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "35",
			"metric": "2"
		},
		"dewpoint": {
			"english": "30",
			"metric": "-1"
		},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "44",
		"wspd": {
			"english": "4",
			"metric": "6"
		},
		"wdir": {
			"dir": "N",
			"degrees": "3"
		},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "81",
		"windchill": {
			"english": "32",
			"metric": "0"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "32",
			"metric": "0"
		},
		"qpf": {
			"english": "5.0",
			"metric": "3"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "0",
		"mslp": {
			"english": "29.86",
			"metric": "1011"
		}
	}, {
		"FCTTIME": {
			"hour": "18",
			"hour_padded": "18",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "20",
			"mday_padded": "20",
			"yday": "19",
			"isdst": "0",
			"epoch": "1421773200",
			"pretty": "6:00 PM CET on January 20, 2015",
			"civil": "6:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Tuesday",
			"weekday_name_night": "Tuesday Night",
			"weekday_name_abbrev": "Tue",
			"weekday_name_unlang": "Tuesday",
			"weekday_name_night_unlang": "Tuesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "34",
			"metric": "1"
		},
		"dewpoint": {
			"english": "29",
			"metric": "-2"
		},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "39",
		"wspd": {
			"english": "4",
			"metric": "6"
		},
		"wdir": {
			"dir": "NNE",
			"degrees": "13"
		},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "82",
		"windchill": {
			"english": "30",
			"metric": "-1"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "30",
			"metric": "-1"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "0",
		"mslp": {
			"english": "29.87",
			"metric": "1012"
		}
	}, {
		"FCTTIME": {
			"hour": "19",
			"hour_padded": "19",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "20",
			"mday_padded": "20",
			"yday": "19",
			"isdst": "0",
			"epoch": "1421776800",
			"pretty": "7:00 PM CET on January 20, 2015",
			"civil": "7:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Tuesday",
			"weekday_name_night": "Tuesday Night",
			"weekday_name_abbrev": "Tue",
			"weekday_name_unlang": "Tuesday",
			"weekday_name_night_unlang": "Tuesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "34",
			"metric": "1"
		},
		"dewpoint": {
			"english": "29",
			"metric": "-2"
		},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "42",
		"wspd": {
			"english": "3",
			"metric": "5"
		},
		"wdir": {
			"dir": "NNE",
			"degrees": "21"
		},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "84",
		"windchill": {
			"english": "-9999",
			"metric": "-9999"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "34",
			"metric": "1"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "1",
		"mslp": {
			"english": "29.88",
			"metric": "1012"
		}
	}, {
		"FCTTIME": {
			"hour": "20",
			"hour_padded": "20",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "20",
			"mday_padded": "20",
			"yday": "19",
			"isdst": "0",
			"epoch": "1421780400",
			"pretty": "8:00 PM CET on January 20, 2015",
			"civil": "8:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Tuesday",
			"weekday_name_night": "Tuesday Night",
			"weekday_name_abbrev": "Tue",
			"weekday_name_unlang": "Tuesday",
			"weekday_name_night_unlang": "Tuesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "33",
			"metric": "1"
		},
		"dewpoint": {
			"english": "29",
			"metric": "-2"
		},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "48",
		"wspd": {
			"english": "3",
			"metric": "5"
		},
		"wdir": {
			"dir": "NE",
			"degrees": "36"
		},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "87",
		"windchill": {
			"english": "-9999",
			"metric": "-9999"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "33",
			"metric": "1"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "2",
		"mslp": {
			"english": "29.9",
			"metric": "1013"
		}
	}, {
		"FCTTIME": {
			"hour": "21",
			"hour_padded": "21",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "20",
			"mday_padded": "20",
			"yday": "19",
			"isdst": "0",
			"epoch": "1421784000",
			"pretty": "9:00 PM CET on January 20, 2015",
			"civil": "9:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Tuesday",
			"weekday_name_night": "Tuesday Night",
			"weekday_name_abbrev": "Tue",
			"weekday_name_unlang": "Tuesday",
			"weekday_name_night_unlang": "Tuesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "32",
			"metric": "0"
		},
		"dewpoint": {
			"english": "29",
			"metric": "-2"
		},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "53",
		"wspd": {
			"english": "3",
			"metric": "5"
		},
		"wdir": {
			"dir": "NE",
			"degrees": "41"
		},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "90",
		"windchill": {
			"english": "-9999",
			"metric": "-9999"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "32",
			"metric": "0"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "4",
		"mslp": {
			"english": "29.9",
			"metric": "1013"
		}
	}, {
		"FCTTIME": {
			"hour": "22",
			"hour_padded": "22",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "20",
			"mday_padded": "20",
			"yday": "19",
			"isdst": "0",
			"epoch": "1421787600",
			"pretty": "10:00 PM CET on January 20, 2015",
			"civil": "10:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Tuesday",
			"weekday_name_night": "Tuesday Night",
			"weekday_name_abbrev": "Tue",
			"weekday_name_unlang": "Tuesday",
			"weekday_name_night_unlang": "Tuesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "31",
			"metric": "-1"
		},
		"dewpoint": {
			"english": "29",
			"metric": "-2"
		},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "61",
		"wspd": {
			"english": "3",
			"metric": "5"
		},
		"wdir": {
			"dir": "NE",
			"degrees": "52"
		},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "91",
		"windchill": {
			"english": "-9999",
			"metric": "-9999"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "31",
			"metric": "-1"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "4",
		"mslp": {
			"english": "29.9",
			"metric": "1013"
		}
	}, {
		"FCTTIME": {
			"hour": "23",
			"hour_padded": "23",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "20",
			"mday_padded": "20",
			"yday": "19",
			"isdst": "0",
			"epoch": "1421791200",
			"pretty": "11:00 PM CET on January 20, 2015",
			"civil": "11:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Tuesday",
			"weekday_name_night": "Tuesday Night",
			"weekday_name_abbrev": "Tue",
			"weekday_name_unlang": "Tuesday",
			"weekday_name_night_unlang": "Tuesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "31",
			"metric": "-1"
		},
		"dewpoint": {
			"english": "29",
			"metric": "-2"
		},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "66",
		"wspd": {
			"english": "4",
			"metric": "6"
		},
		"wdir": {
			"dir": "ENE",
			"degrees": "59"
		},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "92",
		"windchill": {
			"english": "26",
			"metric": "-3"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "26",
			"metric": "-3"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "4",
		"mslp": {
			"english": "29.9",
			"metric": "1013"
		}
	}, {
		"FCTTIME": {
			"hour": "0",
			"hour_padded": "00",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421794800",
			"pretty": "12:00 AM CET on January 21, 2015",
			"civil": "12:00 AM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "AM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "31",
			"metric": "-1"
		},
		"dewpoint": {
			"english": "30",
			"metric": "-1"
		},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "67",
		"wspd": {
			"english": "4",
			"metric": "6"
		},
		"wdir": {
			"dir": "ENE",
			"degrees": "69"
		},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "93",
		"windchill": {
			"english": "26",
			"metric": "-3"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "26",
			"metric": "-3"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "3",
		"mslp": {
			"english": "29.91",
			"metric": "1013"
		}
	}, {
		"FCTTIME": {
			"hour": "1",
			"hour_padded": "01",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421798400",
			"pretty": "1:00 AM CET on January 21, 2015",
			"civil": "1:00 AM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "AM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "31",
			"metric": "-1"
		},
		"dewpoint": {
			"english": "29",
			"metric": "-2"
		},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "69",
		"wspd": {
			"english": "4",
			"metric": "6"
		},
		"wdir": {
			"dir": "ENE",
			"degrees": "74"
		},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "93",
		"windchill": {
			"english": "26",
			"metric": "-3"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "26",
			"metric": "-3"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "4",
		"mslp": {
			"english": "29.9",
			"metric": "1013"
		}
	}, {
		"FCTTIME": {
			"hour": "2",
			"hour_padded": "02",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421802000",
			"pretty": "2:00 AM CET on January 21, 2015",
			"civil": "2:00 AM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "AM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "31",
			"metric": "-1"
		},
		"dewpoint": {
			"english": "29",
			"metric": "-2"
		},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "70",
		"wspd": {
			"english": "5",
			"metric": "8"
		},
		"wdir": {
			"dir": "ENE",
			"degrees": "79"
		},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "93",
		"windchill": {
			"english": "25",
			"metric": "-4"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "25",
			"metric": "-4"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "5",
		"mslp": {
			"english": "29.9",
			"metric": "1013"
		}
	}, {
		"FCTTIME": {
			"hour": "3",
			"hour_padded": "03",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421805600",
			"pretty": "3:00 AM CET on January 21, 2015",
			"civil": "3:00 AM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "AM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "31",
			"metric": "-1"
		},
		"dewpoint": {
			"english": "29",
			"metric": "-2"
		},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "73",
		"wspd": {
			"english": "5",
			"metric": "8"
		},
		"wdir": {
			"dir": "E",
			"degrees": "82"
		},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "92",
		"windchill": {
			"english": "25",
			"metric": "-4"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "25",
			"metric": "-4"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "5",
		"mslp": {
			"english": "29.89",
			"metric": "1012"
		}
	}, {
		"FCTTIME": {
			"hour": "4",
			"hour_padded": "04",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421809200",
			"pretty": "4:00 AM CET on January 21, 2015",
			"civil": "4:00 AM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "AM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "31",
			"metric": "-1"
		},
		"dewpoint": {
			"english": "29",
			"metric": "-2"
		},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "74",
		"wspd": {
			"english": "4",
			"metric": "6"
		},
		"wdir": {
			"dir": "E",
			"degrees": "84"
		},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "90",
		"windchill": {
			"english": "26",
			"metric": "-3"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "26",
			"metric": "-3"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "5",
		"mslp": {
			"english": "29.89",
			"metric": "1012"
		}
	}, {
		"FCTTIME": {
			"hour": "5",
			"hour_padded": "05",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421812800",
			"pretty": "5:00 AM CET on January 21, 2015",
			"civil": "5:00 AM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "AM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "31",
			"metric": "-1"
		},
		"dewpoint": {
			"english": "29",
			"metric": "-2"
		},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "68",
		"wspd": {
			"english": "5",
			"metric": "8"
		},
		"wdir": {
			"dir": "E",
			"degrees": "85"
		},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "91",
		"windchill": {
			"english": "25",
			"metric": "-4"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "25",
			"metric": "-4"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "5",
		"mslp": {
			"english": "29.88",
			"metric": "1012"
		}
	}, {
		"FCTTIME": {
			"hour": "6",
			"hour_padded": "06",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421816400",
			"pretty": "6:00 AM CET on January 21, 2015",
			"civil": "6:00 AM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "AM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "30",
			"metric": "-1"
		},
		"dewpoint": {
			"english": "28",
			"metric": "-2"
		},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "54",
		"wspd": {
			"english": "5",
			"metric": "8"
		},
		"wdir": {
			"dir": "E",
			"degrees": "84"
		},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "91",
		"windchill": {
			"english": "25",
			"metric": "-4"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "25",
			"metric": "-4"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "6",
		"mslp": {
			"english": "29.88",
			"metric": "1012"
		}
	}, {
		"FCTTIME": {
			"hour": "7",
			"hour_padded": "07",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421820000",
			"pretty": "7:00 AM CET on January 21, 2015",
			"civil": "7:00 AM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "AM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "30",
			"metric": "-1"
		},
		"dewpoint": {
			"english": "28",
			"metric": "-2"
		},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "44",
		"wspd": {
			"english": "6",
			"metric": "10"
		},
		"wdir": {
			"dir": "E",
			"degrees": "82"
		},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "91",
		"windchill": {
			"english": "24",
			"metric": "-4"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "24",
			"metric": "-4"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "6",
		"mslp": {
			"english": "29.88",
			"metric": "1012"
		}
	}, {
		"FCTTIME": {
			"hour": "8",
			"hour_padded": "08",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421823600",
			"pretty": "8:00 AM CET on January 21, 2015",
			"civil": "8:00 AM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "AM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "30",
			"metric": "-1"
		},
		"dewpoint": {
			"english": "28",
			"metric": "-2"
		},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "41",
		"wspd": {
			"english": "6",
			"metric": "10"
		},
		"wdir": {
			"dir": "E",
			"degrees": "84"
		},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "92",
		"windchill": {
			"english": "24",
			"metric": "-4"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "24",
			"metric": "-4"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "5",
		"mslp": {
			"english": "29.88",
			"metric": "1012"
		}
	}, {
		"FCTTIME": {
			"hour": "9",
			"hour_padded": "09",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421827200",
			"pretty": "9:00 AM CET on January 21, 2015",
			"civil": "9:00 AM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "AM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "31",
			"metric": "-1"
		},
		"dewpoint": {
			"english": "29",
			"metric": "-2"
		},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "35",
		"wspd": {
			"english": "6",
			"metric": "10"
		},
		"wdir": {
			"dir": "E",
			"degrees": "84"
		},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "90",
		"windchill": {
			"english": "24",
			"metric": "-4"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "24",
			"metric": "-4"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "5",
		"mslp": {
			"english": "29.88",
			"metric": "1012"
		}
	}, {
		"FCTTIME": {
			"hour": "10",
			"hour_padded": "10",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421830800",
			"pretty": "10:00 AM CET on January 21, 2015",
			"civil": "10:00 AM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "AM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "33",
			"metric": "1"
		},
		"dewpoint": {
			"english": "29",
			"metric": "-2"
		},
		"condition": "Clear",
		"icon": "clear",
		"icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "23",
		"wspd": {
			"english": "7",
			"metric": "11"
		},
		"wdir": {
			"dir": "E",
			"degrees": "86"
		},
		"wx": "Mostly Sunny",
		"uvi": "0",
		"humidity": "85",
		"windchill": {
			"english": "28",
			"metric": "-2"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "28",
			"metric": "-2"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "5",
		"mslp": {
			"english": "29.88",
			"metric": "1012"
		}
	}, {
		"FCTTIME": {
			"hour": "11",
			"hour_padded": "11",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421834400",
			"pretty": "11:00 AM CET on January 21, 2015",
			"civil": "11:00 AM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "AM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "35",
			"metric": "2"
		},
		"dewpoint": {
			"english": "29",
			"metric": "-2"
		},
		"condition": "Clear",
		"icon": "clear",
		"icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "2",
		"wspd": {
			"english": "8",
			"metric": "13"
		},
		"wdir": {
			"dir": "E",
			"degrees": "87"
		},
		"wx": "Sunny",
		"uvi": "1",
		"humidity": "78",
		"windchill": {
			"english": "29",
			"metric": "-2"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "29",
			"metric": "-2"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "4",
		"mslp": {
			"english": "29.86",
			"metric": "1011"
		}
	}, {
		"FCTTIME": {
			"hour": "12",
			"hour_padded": "12",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421838000",
			"pretty": "12:00 PM CET on January 21, 2015",
			"civil": "12:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "37",
			"metric": "3"
		},
		"dewpoint": {
			"english": "29",
			"metric": "-2"
		},
		"condition": "Clear",
		"icon": "clear",
		"icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {
			"english": "9",
			"metric": "14"
		},
		"wdir": {
			"dir": "E",
			"degrees": "90"
		},
		"wx": "Sunny",
		"uvi": "1",
		"humidity": "72",
		"windchill": {
			"english": "31",
			"metric": "-1"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "31",
			"metric": "-1"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "3",
		"mslp": {
			"english": "29.84",
			"metric": "1011"
		}
	}, {
		"FCTTIME": {
			"hour": "13",
			"hour_padded": "13",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421841600",
			"pretty": "1:00 PM CET on January 21, 2015",
			"civil": "1:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "38",
			"metric": "3"
		},
		"dewpoint": {
			"english": "28",
			"metric": "-2"
		},
		"condition": "Clear",
		"icon": "clear",
		"icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "4",
		"wspd": {
			"english": "9",
			"metric": "14"
		},
		"wdir": {
			"dir": "E",
			"degrees": "93"
		},
		"wx": "Sunny",
		"uvi": "1",
		"humidity": "69",
		"windchill": {
			"english": "31",
			"metric": "-1"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "31",
			"metric": "-1"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "2",
		"mslp": {
			"english": "29.82",
			"metric": "1010"
		}
	}, {
		"FCTTIME": {
			"hour": "14",
			"hour_padded": "14",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421845200",
			"pretty": "2:00 PM CET on January 21, 2015",
			"civil": "2:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "38",
			"metric": "3"
		},
		"dewpoint": {
			"english": "28",
			"metric": "-2"
		},
		"condition": "Clear",
		"icon": "clear",
		"icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "16",
		"wspd": {
			"english": "9",
			"metric": "14"
		},
		"wdir": {
			"dir": "E",
			"degrees": "92"
		},
		"wx": "Sunny",
		"uvi": "1",
		"humidity": "67",
		"windchill": {
			"english": "31",
			"metric": "-1"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "31",
			"metric": "-1"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "2",
		"mslp": {
			"english": "29.81",
			"metric": "1009"
		}
	}, {
		"FCTTIME": {
			"hour": "15",
			"hour_padded": "15",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421848800",
			"pretty": "3:00 PM CET on January 21, 2015",
			"civil": "3:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "38",
			"metric": "3"
		},
		"dewpoint": {
			"english": "28",
			"metric": "-2"
		},
		"condition": "Clear",
		"icon": "clear",
		"icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "24",
		"wspd": {
			"english": "8",
			"metric": "13"
		},
		"wdir": {
			"dir": "E",
			"degrees": "90"
		},
		"wx": "Mostly Sunny",
		"uvi": "0",
		"humidity": "68",
		"windchill": {
			"english": "31",
			"metric": "-0"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "31",
			"metric": "-0"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "2",
		"mslp": {
			"english": "29.8",
			"metric": "1009"
		}
	}, {
		"FCTTIME": {
			"hour": "16",
			"hour_padded": "16",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421852400",
			"pretty": "4:00 PM CET on January 21, 2015",
			"civil": "4:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "37",
			"metric": "3"
		},
		"dewpoint": {
			"english": "28",
			"metric": "-2"
		},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "30",
		"wspd": {
			"english": "7",
			"metric": "11"
		},
		"wdir": {
			"dir": "E",
			"degrees": "86"
		},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "69",
		"windchill": {
			"english": "32",
			"metric": "0"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "32",
			"metric": "0"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "2",
		"mslp": {
			"english": "29.79",
			"metric": "1009"
		}
	}, {
		"FCTTIME": {
			"hour": "17",
			"hour_padded": "17",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421856000",
			"pretty": "5:00 PM CET on January 21, 2015",
			"civil": "5:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "35",
			"metric": "2"
		},
		"dewpoint": {
			"english": "28",
			"metric": "-2"
		},
		"condition": "Clear",
		"icon": "clear",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "28",
		"wspd": {
			"english": "8",
			"metric": "13"
		},
		"wdir": {
			"dir": "E",
			"degrees": "88"
		},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "75",
		"windchill": {
			"english": "29",
			"metric": "-2"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "29",
			"metric": "-2"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "3",
		"mslp": {
			"english": "29.79",
			"metric": "1009"
		}
	}, {
		"FCTTIME": {
			"hour": "18",
			"hour_padded": "18",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421859600",
			"pretty": "6:00 PM CET on January 21, 2015",
			"civil": "6:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "33",
			"metric": "1"
		},
		"dewpoint": {
			"english": "28",
			"metric": "-2"
		},
		"condition": "Clear",
		"icon": "clear",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "21",
		"wspd": {
			"english": "7",
			"metric": "11"
		},
		"wdir": {
			"dir": "E",
			"degrees": "86"
		},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "81",
		"windchill": {
			"english": "28",
			"metric": "-2"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "28",
			"metric": "-2"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "3",
		"mslp": {
			"english": "29.79",
			"metric": "1009"
		}
	}, {
		"FCTTIME": {
			"hour": "19",
			"hour_padded": "19",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421863200",
			"pretty": "7:00 PM CET on January 21, 2015",
			"civil": "7:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "31",
			"metric": "-1"
		},
		"dewpoint": {
			"english": "28",
			"metric": "-2"
		},
		"condition": "Clear",
		"icon": "clear",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "15",
		"wspd": {
			"english": "7",
			"metric": "11"
		},
		"wdir": {
			"dir": "E",
			"degrees": "85"
		},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "86",
		"windchill": {
			"english": "23",
			"metric": "-5"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "23",
			"metric": "-5"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "4",
		"mslp": {
			"english": "29.79",
			"metric": "1009"
		}
	}, {
		"FCTTIME": {
			"hour": "20",
			"hour_padded": "20",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421866800",
			"pretty": "8:00 PM CET on January 21, 2015",
			"civil": "8:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "30",
			"metric": "-1"
		},
		"dewpoint": {
			"english": "28",
			"metric": "-2"
		},
		"condition": "Clear",
		"icon": "clear",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "17",
		"wspd": {
			"english": "6",
			"metric": "10"
		},
		"wdir": {
			"dir": "E",
			"degrees": "86"
		},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "90",
		"windchill": {
			"english": "24",
			"metric": "-4"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "24",
			"metric": "-4"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "5",
		"mslp": {
			"english": "29.79",
			"metric": "1009"
		}
	}, {
		"FCTTIME": {
			"hour": "21",
			"hour_padded": "21",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421870400",
			"pretty": "9:00 PM CET on January 21, 2015",
			"civil": "9:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "30",
			"metric": "-1"
		},
		"dewpoint": {
			"english": "29",
			"metric": "-2"
		},
		"condition": "Clear",
		"icon": "clear",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "29",
		"wspd": {
			"english": "6",
			"metric": "10"
		},
		"wdir": {
			"dir": "E",
			"degrees": "85"
		},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "93",
		"windchill": {
			"english": "24",
			"metric": "-4"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "24",
			"metric": "-4"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "5",
		"mslp": {
			"english": "29.8",
			"metric": "1009"
		}
	}, {
		"FCTTIME": {
			"hour": "22",
			"hour_padded": "22",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421874000",
			"pretty": "10:00 PM CET on January 21, 2015",
			"civil": "10:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "30",
			"metric": "-1"
		},
		"dewpoint": {
			"english": "29",
			"metric": "-2"
		},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "51",
		"wspd": {
			"english": "6",
			"metric": "10"
		},
		"wdir": {
			"dir": "E",
			"degrees": "83"
		},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "93",
		"windchill": {
			"english": "24",
			"metric": "-4"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "24",
			"metric": "-4"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "6",
		"mslp": {
			"english": "29.79",
			"metric": "1009"
		}
	}, {
		"FCTTIME": {
			"hour": "23",
			"hour_padded": "23",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "21",
			"mday_padded": "21",
			"yday": "20",
			"isdst": "0",
			"epoch": "1421877600",
			"pretty": "11:00 PM CET on January 21, 2015",
			"civil": "11:00 PM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Wednesday",
			"weekday_name_night": "Wednesday Night",
			"weekday_name_abbrev": "Wed",
			"weekday_name_unlang": "Wednesday",
			"weekday_name_night_unlang": "Wednesday Night",
			"ampm": "PM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "30",
			"metric": "-1"
		},
		"dewpoint": {
			"english": "29",
			"metric": "-2"
		},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "60",
		"wspd": {
			"english": "5",
			"metric": "8"
		},
		"wdir": {
			"dir": "E",
			"degrees": "83"
		},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "95",
		"windchill": {
			"english": "25",
			"metric": "-4"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "25",
			"metric": "-4"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "6",
		"mslp": {
			"english": "29.79",
			"metric": "1009"
		}
	}, {
		"FCTTIME": {
			"hour": "0",
			"hour_padded": "00",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "22",
			"mday_padded": "22",
			"yday": "21",
			"isdst": "0",
			"epoch": "1421881200",
			"pretty": "12:00 AM CET on January 22, 2015",
			"civil": "12:00 AM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Thursday",
			"weekday_name_night": "Thursday Night",
			"weekday_name_abbrev": "Thu",
			"weekday_name_unlang": "Thursday",
			"weekday_name_night_unlang": "Thursday Night",
			"ampm": "AM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "30",
			"metric": "-1"
		},
		"dewpoint": {
			"english": "29",
			"metric": "-2"
		},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "68",
		"wspd": {
			"english": "5",
			"metric": "8"
		},
		"wdir": {
			"dir": "ENE",
			"degrees": "78"
		},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "97",
		"windchill": {
			"english": "25",
			"metric": "-4"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "25",
			"metric": "-4"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "6",
		"mslp": {
			"english": "29.79",
			"metric": "1009"
		}
	}, {
		"FCTTIME": {
			"hour": "1",
			"hour_padded": "01",
			"min": "00",
			"min_unpadded": "0",
			"sec": "0",
			"year": "2015",
			"mon": "1",
			"mon_padded": "01",
			"mon_abbrev": "Jan",
			"mday": "22",
			"mday_padded": "22",
			"yday": "21",
			"isdst": "0",
			"epoch": "1421884800",
			"pretty": "1:00 AM CET on January 22, 2015",
			"civil": "1:00 AM",
			"month_name": "January",
			"month_name_abbrev": "Jan",
			"weekday_name": "Thursday",
			"weekday_name_night": "Thursday Night",
			"weekday_name_abbrev": "Thu",
			"weekday_name_unlang": "Thursday",
			"weekday_name_night_unlang": "Thursday Night",
			"ampm": "AM",
			"tz": "",
			"age": "",
			"UTCDATE": ""
		},
		"temp": {
			"english": "30",
			"metric": "-1"
		},
		"dewpoint": {
			"english": "30",
			"metric": "-1"
		},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
		"fctcode": "3",
		"sky": "73",
		"wspd": {
			"english": "4",
			"metric": "6"
		},
		"wdir": {
			"dir": "ENE",
			"degrees": "73"
		},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "98",
		"windchill": {
			"english": "26",
			"metric": "-3"
		},
		"heatindex": {
			"english": "-9999",
			"metric": "-9999"
		},
		"feelslike": {
			"english": "26",
			"metric": "-3"
		},
		"qpf": {
			"english": "0.0",
			"metric": "0"
		},
		"snow": {
			"english": "0.0",
			"metric": "0"
		},
		"pop": "6",
		"mslp": {
			"english": "29.79",
			"metric": "1009"
		}
	}]
};

var data = {daily: daily, hourly: hourly};
module.exports = data;