var city=[];
var line='';
while ((x=prompt('Введите город'))!=''){
	city.push(x);
}
for (i=0; i<city.length; i++){
	if (i!=city.length-1) line+=city[i]+', ';
	else line+=city[i];
}
alert ('Города:\n'+line);