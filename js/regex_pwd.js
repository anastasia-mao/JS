function regex_pwd(){

	x=prompt("Введите пароль: ");
	var pwd = /^[^\+-]+$/;
	var sym = /[^\+-]/g;
	
	var nums = /[0-9]/;
	var big = /[A-ZА-ЯЁ]/;
	var small = /[a-zа-яё]/;
	var rus = /[А-яёЁ]/;
	var eng = /[A-z]/;
	var spec = /[^A-zА-яёЁ0-9]/;
	
	var pwdArr = [];
	var grade = 0;
	if ( x.match(pwd) ){
		pwdArr=x.match(sym);
		if (pwdArr.length >= 12){
			grade+=2;
		}
		else if(pwdArr.length >= 8){
			grade+=1;
		}
		if (x.match(nums) && (x.match(big)||x.match(small)||x.match(spec))){grade+=1;} 
		if (x.match(big) && x.match(small)) {grade+=1;}
		if (x.match(rus) && x.match(eng)) {grade+=1;}
		if (x.match(spec) && (x.match(big)||x.match(small)||x.match(nums))) {grade+=1;}
		
		alert('grade: '+grade);
		switch (grade){
			case 0: 
				alert('Пароль никчёмен');
				break;
			case 1: 
				alert('Пароль чуть менее никчёмен');
				break;
			case 2: 
				alert('Очень слабый пароль');
				break;
			case 3: 
				alert('Слабый пароль');
				break;
			case 4: 
				alert('Нормальный пароль');
				break;
			case 5: 
				alert('Сложный пароль');
				break;
			case 6: 
				alert('Очень сложный пароль');
				break;
			default:
				break;
		}
	}
	else{
		alert('Пароль введен некорректно.');
	}
}