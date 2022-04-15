let submit = document.querySelector('.submit');

let form = document.querySelector('.form');

function showMessage(text){

	let messageBox = document.querySelector('.messageBox');

	messageBox.textContent = text;

	for(let i = 1; i <= 10; i++){
		
		setTimeout(function(){

			messageBox.style.opacity = i / 10;
			
		},i*25);

	}

	setTimeout(function(){

		for(let j = 1; j <= 10; j++){

			setTimeout(function(){

				messageBox.style.opacity =  1 - j / 10;

			},j*25);

		}

	},1500)

}

function validateForm(){

	let name = document.querySelector('.name');
	let surname = document.querySelector('.surname');
	let login = document.querySelector('.login');
	let password = document.querySelector('.password');
	let errors = 0;

	if(name.value.length == 0){
		showMessage('Введите имя',2000)
		errors++;
	}

	if(surname.value.length == 0){
		showMessage('Введите фамилию',2000)
		errors++;
	}

	if(login.value.length == 0){
		showMessage('Введите логин',2000)
		errors++;
	}

	if(password.value.length == 0){
		showMessage('Введите пароль',2000)
		errors++;
	}

	if(errors == 0){
		form.submit()
	}

}

submit.onclick = validateForm;

