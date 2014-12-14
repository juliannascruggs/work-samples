//set up duration display format
var formatTime = function(duration) {
	duration = parseInt(duration);
	if(duration < 10){
		duration = "0:0"+duration;
	}else if(duration < 60){
		duration = "0:"+duration;
	}else {
		hour = duration / 60;
		hour = Math.floor(hour)
		minute = duration % 60;
		if(minute < 10){
			minute = "0"+minute;
		}
		duration = String(hour)+ ":" + String(minute);
	};
	return duration;
};

// pass the duration format to the duration ticker
var setDurationTicker = function() {
	var duration = $(".highlightDuration").attr('data-duration');
	duration = formatTime(duration);

	$(".durationTicker").html(duration);
	console.log('Duration ticker works!!');
};

//set up Mile display format
var formatMile = function(distance) {
	distance = parseInt(distance);
	if(distance < 10){
		distance = "0.0"+distance;
	}else if(distance < 100){
		distance = "0."+distance;
	}else {
		mile = distance / 100;
		mile = Math.floor(mile)
		decimal = distance % 100;
		if(decimal < 10){
			decimal = "0"+decimal;
		}
		distance = String(mile)+ "." + String(decimal);
	};
	return distance;
};

// pass the distance format to the distance ticker
var setDistanceTicker = function() {
	var distance = $(".highlightDistance").attr('data-distance');
	distance = formatMile(distance);

	$(".distanceTicker").html(distance);
	console.log('Distance ticker works!!');
};


$(document).ready(function(){
// create activity tray and fill it in with workout types
	var workouts = ["Run", "Jog", "Cycling", "Walk", "Elliptical", "Soccer", "Bootcamp", "Skiing", "Stretching", "Aerobics", "Yoga", "Weights", "Kettlebell", "Dance", "Ballet", "Kickboxing", "Kayaking", "Burpies", "Swim", "Paddleboard"];

	for (var a = 0; a < workouts.length; a++) {
		var type = workouts[a];
		$('.workout').append('<div class="activityTray" id="'+type+'" ><p>'+type+'</p></div>');

		// var label = $('<div class="activity '+type+'" ><p>'+type+'</p></div>');
		// $('.workout').append(label);
	};
	$('.Run').addClass('highlightActivity');

//create duration selector and fill it in with formatted values

	var durationRuler = new Array(120);
	console.log(durationRuler);


	for (var b = 0; b < durationRuler.length; b++) {
		console.log(durationRuler[b]);
		duration = formatTime(b);
		$('.duration').append('<div class="durationRuler" data-duration="'+b+'"><div class="tick"></div><p class="time">'+duration+'</p><div class="tick"></div></div>');
	};

//create distance selector and fill it in with formatted values

	var distanceRuler = new Array(120);
	console.log(distanceRuler);

	for (var c = 0; c < distanceRuler.length; c++) {
		console.log(distanceRuler[c]);
		distance = formatMile(c);
		$('.distance').append('<div class="distanceRuler" data-distance="'+c+'"><div class="tick"></div><p class="mile">'+distance+'</p><div class="tick"></div></div>');
	};

// not using this yet, it's to set a boolean for the ruler being zoomed or not
	var zoom = false;
	console.log('zoom 1 ' + zoom);

	$('.marker .button').click(function() {
		if (zoom === false) {
			$('.time').addClass('highlightActivity');
			zoom = true;
			console.log('zoom 2 ' + zoom);
			// for (var b = 0; b < segment.length; b++) {
			// 	console.log(segment[b]);
			// 	$('.duration').append('<div class="ruler"><div class="tick"></div><p class="time">'+segment+'</p><div class="tick"></div></div>');
			// };
		};	
	});
});
