// SALE DESIGNS //
function redirectToSaleDesigns() {
    // Ambil nilai dari input pencarian
    var searchValue = document.getElementById("searchInput2").value.trim().toLowerCase();

    // Ubah spasi menjadi tanda penghubung untuk cocok dengan ID
    searchValue = searchValue.replace(/\s+/g, '-');

    // Redirect ke halaman posters.html dengan hash yang sesuai dengan ID elemen
    window.location.href = 'sale-designs-page1.html#' + encodeURIComponent(searchValue);
}

function redirectToSaleDesigns2() {
    // Ambil nilai dari input pencarian
    var searchValue = document.getElementById("searchInput2").value.trim().toLowerCase();

    // Ubah spasi menjadi tanda penghubung untuk cocok dengan ID
    searchValue = searchValue.replace(/\s+/g, '-');

    // Redirect ke halaman posters.html dengan hash yang sesuai dengan ID elemen
    window.location.href = 'sale-designs-page2.html#' + encodeURIComponent(searchValue);
}
// SALE DESIGNS //

// ADULT DESIGNS //
function redirectToAdultDesigns() {
    // Ambil nilai dari input pencarian
    var searchValue = document.getElementById("searchInput2").value.trim().toLowerCase();

    // Ubah spasi menjadi tanda penghubung untuk cocok dengan ID
    searchValue = searchValue.replace(/\s+/g, '-');

    // Redirect ke halaman posters.html dengan hash yang sesuai dengan ID elemen
    window.location.href = 'adult-designs-page1.html#' + encodeURIComponent(searchValue);
}
// ADULT DESIGNS //

// ALL AGES DESIGNS //
function redirectToAllAgesDesigns() {
    // Ambil nilai dari input pencarian
    var searchValue = document.getElementById("searchInput2").value.trim().toLowerCase();

    // Ubah spasi menjadi tanda penghubung untuk cocok dengan ID
    searchValue = searchValue.replace(/\s+/g, '-');

    // Redirect ke halaman posters.html dengan hash yang sesuai dengan ID elemen
    window.location.href = 'all-ages-designs-page1.html#' + encodeURIComponent(searchValue);
}
// ALL AGES DESIGNS //

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