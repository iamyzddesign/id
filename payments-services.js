function sendMessageServices(product) {
    var phoneNumber = '6281218141079';
    var message = "Helo, saya tertarik dengan jasa design; " + product + ". Mohon informasinya";
    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url);
  }