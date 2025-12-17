const correctUsername = '9071';
const correctPassword = '12345';

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('errorMsg');
    
    if (username === correctUsername && password === correctPassword) {
        // Masuk ke halaman kedua
        document.getElementById('login').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        showSection('pengertian');
        errorMsg.style.display = 'none';
        alert('Login berhasil! Selamat datang di halaman kedua.');
    } else {
        errorMsg.style.display = 'block';
    }
});

function toggleMenu() {
    const menu = document.getElementById('menuDropdown');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function goToHome() {
    // Kembali ke halaman awal (login)
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('menuDropdown').style.display = 'none';
}

function logout() {
    // Logout dan kembali ke halaman awal
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('menuDropdown').style.display = 'none';
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('errorMsg').style.display = 'none';
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}
