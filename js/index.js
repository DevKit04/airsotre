let sideMenu = document.querySelector('.sideMenu');

let sideMenuBtn = document.querySelector('.sideMenuBtn');

let closeMenu = document.querySelector('.closeMenu');

let createAccount = document.querySelector('.createAccount');


sideMenuBtn.onclick = function(){

	sideMenu.classList.toggle('menuOpen');

}

closeMenu.onclick = function(){

	sideMenu.classList.remove('menuOpen');

}

createAccount.onclick = function(){

	document.location.href = './auth/form.html';

}