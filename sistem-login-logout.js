// auth.js
const CLIENT_ID = '345806b1ad4b5782f9b0';
const REDIRECT_URI = 'https://iamyzddesign.github.io/id/';

const redirectToGitHub = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${"345806b1ad4b5782f9b0"}&redirect_uri=${"https://iamyzddesign.github.io/id/"}&scope=user`;
};

const handleLogout = () => {
    // Implementasikan logika logout di sini
    // Contoh: Hapus sesi atau token
    // ...

    // Setelah logout, sembunyikan dashboard dan tampilkan halaman awal
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
};

const isAuthenticated = () => {
    // Implementasikan logika pengecekan status login di sini
    // Contoh: Periksa apakah ada sesi atau token yang valid
    // ...

    // Return true jika pengguna sudah login, false jika tidak
    return false;
};


// app.js
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const homeDiv = document.getElementById('home');
const dashboardDiv = document.getElementById('dashboard');
const avatarImg = document.getElementById('avatar');
const usernameSpan = document.getElementById('username');

// Atur event listener untuk tombol login
loginBtn.addEventListener('click', redirectToGitHub);

// Atur event listener untuk tombol logout
logoutBtn.addEventListener('click', handleLogout);

// Tampilkan halaman awal atau dashboard berdasarkan status login
if (isAuthenticated()) {
    // Jika pengguna sudah login, tampilkan dashboard
    dashboardDiv.classList.remove('hidden');
    // Simulasikan data pengguna
    avatarImg.src = 'https://placekitten.com/100/100'; // Ganti dengan URL avatar pengguna
    usernameSpan.textContent = 'JohnDoe'; // Ganti dengan nama pengguna
} else {
    // Jika pengguna belum login, tampilkan halaman awal
    homeDiv.classList.remove('hidden');
}
