// HOME //
function redirectToPosters() {
    // Ambil nilai dari input pencarian
    var searchValue = document.getElementById("searchInput2").value.trim().toLowerCase();

    // Ubah spasi menjadi tanda penghubung untuk cocok dengan ID
    searchValue = searchValue.replace(/\s+/g, '/');

    // Redirect ke halaman posters.html dengan hash yang sesuai dengan ID elemen
    window.location.href = 'poster-categories.html#' + encodeURIComponent(searchValue);
}

// Fungsi untuk mendapatkan nilai query dari URL
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