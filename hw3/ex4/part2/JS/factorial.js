var a=prompt('Введите число');
a=parseInt(a);
/*f=1;
for (i=2; i<=a; i++){
	f*=i;
}
alert('Факториал числа'+a+' = '+f);*/

//вариант 2
function recurfac(n){
	if(n==1) return 1;
return n*recurfac(n-1);
}
alert('Факториал числа'+a+' = '+recurfac(a));