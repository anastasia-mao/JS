a=prompt('Введите чило а');
b=prompt('Введите чило b');
a=parseFloat(a);
b=parseFloat(b);
alert (
	'a = ' + (a) +
	'\nb = ' + (b) +
	'\nсреднее арифмитическое квадратов a и b = ' + ((Math.pow(a,2) + Math.pow(a,2))/2) +
	'\nсреднее арифметическое модулей a и b = ' + ((Math.abs(a) + Math.abs(b))/2)
	   );
