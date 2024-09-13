// Menu Hamburger //
document.getElementById('menu-toggle').addEventListener('click', function () {
	var menuContent = document.getElementById('menu-content');
	menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
});

var submenuToggles = document.querySelectorAll('.submenu-toggle');

submenuToggles.forEach(function (toggle) {
	toggle.addEventListener('click', function (e) {
		e.preventDefault();
		var submenu = this.nextElementSibling;
		submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
	});
});

// Menu Hamburger //

var submenuToggles = document.querySelectorAll('.nama-second-navbar');

submenuToggles.forEach(function (toggle) {
	toggle.addEventListener('click', function (e) {
		e.preventDefault();
		var submenu = this.nextElementSibling;
		submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
	});
});

function showMenuCategory() {
	var x = document.getElementById('hamburger-size').innerHTML;
	console.log(x);
	if (x == "☰") {
		console.log("close");
		document.getElementById('hamburger-size').innerHTML = "Categories";
		document.getElementById('menu-size').style.display = "none";
	} else {
		console.log("hamburger-size");
		document.getElementById('hamburger-size').innerHTML = "☰";
		document.getElementById('menu-size').style.display = "block";
	}
}

function showMenuResolution() {
	var x = document.getElementById('hamburger-size').innerHTML;
	console.log(x);
	if (x == "☰") {
		console.log("close");
		document.getElementById('hamburger-size').innerHTML = "Resolution";
		document.getElementById('menu-size').style.display = "none";
	} else {
		console.log("hamburger-size");
		document.getElementById('hamburger-size').innerHTML = "☰";
		document.getElementById('menu-size').style.display = "block";
	}
}



function scrollToElement() {
	// Ambil ID dari URL hash
	var elementId = window.location.hash.substring(1);

	if (elementId) {
		// Temukan elemen dengan ID yang sesuai dan scroll ke sana
		var element = document.getElementById(elementId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
}

// Panggil fungsi scrollToElement saat halaman dimuat
window.onload = scrollToElement;