var options = {};
var langArr = [
	["Afrikaans", "AF"],
	["Albanian", "AL"],
	["Arabic", "AR"],
	["Armenian", "HY"],
	["Azerbaijani", "AZ"],
	["Basque", "EU"],
	["Belarusian", "BY"],
	["Bulgarian", "BU"],
	["British English", "LI"],
	["Burmese", "MY"],
	["Catalan", "CA"],
	["Chinese - Simplified", "CN"],
	["Chinese - Traditional", "TW"],
	["Croatian", "CR"],
	["Czech", "CZ"],
	["Danish", "DK"],
	["Dhivehi", "DV"],
	["Dutch", "NL"],
	["English", "EN"],
	["Esperanto", "EO"],
	["Estonian", "ET"],
	["Farsi", "FA"],
	["Finnish", "FI"],
	["French", "FR"],
	["French Canadian", "FC"],
	["Galician", "GZ"],
	["German", "DL"],
	["Georgian", "KA"],
	["Greek", "GR"],
	["Gujarati", "GU"],
	["Haitian Creole", "HT"],
	["Hebrew", "IL"],
	["Hindi", "HI"],
	["Hungarian", "HU"],
	["Icelandic", "IS"],
	["Ido", "IO"],
	["Indonesian", "ID"],
	["Irish Gaelic", "IR"],
	["Italian", "IT"],
	["Japanese", "JP"],
	["Javanese", "JW"],
	["Khmer", "KM"],
	["Korean", "KR"],
	["Kurdish", "KU"],
	["Latin", "LA"],
	["Latvian", "LV"],
	["Lithuanian", "LT"],
	["Low German", "ND"],
	["Macedonian", "MK"],
	["Maltese", "MT"],
	["Mandinka", "GM"],
	["Maori", "MI"],
	["Marathi", "MR"],
	["Mongolian", "MN"],
	["Norwegian", "NO"],
	["Occitan", "OC"],
	["Pashto", "PS"],
	["Plautdietsch", "GN"],
	["Polish", "PL"],
	["Portuguese", "BR"],
	["Punjabi", "PA"],
	["Romanian", "RO"],
	["Russian", "RU"],
	["Serbian", "SR"],
	["Slovak", "SK"],
	["Slovenian", "SL"],
	["Spanish", "SP"],
	["Swahili", "SI"],
	["Swedish", "SW"],
	["Swiss", "CH"],
	["Tagalog", "TL"],
	["Tatarish", "TT"],
	["Thai", "TH"],
	["Turkish", "TR"],
	["Turkmen", "TK"],
	["Ukrainian", "UA"],
	["Uzbek", "UZ"],
	["Vietnamese", "VU"],
	["Welsh", "CY"],
	["Wolof", "SN"],
	["Yiddish - transliterated", "JI"],
	["Yiddish - unicode", "YI"]
];

var addCity = function(newCityId, newCityName, remove) {
	if (remove) {
		$("#found" + newCityId).fadeOut('slow', function() {
			$("#found" + newCityId).remove();
		});
		$('#foundCityList').listview('refresh');
	}
	var delCityFn = "javascript:removeCity('" + newCityId + "');";
	var newCityItem = '<li id="' + newCityId + '"><a href="#"><span class="ui-icon-bars ui-btn-icon-left" style="position:relative;" />' + newCityName + '<//a><a href="' + delCityFn + '"<//a><//li>';
	$('#storedCityList').append(newCityItem);
	$('#storedCityList').listview('refresh');
	if (!$('#storedCityDiv').is(':visible')) {
		$('#storedCityDiv').fadeIn('slow');
	}
};

var removeCity = function(item, transition) {
	$("#" + item).fadeOut("slow", function() {
		$("#" + item).remove();
		$("#storedCityList").listview("refresh");
		if ($('#storedCityList').children().length === 0) {
			$('#storedCityDiv').hide();
		}
	});
};

var cityResultCallback = function(data) {
	var tempCities = [];
	$('#storedCityList').children().each(function(i, val) {
		tempCities.push(val.id);
	});
	if (data.RESULTS.length > 1) {
		$('#foundCityList').empty();
		$.each(data.RESULTS, function(i, cityDetails) {
			if (cityDetails.zmw) {
				var cId = encodeCId(cityDetails.zmw);
				var cityItem = '';
				if (tempCities.indexOf(cId) < 1) {
					var addCityFn = "javascript:addCity('" + cId + "','" + cityDetails.name + "', 'true');";
					cityItem = '<li id="found' + cId + '"><a href="#">' + cityDetails.name + '<//a><a href="' + addCityFn + '"<//a><//li>';
				}
				$('#foundCityList').append(cityItem);
			}
		});
		$('#foundCityList').listview('refresh');
		$('#foundCityDiv label').html('Found ' + data.RESULTS.length + ' cities starting with "' + options.serachCityValue + '".<br />Please select one to add to stored cities.');
		$('#foundCityDiv').show();
		$('#foundNoCityDiv').hide();
		$('#foundOneCityDiv').hide();
	} else if (data.RESULTS.length == 1) {
		var cId = encodeCId(data.RESULTS[0].zmw);
		if (tempCities.indexOf(cId) < 1) {
			addCity(cId, data.RESULTS[0].name);
			$('#foundOneCityDiv').html("Added '" + data.RESULTS[0].name + "'.");

		} else {
			$('#foundOneCityDiv').html("'" + data.RESULTS[0].name + "' already in stored city list.");
		}
		$('#foundOneCityDiv').show();
		$('#foundCityDiv').hide();
		$('#foundNoCityDiv').hide();
	} else {
		$('#foundOneCityDiv').hide();
		$('#foundCityDiv').hide();
		$('#foundNoCityDiv').html("<b>No city found starting with '" + options.serachCityValue + "'! Please check your spelling.<//b>");
		$('#foundNoCityDiv').show();
	}
};

function encodeCId(id) {
	return 'id' + id.replace(/\./g, "-");
}

function decodeCId(id) {
	return id.substring(2).replace(/-/g, ".");
}

$(document).ajaxStart(function() {
	$.mobile.loading('show');
});

$(document).ajaxStop(function() {
	$.mobile.loading('hide');
});

$(document).bind('pageinit', function() {
	$("#storedCityList").sortable();
	$("#storedCityList").disableSelection();
	$("#storedCityList").bind("sortstop", function(event, ui) {
		$('#storedCityList').listview('refresh');
	});

	var searching = null;
	$("#autocomplete").on("filterablebeforefilter", function(e, data) {
		if (searching) {
			clearTimeout(searching);
		}
		options.serachCityValue = $(data.input).val();
		if (options.serachCityValue && options.serachCityValue.length > 2) {
			searching = setTimeout(function() {
				$(this).html("<li><div class='ui-loader'><span class='ui-icon ui-icon-loading'><//span><//div><//li>");
				var query = {
					'format': 'JSON',
					'cb': 'cityResultCallback',
					'query': options.serachCityValue.toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue"),
					'h': '0'
				};

				$.ajax({
					url: "https://autocomplete.wunderground.com/aq",
					dataType: "jsonp",
					data: query
				});
			}, 500);
		}
	});
});

function getQueryParam(variable, default_) {
	var vars = decodeURIComponent(location.href).split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		if (pair[0] == variable)
			return decodeURIComponent(pair[1]);
	}
	return default_ || false;
}

function saveOptions() {
	//Add all textual values
	$('textarea, select, [type="hidden"], [type="password"], [type="text"], [type="number"]').each(function() {
		options[$(this).attr('id')] = $(this).val();
	});
	//Add all checkbox type values
	$('[type="radio"], [type="checkbox"]').each(function() {
		options[$(this).attr('id')] = $(this).is(':checked');
	});
	options.cities = [];
	$('#storedCityList').children().each(function(i, val) {
		options.cities.push([decodeCId(val.id), val.textContent]);
	});
	var location = encodeURIComponent(JSON.stringify(options));
	var return_to = getQueryParam('return_to', 'pebblejs://close#');
	document.location = return_to + location;
}

$().ready(function() {
	for (var i in langArr) {
		document.getElementById("lang").add(new Option(langArr[i][0], langArr[i][1]));
	}
	$('.noDefaultAction').on('keydown', function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
			return false;
		}
	});
	//hide storedCityList in case it is empty
	$('#storedCityDiv').hide();
	$('#foundCityDiv').hide();
	$('#foundNoCityDiv').hide();

	$('.ui-input-clear').on('tap', function() {
		$('#foundCityList').empty();
		$('#foundCityDiv').hide();
	});

	$('#sosTitle').keyup(function() {
		$('#prevSosTitle').html($('#sosTitle').val());
	});

	$('#sosText').keyup(function(event) {
		$('#prevSosText').html($('#sosText').val());
	});

	var callerUrl = decodeURIComponent(location.href).split('&')[0].split('https://rawgit.com/europayer/pebble/master/')[1];
	alert((callerUrl.indexOf('configuration.html?') > -1) + ' = ' + callerUrl);
	if(callerUrl.indexOf('configuration.html?') > -1){
		callerUrl = callerUrl.split('?')[1];
		alert(callerUrl);
		callerUrl = callerUrl.split('#')[0];
		alert(callerUrl);
	}
	var obj = jQuery.parseJSON(callerUrl);
	alert(obj + ' = ' + callerUrl);
	var titleFound = false, textFound = false;
	for (var key in obj) {
		alert(key + ' - ' + obj);
		var el = $("#" + [key]);
		var val = obj[key];
		if (el.is("select")) {
			el.val(val);
			el.selectmenu("refresh");
		} else if (el.attr("type") === "radio") {
			el.prop("checked", val).checkboxradio("refresh");
		} else if (key === 'cities' && val.length > 0) {
			$.each(val, function(i, arrVal) {
				var cId = arrVal[0];
				var cName = arrVal[1];
				addCity(encodeCId(cId), cName);
			});
			$('#storedCityList').show();
		} else {
			el.val(val);
		}
		if (key === 'sosTitle' && val) {
			titleFound = true;
		}
		if (key === 'sosText' && val) {
			textFound = true;
		}
		$('#sosTitle').keyup();
		$('#sosText').keyup();
		$('#storedCityList').listview('refresh');
	}
	if (!titleFound) {
		$('#prevSosTitle').html('Emergency Info:');
	}
	if (!textFound) {
		$('#prevSosText').html('Please contact the following Number: xxx-xxxxxxx');
	}
});
