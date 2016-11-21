c=true;
while(c==true){
	var a=prompt('Введите команду');
	switch(a){
		case 'start': alert('Начало'); break;
		case 'options': alert('Опции'); break;
		case 'exit': c=false; break;
		break;
		default: console.log('Команда не распознана'); break;
	} 
}