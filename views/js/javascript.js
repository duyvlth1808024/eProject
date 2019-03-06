// preloader

$(window).bind('load',function(){
			var preloader = new Nanobar({target: document.getElementById('preloader')});
				preloader.go(100);
		});