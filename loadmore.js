var itemsToShow = 3; // Jumlah item yang akan ditampilkan setiap kali tombol "Load More" diklik
var items = document.getElementsByClassName('item');
var loadMoreButton = document.getElementById('load-more');

function showItems() {
  for (var i = 0; i < itemsToShow; i++) {
    if (items[i]) {
      items[i].style.display = 'block';
    }
  }

  // Mengubah jumlah item yang akan ditampilkan
  itemsToShow += 3;

  // Menyembunyikan tombol "Load More" jika sudah tidak ada item lagi
  if (itemsToShow >= items.length) {
    loadMoreButton.style.display = 'none';
  }
}

loadMoreButton.addEventListener('click', showItems);