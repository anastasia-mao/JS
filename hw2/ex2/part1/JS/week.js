var a=prompt('Введите целое число от 1 до 7');
a=parseInt(a);
b='';
if (a==6||a==7){b+='Ура! ';}
switch(a){
	case 1: b+='Понедельник'; break;
	case 2: b+='Вторник'; break;
	case 3: b+='Среда'; break;
	case 4: b+='Четверг'; break;
	case 5: b+='Пятница'; break;
	case 6: b+='Суббота'; break;
	case 7: b+='Воскресенье'; break;
	break;
	default: console.log('Нужно ввести целое число от 1 до 5!\nВы ввели '+a); break;
} 
console.log(b);