// пистолет
/*var n=prompt('Какой размер у обоймы?');
n=parseInt(n);
var arr=[];
var x='';
while (x==''){
x=prompt('Нажми ок!');
	//Перезарядка
	if (arr.length==0){
		for (i=0;i<n;i++){
			arr.push('патрон');
		}
		alert('Перезаряжено. В абойме '+arr.length+' патронов');
		continue;
	}
	//Выстрел
	if (arr.length!=0){
		arr.pop();
		alert('Выстрел. Осталось '+arr.length+' патронов');
		continue;
	}
}*/

//автомат
var n=prompt('Какой размер у обоймы автомата?');
n=parseInt(n);
	var arr=[];
	var x='';
	while (x==''){
	x=prompt('Нажми ок!');
		//Перезарядка
		if (arr.length==0){
			for (i=0;i<n;i++){
				arr.push('патрон');
			}
			alert('Перезаряжено. В абойме '+arr.length+' патронов');
			continue;
		}
		//Выстрел
		if (arr.length!=0){
			if (arr.length>=3){
				arr.pop();
				arr.pop();
				arr.pop();
				console.log('Вылетело 3 патрона');
			}
			else {
				for (i=0;i<arr.length+1;i++){
					arr.pop();
				}
				console.log('Вылетело '+i+' патрона');
			}
			alert('Выстрел. Осталось '+arr.length+' патронов');
			continue;
		}
	}