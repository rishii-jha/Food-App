

let login = document.getElementById('login')

login.addEventListener('click',function(){
    window.location.href = 'login.html'
})

// script.js
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('.active');
});