var c=true;
while (c==true){
	a=prompt('Введите чило а');
	b=prompt('Введите чило b');
	a=parseFloat(a);
	b=parseFloat(b);
	if ((a!=0 && b!=0)&&(!isNaN(a)&&!isNaN(b))){
		alert (
			'a =' + a +
			'\nb =' + b +
			'\na + b = ' + (a+b) +
			'\na - b = ' + (a-b) +
			'\na * b = ' + (a*b) +
			'\na / b = ' + (a/b));
		c=false;
		}
	else {
		alert ('Введеные данные не верны. Ввидите согласно условию задачи!');
	}
}
