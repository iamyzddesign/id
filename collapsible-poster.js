// Tunggu sampai seluruh konten halaman sudah dimuat
document.addEventListener("DOMContentLoaded", function () {
    // Dapatkan semua elemen dengan kelas 'nama-nav-end'
    var menuItems = document.querySelectorAll('.nama-nav-end');

    // Tambahkan event listener untuk setiap elemen menu
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function (event) {
            // Mencegah link default agar tidak melakukan navigasi
            event.preventDefault();

            // Dapatkan href dari menu yang diklik
            var targetId = this.querySelector('a').getAttribute('href');

            // Cari elemen dengan ID yang sesuai
            var targetContent = document.querySelector(targetId);

            // Jika elemen ditemukan, toggle tampil/tersembunyinya elemen tersebut
            if (targetContent) {
                if (targetContent.style.display === 'none' || targetContent.style.display === '') {
                    // Jika elemen tersembunyi, tampilkan elemen tersebut
                    targetContent.style.display = 'block';
                } else {
                    // Jika elemen ditampilkan, sembunyikan elemen tersebut
                    targetContent.style.display = 'none';
                }
            }
        });
    });
});