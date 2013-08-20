function spawn(sources, ready) {
	var count = sources.length;

	for (var iter = 0; iter < sources.length; ++iter) {
		var script = document.createElement('script');
		script.type = 'application/javascript';
		script.src = sources[iter];
		script.async = true;
		script.onload = ready && function() {
			--count || ready();
		};

		document.getElementsByTagName('head')[0].appendChild(script);
	}
}

function random() {
	spawn(['//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js'], function() {
		$.getJSON('/comics.json', function(comics) {
			location.href = comics[Math.floor(Math.random() * comics.length)];
		});
	});
}
