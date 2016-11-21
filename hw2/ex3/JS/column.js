a=prompt('Введите начальное число');
b=prompt('Введите конечное число');
n=prompt('Введите количество колонок');
a=parseInt(a);
b=parseInt(b);
n=parseInt(n);
c='';
j=1;
for (i=a; i<b+1; i++){
	c+=i.toString()+'\t';
	if (j%n==0){
		c+='\n';
	}
	j++;
}
alert(c);