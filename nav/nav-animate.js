function toggleNav(id, id2, id3) {
		var x = document.getElementById(id);
		var y = document.getElementById(id2);
		var z = document.getElementById(id3);
		const notPhone = window.matchMedia('(min-width: 768px)');
		if (notPhone.matches) {
			if (x.style.display === "none") {
				x.style.display = null;
				z.style.display = null;
				showNav(x);
			} else {
				hideNav(x);
				sleep(220).then(() => {
					x.style.display = "none";
					z.style.display = "none";
				});
			}
		}
		else {
			if (y.style.display === "none") {
				y.style.display = null;
				showMini(y);
			} else {
				hideMini(y);
				sleep(220).then(() => {
					y.style.display = "none";
				});
			}
		}
	}

	function sleep(ms) {
		  return new Promise((resolve) => setTimeout(resolve, ms));
		}

	function hideNav(x) {
		const hudHide = [
			{transform: 'translate(0px, 0px)'},
			{transform: 'translate(0px, -5px)'},
			{transform: 'translate(0px, -15px)'},
			{transform: 'translate(0px, -30px)'},
			{transform: 'translate(0px, -50px)'},
			{transform: 'translate(0px, -50px)'}
		];
		const timing = {
				  duration: 240,
				  iterations: 1,
				}
		x.animate(hudHide, timing);
	}

	function showNav(x) {
		const hudHide = [
			{transform: 'translate(0px, -50px)'},
			{transform: 'translate(0px, -50px)'},
			{transform: 'translate(0px, -45px)'},
			{transform: 'translate(0px, -35px)'},
			{transform: 'translate(0px, -20px)'},
			{transform: 'translate(0px, 0px)'}
		];
		const timing = {
				  duration: 240,
				  iterations: 1,
				}
		x.animate(hudHide, timing);
	}

	function hideMini(x) {
		const hudHide = [
			{transform: 'translate(0px, 0px)'},
			{transform: 'translate(220px, 0px)'}
		];
		const timing = {
				  duration: 240,
				  iterations: 1,
				}
		x.animate(hudHide, timing);
	}

	function showMini(x) {
		const hudHide = [
			{transform: 'translate(220px, 0px)'},
			{transform: 'translate(0px, 0px)'}
		];
		const timing = {
				  duration: 240,
				  iterations: 1,
				}
		x.animate(hudHide, timing);
	}

	function toggleSub(id) {
		var x = document.getElementById(id);
		if (x.style.display === "none") {
			x.style.display = null;

		} else {
			x.style.display = "none";
		}
	}
