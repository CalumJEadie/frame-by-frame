var frameByFrame = function() {
	var fbf = {};
	fbf.FRAMES_PER_SECOND = 25;
	fbf.FRAMESKIP = 1;
	fbf.PLAYER_ID = "movie_player";

	var player = document.getElementById(fbf.PLAYER_ID);
	var header = document.getElementById("watch-header");

	fbf.prevFrame = function() {
		// Based on YouTube enhancer userscript, http://userscripts.org/scripts/show/33042.
		player.pauseVideo();
		player.seekBy(-fbf.FRAMESKIP * (1/fbf.FRAMES_PER_SECOND));
	}

	fbf.nextFrame = function() {
		// Based on YouTube enhancer userscript, http://userscripts.org/scripts/show/33042.
		player.pauseVideo();
		player.seekBy(fbf.FRAMESKIP * (1/fbf.FRAMES_PER_SECOND));
	}

	fbf.injectControls = function() {
		var controls_html = "<i class=\"icon icon-to-start\"></i><i class=\"icon icon-to-end\"></i>";
		control_bar = document.getElementsByClassName("ytp-chrome-controls")[0];

		var newButtons = document.createElement('div');
		newButtons.innerHTML = controls_html;
		newButtons.style.float = 'left';
		newButtons.style['margin-top'] = '2px';

		var child = document.getElementsByClassName('ytp-volume-hover-area')[0];

		control_bar.insertBefore(newButtons, child);

		var forward_button = document.getElementsByClassName("icon-to-end")[0];
		forward_button.addEventListener('click', function() {
			fbf.nextFrame();
		});

		var back_button = document.getElementsByClassName("icon-to-start")[0];
		back_button.addEventListener('click', function() {
			fbf.prevFrame();
		});
	}

	if (document.getElementsByClassName("ytp-chrome-controls")[0]) {
		fbf.injectControls();
	};
}

window.onload = frameByFrame;
