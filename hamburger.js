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



// FEATURED & RECOMMENDED //
// Menangani setiap container yang memiliki .featured dan .thumbnails
document.querySelectorAll('.container-newreleases-desktop').forEach(container => {
	const bannerImage = container.querySelector('.featured img'); // Ambil gambar dari .featured dalam container tersebut
	const defaultBannerSrc = bannerImage.src; // Simpan src gambar default

	// Tambahkan event listener pada setiap img di dalam .thumbnails dalam container tersebut
	container.querySelectorAll('.thumbnails img').forEach(img => {
		img.addEventListener('mouseover', function () {
			bannerImage.src = this.src; // Ganti gambar banner dengan thumbnail yang di-hover
		});

		img.addEventListener('mouseout', function () {
			bannerImage.src = defaultBannerSrc; // Kembalikan gambar banner ke default
		});
	});
});



// HOVER PICTURE/CARD //
// Special Offers
const specialoffersItems = document.querySelectorAll('.card-specialoffers');

specialoffersItems.forEach((specialoffersItem) => {
	const hoverCard = specialoffersItem.querySelector('.hover-card-top');

	specialoffersItem.addEventListener('mouseenter', () => {
		hoverCard.style.display = 'block'; // Tampilkan hover card saat di-hover
		startSlideShow(hoverCard); // Jalankan slideshow di hover card
	});

	specialoffersItem.addEventListener('mouseleave', () => {
		hoverCard.style.display = 'none'; // Sembunyikan hover card ketika tidak di-hover
	});
});

const specialoffers2Items = document.querySelectorAll('.card-specialoffers');

specialoffers2Items.forEach((specialoffers2Item) => {
	const hoverCard = specialoffers2Item.querySelector('.hover-card-bottom');

	specialoffers2Item.addEventListener('mouseenter', () => {
		hoverCard.style.display = 'block'; // Tampilkan hover card saat di-hover
		startSlideShow(hoverCard); // Jalankan slideshow di hover card
	});

	specialoffers2Item.addEventListener('mouseleave', () => {
		hoverCard.style.display = 'none'; // Sembunyikan hover card ketika tidak di-hover
	});
});

const specialofferssingleItems = document.querySelectorAll('.card-specialoffers-single');

specialofferssingleItems.forEach((specialofferssingleItem) => {
	const hoverCard = specialofferssingleItem.querySelector('.hover-card-top');

	specialofferssingleItem.addEventListener('mouseenter', () => {
		hoverCard.style.display = 'block'; // Tampilkan hover card saat di-hover
		startSlideShow(hoverCard); // Jalankan slideshow di hover card
	});

	specialofferssingleItem.addEventListener('mouseleave', () => {
		hoverCard.style.display = 'none'; // Sembunyikan hover card ketika tidak di-hover
	});
});

const updatesandoffersItems = document.querySelectorAll('.card-updatesandoffers');

updatesandoffersItems.forEach((updatesandoffersItem) => {
	const hoverCard = updatesandoffersItem.querySelector('.hover-card');

	updatesandoffersItem.addEventListener('mouseenter', () => {
		hoverCard.style.display = 'block'; // Tampilkan hover card saat di-hover
		startSlideShow(hoverCard); // Jalankan slideshow di hover card
	});

	updatesandoffersItem.addEventListener('mouseleave', () => {
		hoverCard.style.display = 'none'; // Sembunyikan hover card ketika tidak di-hover
	});
});

// Slideshow Logic
function startSlideShow(hoverCard) {
	var slideIndex = 0;
	var slides = hoverCard.getElementsByClassName("slide");

	function showSlides() {
		// Sembunyikan semua slide
		for (var i = 0; i < slides.length; i++) {
			slides[i].classList.remove("active-slide");
		}

		// Tampilkan slide aktif
		slides[slideIndex].classList.add("active-slide");

		// Geser ke slide berikutnya
		slideIndex++;
		if (slideIndex >= slides.length) {
			slideIndex = 0;
		}

		// Jalankan lagi fungsi setelah 2 detik
		setTimeout(showSlides, 4000); // Ganti slide setiap 2 detik
	}

	// Mulai slideshow
	showSlides();
}