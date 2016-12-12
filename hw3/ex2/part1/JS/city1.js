var n=prompt('Введите желаемое количество городов к заполнению');
n=parseInt(n);
var city=[];
var line='';
for (i=0;i<n;i++){
	city[i]=prompt('Введите название города. Осталось ввести '+(n-i));
	if (i!=n-1)line+=city[i]+', ';
	else line+=city[i];
}
alert ('Города:\n'+line);