var arr=[];
var a=prompt('Введите длину массива');
a=parseInt(a);
arr[0]=1;
arr[1]=1;
lines='1,1,';
for (i=2; i<a; i++){
	arr[i]=arr[i-1]+arr[i-2];
	lines+=arr[i]+',';
}
alert('Числа Фибоначи'+lines);

/* Вариант 2
lines='';
function recurfib(n){
	if(n==1) return 1;
	if(n==2) return 1;
return recurfib(n-1)+recurfib(n-2);
}
for (i=1; i<=a; i++){
	arr[i]=recurfib(i);
	lines+=arr[i]+',';
}
alert('Числа Фибоначи'+lines);*/

