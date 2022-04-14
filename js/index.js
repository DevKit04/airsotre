let sideMenu = document.querySelector('.sideMenu');
let sideMenuBtn = document.querySelector('.sideMenuBtn');
let closeMenu = document.querySelector('.closeMenu');
let createAccount = document.querySelector('.createAccount');
let apps = document.querySelector('.apps');


sideMenuBtn.onclick = function(){

	sideMenu.classList.toggle('menuOpen');

}

closeMenu.onclick = function(){

	sideMenu.classList.remove('menuOpen');

}

createAccount.onclick = function(){

	document.location.href = './auth/form.html';

}

for(let i = 0; i < 16; i++){

	let app = document.createElement('div');

	app.classList.add('app');

	apps.appendChild(app);

}