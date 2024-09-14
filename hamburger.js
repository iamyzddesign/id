// Menu Hamburger //
document.getElementById('menu-toggle').addEventListener('click', function () {
	var menuContent = document.getElementById('menu-content');
	var overlay = document.getElementById('overlay');
	if (menuContent.style.display === 'block') {
		closeMenu();
	} else {
		openMenu();
	}
});

function openMenu() {
	var menuContent = document.getElementById('menu-content');
	var overlay = document.getElementById('overlay');
	menuContent.style.display = 'block';
	menuContent.style.left = '0'; // Menu muncul dari kiri
	overlay.style.display = 'block'; // Tampilkan overlay
	document.body.style.overflow = 'hidden'; // Mencegah scrolling saat menu terbuka

	// Tambahkan event listener untuk klik di luar menu
	document.addEventListener('click', outsideClickListener);
}

function closeMenu() {
	var menuContent = document.getElementById('menu-content');
	var overlay = document.getElementById('overlay');
	menuContent.style.left = '-250px'; // Menu keluar ke kiri
	setTimeout(function () {
		menuContent.style.display = 'none';
		overlay.style.display = 'none'; // Sembunyikan overlay
	}, 300); // Menghilangkan menu setelah animasi selesai
	document.body.style.overflow = ''; // Izinkan scrolling lagi

	// Hapus event listener setelah menu ditutup
	//document.removeEventListener('click', outsideClickListener);
}

// Fungsi untuk menutup menu saat klik di luar area menu
function outsideClickListener(event) {
	var menuContent = document.getElementById('menu-content');
	var menuToggle = document.getElementById('menu-toggle');

	if (!menuContent.contains(event.target) && !menuToggle.contains(event.target)) {
		closeMenu();
	}
}

// Submenu Toggle
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