var arr=[];
var a=prompt('Введите длину массива');
a=parseInt(a);
lines='';
function recurfib(n){
	if(n==1) return 1;
	if(n==2) return 1;
return recurfib(n-1)+recurfib(n-2);
}
if (a<0) alert('Длина массива не может быть отрицательной!\nОбновите страницу и введите верную длину массива');
else if (a==0) alert('Числа Фибоначи: массив пустой');
	else{
		for (i=1; i<=a; i++){
			arr[i]=recurfib(i);
			if (i!=a) lines+=arr[i]+', ';
			else lines+=arr[i];
		}
		alert('Числа Фибоначи: '+lines);
	}
