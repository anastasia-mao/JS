var users={
	admin: {name:'', surname:'', age:''}
	};
var security={
	admin: 'admin'
	};
function login (user, password) {
	if (user in security && password ==security[user]){
		console.log('Здравствуй, '+user);
	}
	else {
		console.log('Неверная пара логин-пароль');
	}
}
function reg (user, password){
	if (user in security){
		console.log ('Данное имя занято другим пользователем');
	}
	else {
		security[user]=password;
	}
}
function about (user, name, surname, age){
	if (user in security){
		users[user]={'name':name, 'surname':surname, 'age':age};
	}
	else {console.log('Данный пользователь не зарегестрирован')}
}
function seesecurity (user){
	if (user==security['admin']){
		for (key in security){
			console.log(key+':'+security[key]);
		}
	}
	else {
		console.log('У Вас нет прав доступа');
	}
}