<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="../css/connect.css">
	<title>Document</title>
</head>
<body>

	<div class="container">

	<?php

		$connect = mysqli_connect("127.0.0.1","root","root","airstore");

		$name = $_POST['name'];

		$surname = $_POST['surname'];

		$login = $_POST['login'];

		$password = $_POST['password'];

		mysqli_query($connect, "INSERT INTO users(name,surname,login,paswrd) VALUES ('$name', '$surname', '$login', '$password')");

	?>

	<h1 class="message">Регистрация прошла успешно</h1>

	</div>
	
</body>
</html>
